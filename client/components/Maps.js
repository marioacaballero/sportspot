import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import { Border, FontSize, FontFamily, Color, Padding } from '../GlobalStyles'
import { useSelector } from 'react-redux'
// import { setNameEvent } from '../redux/slices/events.slices'
// import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const Maps = ({ onClose, setEventsFilter }) => {
  // const dispatch = useDispatch()
  const { events } = useSelector((state) => state.events)
  const handleClose = () => {
    onClose()
  }

  const [searchText, setSearchText] = useState('')
  const [eventsLocal, setEventsLocal] = useState([...events])

  const filterEventsByLetter = (letter) => {
    return events.filter((event) =>
      event.location.toLowerCase().startsWith(letter.toLowerCase())
    )
  }

  const handleTextChange = (text) => {
    setSearchText(text)

    const filtereEvents = filterEventsByLetter(text)
    setEventsLocal(filtereEvents)
  }

  // const initialRegion = {
  //   latitude: 41.39185,
  //   longitude: 2.18521,
  //   latitudeDelta: 0.04,
  //   longitudeDelta: 0.05
  // }

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
          <ScrollView style={styles.mapViewParent}>
            {eventsLocal.map((event, i) => (
              <Text
                key={i}
                style={styles.helloTypo}
                onPress={() => {
                  setEventsFilter((prevState) => ({
                    ...prevState,
                    location: event.location
                  }))
                }}
              >
                {event.location}
              </Text>
            ))}
          </ScrollView>
          {/* <MapView
            initialRegion={initialRegion}
            style={styles.mapView}
            provider={PROVIDER_GOOGLE}
          >
            <Circle
              center={initialRegion}
              radius={1000}
              strokeColor="#40036F"
              fillColor="rgba(101, 39, 148, 0.67)"
            />
            <Marker coordinate={initialRegion} anchor={{ x: 0.5, y: 0.5 }}>
              <Image
                source={require('../assets/marker.png')}
                style={{ width: 22, height: 26 }}
                resizeMode="contain"
                resizeMethod="resize"
              />
            </Marker>
          </MapView> */}
        </View>
        <View style={styles.helloAshfakWrapper}>
          <Text
            style={[styles.helloAshfak, styles.kmTypo]}
            onPress={handleClose}
          >
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
