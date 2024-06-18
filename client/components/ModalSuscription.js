import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { offSuscription } from '../redux/actions/suscriptions'
import { suscriptionEventUser } from '../redux/actions/users'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllEvents } from '../redux/actions/events'
import { useStripe } from '@stripe/stripe-react-native'
import axiosInstance from '../utils/apiBackend'

const ModalSuscription = ({ user, event, onClose }) => {


  const { initPaymentSheet, presentPaymentSheet } = useStripe(null);
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await axiosInstance.post(`/stripe/paymentEvent`, {
     

        amount:parseInt(`${event.price}00`),
        customerId:user.stripeId
      
    });
    console.log(response.data)
    const { paymentIntent, ephemeralKey, customer} =  response.data;

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      // allowsDelayedPaymentMethods: true,
      // defaultBillingDetails: {
      //   name: user.name,
      // }
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    // see below
    
    if (error) {
     console.log(`Error code: ${error.code}`, error.message);
    } else {
      onSuscribed()
      onClose()
     console.log('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    console.log(user,event,"userevent")
    initializePaymentSheet();
  }, []);



  const isGuest = user?.email === 'guestUser@gmail.com'
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const userSuscribed = event.suscribers?.some(
    (userEvent) => userEvent.id === user.id
  )

  const onSubmit = async () => {
    if (isGuest) {
      const actualSuscriptions =
        (await JSON.parse(AsyncStorage.getItem('guestSuscriptions'))
          .actualSuscriptions) || []
      const newSuscriptions = actualSuscriptions.filter(
        (suscription) => suscription.id !== event.id
      )
      AsyncStorage.setItem(
        'guestSuscriptions',
        JSON.stringify({
          actualSuscriptions: newSuscriptions
        })
      )
    }
    const data = {
      id: user.id,
      eventId: event.id
    }
    dispatch(offSuscription(data)).then((data) => dispatch(getAllEvents()))
  }
  const onSuscribed = async () => {
    if (isGuest) {
      const actualSuscriptions =
        (await JSON.parse(AsyncStorage.getItem('guestSuscriptions'))
          .actualSuscriptions) || []
      if (!actualSuscriptions.includes(event.id)) {
        AsyncStorage.setItem(
          'guestSuscriptions',
          JSON.stringify({
            actualSuscriptions: [...actualSuscriptions, event.id]
          })
        )
      }
    }
    // console.log('user: ', user)
    const data = {
      id: user.id,
      eventId: event.id
    }
    // console.log('sending suscription request to: ', data)
    dispatch(suscriptionEventUser(data)).then((data) =>
      dispatch(getAllEvents())
    )
    navigation.goBack()
  }

  return userSuscribed ? (
    <View style={styles.container}>
      <Text style={styles.text}>¿Seguro que deseas desuscribirte?</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          onSubmit()
          onClose()
          navigation.navigate('InicioDeportista')
        }}
      >
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>¿Seguro que deseas inscribirte?</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          openPaymentSheet()
          // navigation.navigate('stripe')
        }}
      >
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 35,
    backgroundColor: Color.blanco,
    borderRadius: 20,
    elevation: 5
  },
  text: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: FontSize.size_mini,
    color: Color.sportsVioleta
  },
  touchable: {
    height: 45,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: Color.sportsNaranja
  },
  confirmText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ModalSuscription
