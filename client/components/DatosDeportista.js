import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSports } from '../redux/actions/sports'
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import { Color, FontSize, FontFamily } from '../GlobalStyles'
import FutbolSVG from './SVG/Sports/FutbolSVG'
import CiclismoSVG from './SVG/Sports/CiclismoSVG'
import HockeySVG from './SVG/Sports/HockeySVG'
import RunningSVG from './SVG/Sports/RunningSVG'
import RugbySVG from './SVG/Sports/RugbySVG'
import HandballSVG from './SVG/Sports/HandballSVG'
import BasketSVG from './SVG/Sports/BasketSVG'
import TenisSVG from './SVG/Sports/TenisSVG'
import Maps from './Maps'
import BoxSVG from './SVG/BoxSVG'
import CustomAlert from './CustomAlert'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { postUserPreferences } from '../redux/actions/users'
import SenderismoSVG from './SVG/Sports/SenderismoSVG'
import CiclismoSVG2 from './SVG/Sports/CiclismoSVG2'
import CarreraSVG from './SVG/Sports/CarreraSVG'
import TenisSVG2 from './SVG/Sports/TenisSVG2'
import TrailSVG from './SVG/Sports/TrailSVG'
import TriatlonSVG from './SVG/Sports/TriatlonSVG'
import PadelSVG from './SVG/Sports/PadelSVG'
import CrossfitSVG from './SVG/Sports/CrossfitSVG'
import EscaladaSVG from './SVG/Sports/EscaladaSVG'
import OrientacionSVG from './SVG/Sports/OrientacionSVG'
import PatinajeSVG from './SVG/Sports/PatinajeSVG'
import GolfSVG from './SVG/Sports/GolfSVG'
import { useTranslation } from 'react-i18next'

