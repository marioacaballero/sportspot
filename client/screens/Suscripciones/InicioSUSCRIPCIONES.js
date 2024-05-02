import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal
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
import StripeComponent from '../StripeComponent'
import { getSubscription } from '../../redux/actions/stripe'

const InicioSUSCRIPCIONES = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { customer, clientSecret } = useSelector((state) => state.stripe)

  const [show, setShow] = useState(false)

  const handleStripe = () => {
    setShow(!show)
  }

  useEffect(() => {
    dispatch(getSubscription(customer.id))
  }, [])

  return (
    <>
      <ScrollView
        style={styles.inicioSuscripciones2}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View style={styles.helloAshfakParent}>
          <Text style={[styles.helloAshfak2, styles.helloClr]}>
            PLANES DE SUSCRIPCIÓN
          </Text>
          <Pressable
            style={styles.groupParent}
            onPress={() => navigation.goBack()}
          >
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={styles.div2CardsWrapper}>
          <View style={styles.div2Cards}>
            <View style={styles.card}>
              <View style={styles.content}>
                <View>
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

                <Pressable onPress={handleStripe} style={styles.contentInner}>
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan mensual 5,99€
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={handleStripe} style={styles.contentInner}>
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan trimestral 15,99€
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={handleStripe} style={styles.contentInner}>
                  <View style={styles.helloAshfakWrapper4}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                      Plan semestral 25,99€
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={handleStripe} style={styles.contentInner}>
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
      </ScrollView>
      {show && <StripeComponent clientSecret={clientSecret} />}
    </>
  )
}

const styles = StyleSheet.create({
  helloClr: {
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  helloTypo: {
    fontFamily: FontFamily.inputPlaceholder
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
    fontFamily: FontFamily.inputPlaceholder
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
    height: 38,
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
    width: 296
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '6%',
    marginRight: '6%'
  },
  inicioSuscripciones2: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_xl,
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
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
    width: 100
  }
})

export default InicioSUSCRIPCIONES
