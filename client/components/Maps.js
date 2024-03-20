import React, { useState, useEffect } from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { data } from '../utils/ciudadesEspaña'

const Maps = ({ onClose, setEventsFilter }) => {
  const [searchText, setSearchText] = useState('')
  const [eventsLocal, setEventsLocal] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50

  useEffect(() => {
    setEventsLocal(data.slice(0, itemsPerPage))
  }, [])

  const filterEventsByLetter = (letter) => {
    return data.filter((event) =>
      event.label.toLowerCase().startsWith(letter.toLowerCase())
    )
  }

  const handleTextChange = (text) => {
    setSearchText(text)
    const filtereEvents = filterEventsByLetter(text)
    setEventsLocal(filtereEvents.slice(0, itemsPerPage))
    setCurrentPage(1)
  }

  const handleLoadMore = () => {
    const nextPage = currentPage + 1
    const startIndex = (nextPage - 1) * itemsPerPage
    const endIndex = nextPage * itemsPerPage
    setEventsLocal([
      ...eventsLocal,
      ...filterEventsByLetter(searchText).slice(startIndex, endIndex)
    ])
    setCurrentPage(nextPage)
  }

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
    const paddingToBottom = 20
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      handleLoadMore()
    }
  }

  return (
    <View style={[styles.maps, styles.mapsLayout]}>
      <View style={styles.mapsInner}>
        <View>
          <View style={styles.items}>
            <TextInput
              style={styles.helloTypoScroll}
              placeholder="Buscar"
              value={searchText}
              onChangeText={handleTextChange}
            />
          </View>
          <ScrollView
            style={styles.mapViewParent}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            {eventsLocal.map((event, i) => (
              <TouchableOpacity
                key={i}
                style={{ paddingHorizontal: 20 }}
                onPress={() => {
                  setEventsFilter((prevState) => ({
                    ...prevState,
                    location: event.label
                  }))
                }}
              >
                <Text style={styles.helloTypo}>{event.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.helloAshfakWrapper} onPress={onClose}>
          <Text style={[styles.helloAshfak, styles.kmTypo]}>Listo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapsLayout: {
    maxWidth: '90%',
    maxHeight: 380,
    borderRadius: Border.br_5xs
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsNaranja,
    height: 45,
    padding: 7
  },
  helloTypoScroll: {
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    left: 20
  },
  helloTypo: {
    marginTop: 9,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta
  },
  kmTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfak: {
    color: Color.blanco,
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  mapViewParent: {
    alignSelf: 'stretch',
    height: 170
  },
  mapsInner: {
    justifyContent: 'center',
    minWidth: '100%',
    marginBottom: 25
  },
  maps: {
    backgroundColor: Color.blanco,
    padding: Padding.p_xl
  }
})

export default Maps
