import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {
  Image,
  Pressable,
  // SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
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
import { useTranslation } from "react-i18next";
WebBrowser.maybeCompleteAuthSession()

// credenciales ios:
// 37113049990-bbf2rvhho7uqa6pnfe4n46i6p766f00u.apps.googleusercontent.com

// credenciales android:
// 37113049990-veui0lbk6sffhnefteii75hg1e9ncm9b.apps.googleusercontent.com

export default function SignIn({ navigation }) {
  const { t, i18n } = useTranslation();
  const [selectedLanguaje, setSelectedLanguaje] = useState('Español')
  const { userToken, user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId:
      '170387470104-s69t91p5e392jtmkigkpv98unin22641.apps.googleusercontent.com',
    androidClientId:
      '170387470104-gjbs1uunr7r3fodkv3gk4lncajgv8abc.apps.googleusercontent.com'
  })

  useEffect(() => {
    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch (e) { }
    }

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
        if (storedToken) {
          navigation.navigate('InicioDeportista')
        }
      } catch (error) {
        console.error('Error al recuperar el token:', error)
      }
    }

    clearAll()
    storeTokenAndNavigate()
  }, [userToken])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user))

        if (user.providerData[0].providerId === 'google.com') {
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
            // console.log('data from back:', data.payload)
            try {
              if (data.payload.user) {
                const { email, password, name, googleId } = data.payload.user
                // console.log('login with: ', email, password, name, googleId)
                dispatch(googleLogin({ email, password, googleId, name }))
              } else {
                const { email, password, name, googleId } = data.payload
                // console.log('login with: ', { email, password, googleId, name })
                dispatch(googleLogin({ email, password, googleId, name }))
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
          {t("encuentratuprueba")}
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
             {t("bienvenido")}
          </Text>
          <View style={{ marginTop: 20 }}>
            <View style={styles.button}>
              <Pressable onPress={() => promptAsync()}>
                <Text style={styles.buttonText}>{t("iniciarcongoogle")}</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{t("iniciarconapple")}</Text>
            </View>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('IniciarSesin')}
            >
              <Text style={styles.buttonText}>{t("iniciarconemail")}</Text>
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
                onPress={() => {
                  console.log('login as guest...')
                  dispatch(
                    login({
                      email: 'guestUser@gmail.com',
                      password: 'guestuser1234'
                    })
                  )
                  AsyncStorage.setItem('guest', JSON.stringify({ guest: true }))
                }}
              >
               {t("sinregistro")}
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
              onPress={async() => {
                setSelectedLanguaje(
                  selectedLanguaje === 'es' ? 'en' : 'es'
                )
                if (selectedLanguaje == "es") {
                await i18n.changeLanguage("en")
                }
                else {
                await i18n.changeLanguage("es")
                }
              }
              }
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
                {i18n.language}
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
