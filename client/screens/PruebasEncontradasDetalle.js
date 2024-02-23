import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'
import { useSelector } from 'react-redux'
import ModalSuscription from '../components/ModalSuscription'

const PruebasEncontradasDetalle = ({ navigation }) => {
  // const navigation = useNavigation()
  const { user } = useSelector((state) => state.users)
  const { event } = useSelector((state) => state.events)
  const [modalSuscription, setModalSuscription] = useState(false)

  return (
    <View style={styles.pruebasEncontradasDetalle}>
      <View style={[styles.unsplashon4qwhhjcemParent, styles.parentPosition]}>
        <Image
          style={styles.unsplashon4qwhhjcemIcon}
          contentFit="cover"
          // source={require('../assets/unsplashon4qwhhjcem.png')}
          source={{ uri: event.image }}
        />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View>
              <Text style={[styles.pruebaDeCiclismo, styles.reseasDeLaTypo]}>
                {event.title}
              </Text>
              <Text style={[styles.modalidadMontaa, styles.ciclismoTypo]}>
                {event.sport?.type}
              </Text>
            </View>
            <View style={styles.alertParent}>
              <View
                style={{
                  // padding: 5,
                  height: 30,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  marginRight: 10,
                  // marginTop: 30,
                  backgroundColor: Color.sportsNaranja
                }}
              >
                <Text
                  style={{ color: 'white' }}
                  onPress={() => setModalSuscription(true)}
                >
                  Suscribrirse
                </Text>
              </View>
              <Image
                style={styles.alertIcon}
                contentFit="cover"
                source={require('../assets/alert.png')}
              />
              <Image
                style={[styles.clarityshareSolidIcon, styles.containerLayout]}
                contentFit="cover"
                source={require('../assets/claritysharesolid.png')}
              />
              <Image
                style={[styles.clarityshareSolidIcon, styles.containerLayout]}
                contentFit="cover"
                source={require('../assets/like--spotsport.png')}
              />
            </View>
          </View>
          <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
            {event.description}
          </Text>
          {/* <Text style={[styles.laInscripcinDe, styles.laInscripcinDeLayout]}>
            La inscripción de la prueba es en el pueblo de Hornachos, Badajoz.
            Se celebrará el 1 de febrero de 2024. Si te interesa par-ticipar
            tienes hasta el 22 de enero de 2024 para realizar la inscripción. El
            precio de inscripción es de 22€ por persona.
          </Text> */}
          <Text style={[styles.reseasDeLa, styles.reseasDeLaTypo]}>
            Reseñas de la prueba
          </Text>
        </View>
        <Pressable
          style={[styles.cilarrowTopParent, styles.parentSpaceBlock]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.cilarrowTopIcon}
            contentFit="cover"
            source={require('../assets/cilarrowtop.png')}
          />
          <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
            {event.sport?.name}
          </Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSuscription}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setModalSuscription(false)
          }}
        >
          <View style={styles.modalOverlay}>
            <View>
              <ModalSuscription
                user={user}
                event={event}
                onClose={() => setModalSuscription(false)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  parentPosition: {
    // left: 0,
    // position: 'absolute'
  },
  modalOverlay: {
    // flex: 1,
    // top: -100,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reseasDeLaTypo: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_3xl,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  ciclismoTypo: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  containerLayout: {
    width: 20,
    height: 20
  },
  laInscripcinDeLayout: {
    width: 320,
    color: Color.violeta2,
    fontSize: FontSize.inputPlaceholder_size,
    marginTop: 20
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  unsplashon4qwhhjcemIcon: {
    maxWidth: '100%',
    height: 351,
    zIndex: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%'
  },
  pruebaDeCiclismo: {
    textAlign: 'left'
  },
  modalidadMontaa: {
    fontSize: FontSize.size_lg
  },
  alertIcon: {
    height: 22,
    width: 19
  },
  clarityshareSolidIcon: {
    marginLeft: 10,
    height: 20,
    overflow: 'hidden'
  },
  alertParent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  frameGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  loremIpsumDolor: {
    fontWeight: '300',
    fontFamily: FontFamily.inputPlaceholderLight,
    marginTop: 20,
    textAlign: 'left'
  },
  laInscripcinDe: {
    textAlign: 'justify',
    marginTop: 20,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.violeta2,
    fontSize: FontSize.inputPlaceholder_size
  },
  reseasDeLa: {
    marginTop: 20,
    textAlign: 'left'
  },
  frameParent: {
    backgroundColor: Color.naranja3,
    padding: Padding.p_xl,
    zIndex: 1,
    alignSelf: 'stretch',
    height: 420
  },
  cilarrowTopIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden'
  },
  ciclismo: {
    fontSize: FontSize.size_xl,
    marginLeft: 13
  },
  cilarrowTopParent: {
    top: 50,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    width: 178,
    height: 53,
    zIndex: 2,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.blanco
  },
  unsplashon4qwhhjcemParent: {
    top: 0,
    width: '100%'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 22,
    height: 25
  },
  vector: {
    width: 23,
    marginLeft: 47,
    height: 20
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    marginLeft: 47,
    height: 20
  },
  frame: {
    marginLeft: 47,
    height: 20,
    width: 19
  },
  groupParent: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    justifyContent: 'center',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  pruebasEncontradasDetalle: {
    flex: 1,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.blanco
  }
})

export default PruebasEncontradasDetalle
