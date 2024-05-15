import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { changePassword, deleteUser } from '../../redux/actions/users'
import { clearUser } from '../../redux/slices/users.slices'
import CustomAlert from '../../components/CustomAlert'
import { LinearGradient } from 'expo-linear-gradient'

const Seguridad = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const newPasswordInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const { user } = useSelector((state) => state.users)

  const [mostrarCamposExtras, setMostrarCamposExtras] = useState(false)
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  // console.log(showAlert)

  const valuesLogin = (field, value) => {
    setPassword((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleShowAlert = (message, type) => {
    setType(type)
    setMessage(message)
    setShowAlert(true)
  }

  const handleCloseAlert = (button) => {
    setShowAlert(false)
    if (type === 'account' && button === 'aceptar') {
      dispatch(clearUser())
      dispatch(deleteUser(user.id))
      navigation.navigate('SignIn')
    }
  }

  // const handleShowAlertAccount = (message) => {
  //   setMessageAccount(message)
  //   setShowAlertAccount(true)
  // }

  const handleChangePassword = () => {
    if (password.newPassword === password.confirmPassword) {
      if (password.newPassword.length >= 3) {
        const data = {
          id: user.id,
          oldPassword: password.oldPassword,
          newPassword: password.confirmPassword
        }
        dispatch(changePassword(data))
        handleShowAlert('Contraseña cambiada exitosamente', 'pass')
        // navigation.goBack()
      } else {
        handleShowAlert(
          'La nueva contraseña debe tener al menos 3 caracteres',
          'pass'
        )
      }
    } else {
      handleShowAlert('Las contraseñas no coinciden', 'pass')
    }
  }

  const handleContraseñaFocus = () => {
    setMostrarCamposExtras(true)
  }

  const handleDeleteUser = () => {
    // const confirmDelete = window.confirm(
    //   '¿Seguro que quieres borrar tu cuenta?'
    // )
    handleShowAlert('¿Desea borrar permanentemente su cuenta?', 'account')
    // if (confirmDelete) {
    //   dispatch(clearUser())
    //   dispatch(deleteUser(user.id))
    //   navigation.navigate('SignIn')
    // }
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.seguridad}>
          <View style={styles.viewContainer}>
            <Text
              style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}
            >
              {`GESTIONA TU
CUENTA`}
            </Text>
            {/* <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable> */}
          </View>
          <View style={{ width: '100%' }}>
            <Text style={[styles.seguridad1, styles.seguridad1Typo]}>
              Seguridad
            </Text>
          </View>
          <View style={styles.seguridadChild}>
            <View style={styles.card1}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 8
                }}
              >
                <Image
                  style={{ height: 32, width: 32 }}
                  contentFit="cover"
                  source={require('../../assets/password.png')}
                />
                <Text
                  style={{
                    fontSize: FontSize.inputLabel_size,
                    textTransform: 'capitalize',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: Color.sportsVioleta
                  }}
                >
                  Contraseña
                </Text>
              </View>
              <View style={styles.inputParent}>
                <View style={styles.inputLayout}>
                  <View style={styles.inputContent}>
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Email
                    </Text>
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
                      onChangeText={(value) =>
                        valuesLogin('oldPassword', value)
                      }
                      secureTextEntry={true}
                      onSubmitEditing={() =>
                        newPasswordInputRef.current.focus()
                      }
                    />
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
                        onChangeText={(value) =>
                          valuesLogin('newPassword', value)
                        }
                        value={password.newPassword}
                        secureTextEntry={true}
                        onSubmitEditing={() => passwordInputRef.current.focus()}
                        ref={newPasswordInputRef}
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
                        ref={passwordInputRef}
                        onSubmitEditing={() => handleChangePassword()}
                      />
                    </View>
                  </View>
                </View>
              )}
              <Pressable
                style={{
                  backgroundColor: Color.sportsVioleta,
                  marginTop: 10,
                  paddingVertical: Padding.p_6xs,
                  height: 43,
                  width: '100%',
                  borderRadius: Border.br_31xl,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={handleChangePassword}
              >
                <Text
                  style={[styles.cambiarContrasea, styles.eliminarCuentaTypo]}
                >
                  Cambiar contraseña
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{ marginTop: mostrarCamposExtras ? '10%' : '10%' }}>
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
        <CustomAlert
          visible={showAlert}
          message={message}
          onClose={handleCloseAlert}
          type={type}
        />
      </ScrollView>
    </LinearGradient>
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
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 700
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
    width: '100%',
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
    width: Dimensions.get('screen').width * 0.9,
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
    fontSize: FontSize.size_11xl,
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
    fontFamily: FontFamily.inputPlaceholder,
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
    width: '100%',
    height: 107,
    alignItems: 'flex-end',
    // marginLeft: 11,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  card1: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  card2: {
    width: '100%',
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  seguridadChild: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4
    },
    elevation: 5,
    shadowRadius: 10,
    shadowOpacity: 1,
    top: 30
  },
  cambiarContrasea: {
    color: Color.violeta3,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  cambiarContraseaWrapper: {
    backgroundColor: Color.sportsVioleta,
    marginTop: 10
  },
  eliminarCuenta: {
    fontWeight: 'bold',
    fontFamily: FontFamily.inputPlaceholder,
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
  },
  frame: {
    width: 19
  },
  groupParent: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    alignItems: 'center',
    flexDirection: 'row'
  },
  seguridad: {
    paddingTop: 20,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 160
  },
  viewContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
})

export default Seguridad
