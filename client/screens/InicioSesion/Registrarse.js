import React, { useState, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, register } from '../../redux/actions/users'
import { createCustomer } from '../../redux/actions/stripe'

import CustomAlert from '../../components/CustomAlert'

const Registrarse = () => {
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const { users } = useSelector((state) => state.users)

  const [registerUser, setRegisterUser] = useState({
    password: '',
    email: ''
    // nickname: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const onValuesUser = (field, value) => {
    setRegisterUser((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const handleShowAlert = (message) => {
    setMessage(message)
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const onSubmit = () => {
    try {
      if (registerUser.email && registerUser.password && confirmPassword) {
        const emailExists = users.some(
          (user) => user.email === registerUser.email
        )
        console.log(emailExists)
        if (emailExists) {
          console.log('alert mail en uso')
          handleShowAlert('El correo electrónico ya está en uso')
        } else {
          if (registerUser.password === confirmPassword) {
            const data = {
              name: 'Minguito',
              email: registerUser.email
            }
            dispatch(createCustomer(data))
            dispatch(register(registerUser))
            navigation.navigate('IniciarSesin')
          } else {
            handleShowAlert('Las contraseñas no coinciden')
          }
        }
      } else {
        handleShowAlert('Rellene todos los campos')
      }
    } catch (error) {
      console.log('caigo en error')
      console.error('error: ', error)
    }
  }

  return (
    <View style={styles.registrarse}>
      <Image
        style={styles.background}
        source={require('../../assets/BGInicio.png')}
        contentFit="cover"
      />
      <ScrollView contentContainerStyle={{height:"100%",justifyContent:"center"}}style={styles.frameParent}>
        <View style={styles.capturaDePantalla20231024Parent}>
          <Image
            style={styles.capturaDePantalla20231024Icon}
            contentFit="cover"
            source={require('../../assets/spotsport.png')}
          />
          <Text style={styles.encuentraTuPrueba}>ENCUENTRA TU PRUEBA</Text>
        </View>

        <View style={styles.frameGroup}>
          {/* <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder="Nombre de usuario"
              value={registerUser.nickname}
              onChangeText={(value) => onValuesUser('nickname', value)}
              onSubmitEditing={() => emailInputRef.current.focus()}
            />
          </View> */}
<Text
            style={{
              color: '#F25910',
              fontSize: 40,
              width: '100%',
              textAlign: 'center',marginBottom:20
              ,fontWeight:600
            }}
          >
            Nuevo usuario
          </Text>
          <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder="Email"
              value={registerUser.email}
              onChangeText={(value) => onValuesUser('email', value)}
              onSubmitEditing={() => passwordInputRef.current.focus()}
              ref={emailInputRef}
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={styles.nombreDeUsuario}
              placeholder="Contraseña"
              value={registerUser.password}
              onChangeText={(value) => onValuesUser('password', value)}
              secureTextEntry={true}
              ref={passwordInputRef}
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />
          </View>

          <View style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={styles.nombreDeUsuario}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry={true}
              onSubmitEditing={onSubmit}
              ref={confirmPasswordRef}
            />
          </View>
          <Pressable
            style={[styles.registrarseWrapper, styles.wrapperFlexBox]}
            onPress={() => {
              onSubmit()
            }}
          >
            <Text style={[styles.registrarse1, styles.registrarse1Typo]}>
              Registrarse
            </Text>
          </Pressable>
          <TouchableOpacity onPress={() => navigation.navigate('IniciarSesin')}>
            <Text style={[styles.hasOlvidadoTu, styles.registrarse1Typo]}>
              ¿Ya tenes cuenta?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <CustomAlert
        visible={showAlert}
        message={message}
        onClose={handleCloseAlert}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 60,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  registrarse1Typo: {
    textAlign: 'center',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Icon: {
    width: 262,
    height: 69
  },
  encuentraTuPrueba: {
    fontSize: FontSize.size_3xl,
    color: Color.sportsNaranja,
    textAlign: 'center',
    marginTop: 6,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Parent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nombreDeUsuario: {
    color: Color.sportsVioleta,
    textAlign: 'center',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    width: '90%'
  },
  nombreDeUsuarioWrapper: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  emailWrapper: {
    marginBottom: 10,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  registrarse1: {
    color: Color.gris,
    fontSize: FontSize.size_lg
  },
  registrarseWrapper: {
    backgroundColor: Color.sportsNaranja,
    paddingHorizontal: Padding.p_11xl,
    marginTop: 10,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  hasOlvidadoTu: {
    fontSize: FontSize.size_mini,
    marginTop: 10,
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  frameGroup: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10%'
  },
  frameParent: {
    paddingVertical: '20%',
    paddingHorizontal: 15,
    flex: 1,
    width: '100%'
  },
  registrarse: {
    flex: 1,
    width: '100%'
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  }
})

export default Registrarse
