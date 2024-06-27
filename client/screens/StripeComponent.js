import React, { useEffect, useState } from 'react'
import WebView from 'react-native-webview'
import axiosInstance from '../utils/apiBackend';
import { ActivityIndicator, View } from 'react-native';
function StripeComponent({ route }) {
  const [url, setUrl] = useState("")
  const { amount } = route.params;
  const getUrl = async () => {
    const data = await axiosInstance.post("https://rest.paycomet.com/v1/form",
      {
        operationType: "1",
        terminal: "71101",
        productDescription: "el mejor de todos los tiempos y baratitoooo",
        payment: {
          amount: `${amount}00`,
          currency: "EUR",
          order: "PAY987654321",
          terminal: "71101",
          secure: "1"
        }
      }, {
      headers: {
        'PAYCOMET-API-TOKEN': "c46f644de73451fd74eef020783fba4c0d42a4e6"
      }
    }
    )
    if (data.data.challengeUrl) { setUrl(data.data.challengeUrl) }
  }
  useEffect(() => {
    console.log(amount, "amount")
    getUrl()
  }, [])


  return (
    <View style={{ flex: 1}}>
      {url ? <WebView
        originWhitelist={['*']}
        source={{ uri: url }}
      >

      </WebView> : <ActivityIndicator style={{alignSelf:"center",flex:1}}></ActivityIndicator>}
    </View>
  )
}

export default StripeComponent
