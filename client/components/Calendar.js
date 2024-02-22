import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Padding, FontSize, Color, FontFamily, Border } from '../GlobalStyles'

const Calendario = ({ onClose, setEventsFilter, setDate }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [arrayDate, setArrayDate] = useState([])

  const generateMarkedDates = () => {
    const markedDates = {}
    if (selectedStartDate && selectedEndDate) {
      const startDate = new Date(selectedStartDate)
      const endDate = new Date(selectedEndDate)

      for (
        let currentDate = new Date(startDate);
        currentDate <= endDate;

      ) // currentDate.setDate(currentDate.getDate() + 1)
      {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth() + 1
        const day = currentDate.getDate()

        const formattedMonth = month < 10 ? `0${month}` : month
        const formattedDay = day < 10 ? `0${day}` : day

        const dateString = `${year}-${formattedMonth}-${formattedDay}`
        if (!arrayDate.includes(dateString)) {
          setArrayDate((prevArrayDate) => [...prevArrayDate, dateString])
        }

        const marking = {
          color: Color.colorLinen_100,
          marked: true
        }
        if (currentDate.getTime() === startDate.getTime()) {
          marking.startingDay = true
        }
        if (currentDate.getTime() === endDate.getTime()) {
          marking.endingDay = true
        }
        markedDates[dateString] = marking
      }
    }
    return markedDates
  }

  const handleDayPress = (day) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(day.dateString)
      // setDate(day.dateString)
      setEventsFilter((prevState) => ({
        ...prevState,
        dateStart: prevState.sportId.concat(day.dateString)
      }))
      setSelectedEndDate(null)
    } else {
      setSelectedEndDate(day.dateString)
    }
  }
  return (
    <View style={styles.calendar}>
      <Calendar
        onDayPress={handleDayPress}
        markingType={'period'}
        markedDates={generateMarkedDates()}
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
