import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth'
import React, { useEffect } from 'react'
import {
  Image,
  Pressable,
  // SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../GlobalStyles'
import { getUserByEmail, login, register } from '../../redux/actions/users'
import { auth } from '../../utils/config.google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Entypo } from '@expo/vector-icons'

// WebBrowser.maybeCompleteAuthSession()

// credenciales ios: 
// 37113049990-bbf2rvhho7uqa6pnfe4n46i6p766f00u.apps.googleusercontent.com

// credenciales android: 
// 37113049990-veui0lbk6sffhnefteii75hg1e9ncm9b.apps.googleusercontent.com

export default function SignIn({ navigation }) {
  const { userToken, user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: '37113049990-bbf2rvhho7uqa6pnfe4n46i6p766f00u.apps.googleusercontent.com',
    androidClientId:
      '37113049990-veui0lbk6sffhnefteii75hg1e9ncm9b.apps.googleusercontent.com'
  })

  useEffect(() => {
    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch (e) {}
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
          // acá se crea el usurio (cambiar por el de SpotSport)
          console.log('aca entra cuando esta todo ok')
          dispatch(getUserByEmail(user.email)).then((data) => {
            if (data.payload.id) {
              const { email, password } = data.payload
              dispatch(login({ email, password }))
            } else {
              dispatch(
                register({
                  email: user.email,
                  password: `${user.email}90`
                  // nickname: user.displayName,
                  // googleId: user.uid,
                  // type: isSportman ? 'sportman' : 'club'
                })
              ).then(async (data) => {
                // console.log('data from back:', data);
                try {
                  const { email, password } = data.payload
                  dispatch(login({ email, password }))
                } catch (error) {
                  console.log('Error:', error)
                }
              })
            }
          })
        }
      } else {
        console.log('user not authenticated')
      }
    })
    return () => unsub()
  }, [response])

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params
  //     const credential = GoogleAuthProvider.credential(id_token)
  //     signInWithCredential(auth, credential)
  //     console.log('deberia crear el usuario')
  //   }
  // }, [response])

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
            ENCUENTRA TU PRUEBA
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
            Bienvenido/a
          </Text>
          <View style={{ marginTop: 20 }}>
            <View style={styles.button}>
              <Pressable onPress={() => promptAsync()}>
                <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Iniciar sesión con Apple</Text>
            </View>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('IniciarSesin')}
            >
              <Text style={styles.buttonText}>Iniciar sesión con email</Text>
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
                  dispatch(
                    login({
                      email: 'guestUser@gmail.com',
                      password: 'guestuser1234'
                    })
                  )
                  AsyncStorage.setItem('guest', JSON.stringify({ guest: true }))
                }}
              >
                Entrar sin registrar
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

            <View
              style={{
                borderRadius: 50,
                marginTop: 50,
                overflow: 'hidden',
                backgroundColor: '#E2DCEC',
                width: 120,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 12
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 15,
                  marginLeft: 2,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Idioma
              </Text>
              <Entypo name="chevron-down" size={20} color={'#40036F'} />
            </View>
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
    backgroundColor: '#E2DCEC',
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
