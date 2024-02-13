import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Switch,
  ScrollView,
  Pressable
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Border, FontSize, Padding } from '../GlobalStyles'
import { Path, Rect, Svg } from 'react-native-svg'

const UltimasConsultas = () => {
  const navigation = useNavigation()

  const [switchStates, setSwitchStates] = useState([false, false, false])
  const [showSwitch, setshowSwitch] = useState(false)

  const toggleSwitch = (index) => {
    const newSwitchStates = [...switchStates]
    newSwitchStates[index] = !newSwitchStates[index]
    setSwitchStates(newSwitchStates)
  }

  return (
    <ScrollView style={styles.ultimasConsultas}>
      <View style={styles.frameParent}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Text style={[styles.ltimasConsultas, styles.ciclismoTypo]}>
              ÚLTIMAS CONSULTAS
            </Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Svg width="25" height="25" viewBox="0 0 21 21" fill="none">
                <Rect
                  width="21"
                  height="21"
                  transform="translate(0 21) rotate(-90)"
                  fill="white"
                />
                <Path
                  d="M6.17798 4.98006L0.65625 10.5018L6.17798 16.0234L7.10604 15.0953L3.16862 11.158L20.3124 11.158L20.3124 9.84546L3.16874 9.84546L7.10604 5.90816L6.17798 4.98006Z"
                  fill={Color.sportsVioleta}
                />
              </Svg>
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.path3391Parent, styles.groupParentFlexBox1]}>
              <Pressable onPress={() => setshowSwitch(!showSwitch)}>
                <Image
                  style={[
                    styles.path3391Icon,

                    showSwitch && styles.path3391IconRotate
                  ]}
                  contentFit="cover"
                  source={require('../assets/path-3391.png')}
                />
              </Pressable>
              <Text
                onPress={() => setshowSwitch(!showSwitch)}
                style={[styles.ltimas24Horas, styles.ciclismoTypo]}
              >
                Últimas 24 horas
              </Text>
            </View>
            {showSwitch && (
              <View style={styles.switches}>
                <View
                  style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
                >
                  <Text style={styles.ltimaSemanaTypo}>Últimas 24 horas</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#F25910' }}
                    thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(0)}
                    value={switchStates[0]}
                    style={styles.switch}
                  />
                </View>
                <View
                  style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
                >
                  <Text style={[styles.ltimaSemana, styles.ltimaSemanaTypo]}>
                    Última semana
                  </Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#F25910' }}
                    thumbColor={switchStates[0] ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(1)}
                    value={switchStates[1]}
                    style={styles.switch}
                  />
                </View>
                <View
                  style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
                >
                  <Text style={[styles.ltimaSemana, styles.ltimaSemanaTypo]}>
                    Último mes
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
              </View>
            )}
          </View>
        </View>
        <View style={[styles.image84Parent, styles.parentBorder]}>
          <Image
            style={styles.image84Icon}
            contentFit="cover"
            source={require('../assets/image-84.png')}
          />
          <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
            <View style={styles.ciclismoParent}>
              <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                Ciclismo
              </Text>
              <Image
                style={[styles.heartIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/heart.png')}
              />
            </View>
            <Text style={styles.imGoingToContainer}>
              <Text
                style={styles.modalidadMontaaLocalizaci}
              >{`Modalidad: Montaña
Localización: Hornachos, Badajoz
Fecha de la prueba: `}</Text>
              <Text style={styles.textTypo}>{`01 feb 2024
`}</Text>
              <Text style={styles.modalidadMontaaLocalizaci}>
                Fecha límite de inscripción:
              </Text>
              <Text style={styles.textTypo}>22 ene 2024</Text>
            </Text>
            <Text style={styles.imGoingToContainer1}>
              <Text style={styles.precioDeInscripcin}>
                PRECIO DE INSCRIPCIÓN:
              </Text>
              <Text style={[styles.text, styles.textTypo]}>22€</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.image84Parent, styles.parentBorder]}>
          <Image
            style={styles.image84Icon}
            contentFit="cover"
            source={require('../assets/image-94.png')}
          />
          <View style={styles.frameSpaceBlock}>
            <View style={styles.groupParentFlexBox}>
              <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                Ciclismo
              </Text>
              <Image
                style={styles.heartIcon1}
                contentFit="cover"
                source={require('../assets/heart2.png')}
              />
            </View>
            <Text style={styles.imGoingToContainer}>
              <Text
                style={styles.modalidadMontaaLocalizaci}
              >{`Modalidad: Montaña
Localización: Aceuchal, Badajoz
Fecha de la prueba: `}</Text>
              <Text style={styles.textTypo}>{`03 feb 2024
`}</Text>
              <Text style={styles.modalidadMontaaLocalizaci}>
                Fecha límite de inscripción:
              </Text>
              <Text style={styles.textTypo}>25 ene 2024</Text>
            </Text>
            <Text style={styles.imGoingToContainer1}>
              <Text style={styles.precioDeInscripcin}>
                PRECIO DE INSCRIPCIÓN:
              </Text>
              <Text style={[styles.text, styles.textTypo]}>18€</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ciclismoTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left'
  },
  switches: {
    // backgroundColor: 'red',
    width: '100%',
    padding: 15,
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupParentFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  groupParentFlexBox1: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  parentBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    borderRadius: Border.br_3xs
  },
  iconLayout: {
    height: 14,
    width: 14
  },
  togglePosition: {
    borderRadius: Border.br_xl,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    width: '100%'
  },
  toggleItemLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    overflow: 'hidden'
  },
  ltimaSemanaTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    flex: 1
  },
  textTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100'
  },
  menInferiorLayout: {
    width: 360
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  frameParentPosition1: {
    top: 0
  },
  ltimasConsultas: {
    fontSize: FontSize.size_5xl,
    // width: 186,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  path3391Icon: {
    width: 15,
    height: 10
  },
  path3391IconRotate: {
    transform: [{ rotate: '180deg' }]
  },
  ltimas24Horas: {
    fontSize: FontSize.size_sm,
    marginLeft: 10,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  path3391Parent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl
  },
  xMarkIcon: {
    overflow: 'hidden'
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
    marginLeft: 100,
    height: 17
  },
  ltimas24HorasParent: {
    paddingRight: Padding.p_5xs,
    marginTop: 10
  },
  ltimaSemana: {
    width: 120
  },
  toggleInner: {
    backgroundColor: Color.gris
  },
  ellipseIcon: {
    right: '44.67%',
    left: '7.67%'
  },
  ltimaSemanaParent: {
    width: 258,
    height: 25,
    marginTop: 10
  },
  xMarkParent: {
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 322,
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_mini,
    marginTop: 10,
    justifyContent: 'space-between',
    alignSelf: 'flex-end'
  },
  frameGroup: {
    marginTop: 25
  },

  image84Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 110,
    height: 110
  },
  ciclismo: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja,
    textAlign: 'left'
  },
  heartIcon: {
    marginLeft: 119
  },
  ciclismoParent: {
    flexDirection: 'row'
  },
  modalidadMontaaLocalizaci: {
    fontFamily: FontFamily.inputPlaceholder
  },
  imGoingToContainer: {
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  precioDeInscripcin: {
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  text: {
    color: Color.sportsNaranja
  },
  imGoingToContainer1: {
    fontSize: FontSize.size_2xs,
    marginTop: 10,
    textAlign: 'left'
  },
  frameContainer: {
    justifyContent: 'center'
  },
  image84Parent: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    width: 320
  },
  heartIcon1: {
    width: 17,
    marginLeft: 119,
    height: 17
  },
  frameParent: {
    paddingTop: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 22,
    height: 25
  },
  vector: {
    width: 23,
    marginLeft: 47
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    width: 20,
    marginLeft: 47
  },
  frame: {
    width: 19,
    marginLeft: 47
  },
  groupParent: {
    top: 10,
    left: 0,
    height: 65,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    backgroundColor: Color.gris,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
  },
  ultimasConsultas: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default UltimasConsultas
