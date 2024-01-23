import { StyleSheet, Text, View } from 'react-native'
import LoadingScreen from './src/screens/home/LoadingScreen'
import SignIn from './src/screens/signup/SignIn'
import Login from './src/screens/signup/Login'
import Home from './src/screens/home/Home'
import Signup from './src/screens/signup/SignUp' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='SignUp' component={Signup} />
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
