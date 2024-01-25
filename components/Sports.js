import * as React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'

const Sports = ({ onClose }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <View style={styles.sports}>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-18314.png')}
        />
        <Text style={styles.ftbol}>Fútbol</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-183141.png')}
        />
        <Text style={styles.ftbol}>Fútbol</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-183142.png')}
        />
        <Text style={styles.ftbol}>Rugby</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-183143.png')}
        />
        <Text style={styles.ftbol}>Handball</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-18315.png')}
        />
        <Text style={styles.ftbol}>Ciclismo</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-18317.png')}
        />
        <Text style={styles.ftbol}>Tenis</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-183171.png')}
        />
        <Text style={styles.ftbol}>Running</Text>
      </View>
      <View style={styles.groupContainerSpaceBlock1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-183172.png')}
        />
        <Text style={styles.ftbol}>Hockey</Text>
      </View>
      <View
        style={[styles.helloAshfakWrapper, styles.groupContainerSpaceBlock1]}
      >
        <Text style={styles.helloAshfak} onPress={handleClose}>
          Listo
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainerSpaceBlock1: {
    marginLeft: 20,
    alignItems: 'center'
  },
  frameChild: {
    width: 63,
    height: 63
  },
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.interThin,
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 11
  },
  groupParent: {
    alignItems: 'center'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    color: Color.blanco,
    textAlign: 'left'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    justifyContent: 'center'
  },
  sports: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    width: 361,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Padding.p_xl,
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

export default Sports
