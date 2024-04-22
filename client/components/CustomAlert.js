import React, { useEffect } from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import { Color, FontFamily } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const CustomAlert = ({ visible, message, onClose }) => {
  const navigation = useNavigation()
  useEffect(() => {
    let timeoutId

    if (visible) {
      timeoutId = setTimeout(() => {
        onClose()
        navigation.goBack()
      }, 2400)
    }

    return () => clearTimeout(timeoutId)
  }, [visible, onClose])
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.alert}>Alerta</Text>
          <Text style={styles.text}>{message}</Text>
          {/* <TouchableOpacity onPress={onClose} style={styles.touchable}>
            <Text style={styles.closeText}>OK</Text>
          </TouchableOpacity> */}
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
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.sportsNaranja,
    height: '30%',
    width: '85%'
  },
  alert: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: 22,
    color: Color.sportsNaranja,
    marginTop: 5,
    marginBottom: 20
  },
  text: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: 17,
    color: Color.sportsVioleta
  },
  touchable: {
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  closeText: {
    color: Color.sportsVioleta,
    position: 'absolute',
    bottom: -55,
    left: -20,
    fontSize: 17,
    fontFamily: FontFamily.inputPlaceholder
  }
})

export default CustomAlert
