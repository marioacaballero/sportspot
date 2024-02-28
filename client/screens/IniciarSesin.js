import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import { Padding, Border, FontFamily, FontSize, Color } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/users'
import { ActivityIndicator } from 'react-native-paper'

const IniciarSesin = ({ navigation }) => {
  const { user, userToken, loading } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch (e) {}
    }

    const storeTokenAndNavigate = async () => {
      if (user) {
        try {
          await AsyncStorage.setItem('token', userToken)
        } catch (error) {
          console.error('Error al almacenar el token:', error)
        }
      }

      try {
        const storedToken = await AsyncStorage.getItem('token')
        if (storedToken) {
          navigation.navigate('InicioDeportista')
        }
      } catch (error) {
        console.error('Error al recuperar el token:', error)
      }
    }

    clearAll()
    storeTokenAndNavigate()
  }, [userToken])

  const valuesLogin = (field, value) => {
    setLoginInfo((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const onSubmit = () => {
    dispatch(login(loginInfo))
  }

  return (
    <LinearGradient
      style={styles.iniciarSesin}
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
          {loading && (
            <ActivityIndicator
              style={{
                width: '100%',
                height: '100%'
              }}
              animating={true}
              size="large"
              color={Color.violeta2}
            />
          )}
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.entrarTypo]}
              placeholder="Nombre de usuario"
              value={loginInfo.email}
              onChangeText={(value) => valuesLogin('email', value)}
            />
          </View>
          <View style={[styles.contraseaWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.entrarTypo]}
              placeholder="Contraseña"
              value={loginInfo.password}
              onChangeText={(value) => valuesLogin('password', value)}
              secureTextEntry={true}
            />
          </View>
          <Pressable
            style={[styles.entrarWrapper, styles.wrapperFlexBox]}
            onPress={() => {
              onSubmit()
              // navigation.navigate('InicioDeportista')
            }}
          >
            <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('RecuperarContraseña')}>
            <Text style={[styles.hasOlvidadoTu, styles.entrarTypo]}>
              ¿Has olvidado tu contraseña?
            </Text>
          </Pressable>
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
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  entrarTypo: {
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
    alignItems: 'center',
    marginBottom: '5%'
  },
  nombreDeUsuario: {
    width: '100%',
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder
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
  contraseaWrapper: {
    marginTop: 10,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  entrar: {
    color: Color.gris,
    fontSize: FontSize.size_lg
  },
  entrarWrapper: {
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
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_2xl,
    marginTop: '35%',
    paddingBottom: Padding.p_152xl,
    alignItems: 'center'
  },
  iniciarSesin: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    height: 700
  }
})

export default IniciarSesin
