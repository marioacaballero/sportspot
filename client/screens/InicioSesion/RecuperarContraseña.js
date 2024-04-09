import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color
} from '../../GlobalStyles'
import {
  getAllUsers,
  resetPasswordMail,
  validateResetPassword
} from '../../redux/actions/users'
import CustomAlert from '../../components/CustomAlert'

const RecuperarContraseña = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { users } = useSelector((state) => state.users)

  const [email, setEmail] = useState('')
  const [currentStage, setCurrentStage] = useState(1)
  const [verificationCode, setVerificationCode] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')
  const [stateNavigate, setStateNavigate] = useState(false)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const mostrarBotonEnviar =
    email.toLowerCase().includes('.com') && email.length > 10

  const handleEmail = (text) => {
    setEmail(text)
  }

  const handleShowAlert = (message) => {
    setMessage(message)
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
    if (stateNavigate) {
      navigation.navigate('IniciarSesin')
    }
    setStateNavigate(false)
  }

  const handleSendEmail = () => {
    const emailExists = users.some((userObj) => userObj.email === email)

    if (emailExists) {
      setCurrentStage(2)
      dispatch(resetPasswordMail({ email }))
    } else {
      handleShowAlert('El email no existe')
    }
  }

  const handlePassword1 = (text) => {
    setPassword1(text)
  }

  const handlePassword2 = (text) => {
    setPassword2(text)
  }

  const handleVerificationCode = (text) => {
    setVerificationCode(text)
  }

  const handleResetPassword = () => {
    if (password1 === password2) {
      const data = {
        email,
        code: verificationCode,
        password: password2
      }
      dispatch(validateResetPassword(data))
      setStateNavigate(true)
      handleShowAlert('Tu contraseña se ha restablecido')
    } else {
      handleShowAlert('Las contraseñas no coinciden')
    }
  }

  return (
    <View style={styles.iniciarSesin}>
      <Image
        style={styles.background}
        source={require('../../assets/BGInicio.png')}
        contentFit="cover"
      />
      <View style={styles.frameParent}>
        <View style={styles.capturaDePantalla20231024Parent}>
          <Image
            style={styles.capturaDePantalla20231024Icon}
            contentFit="cover"
            source={require('../../assets/spotsport.png')}
          />
          <Text style={styles.encuentraTuPrueba}>ENCUENTRA TU PRUEBA</Text>
        </View>
        {currentStage === 1 && (
          <View style={styles.frameGroup}>
            <Text style={styles.hasOlvidadoTu}>Ingresa tu mail</Text>
            <View
              style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}
            >
              <TextInput
                style={styles.nombreDeUsuario}
                placeholder="Email"
                value={email}
                onChangeText={handleEmail}
              />
            </View>
            {mostrarBotonEnviar && (
              <Pressable style={styles.enviarWrapper} onPress={handleSendEmail}>
                <Text style={styles.enviar}>
                  Enviar código de restablecimiento
                </Text>
              </Pressable>
            )}
          </View>
        )}

        {currentStage === 2 && (
          <View style={styles.frameGroup}>
            <Text style={styles.hasOlvidadoTu}>Ingresa el código</Text>
            <View
              style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}
            >
              <TextInput
                style={styles.nombreDeUsuario}
                placeholder="Código"
                value={verificationCode}
                onChangeText={handleVerificationCode}
              />
            </View>
            <Text style={styles.hasOlvidadoTu}>Crea una nueva contraseña</Text>
            <View
              style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}
            >
              <TextInput
                style={styles.nombreDeUsuario}
                placeholder="Nueva contraseña"
                secureTextEntry={true}
                value={password1}
                onChangeText={handlePassword1}
              />
            </View>
            <View
              style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}
            >
              <TextInput
                style={styles.nombreDeUsuario}
                placeholder="Confirmar contraseña"
                secureTextEntry={true}
                value={password2}
                onChangeText={handlePassword2}
              />
            </View>
            <Pressable
              style={styles.enviarWrapper}
              onPress={handleResetPassword}
            >
              <Text style={styles.enviar}>Restablecer contraseña</Text>
            </Pressable>
          </View>
        )}
      </View>

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
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center'
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
    alignItems: 'center',
    marginBottom: '5%'
  },
  nombreDeUsuario: {
    width: '100%',
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  nombreDeUsuarioWrapper: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    marginTop: '5%'
  },
  contraseaWrapper: {
    marginTop: 10,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  entrar: {
    color: Color.gris,
    fontSize: FontSize.size_lg
  },
  entrarWrapper: {
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
    fontSize: FontSize.size_xl,
    marginTop: 10,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontWeight: '700'
  },
  enviarWrapper: {
    marginTop: '5%'
  },
  enviar: {
    color: Color.sportsVioleta,
    fontWeight: '700',
    textAlign: 'left',
    fontSize: FontSize.size_mini
  },
  frameGroup: {
    width: 318,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  frameParent: {
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_2xl,
    marginTop: '35%',
    paddingBottom: Padding.p_152xl,
    alignItems: 'center'
  },
  iniciarSesin: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    height: 700
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})

export default RecuperarContraseña
