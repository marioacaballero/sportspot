import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState, useCallback } from 'react'
import {
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
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import { getAllSports } from '../../redux/actions/sports'
import { useNavigation } from '@react-navigation/native'
// import { onSubmit } from './utils/createEvent'
import { Checkbox } from 'react-native-paper'
import {
  getUser,
  submitInscription,
  suscriptionEventUser
} from '../../redux/actions/users'
import { setSport } from '../../redux/slices/sports.slices'
import {
  createEvent,
  getAllEvents,
  updateEvent
} from '../../redux/actions/events'
import {
  setDateStart,
  setDateSuscription
} from '../../redux/slices/events.slices'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../../utils/apiBackend'
import { t } from 'i18next'
import Maps from '../../components/Maps'
import CalendarOneDay from '../../components/CalendarOneDay'
import GenderModal from './GenderModal'

const Inscrpcion = ({ route, onEditMode, eventData }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { dateStart, dateSuscription } = useSelector((state) => state.events)
  const { user } = useSelector((state) => state.users)
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)

  console.log(user, 'user')
  console.log(route.params, 'user2222')

  const [calendar, setCalendar] = useState(null)

  const [event, setEvent] = useState({
    nombre: '',
    apellido: '',
    nacimiento: '',
    sexo: '',
    dni: '',
    equipo: '',
    localidad: '',
    provincia: '',
    categoria: '',
    email: '',
    reemail: '',
    tlf: '',
    federado: false,
    ley: false
  })

  console.log('event: ', event)
  const [checked, setChecked] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [openProvince, setOpenProvince] = useState(false)
  const [genderModal, setGenderModal] = useState(false)
  const [gender, setGender] = useState()

  const { initPaymentSheet, presentPaymentSheet } = useStripe(null)
  const [loading, setLoading] = useState(false)

  const fetchPaymentSheetParams = async () => {
    const response = await axiosInstance.post(`/stripe/paymentEvent`, {
      amount: parseInt(`${route.params.price}00`),
      customerId: user.stripeId
    })
    console.log(response.data)
    const { paymentIntent, ephemeralKey, customer } = response.data

    return {
      paymentIntent,
      ephemeralKey,
      customer
    }
  }

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams()

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      defaultBillingDetails: {
        name: 'Jane Doe'
      }
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      // allowsDelayedPaymentMethods: true,
      // defaultBillingDetails: {
      //   name: user.name,
      // }
    })
    if (!error) {
      setLoading(true)
    }
  }
  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])
  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true)
  }, [])
  const closeProvinceModal = useCallback(() => {
    setOpenProvince(false)
  }, [])
  const openProvinceModal = useCallback(() => {
    setOpenProvince(true)
  }, [])

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet()
    // see below

    if (error) {
      console.log(`Error code: ${error.code}`, error.message)
    } else {
      onSuscribed()
      navigation.navigate('InicioDeportista')
      console.log('Success', 'Your order is confirmed!')
    }
  }

  useEffect(() => {
    console.log(user, event, 'userevent')
    initializePaymentSheet()
  }, [])
  const isGuest = user?.email === 'guestUser@gmail.com'

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

  const onSubmit = async () => {
    if (isGuest) {
      qqqq
      const actualSuscriptions =
        (await JSON.parse(AsyncStorage.getItem('guestSuscriptions'))
          .actualSuscriptions) || []
      const newSuscriptions = actualSuscriptions.filter(
        (suscription) => suscription.id !== route.params.id
      )
      AsyncStorage.setItem(
        'guestSuscriptions',
        JSON.stringify({
          actualSuscriptions: newSuscriptions
        })
      )
    }
    const data = {
      id: user.id,
      eventId: route.params.id
    }
    dispatch(offSuscription(data)).then((data) => dispatch(getAllEvents()))
  }
  const onSuscribed = async () => {
    if (isGuest) {
      const actualSuscriptions =
        (await JSON.parse(AsyncStorage.getItem('guestSuscriptions'))
          .actualSuscriptions) || []
      if (!actualSuscriptions.includes(route.params.id)) {
        AsyncStorage.setItem(
          'guestSuscriptions',
          JSON.stringify({
            actualSuscriptions: [...actualSuscriptions, route.params.id]
          })
        )
      }
    }
    // console.log('user: ', user)
    const data = {
      id: user.id,
      eventId: route.params.id
    }
    console.log('sending suscription request to ============: ', data)
    dispatch(suscriptionEventUser(data)).then((data) =>
      dispatch(getAllEvents())
    )
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ padding: 20, backgroundColor: 'white', flex: 1 }}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Text
          style={{
            marginBottom: 10,
            color: Color.violeta2,
            fontSize: 20,
            fontWeight: 600
          }}
        >{`${route.params.title} -> Inscripción`}</Text>
        <Text
          style={{
            color: Color.sportsNaranja,
            marginBottom: 20,
            fontWeight: 600
          }}
        >
          DATOS DEL DEPORTISTA
        </Text>
        <View style={{ width: '100%', flex: 1 }}>
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
              <Text style={styles.text}>{t('nombre')} *</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.nombre}
                onChangeText={(value) => onValuesEvent('nombre', value)}
                placeholder={t('nombre')}
                placeholderTextColor={Color.violetaPlaceholder}
              />
            </View>
          </View>
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
              <Text style={styles.text}>{t('apellido')} *</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.apellido}
                onChangeText={(value) => onValuesEvent('apellido', value)}
                placeholder={t('apellido')}
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
            onPress={() => setCalendar(true)}
          >
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
                {t('nacimiento')} *
              </Text>
              <Text
                style={
                  event.nacimiento
                    ? styles.helloTypoScroll
                    : styles.helloTypoScroll2
                }
              >
                {event.nacimiento || t('nacimiento')}
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              borderRadius: 30,
              width: '100%',
              height: 45
            }}
            onPress={() => setGenderModal(true)}
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
                {t('genero')} *
              </Text>
              <Text
                style={
                  event.localidad
                    ? styles.helloTypoScroll
                    : styles.helloTypoScroll2
                }
              >
                {event.sexo ? t(event.sexo) : t('genero')}
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.items}
            onPress={() => setFrameContainer6Visible(true)}
          >
            {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M87.5039'} /> */}
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: Color.sportsVioleta,
                borderRadius: 20,
                height: '100%',
                paddingLeft: 10,
                justifyContent: 'center'
              }}
            >
              <Text style={styles.text}>{t('dninif')} *</Text>
              {/* <Text
                            style={
                                event.location ? styles.helloTypoScroll : styles.helloTypoScroll2
                            }
                        >
                            {event.location ? event.location : 'DNI/NIF/Pasaporte'}
                        </Text> */}
              <TextInput
                value={event.dni}
                onChangeText={(value) => onValuesEvent('dni', value)}
                placeholderTextColor={Color.violetaPlaceholder}
                style={styles.helloTypoScroll}
                placeholder={t('dninif')}
              ></TextInput>
            </View>
          </Pressable>

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
                {t('localizacion')} *
              </Text>
              <Text
                style={
                  event.localidad
                    ? styles.helloTypoScroll
                    : styles.helloTypoScroll2
                }
              >
                {event.localidad ? event.localidad : t('localizacion')}
              </Text>
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
              <Text style={styles.text}>{t('provincia')}</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.provincia}
                onChangeText={(value) => onValuesEvent('provincia', value)}
                placeholder={t('provincia')}
                placeholderTextColor={Color.violetaPlaceholder}
              />
            </View>
          </View>
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
              <Text style={styles.text}>{t('equipoclub')}</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.equipo}
                onChangeText={(value) => onValuesEvent('equipo', value)}
                placeholder={t('equipoclub')}
                placeholderTextColor={Color.violetaPlaceholder}
              />
            </View>
          </View>
          <View style={styles.items}>
            {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M103.5039'} /> */}
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
              <Text style={styles.text}>{t('evcategoria')}</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.categoria}
                onChangeText={(value) => onValuesEvent('categoria', value)}
                placeholder={t('evcategoria')}
                placeholderTextColor={Color.violetaPlaceholder}
              />
            </View>
          </View>

          <Text
            style={{
              color: Color.sportsNaranja,
              marginBottom: 20,
              fontWeight: 600
            }}
          >
            {t('datoscontacto').toUpperCase()}
          </Text>

          <View style={styles.items}>
            {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M103.5039'} /> */}
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
                value={event.email}
                onChangeText={(value) => onValuesEvent('email', value)}
                placeholder="Email"
                placeholderTextColor={Color.violetaPlaceholder}
              />
            </View>
          </View>

          <View style={styles.items}>
            {/* <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M103.5039'} /> */}
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
              <Text style={styles.text}>{t('confirmarEmail')} *</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.reemail}
                onChangeText={(value) => onValuesEvent('reemail', value)}
                placeholder={t('confirmarEmail')}
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
              <Text style={styles.text}>Tlf *</Text>
              <TextInput
                style={styles.helloTypoScroll}
                value={event.tlf}
                onChangeText={(value) => onValuesEvent('tlf', value)}
                placeholder="Tlf"
                placeholderTextColor={Color.violetaPlaceholder}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                status={event.federado ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEvent((prev) => {
                    return {
                      ...prev,
                      federado: !prev.federado
                    }
                  })
                }}
                color={Color.sportsNaranja}
              />
            </View>
            <Text>{t('federado')}</Text>
          </View>
          <View style={{ marginTop: -5 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <Checkbox
                status={event.ley ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEvent((prev) => {
                    return {
                      ...prev,
                      ley: !prev.ley
                    }
                  })
                }}
                color={Color.sportsNaranja}
              />
              <Text style={{ maxWidth: '90%', paddingTop: 8 }}>
                {t('rgpd')}
              </Text>
            </View>
          </View>
          <View style={styles.items}>
            <View
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: Color.sportsVioleta,
                borderRadius: 10,
                height: '100%',
                justifyContent: 'center',
                marginTop: 15
              }}
            >
              <Text style={styles.text}>{t('precioDeIns')}</Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: Color.sportsVioleta,
                  fontSize: 16,
                  fontWeight: 600
                }}
              >{`${route.params.price ? route.params.price : 0}€`}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.submit}
            disabled={
              !event.name &&
              !event.apellido &&
              !event.dni &&
              !event.localidad &&
              !event.nacimiento &&
              !event.provincia &&
              !event.email &&
              !event.reemail &&
              !gender
            }
            onPress={() => {
              // openPaymentSheet()
              // if (route.params.price !== '0') {
              //   console.log(route.params.price, 'priceee')

              //   return navigation.navigate('stripe', {
              //     amount: route.params.price
              //   })
              // } else {
              onSuscribed()
              return navigation.navigate('InicioDeportista')
              // }
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
              {t('inscribirse')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(113, 113, 113, 0.3)'
          }}
        >
          <Pressable
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0
            }}
            onPress={closeFrameContainer6}
          />
          <Maps
            onClose={closeFrameContainer6}
            setEventsFilter={setEvent}
            inscription={true}
            item={'localidad'}
          />
        </View>
      </Modal>
      <Modal animationType="fade" transparent visible={openProvince}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(113, 113, 113, 0.3)'
          }}
        >
          <Pressable
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0
            }}
            onPress={closeProvinceModal}
          />
          <Maps
            onClose={closeProvinceModal}
            setEventsFilter={setEvent}
            inscription={true}
            item={'provincia'}
          />
        </View>
      </Modal>
      <Modal animationType="slide" transparent visible={calendar}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={() => setCalendar(false)}
          />
          <CalendarOneDay
            onClose={() => setCalendar(false)}
            start={true}
            inscription={true}
            setEvent={setEvent}
            suscription={false}
          />
        </View>
      </Modal>
      <Modal animationType="fade" transparent visible={genderModal}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={() => setGenderModal(false)}
          />
          <GenderModal
            onClose={() => setGenderModal(false)}
            setGender={onValuesEvent}
          />
        </View>
      </Modal>
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

export default Inscrpcion
