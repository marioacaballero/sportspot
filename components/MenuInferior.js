import React from 'react'
import { StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../GlobalStyles'

const MenuInferior = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.menInferior}>
      <View style={styles.groupContainer}>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate('UltimasConsultas')}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/group-1171276700.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.vector, styles.frameLayout]}
          onPress={() => navigation.navigate('Favoritos1')}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/vector.png')}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('InicioDeportista')}>
          <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate('HistorialDePruebas')}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/frame-1547756022.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.frameLayout]}
          onPress={() => navigation.navigate('TuPerfil')}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/group-1171276701.png')}
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
    height: 25
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  vector: {
    width: 23
    // marginLeft: 47
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

  frameLayout: {
    height: 20
  },
  frame: {
    width: 20
  },
  groupPressable: {
    width: 19
  }
})
