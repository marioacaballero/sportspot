import React, { useEffect } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { Color, FontFamily } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const CustomAlert = ({ visible, message, onClose }) => {
  const navigation = useNavigation()
  // useEffect(() => {
  //   let timeoutId

  //   if (visible) {
  //     timeoutId = setTimeout(() => {
  //       onClose()
  //       navigation.goBack()
  //     }, 2400)
  //   }

  //   return () => clearTimeout(timeoutId)
  // }, [visible, onClose])
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.alert}>{message}</Text>
          <Text style={styles.text}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.touchable}>
            <Text style={styles.closeText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    width: '85%'
  },
  alert: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: 22,
    color: '#40036F',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20
  },
  text: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: 17,
    fontWeight: 'regular',
    color: Color.sportsVioleta
  },
  touchable: {
    marginTop: 20,
    borderRadius: 100,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Color.sportsNaranja
  },
  closeText: {
    fontSize: 17,
    color: '#fff',
    fontFamily: FontFamily.inputPlaceholder
  }
})

export default CustomAlert
