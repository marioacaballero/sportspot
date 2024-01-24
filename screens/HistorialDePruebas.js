import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, View, Pressable, Modal, Image } from 'react-native'
import EscribirResea from '../components/EscribirResea'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'

const HistorialDePruebas = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false)
  const navigation = useNavigation()

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true)
  }, [])

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false)
  }, [])

  return (
    <>
      <View style={styles.historialDePruebas}>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View>
            <Text style={[styles.tuHistorialDe, styles.ciclismoTypo]}>
              TU HISTORIAL DE PRUEBAS
            </Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameSpaceBlock1]}>
            <View style={styles.frameContainer}>
              <View style={styles.groupParentFlexBox}>
                <Text style={[styles.todasLasPruebas, styles.ciclismoTypo]}>
                  Todas las pruebas (4)
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/image-84.png')}
              />
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
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
                  <Text style={styles.textTypo}>{`01 feb 2022
`}</Text>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Fecha límite de inscripción: `}</Text>
                  <Text style={styles.textTypo}>22 ene 2022</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={[styles.text, styles.textTypo]}>22€</Text>
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.clarityeditSolidParent, styles.parentFlexBox]}
              onPress={openFrameContainer7}
            >
              <Image
                style={[styles.clarityeditSolidIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/clarityeditsolid1.png')}
              />
              <Text style={[styles.helloAshfak, styles.ciclismoTypo]}>
                Escribe una reseña
              </Text>
            </Pressable>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
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
                    source={require('../assets/heart1.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`18 ene 2023
`}</Text>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Fecha límite de inscripción: `}</Text>
                  <Text style={styles.textTypo}>10 ene 2023</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={[styles.text, styles.textTypo]}>35€</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.clarityeditSolidParent, styles.parentFlexBox]}>
              <Image
                style={[styles.clarityeditSolidIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/clarityeditsolid1.png')}
              />
              <Text style={[styles.helloAshfak, styles.ciclismoTypo]}>
                Escribe una reseña
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem1.png')}
              />
              <View style={styles.frameSpaceBlock}>
                <View style={styles.groupParentFlexBox}>
                  <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={styles.heartIcon1}
                    contentFit="cover"
                    source={require('../assets/heart1.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`18 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Fecha límite de inscripción: `}</Text>
                  <Text style={styles.textTypo}>10 ene 2024</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={[styles.text, styles.textTypo]}>35€</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
            <View style={[styles.image84Parent, styles.parentFlexBox]}>
              <Image
                style={styles.image84Icon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem1.png')}
              />
              <View style={styles.frameSpaceBlock}>
                <View style={styles.groupParentFlexBox}>
                  <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={styles.heartIcon1}
                    contentFit="cover"
                    source={require('../assets/heart1.png')}
                  />
                </View>
                <Text style={styles.imGoingToContainer}>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                  <Text style={styles.textTypo}>{`18 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadMontaaLocalizaci}
                  >{`Fecha límite de inscripción: `}</Text>
                  <Text style={styles.textTypo}>10 ene 2024</Text>
                </Text>
                <Text style={styles.imGoingToContainer1}>
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={[styles.text, styles.textTypo]}>35€</Text>
                </Text>
              </View>
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
                source={require('../assets/group-1171276700.png')}
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
                source={require('../assets/frame-15477560221.png')}
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

      <Modal animationType="fade" transparent visible={frameContainer7Visible}>
        <View style={styles.frameContainer7Overlay}>
          <Pressable
            style={styles.frameContainer7Bg}
            onPress={closeFrameContainer7}
          />
          <EscribirResea onClose={closeFrameContainer7} />
        </View>
      </Modal>
    </>
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
  frameSpaceBlock1: {
    marginTop: 25,
    alignItems: 'center'
  },
  parentFlexBox: {
    width: 320,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    flex: 1
  },
  iconLayout: {
    height: 14,
    width: 14
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
  tuHistorialDe: {
    fontSize: FontSize.size_5xl,
    width: 186,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  todasLasPruebas: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  groupParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameContainer: {
    justifyContent: 'center'
  },
  frameWrapper: {
    flexDirection: 'row'
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
  frameView: {
    justifyContent: 'center'
  },
  image84Parent: {
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1
  },
  frameContainer7Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer7Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  clarityeditSolidIcon: {
    overflow: 'hidden'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    marginLeft: 10,
    textAlign: 'left'
  },
  clarityeditSolidParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    marginTop: 10,
    justifyContent: 'center'
  },
  frameGroup: {
    justifyContent: 'center'
  },
  heartIcon1: {
    width: 17,
    height: 17,
    marginLeft: 119
  },
  frameParent: {
    height: 685,
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
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
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
  historialDePruebas: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default HistorialDePruebas
