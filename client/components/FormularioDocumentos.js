import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState, useCallback } from 'react'
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import CalendarOneDay from './CalendarOneDay'
import Maps from './Maps'
import { getUser } from '../redux/actions/users'
import { setSport } from '../redux/slices/sports.slices'
import { createEvent, getAllEvents, updateEvent } from '../redux/actions/events'
import { setDateStart, setDateSuscription } from '../redux/slices/events.slices'
import CustomAlert from './CustomAlert'
// import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../utils/apiBackend'
import { useTranslation } from 'react-i18next'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'

const FomularioDocumentos = ({
  onEditMode,
  eventData,
  formattedEventData,
  setEventData
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { dateStart, dateSuscription } = useSelector((state) => state.events)
  const { sport } = useSelector((state) => state.sports)
  const { user } = useSelector((state) => state.users)
  const { t } = useTranslation()
  const [calendar, setCalendar] = useState(null)
  const [calendarInscription, setCalendarInscription] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageRule, setSelectedImageRule] = useState(null)
  const [loading, setLoading] = useState(false)

  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [sportsModal, setSportsModal] = useState(false)
  const [category, setCategory] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [typeDoc, setTypeDoc] = useState('')
  const [showError, setShowError] = useState('')

  console.log(`${Math.floor(Math.random() * 10000000)}PAY`)

  const [event, setEvent] = useState({
    terminal: 73081,
    sepaProviderId: 973,
    merchantCode: 'r7fexfdk',
    merchantCustomerId: `${Math.floor(Math.random() * 10000000)}PAY`,
    merchantCustomerIban: '',
    name: '',
    fileContent: '',
    documentType: 1
  })

  const handleFilePick = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'] // Permitir PDF e imágenes
      })
      console.log(file.assets[0].uri, 'fileeeeeeeeeee')
      //   const base64String = await FileUtility.readFileAsBase64(file.uri)
      const base64String = await FileSystem.readAsStringAsync(
        file.assets[0].uri,
        {
          encoding: 'base64' // Especificar la codificación Base64
        }
      )
      // Ahora puedes utilizar la cadena Base64
      //   console.log(base64String, '64-----------------------------------')

      setEvent((prev) => {
        return {
          ...prev,
          fileContent: base64String
        }
      })
      setSelectedFile(file)
    } catch (error) {
      console.error('Error picking file:', error)
      Alert.alert('Error', 'Failed to pick a file')
    }
  }

  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    dispatch(getUser(user.id))
  }, [])

  const [selectedFile, setSelectedFile] = useState(null)

  const onCloseModalSports = () => {
    setSportsModal(false)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
    navigation.goBack()
    clearRedux()
  }

  const onValuesEvent = (field, value) => {
    if (field === 'price') {
      // Actualiza temporalmente el valor del precio
      setEvent((prevState) => ({
        ...prevState,
        price: value // Sin el símbolo del euro
      }))
    } else {
      // Actualiza los otros campos del evento
      setEvent((prevState) => ({
        ...prevState,
        [field]: value
      }))
    }
  }

  const clearRedux = () => {
    dispatch(setSport({}))
    dispatch(setDateStart(''))
    dispatch(setDateSuscription(''))
  }

  const closeCalendar = () => {
    setCalendar(false)
  }

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])

  const onEdit = () => {
    setLoading(true)
    const data = {
      title: event.title,
      description: event.description,
      sportId: sport && sport?.id,
      eventLink: event.eventLink,
      price: event?.price || 0,
      modality: event.modality || category ? category : 'none',
      location: event?.location,
      phoneNumber: event.phoneNumber,
      places: parseInt(event.places),
      dateStart: dateStart || event.dateStart,
      dateInscription: dateSuscription || event.dateEnd,
      timeStart: '00:00',
      image: selectedImage || event.image,
      rules: fileUrl || selectedImageRule || ''
    }

    dispatch(updateEvent({ id: eventData.id, updateEventDto: data }))
      .then(() => dispatch(getAllEvents()))
      .then(() => {
        setEvent({
          title: '',
          description: '',
          price: '',
          location: '',
          timeStart: '',
          eventLink: '',
          inscriptionLink: '',
          places: '',
          mail: '',
          phoneNumber: '',
          image: null,
          rules: ''
        })
        setSelectedFile('')
        clearRedux()
        setLoading(false)
        navigation.goBack()
      })
  }

  const onSubmit = async () => {
    setLoading(true)
    try {
      await axiosInstance
        .post('https://rest.paycomet.com/v1/sepa/add-document', event, {
          headers: {
            // 'PAYCOMET-API-TOKEN': '5fadd9b95cb3a11e5a2cffd585d702e458c29da0'
            'PAYCOMET-API-TOKEN': 'bb518dc868eee45c1071761ce374572c4e7d952e'
          }
        })
        .then(async (r) => {
          if (r?.data?.errorCode === 0) {
            console.log(r.data, 'rrr')
            await axiosInstance
              .post(`documents`, {
                merchantCustomerId: Math.floor(Math.random() * 10000000),
                merchantCustomerIban: event.merchantCustomerIban,
                name: event.name,
                documentType: event.documentType
              })
              .then(() => {
                // dispatch(getUser(user?.id))
                setLoading(false)
                navigation.navigate('DocumentosClientes')
              })
          } else {
            setShowError('Error: Verifica los datos ingresados')
            setLoading(false)
          }
        })
    } catch (error) {
      setLoading(false)
      setShowError('Error: Verifica los datos ingresados')
      console.log(error, 'error')
    }
  }

  const tiposDeDocumentos = [
    'DNI/PASAPORTE (Anverso) Titular real',
    'DNI/PASAPORTE (Reverso) Titular real',
    'Certificado de titularidad de cuenta',
    'Recibo bancario',
    'Recibo autónomos o modelo 36/37',
    'DNI/PASAPORTE (Anverso) > 25%',
    'DNI/PASAPORTE (Reverso) > 25%',
    'DNI/PASAPORTE (Anverso) Administrador',
    'DNI/PASAPORTE (Reverso) Administrador',
    'Escrituras de apoderamiento',
    'Escrituras de Constitución y otras escrituras relevantes',
    'CIF',
    'Declaración responsable de vigencia de la documentación',
    'Certificado de estar al corriente de obligaciones tributarias',
    'Licencias de actividad',
    'Contrato PAYCOMET',
    'Documento SEPA',
    'Declaración operativa NO CES',
    'Formulario complementario de licencias',
    'Factura o recibo acreditativo de los servicios prestados',
    'Última declaración del IRPF y de IVA',
    'Estados financieros, declaraciones de IVA e Impuesto de Sociedades ejercicio anterior',
    'Tarjeta de identificación fiscal',
    'Escritura de poderes'
  ]

  const tiposDeDocumentosEnIngles = [
    'ID/PASSPORT (Front) Real Holder',
    'ID/PASSPORT (Back) Real Holder',
    'Account Ownership Certificate',
    'Bank Receipt',
    'Self-Employed Receipt or Model 36/37',
    'ID/PASSPORT (Front) > 25%',
    'ID/PASSPORT (Back) > 25%',
    'ID/PASSPORT (Front) Administrator',
    'ID/PASSPORT (Back) Administrator',
    'Power of Attorney Documents',
    'Constitution and Other Relevant Documents',
    'Tax Identification Number',
    'Declaration of Document Validity',
    'Certificate of Compliance with Tax Obligations',
    'Activity Licenses',
    'PAYCOMET Contract',
    'SEPA Document',
    'NO CES Operational Declaration',
    'Additional License Form',
    'Invoice or Receipt for Services Rendered',
    'Last IRPF and VAT Declaration',
    'Financial Statements, VAT and Corporation Tax Declarations for Previous Year',
    'Tax Identification Card',
    'Power of Attorney Document'
  ]

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.items}>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: Color.sportsVioleta,
            borderRadius: 20,
            height: '100%',
            paddingLeft: 10
          }}
        >
          <Text style={styles.text}>Nombre *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.name}
            onChangeText={(value) => onValuesEvent('name', value)}
            placeholder={'Nombre'}
            maxLength={30}
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </View>
      <View style={styles.items}>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: Color.sportsVioleta,
            borderRadius: 20,
            height: '100%',
            paddingLeft: 10
          }}
        >
          <Text style={styles.text}>IBAN *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.merchantCustomerIban}
            onChangeText={(value) =>
              onValuesEvent('merchantCustomerIban', value)
            }
            placeholder={'ES9121000418450200051332'}
            maxLength={40}
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </View>

      <Pressable style={styles.items} onPress={() => setSportsModal(true)}>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: Color.sportsVioleta,
            borderRadius: 20,
            height: '100%',
            paddingLeft: 10
          }}
        >
          <Text style={styles.text}>{t('documentTipo')} *</Text>
          <Text style={styles.helloTypoScroll}>
            {typeDoc || t('documentTipo')}
          </Text>
        </View>
      </Pressable>

      <View style={{ ...styles.items, height: 300 }}>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: Color.sportsVioleta,
            borderRadius: 20,
            height: '100%'
          }}
        >
          <Text style={{ ...styles.text, top: -10 }}>{t('document')} *</Text>

          {!selectedFile ? (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                gap: 18
              }}
            >
              <TouchableOpacity
                onPress={handleFilePick}
                style={{
                  backgroundColor: Color.sportsNaranja,
                  padding: 8,
                  borderRadius: 50
                }}
              >
                <Text style={{ color: 'white' }}>{t('subirDocumento')}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  width: '100%',
                  height: '90%',
                  textAlign: 'center',
                  textAlignVertical: 'center'
                }}
              >
                {t('archivosubido')}
              </Text>
            </View>
          )}
        </View>
      </View>
      {showError && (
        <Text style={{ color: 'red', width: '100%', textAlign: 'center' }}>
          {showError}
        </Text>
      )}

      <TouchableOpacity
        style={styles.submit}
        disabled={loading}
        onPress={() => {
          if (onEditMode) {
            onEdit()
          } else {
            onSubmit()
          }
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
          {onEditMode && !loading ? (
            t('editar')
          ) : loading ? (
            <ActivityIndicator color="#ffff"></ActivityIndicator>
          ) : (
            t('enviar')
          )}
        </Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent visible={calendar}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeCalendar}
          />
          <CalendarOneDay
            onClose={closeCalendar}
            start={true}
            suscription={false}
          />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={sportsModal}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={onCloseModalSports}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              maxHeight: 600,
              width: '100%',
              borderRadius: 10,
              overflow: 'hidden'
            }}
            contentContainerStyle={{
              borderRadius: 10,
              overflow: 'hidden',
              gap: 15,
              backgroundColor: 'white',
              padding: 20
            }}
          >
            {tiposDeDocumentos.map((document, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onValuesEvent('documentType', index + 1)
                    setTypeDoc(document)
                    onCloseModalSports()
                  }}
                  style={{
                    backgroundColor: Color.sportsNaranja,
                    width: '100%',
                    padding: 10,
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      borderRadius: 10
                    }}
                  >
                    {document}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay}>
          <Pressable
            style={styles.frameContainer6Bg}
            onPress={closeFrameContainer6}
          />
          <Maps onClose={closeFrameContainer6} setEventsFilter={setEvent} />
        </View>
      </Modal>

      {showAlert && (
        <View>
          <CustomAlert
            visible={showAlert}
            message="Evento creado"
            onClose={handleCloseAlert}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  frameContainer10Overlay: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer10Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  helloTypoScroll: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 13,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  helloTypoScroll2: {
    width: '100%',
    height: '100%',
    fontSize: 13,
    textAlignVertical: 'center',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.violetaPlaceholder
  },
  helloTypoScrollDate: {
    width: '90%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  subirArchivo: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.violetaPlaceholder,
    top: 7
  },
  subirArchivoNuevo: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    top: 7
  },
  helloTypoScrollPrecio: {
    width: '60%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    width: '100%',
    height: 45
  },
  items2Container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  checkContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  items2Flex: {
    flexDirection: 'column',
    width: '31%',
    gap: 5,
    justifyContent: 'center'
  },
  items2: {
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    height: 45,
    padding: 8
  },
  itemsTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.blanco,
    padding: 8,
    minHeight: 60
  },
  textArea: {
    width: '60%',
    marginLeft: 3,
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  text: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    position: 'absolute',
    left: 18,
    bottom: 34.5,
    backgroundColor: 'white',
    padding: 3
  },
  text2: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  textDiseño: {
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  contactoText: {
    marginBottom: 20,
    marginTop: 20,
    color: Color.sportsNaranja,
    left: 5
  },
  frameContainer6Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameContainer6Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  submit: {
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: Color.sportsNaranja
  }
})

export default FomularioDocumentos
