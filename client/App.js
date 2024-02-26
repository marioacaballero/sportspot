import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PruebasEncontradasDetalle from './screens/PruebasEncontradasDetalle'
import EditarPerfil from './screens/EditarPerfil'
import Seguridad from './screens/Seguridad'
import Metodo from './screens/Metodo'
import DatosDePago from './screens/DatosDePago'
import Cuenta from './screens/Cuenta'
import Metodo1 from './screens/Metodo1'
import Bienvenida from './screens/Bienvenida'
import Favoritos from './screens/Favoritos'
import UltimasConsultas from './screens/UltimasConsultas'
import Favoritos1 from './screens/Favoritos1'
import HistorialDePruebas from './screens/HistorialDePruebas'
import TuPerfil from './screens/TuPerfil'
import IniciarSesin from './screens/IniciarSesin'
import Registrarse from './screens/Registrarse'
import InicioDeportista from './screens/InicioDeportista'
import InicioOrganizador from './screens/InicioOrganizador'
import PruebasEncontradas from './screens/PruebasEncontradas'
import InicioBUSCADOR from './screens/InicioBUSCADOR'
import PruebasEncontradasDetalle1 from './screens/PruebasEncontradasDetalle1'
import InicioSUSCRIPCIONES from './screens/InicioSUSCRIPCIONES'
import SignIn from './screens/SignIn'
import Popupfiltros from './components/PopupOrdenarPor'
import PopupAlerta from './components/PopupAlerta'
import EscribirResea from './components/EscribirResea'
import MenuInferior from './components/MenuInferior'
import Contacta from './screens/Contacta'
import { loadFonts } from './GlobalStyles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import RecuperarContraseña from './screens/RecuperarContraseña'

const Stack = createNativeStackNavigator()

export default function App() {
  const [isFooterShow, setIsFooterShow] = useState(null)

  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
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
              name="EditarPerfil"
              component={EditarPerfil}
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
        </NavigationContainer>
      </View>
    </Provider>
  )
}
