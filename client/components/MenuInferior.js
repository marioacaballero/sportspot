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
  // console.log('users: ', user)
  // useEffect(() => {
  //   getUserType()
  // }, [])
  return (
    <View style={styles.menInferior}>
      <Image
        style={{
          width: 74,
          height: 14,
          position: 'absolute',
          left: Dimensions.get('screen').width / 2 - 37,
          bottom: 50
        }}
        source={require('../assets/midButtonCurve.png')}
      />
      <View style={styles.groupContainer}>
        <Pressable
          style={styles.container}
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
        >
          <UltimasSVG
            color={selectedIcon === 'UltimasConsultas' ? '#F25910' : '#40036F'}
          />
        </Pressable>
        <Pressable
          style={[styles.vector, styles.frameLayout]}
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
        >
          <CorazonMenuInferiorSVG
            isFavorite={selectedIcon === 'Favoritos1' ? '#F25910' : '#40036F'}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            if (selectedIcon !== null) {
              setSelectedIcon(null)
              navigation.navigate('InicioDeportista')
            }
          }}
          style={styles.homeIcon}
        >
          <HomeSVG color={selectedIcon === null ? '#F25910' : '#40036F'} />
        </Pressable>
        <Pressable
          style={styles.container2}
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
        >
          <HistorialSVG
            color={
              selectedIcon === 'HistorialDePruebas' ? '#F25910' : '#40036F'
            }
          />
        </Pressable>
        <Pressable
          style={styles.container2}
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
        >
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
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#cecece',
    shadowOpacity: 0.6,
    shadowRadius: 15
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
