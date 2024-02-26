import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Padding, FontSize, Color, FontFamily, Border } from '../GlobalStyles'
import moment from 'moment'

const Calendario = ({ onClose, setEventsFilter, setDate, eventsFilter }) => {
  // const [selectedStartDate, setSelectedStartDate] = useState(null)
  // const [selectedEndDate, setSelectedEndDate] = useState(null)
  // const [arrayDate, setArrayDate] = useState([])

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleDayPress = (day) => {
    if (!startDate) {
      setStartDate(day.dateString)
      setEndDate(null)
      setEventsFilter({
        dateStart: day.dateString,
        dateEnd: eventsFilter.dateEnd
      })
    } else if (startDate && !endDate) {
      setEndDate(day.dateString)
      setEventsFilter({
        dateStart: eventsFilter.dateStart,
        dateEnd: day.dateString
      })
    }
  }

  const generateMarkedDates = () => {
    const markedDates = {}
    if (startDate) {
      markedDates[startDate] = {
        startingDay: true,
        color: Color.sportsNaranja,
        textColor: 'white'
      }
    }

    if (endDate) {
      markedDates[endDate] = {
        endingDay: true,
        color: Color.sportsNaranja,
        textColor: 'white'
      }
    }

    if (startDate && endDate) {
      const currentDate = moment(startDate)
      while (currentDate.isBefore(endDate)) {
        currentDate.add(1, 'day')
        markedDates[currentDate.format('YYYY-MM-DD')] = {
          color: Color.sportsNaranja,
          textColor: 'white'
        }
      }
    }

    return markedDates
  }

  const resetFilter = () => {
    setStartDate(null)
    setEndDate(null)
    setEventsFilter({
      dateStart: null,
      dateEnd: null
    })
  }

  return (
    <View style={styles.calendar}>
      <Calendar
        onDayPress={handleDayPress}
        markingType={'period'}
        markedDates={generateMarkedDates()}
      />
      {startDate && endDate && (
        <Pressable
          style={[styles.helloAshfakWrapper, styles.captionFlexBox]}
          onPress={resetFilter}
        >
          <Text
            style={[styles.helloAshfak, styles.digit27Clr]}
            onPress={resetFilter}
          >
            Reset
          </Text>
        </Pressable>
      )}
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
  calendar: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    maxHeight: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    backgroundColor: Color.blanco
  },
  captionFlexBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    marginTop: 14,
    justifyContent: 'center'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    color: Color.blanco
  },
  digit27Clr: {
    color: Color.blanco,
    fontFamily: FontFamily.inputPlaceholder
  }
})

export default Calendario
