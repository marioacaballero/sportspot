import React, { useEffect, useRef, useState } from 'react'
import {
  NavigationContainer,
  useNavigationState
} from '@react-navigation/native'
import { loadFonts } from './GlobalStyles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { StripeProvider } from '@stripe/stripe-react-native'

import PruebasEncontradasDetalle from './screens/Pruebas/PruebasEncontradasDetalle'
import EditarPerfil from './screens/Perfil/EditarPerfil'
import Seguridad from './screens/Perfil/Seguridad'
import Metodo from './screens/Perfil/Pago/Metodo'
import DatosDePago from './screens/Perfil/Pago/DatosDePago'
import Cuenta from './screens/Perfil/Cuenta'
import Metodo1 from './screens/Perfil/Metodo1'
import Bienvenida from './screens/Bienvenida'
import Favoritos from './screens/Favoritos/Favoritos'
import UltimasConsultas from './screens/UltimasConsultas'
import Favoritos1 from './screens/Favoritos/Favoritos1'
import HistorialDePruebas from './screens/HistorialDePruebas'
import TuPerfil from './screens/Perfil/TuPerfil'
import IniciarSesin from './screens/InicioSesion/IniciarSesin'
import Registrarse from './screens/InicioSesion/Registrarse'
import InicioDeportista from './screens/InicioDeportista'
import InicioOrganizador from './screens/Organizador/InicioOrganizador'
import Directorio from './screens/Organizador/Directorio'
import PruebasEncontradas from './screens/Pruebas/PruebasEncontradas'
import InicioBUSCADOR from './screens/InicioBUSCADOR'
import InicioSUSCRIPCIONES from './screens/Suscripciones/InicioSUSCRIPCIONES'
import SignIn from './screens/InicioSesion/SignIn'
import Popupfiltros from './components/PopupOrdenarPor'
import PopupAlerta from './components/PopupAlerta'
import EscribirResea from './components/EscribirResea'
import MenuInferior from './components/MenuInferior'
import Contacta from './screens/Perfil/Contacta'
import RecuperarContraseña from './screens/InicioSesion/RecuperarContraseña'
import StripeComponent from './screens/StripeComponent'
import VentajasSuscripciones from './screens/Suscripciones/VentajasSuscripciones'
import PublicarEvento from './screens/Organizador/PublicarEvento'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, Platform } from 'react-native'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from './utils/i18n'
import Inscrpcion from './screens/Inscripciones/Inscripcion'
// import PaymentScreen from './screens/StripeComponent'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setNotificationPush } from './redux/slices/users.slices'
import Colaboradores from './screens/Perfil/Colaboradores'
import * as Linking from 'expo-linking'
// import { StripeProvider } from '@stripe/stripe-react-native'
// import PaymentScreen from './screens/PaymentScreen'
// import './shim'

