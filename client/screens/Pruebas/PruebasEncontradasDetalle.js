import React, { useCallback, useEffect, useState } from 'react'
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
  Alert,
  ToastAndroid,
  PermissionsAndroid,
  Platform,
  Linking
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
// import { getFavorites } from '../../redux/actions/events'
import { favorite, getUser } from '../../redux/actions/users'
import EditEvent from '../../components/EditEvent'
import EscribirResea from '../../components/EscribirResea'
import ModalSuscription from '../../components/ModalSuscription'
import CardReview from './CardReview'
import {
  getEventByIdRedux,
  setShowGuestModal,
  setVisitedEvents
} from '../../redux/slices/events.slices'
import {
  deleteEvent,
  getAllEvents,
  getAllEventsInscriptions,
  getSuscribedEventsNotifications,
  visitEvent
} from '../../redux/actions/events'
import { useTranslation } from 'react-i18next'
import { setSport } from '../../redux/slices/sports.slices'
import axiosInstance from '../../utils/apiBackend'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { writeDataAndDownloadExcelFile } from '../Pruebas/xlsxdownloader'
import { Feather } from '@expo/vector-icons'
import i18next from 'i18next'

const PruebasEncontradasDetalle = ({ navigation }) => {
  const router = useRoute()
  // console.log('router.params', router.params)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const { user, eventFavorites, users } = useSelector((state) => state.users)
  const { event } = useSelector((state) => state.events)

  const {
    // event,
    loading,
    events,
    suscribedEventsNotifications,
    eventInscriptions
  } = useSelector((state) => state.events)
  const [isFavorite, setIsFavorite] = useState({})
  const { sports } = useSelector((state) => state.sports)
  const [eventState, setEventState] = useState(event)
  const [modalSuscription, setModalSuscription] = useState(false)
  const [modalEditEvent, setModalEditEvent] = useState(false)
  // const [favorites, setFavorites] = useState()
  const [showModal, setShowModal] = useState(false)
  const [available, setAvailable] = useState(false)

  const [notificationEnable, setNotificationEnable] = useState(false)
  // console.log('EVENTID', event.id)

  useFocusEffect(
    useCallback(() => {
      console.log('ID FROM PARAMS', router.params)
      if (router?.params?.id) {
        if (user?.id) {
          dispatch(
            visitEvent({
              eventId: router.params.id,
              userId: user.id
            })
          )
          dispatch(getEventByIdRedux(router.params.id))
        } else {
          navigation.replace('IniciarSesin')
        }
      }
    }, [router?.params?.id])
  )

  useEffect(() => {
    const isRegistrationOpen = (eventDate) => {
      const currentDate = new Date()
      const passedDate = new Date(eventDate)

      // Comparar las fechas directamente
      setAvailable(currentDate <= passedDate)
      return currentDate <= passedDate
    }
    if (event) {
      console.log(event.dateInscription, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      isRegistrationOpen(event.dateInscription)
    }
  }, [event])

  const stateName =
    eventFavorites && eventFavorites?.some((fav) => fav?.id === event?.id)
  const isGuest = user?.email === 'guestUser@gmail.com'

  const testingData = [
    { name: 'Test User 1', dateOfInscription: new Date(), fee: 11 },
    { name: 'Test User 2', dateOfInscription: new Date(), fee: 12 },
    { name: 'Test User 3', dateOfInscription: new Date(), fee: 13 }
  ]

  const handleDelete = (id) => {
    Alert.alert(
      t('confirmarEliminacion'),
      t('seguroeliminarevento'),
      [
        {
          text: t('cancelar'),
          style: 'cancel'
        },
        {
          text: t('eliminar'),
          onPress: async () => {
            console.log('me tocaron')
            navigation.navigate('Directorio')
            // await dispatch(setVisitedEvents(id))
            await dispatch(deleteEvent(id))

            ToastAndroid.show(t('eventoborradoconexito'), ToastAndroid.SHORT)
            await dispatch(getAllEvents())
          }
        }
      ],
      { cancelable: false }
    )
  }

  const nameState = () => {
    if (stateName !== undefined) {
      return stateName
    }
  }
  useEffect(() => {
    const notificationOn = suscribedEventsNotifications
      ?.map((e) => e.id)
      .includes(event.id)
    setNotificationEnable(notificationOn)
  }, [suscribedEventsNotifications])

  const [name, setName] = useState(nameState() || false)
  // console.log(user, 'userrrr', eventState)
  useEffect(() => {
    setName(stateName)
  }, [stateName])

  useEffect(() => {
    setEventState(event)
  }, [loading, event])

  const isUserPostReview = () => {
    const newEvents =
      eventState.reviews &&
      eventState.reviews.map((review) => {
        return { ...review, reviewCreator: review?.reviewCreator?.id }
      })

    return newEvents.some((review) => review.reviewCreator === user.id)
  }

  const isEventAlreadyAdded = eventState?.suscribers?.some(
    (userEvent) => userEvent.id === user.id
  )

  const transformPlaces = (places) => {
    if (eventState.suscribers) {
      if (places === eventState?.suscribers?.length) {
        return `${places}/${places} : Full`
      } else if (places > eventState?.suscribers?.length) {
        return `${places - eventState?.suscribers?.length}/${places} -> ${t(
          'disponible'
        )}`
      }
    } else {
      return `${places}/${places} -> ${t('disponible')}`
    }
  }

  const handleFavorite = () => {
    // console.log('on handleFavorite')
    const data = {
      id: user.id,
      eventId: eventState.id
    }
    dispatch(favorite(data)).then((data) => dispatch(getUser(user.id)))
    setName(!name)
  }

  // const onShare = async (eventLink) => {
  //   try {
  //     const result = await Share.share(
  //       {
  //         message: `Disfruta de éste nuevo evento deportivo aquí: 👇🏻 \n${eventLink}`,
  //         title: 'Mira éste evento increíble'
  //       },
  //       {
  //         // Android only:
  //         dialogTitle: 'Compartir este evento con',
  //         // iOS only:
  //         excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
  //       }
  //     )

  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //       } else {
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // descartado
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  const onShare = async (id, title) => {
    try {
      const url = `https://spotsport.eu/?id=${id}`
      const message =
        i18next.language === 'es'
          ? `Echa un vistazo a éste nuevo evento deportivo: ${title} Link: ${url}. Si aun no la tienes instalada puedes descargala en Google Play https://play.google.com/store/apps/details?id=com.aythenapp.spotsport`
          : `Check out this new event if you already have the app: ${title} Link: ${url}. And if you don't have it installed yet, you can download it on Google Play https://play.google.com/store/apps/details?id=com.aythenapp.spotsport`

      const result = await Share.share({
        message,
        url
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type: ', result.activityType)
        } else {
          console.log('Shared')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed')
      }
    } catch (error) {
      console.error('Error sharing', error)
    }
  }

  useEffect(() => {
    dispatch(getAllEventsInscriptions(event.id))
  }, [])

  const suscribeNotifications = async () => {
    if (available) {
      setNotificationEnable(!notificationEnable)
      const res = await axiosInstance.post(
        `/events/subscribe/${user.id}/${event.id}`
      )
      if (res) {
        dispatch(getSuscribedEventsNotifications(user.id))
      }
    }
  }
  const eventDateDay = eventState?.dateStart?.slice(8, 10)
  const eventDateMonth = eventState?.dateStart?.slice(5, 7)
  const eventDateYear = eventState?.dateStart?.slice(0, 4)

  if (loading || Object.keys(event).length === 0) {
    return (
      <View>
        <ActivityIndicator
          style={{
            width: '100%',
            height: '100%'
          }}
          animating={true}
          size="large"
          color={Color.violeta2}
        />
      </View>
    )
  } else {
    return (
      <ScrollView

      // contentContainerStyle={{ paddingBottom: 110 }}
      >
        {router?.params?.organizer && (
          <TouchableOpacity
            onPress={() => {
              handleDelete(eventState.id)
            }}
            style={{
              backgroundColor: Color.sportsNaranja,
              position: 'absolute',
              top: 53,
              right: 20,
              width: 53,
              height: 53,
              zIndex: 9999999999,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              contentFit={'cover'}
              source={require('../../assets/deleteIcon.png')}
            />
          </TouchableOpacity>
        )}
        {router?.params?.organizer && (
          <TouchableOpacity
            onPress={() => {
              console.log(eventInscriptions, 'dataaa')
              if (eventState.title) {
                writeDataAndDownloadExcelFile(
                  eventInscriptions,
                  eventState.title
                )
              }
            }}
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              top: 53,
              right: 93,
              width: 53,
              height: 53,
              zIndex: 9999999999,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Feather size={20} name="download" color={Color.sportsNaranja} />
          </TouchableOpacity>
        )}
        <View
          style={{
            marginTop: 0,
            width: '100%'
          }}
        >
          <Image
            style={styles.unsplashon4qwhhjcemIcon}
            contentFit="cover"
            source={
              eventState.image
                ? { uri: eventState.image }
                : require(' ../../../assets/spotsportadaptative.png')
            }
          />

          <Pressable
            style={[styles.cilarrowTopParent, styles.parentSpaceBlock]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.cilarrowTopIcon}
              contentFit="cover"
              source={require('../../assets/cilarrowtop.png')}
            />
            <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
              {' '}
              {t('atras')}
            </Text>
          </Pressable>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15
              }}
            >
              <Text style={styles.reseasDeLaTypo}>{eventState.title}</Text>
              <Text style={[styles.modalidadMontaa, styles.ciclismoTypo]}>
                {eventState.sport?.name?.slice(0, 1).toUpperCase()}
                {eventState.sport?.name?.slice(1)} {eventState.sport?.type}
              </Text>
            </View>
            <View style={styles.alertParent}>
              {eventState?.creator?.id === user?.id ? (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => {
                    dispatch(
                      setSport(
                        sports.filter(
                          (sport) => sport.id === eventState.sportId
                        )[0]
                      )
                    )
                    navigation.navigate('PublicarEvento', {
                      eventState,
                      onEdit: true
                    })
                  }}
                >
                  <Text style={styles.modalText}>{t('editar')}</Text>
                </TouchableOpacity>
              ) : (
                available && (
                  <TouchableOpacity
                    style={{
                      height: 30,
                      width: 170,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 50,
                      marginRight: 10,
                      backgroundColor: Color.sportsNaranja
                    }}
                    onPress={() => {
                      if (isEventAlreadyAdded) {
                        setModalSuscription(true)
                        return console.log('desuscribirse')
                      } else {
                        navigation.navigate('Inscripcion', eventState)
                      }
                    }}
                  >
                    <Text style={styles.modalText}>
                      {isEventAlreadyAdded
                        ? t('anularinscripcion')
                        : t('inscribirse')}
                    </Text>
                  </TouchableOpacity>
                )
              )}

              <TouchableOpacity
                onPress={() => {
                  if (isGuest) {
                    dispatch(setShowGuestModal(true))
                    return
                  }
                  suscribeNotifications()
                }}
              >
                <Image
                  style={styles.alertIcon}
                  contentFit="cover"
                  source={
                    notificationEnable
                      ? require('../../assets/alert4.png')
                      : require('../../assets/alert.png')
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  // onShare(
                  //   `${eventState.title} en ${eventState.location}. Si aun no te bajaste la app descargala en Google Play https://play.google.com/store/apps/details?id=com.aythenapp.spotsport`
                  // )
                  onShare(eventState.id, eventState.title)
                }
              >
                <Image
                  style={[styles.clarityshareSolidIcon, styles.containerLayout]}
                  contentFit="cover"
                  source={require('../../assets/claritysharesolid.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (isGuest) {
                    dispatch(setShowGuestModal(true))
                    return
                  }
                  handleFavorite()
                }}
              >
                <MaterialCommunityIcons
                  name={
                    user?.eventFavorites?.includes(eventState.id)
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
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 16
              }}
            >
              {t('lugar')}
            </Text>{' '}
            {eventState?.location}
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 16
              }}
            >
              {t('fecha')}:
            </Text>{' '}
            {`${eventDateDay}-${eventDateMonth}-${eventDateYear}`}
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 16
              }}
            >
              {t('deporte2')}
            </Text>{' '}
            {sports &&
              eventState?.sportId &&
              sports.filter((e) => e.id === eventState.sportId)[0]?.name}
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 16
              }}
            >
              {t('descripcion')}
            </Text>{' '}
            {eventState.description}
          </Text>

          <View
            style={[
              styles.loremIpsumDolor,
              styles.laInscripcinDeLayout,
              { flexDirection: 'row', alignItems: 'center', gap: 10 }
            ]}
          >
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 16
              }}
            >
              {t('archivos')}
            </Text>
            {eventState?.rules && (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(eventState.rules)
                }}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  backgroundColor: Color.sportsNaranja,
                  alignItems: 'center',
                  borderRadius: 50
                }}
              >
                <Text style={{ color: 'white' }}>{t('abrirenlace')}</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}>
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 16
              }}
            >
              {t('plazas')}
            </Text>{' '}
            {transformPlaces(eventState.places)}
          </Text>
          <Text style={[styles.reseasDeLa, styles.reseasDeLaTypo]}>
            <Text
              style={{
                fontWeight: 700,
                color: Color.sportsVioleta,
                fontSize: 20
              }}
            >
              {t('reseñasprueba')}
            </Text>{' '}
          </Text>
          {isEventAlreadyAdded && !isUserPostReview() && (
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={styles.review}
            >
              <Text style={styles.reviewText}>Dar mi reseña</Text>
            </TouchableOpacity>
          )}
          {eventState.reviews &&
            eventState.reviews?.length > 0 &&
            eventState.reviews
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

        <Modal animationType="slide" transparent={true} visible={showModal}>
          <EscribirResea onClose={setShowModal} />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalSuscription}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setModalSuscription(false)
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ModalSuscription
                user={user}
                event={eventState}
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
          <View style={{ width: '100%', height: '100%' }}>
            <EditEvent
              event={eventState}
              onClose={() => setModalEditEvent(false)}
            />
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
    width: '100%',
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
    height: 420,
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
    paddingBottom: 50
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
    marginTop: 0,
    width: '100%'
  },
  pruebasEncontradasDetalle: {
    flex: 1,
    overflow: 'hidden',
    width: '100%'
  },
  modalText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: FontSize.size_mid
  },
  editButton: {
    height: 30,
    width: 130,
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
