import React, { useEffect, useState } from 'react'
import WebView from 'react-native-webview'
import axiosInstance from '../utils/apiBackend'
import { ActivityIndicator, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { submitInscription, suscriptionEventUser } from '../redux/actions/users'
import { getAllEvents } from '../redux/actions/events'
function StripeComponent({ route }) {
  const [url, setUrl] = useState('')
  const { amount, cent, title } = route.params

  function generarOrder() {
    const prefijo = 'PAY'
    const numeros = Math.floor(Math.random() * 9000000000) + 1000000000 // Genera un número aleatorio de 10 dígitos
    return prefijo + numeros.toString()
  }
  const navigation = useNavigation()
  const { user } = useSelector((state) => state.users)

  const getUrl = async () => {
    const data = await axiosInstance.post(
      'https://rest.paycomet.com/v1/form',
      {
        operationType: '1',
        terminal: '73081',
        // terminal: '71101',

        productDescription: 'Descripcion del producto',
        payment: {
          amount: `${amount}${cent || '00'}`,
          currency: 'EUR',
          order: generarOrder(),
          // terminal: '71101',
          terminal: '73081',

          secure: '1'
        }
      },
      {
        headers: {
          // 'PAYCOMET-API-TOKEN': '5fadd9b95cb3a11e5a2cffd585d702e458c29da0'
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

  const dispatch = useDispatch()
  const onSuscribed = async () => {
    // console.log('user: ', user)
    const data = {
      id: user.id,
      eventId: route.params.id
    }

    const dataToSend = { ...route.params.event }
    dataToSend.eventId = route.params.id
    dataToSend.userId = user.id
    console.log('sendind data to inscriptions', dataToSend)

    dispatch(submitInscription(dataToSend))

    console.log('sending suscription request to ============: ', data)

    dispatch(suscriptionEventUser(data)).then(async (data) => {
      await axiosInstance.post('send-mails/suscribe', {
        email: route.params.event.email,
        name_event: title
      })
      dispatch(getAllEvents()).then(() => {
        navigation.goBack()
        navigation.goBack()
      })
    })
  }

  return (
    <View style={{ flex: 1 }}>
      {url ? (
        <WebView
          onNavigationStateChange={(navState) => {
            console.log('URL cambiada:', navState.url)
            // Registra la URL cambiada aquí
            if (navState.url.includes('www.paycomet.com/url-ok')) {
              setUrl('')
              return onSuscribed()
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
