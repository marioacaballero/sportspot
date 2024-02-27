import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../GlobalStyles'
import UltimasSVG from './SVG/UltimasSVG'
import CorazonSVG from './SVG/CorazonSVG'
import HomeSVG from './SVG/HomeSVG'
import HistorialSVG from './SVG/HistorialSVG'
import PerfilSVG from './SVG/PerfilSVG'

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
      <View style={styles.groupContainer}>
        <Pressable
          style={styles.container}
          onPress={() => {
            handleIconPress('UltimasConsultas')
            navigation.navigate('UltimasConsultas')
          }}
        >
          <UltimasSVG
            color={selectedIcon === 'UltimasConsultas' ? '#F25910' : '#40036F'}
          />
        </Pressable>
        <Pressable
          style={[styles.vector, styles.frameLayout]}
          onPress={() => {
            handleIconPress('Favoritos1')
            navigation.navigate('Favoritos1')
          }}
        >
          <CorazonSVG
            isFavorite={selectedIcon === 'Favoritos1' ? '#F25910' : '#40036F'}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedIcon(null)
            navigation.navigate('InicioDeportista')
          }}
        >
          {/* <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
          /> */}
          <HomeSVG />
        </Pressable>
        <Pressable
          style={styles.container2}
          onPress={() => {
            handleIconPress('HistorialDePruebas')
            navigation.navigate('HistorialDePruebas')
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
            handleIconPress('TuPerfil')
            navigation.navigate('TuPerfil')
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
    backgroundColor: Color.gris
  },
  groupContainer: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  frame: {
    width: 20
  }
})
