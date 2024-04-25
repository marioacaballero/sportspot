import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Switch,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Border, FontSize, Padding } from '../GlobalStyles'
import BackArrowSVG from '../components/SVG/BackArrowSVG'
import { getAllVisitedEvents } from '../redux/actions/events'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'

const UltimasConsultas = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { visitedEvents } = useSelector((state) => state.events)
  const [liked, setLiked] = useState([0])

  const [switchStates, setSwitchStates] = useState([false, false, false])
  const [showSwitch, setshowSwitch] = useState(false)

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
    newSwitchStates[index] = !newSwitchStates[index]
    setSwitchStates(newSwitchStates)
  }

  return (
    <View style={styles.ultimasConsultas}>
      <ScrollView>
        <View style={styles.frameParent}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={[styles.ltimasConsultas, styles.ciclismoTypo]}>
                ÚLTIMAS CONSULTAS
              </Text>
              <Pressable onPress={() => navigation.goBack()}>
                <BackArrowSVG />
              </Pressable>
            </View>
            <View style={styles.frameGroup}>
              <View style={[styles.path3391Parent, styles.groupParentFlexBox1]}>
                <Pressable onPress={() => setshowSwitch(!showSwitch)}>
                  <Image
                    style={[
                      styles.path3391Icon,

                      showSwitch && styles.path3391IconRotate
                    ]}
                    contentFit="cover"
                    source={require('../assets/path-3391.png')}
                  />
                </Pressable>
                <Text
                  onPress={() => setshowSwitch(!showSwitch)}
                  style={[styles.ltimas24Horas, styles.ciclismoTypo]}
                >
                  Últimas 24 horas
                </Text>
              </View>
              {showSwitch && (
                <View style={styles.switches}>
                  <View
                    style={[
                      styles.ltimaSemanaParent,
                      styles.groupParentFlexBox
                    ]}
                  >
                    <Text style={styles.ltimaSemanaTypo}>Últimas 24 horas</Text>
                    <Switch
                      trackColor={{ false: '#767577', true: '#F25910' }}
                      thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() => toggleSwitch(0)}
                      value={switchStates[0]}
                    />
                  </View>
                  <View
                    style={[
                      styles.ltimaSemanaParent,
                      styles.groupParentFlexBox
                    ]}
                  >
                    <Text style={[styles.ltimaSemana, styles.ltimaSemanaTypo]}>
                      Última semana
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
                    style={[
                      styles.ltimaSemanaParent,
                      styles.groupParentFlexBox
                    ]}
                  >
                    <Text style={[styles.ltimaSemana, styles.ltimaSemanaTypo]}>
                      Último mes
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
          {visitedEvents && visitedEvents?.length === 0 ? (
            <View style={styles.consultaContainer}>
              <Text style={styles.ultimasConsultas1}>
                ¡Aqui podras volver a visitar los eventos vistos recientemente!
              </Text>
            </View>
          ) : (
            visitedEvents &&
            Array.isArray(visitedEvents) &&
            visitedEvents?.map((event, i) => (
              <View key={i} style={[styles.image84Parent, styles.parentBorder]}>
                <TouchableOpacity
                  style={{ position: 'absolute', top: 7, right: 13 }}
                  onPress={() => {
                    const likedCards = liked.includes(i)
                      ? [...liked].filter((like) => like !== i)
                      : [...liked, i]
                    console.log('likedCards:', likedCards)
                    setLiked(likedCards)
                  }}
                >
                  <MaterialCommunityIcons
                    name={
                      liked.includes(i) ? 'cards-heart' : 'cards-heart-outline'
                    }
                    color="#F25910"
                    size={22}
                  />
                </TouchableOpacity>
                <Image
                  style={styles.image84Icon}
                  source={{ uri: event.event.image }}
                />
                <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
                  <View style={styles.ciclismoParent}>
                    <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
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
                        Modalidad:
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
                          fontWeight: 400,
                          fontSize: 12,
                          color: Color.sportsVioleta
                        }}
                      >
                        Fecha de la prueba:
                      </Text>
                      <Text
                        style={{
                          fontWeight: 300,
                          color: Color.sportsVioleta
                        }}
                      >
                        {event.event.dateStart}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                      <Text
                        style={{ color: Color.sportsVioleta, fontSize: 12 }}
                      >
                        Fecha límite de insc.:
                      </Text>
                      <Text
                        style={{
                          fontWeight: 300,
                          fontSize: 12,
                          color: Color.sportsVioleta
                        }}
                      >
                        {event.event.dateInscription}
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
                      PRECIO DE INSCRIPCIÓN:
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
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
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
  frameGroup: {
    marginTop: 25
  },
  image84Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 113,
    height: 113
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
    paddingTop: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  ultimasConsultas: {
    backgroundColor: Color.blanco,
    height: 800,
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
