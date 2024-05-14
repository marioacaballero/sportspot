import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'
import PopupPremium from '../components/PopupPremium'
import InicioNotificaciones from './InicioNotificaciones'
import InicioBUSCADOR from './InicioBUSCADOR'
import InicioOrganizador from './Organizador/InicioOrganizador'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllEvents,
  getSuscribedEvents,
  visitEvent
} from '../redux/actions/events'
import {
  getEventByIdRedux,
  setShowGuestModal
} from '../redux/slices/events.slices'
import { ActivityIndicator } from 'react-native-paper'
import DatosDeportista from '../components/DatosDeportista'
// import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getOneCustomer } from '../redux/actions/stripe'
import { LinearGradient } from 'expo-linear-gradient'
import GuestUserModal from '../components/utils/GuestUserModal'

const InicioDeportista = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { events, loadingGet, showGuestModal } = useSelector(
    (state) => state.events
  )
  const { user } = useSelector((state) => state.users)
  const [modalPremium, setModalPremium] = useState(false)
  const [modalNotifications, setModalNotifications] = useState(false)
  const [modalOrganizador, setModalOrganizador] = useState(false)
  const [mostrarInicioBuscador, setMostrarInicioBuscador] = useState(false)
  const [modalSport, setModalSport] = useState(false)
  const [buscador, setBuscador] = useState(false)
  const [premiosSoon, setPremiosSoon] = useState(false)

  const [modalState, setModalState] = useState()

  const getModalState = async () => {
    const data = await AsyncStorage.getItem('modalSport')
    setModalState(data)
  }

  useEffect(() => {
    if (!user.preferences?.location) {
      getModalState()
      setModalSport(true)
    }
    dispatch(getAllEvents())
    dispatch(getSuscribedEvents(user.id))
    dispatch(getOneCustomer(user.email)).then((e) => console.log(e, 'eeeeeee'))
  }, [])

  const handleBuscarPress = () => {
    setMostrarInicioBuscador(true)
  }

  const toggleModalPremium = () => {
    setModalPremium(!modalPremium)
  }

  const toggleModalNotifications = () => {
    setModalNotifications(!modalNotifications)
  }

  const toggleModalOrganizador = () => {
    setModalOrganizador(!modalOrganizador)
  }

  const eventos = events.map((event) => {
    return event
  })

  // Filtro de eventos de los ultimos 7 dias
  function functionDate(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferenciaMs = Math.abs(fecha1 - fecha2)
    return Math.floor(diferenciaMs / unDia)
  }

  const fechaActual = new Date()

  const latestEventsAdded = eventos.filter((evento) => {
    const fechaEvento = new Date(evento.createdAt)
    const diferenciaDias = functionDate(fechaActual, fechaEvento)

    return diferenciaDias < 7
  })
  // Filtro para las ultimas 48hs de inscripcion
  const lastHours = eventos.filter((evento) => {
    const fechaEvento = new Date(evento.dateInscription)

    const diferenciaDias = functionDate(
      fechaActual,
      fechaEvento <= fechaActual ? fechaEvento : ''
    )

    return diferenciaDias < 7
  })

  const eventsExpired = eventos.filter((evento) => {
    const fechaEvento = new Date(evento.dateStart) // 2024/04/24

    const diferenciaDias = functionDate(
      fechaActual,
      fechaEvento <= fechaActual ? fechaEvento : ''
    )
    return diferenciaDias >= 1
  })
  const isGuest = user?.email === 'guestUser@gmail.com'
  console.log('user: ', user)

  if (loadingGet) {
    return (
      <View>
        <Image
          style={styles.background}
          source={require('../assets/BGInicio.png')}
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
      <LinearGradient
        colors={['#fff', '#f9f9f9']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {modalState !== 'alreadyShowed' && (
            <DatosDeportista
              modalSport={modalSport}
              setModalSport={setModalSport}
            />
          )}
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={[styles.helloAshfakParent, styles.frameGroupFlexBox]}>
              <Image
                style={styles.imageTop}
                source={require('../assets/spotsport.png')}
              />
              <View style={styles.groupParent}>
                <Pressable
                  style={styles.wrapper}
                  onPress={() => {
                    if (isGuest) {
                      dispatch(setShowGuestModal(true))
                      return
                    }
                    toggleModalPremium()
                  }}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require('../assets/group-11712766982.png')}
                  />
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalPremium}
                  >
                    <TouchableWithoutFeedback onPress={toggleModalPremium}>
                      <View style={styles.modalOverlay}>
                        <View>
                          <PopupPremium setModalVisible={setModalPremium} />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </Pressable>

                <Pressable
                  style={styles.materialSymbolsnotifications}
                  onPress={() => {
                    if (isGuest) {
                      dispatch(setShowGuestModal(true))
                      return
                    }
                    toggleModalNotifications()
                  }}
                >
                  <Image
                    style={[styles.icon1, styles.iconLayout]}
                    contentFit="cover"
                    source={require('../assets/materialsymbolsnotifications.png')}
                  />
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalNotifications}
                  >
                    <TouchableWithoutFeedback
                      onPress={toggleModalNotifications}
                    >
                      <View style={styles.modalOverlay}>
                        <View>
                          <InicioNotificaciones />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showGuestModal}
                  >
                    <TouchableWithoutFeedback
                      onPress={() => {
                        dispatch(setShowGuestModal(false))
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <GuestUserModal
                          onClose={() => dispatch(setShowGuestModal(false))}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </Pressable>
              </View>
            </View>

            {buscador && (
              <Pressable
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={handleBuscarPress}
              >
                <View style={styles.buscarWrapper}>
                  <Image
                    style={styles.icbaselineSearchIcon}
                    contentFit="cover"
                    source={require('../assets/icbaselinesearch.png')}
                  />
                  <Text style={styles.buscar}>Buscar</Text>
                </View>
              </Pressable>
            )}

            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <Pressable
                style={styles.helloAshfakGroup}
                onPress={() => toggleModalOrganizador()}
              >
                <Text style={styles.helloTypo}>Deportista</Text>
                <Text
                  style={{
                    fontSize: 50,
                    color: 'white',
                    backgroundColor: !modalOrganizador
                      ? Color.sportsNaranja
                      : Color.naranja3,
                    width: 6,
                    height: 6,
                    textAlign: 'center',
                    lineHeight: 100,
                    borderRadius: 50,
                    overflow: 'hidden'
                  }}
                ></Text>
              </Pressable>
              <Pressable
                style={styles.helloAshfakGroup}
                onPress={() => toggleModalOrganizador()}
              >
                <Text style={[styles.helloAshfak2, styles.helloTypo]}>
                  Organizador
                </Text>
                <Text
                  style={{
                    fontSize: 50,
                    color: 'white',
                    backgroundColor: modalOrganizador
                      ? Color.sportsNaranja
                      : Color.naranja3,
                    width: 6,
                    height: 6,
                    textAlign: 'center',
                    lineHeight: 100,
                    borderRadius: 50,
                    overflow: 'hidden'
                  }}
                ></Text>
              </Pressable>
            </View>
            {!buscador && !modalOrganizador && (
              <InicioBUSCADOR
                setMostrarInicioBuscador={setMostrarInicioBuscador}
              />
            )}
            {!buscador && !modalOrganizador && (
              <View
                style={{
                  flexDirection: 'row',
                  width: '96%',
                  alignSelf: 'center',
                  justifyContent: 'flex-start',
                  height: 80,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  borderWidth: 0,
                  borderRadius: 10,
                  shadowOpacity: 1,
                  elevation: 4,
                  shadowRadius: 4,
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowColor: 'black'
                }}
              >
                <View style={{ alignItems: 'center', width: '45%' }}>
                  <Text
                    style={{ fontWeight: 'bold', color: Color.sportsVioleta }}
                  >
                    Mis puntos
                  </Text>
                  <Text style={{ fontSize: 28, color: Color.sportsNaranja }}>
                    50
                  </Text>
                </View>
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderColor: Color.sportsNaranja,
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: '55%'
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setPremiosSoon(!premiosSoon)}
                    style={{
                      alignSelf: 'center',
                      borderRadius: 50,
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: premiosSoon
                        ? 'gray'
                        : Color.sportsNaranja,
                      paddingHorizontal: 18,
                      paddingVertical: 9
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>
                      {!premiosSoon ? 'Acceder a premios' : 'Soon'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {modalOrganizador ? (
              <InicioOrganizador />
            ) : (
              <View style={styles.frameContainer}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.helloTypoScroll}>
                    Últimas horas de inscripción
                  </Text>
                  <ScrollView
                    style={{ alignSelf: 'flex-start' }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {lastHours?.map((event, i) => (
                      <Pressable
                        key={i}
                        style={
                          i === 0
                            ? styles.image94ParentShadowBox1
                            : styles.image94ParentShadowBox
                        }
                        onPress={() => {
                          dispatch(
                            visitEvent({ eventId: event.id, userId: user.id })
                          )
                          dispatch(getEventByIdRedux(event.id))
                          navigation.navigate('PruebasEncontradasDetalle')
                        }}
                      >
                        <Image
                          style={styles.image94Icon}
                          contentFit="cover"
                          source={{ uri: event.image }}
                        />
                        <View
                          style={[
                            styles.imGoingToShakeYParent,
                            styles.frameGroupSpaceBlock
                          ]}
                        >
                          <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            {event?.title}
                          </Text>
                          <View style={styles.minParent}>
                            <Text style={[styles.min, styles.minClr]}>
                              {event?.description}
                            </Text>
                            {/* <Text style={[styles.min1, styles.minTypo1]}>
                           {event?.header}
                         </Text> */}
                          </View>
                        </View>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.helloTypoScroll}>
                    Últimas pruebas añadidas
                  </Text>

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {latestEventsAdded?.map((event, i) => (
                      <Pressable
                        key={i}
                        style={
                          i === 0
                            ? styles.image94ParentShadowBox1
                            : styles.image94ParentShadowBox
                        }
                        onPress={() => {
                          dispatch(
                            visitEvent({ eventId: event.id, userId: user.id })
                          )
                          dispatch(getEventByIdRedux(event.id))
                          navigation.navigate('PruebasEncontradasDetalle')
                        }}
                      >
                        <Image
                          style={styles.image94Icon}
                          contentFit="cover"
                          source={{ uri: event.image }}
                        />
                        <View
                          style={[
                            styles.imGoingToShakeYParent,
                            styles.frameGroupSpaceBlock
                          ]}
                        >
                          <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            {event?.title}
                          </Text>
                          <View style={styles.minParent}>
                            <Text style={[styles.min, styles.minClr]}>
                              {event?.description}
                            </Text>
                            {/* <Text style={[styles.min1, styles.minTypo1]}>
                           {event?.header}
                         </Text> */}
                          </View>
                        </View>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.helloTypoScroll}>
                    Resultados de las útlimas pruebas
                  </Text>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {eventsExpired?.map((event, i) => (
                      <Pressable
                        key={i}
                        style={
                          i === 0
                            ? styles.image94ParentShadowBox1
                            : styles.image94ParentShadowBox
                        }
                        onPress={() => {
                          dispatch(
                            visitEvent({ eventId: event.id, userId: user.id })
                          )
                          dispatch(getEventByIdRedux(event.id))
                          navigation.navigate('PruebasEncontradasDetalle')
                        }}
                      >
                        <Image
                          style={styles.image94Icon}
                          contentFit="cover"
                          source={{ uri: event.image }}
                        />
                        <View
                          style={[
                            styles.imGoingToShakeYParent,
                            styles.frameGroupSpaceBlock
                          ]}
                        >
                          <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            {event?.title}
                          </Text>
                          <View style={styles.minParent}>
                            <Text style={[styles.min, styles.minClr]}>
                              {event?.description}
                            </Text>
                            {/* <Text style={[styles.min1, styles.minTypo1]}>
                           {event?.header}
                         </Text> */}
                          </View>
                        </View>
                      </Pressable>
                    ))}
                  </ScrollView>
                  {/* <ScrollView
                   // style={{ marginBottom: 10 }}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                 >
                   <View style={styles.image94ParentShadowBox1}>
                     <Image
                       style={[styles.image94Icon, styles.image94IconLayout]}
                       contentFit="cover"
                       source={require('../assets/image-943.png')}
                     />
                     <View
                       style={[
                         styles.imGoingToShakeYParent,
                         styles.frameGroupSpaceBlock
                       ]}
                     >
                       <Text style={[styles.imGoingTo2, styles.minTypo]}>
                         Lorem ipsum
                       </Text>
                       <View style={styles.minParent}>
                         <Text style={[styles.min10, styles.minTypo]}>
                           Lorem ipsum dolor sit amet.{' '}
                         </Text>
                         <Text style={[styles.min10, styles.minTypo]}>
                           Lorem ipsum dolor sit amet.{' '}
                         </Text>
                       </View>
                     </View>
                   </View>
                   <View style={styles.image94ParentShadowBox}>
                     <Image
                       style={[styles.image94Icon, styles.image94IconLayout]}
                       contentFit="cover"
                       source={require('../assets/image-944.png')}
                     />
                     <View
                       style={[
                         styles.imGoingToShakeYParent,
                         styles.frameGroupSpaceBlock
                       ]}
                     >
                       <Text style={[styles.imGoingTo2, styles.minTypo]}>
                         Lorem ipsum
                       </Text>
                       <View style={styles.minParent}>
                         <Text style={[styles.min10, styles.minTypo]}>
                           Lorem ipsum dolor sit amet.{' '}
                         </Text>
                         <Text style={[styles.min10, styles.minTypo]}>
                           Lorem ipsum dolor sit amet.{' '}
                         </Text>
                       </View>
                     </View>
                   </View>
                   <View
                     style={[styles.image94ParentShadowBox, styles.marginCard]}
                   >
                     <Image
                       style={styles.image94Icon}
                       contentFit="cover"
                       source={require('../assets/image-945.png')}
                     />
                     <View
                       style={[
                         styles.imGoingToShakeYParent,
                         styles.frameGroupSpaceBlock
                       ]}
                     >
                       <Text style={[styles.imGoingTo2, styles.minTypo]}>
                         Lorem ipsum
                       </Text>
                       <View style={styles.minParent}>
                         <Text style={[styles.min10, styles.minTypo]}>
                           Lorem ipsum dolor sit amet
                         </Text>
                         <Text style={[styles.min10, styles.minTypo]}>
                           Lorem ipsum dolor sit amet.{' '}
                         </Text>
                       </View>
                     </View>
                   </View>
                 </ScrollView> */}
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  frameGroupFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  imGoingToTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frameGroupSpaceBlock: {
    paddingVertical: 0,
    alignSelf: 'stretch'
  },
  helloTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    marginTop: 10
  },
  helloTypoScroll: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    marginTop: 10,
    marginBottom: 20
  },
  imageTop: {
    width: 100,
    height: 25,
    top: 3
  },
  goingTypo: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja
  },
  minClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs
  },
  minTypo1: {
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  minTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta
  },
  wrapper: {
    height: 22,
    width: 29
  },
  icon1: {
    overflow: 'hidden'
  },
  materialSymbolsnotifications: {
    width: 27,
    marginLeft: 7,
    height: 24
  },
  groupParent: {
    width: 63,
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfakParent: {
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  buscar: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
  },
  buscarWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    width: '100%',
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    marginTop: 19,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfakGroup: {
    alignItems: 'center'
  },
  helloAshfak2: {
    color: Color.violeta3
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    marginTop: 19,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  image94Icon: {
    borderWidth: 1,
    height: 95,
    width: '100%'
  },
  imGoingTo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  min: {
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  min1: {
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  minParent: {
    marginTop: 2,
    alignSelf: 'stretch'
  },
  imGoingToShakeYParent: {
    paddingHorizontal: Padding.p_8xs,
    marginTop: 5,
    height: 44
  },
  marginCard: {
    marginBottom: 10
  },
  image94ParentShadowBox1: {
    height: 162,
    width: 187,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'black',
    alignItems: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: Border.br_sm,
    marginBottom: 20,
    marginLeft: 10
  },
  image94ParentShadowBox: {
    height: 162,
    width: 187,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'black',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: Border.br_sm,
    overflow: 'hidden',
    marginLeft: 10,
    marginBottom: 20
  },
  imGoingTo2: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja
  },
  min10: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs
  },
  frameContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 19,
    justifyContent: 'center'
  },
  frameParent: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 15,
    top: 0,
    height: '100%'
  },
  icbaselineSearchIcon: {
    height: 29,
    width: 29
  },
  inicioDeportista: {
    flex: 1,
    backgroundColor: Color.blanco,
    width: '100%'
  },
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default InicioDeportista
