import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
// import StripeComponent from '../StripeComponent'
import { createSubscription, getSubscription } from '../../redux/actions/stripe'
import SubscribeView from '../../components/SuscribeView'
// import SubscribedPlan from '../../components/SubscribedPlan'
import { prices } from '../../utils/prices.stripe'
import { LinearGradient } from 'expo-linear-gradient'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../../utils/apiBackend'

const InicioSUSCRIPCIONES = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [clientSecret, setClientSecret] = useState(null)
  const { customer, clientSecretSubscription } = useSelector(
    (state) => state.stripe
  )
  const { user } = useSelector((state) => state.users)

  const { initPaymentSheet, presentPaymentSheet } = useStripe(null)

  React.useEffect(() => {
    const initializePaymentSheet = async () => {
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'asdasda',
        returnURL: 'stripe-example://payment-sheet'
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
      })
      if (error) {
        // Handle error
        // console.log(error,"error")
      } else {
        const { error } = await presentPaymentSheet()
        if (error) {
          // console.log(error,"error")
        } else {
          // const updUser = await axiosInstance.patch(`user/${user.user.id}`,{
          //   plan:planSelected
          // })
          // console.log(updUser, "upd")
        }
      }
    }

    if (clientSecret) {
      // console.log("entra a la hoja")
      initializePaymentSheet()
    }
  }, [clientSecret, initPaymentSheet])

  const [show, setShow] = useState(false)
  // console.log('clientSecret en inicio susc', user)
  const customerId = customer.id

  const handleStripe = async (plan) => {
    // const priceId = prices[`${plan}PriceId`]
    let priceId
    if (plan === 'month') priceId = 'price_1PEimEGmE60O5ob73URnJjUC'
    if (plan === 'triMonth') priceId = 'price_1PEinJGmE60O5ob7eQisI6Ro'
    if (plan === 'sixMonth') priceId = 'price_1PEinpGmE60O5ob7iETkR6v1'
    if (plan === 'year') priceId = 'price_1PEioLGmE60O5ob77Om5OLsk'

    // console.log(customer,"customer")
    //  const res = await dispatch(createSubscription({ priceId, customerId: customer.id }))
    const { data } = await axiosInstance.post(
      `stripe/subscription/${priceId}`,
      { customerId: user.stripeId }
    )
    if (data) {
      // console.log(data.latest_invoice.payment_intent.client_secret,"respuesta")
      setClientSecret(data.latest_invoice.payment_intent.client_secret)
    }
    // console.log(data,"resss")
  }

  // useEffect(() => {
  //   // console.log(clientSecretSubscription, 'en useEffect')
  // }, [clientSecretSubscription])

  useEffect(() => {
    dispatch(getSubscription(customer.id))
  }, [])

  // const handleGetGold = async () => {
  //   // console.log("entra")
  //    const res = await axiosInstance.post('/user/create-subscription',{
  //      priceId:"price_1P4cNLGmE60O5ob7O3hTmP9d",
  //      customerId:user.user.stripeId
  //    })

  //    if(res.data){

  //      setPlanSelected("pro")
  //      setClientSecret(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret)
  //      // // console.log(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret,"res dataaa")

  //    }

  //    // console.log(user.user.stripeId,"user")

  //  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ScrollView
        style={styles.inicioSuscripciones2}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.helloAshfakParent}>
          <Text style={[styles.helloAshfak2, styles.helloClr]}>
            PLANES DE SUSCRIPCIÓN
          </Text>
          {/* <Pressable
            style={styles.groupParent}
            onPress={() => navigation.goBack()}
          >
            <BackArrowSVG />
          </Pressable> */}
        </View>
        <View style={styles.div2CardsWrapper}>
          <View style={styles.div2Cards}>
            <View style={styles.card}>
              <View style={styles.content}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Text style={[styles.estasSonLasContainer, styles.helloClr]}>
                    <Text style={styles.estasSonLasVentajasQueObt}>
                      <Text style={styles.helloTypo}>
                        ¡Estas son algunas de las ventajas que obtendrías al
                        hacerte Premium!
                      </Text>
                    </Text>
                  </Text>
                </View>

                <View style={styles.groupWrapper}>
                  <View style={styles.groupContainer}>
                    <View style={styles.container}>
                      <Image
                        style={styles.imageIcon}
                        contentFit="cover"
                        source={require('../../assets/nuevo.png')}
                      />
                      <Text style={styles.textos}>Sistema de alertas</Text>
                    </View>
                    <View style={styles.container}>
                      <Image
                        style={styles.imageIcon}
                        contentFit="cover"
                        source={require('../../assets/reembolso.png')}
                      />
                      <Text style={styles.textos}>
                        Reembolso por cancelación
                      </Text>
                    </View>
                  </View>
                  <View style={styles.groupContainer}>
                    <View style={styles.container}>
                      <Image
                        style={styles.imageIcon}
                        contentFit="cover"
                        source={require('../../assets/reseña.png')}
                      />
                      <Text style={styles.textos}>Reseñas de valor</Text>
                    </View>
                    <View style={styles.container}>
                      <Image
                        style={styles.imageIcon}
                        contentFit="cover"
                        source={require('../../assets/descuento.png')}
                      />
                      <Text style={styles.textos}>Descuentos especiales</Text>
                    </View>
                  </View>
                </View>

                <Pressable
                  style={styles.contentInner}
                  onPress={() => navigation.navigate('VentajasSuscripciones')}
                >
                  <View style={styles.helloAshfakWrapper}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Consulta todas las ventajas
                    </Text>
                  </View>
                </Pressable>

                <View style={styles.contentInner}>
                  <View style={styles.helloAshfakWrapper1}>
                    <Text style={styles.helloAshfak}>
                      Adquiere tu plan ahora!
                    </Text>
                  </View>
                </View>

                <Pressable
                  onPress={() => handleStripe('month')}
                  style={styles.contentInner}
                >
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan mensual 5,99€
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => handleStripe('triMonth')}
                  style={styles.contentInner}
                >
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan trimestral 15,99€
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => handleStripe('sixMonth')}
                  style={styles.contentInner}
                >
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan semestral 25,99€
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => handleStripe('year')}
                  style={styles.contentInner}
                >
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan anual 45,99€
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {/* <SubscribedPlan customerId={customer.id} setShow={setShow} /> */}
      </ScrollView>
      {show && <SubscribeView clientSecret={clientSecretSubscription} />}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  helloClr: {
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  helloTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: 'bold'
  },
  frameChild: {
    width: 29,
    height: 22
  },
  materialSymbolsnotificationsIcon: {
    width: 27,
    marginLeft: 7,
    height: 24,
    overflow: 'hidden'
  },
  groupParent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfakParent: {
    justifyContent: 'space-between',
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  estasSonLasVentajasQueObt: {
    fontSize: FontSize.inputPlaceholder_size
  },
  estasSonLasContainer: {
    height: 80,
    width: 296
  },
  helloAshfak7: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: 'bold'
  },
  helloAshfak2: {
    fontSize: 22,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsVioleta,
    height: 50,
    padding: Padding.p_3xs,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloAshfakWrapper1: {
    borderRadius: Border.br_31xl,
    height: 40,
    padding: Padding.p_3xs,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloAshfakWrapper4: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 45,
    padding: Padding.p_3xs,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentInner: {
    marginTop: 16,
    flexDirection: 'row'
  },
  divider: {
    borderStyle: 'solid',
    borderColor: Color.blanco,
    borderTopWidth: 1,
    height: 1,
    marginTop: 16,
    alignSelf: 'stretch'
  },
  content: {
    width: '100%'
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_xl
  },
  div2Cards: {
    backgroundColor: Color.blanco
  },
  div2CardsWrapper: {
    zIndex: 1,
    marginTop: 20
  },
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  inicioSuscripciones2: {
    paddingTop: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    width: '100%',
    flex: 1
  },
  imageIcon: {
    width: 50,
    height: 50
  },
  groupWrapper: {
    gap: 30,
    marginBottom: '10%'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  textos: {
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    textAlign: 'center',
    width: 100,
    fontWeight: 'bold'
  }
})

export default InicioSUSCRIPCIONES
