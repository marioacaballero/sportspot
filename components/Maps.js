import * as React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Border, FontSize, FontFamily, Color, Padding } from '../GlobalStyles'

const Maps = ({ onClose }) => {
  return (
    <View style={[styles.maps, styles.mapsLayout]}>
      <View style={styles.mapsInner}>
        <View style={styles.mapViewParent}>
          <Image
            style={[styles.mapViewIcon, styles.mapsLayout]}
            contentFit="cover"
            source={require('../assets/map-view.png')}
          />
          <View style={styles.frameParent}>
            <View style={styles.rangoDeDistanciaParent}>
              <Text style={[styles.rangoDeDistancia, styles.helloAshfakTypo1]}>
                Rango de distancia
              </Text>
              <Text style={[styles.km, styles.kmTypo]}>20km</Text>
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-1171276694.png')}
            />
          </View>
          <View style={styles.helloAshfakWrapper}>
            <Text style={[styles.helloAshfak, styles.kmTypo]}>Listo</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapsLayout: {
    maxWidth: '100%',
    borderRadius: Border.br_5xs
  },
  helloAshfakTypo1: {
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size
  },
  kmTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder
  },
  mapViewIcon: {
    overflow: 'hidden',
    height: 405,
    width: '100%',
    alignSelf: 'stretch'
  },
  rangoDeDistancia: {
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    color: Color.sportsVioleta,
    lineHeight: 34,
    fontFamily: FontFamily.inputPlaceholder,
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
    marginTop: 15,
    width: 333
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
    width: 333
  },
  maps: {
    backgroundColor: Color.blanco,
    padding: Padding.p_xl,
    maxHeight: '100%'
  }
})

export default Maps
