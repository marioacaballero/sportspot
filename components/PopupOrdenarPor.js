import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'

const PopupOrdenarPor = ({ onClose }) => {
  return (
    <View style={styles.popupfiltros}>
      <View style={styles.charmcrossWrapper}>
        <Image
          style={styles.charmcrossIcon}
          contentFit="cover"
          source={require('../assets/charmcross.png')}
        />
      </View>
      <View style={styles.popupfiltrosInner}>
        <View style={styles.frameFlexBox}>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={styles.fechaParent}>
              <Text style={[styles.fecha, styles.fechaTypo]}>Fecha</Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleChild, styles.togglePosition2]} />

                <Image
                  style={[styles.toggleItem, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-210.png')}
                />
              </View>
            </View>
            <View style={styles.parentFlexBox2}>
              <Text style={[styles.precio, styles.fechaTypo]}>Precio</Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleInner, styles.togglePosition2]} />

                <Image
                  style={[styles.ellipseIcon, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-2102.png')}
                />
              </View>
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>
                Circuito homologado
              </Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleInner, styles.togglePosition2]} />

                <Image
                  style={[styles.ellipseIcon, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-2103.png')}
                />
              </View>
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>Distancia</Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleInner, styles.togglePosition2]} />

                <Image
                  style={[styles.ellipseIcon, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-2103.png')}
                />
              </View>
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>Popularidad</Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleInner, styles.togglePosition2]} />

                <Image
                  style={[styles.ellipseIcon, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-2103.png')}
                />
              </View>
            </View>
            <View
              style={[styles.circuitoHomologadoParent, styles.parentFlexBox2]}
            >
              <Text style={[styles.precio, styles.fechaTypo]}>Federada</Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleInner, styles.togglePosition2]} />

                <Image
                  style={[styles.ellipseIcon, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-2103.png')}
                />
              </View>
            </View>
            <View style={[styles.proximidadParent, styles.parentFlexBox2]}>
              <Text style={[styles.precio, styles.fechaTypo]}>Proximidad</Text>
              <View style={styles.toggle}>
                <View style={[styles.toggleInner, styles.togglePosition2]} />

                <Image
                  style={[styles.ellipseIcon, styles.toggleItemLayout1]}
                  contentFit="cover"
                  source={require('../assets/ellipse-210.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
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
  }
})

export default PopupOrdenarPor
