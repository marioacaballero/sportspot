import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, FontSize, Border } from '../GlobalStyles'
import { Path, Rect, Svg } from 'react-native-svg'

const DatosDePago = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.datosDePago}>
      <View
        style={{
          // paddingTop: 30,
          // paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
          GESTIONA TU CUENTA
        </Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Svg width="25" height="25" viewBox="0 0 21 21" fill="none">
            <Rect
              width="21"
              height="21"
              transform="translate(0 21) rotate(-90)"
              fill="white"
            />
            <Path
              d="M6.17798 4.98006L0.65625 10.5018L6.17798 16.0234L7.10604 15.0953L3.16862 11.158L20.3124 11.158L20.3124 9.84546L3.16874 9.84546L7.10604 5.90816L6.17798 4.98006Z"
              fill={Color.sportsVioleta}
            />
          </Svg>
        </Pressable>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 15
        }}
      >
        <Text style={styles.datosDePago2}>Datos de pago</Text>
      </View>
      <View style={styles.pencillineParent}>
        <View style={styles.pencilline}>
          <Image
            style={styles.walletIcon}
            contentFit="cover"
            source={require('../assets/wallet.png')}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.datosDePagoWrapper}>
            <Text style={[styles.datosDePago1, styles.imGoingToFlexBox]}>
              Datos de pago
            </Text>
          </View>
          <Text style={[styles.imGoingTo, styles.imGoingToFlexBox]}>
            Añade o elimina métdos de pago de forma segura para agilizar el
            proceso de inscripción
          </Text>
          <Pressable
            style={styles.aadirTarjetaWrapper}
            onPress={() => navigation.navigate('Metodo')}
          >
            <Text style={[styles.aadirTarjeta, styles.datosTypo]}>
              Añadir tarjeta
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imGoingToFlexBox: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  datosTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  menInferiorLayout: {
    width: 360,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  walletIcon: {
    width: 32,
    height: 32
  },
  pencilline: {
    paddingLeft: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_mini,
    paddingTop: Padding.p_mini,
    alignItems: 'center'
  },
  datosDePago1: {
    display: 'flex',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.size_sm,
    alignItems: 'center',
    flex: 1
  },
  datosDePagoWrapper: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  imGoingTo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inputPlaceholder,
    marginTop: 5,
    textAlign: 'left'
  },
  frameParent: {
    width: 330,

    paddingHorizontal: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_mini
  },
  pencillineParent: {
    // position: 'realtive',
    padding: 20,
    width: '100%',
    top: 30,
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    // height: 148,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  labelFlexBox: {
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  datosDePago2: {
    color: Color.sportsNaranja,
    textAlign: 'left',
    fontSize: FontSize.size_sm,
    fontWeight: '700'
  },
  datosDePagoContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  aadirTarjeta: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    textAlign: 'left'
  },
  aadirTarjetaWrapper: {
    marginTop: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsVioleta,
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignItems: 'center',
    right: 30
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 22,
    height: 25
  },
  vector: {
    width: 23,
    marginLeft: 47
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    width: 20,
    marginLeft: 47
  },
  frame: {
    width: 19,
    marginLeft: 47
  },
  groupParent: {
    top: 10,
    left: 0,
    backgroundColor: Color.gris,
    height: 65,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  datosDePago: {
    backgroundColor: Color.blanco,
    // height: 800,
    // overflow: 'hidden',
    paddingTop: 30,
    paddingHorizontal: 15,
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DatosDePago
