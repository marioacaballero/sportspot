import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, FontSize, Border } from '../GlobalStyles'
import { Path, Rect, Svg } from 'react-native-svg'

const Cuenta = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.cuenta}>
      <View>
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
            {`GESTIONA TU 
CUENTA`}
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
      <View>
        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('EditarPerfil')}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require('../assets/vector3.png')}
          />
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

          <Image
            style={styles.vectorIconLayout}
            contentFit="cover"
            source={require('../assets/vector4.png')}
          />
        </Pressable>

        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('Seguridad')}
        >
          <Image
            style={styles.shieldcheckIcon}
            contentFit="cover"
            source={require('../assets/shieldcheck.png')}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Seguirdad
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Mantén segura tu cuenta, elimina tu cuenta
            </Text>
          </View>

          <Image
            style={styles.vectorIconLayout}
            contentFit="cover"
            source={require('../assets/vector4.png')}
          />
        </Pressable>

        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('DatosDePago')}
        >
          <Image
            style={styles.shieldcheckIcon}
            contentFit="cover"
            source={require('../assets/wallet.png')}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Datos de pago
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Elimina o añade métodos de pago
            </Text>
          </View>

          <Image
            style={styles.vectorIconLayout}
            contentFit="cover"
            source={require('../assets/vector4.png')}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  editarPerfilTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },

  frameLayout: {
    height: 20
  },
  pencillineSpaceBlock: {
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    alignItems: 'center'
  },
  frameSpaceBlock: {},
  goingTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl
  },
  gestionaTuCuentaWrapper: {},
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
    alignItems: 'center'
  },
  editarPerfilWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  frameGroup: {
    flexDirection: 'column',
    width: '100%',
    marginLeft: 10
  },
  vectorIconLayout: {
    height: 13,
    width: 15
  },
  pencillineParent: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    marginTop: 15,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 40
  },
  shieldcheckIcon: {
    width: 32,
    height: 32
  },
  pencilline1: {
    paddingLeft: Padding.p_mini
  },
  frameContainer: {
    paddingTop: Padding.p_sm,
    height: 62
  },
  pencillineShadowBox: {
    marginTop: 15,
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
    paddingHorizontal: Padding.p_3xs
  },
  cuenta: {
    backgroundColor: Color.blanco,
    paddingHorizontal: 15,
    paddingVertical: 30,
    flex: 1
  }
})

export default Cuenta
