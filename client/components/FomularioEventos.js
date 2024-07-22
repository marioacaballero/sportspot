import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState, useCallback } from 'react'
import {
  Alert,
  Button,
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { getAllSports } from '../redux/actions/sports'
import { useNavigation } from '@react-navigation/native'
import CalendarOneDay from './CalendarOneDay'
import SportsPopUp from './SportsPopUp'
// import { onSubmit } from './utils/createEvent'
import { Checkbox } from 'react-native-paper'
import Maps from './Maps'
import { getUser } from '../redux/actions/users'
import BoxSVG from './SVG/BoxSVG'
import { setSport } from '../redux/slices/sports.slices'
import { createEvent, getAllEvents, updateEvent } from '../redux/actions/events'
import { setDateStart, setDateSuscription } from '../redux/slices/events.slices'
import CustomAlert from './CustomAlert'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../utils/apiBackend'
import { useTranslation } from 'react-i18next'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import * as WebBrowser from 'expo-web-browser'
import { Buffer } from 'buffer'
import FileViewer from 'react-native-file-viewer'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../utils/config.google'

const FomularioEventos = ({
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
  const [pdfUri, setPdfUri] = useState(null)
  const [calendar, setCalendar] = useState(null)
  const [calendarInscription, setCalendarInscription] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageRule, setSelectedImageRule] = useState(null)

  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [sportsModal, setSportsModal] = useState(false)
  const [category, setCategory] = useState('')
  const [fileUrl, setFileUrl] = useState('')

  const [event, setEvent] = useState(
    formattedEventData || {
      title: '',
      description: '',
      price: '',
      location: '',
      category: '',
      timeStart: '',
      eventLink: '',
      inscriptionLink: '',
      places: '',
      mail: '',
      phoneNumber: ''
    }
  )
  const [pdfUrl, setPdfUrl] = React.useState('')

  const handleUploadFile = async (fileprop) => {
    const fileeee = fileprop
    if (!fileeee) return

    const file = await fetch(fileeee.uri).then((response) => response.blob())
    const storageRef = ref(storage, `archivos/${fileeee.name.split('/').pop()}`) // Referencia con nombre del archivo

    try {
      await uploadBytes(storageRef, file)
      console.log('Archivo subido!')
    } catch (error) {
      console.error('Error al subir el archivo:', error)
    }
  }

  const handleDownloadFile = async (fileprop) => {
    const fileeee = fileprop
    const storageRef = ref(storage, `archivos/${fileeee.name.split('/').pop()}`) // Referencia al archivo

    try {
      const url = await getDownloadURL(storageRef)
      console.log('URL de descarga:', url)
      setFileUrl(url)
      return url
      // Puedes usar la URL para crear un enlace de descarga o mostrarla en un visor de PDF
    } catch (error) {
      console.error('Error al obtener la URL de descarga:', error)
    }
  }

  const handleImagePick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Solo imágenes
        allowsEditing: true, // Permite al usuario editar la imagen seleccionada
        aspect: [4, 3], // Aspect ratio para la imagen editada
        quality: 1 // Calidad de la imagen (0 a 1)
      })

      if (!result.canceled) {
        const profileImageData = {
          uri: result.assets[0].uri,
          type: 'image/jpg',
          name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
        }

        const profileImageForm = new FormData()
        profileImageForm.append('file', profileImageData)
        profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
        profileImageForm.append('cloud_name', 'dnewfuuv0')

        await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
          method: 'post',
          body: profileImageForm
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('dataUrl from profile:', data.url)
            setSelectedImageRule(transformHttpToHttps(data.url))
          })
      }
    } catch (error) {
      console.error('Error picking image:', error)
      Alert.alert('Error', 'Failed to pick an image')
    }
  }

  const handleFilePick = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf' // Tipo de archivo que se permite seleccionar
      })

      if (file.assets) {
        console.log(file.assets, 'file')
        handleUploadFile(file.assets[0]).then(() =>
          handleDownloadFile(file.assets[0])
        )

        setSelectedFile(file)
      }
    } catch (error) {
      console.error('Error picking file:', error)
      Alert.alert('Error', 'Failed to pick a file')
    }
  }

  console.log('event: ', event)
  const [checked, setChecked] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [clientSecret, setClientSecret] = useState(null)

  useEffect(() => {
    dispatch(getAllSports())
    dispatch(getUser(user.id))
  }, [])

  const { initPaymentSheet, presentPaymentSheet } = useStripe(null)

  const [selectedFile, setSelectedFile] = useState(null)

  React.useEffect(() => {
    const initializePaymentSheet = async () => {
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Promocionar evento',
        returnURL: 'stripe-example://payment-sheet'
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
      })
      if (error) {
        // Handle error
        // console.log(error, 'error')
      } else {
        const { error } = await presentPaymentSheet()
        if (error) {
          // console.log(error, 'error')
        } else {
          // const updUser = await axiosInstance.patch(`user/${user.user.id}`,{
          //   plan:planSelected
          // })
          setClientSecret(null)
          onSubmit(
            event,
            sport,
            user,
            selectedImage,
            dispatch,
            dateSuscription,
            dateStart,
            setShowAlert
          )
        }
      }
    }

    if (clientSecret) {
      // console.log('entra a la hoja')
      initializePaymentSheet()
    }
  }, [clientSecret, initPaymentSheet])

  // const handleStripe = async () => {
  //   const { data } = await axiosInstance.post(
  //     `stripe/payment/price_1PF84tGmE60O5ob7niadJ5hL`,
  //     { customerId: user.stripeId }
  //   )
  //   if (data) {
  //     setClientSecret(data.clientSecret)
  //     // console.log(data, 'esto es priceee')
  //   }
  // }

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

  const handlePriceConfirmation = () => {
    setEvent((prevState) => ({
      ...prevState,
      price: event.price + '€'
    }))
  }

  function transformHttpToHttps(url) {
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://')
    } else {
      return url
    }
  }

  const uploadImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.canceled) {
      const profileImageData = {
        uri: result.assets[0].uri,
        type: 'image/jpg',
        name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
      }

      const profileImageForm = new FormData()
      profileImageForm.append('file', profileImageData)
      profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
      profileImageForm.append('cloud_name', 'dnewfuuv0')

      await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
        method: 'post',
        body: profileImageForm
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('dataUrl from profile:', data.url)
          setSelectedImage(transformHttpToHttps(data.url))
        })
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

  const closeCalendarInscription = () => {
    setCalendarInscription(false)
  }

  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true)
  }, [])

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])

  const onEdit = () => {
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
    dispatch(getAllEvents())

    navigation.goBack()
  }

  const onSubmit = () => {
    const data = {
      title: event.title,
      description: event.description,
      sportId: sport && sport?.id,
      eventLink: event.eventLink,
      price: event?.price.slice(0, -1),
      modality: category,
      location: event?.location,
      phoneNumber: event.phoneNumber,
      places: parseInt(event.places),
      dateStart,
      dateInscription: dateSuscription,
      creator: user?.id,
      timeStart: '00:00',
      image: selectedImage,
      rules: fileUrl || selectedImageRule || ''
    }
    // console.log('creating event with: ', data)
    dispatch(createEvent(data))
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
      image: null
    })
    setSelectedFile('')

    clearRedux()
    navigation.goBack()
    // setShowAlert(true)
  }

  console.log('sport', sport)

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.items}>
        {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M96.5039'} /> */}
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
          <Text style={styles.text}>{t('nombreDelEvento')} *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.title}
            onChangeText={(value) => onValuesEvent('title', value)}
            placeholder={t('nombreDelEvento')}
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
          <Text style={styles.text}>{t('deporte')} *</Text>
          <Text
            style={
              sport.name || event.sport
                ? styles.helloTypoScroll
                : styles.helloTypoScroll2
            }
          >
            {sport?.name?.slice(0, 1).toUpperCase()}
            {sport?.name?.slice(1)} {sport.name ? sport?.type : t('deporte')}
          </Text>
        </View>
      </Pressable>
      <Pressable style={styles.items}>
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
          <Text style={styles.text}>{t('categoria')} *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={category}
            onChangeText={(value) => setCategory(value)}
            placeholder={t('categoria')}
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </Pressable>

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
          <Text style={styles.text}>{t('descripcionDelEvento')} *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.description}
            onChangeText={(value) => onValuesEvent('description', value)}
            placeholder={t('descripcionDelEvento')}
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </View>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          borderRadius: 30,
          width: '100%',
          height: 45
        }}
        onPress={openFrameContainer6}
      >
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
          <Text
            style={{
              fontSize: FontSize.size_5xs,
              fontFamily: FontFamily.inputPlaceholder,
              fontWeight: '700',
              color: Color.sportsVioleta,
              position: 'absolute',
              left: 18,
              bottom: 34.5,
              backgroundColor: 'white',
              padding: 3
            }}
          >
            {t('lugarDelEvento')} *
          </Text>
          <Text
            style={
              event.location ? styles.helloTypoScroll : styles.helloTypoScroll2
            }
          >
            {event.location ? event.location : t('lugarDelEvento')}
          </Text>
        </View>
      </Pressable>

      <View style={styles.items}>
        {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M81.5039'} /> */}
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
          <Text style={styles.text}>{t('linkDelEvento')}</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.eventLink}
            onChangeText={(value) => onValuesEvent('eventLink', value)}
            placeholder="https://www.deportedeporte.com/"
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </View>
      <View style={{ ...styles.items, height: 300 }}>
        {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M103.5039'} /> */}
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: Color.sportsVioleta,
            borderRadius: 20,
            height: '100%'
          }}
        >
          <Text style={{ ...styles.text, top: -10 }}>
            {t('linkDeLaInscripcion')}
          </Text>

          {!fileUrl && !selectedImageRule ? (
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
                <Text style={{ color: 'white' }}>Subir pdf</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleImagePick}
                style={{
                  backgroundColor: Color.sportsNaranja,
                  padding: 8,
                  borderRadius: 50
                }}
              >
                <Text style={{ color: 'white' }}>Subir imagen</Text>
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
              {selectedImageRule && (
                <Image
                  source={{ uri: selectedImageRule }}
                  style={{ width: "90%", height:"90%" }}
                ></Image>
              )}
              {fileUrl && <Text style={{width:"100%",height:"90%",textAlign:"center",textAlignVertical:"center"}}>{fileUrl && (t('archivosubido')) }</Text>}
              {/* <Button title="Upload File" onPress={handleUploadFile} /> */}
            </View>
          )}
        </View>
      </View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          borderRadius: 30,
          width: '100%',
          height: 45
        }}
        onPress={() => setCalendar(true)}
      >
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
          <Text
            style={{
              fontSize: FontSize.size_5xs,
              fontFamily: FontFamily.inputPlaceholder,
              fontWeight: '700',
              color: Color.sportsVioleta,
              position: 'absolute',
              left: 18,
              bottom: 34.5,
              backgroundColor: 'white',
              padding: 3
            }}
          >
            {t('fechaDeInicio')} *
          </Text>
          <Text
            style={
              dateStart || event.dateStart
                ? styles.helloTypoScroll
                : styles.helloTypoScroll2
            }
          >
            {onEditMode
              ? event.dateStart
              : dateStart
              ? dateStart
              : t('fechaDeInicio')}
          </Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.items}
        onPress={() => setCalendarInscription(true)}
      >
        {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M102.5039'} /> */}
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
          <Text style={styles.text}>{t('fechaLimiteDeInscripcion')} *</Text>
          <Text
            style={
              dateSuscription || event.dateEnd
                ? styles.helloTypoScroll
                : styles.helloTypoScroll2
            }
          >
            {onEditMode
              ? event.dateEnd
              : dateSuscription
              ? dateSuscription
              : t('fechaLimiteDeInscripcion')}
          </Text>
        </View>
      </Pressable>

      <View style={styles.items2Container}>
        <View style={styles.items2Flex}>
          <Text style={styles.text2}>{t('precioDeInscripcion')} *</Text>
          <View style={styles.items2}>
            <TextInput
              style={styles.helloTypoScrollPrecio}
              value={event.price}
              onChangeText={(value) => onValuesEvent('price', value)}
              onBlur={handlePriceConfirmation}
              placeholder="35€"
              placeholderTextColor={Color.violetaPlaceholder}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.items2Flex}>
          <Text style={styles.text2}>{t('numerodeinsc')}</Text>
          <View style={styles.items2}>
            <TextInput
              style={styles.helloTypoScrollPrecio}
              value={event.places}
              onChangeText={(value) => onValuesEvent('places', value)}
              placeholder="XXXX"
              placeholderTextColor={Color.violetaPlaceholder}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.items2Flex}>
          <Text style={styles.text2}>{t('subirCartelDelEvento')}</Text>
          <Pressable style={styles.items2} onPress={uploadImage}>
            <Text
              style={
                selectedImage || event.image
                  ? styles.subirArchivoNuevo
                  : styles.subirArchivo
              }
            >
              {selectedImage || event.image ? t('cambiar') : t('subirArchivo')}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.checkContainer}>
        <Text style={styles.textDiseño}>{t('quieroContratarDiseño')}</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked)
          }}
          color={Color.sportsNaranja}
        />
      </View>

      <Text style={styles.contactoText}>{t('datorOrganizador')}</Text>

      <View style={styles.items}>
        {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M47.5039'} /> */}
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
          <Text style={styles.text}>Email *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.mail}
            onChangeText={(value) => onValuesEvent('mail', value)}
            placeholder="organizador@gmail.com"
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </View>
      <View style={styles.items}>
        {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M60.5039'} /> */}
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
          <Text style={styles.text}>{t('telefono')} *</Text>
          <TextInput
            style={styles.helloTypoScroll}
            value={event.phoneNumber}
            onChangeText={(value) => onValuesEvent('phoneNumber', value)}
            placeholder="XXX-XXX-XXX"
            keyboardType="numeric"
            placeholderTextColor={Color.violetaPlaceholder}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          if (onEditMode) {
            onEdit()
          } else {
            onSubmit(
              event,
              sport,
              user,
              selectedImage,
              dispatch,
              dateSuscription,
              dateStart,
              setShowAlert
            )
          }
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
          {onEditMode ? t('editar') : t('enviar')}
        </Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent visible={calendar}>
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

      <Modal animationType="slide" transparent visible={sportsModal}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={onCloseModalSports}
          />
          <SportsPopUp onClose={onCloseModalSports} />
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={calendarInscription}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeCalendarInscription}
          />
          <CalendarOneDay
            onClose={closeCalendarInscription}
            start={false}
            suscription={true}
          />
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

export default FomularioEventos
