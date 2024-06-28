import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { clearUser } from '../../redux/slices/users.slices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { t } from 'i18next'

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
          fontWeight: 500,
          fontSize: 19,
          color: '#F25910',
          marginBottom: 10,
          textAlign: 'center',
          width: '70%'
        }}
      >
        {t('guestPopUpText')}
      </Text>
      <Pressable
        onPress={async () => {
          onClose()
          await AsyncStorage.clear()
          navigation.navigate('SignIn')
          await dispatch(clearUser())
        }}
        // onPress={async () => {
        //   onClose()
        //   AsyncStorage.clear()
        //   //  AsyncStorage.setItem('guest', null)
        //   await dispatch(clearUser())
        //   navigation.navigate('SignIn')
        // }}
        style={{
          width: '80%',
          borderRadius: 100,
          borderColor: '#3C006E',
          borderWidth: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50
        }}
      >
        <Text style={{ fontWeight: 500, fontSize: 17, color: '#3C006E' }}>
          {t('entrar')}
        </Text>
      </Pressable>
      {/* <Pressable
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
          borderWidth: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50
        }}
      >
        <Text style={{ fontWeight: 500, fontSize: 17, color: '#3C006E' }}>
          Crear cuenta
        </Text>
      </Pressable> */}
    </View>
  )
}

export default GuestUserModal
