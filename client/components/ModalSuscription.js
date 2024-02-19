import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Color } from '../GlobalStyles'

const ModalSuscription = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{`${name} confirma tu cuenta`}</Text>

      <View>
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.blanco
  }
})

export default ModalSuscription
