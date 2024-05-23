import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
              {sport?.name === 'golf' && (
                // <FutbolSVG showColor={showColor} />
                <Image source={require("../assets/icons/Vector.png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>
              )}
              {sport?.name === 'ciclismo' && (
                <Image source={require("../assets/icons/Vector (10).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'carrera' && (
                <Image source={require("../assets/icons/Vector (11).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'triatlon' && (
                <Image source={require("../assets/icons/Vector (9).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'trail' && (
                <Image source={require("../assets/icons/Vector (5).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'padel' && (
                <Image source={require("../assets/icons/Vector (6).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'tenis' && (
                <Image source={require("../assets/icons/Vector (7).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'crossfit' && (
                <Image source={require("../assets/icons/Vector (8).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'escalada' && (
                <Image source={require("../assets/icons/Vector (4).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'orientacion' && (
                <Image source={require("../assets/icons/Vector (2).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'patinaje' && (
                <Image source={require("../assets/icons/Vector (1).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
              {sport?.name === 'senderismo' && (
                <Image source={require("../assets/icons/Vector (12).png")} style={{ width: 30, height: 30, objectFit: "contain" }} ></Image>

              )}
            </View>

            <View style={{ alignItems: 'center', width: "auto" }}>
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
    marginTop: 10,
    width: "100%"
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
    justifyContent: 'space-between',
    height: "90%"
  },
  touchable: {
    alignItems: 'center',
    padding: 10,
    width: '24%'
  }
})

export default SportsPopUp
