import React, { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
  TouchableWithoutFeedback
} from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Color } from '../GlobalStyles'
import { updateUserRol } from '../redux/actions/users'
import { useDispatch, useSelector } from 'react-redux'

const AccesoOrganizadorModal = ({ toggleModal }) => {
  // const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const onChangeRol = () => {
    if (user.rol === 'organizer') return Alert('Ya eres organizador')
    const data = {
      id: user.id,
      rol: user.rol === 'sportsman' ? 'organizer' : 'sportsman'
    }
    dispatch(updateUserRol(data))
    toggleModal()
  }

  const onValuesInput = (field, value) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <Modal visible={true} transparent={true}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Text style={styles.titleText}>
                Acceso como{' '}
                {user.rol === 'sportsman' ? 'organizador' : 'deportista'}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 30,
                borderWidth: 1.5,
                borderColor: Color.sportsVioleta,
                width: '80%',
                paddingVertical: 5,
                justifyContent: 'center',
                marginBottom: 12,
                alignItems: 'center'
              }}
            >
              <TextInput
                placeholder="Email"
                onChangeText={(value) => onValuesInput('email', value)}
                value={input.email}
                placeholderTextColor={Color.sportsVioleta}
                style={{
                  fontSize: 14,
                  color: Color.sportsVioleta,
                  textAlign: 'center'
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 30,
                borderWidth: 1.5,
                borderColor: Color.sportsVioleta,
                width: '80%',
                paddingVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12
              }}
            >
              <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={(value) => onValuesInput('password', value)}
                value={input.password}
                placeholderTextColor={Color.sportsVioleta}
                style={{
                  fontSize: 14,
                  color: Color.sportsVioleta,
                  textAlign: 'center'
                }}
              />
            </View>
            <Pressable style={styles.pressableBox} onPress={onChangeRol}>
              <Text style={styles.enterText}>Entrar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '90%',
    backgroundColor: Color.blanco,
    borderRadius: 30,
    elevation: 4,
    alignItems: 'center'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: Color.sportsNaranja
  },
  close: {
    color: Color.sportsNaranja,
    fontSize: 20,
    fontWeight: '700'
  },
  borderBox: {
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: Color.sportsVioleta,
    width: '80%',
    height: '18%',
    justifyContent: 'center',
    marginBottom: 12
  },
  inputText: {
    fontSize: 14,
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  pressableBox: {
    backgroundColor: Color.sportsNaranja,
    borderRadius: 30,
    width: '40%',
    height: '15%',
    justifyContent: 'center',
    marginTop: 8
  },
  enterText: {
    fontSize: 13,
    color: Color.blanco,
    textAlign: 'center'
  }
})

export default AccesoOrganizadorModal
