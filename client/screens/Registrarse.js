import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Padding, Border, FontFamily, FontSize, Color } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { register } from '../redux/actions/users'

const Registrarse = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [registerUser, setRegisterUser] = useState({
    nickname: '',
    password: '',
    email: ''
  })

  const onValuesUser = (field, value) => {
    setRegisterUser((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const onSubmit = () => {
    if (register.name && registerUser.password && registerUser.email) {
      dispatch(register(registerUser))
      navigation.navigate('IniciarSesin')
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
      <View style={styles.frameParent}>
        <View style={styles.capturaDePantalla20231024Parent}>
          <Image
            style={styles.capturaDePantalla20231024Icon}
            contentFit="cover"
            source={require('../assets/spotsport.png')}
          />
          <Text style={styles.encuentraTuPrueba}>ENCUENTRA TU PRUEBA</Text>
        </View>
        <View style={styles.frameGroup}>
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
              placeholder="Email"
              value={registerUser.email}
              onChangeText={(value) => onValuesUser('email', value)}
            />
          </View>
          <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.registrarse1Typo]}
              placeholder="Contraseña"
              value={registerUser.password}
              onChangeText={(value) => onValuesUser('password', value)}
              secureTextEntry={true}
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
          <Text style={[styles.hasOlvidadoTu, styles.registrarse1Typo]}>
            ¿Has olvidado tu contraseña?
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  registrarse1Typo: {
    textAlign: 'left',
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
    textAlign: 'left',
    fontSize: FontSize.size_lg
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
    marginTop: 10,
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
    textAlign: 'left'
  },
  frameGroup: {
    width: 318,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  frameParent: {
    position: 'absolute',
    marginTop: -400,
    marginLeft: -180,
    top: '50%',
    left: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_181xl,
    paddingBottom: Padding.p_152xl,
    alignItems: 'center',
    height: 800
  },
  registrarse: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    height: 800
  }
})

export default Registrarse
