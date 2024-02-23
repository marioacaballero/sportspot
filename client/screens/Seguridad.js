import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'
import BackArrowSVG from '../components/SVG/BackArrowSVG'
import { changePassword, deleteUser } from '../redux/actions/users'
import { clearUser } from '../redux/slices/users.slices'

const Seguridad = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user, isOkay } = useSelector((state) => state.users)

  const [mostrarCamposExtras, setMostrarCamposExtras] = useState(false)
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const valuesLogin = (field, value) => {
    setPassword((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleChangePassword = () => {
    if (password.newPassword === password.confirmPassword) {
      if (isOkay) {
        if (password.newPassword.length >= 3) {
          const data = {
            id: user.id,
            oldPassword: password.oldPassword,
            newPassword: password.confirmPassword
          }
          dispatch(changePassword(data))
        } else {
          alert('La nueva contraseña debe tener al menos 3 caracteres')
        }
      } else {
        alert('Contraseña actual incorrecta')
      }
    } else {
      alert('Las contraseñas no coinciden')
    }
  }

  const handleContraseñaFocus = () => {
    setMostrarCamposExtras(true)
  }

  const handleDeleteUser = () => {
    const confirmDelete = window.confirm(
      '¿Seguro que quieres borrar tu cuenta?'
    )
    if (confirmDelete) {
      dispatch(clearUser())
      dispatch(deleteUser(user.id))
      navigation.navigate('SignIn')
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.seguridad}>
        <View style={styles.viewContainer}>
          <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
            {'GESTIONA TU '}CUENTA
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={{ width: '100%' }}>
          <Text style={[styles.seguridad1, styles.seguridad1Typo]}>
            Seguridad
          </Text>
        </View>
        <View style={styles.seguridadChild}>
          <View style={styles.card1}>
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
                    {user && user.email
                      ? `${user.email.substring(0, 3)}****${user.email.slice(
                          -7
                        )}`
                      : ''}
                  </Text>
                </View>
              </View>
              <View style={[styles.inputLayout]}>
                <View style={styles.inputContent}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Contraseña actual
                  </Text>
                  <TextInput
                    placeholder="********"
                    style={styles.placehoder}
                    onFocus={handleContraseñaFocus}
                    value={password.oldPassword}
                    onChangeText={(value) => valuesLogin('oldPassword', value)}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          </View>
          {mostrarCamposExtras && (
            <View style={styles.card2}>
              <View style={[styles.inputLayout]}>
                <View style={styles.inputContent}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Nueva contraseña
                  </Text>
                  <TextInput
                    placeholder="********"
                    style={styles.placehoder}
                    onChangeText={(value) => valuesLogin('newPassword', value)}
                    value={password.newPassword}
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={[styles.inputLayout]}>
                <View style={styles.inputContent}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Repite la nueva contraseña
                  </Text>
                  <TextInput
                    placeholder="********"
                    style={styles.placehoder}
                    onChangeText={(value) =>
                      valuesLogin('confirmPassword', value)
                    }
                    value={password.confirmPassword}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={{ marginTop: mostrarCamposExtras ? '25%' : '8%' }}>
          <Pressable
            style={[styles.cambiarContraseaWrapper, styles.wrapperLayout]}
            onPress={() => handleChangePassword()}
          >
            <Text style={[styles.cambiarContrasea, styles.eliminarCuentaTypo]}>
              Cambiar contraseña
            </Text>
          </Pressable>
          <Pressable
            onPress={handleDeleteUser}
            style={[styles.eliminarCuentaWrapper, styles.wrapperLayout]}
          >
            <Text style={[styles.eliminarCuenta, styles.eliminarCuentaTypo]}>
              Eliminar cuenta
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%'
  },
  seguridadInnerPosition: {
    // left: 20,
    // position: 'absolute'
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
    height: 32
    // marginLeft: 11
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
    paddingVertical: Padding.p_5xs,
    marginBottom: 5,
    marginTop: 5
  },
  wrapperLayout: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    height: 43,
    width: 281,
    borderRadius: Border.br_31xl,
    // left: 31,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  eliminarCuentaTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
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
    width: 32
  },
  contrasea: {
    fontSize: FontSize.inputLabel_size,
    textTransform: 'capitalize',
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholderMedium,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    color: Color.sportsVioleta
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
    flex: 1
  },
  inputParent: {
    width: 298,
    height: 107,
    alignItems: 'flex-end',
    // marginLeft: 11,
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
  card2: {
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
    backgroundColor: Color.blanco,
    marginTop: 10,
    flex: 1
  },
  seguridadChild: {
    top: 30,
    height: '50%'
  },
  cambiarContrasea: {
    color: Color.violeta3,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  cambiarContraseaWrapper: {
    backgroundColor: Color.sportsVioleta
  },
  eliminarCuenta: {
    fontWeight: '600',
    fontFamily: FontFamily.inputPlaceholderSemiBold,
    color: Color.rojoUbiqum
  },
  eliminarCuentaWrapper: {
    borderColor: Color.sportsNaranja,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 0,
    height: 43,
    width: 281,
    borderRadius: Border.br_31xl,
    top: 10
  },
  wrapper: {
    width: 22,
    height: 25
  },
  container: {
    width: 20
    // marginLeft: 47
  },
  frame: {
    width: 19
    // marginLeft: 47
  },
  groupParent: {
    top: 10,
    // left: 0,
    backgroundColor: Color.gris,
    height: 65,
    // paddingHorizontal: Padding.p_xl,
    // paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row'
    // justifyContent: 'center'
  },
  seguridad: {
    paddingTop: 20,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: Color.blanco,
    alignItems: 'center',
    paddingBottom: 160
  },
  viewContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
})

export default Seguridad
