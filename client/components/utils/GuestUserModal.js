import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { clearUser } from '../../redux/slices/users.slices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

const GuestUserModal = ({ onClose }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <View
      style={{
        width: '90%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        borderRadius: 20,
        shadowColor: '#000',
        gap: 15,
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {
          width: 2,
          height: 4
        }
      }}
    >
      <Text
        style={{
          fontWeight: 'regular',
          fontSize: 20,
          color: '#F25910',
          marginBottom: 10
        }}
      >
        Debes acceder o crearte una cuenta
      </Text>
      <Pressable
        onPress={async () => {
          onClose()
          AsyncStorage.setItem('guest', null)
          await dispatch(clearUser())
          navigation.navigate('IniciarSesin')
        }}
        style={{
          width: '80%',
          borderRadius: 100,
          borderColor: '#3C006E',
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50
        }}
      >
        <Text style={{ fontWeight: 'regular', fontSize: 17, color: '#3C006E' }}>
          Acceder
        </Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          onClose()
          AsyncStorage.setItem('guest', null)
          await dispatch(clearUser())
          navigation.navigate('Registrarse')
        }}
        style={{
          width: '80%',
          borderRadius: 100,
          borderColor: '#3C006E',
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50
        }}
      >
        <Text style={{ fontWeight: 'regular', fontSize: 17, color: '#3C006E' }}>
          Crear cuenta
        </Text>
      </Pressable>
    </View>
  )
}

export default GuestUserModal