function MyStackNavigator({ isFooterShow, setIsFooterShow }) {
  const state = useNavigationState((state) => state) // Obtiene el estado actual de la navegación

  useEffect(() => {
    if (state) {
      // Comprueba si state existe antes de intentar acceder a state.routes
      const currentRouteName = state.routes[state.index].name // Obtiene el nombre de la ruta actual

      // Actualiza el estado isFooterShow basado en la ruta actual
      setIsFooterShow(
        currentRouteName !== 'Bienvenida' &&
          currentRouteName !== 'IniciarSesin' &&
          currentRouteName !== 'SignIn' &&
          currentRouteName !== 'Registrarse' &&
          currentRouteName !== 'RecuperarContraseña'
      )
    }
  }, [state])

  return (
    <Stack.Navigator
      initialRouteName="Bienvenida"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="PruebasEncontradasDetalle"
        component={PruebasEncontradasDetalle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VentajasSuscripciones"
        component={VentajasSuscripciones}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="stripe"
        component={StripeComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditarPerfil"
        component={EditarPerfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inscripcion"
        component={Inscrpcion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicarEvento"
        component={PublicarEvento}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Directorio"
        component={Directorio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Seguridad"
        component={Seguridad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Metodo"
        component={Metodo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DatosDePago"
        component={DatosDePago}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cuenta"
        component={Cuenta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Metodo1"
        component={Metodo1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Colaboradores"
        component={Colaboradores}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bienvenida"
        component={Bienvenida}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EscribirResea"
        component={EscribirResea}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UltimasConsultas"
        component={UltimasConsultas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favoritos1"
        component={Favoritos1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistorialDePruebas"
        component={HistorialDePruebas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TuPerfil"
        component={TuPerfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IniciarSesin"
        component={IniciarSesin}
        options={{ headerShown: false, title: 'Atrás' }}
      />
      <Stack.Screen
        name="Registrarse"
        component={Registrarse}
        options={{ headerShown: false, title: 'Atrás' }}
      />
      <Stack.Screen
        name="InicioDeportista"
        component={InicioDeportista}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Organizador"
        component={InicioOrganizador}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PruebasEncontradas"
        component={PruebasEncontradas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InicioBUSCADOR"
        component={InicioBUSCADOR}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Popupfiltros"
        component={Popupfiltros}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InicioSUSCRIPCIONES"
        component={InicioSUSCRIPCIONES}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PopupAlerta"
        component={PopupAlerta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contacta"
        component={Contacta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecuperarContraseña"
        component={RecuperarContraseña}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' }
  }

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
}

function handleRegistrationError(errorMessage) {
  alert(errorMessage)
  throw new Error(errorMessage)
}

async function registerForPushNotificationsAsync() {
  console.log('platform222', Platform.OS)

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'Sportspot',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    })
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      handleRegistrationError(
        'Permission not granted to get push token for push notification!'
      )
      return
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId
    if (!projectId) {
      handleRegistrationError('Project ID not found')
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId
        })
      ).data
      console.log(pushTokenString)
      return pushTokenString
    } catch (e) {
      handleRegistrationError(`${e}`)
    }
  } else {
    handleRegistrationError('Must use physical device for push notifications')
  }
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('')
  const [notification, setNotification] = useState(undefined)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        AsyncStorage.setItem('notificationsToken', token)
        setExpoPushToken(token ?? '')
      })
      .catch((error) => setExpoPushToken(`${error}`))

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification, 'notification')

        setNotification(notification)
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response)
      })

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        )
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  const [isFooterShow, setIsFooterShow] = useState(null)
  useEffect(() => {
    loadFonts()
  }, [])

  const secretKEY =
    'sk_test_51Ncu4UF0YK5c4Ih51TFFlCmu8i84l2KmnRMI2El3nBq6XMa9CyTDgGv1Tb4ASKznzHN35s36FebICMZLMd4AIKpa00hTZSBu7w'

  const publicKey =
    'pk_test_51PBJ3MCArpM8BK01XJXHXCxHBJnGAH5JYBnMAhEdHkMB6dpwyQJj3O0KsPo9CGH5JC2tWsofNAD03nluCUOSk6I200RsyWloFq'

  const linking = {
    prefixes: ['spotsport://', 'https://example.com'],
    config: {
      screens: {
        InicioDeportista: 'InicioDeportista',
        TuPerfil: 'TuPerfil',
        PruebasEncontradasDetalle: 'PruebasEncontradasDetalle'
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        hidden={!isFooterShow}
        barStyle={'dark-content'}
        backgroundColor="#fff"
      />
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <StripeProvider publishableKey="pk_test_51OocYQGmE60O5ob7ydu8u1BLMhlWf9F5C6TCuSu75y47X5yBRO8wcbIssEjFc95AferGwyiHNkNGwT25ywIoZahB009vDgPuYd">
            <NavigationContainer linking={linking}>
              <MyStackNavigator
                isFooterShow={isFooterShow}
                setIsFooterShow={setIsFooterShow}
              />
              {isFooterShow && <MenuInferior />}
            </NavigationContainer>
          </StripeProvider>
        </Provider>
      </I18nextProvider>
    </SafeAreaView>
  )
}
