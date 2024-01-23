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

export default function Login({ navigation }) {
  return (
    <ScrollView
      style={
        {
          // paddingTop: 200,
          // paddingBottom: 172
        }
      }
    >
      <Image
        source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
        resizeMode={'stretch'}
        style={{
          height: 69,
          marginBottom: 11,
          marginHorizontal: 49
        }}
      />
      <Text
        style={{
          color: '#F25910',
          fontSize: 22,
          marginBottom: 114,
          marginHorizontal: 47
        }}
      >
        {'ENCUENTRA TU PRUEBA'}
      </Text>
      <View
        style={{
          backgroundColor: '#F2F1F8',
          borderRadius: 50,
          paddingVertical: 20,
          paddingHorizontal: 22,
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
          {'Nombre de usuario'}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F2F1F8',
          borderRadius: 50,
          paddingVertical: 20,
          paddingHorizontal: 21,
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
          {'Contraseña'}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#F25910',
          borderRadius: 50,
          paddingVertical: 21,
          marginBottom: 12,
          marginHorizontal: 21
        }}
      >
        <Text
          style={{
            color: '#F2F1F8',
            fontSize: 18
          }}
          onPress={() => navigation.navigate('Home')}
        >
          {'Entrar'}
        </Text>
      </View>
      <Text
        style={{
          color: '#40036F',
          fontSize: 15,
          marginHorizontal: 72
        }}
      >
        {'¿Has olvidado tu contraseña?'}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 262,
    height: 69,
    marginVertical: 100
  }
})
