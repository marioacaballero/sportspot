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
import { useDispatch } from 'react-redux'
import { setOrderEvents } from '../redux/slices/events.slices'

const PopupOrdenarPor = ({ setModalVisible }) => {
  const dispatch = useDispatch()
  const [valuesOrder, setvaluesOrder] = useState({
    dateStart: false,
    price: false
  })
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

  const orderItems = (field, value) => {
    setvaluesOrder((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const submit = () => {
    dispatch(setOrderEvents(valuesOrder))
    setModalVisible(false)
  }

  return (
    <ScrollView
      style={styles.popupfiltros}
      contentContainerStyle={{ paddingBottom: 150 }}
    >
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
            <Pressable
              style={styles.fechaParent}
              // onPress={() => {
              //   orderItems('dateStart', true)
              // }}
            >
              <Text style={[styles.fecha, styles.fechaTypo]}>Fecha</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  toggleSwitch(0)
                  orderItems('dateStart', value)
                }}
                value={switchStates[0]}
                style={styles.switch}
              />
            </Pressable>

            <Pressable style={styles.parentFlexBox2}>
              <Text style={[styles.precio, styles.fechaTypo]}>Precio</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#F25910' }}
                thumbColor={switchStates[1] ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  toggleSwitch(1)
                  orderItems('price', value)
                }}
                value={switchStates[1]}
                style={styles.switch}
              />
            </Pressable>
            {/* <View
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
            </View> */}
          </View>
          <Pressable
            onPress={() => {
              submit()
            }}
          >
            <Text>enviar</Text>
          </Pressable>
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
    fontSize: FontSize.inputPlaceholder_size,
    alignItems: 'center'
  },
  togglePosition2: {
    borderRadius: Border.br_xl,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%'
  },
  toggleItemLayout1: {
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  parentFlexBox2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1
  },
  charmcrossIcon: {
    width: 21,
    height: 21
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
    width: '100%',
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    // maxHeight: '100%',
    maxWidth: '100%',
    top: 210
    // left: 20
  },
  switch: {
    transform: [{ scale: 0.8 }]
  }
})

export default PopupOrdenarPor
