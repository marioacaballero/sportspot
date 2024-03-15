import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Padding, FontSize, Color, FontFamily, Border } from '../GlobalStyles'
import moment from 'moment'

const Calendario = ({
  onClose,
  setEventsFilter,
  setSelected,
  setDate,
  eventsFilter
}) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    const dates = [startDate, endDate]
    const formattedDates = dates.filter((date) => date !== null).join(', ')
    setSelected(formattedDates)
  }, [startDate, endDate])

  const handleDayPress = (day) => {
    const dateString = day.dateString.toString()
    if (!startDate || startDate.length === 0) {
      setStartDate(dateString)

      setEventsFilter((prevState) => ({
        ...prevState,
        dateStart: dateString
      }))
    } else if (startDate && !endDate) {
      const newEndDate = dateString
      setEndDate(newEndDate)
      setEventsFilter((prevState) => ({
        ...prevState,
        dateStart: [startDate, newEndDate]
      }))
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

    // const dates = [startDate, endDate]
    // setSelected(dates)
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
