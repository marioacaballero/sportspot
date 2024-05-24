import React, { useState, useCallback, useEffect } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  // Image,
  ScrollView,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import EscribirResea from '../components/EscribirResea'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import BackArrowSVG from '../components/SVG/BackArrowSVG'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { favorite } from '../redux/actions/users'
import { setSelectedIcon } from '../redux/slices/users.slices'
import { getAllEvents } from '../redux/actions/events'
import { visitEvent } from '../redux/actions/events'
import { getEventByIdRedux } from '../redux/slices/events.slices'
import { useTranslation } from "react-i18next";

const HistorialDePruebas = () => {
  const [isFavorite, setIsFavorite] = useState({})
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { events, suscribedEvents } = useSelector((state) => state.events)
  const { user, eventFavorites } = useSelector((state) => state.users)
  const { t, i18n } = useTranslation();

  const initializeFavorites = () => {
    const init = {}
    events?.forEach((visited, index) => {
      const isEventFavorite = eventFavorites?.some((e) => {
        return e?.id === visited.id
      })
      init[index] = isEventFavorite
    })
    return init
  }

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true)
  }, [])

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false)
  }, [])

  useEffect(() => {
    if (events?.length > 0) setIsFavorite(initializeFavorites())
  }, [events])

  const toggleFavorite = (pruebaId, i) => {
    const data = {
      id: user.id,
      eventId: pruebaId
    }

    const newObj = {
      ...isFavorite,
      [i]: !isFavorite[i]
    }
    setIsFavorite(newObj)
    dispatch(favorite(data))
    // navigation.navigate('Favoritos1')
  }

  function hasDatePassed(dateString) {
    const inputDate = new Date(dateString)

    const currentDate = new Date()

    inputDate.setHours(0, 0, 0, 0)
    currentDate.setHours(0, 0, 0, 0)

    return inputDate < currentDate
  }

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch(setSelectedIcon('HistorialDePruebas'))
    }
  }, [isFocused])

    useEffect(()=>{
      dispatch(getAllEvents())
    },[])
  // console.log('events.title', events[1].suscribers)
  // console.log('events.title', events[1].dateInscription)
  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 15,paddingTop:30 }}>
        <View style={{ paddingHorizontal: Padding.p_xl }}>
          <View style={styles.containerHistorial}>
            <Text style={[styles.tuHistorialDe, styles.ciclismoTypo]}>
              TU HISTORIAL DE PRUEBAS
            </Text>
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrowSVG />
            </TouchableOpacity> */}
          </View>
          <View style={[styles.frameWrapper, styles.frameSpaceBlock1]}>
            <View style={styles.frameContainer}>
              <View style={styles.groupParentFlexBox}>
                <Text style={[styles.todasLasPruebas, styles.ciclismoTypo]}>
                  Todas las pruebas
                </Text>
              </View>
            </View>
          </View>
          {events.filter((ev) =>
            ev?.suscribers?.some((userEvent) => userEvent.id === user.id)
          ).length === 0 && (
            <Text style={styles.text2}>
              ¡Aquí podrás ver los eventos en los que has participado y dejarles
              una reseña sobre tu experiencia!
            </Text>
          )}

          {events.filter((ev) =>
            ev?.suscribers?.some((userEvent) => userEvent.id === user.id)
          ).length > 0 &&
            events
              ?.filter((ev) =>
                ev?.suscribers?.some((userEvent) => userEvent.id === user.id)
              )
              .map((evnt, index) => (
                <Pressable
                  onPress={() => {
                    dispatch(
                      visitEvent({
                        eventId: evnt.id,
                        userId: user.id
                      })
                    )
                    dispatch(getEventByIdRedux(evnt.id))
                    navigation.navigate('PruebasEncontradasDetalle')
                  }}
                  key={index}
                  style={{ width: '100%', gap: 5 }}
                >
                  <View
                    style={{
                      marginTop: 15,
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: '100%',
                      borderWidth: 1,
                      borderColor: Color.colorGainsboro_100,
                      borderStyle: 'solid',
                      borderRadius: Border.br_3xs
                    }}
                  >
                    <TouchableOpacity
                      style={{ position: 'absolute', top: 7, right: 13 }}
                      onPress={() => {
                        toggleFavorite(evnt.id, index)
                      }}
                    >
                      <MaterialCommunityIcons
                        name={
                          isFavorite[index]
                            ? 'cards-heart'
                            : 'cards-heart-outline'
                        }
                        color="#F25910"
                        size={22}
                      />
                    </TouchableOpacity>
                    <Image
                      style={{
                        borderTopLeftRadius: Border.br_3xs,
                        borderBottomLeftRadius: Border.br_3xs,
                        width: 113,
                        height: 113
                      }}
                      source={{ uri: evnt.image }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        paddingVertical: Padding.p_8xs,
                        paddingHorizontal: Padding.p_3xs,
                        flex: 1
                      }}
                    >
                      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: Color.sportsNaranja,
                            textAlign: 'left',
                            fontFamily: FontFamily.inputPlaceholder,
                            fontWeight: '700'
                          }}
                        >
                          {evnt.title}
                        </Text>
                      </View>
                      <View style={{ width: '100%' }}>
                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            Modalidad:
                          </Text>
                          <Text
                            style={{
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            {evnt.modality}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{
                              fontWeight: '400',
                              fontSize: 12,
                              color: Color.sportsVioleta
                            }}
                          >
                            Fecha de la prueba:
                          </Text>
                          <Text
                            style={{
                              fontWeight: '300',
                              color: Color.sportsVioleta
                            }}
                          >
                            {evnt.dateStart}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 3 }}>
                          <Text
                            style={{
                              color: Color.sportsVioleta,
                              fontSize: 12
                            }}
                          >
                            Fecha límite de insc.:
                          </Text>
                          <Text
                            style={{
                              fontWeight: '300',
                              fontSize: 12,
                              color: Color.sportsVioleta
                            }}
                          >
                            {evnt?.dateInscription}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          gap: 3,
                          flexDirection: 'row',
                          marginTop: 5,
                          textAlign: 'left',
                          fontSize: FontSize.size_2xs
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: '600',
                            color: Color.sportsVioleta,
                            fontSize: 12
                          }}
                        >
                          PRECIO DE INSCRIPCIÓN:
                        </Text>
                        <Text
                          style={{
                            color: Color.sportsNaranja,
                            fontWeight: '500',
                            fontSize: 12
                          }}
                        >
                          {evnt.price + '€'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {hasDatePassed(evnt.dateInscription) && (
                    <Pressable
                      style={[
                        styles.clarityeditSolidParent,
                        styles.parentFlexBox
                      ]}
                      onPress={openFrameContainer7}
                    >
                      <View
                        style={{
                          gap: 12,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Image
                          style={[
                            styles.clarityeditSolidIcon,
                            styles.iconLayout
                          ]}
                          contentFit="cover"
                          source={require('../assets/clarityeditsolid1.png')}
                        />
                        <Text style={styles.helloAshfak}>
                          Escribe una reseña
                        </Text>
                      </View>
                    </Pressable>
                  )}
                </Pressable>
              ))}
          {/* <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/image-84.png')}
              />
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.ciclismoParent}>
                  <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={[styles.heartIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require('../assets/heart.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Montaña
Localización: Hornachos, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`01 feb 2022
`}</Text>
                  <Text style={styles.modalidadMontaaLocalizaci}>
                    {'Fecha límite de inscripción: '}
                  </Text>
                  <Text style={styles.textTypo}>22 ene 2022</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>22€</Text>
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.clarityeditSolidParent, styles.parentFlexBox]}
              onPress={openFrameContainer7}
            >
              <Image
                style={[styles.clarityeditSolidIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/clarityeditsolid1.png')}
              />
              <Text style={styles.helloAshfak}>Escribe una reseña</Text>
            </Pressable>
          </View> */}
          {/* <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/image-94.png')}
              />
              <View style={styles.frameSpaceBlock}>
                <View style={styles.groupParentFlexBox}>
                  <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={styles.heartIcon1}
                    contentFit="cover"
                    source={require('../assets/heart1.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`18 ene 2023
`}</Text>
                  <Text style={styles.modalidadMontaaLocalizaci}>
                    {'Fecha límite de inscripción: '}
                  </Text>
                  <Text style={styles.textTypo}>10 ene 2023</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>35€</Text>
                </Text>
              </View>
            </View>
            <Pressable
              onPress={openFrameContainer7}
              style={[styles.clarityeditSolidParent, styles.parentFlexBox]}
            >
              <Image
                style={[styles.clarityeditSolidIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/clarityeditsolid1.png')}
              />
              <Text style={styles.helloAshfak}>Escribe una reseña</Text>
            </Pressable>
          </View> */}
          {/* <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem1.png')}
              />
              <View style={styles.frameSpaceBlock}>
                <View style={styles.groupParentFlexBox}>
                  <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={styles.heartIcon1}
                    contentFit="cover"
                    source={require('../assets/heart1.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`18 ene 2024
`}</Text>
                  <Text style={styles.modalidadMontaaLocalizaci}>
                    {'Fecha límite de inscripción: '}
                  </Text>
                  <Text style={styles.textTypo}>10 ene 2024</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>35€</Text>
                </Text>
              </View>
            </View>
          </View> */}
          {/* <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem1.png')}
              />
              <View style={styles.frameSpaceBlock}>
                <View style={styles.groupParentFlexBox}>
                  <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={styles.heartIcon1}
                    contentFit="cover"
                    source={require('../assets/heart1.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`18 ene 2024
`}</Text>
                  <Text style={styles.modalidadMontaaLocalizaci}>
                    {'Fecha límite de inscripción: '}
                  </Text>
                  <Text style={styles.textTypo}>10 ene 2024</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>35€</Text>
                </Text>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={frameContainer7Visible}>
        <TouchableWithoutFeedback onPress={closeFrameContainer7}>
          <View style={styles.frameContainer7Overlay}>
            <EscribirResea onClose={closeFrameContainer7} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {},
  ciclismoTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left',
    width: '100%'
  },
  frameSpaceBlock1: {
    marginTop: 25,
    alignItems: 'center'
  },
  parentFlexBox: {
    // width: 320,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    flex: 1
  },
  iconLayout: {
    height: 14,
    width: 14
  },
  textTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100'
  },
  menInferiorLayout: {
    width: 360
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  frameParentPosition1: {
    top: 0
  },
  tuHistorialDe: {
    fontSize: 24,
    width: 186,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  todasLasPruebas: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  groupParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameContainer: {
    justifyContent: 'center'
  },
  frameWrapper: {
    flexDirection: 'row'
  },
  containerHistorial: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 30
  },
  image84Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 110,
    height: 110
  },
  ciclismo: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja,
    textAlign: 'left'
  },
  heartIcon: {
    marginLeft: 119
  },
  ciclismoParent: {
    flexDirection: 'row'
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
    marginTop: 10,
    textAlign: 'left'
  },
  frameView: {
    justifyContent: 'center'
  },
  image84Parent: {
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1
  },
  frameContainer7Overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer7Bg: {},
  clarityeditSolidIcon: {
    overflow: 'hidden'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    justifyContent: 'center',
    marginBottom: 1,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'center'
  },
  clarityeditSolidParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    marginTop: 10,
    justifyContent: 'center'
  },
  frameGroup: {
    justifyContent: 'center'
  },
  heartIcon1: {
    width: 17,
    height: 17,
    marginLeft: 119
  },
  frameParent: {
    paddingTop: 18
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
    marginLeft: 47
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    width: 20,
    marginLeft: 47
  },
  frame: {
    width: 19,
    marginLeft: 47
  },
  groupParent: {
    top: 10,
    left: 0,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
  },
  historialDePruebas: {
    overflow: 'hidden',
    width: '100%'
  },
  text2: {
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_xl,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 90
  },
  switches: {
    width: '100%',
    padding: 15,
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 1,
    elevation: 4,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
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
  ltimasConsultas: {
    fontSize: FontSize.size_11xl,
    width: '60%',
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  path3391Icon: {
    width: 15,
    height: 10
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

export default HistorialDePruebas
