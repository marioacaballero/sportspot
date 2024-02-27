import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'
import PopupPremium from '../components/PopupPremium'
import InicioNotificaciones from './InicioNotificaciones'
import InicioBUSCADOR from './InicioBUSCADOR'
import InicioOrganizador from './InicioOrganizador'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents, getEventById } from '../redux/actions/events'
import { ActivityIndicator } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

const InicioDeportista = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.users)
  const { events, loadingGet } = useSelector((state) => state.events)

  const [modalPremium, setModalPremium] = useState(false)
  const [modalNotifications, setModalNotifications] = useState(false)
  const [modalOrganizador, setModalOrganizador] = useState(false)

  const [mostrarInicioBuscador, setMostrarInicioBuscador] = useState(false)

  useEffect(() => {
    dispatch(getAllEvents())
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
    // dispatch(getAllEvents())
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
    const fechaEvento = new Date(evento.event_createdAt)
    const diferenciaDias = functionDate(fechaActual, fechaEvento)

    return diferenciaDias < 7
  })

  // Filtro para las ultimas 48hs de inscripcion
  const lastHours = eventos.filter((evento) => {
    const fechaEvento = new Date(evento.event_date_inscription)

    const diferenciaDias = functionDate(
      fechaActual,
      fechaEvento <= fechaActual ? fechaEvento : ''
    )

    return diferenciaDias < 7
  })

  if (loadingGet) {
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
            // backdropFilter: 'blur(5px)'
          }}
          animating={true}
          size="large"
          color={Color.violeta2}
        />
      </LinearGradient>
    )
  } else {
    return (
      <ScrollView style={styles.inicioDeportista}>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={[styles.helloAshfakParent, styles.frameGroupFlexBox]}>
            {/* <Text style={[styles.helloAshfak, styles.imGoingToTypo]}>INICIO</Text> */}
            <Image
              style={styles.imageTop}
              source={require('../assets/spotsport.png')}
            />
            <View style={styles.groupParent}>
              <Pressable style={styles.wrapper} onPress={toggleModalPremium}>
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
                onPress={toggleModalNotifications}
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
                  <TouchableWithoutFeedback onPress={toggleModalNotifications}>
                    <View style={styles.modalOverlay}>
                      <View>
                        <InicioNotificaciones />
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
              </Pressable>
            </View>
          </View>

          {mostrarInicioBuscador ? (
            <InicioBUSCADOR
              setMostrarInicioBuscador={setMostrarInicioBuscador}
            />
          ) : (
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
              <Text style={[styles.helloAshfak1, styles.helloTypo]}>
                Deportista
              </Text>
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
              onPress={
                () => toggleModalOrganizador()
                // navigation.navigate('Organizador')
              }
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
          {modalOrganizador ? (
            <InicioOrganizador />
          ) : (
            <View style={styles.frameContainer}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.helloTypoScroll}>
                  Últimas horas de inscripción
                </Text>
                <ScrollView
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
                        dispatch(getEventById(event.event_id))
                        navigation.navigate('PruebasEncontradasDetalle')
                      }}
                    >
                      <Image
                        style={[styles.image94Icon, styles.image94IconLayout]}
                        contentFit="cover"
                        source={{ uri: event.event_image }}
                      />
                      <View
                        style={[
                          styles.imGoingToShakeYParent,
                          styles.frameGroupSpaceBlock
                        ]}
                      >
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                          {event?.event_title}
                        </Text>
                        <View style={styles.minParent}>
                          <Text style={[styles.min, styles.minClr]}>
                            {event?.event_description}
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
                  // style={styles.frameParent1}
                  // style={{ marginBottom: 10 }}
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
                        dispatch(getEventById(event.event_id))
                        navigation.navigate('PruebasEncontradasDetalle')
                      }}
                    >
                      <Image
                        style={[styles.image94Icon, styles.image94IconLayout]}
                        contentFit="cover"
                        source={{ uri: event.event_image }}
                      />
                      <View
                        style={[
                          styles.imGoingToShakeYParent,
                          styles.frameGroupSpaceBlock
                        ]}
                      >
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                          {event?.event_title}
                        </Text>
                        <View style={styles.minParent}>
                          <Text style={[styles.min, styles.minClr]}>
                            {event?.event_description}
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
                </ScrollView>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  // image94IconLayout: {
  //   width: '100%',
  //   overflow: 'hidden'
  // },
  frameParentFlexBox: {
    // paddingHorizontal: Padding.p_xl,
    // justifyContent: 'center',
    // alignItems: 'center',
    // // width: 360,
    // width: '100%',
    // left: 0,
    // position: 'absolute'
  },
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
  frameLayout: {
    height: 20,
    marginLeft: 47
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
    paddingLeft: Padding.p_31xl,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    marginTop: 19,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },

  frameChild: {
    width: 6,
    height: 6,
    marginTop: 5
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
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    maxWidth: '100%',
    height: 95,
    alignSelf: 'stretch',
    overflow: 'hidden'
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
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowColor: 'black',
    // borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: Border.br_sm,
    marginBottom: 20
  },
  image94ParentShadowBox: {
    height: 162,
    width: 187,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowColor: 'black',
    // borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: Border.br_sm,
    marginLeft: 10,
    marginBottom: 20
  },
  imGoingTo2: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja
  },
  min4: {
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  frameParent1: {
    width: 328,
    marginTop: 25,
    flexDirection: 'row'
  },
  min10: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs
  },
  helloAshfakParent1: {
    marginTop: 19
  },
  frameContainer: {
    // height: 549,
    display: 'flex',
    width: '100%',

    marginTop: 19,
    justifyContent: 'center'
  },
  frameParent: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    // paddingBottom: Padding.p_6xl,
    top: 0,
    height: '100%'
  },
  container: {
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
  frame: {
    width: 20,
    marginLeft: 47
  },
  groupPressable: {
    width: 19,
    marginLeft: 47
  },
  groupContainer: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row'
  },
  icbaselineSearchIcon: {
    // marginTop: -278,
    // marginLeft: -152,
    // top: '50%',
    // left: '50%',
    height: 29,
    width: 29
    // position: 'absolute',
    // overflow: 'hidden'
  },
  inicioDeportista: {
    flex: 1,
    backgroundColor: Color.blanco,
    width: '100%',
    zIndex: 0
  },
  modalOverlay: {
    // flex: 1,
    // top: -100,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default InicioDeportista
