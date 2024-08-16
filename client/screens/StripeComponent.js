import React, { useEffect, useState } from 'react'
import WebView from 'react-native-webview'
import axiosInstance from '../utils/apiBackend'
import { ActivityIndicator, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
function StripeComponent({ route }) {
  const [url, setUrl] = useState('')
  const { amount, cent } = route.params

  function generarOrder() {
    const prefijo = 'PAY'
    const numeros = Math.floor(Math.random() * 9000000000) + 1000000000 // Genera un número aleatorio de 10 dígitos
    return prefijo + numeros.toString()
  }
  const navigation = useNavigation()

  const getUrl = async () => {
    const data = await axiosInstance.post(
      'https://rest.paycomet.com/v1/form',
      {
        operationType: '1',
        terminal: '73081',
        productDescription: 'Descripcion del producto',
        payment: {
          amount: `${amount}${cent || '00'}`,
          currency: 'EUR',
          order: generarOrder(),
          terminal: '73081',
          secure: '1'
        }
      },
      {
        headers: {
          'PAYCOMET-API-TOKEN': 'bb518dc868eee45c1071761ce374572c4e7d952e'
        }
      }
    )
    console.log(data.data, 'datita')
    if (data.data.challengeUrl) {
      setUrl(data.data.challengeUrl)
    }
  }
  useEffect(() => {
    getUrl()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {url ? (
        <WebView
          onNavigationStateChange={(navState) => {
            console.log('URL cambiada:', navState.url)
            // Registra la URL cambiada aquí
            if (navState.url.includes('www.paycomet.com/url-ok')) {
              setTimeout(() => {
                navigation.goBack()
              }, 1000) // 1000 milisegundos = 1 segundo
            }
          }}
          originWhitelist={['*']}
          source={{ uri: url }}
        ></WebView>
      ) : (
        <ActivityIndicator
          style={{ alignSelf: 'center', flex: 1 }}
        ></ActivityIndicator>
      )}
    </View>
  )
}

export default StripeComponent
