import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'
import PopupOrdenarPor from '../components/PopupOrdenarPor'
import PruebasEncontradasFiltros from '../components/PruebasEncontradasFiltros'
import CorazonSVG from '../components/SVG/CorazonSVG'
import { getAllEvents, getEventById, favorite } from '../redux/actions/events'

const PruebasEncontradas = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { eventsFilter, favorites, nameEventsFilters } = useSelector(
    (state) => state.events
  )
  const { user } = useSelector((state) => state.users)
  const { sports } = useSelector((state) => state.sports)
  const [modalOrder, setModalOrder] = useState(false)
  const [modalFilter, setModalFilter] = useState(false)
  const [favoriteEvents, setFavoriteEvents] = useState([])

  const filterDescription = sports.filter((sport) =>
    nameEventsFilters.sportName.some((name) => name === sport.name)
  )

  console.log('eventos filtrados', filterDescription)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [])

  useEffect(() => {
    if (favorites.eventFavorites) {
      setFavoriteEvents(favorites.eventFavorites)
    }
  }, [favorites, eventsFilter])

  const toggleFavorite = (eventId) => {
    const data = {
      id: user.id,
      eventId
    }
    dispatch(favorite(data))
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
            source={require('../assets/cilarrowtop1.png')}
          />
          <Text style={[styles.badajozCilcismo22, styles.filtrosTypo]}>
            {filterDescription.map((sport) => (
              <Text key={sport.id}>{`${sport.name},`}</Text>
            ))}

            {`${nameEventsFilters.dateStart && ','} ${
              nameEventsFilters.dateStart
            }${nameEventsFilters.location && ','} ${
              nameEventsFilters.location
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
                <PruebasEncontradasFiltros setModalVisible={setModalFilter} />
              </Modal>
              <Text style={styles.filtrosTypo}>Filtros</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-7189.png')}
              />
            </Pressable>
            <View style={styles.filtrosParent}>
              <Pressable onPress={toggleModalOrder}>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalOrder}
                >
                  <PopupOrdenarPor setModalVisible={setModalOrder} />
                </Modal>
                <Text style={styles.filtrosTypo}>Ordenar por</Text>
              </Pressable>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-7190.png')}
              />
            </View>
          </View>
          <View style={styles.frameContainer}>
            {eventsFilter.map((event, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  dispatch(getEventById(event.id))
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
                    <Pressable
                      style={styles.likeSpotsport}
                      onPress={() => toggleFavorite(event.id)}
                    >
                      <CorazonSVG
                        isFavorite={favoriteEvents.includes(event.id)}
                      />
                    </Pressable>
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
                      -Localización: {event.location}
                      {'\n'}
                    </Text>
                    <Text style={styles.modalidad}>-Fecha de la prueba:</Text>
                    <Text style={styles.ene2024Typo}>
                      {event.datestart} {'\n'}
                    </Text>

                    <Text style={styles.modalidad}>
                      -Plazo límite de inscripción:
                    </Text>
                    <Text style={styles.ene2024Typo}>
                      {event?.dateinscription} {'\n'}
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.imGoingToContainer1,
                      styles.goingContainerFlexBox
                    ]}
                  >
                    <Text style={styles.precioDeInscripcin}>
                      {'PRECIO DE INSCRIPCIÓN: '}
                    </Text>
                    <Text style={styles.textTypo}>{event.price}</Text>
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
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
    shadowOpacity: 1,
    elevation: 4,
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
    height: 132
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
    right: '50%'
  },
  modalidad: {
    fontFamily: FontFamily.inputPlaceholder,
    marginLeft: 10
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
    width: 201,
    padding: Padding.p_3xs
  },
  frameContainer: {
    marginTop: 8,
    alignItems: 'center'
  },
  pruebasEncontradasParent: {
    paddingTop: Padding.p_48xl,
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
