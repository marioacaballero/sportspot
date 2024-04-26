import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
import { favorite, getFavorites, visitEvent } from '../../redux/actions/events'

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

  console.log(event?.reviews)

  const [modalSuscription, setModalSuscription] = useState(false)
  const [modalEditEvent, setModalEditEvent] = useState(false)
  const [favorites, setFavorites] = useState()

  useEffect(() => {
    dispatch(getFavorites(user.id))
  }, [dispatch, favoritesRedux])

  useEffect(() => {
    setFavorites(allFavorites)
  }, [allFavorites])

  useEffect(() => {
    if (!loading) {
      const body = {
        eventId: event.id,
        userId: user.id
      }
      dispatch(visitEvent(body))
    }
  }, [loading])

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
              Creador del evento: {event.creator.nickname}
            </Text>
            <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
              Email del creador: {event.creator.email}
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
            {event.reviews &&
              event.reviews.length &&
              event.reviews.map((event) => (
                <Text key={event.id}>{event.description}</Text>
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
    height: '85%',
    width: '90%',
    marginLeft: '5%',
    alignItems: 'center'
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
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default PruebasEncontradasDetalle
