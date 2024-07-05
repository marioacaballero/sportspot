import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'
import PopupOrdenarPor from '../../components/PopupOrdenarPor'
import PruebasEncontradasFiltros from '../../components/PruebasEncontradasFiltros'
import CorazonSVG from '../../components/SVG/CorazonSVG'
import {
  getAllEvents,
  getEventById,
  getFavorites
} from '../../redux/actions/events'
import {
  getEventByIdRedux,
  setFilteredEvents,
  setShowGuestModal
} from '../../redux/slices/events.slices'
import { favorite, getUser } from '../../redux/actions/users'

const PruebasEncontradas = ({ route }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { favorites, events, nameEventsFilters, allFavorites, eventsFilter } =
    useSelector((state) => state.events)
  const { user } = useSelector((state) => state.users)
  const { sports } = useSelector((state) => state.sports)

  // // console.log(user, 'user en encontradas pruebas')
  const [modalOrder, setModalOrder] = useState(false)
  const [modalFilter, setModalFilter] = useState(false)
  const [favoriteEvents, setFavoriteEvents] = useState([])
  const [newEvents, setNewEvents] = useState([])
  const isGuest = user?.email === 'guestUser@gmail.com'
  useEffect(() => {
    // if (eventsFilter.length === 0) {
    //   dispatch(setFilteredEvents(events))
    // }
  }, [])

  // useEffect(() => {
  //   dispatch(getFavorites(user.id))
  // }, [favorites])

  useEffect(() => {
    console.log('events', events)
    const appliedFilters = route?.params?.filter
    console?.log('appliedFilters', appliedFilters)
    let filteredEvents = [...events]
    if (appliedFilters?.sportName?.length > 0) {
      const filteredSports = sports
        ?.filter((deporte) =>
          appliedFilters?.sportName?.includes(deporte?.name)
        )
        ?.map((deporte) => deporte?.id)
      console?.log('filteredSports', filteredSports)
      filteredEvents = events?.filter((event) =>
        filteredSports?.includes(event?.sportId)
      )
    }
    if (appliedFilters?.location?.length > 0) {
      const location = appliedFilters?.location
      const filteredEventsCopy = [...filteredEvents]
      filteredEvents = filteredEventsCopy?.filter((event) =>
        event?.location?.toLowerCase()?.includes(location?.toLowerCase())
      )
    }
    if (appliedFilters?.dateStart?.length > 0) {
      const startDate = new Date(appliedFilters?.dateStart[0])
      const endDate = new Date(appliedFilters?.dateStart[1])
      const filteredEventsCopy = [...filteredEvents]
      filteredEvents = filteredEventsCopy?.filter((ev) => {
        const evStart = new Date(ev?.dateStart)
        if (evStart >= startDate && evStart <= endDate) {
          return true
        } else {
          return false
        }
      })
    }
    dispatch(setFilteredEvents(filteredEvents))
  }, [])

  // useEffect(() => {
  //   const today = new Date()

  //   const sportsArray = route.params.localSport.split(', ')

  //   const idsFiltrados = sports
  //     .filter((deporte) => sportsArray.includes(deporte.name))
  //     .map((deporte) => deporte.id)

  //   const eventosFiltrados = events.filter((evento) =>
  //     idsFiltrados.includes(evento.sportId)
  //   )

  //   const filteredUsers = eventosFiltrados.filter((user) => {
  //     const dateInscription = new Date(user.dateInscription)
  //     return dateInscription >= today
  //   })

  //   setNewEvents(filteredUsers)
  // }, [eventsFilter])

  useEffect(() => {
    setFavoriteEvents(allFavorites)
  }, [allFavorites])

  const toggleFavorite = (eventId) => {
    console.log('toggling favorite on ', eventId)
    const data = {
      id: user.id,
      eventId
    }
    console.log('data: ', data)
    dispatch(favorite(data)).then((data) => dispatch(getUser(user.id)))
  }

  const toggleModalOrder = () => {
    setModalOrder(true)
  }

  const toggleModalFilter = () => {
    setModalFilter(true)
  }

  return (
    <ScrollView style={styles.pruebasEncontradas}>
      <View style={styles.pruebasEncontradasParent}>
        <Text style={[styles.pruebasEncontradas1, styles.ene2024Typo]}>
          {'PRUEBAS ENCONTRADAS'}
        </Text>
        <Pressable
          style={[styles.cilarrowTopParent, styles.parentSpaceBlock]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.cilarrowTopIcon}
            contentFit="cover"
            source={require('../../assets/cilarrowtop1.png')}
          />
          <Text style={[styles.badajozCilcismo22, styles.filtrosTypo]}>
            {`${
              route.params.localSport.length > 0 ? route.params.localSport : ''
            }${
              route.params.filter.sportName.length > 0 &&
              route.params.filter.dateStart.length > 0
                ? ', '
                : ''
            }${
              route.params.filter.sportName.length > 0 &&
              route.params.filter.dateStart.length === 0 &&
              route.params.filter.location.length > 0
                ? ', '
                : ''
            }${
              route.params.filter.dateStart.length > 0
                ? route.params.filter.dateStart
                : ''
            }${
              route.params.filter.dateStart.length > 0 &&
              route.params.filter.location.length > 0
                ? ', '
                : ''
            }${
              route.params.filter.location.length > 0
                ? route.params.filter.location
                : ''
            }`}
          </Text>
        </Pressable>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <Pressable style={styles.filtrosParent} onPress={toggleModalFilter}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalFilter}
              >
                <TouchableWithoutFeedback onPress={() => setModalFilter(false)}>
                  <View style={{ flex: 1 }}>
                    <PruebasEncontradasFiltros
                      setModalVisible={setModalFilter}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
              <Text style={styles.filtrosTypo}>Filtros</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../assets/ellipse-7189.png')}
              />
            </Pressable>
            <Modal animationType="fade" transparent={true} visible={modalOrder}>
              <TouchableWithoutFeedback onPress={() => setModalOrder(false)}>
                <View style={{ flex: 1 }}>
                  <PopupOrdenarPor setModalVisible={setModalOrder} />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
            <View style={styles.filtrosParent}>
              <Pressable onPress={toggleModalOrder}>
                <Text style={styles.filtrosTypo}>Ordenar por</Text>
              </Pressable>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../assets/ellipse-7190.png')}
              />
            </View>
          </View>
          {eventsFilter?.length > 0 ? (
            <View style={styles.frameContainer}>
              {eventsFilter?.map((event, i) => (
                <Pressable
                  key={i}
                  onPress={() => {
                    dispatch(getEventByIdRedux(event.id))
                    navigation.navigate('PruebasEncontradasDetalle')
                  }}
                  style={styles.unsplashon4qwhhjcemParentShadowBox}
                >
                  <Image
                    style={styles.unsplashon4qwhhjcemIcon}
                    contentFit="cover"
                    source={{ uri: event.image }}
                  />

                  <View style={styles.frameView}>
                    <View style={styles.frameGroupFlexBox}>
                      <Text style={[styles.senderismo, styles.textTypo]}>
                        {event.title}
                      </Text>
                      <View style={styles.likeSpotsport}>
                        <CorazonSVG
                          isFavorite={user.eventFavorites?.includes(event.id)}
                          handle={() => {
                            if (isGuest) {
                              dispatch(setShowGuestModal(true))
                              return
                            }
                            toggleFavorite(event.id)
                          }}
                        />
                      </View>
                    </View>
                    <Text
                      style={[
                        styles.imGoingToContainer,
                        styles.goingContainerFlexBox
                      ]}
                    >
                      <Text style={styles.modalidad}>
                        -Modalidad: {event.modality}
                        {'\n'}
                      </Text>
                      <Text style={styles.modalidad}>
                        -Localidad: {event.location}
                        {'\n'}
                      </Text>
                      <Text style={styles.modalidad}>-Fecha de la prueba:</Text>
                      <Text style={styles.ene2024Typo}>
                        {' '}
                        {event.dateStart} {'\n'}
                      </Text>

                      <Text style={styles.modalidad}>
                        -Plazo límite de inscripción:{' '}
                      </Text>
                      <Text style={styles.ene2024Typo}>
                        {event?.dateInscription} {'\n'}
                      </Text>
                    </Text>
                    <Text
                      style={[
                        styles.imGoingToContainer1,
                        styles.goingContainerFlexBox
                      ]}
                    >
                      <Text style={styles.precioDeInscripcin}>
                        {t('precioinscripcion')}
                      </Text>
                      <Text style={styles.textTypo}>{event.price}€ </Text>
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.frameContainer}>
              <Text>No hay resultados para tu busqueda!</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ene2024Typo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  parentSpaceBlock: {
    marginTop: 20,
    alignItems: 'center'
  },
  filtrosTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  frameGroupFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  textTypo: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  goingContainerFlexBox: {
    marginTop: 10,
    textAlign: 'left'
  },
  unsplashon4qwhhjcemParentShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    flexDirection: 'row',
    // alignSelf: 'stretch',
    width: '100%',
    marginTop: 10
  },
  pruebasEncontradas1: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta,
    width: 180
  },
  cilarrowTopIcon: {
    width: 25,
    height: 25,
    overflow: 'hidden'
  },
  badajozCilcismo22: {
    marginLeft: 13
  },
  cilarrowTopParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    padding: Padding.p_3xs,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  frameChild: {
    width: 10,
    height: 10,
    marginTop: 5
  },
  filtrosParent: {
    alignItems: 'center'
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0
  },
  unsplashon4qwhhjcemIcon: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    height: '100%'
  },
  senderismo: {
    fontSize: FontSize.size_sm,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'left',
    flex: 1
  },
  likeSpotsport: {
    overflow: 'hidden',
    right: '10%'
  },
  modalidad: {
    fontFamily: FontFamily.inputPlaceholder,
    marginLeft: 10,
    fontSize: 12
  },
  imGoingToContainer: {
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  precioDeInscripcin: {
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  imGoingToContainer1: {
    fontSize: FontSize.size_2xs
  },
  frameView: {
    width: 251,
    padding: Padding.p_3xs
  },
  frameContainer: {
    marginTop: 8,
    alignItems: 'center'
  },
  pruebasEncontradasParent: {
    paddingTop: 20,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: 30
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  container: {
    marginLeft: 47,
    height: 20
  },
  frame: {
    width: 19,
    marginLeft: 47,
    height: 20
  },
  pruebasEncontradas: {
    backgroundColor: Color.blanco,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default PruebasEncontradas
