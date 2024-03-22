import React, { useEffect, useState, useCallback } from 'react'
import * as ImagePicker from 'expo-image-picker'
import {
  Alert,
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
import { getAllSports } from '../redux/actions/sports'
import { deleteEvent, getAllEvents, updateEvent } from '../redux/actions/events'
import { useNavigation } from '@react-navigation/native'
import CalendarOneDay from './CalendarOneDay'
import SportsPopUp from './SportsPopUp'
import Maps from './Maps'
import BoxSVG from './SVG/BoxSVG'
import { setDateStart, setDateSuscription } from '../redux/slices/events.slices'

const EditEvent = ({ event: eventRedux, onClose }) => {
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const { user } = useSelector((state) => state.users)
  const { dateStart, dateSuscription } = useSelector((state) => state.events)
  // const { sport: sportRedux } = useSelector((state) => state.sports)

  const [calendar, setCalendar] = useState(null)
  const [calendarInscription, setCalendarInscription] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [sportsModal, setSportsModal] = useState(false)
  const [event, setEvent] = useState({
    title: eventRedux.title,
    description: eventRedux.description,
    // sport: 'prueba',
    price: eventRedux.price,
    timeStart: eventRedux.timeStart,
    location: null
  })
  const [dateChange, setDateChange] = useState(false)
  const [dateSuscriptionChange, setDateSuscriptionChange] = useState(false)
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)

  const onCloseModalSports = () => {
    setSportsModal(false)
  }

  useEffect(() => {
    dispatch(getAllSports())
  }, [])

  const onValuesEvent = (field, value) => {
    if (field === 'timeStart') {
      const cleanedValue = value.replace(/[^0-9]/g, '')

      // Obtener las primeras 4 cifras
      const formattedValue = cleanedValue.slice(0, 4)

      // Formatear en HH:MM si hay suficientes caracteres
      let formattedTime = ''
      if (formattedValue.length > 1) {
        const hours = formattedValue.slice(0, 2)
        const minutes = formattedValue.slice(2, 4)
        formattedTime = `${hours}:${minutes}`
      } else {
        formattedTime = formattedValue // Dejar el valor tal cual si tiene 1 o menos caracteres
      }

      // Actualizar el estado
      setEvent((prevState) => ({
        ...prevState,
        [field]: formattedTime
      }))
    } else {
      setEvent((prevState) => ({
        ...prevState,
        [field]: value
      }))
    }
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

  const onSubmit = () => {
    const data = {
      id: eventRedux.id,
      updateEventDto: {
        title: event.title,
        description: event?.description,
        sportId: eventRedux.sportId,
        price: event?.price,
        // modality: eventRedux.sport.type,
        // name: event.sport,
        location: event.location || eventRedux.location,
        dateStart: dateChange ? dateStart : eventRedux.dateStart,
        dateInscription: dateSuscriptionChange
          ? dateSuscription
          : eventRedux.dateInscription,
        creator: user?.id,
        timeStart: event?.timeStart,
        image: selectedImage || eventRedux.image
      }
    }

    dispatch(updateEvent(data))
    dispatch(getAllEvents())
    dispatch(setDateStart(''))
    dispatch(setDateSuscription(''))
    onClose()
    navigation.goBack()
    alert('Evento editado correctamente')
  }

  const closeCalendar = () => {
    setCalendar(false)
  }

  const closeCalendarInscription = () => {
    setCalendarInscription(false)
  }

  const handleDelete = () => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este evento?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          onPress: () => {
            dispatch(deleteEvent(eventRedux.id))
            dispatch(getAllEvents())
            navigation.navigate('InicioDeportista')
          }
        }
      ],
      { cancelable: false }
    )
  }

  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true)
  }, [])

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text
        style={{ textAlign: 'right', fontSize: 20, marginTop: 10 }}
        onPress={onClose}
      >
        X
      </Text>

      <Pressable style={styles.items} onPress={uploadImage}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M95.5039'} />
        <Text style={styles.text}>Portada del evento</Text>
        <Text style={styles.helloTypoScroll}>Portada</Text>
        {/* <Image
          style={{ width: 20, height: 20 }}
          contentFit="cover"
          source={
            selectedImage ? { uri: selectedImage } : { uri: user?.avatar }
          }
        /> */}
      </Pressable>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M95.5039'} />
        <Text style={styles.text}>Nombre del evento</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.title}
          onChangeText={(value) => onValuesEvent('title', value)}
          placeholderTextColor={Color.violetaPlaceholder}
        />
      </View>

      <View style={[styles.items]}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M72.5039'} />
        <Text style={styles.text}>Descripcion</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.description}
          onChangeText={(value) => onValuesEvent('description', value)}
        />
      </View>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M52.5039'} />
        <Text style={styles.text}>Precio</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.price}
          onChangeText={(value) => onValuesEvent('price', value)}
        />
      </View>

      <Pressable style={styles.items} onPress={openFrameContainer6}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M74.5039'} />
        <Text style={styles.text}>Localizacion</Text>
        <Text style={styles.helloTypoScroll}>
          {event.location || eventRedux.location}{' '}
        </Text>
      </Pressable>

      {/* <Pressable style={styles.items} onPress={() => setSportsModal(true)}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text
          style={{
            fontSize: FontSize.inputPlaceholder_size,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: Color.sportsVioleta
          }}
        >
          Deporte:{' '}
        </Text>
        <Text style={styles.helloTypoScroll}>
          {event?.sport.slice(0, 1).toUpperCase()}
          {event?.sport.slice(1)}
        </Text>
      </Pressable> */}

      <Pressable
        style={styles.items}
        onPress={() => {
          setDateChange(true)
          setCalendar(true)
        }}
      >
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M81.5039'} />
        <Text style={styles.text}>Fecha de inicio</Text>
        <Text style={styles.helloTypoScroll}>
          {dateChange ? dateStart : eventRedux.dateStart}
        </Text>
      </Pressable>

      <Pressable
        style={styles.items}
        onPress={() => {
          setDateSuscriptionChange(true)
          setCalendarInscription(true)
        }}
      >
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M102.5039'} />
        <Text style={styles.text}>Fecha de inscripción</Text>
        <Text style={styles.helloTypoScroll}>
          {dateSuscriptionChange ? dateSuscription : eventRedux.dateInscription}
        </Text>
      </Pressable>

      <View style={styles.items}>
        <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M46.5039'} />
        <Text style={styles.text}>Hora</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.timeStart}
          onChangeText={(value) => onValuesEvent('timeStart', value)}
          keyboardType="numeric"
          maxLength={5}
        />
      </View>

      <TouchableOpacity style={styles.cancelButton} onPress={handleDelete}>
        <Text style={styles.whiteText}>Cancelar evento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.confirmButton} onPress={onSubmit}>
        <Text style={styles.whiteText}>Confirmar</Text>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5
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
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 30,
    height: 45,
    padding: 8,
    marginLeft: 10
  },
  confirmButton: {
    height: 48,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: Color.sportsNaranja
  },
  cancelButton: {
    height: 48,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: Color.colorGray_100
  },
  whiteText: {
    color: 'white'
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
  text: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    position: 'absolute',
    left: 18,
    bottom: 39.5
  }
})

export default EditEvent
