import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Border, FontSize, Padding } from '../GlobalStyles'

const UltimasConsultas = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.ultimasConsultas}>
      <View style={[styles.frameParent, styles.frameParentPosition3]}>
        <View style={styles.ltimasConsultasParent}>
          <Text style={[styles.ltimasConsultas, styles.ciclismoTypo2]}>
            ÚLTIMAS CONSULTAS
          </Text>
          <View style={styles.frameGroup}>
            <View style={[styles.path3391Parent, styles.groupParentFlexBox4]}>
              <Image
                style={styles.path3391Icon}
                contentFit="cover"
                source={require('../assets/path-3391.png')}
              />
              <Text style={[styles.ltimas24Horas, styles.ciclismoTypo2]}>
                Últimas 24 horas
              </Text>
            </View>
            <View style={[styles.xMarkParent, styles.parentBorder]}>
              <Image
                style={[styles.xMarkIcon, styles.iconLayout2]}
                contentFit="cover"
                source={require('../assets/xmark.png')}
              />
              <View
                style={[styles.ltimas24HorasParent, styles.groupParentFlexBox4]}
              >
                <Text style={styles.ltimaSemanaTypo}>Últimas 24 horas</Text>
                <View style={styles.toggle}>
                  <View style={[styles.toggleChild, styles.togglePosition]} />
                  <Image
                    style={[styles.toggleItem, styles.toggleItemLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-210.png')}
                  />
                </View>
              </View>
              <View
                style={[styles.ltimaSemanaParent, styles.groupParentFlexBox4]}
              >
                <Text style={[styles.ltimaSemana, styles.ltimaSemanaTypo]}>
                  Última semana
                </Text>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition]} />
                  <Image
                    style={[styles.ellipseIcon, styles.toggleItemLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-210.png')}
                  />
                </View>
              </View>
              <View
                style={[styles.ltimaSemanaParent, styles.groupParentFlexBox4]}
              >
                <Text style={[styles.ltimaSemana, styles.ltimaSemanaTypo]}>
                  Último mes
                </Text>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition]} />
                  <Image
                    style={[styles.ellipseIcon, styles.toggleItemLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-210.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.image84Parent, styles.parentBorder]}>
          <Image
            style={styles.image84Icon}
            contentFit="cover"
            source={require('../assets/image-84.png')}
          />
          <View style={[styles.frameContainer, styles.frameSpaceBlock3]}>
            <View style={styles.ciclismoParent}>
              <Text style={[styles.ciclismo, styles.ciclismoTypo2]}>
                Ciclismo
              </Text>
              <Image
                style={[styles.heartIcon, styles.iconLayout2]}
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
              <Text style={styles.textTypo1}>{`01 feb 2024
`}</Text>
              <Text
                style={styles.modalidadMontaaLocalizaci}
              >{`Fecha límite de inscripción: `}</Text>
              <Text style={styles.textTypo1}>22 ene 2024</Text>
            </Text>
            <Text style={styles.imGoingToContainer1}>
              <Text
                style={styles.precioDeInscripcin}
              >{`PRECIO DE INSCRIPCIÓN: `}</Text>
              <Text style={[styles.text, styles.textTypo1]}>22€</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.image84Parent, styles.parentBorder]}>
          <Image
            style={styles.image84Icon}
            contentFit="cover"
            source={require('../assets/image-94.png')}
          />
          <View style={styles.frameSpaceBlock3}>
            <View style={styles.groupParentFlexBox4}>
              <Text style={[styles.ciclismo, styles.ciclismoTypo2]}>
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
              <Text style={styles.textTypo1}>{`03 feb 2024
`}</Text>
              <Text
                style={styles.modalidadMontaaLocalizaci}
              >{`Fecha límite de inscripción: `}</Text>
              <Text style={styles.textTypo1}>25 ene 2024</Text>
            </Text>
            <Text style={styles.imGoingToContainer1}>
              <Text
                style={styles.precioDeInscripcin}
              >{`PRECIO DE INSCRIPCIÓN: `}</Text>
              <Text style={[styles.text, styles.textTypo1]}>18€</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition3: {
    left: '50%',
    marginLeft: -180
  },
  ciclismoTypo2: {
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  groupParentFlexBox4: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  parentBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    borderRadius: Border.br_3xs
  },
  iconLayout2: {
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
    position: 'absolute',
    width: '100%'
  },
  toggleItemLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    position: 'absolute',
    overflow: 'hidden'
  },
  ltimaSemanaTypo: {
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  frameSpaceBlock3: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    flex: 1
  },
  textTypo1: {
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder
  },
  menInferiorLayout6: {
    width: 360,
    position: 'absolute'
  },
  frameLayout7: {
    height: 20,
    marginLeft: 47
  },
  frameParentPosition4: {
    top: 0,
    position: 'absolute'
  },
  ltimasConsultas: {
    fontSize: FontSize.size_5xl,
    width: 186,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  path3391Icon: {
    width: 10,
    height: 5
  },
  ltimas24Horas: {
    fontSize: FontSize.size_sm,
    marginLeft: 10,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
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
    alignItems: 'flex-end',
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_mini,
    marginTop: 10
  },
  frameGroup: {
    marginTop: 25
  },
  ltimasConsultasParent: {
    width: 320
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
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
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
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
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
    paddingTop: Padding.p_48xl,
    paddingHorizontal: Padding.p_xl,
    top: 0,
    position: 'absolute'
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
