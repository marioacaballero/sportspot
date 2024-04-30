import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color, FontSize } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { offSuscription } from '../redux/actions/suscriptions'
import { suscriptionEventUser } from '../redux/actions/users'

const ModalSuscription = ({ user, event, onClose }) => {
  const navigation = useNavigation()

  const userSuscribed = event.suscribers?.some(
    (userEvent) => userEvent.id === user.id
  )
  const dispatch = useDispatch()

  const onSubmit = () => {
    const data = {
      id: user.id,
      eventId: event.id
    }
    dispatch(offSuscription(data))
  }
  const onSuscribed = () => {
    const data = {
      id: user.id,
      eventId: event.id
    }
    dispatch(suscriptionEventUser(data))
    navigation.goBack()
  }
  return userSuscribed ? (
    <View style={styles.container}>
      <Text style={styles.text}>¿Seguro que deseas desuscribirte?</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          onSubmit()
          onClose()
          navigation.navigate('InicioDeportista')
        }}
      >
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>¿Seguro que deseas inscribirte?</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          onSuscribed()
          onClose()
          // navigation.navigate('stripe')
        }}
      >
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 35,
    position: 'absolute',
    backgroundColor: Color.blanco,
    bottom: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.sportsNaranja,
    elevation: 10
  },
  text: {
    marginBottom: 30,
    fontSize: FontSize.size_mini,
    color: Color.sportsVioleta
  },
  touchable: {
    height: 45,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: Color.sportsNaranja
  },
  confirmText: {
    color: Color.sportsVioleta,
    textAlign: 'center',
    fontSize: 16
  }
})

export default ModalSuscription
