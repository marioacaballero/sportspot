import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, View, Pressable, Modal, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Popupfiltros from '../components/Popupfiltros'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'

const PruebasEncontradasOrdenar = () => {
  const [frameContainer2Visible, setFrameContainer2Visible] = useState(false)
  const navigation = useNavigation()

  const openFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(true)
  }, [])

  const closeFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(false)
  }, [])

  return (
    <>
      <View style={styles.pruebasEncontradasOrdenar}>
        <Text style={[styles.pruebasEncontradas, styles.ene2024Typo]}>{`PRUEBAS
ENCONTRADAS`}</Text>
        <View style={[styles.cilarrowTopParent, styles.parentPosition]}>
          <Image
            style={styles.cilarrowTopIcon}
            contentFit="cover"
            source={require('../assets/cilarrowtop1.png')}
          />
          <Text style={[styles.badajozCilcismo22, styles.filtrosTypo]}>
            Badajoz, cilcismo, 22 ene.
          </Text>
        </View>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={styles.frameGroup}>
            <Pressable
              style={styles.filtrosParent}
              onPress={() => navigation.navigate('PruebasEncontradasFiltros')}
            >
              <Text style={styles.filtrosTypo}>Filtros</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-7189.png')}
              />
            </Pressable>
            <Pressable
              style={styles.ordenarPorParent}
              onPress={openFrameContainer2}
            >
              <Text style={styles.filtrosTypo}>Ordenar por</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-71902.png')}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <Pressable
              style={styles.unsplashon4qwhhjcemParentShadowBox}
              onPress={() => navigation.navigate('PruebasEncontradasDetalle1')}
            >
              <Image
                style={styles.unsplashon4qwhhjcemIcon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem3.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.ciclismoParent}>
                  <Text style={[styles.ciclismo, styles.textTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={[styles.likeSpotsport, styles.containerLayout]}
                    contentFit="cover"
                    source={require('../assets/like--spotsport1.png')}
                  />
                </View>
                <Text
                  style={[
                    styles.imGoingToContainer,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Modalidad: Pista
Localización: Mérida, Badajor.
Fecha de la prueba: `}</Text>
                  <Text style={styles.ene2024Typo}>{`25 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Plazo límite de inscripción: `}</Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </Pressable>
            <View
              style={[
                styles.unsplashon4qwhhjcemGroup,
                styles.unsplashon4qwhhjcemParentShadowBox
              ]}
            >
              <Image
                style={styles.unsplashon4qwhhjcemIcon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem3.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.ciclismoParent}>
                  <Text style={[styles.ciclismo, styles.textTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={[styles.likeSpotsport, styles.containerLayout]}
                    contentFit="cover"
                    source={require('../assets/like--spotsport2.png')}
                  />
                </View>
                <Text
                  style={[
                    styles.imGoingToContainer,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Modalidad: Pista
Localización: Mérida, Badajor.
Fecha de la prueba: `}</Text>
                  <Text style={styles.ene2024Typo}>{`25 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Plazo límite de inscripción: `}</Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.unsplashon4qwhhjcemContainer,
                styles.unsplashon4qwhhjcemParentShadowBox
              ]}
            >
              <Image
                style={styles.unsplashon4qwhhjcemIcon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem3.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.ciclismoParent}>
                  <Text style={[styles.ciclismo, styles.textTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={[styles.likeSpotsport, styles.containerLayout]}
                    contentFit="cover"
                    source={require('../assets/like--spotsport1.png')}
                  />
                </View>
                <Text
                  style={[
                    styles.imGoingToContainer,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Modalidad: Pista
Localización: Mérida, Badajor.
Fecha de la prueba: `}</Text>
                  <Text style={styles.ene2024Typo}>{`25 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Plazo límite de inscripción: `}</Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.unsplashon4qwhhjcemParent1,
                styles.unsplashon4qwhhjcemParentShadowBox
              ]}
            >
              <Image
                style={styles.unsplashon4qwhhjcemIcon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem3.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.ciclismoParent}>
                  <Text style={[styles.ciclismo, styles.textTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={[styles.likeSpotsport, styles.containerLayout]}
                    contentFit="cover"
                    source={require('../assets/like--spotsport2.png')}
                  />
                </View>
                <Text
                  style={[
                    styles.imGoingToContainer,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Modalidad: Pista
Localización: Mérida, Badajor.
Fecha de la prueba: `}</Text>
                  <Text style={styles.ene2024Typo}>{`25 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Plazo límite de inscripción: `}</Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.unsplashon4qwhhjcemParent2,
                styles.unsplashon4qwhhjcemParentShadowBox
              ]}
            >
              <Image
                style={styles.unsplashon4qwhhjcemIcon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem3.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.ciclismoParent}>
                  <Text style={[styles.ciclismo, styles.textTypo]}>
                    Ciclismo
                  </Text>
                  <Image
                    style={[styles.likeSpotsport, styles.containerLayout]}
                    contentFit="cover"
                    source={require('../assets/like--spotsport2.png')}
                  />
                </View>
                <Text
                  style={[
                    styles.imGoingToContainer,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Modalidad: Pista
Localización: Mérida, Badajor.
Fecha de la prueba: `}</Text>
                  <Text style={styles.ene2024Typo}>{`25 ene 2024
`}</Text>
                  <Text
                    style={styles.modalidadPistaLocalizacin}
                  >{`Plazo límite de inscripción: `}</Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text
                    style={styles.precioDeInscripcin}
                  >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.menInferior, styles.menInferiorPosition]}>
          <View style={[styles.groupParent, styles.menInferiorPosition]}>
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
              style={styles.vector}
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
              style={[styles.container, styles.containerLayout]}
              onPress={() => navigation.navigate('HistorialDePruebas')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/frame-1547756022.png')}
              />
            </Pressable>
            <Pressable
              style={styles.frame}
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
            style={styles.menInferiorChild}
            contentFit="cover"
            source={require('../assets/ellipse-7194.png')}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer2Visible}>
        <View style={styles.frameContainer2Overlay}>
          <Pressable
            style={styles.frameContainer2Bg}
            onPress={closeFrameContainer2}
          />
          <Popupfiltros onClose={closeFrameContainer2} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  ene2024Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  parentPosition: {
    width: 320,
    alignItems: 'center',
    left: 20,
    position: 'absolute'
  },
  filtrosTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  textTypo: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  containerLayout: {
    width: 20,
    height: 20
  },
  goingContainerFlexBox: {
    marginTop: 10,
    alignSelf: 'stretch',
    textAlign: 'left'
  },
  unsplashon4qwhhjcemParentShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  menInferiorPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  pruebasEncontradas: {
    top: 67,
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta,
    left: 20,
    fontWeight: '700',
    position: 'absolute'
  },
  cilarrowTopIcon: {
    width: 25,
    height: 25,
    overflow: 'hidden'
  },
  badajozCilcismo22: {
    marginLeft: 13
  },
  cilarrowTopParent: {
    top: 145,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    padding: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameChild: {
    width: 10,
    height: 10,
    marginTop: 5
  },
  filtrosParent: {
    alignItems: 'center'
  },
  frameContainer2Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer2Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  ordenarPorParent: {
    marginLeft: 122,
    alignItems: 'center'
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  unsplashon4qwhhjcemIcon: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    maxWidth: '100%',
    maxHeight: '100%',
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%',
    flex: 1
  },
  ciclismo: {
    fontSize: FontSize.size_sm,
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    textAlign: 'left',
    flex: 1
  },
  likeSpotsport: {
    height: 20,
    overflow: 'hidden'
  },
  ciclismoParent: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  modalidadPistaLocalizacin: {
    fontFamily: FontFamily.inputPlaceholder
  },
  imGoingToContainer: {
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  precioDeInscripcin: {
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  imGoingToContainer1: {
    fontSize: FontSize.size_2xs
  },
  frameView: {
    width: 201,
    padding: Padding.p_3xs
  },
  unsplashon4qwhhjcemGroup: {
    marginTop: 8
  },
  unsplashon4qwhhjcemContainer: {
    marginTop: 8
  },
  unsplashon4qwhhjcemParent1: {
    marginTop: 8
  },
  unsplashon4qwhhjcemParent2: {
    marginTop: 8
  },
  frameContainer: {
    height: 546,
    marginTop: 8,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frameParent: {
    top: 210,
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
    marginLeft: 47,
    height: 20
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    marginLeft: 47,
    height: 20
  },
  frame: {
    width: 19,
    marginLeft: 47,
    height: 20
  },
  groupParent: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorChild: {
    top: 0,
    left: 165,
    width: 37,
    height: 24,
    position: 'absolute'
  },
  menInferior: {
    top: 725,
    height: 75
  },
  pruebasEncontradasOrdenar: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default PruebasEncontradasOrdenar
