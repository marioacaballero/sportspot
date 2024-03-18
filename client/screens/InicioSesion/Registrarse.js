import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color
} from '../../GlobalStyles'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/users'

const Registrarse = () => {
  const confirmPasswordInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const [registerUser, setRegisterUser] = useState({
    password: '',
    email: '',
    nickname: ''
  })

  const onValuesUser = (field, value) => {
    setRegisterUser((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const onSubmit = () => {
    if (
      registerUser.email &&
      registerUser.password &&
      registerUser.nickname
      // registerUser.password === registerUser.confirmPassword
    ) {
      dispatch(register(registerUser))
      navigation.navigate('IniciarSesin')
    } else {
      alert('Las contraseñas no coinciden')
    }
  }

  return (
    <LinearGradient
      style={styles.registrarse}
      colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#40036F']}
      locations={[0, 0.2, 0.5, 0.8, 1]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 0.8 }}
    >
      <ScrollView style={styles.frameParent}>
        <View style={styles.capturaDePantalla20231024Parent}>
          <Image
            style={styles.capturaDePantalla20231024Icon}
            contentFit="cover"
            source={require('../../assets/spotsport.png')}
          />
          <Text style={styles.encuentraTuPrueba}>ENCUENTRA TU PRUEBA</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder="Email"
              value={registerUser.email}
              onChangeText={(value) => onValuesUser('email', value)}
              onSubmitEditing={() => passwordInputRef.current.focus()}
            />
          </View>

          <View style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder="Nombre de usuario"
              value={registerUser.nickname}
              onChangeText={(value) => onValuesUser('nickname', value)}
            />
          </View>

          <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder="Nombre de usuario"
              value={registerUser.nickname}
              onChangeText={(value) => onValuesUser('nickname', value)}
              onSubmitEditing={() => confirmPasswordInputRef.current.focus()} // Mover al siguiente campo al presionar "Enter"
              ref={passwordInputRef} // Referencia al campo de texto actual
            />
          </View>

          <View style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={styles.nombreDeUsuario}
              placeholder="Contraseña"
              value={registerUser.password}
              onChangeText={(value) => onValuesUser('password', value)}
              secureTextEntry={true}
              onSubmitEditing={onSubmit}
              ref={confirmPasswordInputRef}
            />
          </View>
          <Pressable
            style={[styles.registrarseWrapper, styles.wrapperFlexBox]}
            onPress={() => {
              onSubmit()
            }}
          >
            <Text style={[styles.registrarse1, styles.registrarse1Typo]}>
              Registrarse
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('IniciarSesin')}>
            <Text style={[styles.hasOlvidadoTu, styles.registrarse1Typo]}>
              ¿Ya tenes cuenta?
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 60,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  registrarse1Typo: {
    textAlign: 'center',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Icon: {
    width: 262,
    height: 69
  },
  encuentraTuPrueba: {
    fontSize: FontSize.size_3xl,
    color: Color.sportsNaranja,
    textAlign: 'center',
    marginTop: 6,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Parent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nombreDeUsuario: {
    color: Color.sportsVioleta,
    textAlign: 'center',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    width: '90%'
  },
  nombreDeUsuarioWrapper: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  emailWrapper: {
    marginBottom: 10,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  registrarse1: {
    color: Color.gris,
    fontSize: FontSize.size_lg
  },
  registrarseWrapper: {
    backgroundColor: Color.sportsNaranja,
    paddingHorizontal: Padding.p_11xl,
    marginTop: 10,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  hasOlvidadoTu: {
    fontSize: FontSize.size_mini,
    marginTop: 10,
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  frameGroup: {
    width: '100%',
    alignItems: 'center',
    marginTop: '15%'
  },
  frameParent: {
    paddingVertical: '40%',
    paddingHorizontal: 15
  },
  registrarse: {
    flex: 1,
    width: '100%'
  }
})

export default Registrarse
