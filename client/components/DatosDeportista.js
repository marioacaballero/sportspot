import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSports } from '../redux/actions/sports'
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable
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

const DatosDeportista = ({ modalSport, setModalSport }) => {
  const dispatch = useDispatch()

  const { sports } = useSelector((state) => state.sports)

  const [showColor, setShowColor] = useState([])
  const [selectedValue, setSelectedValue] = useState(null)
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [eventsFilter, setEventsFilter] = useState({
    location: ''
  })
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    dispatch(getAllSports())
  }, [])

  const sportSelectStyle = (name) => {
    const isSelected = showColor.includes(name)

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
      console.log('Item "modalSport" has been successfully set.')
      setModalSport(false)
    } else {
      handleShowAlert()
    }
  }

  return (
    <Modal visible={modalSport} transparent animationType="slide">
      <View style={styles.container}>
        <Text style={styles.containerText}>¿Qué deporte practicas?</Text>
        <View style={styles.containerSport}>
          {filteredSports?.map((sport) => (
            <View key={sport?.name} style={{ alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  border: '1px solid #E5E5E5',
                  borderRadius: 50,
                  padding: 15,
                  backgroundColor: showColor.includes(sport?.name)
                    ? '#40036F'
                    : 'white'
                }}
                onPress={() => sportSelectStyle(sport?.name)}
              >
                <View>
                  {sport?.name === 'futbol' && (
                    <FutbolSVG showColor={showColor} />
                  )}
                  {sport?.name === 'ciclismo' && (
                    <CiclismoSVG showColor={showColor} />
                  )}
                  {sport?.name === 'hockey' && (
                    <HockeySVG showColor={showColor} />
                  )}
                  {sport?.name === 'tenis' && (
                    <TenisSVG showColor={showColor} />
                  )}
                  {sport?.name === 'running' && (
                    <RunningSVG showColor={showColor} />
                  )}
                  {sport?.name === 'rugby' && (
                    <RugbySVG showColor={showColor} />
                  )}
                  {sport?.name === 'handball' && (
                    <HandballSVG showColor={showColor} />
                  )}
                  {sport?.name === 'basket' && (
                    <BasketSVG showColor={showColor} />
                  )}
                </View>
              </TouchableOpacity>
              <Text style={styles.ftbol}>
                {sport?.name.slice(0, 1).toUpperCase()}
                {sport?.name.slice(1)}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.containerText2}>
          Establece tu radio de notificaciones
        </Text>
        <Pressable style={styles.button} onPress={openFrameContainer6}>
          <BoxSVG style={{ left: -4, position: 'absolute' }} D={'M69.5039'} />
          <Text style={styles.buttonText}>Localidad</Text>
          <Text style={styles.locationText}>
            {eventsFilter.location ? eventsFilter.location : 'Localización'}
          </Text>
        </Pressable>

        <View style={styles.radioContainer}>
          <Text>Radio km</Text>
          <View style={styles.line}></View>
          <View style={styles.kmContainer}>
            <Pressable onPress={() => handlePress(0)}>
              <Text
                style={[selectedValue === 0 ? styles.kmSelected : styles.km]}
              >
                0
              </Text>
              <View
                style={[
                  selectedValue === 0 ? styles.circleSelected : styles.circle
                ]}
              ></View>
            </Pressable>
            <Pressable onPress={() => handlePress(25)}>
              <Text
                style={[selectedValue === 25 ? styles.kmSelected : styles.km]}
              >
                25
              </Text>
              <View
                style={[
                  selectedValue === 25 ? styles.circleSelected : styles.circle
                ]}
              ></View>
            </Pressable>
            <Pressable onPress={() => handlePress(50)}>
              <Text
                style={[selectedValue === 50 ? styles.kmSelected : styles.km]}
              >
                50
              </Text>
              <View
                style={[
                  selectedValue === 50 ? styles.circleSelected : styles.circle
                ]}
              ></View>
            </Pressable>
            <Pressable onPress={() => handlePress(75)}>
              <Text
                style={[selectedValue === 75 ? styles.kmSelected : styles.km]}
              >
                75
              </Text>
              <View
                style={[
                  selectedValue === 75 ? styles.circleSelected : styles.circle
                ]}
              ></View>
            </Pressable>
            <Pressable onPress={() => handlePress(100)}>
              <Text
                style={[selectedValue === 100 ? styles.kmSelected : styles.km]}
              >
                100
              </Text>
              <View
                style={[
                  selectedValue === 100 ? styles.circleSelected : styles.circle
                ]}
              ></View>
            </Pressable>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.saveText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay}>
          <Pressable
            style={styles.frameContainer6Bg}
            onPress={closeFrameContainer6}
          />
          <Maps
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
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '90%',
    height: 510,
    left: '5%',
    top: '6%',
    borderRadius: 20,
    elevation: 5,
    backgroundColor: Color.blanco
  },
  containerText: {
    fontSize: 22,
    marginTop: 10,
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  containerText2: {
    fontSize: 22,
    marginTop: 10,
    color: Color.sportsVioleta,
    width: '60%',
    textAlign: 'center'
  },
  containerSport: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10
  },
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 6
  },
  button: {
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    // borderRadius: 30,
    // borderColor: Color.sportsVioleta,
    width: '85%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    position: 'absolute',
    bottom: 35,
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
    marginTop: 15
  },
  line: {
    height: 3,
    width: 250,
    backgroundColor: Color.sportsVioleta,
    color: Color.sportsVioleta,
    marginTop: 30
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
    position: 'absolute',
    top: 26,
    alignItems: 'center',
    gap: 48,
    flexDirection: 'row',
    left: -1
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
    top: 1
  }
})

export default DatosDeportista
