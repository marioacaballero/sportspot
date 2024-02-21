import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Color, Border, FontSize, FontFamily, Padding } from '../GlobalStyles'
import BackArrowSVG from '../components/SVG/BackArrowSVG'

const Contacta = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Contáctanos</Text>
        <BackArrowSVG />
      </View>
      <View style={styles.innerContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_8xs
  },
  innerContainer: {
    top: 172,
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: '90%',
    height: 247,
    left: 20,
    position: 'absolute'
  },
  titleContainer: {
    top: '100%',
    left: '10%'
  },
  title: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  }
})

export default Contacta
