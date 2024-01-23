import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import SignIn from './src/screens/signup/SignIn'
import Login from './src/screens/signup/Login'
import Home from './src/screens/home/Home'
import Map from './src/components/popup/Map'
import PopUpSportman from './src/screens/bodyHome/component/PopUpSportman'
import Profile from './src/screens/profile/Profile'
import ManageAccount from './src/screens/profile/components/manageAccount/ManageAccount'
import EditProfile from './src/screens/profile/components/manageAccount/components/EditProfile'
import Security from './src/screens/profile/components/manageAccount/components/Security'
import PaymentDetails from './src/screens/profile/components/manageAccount/components/PaymentDetails'
import AddCard from './src/screens/profile/components/manageAccount/components/AddCard'
import WorkWithUs from './src/screens/profile/components/manageAccount/components/WorkWithUs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          options={{ headerShown: false }}
          name="signin"
          component={SignIn}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      'linear-gradient(162deg, red 0%, green 13.24%, black 37.75%, yellow 66.25%, blue 91%, white 103.14%)'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
