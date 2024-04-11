import React from 'react'
import {
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable
} from 'react-native'
import { Color } from '../../GlobalStyles'

export default function SignIn({ navigation }) {
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
              <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
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
