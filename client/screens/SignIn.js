import React from 'react'
import {
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#40036F']}
        locations={[0, 0.2, 0.5, 0.8, 1]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.linearGradient}
      >
        <ScrollView>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require('../assets/spotsport.png')}
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
            <View
              style={{
                // alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18,
                  textAlign: 'center'
                }}
              >
                Iniciar sesión con Google
              </Text>
            </View>
            <View
              style={{
                // alignItems: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18,
                  textAlign: 'center'
                }}
              >
                Iniciar sesión con Apple
              </Text>
            </View>

            <View
              style={{
                // alignItems: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18,
                  textAlign: 'center'
                }}
                onPress={() => navigation.navigate('Registrarse')}
              >
                Registrarse
              </Text>
            </View>
            <View
              style={{
                // alignItems: 'center',
                paddingVertical: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#E2DCEC',
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
      </LinearGradient>
    </SafeAreaView>
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
  }
})
