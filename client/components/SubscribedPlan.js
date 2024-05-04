import React from 'react'
import { Pressable, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { createSubscription } from '../redux/actions/stripe'
import { prices } from '../utils/prices.stripe'

function SubscribedPlan({ customerId, setShow }) {
  const dispatch = useDispatch()

  const suscribed = () => {
    const priceId = prices.monthPriceId
    
    setShow(true)
  }
  return (
    <View>
      <Pressable onPress={suscribed}>
        <Text>Crear suscripcion</Text>
      </Pressable>
    </View>
  )
}

export default SubscribedPlan