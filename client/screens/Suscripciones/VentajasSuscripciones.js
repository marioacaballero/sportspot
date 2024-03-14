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

const VentajasSuscripciones = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.helloAshfakParent}>
        <Text style={styles.helloAshfak2}>PLANES DE SUSCRIPCIÓN</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable>
      </View>
      <View style={styles.box}>
        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/alerta.png')}
          />
          <Text style={styles.boxText}>
            Sistema de alertas. Nos preocupamos porque esstés bien informado,
            por eso te enviaremos alertas de las pruebas sobre apertura, cambio
            o finalización de plazo de inscripción.
          </Text>
        </View>

        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/cancelacion.png')}
          />
          <Text style={styles.boxText}>
            Cancelación gratuita. Podrás cancelar tu inscripción hasta 20 días
            antes de la celebración de tu prueba sin ningún coste adicional.
          </Text>
        </View>

        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/descuentos.png')}
          />
          <Text style={styles.boxText}>
            Descuentos y ofertas exclusivas. Nuestro sistema de puntos te
            recompensa facilitando que alcances mejores premios al ser un
            usuario suscriptor.
          </Text>
        </View>

        <View style={styles.boxContent}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('../../assets/experiencia.png')}
          />
          <Text style={styles.boxText}>
            Nos preocupamos por la autenticidad de tu experiencia y la de los
            demás deportistas de SpotSport. Contarás con la capacidad de crear
            reseñass, asegurando la calidad de la información y obteniendo
            puntos en nuestro sistema de gamificación
          </Text>
        </View>

        <View style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper1}>
            <Text style={styles.helloAshfak}>Adquiere tu plan ahora!</Text>
          </View>
        </View>

        <Pressable style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              Plan mensual 5,99€
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              Plan trimestral 15,99€
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              Plan semestral 25,99€
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.contentInner}>
          <View style={styles.helloAshfakWrapper4}>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              Plan anual 45,99€
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_5xl,
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
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_xl,
    marginTop: 20
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    height: 100,
    width: '100%'
  },
  boxText: {
    color: Color.sportsVioleta,
    fontSize: 13,
    width: '80%'
  },
  imageIcon: {
    width: 25,
    height: 25
  },
  contentInner: {
    marginTop: 16,
    flexDirection: 'row'
  },
  helloAshfak7: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco
  },
  helloAshfakWrapper1: {
    borderRadius: Border.br_31xl,
    height: 40,
    padding: Padding.p_3xs,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
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
