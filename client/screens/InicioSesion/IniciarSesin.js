import React, { useEffect, useState, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/users'
import { ActivityIndicator } from 'react-native-paper'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { useTranslation } from 'react-i18next'

const IniciarSesin = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const { user, userToken, loading, error } = useSelector(
    (state) => state.users
  )
  const dispatch = useDispatch()
  const passwordInputRef = useRef(null)

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
        if (storedToken && user.name) {
          console.log("userrr",user)
          navigation.navigate('InicioDeportista')
        }
        if (storedToken && !user.name) {
          console.log("userrr",user)
          navigation.navigate('EditarPerfil')
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
    <View style={styles.iniciarSesin}>
      <Image
        style={styles.background}
        source={require('../../assets/BGInicio.png')}
        contentFit="cover"
      />
      {/* <Pressable
        style={{ position: 'absolute', top: 30, right: 20 }}
        onPress={() => navigation.navigate('SignIn')}
      >
        <BackArrowSVG />
      </Pressable> */}

      <View style={styles.frameParent}>
        <View>
          <Image
            style={styles.capturaDePantalla20231024Icon}
            resizeMode="contain"
            source={require('../../assets/spotsport.png')}
          />
          <Text style={styles.encuentraTuPrueba}>{t("encuentratuprueba")}</Text>
        </View>
        {loading && (
          <ActivityIndicator
            animating={true}
            size="large"
            color={Color.violeta2}
          />
        )}

        <View style={styles.frameGroup}>
          <Text
            style={{
              color: '#F25910',
              fontSize: 40,
              width: '100%',
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: 20
            }}
          >
           {t("tucuenta")}
          </Text>
          <View style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.entrarTypo]}
              placeholder={t("email")}
              autoCapitalize="none"
              value={loginInfo.email}
              onChangeText={(value) => valuesLogin('email', value)}
              onSubmitEditing={() => passwordInputRef.current.focus()}
              returnKeyType="next"
            />
          </View>
          <View style={[styles.contraseaWrapper, styles.wrapperFlexBox]}>
            <TextInput
              style={[styles.nombreDeUsuario, styles.entrarTypo]}
              placeholder={t("contraseña")}
              value={loginInfo.password}
              onChangeText={(value) => valuesLogin('password', value)}
              secureTextEntry={true}
              onSubmitEditing={onSubmit}
              returnKeyType="done"
              ref={passwordInputRef}
            />
          </View>
          {error && (
            <Text style={[styles.hasOlvidadoTu2, styles.entrarTypo]}>
             {t("contraseñaerror")}
            </Text>
          )}
          <TouchableOpacity
            style={[styles.entrarWrapper, styles.wrapperFlexBox]}
            onPress={onSubmit}
          >
            <Text style={[styles.entrar, styles.entrarTypo]}>{t("entrar")}</Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.navigate('RecuperarContraseña')}>
            <Text style={[styles.hasOlvidadoTu, styles.entrarTypo]}>
            {t("olvidastelacontra")}
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Registrarse')}>
            <Text style={[styles.hasOlvidadoTu, styles.entrarTypo]}>
            {t("crearcuenta")}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
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
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  entrarTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Icon: {
    // width: 262,
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

  nombreDeUsuario: {
    width: '100%',
    color: Color.sportsVioleta,
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
  hasOlvidadoTu2: {
    fontSize: FontSize.size_mini,
    marginTop: 10,
    color: 'red',
    textAlign: 'left'
  },
  frameGroup: {
    width: '100%',
    alignItems: 'center',
    marginTop: '20%'
  },
  frameParent: {
    flex:1,
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iniciarSesin: {
    flex: 1
    // width: '100%'
    // overflow: 'hidden',
    // backgroundColor: 'transparent',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default IniciarSesin
