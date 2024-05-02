import React, { useState } from 'react'
import { Modal, Pressable, Text } from 'react-native'
import { CardField, useStripe } from '@stripe/stripe-react-native'
import { createSubscription, paymentSubscription } from '../redux/actions/stripe'
import { useDispatch, useSelector } from 'react-redux'

function StripeComponent() {
  const { confirmPayment } = useStripe()
  const dispatch = useDispatch()
  const { customer, clientSecretPayment } = useSelector((state) => state.stripe)
  const [modal, setModal] = useState(false)

  const fetchPaymentIntent = () => {
    const priceId = 'price_1PBNJ7F0YK5c4Ih5VBUaBISR'
    dispatch(paymentSubscription({ priceId, customerId: customer.id }))
    setModal(true)
  }

  // Confirma el pago
  const handlePay = async () => {

    if (!clientSecretPayment) {
      return
    }
    
    const { error, paymentIntent } = await confirmPayment(clientSecretPayment, {
      paymentMethodType: 'Card'
    })
    if (error) {
      console.log('Error al confirmar el pago', error.message)
    } else {
      console.log('Pago confirmado')
      // Aquí puedes llamar a tu API para crear la suscripción
      const data = {
        priceId: 'price_1PBNJ7F0YK5c4Ih5VBUaBISR',
        customerId: customer.id,
        paymentMethodId: paymentIntent.paymentMethod.id
      }
      dispatch(createSubscription(data))
    }
  }

  return (
    <>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242'
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000'
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30
        }}
      />
      <Pressable
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#000000',
          color: '#FFFFFF'
        }}
        onPress={fetchPaymentIntent}
      >
        <Text>Pagar</Text>
      </Pressable>
      {modal && (
        <Modal>
          <Pressable
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#000000',
              color: '#FFFFFF'
            }}
            onPress={handlePay}
          >
            <Text>Confirmar pago</Text>
          </Pressable>
        </Modal>
      )}
    </>
  )
}

export default StripeComponent
