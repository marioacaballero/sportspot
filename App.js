import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PruebasEncontradasDetalle from './screens/PruebasEncontradasDetalle'
import Calendar from './components/Calendar'
import EditarPerfil from './screens/EditarPerfil'
import Seguridad from './screens/Seguridad'
import Metodo from './screens/Metodo'
import DatosDePago from './screens/DatosDePago'
import Cuenta from './screens/Cuenta'
import Metodo1 from './screens/Metodo1'
import Bienvenida from './screens/Bienvenida'
import EscribirResea from './components/EscribirResea'
import Favoritos from './screens/Favoritos'
import UltimasConsultas from './screens/UltimasConsultas'
import Favoritos1 from './screens/Favoritos1'
import HistorialDePruebas from './screens/HistorialDePruebas'
import TuPerfil from './screens/TuPerfil'
import IniciarSesin from './screens/IniciarSesin'
import Registrarse from './screens/Registrarse'
import InicioNotificaciones from './screens/InicioNotificaciones'
import InicioDeportista from './screens/InicioDeportista'
import InicioOrganizador from './screens/InicioOrganizador'
import Maps from './components/Maps'
import Sports from './components/Sports'
import PruebasEncontradas from './screens/PruebasEncontradas'
import InicioBUSCADOR from './screens/InicioBUSCADOR'
import PruebasEncontradasFiltros from './screens/PruebasEncontradasFiltros'
import Popupfiltros from './components/Popupfiltros'
import InicioSUSCRIPCIONES from './screens/InicioSUSCRIPCIONES'
import PopupAlerta from './components/PopupAlerta'
import PruebasEncontradasDetalle1 from './screens/PruebasEncontradasDetalle1'
import PruebasEncontradasOrdenar from './screens/PruebasEncontradasOrdenar'
import Group from './screens/Group'
import SignIn from './screens/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import MenuInferior from './components/MenuInferior'

export default function App() {
  const [isFooterShow, setIsFooterShow] = useState(true)

  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Bienvenida"
          screenOptions={({ route }) => ({
            // headerShown: false,
            headerShown: false,
            footerShown: setIsFooterShow(
              route.name !== 'Bienvenida' &&
                route.name !== 'IniciarSesin' &&
                route.name !== 'SignIn'
            )
          })}
        >
          <Stack.Screen
            name="PruebasEncontradasDetalle"
            component={PruebasEncontradasDetalle}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditarPerfil"
            component={EditarPerfil}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Seguridad"
            component={Seguridad}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Metodo"
            component={Metodo}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="DatosDePago"
            component={DatosDePago}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Cuenta"
            component={Cuenta}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Metodo1"
            component={Metodo1}
            options={{ headerShown: true }}
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
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Favoritos"
            component={Favoritos}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="UltimasConsultas"
            component={UltimasConsultas}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Favoritos1"
            component={Favoritos1}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="HistorialDePruebas"
            component={HistorialDePruebas}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="TuPerfil"
            component={TuPerfil}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="IniciarSesin"
            component={IniciarSesin}
            options={{ headerShown: true, title: 'Atrás' }}
          />
          <Stack.Screen
            name="Registrarse"
            component={Registrarse}
            options={{ headerShown: true, title: 'Atrás' }}
          />
          <Stack.Screen
            name="InicioNotificaciones"
            component={InicioNotificaciones}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InicioDeportista"
            component={InicioDeportista}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InicioOrganizador"
            component={InicioOrganizador}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Sports"
            component={Sports}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PruebasEncontradas"
            component={PruebasEncontradas}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="InicioBUSCADOR"
            component={InicioBUSCADOR}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PruebasEncontradasFiltros"
            component={PruebasEncontradasFiltros}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Popupfiltros"
            component={Popupfiltros}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="InicioSUSCRIPCIONES"
            component={InicioSUSCRIPCIONES}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PopupAlerta"
            component={PopupAlerta}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PruebasEncontradasDetalle1"
            component={PruebasEncontradasDetalle1}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PruebasEncontradasOrdenar"
            component={PruebasEncontradasOrdenar}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Group"
            component={Group}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
        {isFooterShow && <MenuInferior />}
      </NavigationContainer>
    </View>
  )
}
