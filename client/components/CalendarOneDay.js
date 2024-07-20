import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Button,
  ScrollView,
  FlatList
} from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Padding, FontSize, Color, FontFamily, Border } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setDateStart, setDateSuscription } from '../redux/slices/events.slices'
import { LeftYearArrowSvg, RightYearArrowSvg } from './SVG/YearArrowSvg'
import { years } from './Years'

const CalendarOneDay = ({
  onClose,
  start,
  suscription,
  setValuesUser,
  valuesUser,
  fromPost,
  inscription,
  setEvent
}) => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('')
  const dateInitial = new Date()
  const year = dateInitial.getFullYear()
  let month = dateInitial.getMonth() + 1
  let date = dateInitial.getDate()
  if (month < 10) month = '0' + month
  if (date < 10) date = '0' + date

  const dateEnd = `${year}-${month}-${date}`
  const [calendarDate, setCalendarDate] = useState(dateEnd)
  const [openModal, setOpenModal] = useState(false)
  const [yearVisible, setYearVisible] = useState(true)
  const { dateStart, dateSuscription } = useSelector((state) => state.events)

  LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ],
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado'
    ],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    today: 'Hoy'
  }

  LocaleConfig.defaultLocale = 'es'
  const generateMarkedDates = () => {
    const markedDates = {}
    if (selected) {
      markedDates[selected] = {
        selected: true,
        selectedColor: '#f25910'
      }
    }
    return markedDates
  }

  const handleDayPress = (day) => {
    const newDate = new Date(day?.dateString);
    const startDate = new Date(dateStart);
    const suscriptionDate = new Date(dateSuscription);

    if (inscription) {
      setEvent((prevState) => ({
        ...prevState,
        ['nacimiento']: day?.dateString
      }));
    }

    if (start && !suscription) {
      if (!dateSuscription || newDate >= suscriptionDate) {
        setSelected(day?.dateString);
        setValuesUser && setValuesUser({ ...valuesUser, ['birthDate']: day?.dateString });
        dispatch(setDateStart(day?.dateString));
  
      } else {
        console.error('La fecha de inicio debe ser mayor o igual a la fecha de suscripción');
      }
    } else {
      if (!dateStart || newDate < startDate) {
        setValuesUser && setValuesUser({ ...valuesUser, ['birthDate']: day?.dateString });
        setSelected(day?.dateString);
        dispatch(setDateSuscription(day?.dateString));
      } 
    }
  };


  const sumbitYear = (text) => {
    const year = parseInt(text)
    let month = dateInitial.getMonth() + 1
    let date = dateInitial.getDate()
    if (month < 10) month = '0' + month
    if (date < 10) date = '0' + date
    const dateEnd = `${year}-${month}-${date}`

    setCalendarDate(dateEnd)
    setOpenModal(false)
    setYearVisible(true)
  }


  return (
    <View style={styles.calendar}>
      <Pressable onPress={() => setOpenModal(true)} style={styles.calendar1}>
      </Pressable>
      {openModal ? (
        <FlatList style={{ maxHeight: 390, width: "100%" }} contentContainerStyle={{ justifyContent: "center", alignItems: "center", gap: 15,paddingVertical:5 }} data={years} renderItem={(e) => <TouchableOpacity style={{backgroundColor:Color.sportsNaranja,width:"100%",color:"white",paddingHorizontal:"20%",paddingVertical:4,borderRadius:50}} onPress={()=> sumbitYear(e.item)}>
          <Text style={{color:"white"}}>{e.item}</Text>
          </TouchableOpacity>}>

        </FlatList>
      ) : (
        <View>
          <Calendar
            style={{ width: 300, minHeight: 360 }}
            onDayPress={handleDayPress}
            markedDates={generateMarkedDates()}
            firstDay={1}
            initialDate={calendarDate}
            theme={{
              calendarBackground: '#ffffff',
              todayTextColor: '#f25910',
              selectedDayTextColor: '#ffffff',
              arrowColor: '#f25910'
            }}
          />
          <TouchableOpacity onPress={onClose} style={styles.helloAshfakWrapper}>
            <Text style={styles.helloAshfak}>Listo</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  captionFlexBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputYear: {
    // backgroundColor: 'red',

  },
  value: {
    position: 'relative',
    // backgroundColor: 'red',
    top: 0
  },
  pressable: {
    position: 'fixed',
    top: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 20,
    width: 20
  },
  ok: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: 100,
    height: 20,
    color: 'white',
    position: 'relative',
    top: 30
  },
  week4FlexBox: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  yearSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    flexDirection: 'row'
  },
  weekdayFlexBox: {
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digitTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    textAlign: 'center',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '600'
  },
  weekdaySpaceBlock: {
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  satTypo: {
    color: Color.sportsNaranja,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    textAlign: 'center',
    fontFamily: FontFamily.inputPlaceholder
  },
  inputModal: {
    backgroundColor: Color.blanco,
    borderColor: Color.sportsNaranja,
    borderWidth: 2,
    color: Color.blanco,
    zIndex: 30,
    width: 260,
    marginBottom: 40,
    height: 48,
    borderRadius: Border.br_5xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weekFlexBox: {
    opacity: 0.35,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  daySpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    height: 48,
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayLayout: {
    borderRadius: Border.br_5xl,
    height: 48,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digit27Clr: {
    color: Color.blanco,
    fontFamily: FontFamily.inputPlaceholder
  },

  january: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    textAlign: 'center',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '600'
  },
  month: {
    paddingHorizontal: Padding.p_5xs
  },
  year: {
    paddingHorizontal: 0
  },
  caption: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mon: {
    color: Color.sportsVioleta,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '600'
  },
  weekday: {
    paddingHorizontal: Padding.p_mid
  },
  weekday1: {
    width: 48,
    paddingHorizontal: Padding.p_lgi
  },
  weekday2: {
    paddingHorizontal: Padding.p_base
  },
  sat: {
    fontWeight: '600'
  },
  weekdays: {
    justifyContent: 'center'
  },
  separatorIcon: {
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'stretch',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  digit: {
    color: Color.colorTomato_100,
    fontFamily: FontFamily.inputPlaceholder,
    lineHeight: 24,
    fontSize: FontSize.size_3xs
  },
  day: {
    display: 'none'
  },
  digit6: {
    color: Color.sportsNaranja
  },
  week: {
    justifyContent: 'flex-end'
  },
  digit7: {
    color: Color.sportsVioleta,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inputPlaceholder
  },
  week1: {
    justifyContent: 'center'
  },
  digit14: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.inputPlaceholder
  },
  day14: {
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digit27: {},
  day27: {},
  digit37: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.inputPlaceholder,
    lineHeight: 24,
    fontSize: FontSize.size_3xs
  },
  calendar1: {
    borderRadius: Border.br_base,
    padding: Padding.p_5xs,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 100,
    height: 30,
    alignItems: 'center',
    top: 37,
    zIndex: 999
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    color: Color.blanco
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calendar: {
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_3xs,
    width: '100%',
    height: 'auto',
    paddingBottom: 20,
    // justifyContent: yearVisible ? 'flex-start' : 'flex-end',
    alignItems: 'center',
    backgroundColor: Color.blanco,
    position: 'absolute',
    bottom: 0
  },
  fatherYear: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 90
    // height: 120
  }
})

export default CalendarOneDay
