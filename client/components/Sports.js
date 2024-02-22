import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import BasketSVG from './SVG/Sports/BasketSVG'
import HockeySVG from './SVG/Sports/HockeySVG'
import TennisSVG from './SVG/Sports/TenisSVG'
import CiclismoSVG from './SVG/Sports/CiclismoSVG'
import RugbySVG from './SVG/Sports/RugbySVG'
import HandballSVG from './SVG/Sports/HandballSVG'
import FutbolSVG from './SVG/Sports/FutbolSVG'
import RunningSVG from './SVG/Sports/RunningSVG'
import { setSport } from '../redux/slices/sports.slices'

const Sports = ({ onClose, setEventsFilter }) => {
  const dispatch = useDispatch()
  const { sports } = useSelector((state) => state.sports)
  const [showColor, setShowColor] = useState([])

  const handleClose = () => {
    onClose()
  }

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
    <View style={styles.sports}>
      <View style={styles.container}>
        {filteredSports?.map((sport) => (
          <View key={sport?.name} style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                // setEventsFilter((prevState) => ({
                //   ...prevState,
                //   sportName: prevState.sportName.concat(sport.name)
                // }))
                setEventsFilter((prevState) => ({
                  ...prevState,
                  sportName: sport.name
                }))
                dispatch(setSport(sport.name))
                sportSelectStyle(sport?.name)
              }}
              style={{
                alignItems: 'center',
                border: '1px solid #E5E5E5',
                borderRadius: 50,
                padding: 15,
                backgroundColor: showColor.includes(sport?.name)
                  ? '#40036F'
                  : 'white'
              }}
            >
              <View>
                {sport?.name === 'futbol' && <FutbolSVG />}
                {sport?.name === 'ciclismo' && <CiclismoSVG />}
                {sport?.name === 'hockey' && <HockeySVG />}
                {sport?.name === 'tenis' && <TennisSVG />}
                {sport?.name === 'running' && <RunningSVG />}
                {sport?.name === 'rugby' && <RugbySVG />}
                {sport?.name === 'handball' && <HandballSVG />}
                {sport?.name === 'basket' && <BasketSVG />}
              </View>
            </TouchableOpacity>
            <Text style={styles.ftbol}>
              {sport?.name.slice(0, 1).toUpperCase()}
              {sport?.name.slice(1)}
            </Text>
          </View>
        ))}
        <View style={styles.helloAshfakWrapper}>
          <Text style={styles.helloAshfak} onPress={handleClose}>
            Listo
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 6
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.blanco,
    textAlign: 'center'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    justifyContent: 'center',
    marginTop: 30
  },
  sports: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    width: 361,
    flexDirection: 'column',
    alignItems: 'center',
    padding: Padding.p_xl,
    marginTop: 15,
    justifyContent: 'space-between'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  }
})

export default Sports
