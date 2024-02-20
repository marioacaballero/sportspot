import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { suscriptionEventUser } from '../redux/actions/users'

const ModalSuscription = ({ user, event, onClose }) => {
  const dispatch = useDispatch()
  const [suscription, setSuscription] = useState({
    name: user.name,
    eventId: event.id,
    email: '',
    password: ''
  })

  const valuesSuscription = (field, value) => {
    setSuscription((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const onSubmit = () => {
    const data = {
      id: user.id,
      suscription
    }

    dispatch(suscriptionEventUser(data))
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ marginBottom: 30 }}
      >{`${user.name} confirma tu cuenta`}</Text>
      <View style={styles.items}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <TextInput
          style={styles.helloTypoScroll}
          placeholder="Email"
          value={suscription.email}
          onChangeText={(value) => valuesSuscription('email', value)}
        />
      </View>

      <View style={styles.items}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <TextInput
          style={styles.helloTypoScroll}
          placeholder="Contraseña"
          value={suscription.password}
          onChangeText={(value) => valuesSuscription('password', value)}
        />
      </View>

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
    // minWidth: '100%',
    // height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 30,
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: Color.blanco
  }
})

export default ModalSuscription
