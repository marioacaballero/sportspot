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
    <ScrollView
      style={[styles.maps, styles.mapsLayout]}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
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
          >
            {eventsLocal.map((event, i) => (
              <TouchableOpacity
                key={i}
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
        <View style={styles.helloAshfakWrapper}>
          <Text style={[styles.helloAshfak, styles.kmTypo]} onPress={onClose}>
            Listo
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mapsLayout: {
    maxWidth: '90%',
    maxHeight: '60%',
    borderRadius: Border.br_5xs
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsNaranja,
    height: 40,
    padding: 8
  },
  helloTypoScroll: {
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  helloTypo: {
    marginTop: 8,
    width: '100%',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    color: Color.sportsVioleta
  },
  helloAshfakTypo1: {
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size
  },
  kmTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  mapViewIcon: {
    height: 405,
    width: '100%',
    alignSelf: 'stretch'
  },
  rangoDeDistancia: {
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    lineHeight: 34,
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size
  },
  km: {
    fontSize: FontSize.size_lg,
    textAlign: 'right',
    color: Color.sportsVioleta,
    lineHeight: 34,
    fontWeight: '700'
  },
  rangoDeDistanciaParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  frameChild: {
    height: 66,
    marginTop: 15
  },
  frameParent: {
    marginTop: 24
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
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  mapViewParent: {
    alignSelf: 'stretch',
    height: 160
    // justifyContent: 'center'
  },
  mapsInner: {
    justifyContent: 'center',
    minWidth: '100%'
  },
  maps: {
    backgroundColor: Color.blanco,
    padding: Padding.p_xl
    // maxHeight: '100%'
  },
  mapView: {
    minHeight: 400,
    width: '100%'
  },
  markerIcon: {
    color: 'blue'
  }
})

export default Maps
