import React, { useEffect } from 'react'
// import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import { View, Text, Pressable } from 'react-native'

function SubscribeView({ clientSecret }) {
  // console.log('clientSecret', clientSecret)

  // const { initPaymentSheet, presentPaymentSheet } = useStripe()

  // useEffect(() => {
  //   const initializePaymentSheet = async () => {
  //     const { error } = await initPaymentSheet({
  //       paymentIntentClientSecret: clientSecret,
  //       returnURL: 'http://192.168.1.179:3000/api',
  //       merchantDisplayName: 'spotSport',
  //       // Set `allowsDelayedPaymentMethods` to true if your business handles
  //       // delayed notification payment methods like US bank accounts.
  //       allowsDelayedPaymentMethods: true
  //     })
  //     if (error) {
  //       // Handle error
  //       // console.log(error)
  //     }
  //   }

  //   initializePaymentSheet()
  // }, [clientSecret, initPaymentSheet])

  return (
    <View>
      <Pressable
        style={{ width: 150, backgroundColor: 'blue', color: 'white' }}
        
      >
        <Text>Subscribe</Text>
      </Pressable>
    </View>
  )
}

export default SubscribeView
