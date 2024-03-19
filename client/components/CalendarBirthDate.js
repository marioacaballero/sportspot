import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Padding, Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { data } from '../utils/years'

const CalendarBirthDate = ({ onClose, setDate, setValuesUser }) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear())
  const [showYearList, setShowYearList] = useState(false)

  const handleMonthChange = (month) => {}

  const handleYearChange = (year) => {
    setDisplayedYear(year)
    setShowYearList(false)
  }

  const renderHeader = (date) => {
    return (
      <TouchableOpacity onPress={() => setShowYearList(!showYearList)}>
        <Text>{displayedYear || date.getFullYear()}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.calendar}>
      {showYearList && (
        <ScrollView style={styles.years} showsVerticalScrollIndicator={false}>
          {data.map((year) => (
            <TouchableOpacity key={year} onPress={() => handleYearChange(year)}>
              <Text style={styles.yearText}>{year}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Calendar
        onMonthChange={(month) => handleMonthChange(month)}
        onYearChange={(year) => handleYearChange(year)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true }
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        renderHeader={(date) => renderHeader(date)}
      />
      <Pressable style={styles.button} onPress={onClose}>
        <Text style={styles.text}>Listo</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
  button: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    color: Color.blanco
  },
  years: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: Color.blanco,
    height: 150,
    width: 60,
    top: 20
  },
  yearText: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_lg,
    marginTop: 5
  }
})
export default CalendarBirthDate
