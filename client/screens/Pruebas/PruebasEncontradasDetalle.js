import React, { useEffect, useState } from 'react'
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import EditEvent from '../../components/EditEvent'
import EscribirResea from '../../components/EscribirResea'
import ModalSuscription from '../../components/ModalSuscription'
import {
  favorite,
  getEventById,
  getFavorites
} from '../../redux/actions/events'
import CardReview from './CardReview'

const PruebasEncontradasDetalle = ({ navigation }) => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const {
    event,
    loading,
    allFavorites,
    favorites: favoritesRedux
  } = useSelector((state) => state.events)

  const isUserPostReview = () => {
    const newEvents = event.reviews.map((review) => {
      return { ...review, reviewCreator: review.reviewCreator.id }
    })

    return newEvents.some((review) => review.reviewCreator === user.id)
  }

  const [eventState, setEventState] = useState(event)
  const [modalSuscription, setModalSuscription] = useState(false)
  const [modalEditEvent, setModalEditEvent] = useState(false)
  const [favorites, setFavorites] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getFavorites(user.id))
  }, [favoritesRedux])

  useEffect(() => {
    setFavorites(allFavorites)
  }, [allFavorites])

  useEffect(() => {
    setEventState(event)
  }, [loading, event])

  const isEventAlreadyAdded = event.suscribers?.some(
    (userEvent) => userEvent.id === user.id
  )

  const transformPlaces = (places) => {
    if (places === event.suscribers.length) {
      return `${places}/${places} : Full`
    } else if (places > event.suscribers.length) {
      return `${event.suscribers.length}/${places} -> Disponibles`
    }
  }

  const handleFavorite = () => {
    const data = {
      id: user.id,
      eventId: event.id
    }
    dispatch(favorite(data))
  }

  if (loading) {
    return (
      <View>
        <Image
          style={styles.background}
          source={require('../../assets/BGInicio.png')}
          contentFit="cover"
        />
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
      </View>
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
                {event?.creator?.id === user?.id ? (
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => {
                      setModalEditEvent(true)
                    }}
                  >
                    <Text style={styles.modalText}>Editar</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => setModalSuscription(true)}
                  >
                    <Text style={styles.modalText}>
                      {isEventAlreadyAdded ? 'Desuscribirse' : 'Suscribrirse'}
                    </Text>
                  </TouchableOpacity>
                )}

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
                <TouchableOpacity onPress={handleFavorite}>
                  <MaterialCommunityIcons
                    name={
                      favorites?.some(
                        (favorite) => favorite.id === event?.id
                      ) === true
                        ? 'cards-heart'
                        : 'cards-heart-outline'
                    }
                    color="#F25910"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              Descripción: {event.description}
            </Text>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              Creador del evento: {event?.creator?.email}
            </Text>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              Email del creador: {event?.creator?.email}
            </Text>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              Número de contacto: {event.phoneNumber}
            </Text>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              Plazas disponibles: {transformPlaces(event.places)}
            </Text>
            <Text style={[styles.reseasDeLa, styles.reseasDeLaTypo]}>
              Reseñas de la prueba
            </Text>
            {isEventAlreadyAdded && !isUserPostReview() && (
              <TouchableOpacity
                onPress={() => setShowModal(true)}
                style={styles.review}
              >
                <Text style={styles.reviewText}>Dar mi reseña</Text>
              </TouchableOpacity>
            )}
            {event.reviews.length > 0 &&
              event.reviews
                .slice(0, 5)
                .map((event) => (
                  <CardReview
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    qualification={event.qualification}
                  />
                ))}
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

        <Modal animationType="slide" transparent={true} visible={showModal}>
          <EscribirResea onClose={setShowModal} />
        </Modal>

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
  review: {
    backgroundColor: Color.sportsNaranja,
    borderColor: Color.sportsNaranja,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    width: 130,
    marginVertical: 10,
    marginLeft: 10
  },
  reviewText: {
    textAlign: 'center',
    color: Color.blanco,
    fontWeight: '500',
    fontSize: FontSize.size_mid
  },
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  modalOverlay: {
    height: '85%',
    width: '90%',
    marginLeft: '5%',
    alignItems: 'center'
  },
  reseasDeLaTypo: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_11xl,
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
    fontSize: FontSize.size_mid,
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
    textAlign: 'center',
    fontSize: FontSize.size_mid
  },
  editButton: {
    height: 30,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: Color.sportsNaranja
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default PruebasEncontradasDetalle
