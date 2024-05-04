import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../GlobalStyles'
import UltimasSVG from './SVG/UltimasSVG'
import HomeSVG from './SVG/HomeSVG'
import HistorialSVG from './SVG/HistorialSVG'
import PerfilSVG from './SVG/PerfilSVG'
import CorazonMenuInferiorSVG from './SVG/CorazonMenuInferiosSVG'
import { Ellipse, Line, Svg } from 'react-native-svg'

const MenuInferior = () => {
  const navigation = useNavigation()
  const [selectedIcon, setSelectedIcon] = useState(null)

  const handleIconPress = (iconName) => {
    if (selectedIcon === iconName) {
      setSelectedIcon(null)
    } else {
      setSelectedIcon(iconName)
    }
  }

  return (
    <View style={styles.menInferior}>
      <View style={styles.contenedor}>
        <Svg
          style={styles.onda}
          width="77"
          height="40"
          viewBox="0 5 42 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elipse exterior con borde celeste */}
          <Ellipse cx="18.5" rx="34.5" ry="22" stroke="#a3b4ff" strokeWidth="1.6" fill="none" />
          {/* Elipse interior */}
          <Ellipse  cx="18.5" rx="34.5" ry="22" fill="#FFFF"  />
        </Svg>
      </View>
      <View style={styles.groupContainer}>
        <Pressable
          style={styles.container}
          onPress={() => {
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
  contenedor: {
    height: 2,
    width: '100%',
    flexDirection: 'row',
    position: 'relative'
  },
  onda: {
    height: "100px",
    width: "100px",
    borderColor: "black",
    borderWidth:1,
    position: 'absolute',
    left: '50%',
    marginLeft: -40,
    top: -40,
    transform: [{ rotate: '180deg' }],
    zIndex: 999
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
    backgroundColor: '#FFFF',
    borderTopWidth:0.8,
    borderColor:"#a3b4ff",
    elevation: 3, // Agregamos una elevación para la sombra
    shadowColor: '#243682', // Color de la sombra celeste
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra,
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
