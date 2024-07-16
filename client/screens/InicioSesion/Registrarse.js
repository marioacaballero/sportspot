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
import { useTranslation } from "react-i18next";
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import CustomAlert from '../../components/CustomAlert'
import { StatusBar, Platform } from 'react-native'

const Registrarse = () => {
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  const { t, i18n } = useTranslation();
  const [expoPushToken, setExpoPushToken] = useState('')

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const { users } = useSelector((state) => state.users)

  const [registerUser, setRegisterUser] = useState({
    password: '',
    email: '',
    name: '',
    lastName: '',
    NotificationPush:expoPushToken
    // nickname: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])


  function handleRegistrationError(errorMessage) {
    alert(errorMessage)
    throw new Error(errorMessage)
  }
  
  async function registerForPushNotificationsAsync() {
    
    if (Platform.OS === 'android') {
      console.log("entra")
      Notifications.setNotificationChannelAsync('default', {
        name: 'Sportspot',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      })
    }
    
    if (true) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        handleRegistrationError(
          'Permission not granted to get push token for push notification!'
        )
        return
      }
      console.log(finalStatus)
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId
      if (!projectId) {
        handleRegistrationError('Project ID not found')
      }
      try {
        const pushTokenString = (
          await Notifications.getExpoPushTokenAsync({
            projectId
          })
        ).data
        console.log(pushTokenString ,"ESO ES EL TOKEN")
        return pushTokenString
      } catch (e) {
        console.log(e)
        handleRegistrationError(`${e}`)
      }
    } else {
      handleRegistrationError('Must use physical device for push notifications')
    }
  }

  useEffect(() => {
    console.log("entraaaa")

    registerForPushNotificationsAsync()
      .then((token) => {
        setRegisterUser((prev)=> {

          console.log({
            ...prev,
             NotificationPush: token
           })
          return {
           ...prev,
            NotificationPush: token
          }
        })
        console.log(registerUser,"el token despues")
      })
      .catch((error) => setExpoPushToken(`${error}`))

  }, [])

  useEffect(() => {
    if(registerUser.email == "") setEmailError("")
    console.log('Updated state:', registerUser);
  }, [registerUser]);
  
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Expresión regular para validar formato de correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setEmailError(t('emailvalid'));
    } else {
      setEmailError('');
    }
  };

  const onValuesUser = (field, value) => {
    if(!value){
      setEmailError("")
    }
    setRegisterUser((prevState) => ({
      ...prevState,
      [field]: value
    }));

    if (field === 'email') {
      validateEmail(value);
    }
  };


  const handleShowAlert = (message) => {
    setMessage(message)
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const onSubmit = () => {
    console.log("esto mando ",registerUser)
    try {
      if (registerUser.email && registerUser.password.length >= 4 && confirmPassword.length >= 4 && !emailError) {
        const emailExists = users.some(
          (user) => user.email === registerUser.email
        )
        console.log(emailExists)
        if (emailExists) {
          handleShowAlert(t('correoenuso'))
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
            handleShowAlert(t('contranocoincide'))
          }
        }
      } else {
        if(registerUser.password.length < 4){
          return  handleShowAlert(t('minimocaracter'))
         
        }
        handleShowAlert(t('rellenecampos'))
      }
    } catch (error) {
      console.log('caigo en error', error)
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
      <ScrollView
        contentContainerStyle={{ height: '100%', justifyContent: 'center' }}
        style={styles.frameParent}
      >
        <View style={styles.capturaDePantalla20231024Parent}>
          <Image
            style={styles.capturaDePantalla20231024Icon}
            contentFit="cover"
            source={require('../../assets/spotsport.png')}
          />
          <Text style={styles.encuentraTuPrueba}>{t("encuentratuprueba")}</Text>
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
              textAlign: 'center',
              marginBottom: 20,
              fontWeight: 600
            }}
          >
           {t("nuevousuario")}
          </Text>
          <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder={t("email")}
              maxLength={50}
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
              placeholder={t("contraseña")}
              maxLength={50}

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
              placeholder={t("confirmarcontraseña")}
              value={confirmPassword}
              maxLength={50}

              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry={true}
              onSubmitEditing={onSubmit}
              ref={confirmPasswordRef}
            />
          </View>
          {emailError && (
            <Text style={{padding:10,color:"red",fontWeight:600}}>{emailError}</Text>
          )}
          <Pressable
            style={[styles.registrarseWrapper, styles.wrapperFlexBox]}
            onPress={() => {
        
              onSubmit()
             
            }}
          >
            <Text style={[styles.registrarse1, styles.registrarse1Typo]}>
            {t("registrarse")}

            </Text>
          </Pressable>
          <TouchableOpacity onPress={() => navigation.navigate('IniciarSesin')}>
            <Text style={[styles.hasOlvidadoTu, styles.registrarse1Typo]}>
            {t("yatenescuenta")}

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
