import React, { useEffect } from 'react'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import { StyleSheet, View, Button } from 'react-native'
import { Color } from '../GlobalStyles'

function StripeComponent({ clientSecret }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()

  useEffect(() => {
    const initializePaymentSheet = async () => {
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        returnURL: '/InicioDeportista',
        merchantDisplayName: 'sportSport',
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
        allowsDelayedPaymentMethods: true
      })
      if (error) {
        // Handle error
        console.log('error', error)
      }
    }
    try {
      initializePaymentSheet()
    } catch (error) {
      console.log(error)
    }
  }, [clientSecret, initPaymentSheet])

  return (
    <View>
      <Button
        title="Subscribe"
        onPress={async () => {
          const { error } = await presentPaymentSheet()
          if (error) {
            if (error.code === PaymentSheetError.Failed) {
              // Handle failed
              console.log('Fallo pago ')
            } else if (error.code === PaymentSheetError.Canceled) {
              // Handle canceled
              console.log('Pago cancelado ')
            }
          } else {
            // Payment succeeded
            console.log('Pago aceptado')
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // margin: 20,
    backgroundColor: Color.sportsVioleta
  },
  group: {
    paddingHorizontal: 15
  },
  input: {
    backgroundColor: '#efefefef',
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10
  },
  card: {
    backgroundColor: '#efefefef',
    borderRadius: 8
  },
  cardContainer: {
    height: 50,
    marginVertical: 30
  }
})
export default StripeComponent
