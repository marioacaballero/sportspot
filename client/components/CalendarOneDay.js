import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Padding, FontSize, Color, FontFamily, Border } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { setDateStart, setDateSuscription } from '../redux/slices/events.slices'

const CalendarOneDay = ({ onClose, start, suscription }) => {
  const dispath = useDispatch()
  return (
    <View style={styles.calendar}>
      <Calendar
        onDayPress={(day) => {
          if (start && !suscription) {
            dispath(setDateStart(day.dateString))
          } else {
            dispath(setDateSuscription(day.dateString))
          }
          // start && !suscription && dispath(setDateStart(day.dateString))
          // start && !suscription && dispath(setDateStart(day.dateString))

          // setDate(day.dateString)
        }}
        // markedDates={{
        //   [date]: {
        //     selected: true,
        //     disableTouchEvent: true,
        //     selectedDotColor: 'orange'
        //   }
        // }}
        // markedDates={generateMarkedDates()}
        // Otras propiedades de configuración de tu calendario
      />
      <Pressable
        onPress={onClose}
        style={[styles.helloAshfakWrapper, styles.captionFlexBox]}
      >
        <Text style={[styles.helloAshfak, styles.digit27Clr]}>Listo</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  captionFlexBox: {
    alignItems: 'center',
    justifyContent: 'center'
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
    backgroundColor: Color.blanco,
    alignItems: 'center'
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
    justifyContent: 'center'
  },
  calendar: {
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Color.blanco,
    position: 'absolute',
    bottom: 0
  }
})

export default CalendarOneDay
