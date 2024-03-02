import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  // Button,
  // Alert,
  TouchableOpacity,
  Text
} from 'react-native'
import { CardField /*, useConfirmPayment */ } from '@stripe/stripe-react-native'
import { Color } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { suscriptionEventUser } from '../redux/actions/users'
import { useNavigation } from '@react-navigation/native'

// const API_URL = 'http://localhost:3000'

const StripeComponent = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { user } = useSelector((state) => state.users)
  const { event } = useSelector((state) => state.events)
  const [email, setEmail] = useState()
  const [cardDetails, setCardDetails] = useState()
  // const { confirmPayment, loading } = useConfirmPayment()

  const onSubmit = () => {
    const data = {
      id: user.id,
      eventId: event.id
    }

    dispatch(suscriptionEventUser(data))
    navigation.goBack()
  }

  // const fetchPaymentIntentClientSecret = async () => {
  //   const response = await fetch(`${API_URL}/create-payment-intent`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   const { clientSecret, error } = await response.json()
  //   console.log(error)
  //   return { clientSecret, error }
  // }

  // const handlePayPress = async () => {
  //   if (!cardDetails?.complete || !email) {
  //     Alert.alert('Please enter Complete card details and Email')
  //     return
  //   }
  //   const billingDetails = {
  //     email
  //   }
  //   try {
  //     const { clientSecret, error } = await fetchPaymentIntentClientSecret()
  //     if (error) {
  //       console.log('Unable to process payment')
  //     } else {
  //       const { paymentIntent, error } = await confirmPayment(clientSecret, {
  //         type: 'Card',
  //         billingDetails
  //       })
  //       if (error) {
  //         alert(`Payment Confirmation Error ${error.message}`)
  //       } else if (paymentIntent) {
  //         alert('Payment Successful')
  //         console.log('Payment successful ', paymentIntent)
  //       }
  //     }
  //   } catch (e) {
  //     alert('ultimo')
  //     console.log(e.message)
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: 30,
          right: 25,
          fontSize: 20
        }}
        onPress={() => navigation.goBack()}
      >
        X
      </Text>
      <View style={styles.group}>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={(value) => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: '4242 4242 4242 4242'
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails)
          }}
        />

        <TouchableOpacity
          onPress={onSubmit}
          style={{
            //   width: 100,
            height: 52,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            backgroundColor: Color.sportsNaranja
          }}
        >
          <Text style={{ color: 'white', width: '100%', textAlign: 'center' }}>
            Pagar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default StripeComponent

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
