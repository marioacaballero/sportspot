import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView
} from 'react-native'
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border
} from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { useTranslation } from "react-i18next";

const VentajasSuscripciones = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();


  const handleStripe = async (plan) => {
    // const priceId = prices[`${plan}PriceId`]
    let priceId
   

    if (plan === 'month') return navigation.navigate('stripe',{amount: 5 ,cent:99})
    if (plan === 'triMonth') return navigation.navigate('stripe',{amount: 15 ,cent:99})
    if (plan === 'sixMonth') return navigation.navigate('stripe',{amount: 25 ,cent:99})
    if (plan === 'year') return navigation.navigate('stripe',{amount: 45 ,cent:99})

    // console.log(customer,"customer")
    //  const res = await dispatch(createSubscription({ priceId, customerId: customer.id }))
    // const { data } = await axiosInstance.post(
    //   `stripe/subscription/${priceId}`,
    //   { customerId: user.stripeId }
    // )
    // if (data) {
    //   // console.log(data.latest_invoice.payment_intent.client_secret,"respuesta")
    //   setClientSecret(data.latest_invoice.payment_intent.client_secret)
    // }
    // console.log(data,"resss")
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 50 }}
      style={styles.container}
    >
      <View style={styles.helloAshfakParent}>
        <Text style={styles.helloAshfak2}>{t("planessuscripcion")}</Text>
        {/* <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable> */}
      </View>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/alerta.png')}
          />
          {i18n.language == "es" ? (
            <Text style={styles.boxText}>
              Sistema de alertas. Nos preocupamos porque esstés bien informado,
              por eso te enviaremos alertas de las pruebas sobre apertura, cambio
              o finalización de plazo de inscripción.
            </Text>
          ) : (
            <Text style={styles.boxText}>
              Alert system. We care about keeping you well informed, so we will send you alerts regarding the opening, changes, or deadline of registration periods for events.
            </Text>
          )}
        </View>

        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/cancelacion.png')}
          />
          {i18n.language == "es" ? (
            <Text style={styles.boxText}>
              Cancelación gratuita. Podrás cancelar tu inscripción hasta 20 días
              antes de la celebración de tu prueba sin ningún coste adicional.
            </Text>
          ) : (
            <Text style={styles.boxText}>
              Free cancellation. You can cancel your registration up to 20 days before the date of your event at no additional cost.
            </Text>
          )}
        </View>

        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/descuentos.png')}
          />
          {i18n.language == "es" ? (
            <Text style={styles.boxText}>
              Descuentos y ofertas exclusivas. Nuestro sistema de puntos te
              recompensa facilitando que alcances mejores premios al ser un
              usuario suscriptor.
            </Text>
          ) : (
            <Text style={styles.boxText}>
              Discounts and exclusive offers. Our points system rewards you by making it easier for you to reach better rewards as a subscribing user.
            </Text>
          )}
        </View>

        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/experiencia.png')}
          />
          {i18n.language == "es" ? (
            <Text style={styles.boxText}>
            Nos preocupamos por la autenticidad de tu experiencia y la de los
            demás deportistas de SpotSport. Contarás con la capacidad de crear
            reseñass, asegurando la calidad de la información y obteniendo
            puntos en nuestro sistema de gamificación
          </Text>
          ) : (
            <Text style={styles.boxText}>
           We care about the authenticity of your experience and that of other SpotSport athletes. You will have the ability to create reviews, ensuring the quality of information and earning points in our gamification system.
          </Text>
          )}
        </View>

        <View style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper1}>
            <Text style={styles.helloAshfak}>{t("adquiereplan")}
            </Text>
          </View>
        </View>

        <Pressable onPress={()=> handleStripe("month") } style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              {t("plan1")}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={()=> handleStripe("triMonth") } style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              {t("plan2")}

            </Text>
          </View>
        </Pressable>
        <Pressable  onPress={()=> handleStripe("sixMonth") } style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              {t("plan3")}

            </Text>
          </View>
        </Pressable>
        <Pressable onPress={()=> handleStripe("year") } style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              {t("plan4")}

            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: Padding.p_xl,
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
  },
  helloAshfakParent: {
    justifyContent: 'space-between',
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfak2: {
    fontSize: 22,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_3xs,
    backgroundColor: '#fcede5',
    padding: Padding.p_xl,
    paddingHorizontal: 18,
    marginTop: 10
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    height: "auto",
    paddingBottom: 30,
    width: '100%'
  },
  boxText: {
    color: Color.sportsVioleta,
    fontSize: 13,
    width: '83%',
    fontWeight: "500"
  },
  imageIcon: {
    width: 25,
    height: 25,
    alignSelf: "center"
  },
  contentInner: {
    marginTop: 16,
    flexDirection: 'row'
  },
  helloAshfak7: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    fontWeight: "bold"
  },
  helloAshfakWrapper1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: "bold"
  },
  helloAshfakWrapper4: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 38,
    padding: Padding.p_3xs,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default VentajasSuscripciones
