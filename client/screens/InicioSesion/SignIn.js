import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth'
import React from 'react'
import {
  Image,
  Pressable,
  // SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Color } from '../../GlobalStyles'
import { auth } from '../../firebaseConfig'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn({ navigation }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: 'iosId',
    androidClientId: process.env.CLIENT_ID
  })

  useEffect(() => {
    getLocalUser()
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user))
        setUserInfo(user)
        if (user.providerData[0].providerId === 'google.com') {
          console.log('=====LOGIN WITH GOOGLE=====')
          // acá se crea el usurio (cambiar por el de SpotSport)
          // dispatch(
          //   create({
          //     nickname: user.displayName,
          //     email: '',
          //     googleId: user.uid,
          //     type: isSportman ? 'sportman' : 'club'
          //   })
          // ).then(async (data) => {
          //   // console.log('data from back:', data);
          //   try {
          //     const response = await dispatch(login({ googleId: user.uid }))
          //     console.log('response google:', response.payload)
          //     dispatch(setIsSpotMan(response.payload.user.type === !'club'))
          //     await AsyncStorage.setItem(
          //       'userToken',
          //       response?.payload?.accesToken
          //     )
          //     await AsyncStorage.setItem('userType', response.payload.user.type)
          //     dispatch(setClub(response))
          //   } catch (error) {
          //     console.log('Error:', error)
          //   }
          // })
        }
      } else {
        console.log('user not authenticated')
      }
    })
    return () => unsub()
  }, [response])

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
      console.log('deberia crear el usuario')
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
        <ScrollView>
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
              textAlign: 'center'
            }}
          >
            Bienvenido/a
          </Text>
          <View style={{ marginTop: 20 }}>
            <View style={styles.button}>
              <Pressable
                style={styles.buttonText}
                onPress={() => promptAsync()}
              >
                <Text>Iniciar sesión con Google</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Iniciar sesión con Apple</Text>
            </View>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Registrarse')}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
            </Pressable>
            <View
              style={{
                paddingVertical: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: Color.sportsNaranja,
                  fontSize: 18,
                  textAlign: 'center'
                }}
                onPress={() => navigation.navigate('IniciarSesin')}
              >
                Iniciar sesión sin registro
              </Text>
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
    width: '100%'
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
    textAlign: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})
