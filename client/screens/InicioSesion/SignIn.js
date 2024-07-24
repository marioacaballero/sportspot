import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {
  BackHandler,
  Image,
  Pressable,
  // SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../GlobalStyles'
import {
  getUserByEmail,
  googleLogin,
  login,
  register
} from '../../redux/actions/users'
import { auth } from '../../utils/config.google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
import { useFocusEffect } from '@react-navigation/native'
import * as AppleAuthentication from 'expo-apple-authentication'
import axiosInstance from '../../utils/apiBackend'
WebBrowser.maybeCompleteAuthSession()

// credenciales ios:
// 37113049990-bbf2rvhho7uqa6pnfe4n46i6p766f00u.apps.googleusercontent.com

// credenciales android:
// 37113049990-veui0lbk6sffhnefteii75hg1e9ncm9b.apps.googleusercontent.com

export default function SignIn({ navigation }) {
  const { t, i18n } = useTranslation()
  const [selectedLanguaje, setSelectedLanguaje] = useState('Español')
  const { userToken, user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId:
      '170387470104-s69t91p5e392jtmkigkpv98unin22641.apps.googleusercontent.com',
    androidClientId:
      '170387470104-gjbs1uunr7r3fodkv3gk4lncajgv8abc.apps.googleusercontent.com'
  })

  // AsyncStorage.clear()

  let backPressedOnce = false

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (backPressedOnce) {
          BackHandler.exitApp()
        } else {
          backPressedOnce = true
          ToastAndroid.show(t('presionaAtras'), ToastAndroid.SHORT)
          setTimeout(() => {
            backPressedOnce = false
          }, 2000)
          return true
        }
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  const checkStoredCredentials = async () => {
    const storeTokenAndNavigate = async () => {
      if (user) {
        try {
          await AsyncStorage.setItem('token', userToken)
        } catch (error) {
          console.error('Error al almacenar el token:', error)
        }
      }

      try {
        const storedToken = await AsyncStorage.getItem('token')
        console.log('===USER', user)
        console.log('storedToken', storedToken)

        if (user && user.email === 'guestUser@gmail.com') {
          navigation.navigate('InicioDeportista')
          return
        }
        if (storedToken && user.name) {
          // console.log('userrr', user)
          navigation.navigate('InicioDeportista')
          return
        }
        if (storedToken && !user.name && user.email !== 'guestUser@gmail.com') {
          // console.log('userrr', user)
          navigation.navigate('EditarPerfil')
        }
      } catch (error) {
        console.error('Error al recuperar el token:', error)
      }
    }
    console.log('CHECKING STORED CREDENTIALS')
    try {
      const jsonValue = await AsyncStorage.getItem('userCredentials')
      const credentials = JSON.parse(jsonValue)
      console.log('CREDENTIALS', credentials)
      if (credentials?.googleId) {
        console.log('=====Logged with google=====')
        const res = await dispatch(googleLogin(credentials))
        if (res?.meta?.arg) {
          console.log('User logged in automatically')
          console.log('res', res)
          if (res && res?.payload?.user?.name) {
            console.log('to home')
            navigation.navigate('InicioDeportista')
          }
          if (res && !res?.payload?.user?.name) {
            console.log('to edit profile')
            navigation.navigate('EditarPerfil')
          }
          navigation.navigate('InicioDeportista')
        }
        return
      }
      if (credentials) {
        console.log('=====Loged with normal user=====:', credentials)
        if (
          credentials.email &&
          credentials.password &&
          Object.keys(user).length === 0
        ) {
          await dispatch(login(credentials))
        } else {
          storeTokenAndNavigate()
        }

        // const res = await dispatch(login(credentials))
        // if (res?.meta?.arg) {
        //   console.log('User logged in automatically')
        //   if (res && res?.payload?.user?.name) {
        //     console.log('to home')
        //     navigation.navigate('InicioDeportista')
        //   }
        //   if (res && !res?.payload?.user?.name) {
        //     console.log('to edit profile')
        //     navigation.navigate('EditarPerfil')
        //   }
        //   navigation.navigate('InicioDeportista')
        // }
      }
      // else {
      //   console.log('=====Loged with normal user=====:', credentials)
      //   storeTokenAndNavigate()
      // }
    } catch (error) {
      console.log('Error retrieving user credentials:', error)
    }
  }
  // useEffect(() => {
  //   const clearAll = async () => {
  //     console.log('clearing storage...')
  //     try {
  //       await AsyncStorage.clear()
  //     } catch (e) {}
  //   }
  // }, [userToken])

  useEffect(() => {
    checkStoredCredentials()
  }, [userToken])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user))

        if (user.providerData[0].providerId === 'google.com') {
          console.log('google user', user)
          // console.log('auth', auth)
          // const fetchGoogleUserInfo = async (accessToken) => {
          //   try {
          //     const response = await fetch(
          //       'https://www.googleapis.com/oauth2/v3/userinfo',
          //       {
          //         headers: {
          //           Authorization: `Bearer ${accessToken}`
          //         }
          //       }
          //     )

          //     const userInfo = await response.json()
          //     console.log('fetched google user data ===========', userInfo)
          //     return userInfo
          //   } catch (error) {
          //     console.error('Error fetching Google user info', error)
          //   }
          // }
          // const res = await fetchGoogleUserInfo(
          //   user.stsTokenManager.accessToken
          // )
          console.log('=====LOGIN WITH GOOGLE=====')
          console.log('sending data to register: ', {
            email: '',
            password: `${user.uid}`,
            name: user.displayName,
            googleId: user.uid
          })
          dispatch(
            register({
              email: `${user.uid}@gmail.com`,
              password: `${user.uid}`,
              name: user.displayName,
              googleId: user.uid
            })
          ).then(async (data) => {
            console.log('data from back:', data.payload)
            try {
              if (data.payload.user) {
                const { email, password, name, googleId } = data.payload.user
                // console.log('login with: ', email, password, name, googleId)
                dispatch(googleLogin({ email, password, googleId, name }))
                await AsyncStorage.setItem(
                  'userCredentials',
                  JSON.stringify({ email, password, googleId, name })
                )
              } else {
                const { email, password, name, googleId } = data.payload
                // console.log('login with: ', { email, password, googleId, name })
                dispatch(googleLogin({ email, password, googleId, name }))
                await AsyncStorage.setItem(
                  'userCredentials',
                  JSON.stringify({ email, password, googleId, name })
                )
              }
            } catch (error) {
              // console.log('Error:', error)
            }
          })
        }
      } else {
        // console.log('user not authenticated')
      }
    })
    return () => unsub()
  }, [response])

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
      // console.log('deberia crear el usuario')
    }
  }, [response])

  return (
    <View style={styles.container}>
      <View style={styles.linearGradient}>
        <Image
          style={styles.background}
          source={require('../../assets/BGInicio.png')}
          contentFit="cover"
        />
        <ScrollView
          contentContainerStyle={{ height: '100%', justifyContent: 'center' }}
          style={{ height: '100%' }}
        >
          <Image
            style={styles.image}
            contentFit="cover"
            source={require('../../assets/spotsport.png')}
          />
          <Text
            style={{
              color: '#F25910',
              width: '100%',
              fontSize: 22,
              marginBottom: 43,
              textAlign: 'center'
            }}
          >
            {t('encuentratuprueba')}
          </Text>
          <Text
            style={{
              color: '#F25910',
              fontSize: 40,
              width: '100%',
              textAlign: 'center',
              fontWeight: 600
            }}
          >
            {t('bienvenido')}
          </Text>
          <View style={{ marginTop: 20 }}>
            <View style={styles.button}>
              <Pressable onPress={() => promptAsync()}>
                <Text style={styles.buttonText}>{t('iniciarcongoogle')}</Text>
              </Pressable>
            </View>
            {/* <TouchableOpacity
              onPress={async () => {
                const credential = {
                  identityToken:
                    'eyJraWQiOiJweWFSUXBBYm5ZIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiaG9zdC5leHAuRXhwb25lbnQiLCJleHAiOjE3MjE5MzAzNjksImlhdCI6MTcyMTg0Mzk2OSwic3ViIjoiMDAxMTE2LjllOTRmMDViZWY5OTRmYTI4ZDYxMzlhNzVkYzIzNmI5LjE3MzMiLCJjX2hhc2giOiIwUEFpOU41SlRaSzJiLVhhSG01d1JnIiwiZW1haWwiOiJhenVsLnNjaGlhZmZpbm9AaWNsb3VkLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE3MjE4NDM5NjksIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.gEkgidOZ0cIqNgVDY37dOQxFD0T2At0eWh-ijGxQKk7Rf2vU88K2T34cIgo27LcHWZvGZCTUJfqsh0UAqlzmFW5U08541Re-ch_F3nOZ9AlW1KSiznaroqtk78Soz0yCOJULZFT_9FhYW0-CN0jc_1c7uhn_dBTd4be2oZ_q_Jn4NwkumEnEI1COSFDOZabI_vGKoWC4JMyn-Mw8H5mtOpdl__KKjgdV28R_F4QyTDCPRG6m_Foczgw33aViFNxNm8EdkGTPl_o_E5d3VJjAQ1aKKiczBod5C8xh-btv0AyrGiDWsG72xJO9dbBWOi7fVfgh7AygxBr4P4kvoId-NA',
                  realUserStatus: 1,
                  state: null,
                  user: '001116.9e94f05bef994fa28d6139a75dc236b9.1733'
                }
                if (credential) {
                  const { user, identityToken, nickname } = credential

                  const res = await axiosInstance.get(
                    `users/email?email=${user.slice(0, 12)}@icloud.com`
                  )
                  if (res.data.id) {
                    dispatch(
                      login({
                        email: `${user.slice(0, 12)}@icloud.com`,
                        password: identityToken.slice(0, 15)
                      })
                    )
                  } else {
                    dispatch(
                      register({
                        email: `${user.slice(0, 12)}@icloud.com`,
                        password: `${identityToken.slice(0, 15)}`,
                        name: ""
                      })
                    ).then(async (data) => {
                      console.log('login with: ',data.payload)
                      if (data.payload.id) {
                        const { email, password } = data.payload
                        dispatch(login({ email, password:identityToken.slice(0, 15) }))
                        await AsyncStorage.setItem(
                          'userCredentials',
                          JSON.stringify({ email, password:identityToken.slice(0, 15) })
                        )
                      }
                    })
                  }
                }
            
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{t('iniciarconapple')}</Text>
            </TouchableOpacity> */}
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={
                AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
              }
              buttonStyle={
                AppleAuthentication.AppleAuthenticationButtonStyle.WHITE_OUTLINE
              }
              cornerRadius={50}
              style={styles.button}
              onPress={async () => {
                try {
                  const credential = await AppleAuthentication.signInAsync({
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL
                    ]
                  })
                  // signed in
                  if (credential) {
                    const { user, identityToken, nickname } = credential
  
                    const res = await axiosInstance.get(
                      `users/email?email=${user.slice(0, 12)}@icloud.com`
                    )
                    if (res.data.id) {
                      dispatch(
                        login({
                          email: `${user.slice(0, 12)}@icloud.com`,
                          password: identityToken.slice(0, 15)
                        })
                      )
                    } else {
                      dispatch(
                        register({
                          email: `${user.slice(0, 12)}@icloud.com`,
                          password: `${identityToken.slice(0, 15)}`,
                          name: ""
                        })
                      ).then(async (data) => {
                        console.log('login with: ',data.payload)
                        if (data.payload.id) {
                          const { email, password } = data.payload
                          dispatch(login({ email, password:identityToken.slice(0, 15) }))
                          await AsyncStorage.setItem(
                            'userCredentials',
                            JSON.stringify({ email, password:identityToken.slice(0, 15) })
                          )
                        }
                      })
                    }
                  }
                } catch (e) {
                  if (e.code === 'ERR_REQUEST_CANCELED') {
                    // handle that the user canceled the sign-in flow
                  } else {
                    // handle other errors
                  }
                }
              }}
            />
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('IniciarSesin')}
            >
              <Text style={styles.buttonText}>{t('iniciarconemail')}</Text>
            </Pressable>

            {/* <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Registrarse')}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
            </Pressable> */}
            <View
              style={{
                paddingVertical: 0,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                onPress={async () => {
                  try {
                    console.log('login as guest...')
                    const res = await dispatch(
                      login({
                        email: 'guestUser@gmail.com',
                        password: 'guestuser1234'
                      })
                    )
                    console.log('res from guest login', res?.meta?.arg)

                    if (res?.meta?.arg && !res.error) {
                      const jsonValue = JSON.stringify(res.meta.arg)

                      try {
                        // await AsyncStorage.setItem(
                        //   'guest',
                        //   JSON.stringify({ guest: true })
                        // )
                        await AsyncStorage.setItem('userCredentials', jsonValue)
                        console.log(
                          '=GUEST= User credentials stored successfully'
                        )
                      } catch (error) {
                        console.error('Error storing user credentials:', error)
                      }
                    }
                  } catch (error) {
                    console.error('Error during login dispatch:', error)
                  }
                }}
              >
                {t('sinregistro')}
              </Text>
            </View>
            {/* <View
              style={{
                paddingVertical: 5,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                onPress={() => navigation.navigate('Registrarse')}
              >
                Registrarse
              </Text>
            </View> */}

            <TouchableOpacity
              onPress={async () => {
                setSelectedLanguaje(selectedLanguaje === 'es' ? 'en' : 'es')
                if (selectedLanguaje == 'es') {
                  await i18n.changeLanguage('en')
                } else {
                  await i18n.changeLanguage('es')
                }
              }}
              style={{
                borderRadius: 50,
                marginTop: 40,
                overflow: 'hidden',
                backgroundColor: '#E2DCEC',
                width: 70,
                height: 40,
                alignSelf: 'center',
                paddingLeft: 15,
                paddingRight: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                {i18n.language.toUpperCase()}
              </Text>
              <AntDesign name="swap" size={20} color={'#40036F'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 262,
    height: 69,
    marginVertical: 60,
    marginBottom: 11,
    marginTop: '20%',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 21
  },
  buttonText: {
    color: '#40036F',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})
