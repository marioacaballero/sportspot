import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSports } from '../redux/actions/sports'
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  Image
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

const DatosDeportista = () => {
  const dispatch = useDispatch()

  const { sports } = useSelector((state) => state.sports)

  const [showColor, setShowColor] = useState([])
  const [city, setCity] = useState(false)
  const [modal, setModal] = useState(true)

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

  return (
    <Modal visible={modal} transparent animationType="slide">
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
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tu localidad</Text>
          <TextInput
            placeholder="Escribe tu localidad"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <View style={styles.radioContainer}>
          <Text>Radio km</Text>
          <Image
            source={require('../assets/radio.png')}
            style={{ width: 250, height: 32 }}
          />
        </View>

        <Pressable style={styles.buttonSave} onPress={() => setModal(false)}>
          <Text style={styles.saveText}>Guardar</Text>
        </Pressable>
      </View>
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
    borderWidth: 1,
    borderRadius: 20,
    elevation: 4,
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
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 30,
    borderColor: Color.sportsVioleta,
    width: '85%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    position: 'absolute',
    bottom: 30,
    left: 30,
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
  }
})

export default DatosDeportista
