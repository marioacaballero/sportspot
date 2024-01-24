import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Border, FontSize, Padding } from '../GlobalStyles'

const UltimasConsultas = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.ultimasConsultas}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.ltimasConsultasParent}>
          <Text style={[styles.ltimasConsultas, styles.ciclismoTypo]}>
            ÚLTIMAS CONSULTAS
          </Text>
          <View style={styles.frameGroup}>
            <View style={[styles.path3391Parent, styles.groupParentFlexBox]}>
              <Image
                style={styles.path3391Icon}
                contentFit="cover"
                source={require('../assets/path-3391.png')}
              />
              <Text style={[styles.ltimas24Horas, styles.ciclismoTypo]}>
                Últimas 24 horas
              </Text>
            </View>
            <View style={[styles.xMarkParent, styles.parentBorder]}>
              <Image
                style={[styles.xMarkIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/xmark.png')}
              />
              <View
                style={[styles.ltimas24HorasParent, styles.groupParentFlexBox]}
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
                style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
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
                style={[styles.ltimaSemanaParent, styles.groupParentFlexBox]}
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
              <Text
                style={styles.modalidadMontaaLocalizaci}
              >{`Fecha límite de inscripción: `}</Text>
              <Text style={styles.textTypo}>22 ene 2024</Text>
            </Text>
            <Text style={styles.imGoingToContainer1}>
              <Text
                style={styles.precioDeInscripcin}
              >{`PRECIO DE INSCRIPCIÓN: `}</Text>
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
              <Text
                style={styles.modalidadMontaaLocalizaci}
              >{`Fecha límite de inscripción: `}</Text>
              <Text style={styles.textTypo}>25 ene 2024</Text>
            </Text>
            <Text style={styles.imGoingToContainer1}>
              <Text
                style={styles.precioDeInscripcin}
              >{`PRECIO DE INSCRIPCIÓN: `}</Text>
              <Text style={[styles.text, styles.textTypo]}>18€</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.menInferior, styles.menInferiorLayout]}>
        <View style={[styles.groupParent, styles.menInferiorLayout]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate('UltimasConsultas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-11712767001.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.vector, styles.frameLayout]}
            onPress={() => navigation.navigate('Favoritos1')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/vector.png')}
            />
          </Pressable>
          <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
          />
          <Pressable
            style={[styles.container, styles.frameLayout]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-1547756022.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate('TuPerfil')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-1171276701.png')}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menInferiorChild, styles.frameParentPosition1]}
          contentFit="cover"
          source={require('../assets/ellipse-7194.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    left: '50%',
    marginLeft: -180
  },
  ciclismoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    textAlign: 'left'
  },
  groupParentFlexBox: {
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
    fontFamily: FontFamily.interMedium,
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
    fontFamily: FontFamily.interThin,
    fontWeight: '100'
  },
  menInferiorLayout: {
    width: 360,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  frameParentPosition1: {
    top: 0,
    position: 'absolute'
  },
  ltimasConsultas: {
    fontSize: FontSize.size_5xl,
    width: 186,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  path3391Icon: {
    width: 10,
    height: 5
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
  menInferiorChild: {
    left: 165,
    width: 37,
    height: 24
  },
  menInferior: {
    bottom: 0,
    height: 75,
    left: '50%',
    marginLeft: -180
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