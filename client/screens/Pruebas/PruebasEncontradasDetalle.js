import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import CorazonSVG from '../../components/SVG/CorazonSVG'
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import ModalSuscription from '../../components/ModalSuscription'
import EditEvent from '../../components/EditEvent'
import { ActivityIndicator } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { favorite, getFavorites } from '../../redux/actions/events'

const PruebasEncontradasDetalle = ({ navigation }) => {
  // const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const {
    event,
    loading,
    allFavorites,
    favorites: favoritesRedux
  } = useSelector((state) => state.events)

  const [modalSuscription, setModalSuscription] = useState(false)
  const [modalEditEvent, setModalEditEvent] = useState(false)
  const [favorites, setFavorites] = useState()

  useEffect(() => {
    dispatch(getFavorites(user.id))
  }, [dispatch, favoritesRedux])

  useEffect(() => {
    setFavorites(allFavorites)
  }, [allFavorites])

  const isEventAlreadyAdded = user.events?.some(
    (userEvent) => userEvent.id === event.id
  )

  const handleFavorite = () => {
    const data = {
      id: user.id,
      eventId: event.id
    }
    dispatch(favorite(data))
  }

  if (loading) {
    return (
      <LinearGradient
        colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#40036F']}
        locations={[0, 0.2, 0.5, 0.8, 1]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.linearGradient}
      >
        <ActivityIndicator
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }}
          animating={true}
          size="large"
          color={Color.violeta2}
        />
      </LinearGradient>
    )
  } else {
    return (
      <ScrollView style={styles.pruebasEncontradasDetalle}>
        <View style={[styles.unsplashon4qwhhjcemParent, styles.parentPosition]}>
          <Image
            style={styles.unsplashon4qwhhjcemIcon}
            contentFit="cover"
            source={{ uri: event.image }}
          />

          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 15
                }}
              >
                <Text style={styles.reseasDeLaTypo}>{event.title}</Text>
                <Text style={[styles.modalidadMontaa, styles.ciclismoTypo]}>
                  {event.sport?.name?.slice(0, 1).toUpperCase()}
                  {event.sport?.name?.slice(1)} {event.sport?.type}
                </Text>
              </View>
              <View style={styles.alertParent}>
                <View style={styles.editButton}>
                  {event?.creator?.id === user?.id ? (
                    <Text
                      style={styles.modalText}
                      onPress={() => {
                        setModalEditEvent(true)
                      }}
                    >
                      Editar
                    </Text>
                  ) : (
                    <Text
                      style={styles.modalText}
                      onPress={() => setModalSuscription(true)}
                    >
                      {isEventAlreadyAdded ? 'Desuscribirse' : 'Suscribrirse'}
                    </Text>
                  )}
                </View>
                <Image
                  style={styles.alertIcon}
                  contentFit="cover"
                  source={require('../../assets/alert.png')}
                />
                <Image
                  style={[styles.clarityshareSolidIcon, styles.containerLayout]}
                  contentFit="cover"
                  source={require('../../assets/claritysharesolid.png')}
                />
                <CorazonSVG
                  isFavorite={favorites?.some(
                    (favorite) => favorite.id === event?.id
                  )}
                  handle={handleFavorite}
                />
              </View>
            </View>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              {event.description}
            </Text>
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
              source={require('../../assets/cilarrowtop.png')}
            />
            <Text style={[styles.ciclismo, styles.ciclismoTypo]}>Atrás</Text>
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
              <ModalSuscription
                user={user}
                event={event}
                onClose={() => setModalSuscription(false)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEditEvent}
        >
          <View style={styles.modalOverlay}>
            <EditEvent event={event} onClose={() => setModalEditEvent(false)} />
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  modalOverlay: {
    height: '100%',
    width: '100%'
  },
  reseasDeLaTypo: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_3xl,
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
  unsplashon4qwhhjcemIcon: {
    maxWidth: '100%',
    height: 351,
    zIndex: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%'
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
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  frameGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  loremIpsumDolor: {
    fontWeight: '300',
    fontFamily: FontFamily.inputPlaceholderLight,
    marginTop: 20,
    textAlign: 'left'
  },
  reseasDeLa: {
    marginTop: 20,
    textAlign: 'left'
  },
  frameParent: {
    backgroundColor: Color.naranja3,
    padding: Padding.p_xl,
    zIndex: 1,
    height: '100%'
  },
  cilarrowTopIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden',
    top: 2
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
  pruebasEncontradasDetalle: {
    flex: 1,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.blanco
  },
  modalText: {
    color: 'white',
    width: '100%',
    textAlign: 'center'
  },
  editButton: {
    height: 30,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: Color.sportsNaranja
  }
})

export default PruebasEncontradasDetalle
