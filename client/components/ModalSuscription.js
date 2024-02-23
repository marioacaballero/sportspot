import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { suscriptionEventUser } from '../redux/actions/users'

const ModalSuscription = ({ user, event, onClose }) => {
  const dispatch = useDispatch()

  const onSubmit = () => {
    const data = {
      id: user.id,
      eventId: event.id
    }

    dispatch(suscriptionEventUser(data))
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ marginBottom: 30 }}
      >{`${user.nickname} Seguro que deseas inscribirte?`}</Text>
      <TouchableOpacity
        style={{
          //   width: 100,
          height: 52,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginTop: 30,
          backgroundColor: Color.sportsNaranja
        }}
        onPress={() => {
          onSubmit()
          onClose()
        }}
      >
        <Text style={{ color: 'white' }}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsNaranja,
    height: 52,
    width: '100%',
    padding: 8
  },
  helloTypoScroll: {
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 30,
    backgroundColor: Color.blanco
  }
})

export default ModalSuscription
