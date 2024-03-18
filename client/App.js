import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { loadFonts } from './GlobalStyles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { StatusBar } from 'expo-status-bar'
import { StripeProvider } from '@stripe/stripe-react-native'

import PruebasEncontradasDetalle from './screens/PruebasEncontradasDetalle'
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
import PruebasEncontradas from './screens/PruebasEncontradas'
import InicioBUSCADOR from './screens/InicioBUSCADOR'
import PruebasEncontradasDetalle1 from './screens/PruebasEncontradasDetalle1'
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
// import PaymentScreen from './screens/StripeComponent'

// import { StripeProvider } from '@stripe/stripe-react-native'
// import PaymentScreen from './screens/PaymentScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const [isFooterShow, setIsFooterShow] = useState(null)

  useEffect(() => {
    loadFonts()
  }, [])

  const KEY =
    'pk_test_51OpBGEEOUHrYS47YxO9vPqjLLRu9F387GV3jMcc4rEtayJX9n7hKCyXw0cGlJCk7foCP89YpQUT4gD02XoGVK50l005VwrZaGC'

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Provider store={store}>
        {/* <StripeProvider publishableKey={KEY}> */}
        <NavigationContainer>
          <StripeProvider publishableKey={KEY}>
            {/* <StripeProvider publishableKey="pk_test_51OpBGEEOUHrYS47YxO9vPqjLLRu9F387GV3jMcc4rEtayJX9n7hKCyXw0cGlJCk7foCP89YpQUT4gD02XoGVK50l005VwrZaGC"> */}
            <Stack.Navigator
              initialRouteName="Bienvenida"
              screenOptions={({ route }) => ({
                headerShown: false,
                footerShown: setIsFooterShow(
                  route.name !== 'Bienvenida' &&
                    route.name !== 'IniciarSesin' &&
                    route.name !== 'SignIn' &&
                    route.name !== 'Registrarse' &&
                    route.name !== 'RecuperarContraseña'
                )
              })}
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
                name="PruebasEncontradasDetalle1"
                component={PruebasEncontradasDetalle1}
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
            {isFooterShow && <MenuInferior />}
          </StripeProvider>
        </NavigationContainer>
      </Provider>
    </View>
  )
}
