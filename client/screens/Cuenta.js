import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, FontSize, Border } from '../GlobalStyles'
import { Path, Rect, Svg } from 'react-native-svg'

const Cuenta = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.cuenta}>
      <View
        style={[styles.gestionaTuCuentaWrapper, styles.frameParentPosition]}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={[styles.gestionaTuCuentaContainer, styles.editarPerfilTypo]}
          >
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
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('EditarPerfil')}
        >
          <View style={[styles.pencilline, styles.pencillineSpaceBlock]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector3.png')}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Editar perfil
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Actualiza los datos de tu cuenta
            </Text>
          </View>
          <View style={styles.arrowleftSpaceBlock}>
            <Image
              style={styles.vectorIconLayout}
              contentFit="cover"
              source={require('../assets/vector4.png')}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.pencillineShadowBox}
          onPress={() => navigation.navigate('Seguridad')}
        >
          <View style={[styles.pencilline1, styles.pencillineSpaceBlock]}>
            <Image
              style={styles.shieldcheckIcon}
              contentFit="cover"
              source={require('../assets/shieldcheck.png')}
            />
          </View>
          <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Seguirdad
              </Text>
            </View>
            <Text style={[styles.imGoingTo1, styles.goingTypo]}>
              Mantén segura tu cuenta, elimina tu cuenta
            </Text>
          </View>
          <View style={styles.arrowleftSpaceBlock}>
            <Image
              style={styles.vectorIconLayout}
              contentFit="cover"
              source={require('../assets/vector4.png')}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.pencillineShadowBox}
          onPress={() => navigation.navigate('DatosDePago')}
        >
          <View style={[styles.pencilline1, styles.pencillineSpaceBlock]}>
            <Image
              style={styles.shieldcheckIcon}
              contentFit="cover"
              source={require('../assets/wallet.png')}
            />
          </View>
          <View style={[styles.frameView, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Datos de pago
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Elimina o añade métodos de pago
            </Text>
          </View>
          <View style={styles.arrowleftSpaceBlock}>
            <Image
              style={styles.vectorIconLayout}
              contentFit="cover"
              source={require('../assets/vector4.png')}
            />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  editarPerfilTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  menInferiorLayout: {
    width: 360,
    position: 'absolute'
  },
  frameLayout: {
    height: 20
    // marginLeft: 47
  },
  pencillineSpaceBlock: {
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    alignItems: 'center'
  },
  frameSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingHorizontal: Padding.p_3xs,
    width: 201
  },
  goingTypo: {
    marginTop: 5,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_5xl
  },
  gestionaTuCuentaWrapper: {
    // top: 67
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
    width: 23
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33
  },
  container: {
    width: 20
  },
  frame: {
    width: 19
  },
  groupParent: {
    backgroundColor: Color.gris,
    height: 65,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row'
  },
  vectorIcon: {
    width: 25,
    height: 25
  },
  pencilline: {
    paddingLeft: Padding.p_xl
  },
  editarPerfil: {
    fontSize: FontSize.size_sm,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  editarPerfilWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  imGoingTo: {
    alignSelf: 'stretch'
  },
  frameGroup: {
    paddingTop: Padding.p_xs
  },
  vectorIconLayout: {
    height: 13,
    width: 15,
    transform: [
      {
        rotate: '-180deg'
      }
    ]
  },
  arrowleftSpaceBlock: {
    transform: [
      {
        rotate: '-180deg'
      }
    ],
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_11xs,
    height: 67,
    width: 48
  },
  pencillineParent: {
    height: 62,
    // width: 320,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    flexDirection: 'row'
  },
  shieldcheckIcon: {
    width: 32,
    height: 32
  },
  pencilline1: {
    paddingLeft: Padding.p_mini
  },
  imGoingTo1: {
    width: 214
  },
  frameContainer: {
    paddingTop: Padding.p_sm,
    height: 62
  },
  pencillineShadowBox: {
    marginTop: 15,
    // width: 320,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    flexDirection: 'row'
  },
  frameView: {
    paddingTop: Padding.p_mini,
    paddingHorizontal: Padding.p_3xs,
    width: 201
  },
  frameParent: {
    // top: 145
  },
  cuenta: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Cuenta