const DatosDeportista = ({
  modalSport,
  setModalSport,
  setModalState,
  fromEdit
}) => {
  const dispatch = useDispatch()

  const { sports } = useSelector((state) => state.sports)
  const { user } = useSelector((state) => state.users)
  const [showColor, setShowColor] = useState(
    user?.preferences?.sport?.length > 0 ? user?.preferences?.sport : []
  )
  const [selectedValue, setSelectedValue] = useState(
    user?.preferences?.ratio || null
  )
  const [typing, setTyping] = useState(false)
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [eventsFilter, setEventsFilter] = useState({
    location: user?.preferences?.location?.length
      ? user?.preferences?.location
      : ''
  })
  const [showAlert, setShowAlert] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    dispatch(getAllSports())
  }, [])

  const sportSelectStyle = (name) => {
    const isSelected = showColor?.includes(name)

    if (isSelected) {
      setShowColor(showColor.filter((sport) => sport !== name))
    } else {
      setShowColor([...showColor, name])
    }
  }

  const uniqueSports = {}
  const filteredSports = sports
    .map((sport) => {
      if (!uniqueSports[sport.name]) {
        uniqueSports[sport.name] = true
        return sport
      }
      return null
    })
    .filter((sport) => sport !== null)

  const handlePress = (value) => {
    setSelectedValue(value)
  }

  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true)
  }, [])

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])

  const handleShowAlert = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const handleSubmit = async () => {
    if (
      showColor.length > 0 &&
      selectedValue !== null &&
      eventsFilter.location !== ''
    ) {
      await AsyncStorage.setItem('modalSport', 'alreadyShowed')
      const userPreferences = {
        sport: showColor,
        location: eventsFilter.location,
        ratio: selectedValue
      }
      dispatch(postUserPreferences({ userPreferences, id: user.id }))
      setModalSport && setModalSport(false)
      if (setModalState) {
        setModalState(false)
      }
    } else {
      handleShowAlert()
    }
  }

  return (
    <Modal visible={modalSport} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            fromEdit && setModalSport && setModalSport(false)
          }}
        >
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(113, 113, 113, 0.9)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: '90%',
                borderRadius: 20,
                elevation: 5,
                backgroundColor: Color.blanco,
                alignItems: 'center',
                justifyContent:
                  frameContainer6Visible && typing === true
                    ? 'flex-start'
                    : 'center',
                paddingVertical: 15,
                marginTop: frameContainer6Visible && typing === true && 250
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: Color.sportsVioleta,
                  textAlign: 'center'
                }}
              >
                {t('quedeportepracticas')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  gap: 10,
                  marginTop: 10,
                  paddingHorizontal: 18
                }}
              >
                {filteredSports?.map((sport) => (
                  <View key={sport?.name} style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        border: '1px solid #E5E5E5',
                        elevation: 6,
                        shadowColor: '#0426ba',
                        borderRadius: 100,
                        padding: 15,
                        backgroundColor: showColor?.includes(sport?.name)
                          ? Color.sportsNaranja
                          : 'white'
                      }}
                      onPress={() => sportSelectStyle(sport?.name)}
                    >
                      <View>
                        {sport?.name === 'marcha' && (
                          // <FutbolSVG showColor={showColor} />
                          <SenderismoSVG showColor={showColor}></SenderismoSVG>
                        )}
                        {sport?.name === 'ciclismo' && (
                          <CiclismoSVG2 showColor={showColor} />
                        )}
                        {sport?.name === 'carrera' && (
                          // <HockeySVG showColor={showColor} />
                          <CarreraSVG showColor={showColor}></CarreraSVG>
                        )}
                        {sport?.name === 'tenis' && (
                          <TenisSVG2 showColor={showColor} />
                        )}
                        {sport?.name === 'triatlon' && (
                          <TriatlonSVG showColor={showColor}></TriatlonSVG>
                        )}
                        {sport?.name === 'trail' && (
                          <TrailSVG showColor={showColor} />
                        )}
                        {sport?.name === 'padel' && (
                          <PadelSVG showColor={showColor} />
                        )}
                        {sport?.name === 'fitness' && (
                          <CrossfitSVG showColor={showColor} />
                        )}
                        {sport?.name === 'escalada' && (
                          <EscaladaSVG showColor={showColor} />
                        )}
                        {sport?.name === 'orientacion' && (
                          <OrientacionSVG showColor={showColor} />
                        )}
                        {sport?.name === 'patinaje' && (
                          <PatinajeSVG showColor={showColor} />
                        )}
                        {sport?.name === 'golf' && (
                          <GolfSVG showColor={showColor} />
                        )}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: FontSize.size_sm,
                        lineHeight: 23,
                        fontWeight: '900',
                        fontFamily: FontFamily.inputPlaceholder,
                        color: Color.sportsVioleta,

                        textAlign: 'center',
                        marginTop: 6
                      }}
                    >
                      {sport?.name.slice(0, 1).toUpperCase()}
                      {sport?.name.slice(1)}
                    </Text>
                  </View>
                ))}
              </View>

              <Text style={styles.containerText2}>{t('turadio')}</Text>
              <Pressable style={styles.button} onPress={openFrameContainer6}>
                {/* <BoxSVG style={{ left: -4, position: 'absolute' }} width={500} /> */}

                <Text style={styles.buttonText}>{t('localidad')}</Text>
                <Text style={styles.locationText}>
                  {eventsFilter.location
                    ? eventsFilter.location
                    : t('tulocalidad')}
                </Text>
              </Pressable>

              <View style={styles.radioContainer}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    paddingLeft: 20,
                    fontWeight: 'bold',
                    color: Color.sportsVioleta
                  }}
                >
                  {t('radiokm')}
                </Text>
                <View style={styles.line}></View>
                <View style={styles.kmContainer}>
                  <Pressable onPress={() => handlePress(0)}>
                    <Text
                      style={[
                        selectedValue === 0 ? styles.kmSelected : styles.km
                      ]}
                    >
                      0
                    </Text>
                    <View
                      style={[
                        selectedValue === 0
                          ? styles.circleSelected
                          : styles.circle
                      ]}
                    ></View>
                  </Pressable>
                  <Pressable onPress={() => handlePress(25)}>
                    <Text
                      style={[
                        selectedValue === 25 ? styles.kmSelected : styles.km
                      ]}
                    >
                      25
                    </Text>
                    <View
                      style={[
                        selectedValue === 25
                          ? styles.circleSelected
                          : styles.circle
                      ]}
                    ></View>
                  </Pressable>
                  <Pressable onPress={() => handlePress(50)}>
                    <Text
                      style={[
                        selectedValue === 50 ? styles.kmSelected : styles.km
                      ]}
                    >
                      50
                    </Text>
                    <View
                      style={[
                        selectedValue === 50
                          ? styles.circleSelected
                          : styles.circle
                      ]}
                    ></View>
                  </Pressable>
                  <Pressable onPress={() => handlePress(75)}>
                    <Text
                      style={[
                        selectedValue === 75 ? styles.kmSelected : styles.km
                      ]}
                    >
                      75
                    </Text>
                    <View
                      style={[
                        selectedValue === 75
                          ? styles.circleSelected
                          : styles.circle
                      ]}
                    ></View>
                  </Pressable>
                  <Pressable onPress={() => handlePress(100)}>
                    <Text
                      style={[
                        selectedValue === 100 ? styles.kmSelected : styles.km
                      ]}
                    >
                      100
                    </Text>
                    <View
                      style={[
                        selectedValue === 100
                          ? styles.circleSelected
                          : styles.circle
                      ]}
                    ></View>
                  </Pressable>
                </View>
              </View>

              <TouchableOpacity
                style={styles.buttonSave}
                onPress={handleSubmit}
              >
                <Text style={styles.saveText}>{t('guardar')}</Text>
              </TouchableOpacity>
            </View>

            <Modal
              animationType="fade"
              transparent
              visible={frameContainer6Visible}
            >
              <View style={styles.frameContainer6Overlay}>
                <Pressable
                  style={styles.frameContainer6Bg}
                  onPress={() => {
                    closeFrameContainer6()
                    setTyping && setTyping(false)
                  }}
                />
                <Maps
                  setTyping={setTyping}
                  onClose={closeFrameContainer6}
                  setEventsFilter={setEventsFilter}
                />
              </View>
            </Modal>

            <CustomAlert
              visible={showAlert}
              message="Por favor rellena todos los campos"
              onClose={handleCloseAlert}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 20,
    elevation: 5,
    backgroundColor: Color.blanco,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  containerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  containerText2: {
    fontSize: 22,
    marginTop: 10,
    color: Color.sportsVioleta,
    width: '80%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  containerSport: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    paddingHorizontal: 10
  },
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '900',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,

    textAlign: 'center',
    marginTop: 6
  },
  button: {
    borderRadius: 30,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    width: '90%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    position: 'absolute',
    bottom: 28,
    backgroundColor: 'white',
    padding: 3,
    left: 18,
    fontSize: 10
  },
  buttonSave: {
    backgroundColor: Color.sportsNaranja,
    borderRadius: 30,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  saveText: {
    color: Color.blanco,
    fontSize: 17
  },
  radioContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  line: {
    height: 3,
    width: '85%',
    backgroundColor: Color.sportsVioleta,
    color: Color.sportsVioleta,
    marginTop: 30,
    marginBottom: 10
  },
  circle: {
    height: 10,
    width: 10,
    backgroundColor: Color.sportsVioleta,
    borderRadius: 100,
    marginTop: 5
  },
  circleSelected: {
    height: 10,
    width: 10,
    backgroundColor: Color.sportsNaranja,
    borderRadius: 100,
    marginTop: 5
  },
  kmContainer: {
    width: '90%',
    position: 'absolute',
    top: 26,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  km: {
    color: Color.sportsVioleta,
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    right: 1
  },
  kmSelected: {
    color: Color.sportsNaranja,
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    right: 1
  },
  frameContainer6Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer6Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  locationText: {
    color: Color.sportsVioleta,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    backgroundColor: '#FFFFFF',
    zIndex: 999,
    top: 1
  }
})

export default DatosDeportista
