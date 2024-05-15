import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Image, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import UltimasSVG from './SVG/UltimasSVG'
import HomeSVG from './SVG/HomeSVG'
import HistorialSVG from './SVG/HistorialSVG'
import PerfilSVG from './SVG/PerfilSVG'
import CorazonMenuInferiorSVG from './SVG/CorazonMenuInferiosSVG'
import { useDispatch, useSelector } from 'react-redux'
import { setShowGuestModal } from '../redux/slices/events.slices'

const MenuInferior = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)
  const navigation = useNavigation()
  const [selectedIcon, setSelectedIcon] = useState(null)

  const isGuest = user?.email === 'guestUser@gmail.com'

  const handleIconPress = (iconName) => {
    if (selectedIcon === iconName) {
      setSelectedIcon(null)
    } else {
      setSelectedIcon(iconName)
    }
  }

  // const getUserType = async () => {
  //   const userType = await AsyncStorage.getItem('guest')
  //   return JSON.parse(userType)
  // esta puede ser una opcion para obtener el type guest pero es mas sencillo hacer condicionales en base al email del user.
  // }
  // // console.log('users: ', user)
  // useEffect(() => {
  //   getUserType()
  // }, [])
  return (
    <View style={styles.menInferior}>
      <Pressable
        onPress={() => {
          if (isGuest) {
            dispatch(setShowGuestModal(true))
            return
          }
          if (selectedIcon !== 'UltimasConsultas') {
            handleIconPress('UltimasConsultas')
            navigation.navigate('UltimasConsultas')
          }
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 65,
          zIndex: 999999999,
          width: Dimensions.get('screen').width / 5
        }}
      />
      <Pressable
        onPress={() => {
          if (isGuest) {
            dispatch(setShowGuestModal(true))
            return
          }
          if (selectedIcon !== 'Favoritos1') {
            handleIconPress('Favoritos1')
            navigation.navigate('Favoritos1')
          }
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: Dimensions.get('screen').width / 5,
          height: 65,
          zIndex: 9999999999,
          width: Dimensions.get('screen').width / 5
        }}
      />
      <Pressable
        onPress={() => {
          if (selectedIcon !== null) {
            setSelectedIcon(null)
            navigation.navigate('InicioDeportista')
          }
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: (Dimensions.get('screen').width / 5) * 2,
          height: 65,
          zIndex: 999999,
          width: Dimensions.get('screen').width / 5
        }}
      />
      <Pressable
        onPress={() => {
          if (isGuest) {
            dispatch(setShowGuestModal(true))
            return
          }
          if (selectedIcon !== 'HistorialDePruebas') {
            handleIconPress('HistorialDePruebas')
            navigation.navigate('HistorialDePruebas')
          }
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: (Dimensions.get('screen').width / 5) * 3,
          height: 65,
          zIndex: 999999,
          width: Dimensions.get('screen').width / 5
        }}
      />
      <Pressable
        onPress={() => {
          if (isGuest) {
            dispatch(setShowGuestModal(true))
            return
          }
          if (selectedIcon !== 'TuPerfil') {
            handleIconPress('TuPerfil')
            navigation.navigate('TuPerfil')
          }
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: 65,
          zIndex: 99999999,
          width: Dimensions.get('screen').width / 5
        }}
      />
      <Image
        style={{
          width: Dimensions.get('screen').width,
          height: 73,
          position: 'absolute',
          left: 0,
          bottom: 0
        }}
        source={require('../assets/bottomBarPng.png')}
      />
      <View
        style={{
          position: 'absolute',
          width: 73,
          height: 73,
          shadowColor: '#3C006E',
          shadowOffset: {
            width: 20,
            height: 20
          },
          shadowRadius: 10,
          elevation: 40,
          shadowOpacity: 1,
          borderRadius: 100,
          backgroundColor: '#fdfdfd',
          zIndex: -1000,
          bottom: 0,
          left: Dimensions.get('screen').width / 2 - 36.5
        }}
      ></View>
      <View style={styles.groupContainer}>
        <View style={styles.container}>
          <UltimasSVG
            color={selectedIcon === 'UltimasConsultas' ? '#F25910' : '#40036F'}
          />
        </View>
        <Pressable style={{ width: 26, height: 23 }}>
          <CorazonMenuInferiorSVG
            isFavorite={selectedIcon === 'Favoritos1' ? '#F25910' : '#40036F'}
          />
        </Pressable>
        <Pressable style={styles.homeIcon}>
          <HomeSVG color={selectedIcon === null ? '#F25910' : '#40036F'} />
        </Pressable>
        <Pressable style={{ width: 22, height: 25, top: 3 }}>
          <HistorialSVG
            color={
              selectedIcon === 'HistorialDePruebas' ? '#F25910' : '#40036F'
            }
          />
        </Pressable>
        <Pressable style={{ width: 22, height: 25, top: 3 }}>
          <PerfilSVG
            color={selectedIcon === 'TuPerfil' ? '#F25910' : '#40036F'}
          />
        </Pressable>
      </View>
      <Image
        style={styles.menInferiorChild}
        contentFit="cover"
        source={require('../assets/ellipse-7194.png')}
      />
    </View>
  )
}

export default MenuInferior

const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 25,
    bottom: 3
  },
  onda: {
    height: '100px',
    width: '100px',
    position: 'absolute',
    left: '50%',
    marginLeft: -40,
    top: -40,
    transform: [{ rotate: '180deg' }],
    zIndex: 1000
  },
  container2: {
    width: 22,
    height: 25,
    top: 3
  },
  vector: {
    width: 26
  },
  frameLayout: {
    height: 23
  },
  menInferiorChild: {
    width: '100%',
    height: 24
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33
  },
  menInferior: {
    height: 62,
    width: '100%',
    paddingTop: 5,
    paddingHorizontal: 20,
    backgroundColor: '#fdfdfd',
    shadowColor: '#3C006E',
    zIndex: 9999999999,
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowRadius: 10,
    elevation: 40,
    shadowOpacity: 1
  },
  groupContainer: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
    // marginHorizontal: 30
  },
  frame: {
    width: 20
  },
  homeIcon: {
    right: 2,
    bottom: 8
  }
})
