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
        locations={[0, 0.13, 0.37, 0.64, 0.88, 1]}
        colors={['#f25910', '#f7b99c', '#fff', '#fef8f5', '#642794', '#40036f']}
      >
        <View style={styles.bienvenidaInner}>
          <View style={styles.capturaDePantalla20231024Wrapper}>
            <Image
              style={styles.capturaDePantalla20231024Icon}
              contentFit="cover"
              source={require('../assets/captura-de-pantalla-20231024-103636transformed-1.png')}
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
    marginTop: -400,
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
