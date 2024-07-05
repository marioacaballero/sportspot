import React, { useRef, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
  TouchableWithoutFeedback,
  Dimensions,
  ToastAndroid
} from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Color } from '../GlobalStyles'
import { updateUserRol } from '../redux/actions/users'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const AccesoOrganizadorModal = ({
  toggleModal,
  collaborator,
  setSelectedPage,
  fromDelete,
  handleDelete,
  fromPublish,
  id
}) => {
  // const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)
  const { t, i18n } = useTranslation()

  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const textInputRef = useRef(null)
  const passInputRef = useRef(null)
  const navigation = useNavigation()
  const onChangeRol = () => {
    toggleModal()
    const { email, password } = input
    const validEmails = [
      'spotsport.soporte@gmail.com',
      'spotsport@spotsport.eu'
    ]
    const validPassword = '1234'
    if (collaborator) {
      if (validEmails.includes(email) && password === validPassword) {
        // navigation.navigate('Colaboradores')
        if (fromDelete) {
          handleDelete(id)
        } else {
          setSelectedPage('upload')
        }
      } else {
        ToastAndroid.show(t('credencialesIncorrectas'), ToastAndroid.SHORT)
      }
    } else {
      if (validEmails.includes(email) && password === validPassword) {
        if (fromPublish) {
          navigation.navigate('PublicarEvento')
        } else {
          navigation.navigate('Directorio')
        }
      } else {
        ToastAndroid.show(t('credencialesIncorrectas'), ToastAndroid.SHORT)
      }
    }
  }

  const onValuesInput = (field, value) => {
    console.log('value: ', value)
    setInput((prevState) => ({
      ...prevState,
      [field]: value || ''
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
                {collaborator ? t('accesocolaborador') : t('accesoorganizador')}
                {/* {user.rol === 'sportsman' ? 'organizador' : 'deportista'} */}
              </Text>
            </View>
            <Pressable
              onPress={() => textInputRef.current?.focus()}
              style={{
                width: '80%',
                borderRadius: 30,
                borderWidth: 1.5,
                borderColor: Color.sportsVioleta,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12
              }}
            >
              <TextInput
                ref={textInputRef}
                placeholder="Email"
                onChangeText={(value) => onValuesInput('email', value)}
                value={input.email}
                placeholderTextColor={Color.sportsVioleta}
                style={{
                  fontSize: 14,
                  color: Color.sportsVioleta,
                  textAlign: 'center',
                  paddingVertical: 5
                }}
              />
            </Pressable>
            <Pressable
              onPress={() => passInputRef.current?.focus()}
              style={{
                width: '80%',
                borderRadius: 30,
                borderWidth: 1.5,
                borderColor: Color.sportsVioleta,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12
              }}
            >
              <TextInput
                placeholder={t('contraseña')}
                ref={passInputRef}
                secureTextEntry={true}
                onChangeText={(value) => onValuesInput('password', value)}
                value={input.password}
                placeholderTextColor={Color.sportsVioleta}
                style={{
                  fontSize: 14,
                  color: Color.sportsVioleta,
                  textAlign: 'center',
                  paddingVertical: 5
                }}
              />
            </Pressable>

            <Pressable style={styles.pressableBox} onPress={onChangeRol}>
              <Text style={styles.enterText}>{t('entrar')}</Text>
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
