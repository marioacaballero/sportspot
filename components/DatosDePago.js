import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, Color, FontSize, Border } from '../GlobalStyles'

const DatosDePago = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.datosDePago}>
      <View style={[styles.pencillineParent, styles.pencillineParentPosition]}>
        <View style={styles.pencilline}>
          <Image
            style={styles.walletIcon}
            contentFit="cover"
            source={require('../assets/wallet.png')}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.datosDePagoWrapper}>
            <Text style={[styles.datosDePago1, styles.datosTypo1]}>
              Datos de pago
            </Text>
          </View>
          <Text
            style={[styles.imGoingTo, styles.datosTypo1]}
          >{`Añade o elimina métdos de pago de forma segura para agilizar el proceso de inscripción

`}</Text>
        </View>
      </View>
      <View style={styles.gestionaTuCuentaWrapper}>
        <Text style={[styles.gestionaTuCuentaContainer, styles.datosTypo1]}>
          {`GESTIONA TU `}CUENTA
        </Text>
      </View>
      <View style={[styles.datosDePagoInner, styles.pencillineParentPosition]}>
        <View style={styles.datosDePagoContainer}>
          <Text style={[styles.datosDePago2, styles.datosTypo1]}>
            Datos de pago
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.aadirTarjetaWrapper}
        onPress={() => navigation.navigate('Metodo')}
      >
        <Text style={[styles.aadirTarjeta, styles.datosTypo1]}>
          Añadir tarjeta
        </Text>
      </Pressable>
      <View style={[styles.menInferior, styles.menInferiorLayout3]}>
        <View style={[styles.groupParent, styles.menInferiorLayout3]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate('UltimasConsultas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-1171276700.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.vector, styles.frameLayout3]}
            onPress={() => navigation.navigate('Favoritos1')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/vector1.png')}
            />
          </Pressable>
          <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
          />
          <Pressable
            style={[styles.container, styles.frameLayout3]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-1547756022.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout3]}
            onPress={() => navigation.navigate('TuPerfil')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-1171276701.png')}
            />
          </Pressable>
        </View>
        <Image
          style={styles.menInferiorChild}
          contentFit="cover"
          source={require('../assets/ellipse-7194.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pencillineParentPosition: {
    width: 320,
    left: 20,
    position: 'absolute'
  },
  datosTypo1: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  menInferiorLayout3: {
    width: 360,
    position: 'absolute'
  },
  frameLayout3: {
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
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch',
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
    marginTop: 5,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  frameParent: {
    width: 201,
    height: 83,
    paddingHorizontal: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_mini
  },
  pencillineParent: {
    top: 172,
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
    height: 148,
    flexDirection: 'row'
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch',
    fontWeight: '700'
  },
  gestionaTuCuentaWrapper: {
    top: 67,
    left: 20,
    position: 'absolute'
  },
  datosDePago2: {
    color: Color.sportsNaranja,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.size_sm
  },
  datosDePagoContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  datosDePagoInner: {
    top: 140,
    justifyContent: 'center'
  },
  aadirTarjeta: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  aadirTarjetaWrapper: {
    top: 257,
    left: 40,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsVioleta,
    width: 281,
    height: 43,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
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
  menInferiorChild: {
    top: 0,
    left: 165,
    width: 37,
    height: 24,
    position: 'absolute'
  },
  menInferior: {
    marginLeft: -180,
    bottom: 0,
    left: '50%',
    height: 75
  },
  datosDePago: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default DatosDePago
