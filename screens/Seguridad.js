import * as React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'

const Seguridad = () => {
  // const navigation = useNavigation()

  return (
    <View style={styles.seguridad}>
      <View
        style={[styles.gestionaTuCuentaWrapper, styles.seguridadInnerPosition]}
      >
        <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
          {'GESTIONA TU '}CUENTA
        </Text>
      </View>
      <View style={[styles.seguridadInner, styles.seguridadInnerPosition]}>
        <View style={[styles.seguridadWrapper, styles.groupParentFlexBox]}>
          <Text style={[styles.seguridad1, styles.seguridad1Typo]}>
            Seguridad
          </Text>
        </View>
      </View>
      <View style={styles.seguridadChild}>
        <View style={styles.card1Wrapper}>
          <View style={styles.card1}>
            <Image
              style={styles.favoriteIActiveIcon}
              contentFit="cover"
              source={require('../assets/favorite-iactive.png')}
            />
            <Image
              style={[styles.passwordIcon, styles.passwordIconLayout]}
              contentFit="cover"
              source={require('../assets/password.png')}
            />
            <View style={[styles.contraseaWrapper, styles.passwordIconLayout]}>
              <Text style={[styles.contrasea, styles.iconLayout]}>
                Contraseña
              </Text>
            </View>
            <View style={styles.inputParent}>
              <View style={styles.inputLayout}>
                <View style={styles.inputContent}>
                  <Text style={[styles.label, styles.labelFlexBox]}>Email</Text>
                  <Text style={[styles.placehoder, styles.seguridad1Typo]}>
                    ejemplo@gmail.com
                  </Text>
                </View>
              </View>
              <View style={[styles.inputLayout]}>
                <View style={styles.inputContent}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Contraseña
                  </Text>
                  <Text style={[styles.placehoder, styles.seguridad1Typo]}>
                    ************
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cambiarContraseaWrapper, styles.wrapperLayout]}>
        <Text style={[styles.cambiarContrasea, styles.eliminarCuentaTypo]}>
          Cambiar contraseña
        </Text>
      </View>
      <View style={[styles.eliminarCuentaWrapper, styles.wrapperLayout]}>
        <Text style={[styles.eliminarCuenta, styles.eliminarCuentaTypo]}>
          Eliminar cuenta
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  seguridadInnerPosition: {
    left: 20,
    position: 'absolute'
  },
  labelFlexBox: {
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  groupParentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  seguridad1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  passwordIconLayout: {
    height: 32,
    marginLeft: 11
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  inputLayout: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: 295,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: Padding.p_5xs
  },
  wrapperLayout: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    height: 43,
    width: 281,
    borderRadius: Border.br_31xl,
    left: 31,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute'
  },
  eliminarCuentaTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
  },
  menInferiorLayout: {
    width: 360,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  gestionaTuCuentaWrapper: {
    top: 67
  },
  seguridad1: {
    color: Color.sportsNaranja
  },
  seguridadWrapper: {
    alignItems: 'center'
  },
  seguridadInner: {
    top: 140,
    width: 320,
    justifyContent: 'center'
  },
  favoriteIActiveIcon: {
    width: 16,
    height: 35,
    display: 'none'
  },
  passwordIcon: {
    width: 32,
    marginLeft: 11
  },
  contrasea: {
    top: '0%',
    left: '0%',
    fontSize: FontSize.inputLabel_size,
    textTransform: 'capitalize',
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholderMedium,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    color: Color.sportsVioleta,
    position: 'absolute'
  },
  contraseaWrapper: {
    width: 195
  },
  label: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  placehoder: {
    color: Color.sportsVioleta,
    fontSize: FontSize.size_sm,
    alignSelf: 'stretch'
  },
  inputContent: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flex: 1
  },
  inputParent: {
    width: 298,
    height: 107,
    alignItems: 'flex-end',
    marginLeft: 11,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  card1: {
    borderRadius: Border.br_base,
    shadowColor: 'rgba(83, 89, 144, 0.07)',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    width: 324,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.blanco
  },
  card1Wrapper: {
    height: 146
  },
  seguridadChild: {
    top: 173,
    left: 13,
    position: 'absolute'
  },
  cambiarContrasea: {
    color: Color.violeta3,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  cambiarContraseaWrapper: {
    top: 336,
    backgroundColor: Color.sportsVioleta
  },
  eliminarCuenta: {
    fontWeight: '600',
    fontFamily: FontFamily.inputPlaceholderSemiBold,
    color: Color.rojoUbiqum
  },
  eliminarCuentaWrapper: {
    top: 409,
    borderColor: Color.sportsNaranja,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 0,
    height: 43,
    width: 281,
    borderRadius: Border.br_31xl,
    left: 31
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  seguridad: {
    height: 800,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.blanco,
    flex: 1
  }
})

export default Seguridad
