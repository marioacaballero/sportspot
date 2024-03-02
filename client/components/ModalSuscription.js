import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
// import { useDispatch } from 'react-redux'
// import { suscriptionEventUser } from '../redux/actions/users'
import { useNavigation } from '@react-navigation/native'

const ModalSuscription = ({ user, event, onClose }) => {
  const navigation = useNavigation()
  // const dispatch = useDispatch()

  // const onSubmit = () => {
  //   const data = {
  //     id: user.id,
  //     eventId: event.id
  //   }

  //   dispatch(suscriptionEventUser(data))
  // }

  return (
    <View style={styles.container}>
      <Text
        style={{ marginBottom: 30, color: Color.blanco }}
      >{`${user.nickname} Seguro que deseas inscribirte?`}</Text>
      <TouchableOpacity
        style={{
          //   width: 100,
          height: 52,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          backgroundColor: Color.sportsNaranja
        }}
        onPress={() => {
          // onSubmit()
          onClose()
          navigation.navigate('stripe')
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
  modalOverlay: {
    height: '100%',
    width: '100%'
  },
  helloTypoScroll: {
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
    backgroundColor: Color.colorGray_100,
    position: 'absolute',
    bottom: 0
  }
})

export default ModalSuscription
