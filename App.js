import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Signup from './src/screens/signup/Signup'
import Home from './src/screens/home/Home'
import Login from './src/screens/signup/Login'
import BodyHome from './src/screens/bodyHome/BodyHome'
import Map from './src/components/popup/Map'
import PopUpSportman from './src/screens/bodyHome/component/PopUpSportman'
import Profile from './src/screens/profile/Profile'
import ManageAccount from './src/screens/profile/components/manageAccount/ManageAccount'
import EditProfile from './src/screens/profile/components/manageAccount/components/EditProfile'
import Security from './src/screens/profile/components/manageAccount/components/Security'
import PaymentDetails from './src/screens/profile/components/manageAccount/components/PaymentDetails'
import AddCard from './src/screens/profile/components/manageAccount/components/AddCard'
import WorkWithUs from './src/screens/profile/components/manageAccount/components/WorkWithUs'

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#652794', '#40036F']}
        style={styles.linearGradient}
      >
        {/* <Home2 /> */}
        {/* <Login /> */}
        <BodyHome />
      </LinearGradient>
    </View>
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
