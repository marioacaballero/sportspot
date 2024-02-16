import * as React from 'react'
import { useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const Bienvenida = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      navigation.navigate('SignIn') // Reemplaza 'Home' con el nombre de tu pantalla destino
    }, 3000) // Simula 3 segundos de tiempo de carga
    return () => clearTimeout(loadingTimeout)
  }, [navigation])

  return (
    <>
      <LinearGradient
        style={styles.bienvenida}
        colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#40036F']}
        locations={[0, 0.2, 0.5, 0.8, 1]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 0.8 }}
      >
        <View style={styles.bienvenidaInner}>
          <View style={styles.capturaDePantalla20231024Wrapper}>
            <Image
              style={styles.capturaDePantalla20231024Icon}
              contentFit="cover"
              source={require('../assets/spotsport.png')}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  capturaDePantalla20231024Icon: {
    width: 262,
    height: 69
  },
  capturaDePantalla20231024Wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bienvenidaInner: {
    position: 'absolute',
    marginTop: -250,
    marginLeft: -152,
    top: '50%',
    left: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_181xl,
    paddingBottom: Padding.p_182xl,
    alignItems: 'center',
    height: 800
  },
  bienvenida: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    height: 800
  }
})

export default Bienvenida
