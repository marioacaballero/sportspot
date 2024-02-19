import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'
import { useSelector } from 'react-redux'
import BasketSVG from './SVG/Sports/BasketSVG'
import HockeySVG from './SVG/Sports/HockeySVG'
import TennisSVG from './SVG/Sports/TenisSVG'
import CiclismoSVG from './SVG/Sports/CiclismoSVG'
import RugbySVG from './SVG/Sports/RugbySVG'
import HandballSVG from './SVG/Sports/HandballSVG'
import FutbolSVG from './SVG/Sports/FutbolSVG'
import RunningSVG from './SVG/Sports/RunningSVG'

const Sports = ({ onClose }) => {
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

  return (
    <View style={styles.sports}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {sports?.map((sport) => (
          <TouchableOpacity
            key={sport?.name}
            onPress={() => sportSelectStyle(sport?.name)}
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
            <View style={{ alignItems: 'center' }}>
              {sport?.name === 'Fulbo' && <FutbolSVG />}
              {sport?.name === 'Ciclismo' && <CiclismoSVG />}
              {sport?.name === 'Hockey' && <HockeySVG />}
              {sport?.name === 'Tenis' && <TennisSVG />}
              {sport?.name === 'Running' && <RunningSVG />}
              {sport?.name === 'Rugby' && <RugbySVG />}
              {sport?.name === 'Handball' && <HandballSVG />}
              {sport?.name === 'Basketball' && <BasketSVG />}
            </View>
          </TouchableOpacity>
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
    marginTop: 11
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
    flexDirection: 'column', // Arrange children horizontally
    padding: Padding.p_xl,
    marginTop: 15,
    justifyContent: 'space-between' // Distribute children evenly along the row
  }
})

export default Sports
