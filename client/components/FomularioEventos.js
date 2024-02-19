import React, { useEffect, useState } from 'react'
import {
  Image,
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
import { createEvent } from '../redux/actions/events'
// import { useNavigation } from '@react-navigation/native'
import CalendarOneDay from './CalendarOneDay'
import SportsPopUp from './SportsPopUp'

const FomularioEventos = () => {
  const dispatch = useDispatch()
  //   const navigation = useNavigation()
  const { sport } = useSelector((state) => state.sports)
  const { user } = useSelector((state) => state.users)
  const [date, setDate] = useState(null)
  const [dateInscription, setDateInscription] = useState(null)
  const [calendar, setCalendar] = useState(null)
  const [calendarInscription, setCalendarInscription] = useState(null)
  const [sportsModal, setSportsModal] = useState(false)
  const [event, setEvent] = useState({
    title: '',
    description: '',
    price: '',
    modality: '',
    location: '',
    dateStart: '',
    dateInscription: ''
  })

  const onCloseModalSports = () => {
    setSportsModal(false)
  }

  useEffect(() => {
    dispatch(getAllSports())
  }, [])

  const onValuesEvent = (field, value) => {
    setEvent((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const onSubmit = () => {
    const data = {
      title: event.title,
      description: event.description,
      sportId: sport && sport?.id,
      price: event.price,
      modality: 'cesped',
      location: event.location,
      dateStart: `${date}T20:00:00`,
      dateInscription: `${dateInscription}T20:00:00`,
      creator: user?.id
    }

    dispatch(createEvent(data))
  }

  const closeCalendar = () => {
    setCalendar(false)
  }

  const closeCalendarInscription = () => {
    setCalendarInscription(false)
  }

  return (
    <Pressable style={{ width: '100%', marginTop: 30 }}>
      <View style={styles.items}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text style={styles.helloTypoScroll}>Portada</Text>
      </View>
      <View style={styles.items}>
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
          Titulo:
        </Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.title}
          onChangeText={(value) => onValuesEvent('title', value)}
        />
      </View>
      <View style={[styles.itemsTextArea]}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10, marginTop: 6 }}
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
          Descripcion:
        </Text>
        <TextInput
          style={styles.textArea}
          value={event.description}
          onChangeText={(value) => onValuesEvent('description', value)}
        />
      </View>
      <View style={styles.items}>
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
          Entrada / Precio:
        </Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.price}
          onChangeText={(value) => onValuesEvent('price', value)}
        />
      </View>
      <View style={styles.items}>
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
          Localizacion:
        </Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.location}
          onChangeText={(value) => onValuesEvent('location', value)}
        />
      </View>
      <Pressable style={styles.items} onPress={() => setSportsModal(true)}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text style={styles.helloTypoScroll}>Deporte</Text>
      </Pressable>
      <Pressable style={styles.items} onPress={() => setCalendar(true)}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text style={styles.helloTypoScroll}>Fecha</Text>
      </Pressable>
      <Pressable
        style={styles.items}
        onPress={() => setCalendarInscription(true)}
      >
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text style={styles.helloTypoScroll}>Fecha de inscripcion</Text>
      </Pressable>

      <TouchableOpacity
        style={{
          //   width: 100,
          height: 52,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginTop: 30,
          backgroundColor: Color.sportsNaranja
        }}
        onPress={onSubmit}
      >
        <Text style={{ color: 'white' }}>Crear</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent visible={calendar}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeCalendar}
          />
          <CalendarOneDay
            onClose={closeCalendar}
            setDate={setDate}
            date={date}
          />
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={sportsModal}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={onCloseModalSports}
          />
          <SportsPopUp
            onClose={onCloseModalSports}
            // setDate={setDate}
            // date={date}
          />
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
            setDate={setDateInscription}
            date={dateInscription}
          />
        </View>
      </Modal>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    // width: 200,
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
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.blanco,
    height: 52,
    padding: 8
  },
  itemsTextArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.blanco,
    // height: 52,
    padding: 8,
    height: 100
  },
  textArea: {
    marginTop: -2,
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  textAreaInput: {
    alignSelf: 'flex-start'
  }
})

export default FomularioEventos
