import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  Pressable,
  ScrollView
} from 'react-native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'

const PopupOrdenarPor = ({ setModalVisible }) => {
  const [switchStates, setSwitchStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])

  const toggleSwitch = (index) => {
    const newSwitchStates = [...switchStates]
    newSwitchStates[index] = !newSwitchStates[index]
    setSwitchStates(newSwitchStates)
  }

  return (
    <ScrollView style={styles.popupfiltros}>
      <View style={styles.charmcrossWrapper}>
        <Pressable onPress={() => setModalVisible(false)}>
          <Image
            style={styles.charmcrossIcon}
            contentFit="cover"
            source={require('../assets/charmcross.png')}
          />
        </Pressable>
      </View>
      <View style={styles.popupfiltrosInner}>
        <View style={styles.frameFlexBox}>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={styles.fechaParent}>
              <Text style={[styles.fecha, styles.fechaTypo]}>Fecha</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(0)}
                value={switchStates[0]}
                style={styles.switch}
              />
            </View>
            <View style={styles.parentFlexBox2}>
              <Text style={[styles.precio, styles.fechaTypo]}>Precio</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[1] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(1)}
                value={switchStates[1]}
                style={styles.switch}
              />
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>
                Circuito homologado
              </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[2] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(2)}
                value={switchStates[2]}
                style={styles.switch}
              />
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>Distancia</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[3] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(3)}
                value={switchStates[3]}
                style={styles.switch}
              />
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>Popularidad</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[4] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(4)}
                value={switchStates[4]}
                style={styles.switch}
              />
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>Federada</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[5] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(5)}
                value={switchStates[5]}
                style={styles.switch}
              />
            </View>
            <View style={[styles.proximidadParent, styles.parentFlexBox2]}>
              <Text style={[styles.precio, styles.fechaTypo]}>Proximidad</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[6] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(6)}
                value={switchStates[6]}
                style={styles.switch}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  fechaTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,

    fontSize: FontSize.inputPlaceholder_size
  },
  togglePosition2: {
    borderRadius: Border.br_xl,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  toggleItemLayout1: {
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    position: 'absolute',
    overflow: 'hidden',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  parentFlexBox2: {
    marginTop: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  charmcrossIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden'
  },
  charmcrossWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  fecha: {
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder
  },
  toggleChild: {
    backgroundColor: Color.sportsNaranja
  },
  toggleItem: {
    right: '4.67%',
    left: '47.67%'
  },
  toggle: {
    width: 30,
    height: 17
  },
  fechaParent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  precio: {
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder
  },
  toggleInner: {
    backgroundColor: Color.gris
  },
  ellipseIcon: {
    right: '44.67%',
    left: '7.67%'
  },
  circuitoHomologadoParent: {
    alignItems: 'flex-end'
  },
  proximidadParent: {
    alignItems: 'center'
  },
  frameParent: {
    alignItems: 'center'
  },
  popupfiltrosInner: {
    marginTop: 12,
    alignItems: 'flex-end',
    alignSelf: 'stretch'
  },
  popupfiltros: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: -2,
      height: -2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 320,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    top: 250,
    right: 8
  },
  switch: {
    transform: [{ scale: 0.8 }]
  }
})

export default PopupOrdenarPor
