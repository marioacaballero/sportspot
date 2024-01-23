import React from 'react'
import {
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
// import { SafeAreaView, ScrollView } from "react-native-web";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      // style={{
      //   flex: 1,
      //   paddingVertical: 200
      // }}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ki44nk1ipb-1419%3A26538?alt=media&token=5e9d2fb3-e41f-4332-b494-10f6bdae5394'
          }}
        />
        <Text
          style={{
            color: '#F25910',
            fontSize: 22,
            marginBottom: 63,
            marginHorizontal: 47
          }}
        >
          {'ENCUENTRA TU PRUEBA'}
        </Text>
        <Text
          style={{
            color: '#F25910',
            fontSize: 40,
            marginBottom: 9,
            marginHorizontal: 45
          }}
        >
          {'Bienvenido/a'}
        </Text>
        <View
          style={{
            alignItems: 'center',
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
              fontSize: 18
            }}
          >
            {'Iniciar sesión con Google'}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
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
              fontSize: 18
            }}
          >
            {'Iniciar sesión con Apple'}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#E2DCEC',
            borderRadius: 50,
            paddingVertical: 20,
            marginHorizontal: 21
          }}
        >
          <Text
            style={{
              color: '#40036F',
              fontSize: 18
            }}
            onPress={() => navigation.navigate('Login')}
          >
            {'Iniciar sesión sin registro'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 262,
    height: 69,
    marginVertical: 100,
    marginBottom: 11,
    marginHorizontal: 49
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      'linear-gradient(162deg, red 0%, green 13.24%, black 37.75%, yellow 66.25%, blue 91%, white 103.14%)'
  }
})
