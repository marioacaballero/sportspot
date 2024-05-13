import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  Padding,
  FontSize,
  Border
} from '../../../GlobalStyles'
import BackArrowSVG from '../../../components/SVG/BackArrowSVG'
import { LinearGradient } from 'expo-linear-gradient'

const DatosDePago = () => {
  const navigation = useNavigation()

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.datosDePago}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
            {`GESTIONA TU
CUENTA`}
          </Text>
          {/* <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable> */}
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
              source={require('../../../assets/wallet.png')}
            />
            <Text style={[styles.datosDePago1, styles.imGoingToFlexBox]}>
              Datos de pago
            </Text>
          </View>
          <View style={styles.frameParent}>
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
    </LinearGradient>
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
  walletIcon: {
    width: 32,
    height: 32
  },
  pencilline: {
    paddingLeft: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    paddingBottom: 0,
    paddingTop: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  datosDePago1: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.size_sm,
    alignItems: 'center',
    top: 7,
    left: 15
  },
  datosDePagoWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  imGoingTo: {
    fontSize: 13,
    fontFamily: FontFamily.inputPlaceholder,
    marginTop: 5,
    textAlign: 'left'
  },
  frameParent: {
    paddingHorizontal: Padding.p_3xs,
    paddingBottom:0,
    paddingTop: 8
  },
  pencillineParent: {
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
    elevation: 5,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.blanco,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Color.blanco
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl,
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
    fontSize: 18,
    fontWeight: '700'
  },
  aadirTarjeta: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    textAlign: 'left'
  },
  aadirTarjetaWrapper: {
    marginTop: 20,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsVioleta,
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignItems: 'center'
    // right: 30
  },
  datosDePago: {
    paddingTop: 30,
    paddingHorizontal: 15,
    width: '100%',
    flex: 1,
    alignItems: 'center'
  }
})

export default DatosDePago
