import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import { setSport } from '../redux/slices/sports.slices'
import FutbolSVG from './SVG/Sports/FutbolSVG'
import CiclismoSVG from './SVG/Sports/CiclismoSVG'
import HockeySVG from './SVG/Sports/HockeySVG'
import TenisSVG from './SVG/Sports/TenisSVG'
import RunningSVG from './SVG/Sports/RunningSVG'
import RugbySVG from './SVG/Sports/RugbySVG'
import HandballSVG from './SVG/Sports/HandballSVG'
import BasketSVG from './SVG/Sports/BasketSVG'

const SportsPopUp = ({ onClose }) => {
  const dispatch = useDispatch()

  const { sports } = useSelector((state) => state.sports)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <View style={styles.sports}>
      <View style={styles.container}>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport.id}
            style={styles.touchable}
            onPress={() => {
              dispatch(setSport(sport))
              onClose()
            }}
          >
            <View>
              {sport?.name === 'futbol' && <FutbolSVG />}
              {sport?.name === 'ciclismo' && <CiclismoSVG />}
              {sport?.name === 'hockey' && <HockeySVG />}
              {sport?.name === 'tenis' && <TenisSVG />}
              {sport?.name === 'running' && <RunningSVG />}
              {sport?.name === 'rugby' && <RugbySVG />}
              {sport?.name === 'handball' && <HandballSVG />}
              {sport?.name === 'basket' && <BasketSVG />}
            </View>

            <View style={{ alignItems: 'center' }}>
              <Text style={styles.item}>
                {capitalizeFirstLetter(sport.name)}
              </Text>
              <Text style={styles.itemType}>
                {capitalizeFirstLetter(sport.type)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    marginTop: 10
  },
  itemType: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsNaranja,
    marginTop: 10,
    width: 60,
    textAlign: 'center'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3
  },
  sports: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    flexDirection: 'column',
    alignItems: 'center',
    padding: Padding.p_xl,
    marginTop: 15,
    justifyContent: 'space-between'
  },
  touchable: {
    alignItems: 'center',
    padding: 10,
    width: '24%'
  }
})

export default SportsPopUp
