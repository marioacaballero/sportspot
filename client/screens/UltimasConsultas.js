import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Switch,
  ScrollView,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Border, FontSize, Padding } from '../GlobalStyles'
import BackArrowSVG from '../components/SVG/BackArrowSVG'
import { getAllVisitedEvents, visitEvent } from '../redux/actions/events'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { favorite, getUser } from '../redux/actions/users'
import {
  getEventByIdRedux,
  setVisitedEvents
} from '../redux/slices/events.slices'
import { useTranslation } from 'react-i18next'

const UltimasConsultas = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation()

  const dispatch = useDispatch()

  const [switchStates, setSwitchStates] = useState([true, false, false])
  const [showSwitch, setshowSwitch] = useState(false)
  const { user, eventFavorites } = useSelector((state) => state.users)
  const { visitedEvents, events, loadingGet } = useSelector(
    (state) => state.events
  )

  const [isFavorite, setIsFavorite] = useState({})

  const initializeFavorites = () => {
    const init = {}
    visitedEvents?.forEach((visited, index) => {
      const isEventFavorite = eventFavorites.some((e) => {
        return e?.id === visited.event?.id
      })
      init[index] = isEventFavorite
    })
    return init
  }

  useFocusEffect(
    useCallback(() => {
      if (visitedEvents?.length > 0) {
        setIsFavorite(initializeFavorites());
      }
      console.log(visitedEvents,"visitt")
    }, [visitedEvents, eventFavorites])
  );

  useEffect(() => {
    const body = {
      userId: user.id,
      filter: switchStates[0]
        ? 'day'
        : switchStates[1]
        ? 'week'
        : switchStates[2]
        ? 'month'
        : 'day'
    }
    dispatch(getAllVisitedEvents(body))
  }, [switchStates])


  const toggleSwitch = (index) => {
    const newSwitchStates = [false, false, false]
    newSwitchStates[index] = !switchStates[index]
    setSwitchStates(newSwitchStates)
  }

  const toggleFavorite = (pruebaId) => {
    const data = {
      id: user.id,
      eventId: pruebaId
    }

    // const newObj = {
    //   ...isFavorite,
    //   [i]: !isFavorite[i]
    // }
    // setIsFavorite(newObj)
    dispatch(favorite(data)).then((data) => dispatch(getUser(user.id)))
    // navigation.navigate('Favoritos1')
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={{ overflow: 'hidden', width: '100%', flex: 1 }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 15,
            paddingVertical: 15,
            paddingHorizontal: 20
          }}
        >
          <Text style={[styles.ltimasConsultas, styles.ciclismoTypo]}>
            {t('ultimasconsultas')}
          </Text>
          <Pressable></Pressable>
        </View>
        <View style={{ paddingBottom: 15, width: '100%' }}>
          <View style={styles.frameGroup}>
            <View style={[styles.path3391Parent, styles.groupParentFlexBox1]}>
              <Pressable onPress={() => setshowSwitch(!showSwitch)}>
                <Image
                  style={[
                    styles.path3391Icon,

                    !showSwitch && styles.path3391IconRotate
                  ]}
                  contentFit="fill"
                  source={require('../assets/path-3391.png')}
                />
              </Pressable>
              <Text
                onPress={() => setshowSwitch(!showSwitch)}
                style={[styles.ltimas24Horas, styles.ciclismoTypo]}
              >
                {switchStates[0]
                  ? t('ultimas')
                  : switchStates[1]
                  ? t('ultimassemana')
                  : t('ultimomes')}
              </Text>
            </View>
            {showSwitch && (
              <View style={styles.switches}>
                <View
                  style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
                >
                  <Text
                    style={{
                      fontFamily: FontFamily.inputPlaceholder,
                      fontWeight: switchStates[0] ? '700' : '500',
                      lineHeight: 19,
                      letterSpacing: 0,
                      fontSize: FontSize.inputPlaceholder_size,
                      textAlign: 'left',
                      color: Color.sportsVioleta
                    }}
                  >
                    {t('ultimas')}
                  </Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#F25910' }}
                    thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(0)}
                    value={switchStates[0]}
                  />
                </View>
                <View
                  style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
                >
                  <Text
                    style={{
                      fontFamily: FontFamily.inputPlaceholder,
                      fontWeight: switchStates[1] ? '700' : '500',
                      lineHeight: 19,
                      letterSpacing: 0,
                      fontSize: FontSize.inputPlaceholder_size,
                      textAlign: 'left',
                      color: Color.sportsVioleta
                    }}
                  >
                    {t('ultimassemana')}
                  </Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#F25910' }}
                    thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(1)}
                    value={switchStates[1]}
                  />
                </View>
                <View
                  style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
                >
                  <Text
                    style={{
                      fontFamily: FontFamily.inputPlaceholder,
                      fontWeight: switchStates[2] ? '700' : '500',
                      lineHeight: 19,
                      letterSpacing: 0,
                      fontSize: FontSize.inputPlaceholder_size,
                      textAlign: 'left',
                      color: Color.sportsVioleta
                    }}
                  >
                    {t('ultimomes')}
                  </Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#F25910' }}
                    thumbColor={switchStates[2] ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(2)}
                    value={switchStates[2]}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
        {loadingGet ? (
          <View style={{ flex: 1 }}>
            <ActivityIndicator
              style={{
                marginTop: Dimensions.get('screen').height * 0.2,
                backgroundColor: 'transparent'
              }}
              animating={true}
              size="large"
              color={Color.violeta2}
            />
          </View>
        ) : (
          <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            <View style={styles.frameParent}>
              {visitedEvents && visitedEvents?.length === 0 ? (
                <View style={styles.consultaContainer}>
                  <Text style={styles.ultimasConsultas1}>
                    {t('aquipodras')}
                  </Text>
                </View>
              ) : (
                visitedEvents &&
                Array.isArray(visitedEvents) &&
                visitedEvents?.map((event, i) => (
                  <Pressable
                    onPress={() => {
                      console.log('here')
                      // dispatch(
                      //   visitEvent({
                      //     eventId: event.event.id,
                      //     userId: user.id
                      //   })
                      // )
                      dispatch(getEventByIdRedux(event.event.id))
                      navigation.navigate('PruebasEncontradasDetalle')
                    }}
                    key={i}
                    style={[styles.image84Parent, styles.parentBorder]}
                  >
                    <TouchableOpacity
                      style={{ position: 'absolute', top: 7, right: 13 }}
                      onPress={() => {
                        toggleFavorite(event.event.id)
                      }}
                    >
                      <MaterialCommunityIcons
                        name={
                          user.eventFavorites?.includes(event.event.id)
                            ? 'cards-heart'
                            : 'cards-heart-outline'
                        }
                        color="#F25910"
                        size={22}
                      />
                    </TouchableOpacity>

                    {event?.event?.image && event?.event?.image !== '' ? (
                      <Image
                        style={styles.image84Icon}
                        source={{ uri: event.event.image }}
                      />
                    ) : (
                      <Image
                        style={styles.image84Icon}
                        source={require('../assets/spotsportadaptative.png')}
                      />
                    )}
                    <View
                      style={[styles.frameContainer, styles.frameSpaceBlock]}
                    >
                      <View style={styles.ciclismoParent}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="trail"
                          style={{
                            fontFamily: FontFamily.inputPlaceholder,
                            fontWeight: '700',
                            textAlign: 'left',
                            fontSize: 14,
                            color: Color.sportsNaranja,
                            maxWidth: '85%'
                          }}
                        >
                          {event.event.title}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%'
                        }}
                      >
                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            {t('modalidad')}
                          </Text>
                          <Text
                            style={{
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            {event.event.modality}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            {t('localizacion')}:
                          </Text>
                          <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={{
                              maxWidth: '80%',
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            sotillo sotano sotano sortija avaricioso
                          </Text>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{
                              fontWeight: 400,
                              fontSize: 12,
                              color: Color.sportsVioleta
                            }}
                          >
                            {t('fechaprueba')}
                          </Text>
                          <Text
                            style={{
                              fontWeight: 300,
                              fontSize: 12,
                              color: Color.sportsVioleta
                            }}
                          >
                            {`${event.event.dateStart.slice(8,10)}-${event.event.dateStart.slice(5,7)}-${event.event.dateStart.slice(0,4)}`}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{ color: Color.sportsVioleta, fontSize: 12 }}
                          >
                            {t('fechalimite')}
                          </Text>
                          <Text
                            style={{
                              fontWeight: 300,
                              fontSize: 12,
                              color: Color.sportsVioleta
                            }}
                          >
                            {`${event.event.dateInscription.slice(8,10)}-${event.event.dateInscription.slice(5,7)}-${event.event.dateInscription.slice(0,4)}`}

                            {/* {event.event.dateInscription} */}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          ...styles.imGoingToContainer1,
                          gap: 3,
                          flexDirection: 'row'
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: 600,
                            color: Color.sportsVioleta,
                            fontSize: 12
                          }}
                        >
                          {t('precioinscripcion')}
                        </Text>
                        <Text
                          style={{
                            color: Color.sportsNaranja,
                            fontWeight: 500,
                            fontSize: 12
                          }}
                        >
                          {event.event.price + '€'}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                ))
              )}
            </View>
          </ScrollView>
        )}
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  ciclismoTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left'
  },
  switches: {
    width: '100%',
    paddingBottom: 5,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupParentFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  groupParentFlexBox1: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  parentBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    borderRadius: Border.br_3xs
  },
  ltimaSemanaTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    flex: 1
  },
  textTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100'
  },
  ltimasConsultas: {
    fontSize: 24,
    width: '60%',
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  path3391Icon: {
    width: 12,
    height: 8,
    padding: 1
  },
  path3391IconRotate: {
    transform: [{ rotate: '180deg' }]
  },
  ltimas24Horas: {
    fontSize: FontSize.size_sm,
    marginLeft: 10,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  path3391Parent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl
  },
  ltimaSemana: {
    width: 120
  },
  ltimaSemanaParent: {
    width: 258,
    height: 25,
    marginTop: 10
  },
  frameGroup: {
    marginTop: 25
  },
  image84Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 113,
    height: '100%'
  },
  ciclismo: {
    fontSize: 14,
    color: Color.sportsNaranja,
    textAlign: 'left'
  },
  ciclismoParent: {
    flexDirection: 'row',
    marginBottom: 5
  },
  modalidadMontaaLocalizaci: {
    fontFamily: FontFamily.inputPlaceholder
  },
  imGoingToContainer: {
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  precioDeInscripcin: {
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  text: {
    color: Color.sportsNaranja
  },
  imGoingToContainer1: {
    fontSize: FontSize.size_2xs,
    marginTop: 5,
    textAlign: 'left'
  },
  frameContainer: {
    justifyContent: 'center'
  },
  image84Parent: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  frameParent: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ultimasConsultas: {
    overflow: 'hidden',
    width: '100%',
    flex: 1
  },
  consultaContainer: {
    padding: 20
  },
  ultimasConsultas1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  }
})

export default UltimasConsultas
