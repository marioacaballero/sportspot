import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/home/Home'
import Signup from '../screens/signup/Signup'
import Login from '../screens/signup/Login'
import { Text } from 'react-native'

const HomeStackNavigator = createNativeStackNavigator()

function MyStack() {
  //   const nav = [
  //     {
  //       name: 'home',
  //       component: Home,
  //       path: '/home'
  //     },
  //     {
  //       name: 'signup',
  //       component: Signup,
  //       path: '/signup'
  //     },
  //     {
  //       name: 'login',
  //       component: Login,
  //       path: '/login'
  //     }
  //   ]

  return (
    <HomeStackNavigator.Navigator initialRouteName="home">
      {/* {nav.map((screen) => ( */}
      <HomeStackNavigator.Screen
        name={'home'}
        component={Home}
        //   key={screen.name}
      />
      <HomeStackNavigator.Screen
        name={'login'}
        component={Login}
        //   key={screen.name}
      />
      {/* ))} */}
    </HomeStackNavigator.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
