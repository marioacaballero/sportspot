import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState, useCallback } from 'react'
import {
  Modal,
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
import { createEvent } from '../redux/actions/events'
import { setDateStart, setDateSuscription } from '../redux/slices/events.slices'
import CustomAlert from './CustomAlert'

const FomularioEventos = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { dateStart, dateSuscription } = useSelector((state) => state.events)
  const { sport } = useSelector((state) => state.sports)
  const { user } = useSelector((state) => state.users)

  const [calendar, setCalendar] = useState(null)
  const [calendarInscription, setCalendarInscription] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [sportsModal, setSportsModal] = useState(false)
  const [event, setEvent] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    timeStart: '',
    eventLink: '',
    inscriptionLink: '',
    places: '',
    mail: '',
    phoneNumber: ''
  })
  const [checked, setChecked] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    dispatch(getAllSports())
    dispatch(getUser(user.id))
  }, [])

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

  const uploadImage = async () => {
    let result = {}
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    })
    setSelectedImage(`data:image/jpeg;base64,${result?.assets[0].base64}`)
  }

  const clearRedux = () => {
    dispatch(setSport(''))
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

  const onSubmit = () => {
    const data = {
      title: event.title,
      description: event.description,
      sportId: sport && sport?.id,
      eventLink: event.eventLink,
      price: event?.price.slice(0, -1),
      modality: sport.type,
      location: event?.location,
      phoneNumber: event.phoneNumber,
      places: parseInt(event.places),
      dateStart,
      dateInscription: dateSuscription,
      creator: user?.id,
      timeStart: '00:00',
      image: selectedImage
    }
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
    navigation.goBack()
    // setShowAlert(true)
  }

  return (
    <View>
      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M96.5039'} />
        <Text style={styles.text}>Nombre del evento</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.title}
          onChangeText={(value) => onValuesEvent('title', value)}
          placeholder="Escriba el nombre del evento"
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <Pressable style={styles.items} onPress={() => setSportsModal(true)}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M57.5039'} />
        <Text style={styles.text}>Deporte</Text>
        <Text
          style={sport.name ? styles.helloTypoScroll : styles.helloTypoScroll2}
        >
          {sport?.name?.slice(0, 1).toUpperCase()}
          {sport?.name?.slice(1)}{' '}
          {sport.name ? sport?.type : 'Elije tu deporte'}
        </Text>
      </Pressable>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M96.5039'} />
        <Text style={styles.text}>Descripción del evento</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.description}
          onChangeText={(value) => onValuesEvent('description', value)}
          placeholder="Descripción del evento"
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <Pressable style={styles.items} onPress={openFrameContainer6}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M87.5039'} />
        <Text style={styles.text}>Lugar del evento</Text>
        <Text
          style={
            event.location ? styles.helloTypoScroll : styles.helloTypoScroll2
          }
        >
          {event.location ? event.location : 'Elija el lugar del evento'}
        </Text>
      </Pressable>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M81.5039'} />
        <Text style={styles.text}>Link del evento</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.eventLink}
          onChangeText={(value) => onValuesEvent('eventLink', value)}
          placeholder="https://www.deportedeporte.com/"
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M103.5039'} />
        <Text style={styles.text}>Link de la inscripción</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.inscriptionLink}
          onChangeText={(value) => onValuesEvent('inscriptionLink', value)}
          placeholder="https://www.deportedeporte.com/inscripción/"
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <Pressable style={styles.items} onPress={() => setCalendar(true)}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M81.5039'} />
        <Text style={styles.text}>Fecha de inicio</Text>
        <Text
          style={dateStart ? styles.helloTypoScroll : styles.helloTypoScroll2}
        >
          {dateStart || 'Seleccione la fecha de inicio'}
        </Text>
      </Pressable>

      <Pressable
        style={styles.items}
        onPress={() => setCalendarInscription(true)}
      >
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M102.5039'} />
        <Text style={styles.text}>Fecha de inscripcion</Text>
        <Text
          style={
            dateSuscription ? styles.helloTypoScroll : styles.helloTypoScroll2
          }
        >
          {dateSuscription || 'Fecha límite de inscripción'}
        </Text>
      </Pressable>

      <View style={styles.items2Container}>
        <View style={styles.items2Flex}>
          <Text style={styles.text2}>Precio de inscripción</Text>
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
          <Text style={styles.text2}>Plazas disponibles</Text>
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
          <Text style={styles.text2}>Subir cartel del evento</Text>
          <Pressable style={styles.items2} onPress={uploadImage}>
            {/* <Image
              style={{ width: 20, height: 20 }}
              contentFit="cover"
              source={selectedImage && { uri: selectedImage }}
            /> */}
            <Text
              style={
                selectedImage ? styles.subirArchivoNuevo : styles.subirArchivo
              }
            >
              {selectedImage ? 'Cambiar' : 'Subir archivo'}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.checkContainer}>
        <Text style={styles.textDiseño}>
          Quiero contratar el diseño del cartel
        </Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked)
          }}
          color={Color.sportsNaranja}
        />
      </View>

      <Text style={styles.contactoText}>Datos de contacto del organizador</Text>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M47.5039'} />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.mail}
          onChangeText={(value) => onValuesEvent('mail', value)}
          placeholder="organizador@gmail.com"
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M60.5039'} />
        <Text style={styles.text}>Teléfono</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.phoneNumber}
          onChangeText={(value) => onValuesEvent('phoneNumber', value)}
          placeholder="XXX-XXX-XXX"
          keyboardType="numeric"
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
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
        }}
      >
        <Text style={{ color: 'white' }}>Enviar</Text>
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
    marginLeft: 3,
    fontSize: 13,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  helloTypoScroll2: {
    width: '100%',
    marginLeft: 3,
    fontSize: 13,
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
    marginLeft: 3,
    fontSize: 12,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.violetaPlaceholder,
    top: 6
  },
  subirArchivoNuevo: {
    width: '100%',
    marginLeft: 5,
    fontSize: 12,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    top: 6
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
    height: 45,
    padding: 8
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
    bottom: 39.5
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
