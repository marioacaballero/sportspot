import React, { useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
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
    <View>
      <Image
        style={styles.background}
        contentFit="cover"
        source={require('../assets/BGInicioLogo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  }
})

export default Bienvenida
