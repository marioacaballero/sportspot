import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { t } from 'i18next'
import { Color, FontFamily } from '../../GlobalStyles'

const GenderModal = ({ setGender, onClose }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        width: '80%',
        paddingVertical: 40,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Pressable
        style={{
          width: '90%',
          paddingVertical: 10,
          borderRadius: 50,
          backgroundColor: Color.sportsNaranja,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => {
          onClose()
          setGender('sexo', 'hombre')
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: '#fff'
          }}
        >
          {t('hombre')}
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: '90%',
          paddingVertical: 10,
          borderRadius: 50,
          backgroundColor: Color.sportsNaranja,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => {
          onClose()
          setGender('sexo', 'mujer')
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: '#fff'
          }}
        >
          {t('mujer')}
        </Text>
      </Pressable>
    </View>
  )
}

export default GenderModal
