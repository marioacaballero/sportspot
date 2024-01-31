import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'
import { Border, FontSize, FontFamily, Color, Padding } from '../GlobalStyles'
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const Maps = ({ onClose }) => {
  const handleClose = () => {
    onClose()
  }

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  return (
    <ScrollView
      style={[styles.maps, styles.mapsLayout]}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <View style={styles.mapsInner}>
        <View style={styles.mapViewParent}>
          <MapView
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
          </MapView>
          <View style={styles.helloAshfakWrapper}>
            <Text
              style={[styles.helloAshfak, styles.kmTypo]}
              onPress={handleClose}
            >
              Listo
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mapsLayout: {
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: Border.br_5xs
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
    justifyContent: 'center'
  },
  mapsInner: {
    justifyContent: 'center',
    minWidth: '100%'
  },
  maps: {
    backgroundColor: Color.blanco,
    padding: Padding.p_xl,
    maxHeight: '100%'
  },
  mapView: {
    minHeight: 400
  },
  markerIcon: {
    color: 'blue'
  }
})

export default Maps
