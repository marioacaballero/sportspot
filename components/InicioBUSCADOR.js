import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, Pressable, View, Modal, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Maps from '../components/Maps'
import Sports from '../components/Sports'
import Calendar from '../components/Calendar'
import { Padding, FontFamily, Border, FontSize, Color } from '../GlobalStyles'

const InicioBUSCADOR = () => {
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [frameContainer8Visible, setFrameContainer8Visible] = useState(false)
  const [frameContainer10Visible, setFrameContainer10Visible] = useState(false)
  const navigation = useNavigation()

  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true)
  }, [])

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])

  const openFrameContainer8 = useCallback(() => {
    setFrameContainer8Visible(true)
  }, [])

  const closeFrameContainer8 = useCallback(() => {
    setFrameContainer8Visible(false)
  }, [])

  const openFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(true)
  }, [])

  const closeFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(false)
  }, [])

  return (
    <>
      <View style={[styles.inicioBuscador, styles.image94IconLayout1]}>
        <View style={[styles.frameParent, styles.frameParentPosition9]}>
          <View style={[styles.helloAshfakParent, styles.frameGroupFlexBox4]}>
            <Text style={[styles.helloAshfak, styles.helloTypo13]}>INICIO</Text>
            <View style={styles.groupParent}>
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('InicioPREMIUM')}
              >
                <Image
                  style={styles.iconLayout7}
                  contentFit="cover"
                  source={require('../assets/group-11712766982.png')}
                />
              </Pressable>
              <Pressable
                style={styles.materialSymbolsnotifications}
                onPress={() => navigation.navigate('InicioNotificaciones')}
              >
                <Image
                  style={[styles.icon1, styles.iconLayout7]}
                  contentFit="cover"
                  source={require('../assets/materialsymbolsnotifications.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupSpaceBlock3]}>
            <Pressable
              style={styles.helloAshfakGroup}
              onPress={() => navigation.navigate('InicioDeportista')}
            >
              <Text style={[styles.helloAshfak1, styles.helloTypo13]}>
                Deportista
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-471.png')}
              />
            </Pressable>
            <Pressable
              style={styles.helloAshfakGroup}
              onPress={() => navigation.navigate('InicioOrganizador')}
            >
              <Text style={[styles.helloAshfak2, styles.helloTypo13]}>
                Organizador
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-48.png')}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <Pressable
              style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}
              onPress={openFrameContainer6}
            >
              <View style={styles.frameView}>
                <Image
                  style={styles.frameLayout15}
                  contentFit="cover"
                  source={require('../assets/frame-1547755976.png')}
                />
                <Text style={[styles.helloAshfak3, styles.helloTypo12]}>
                  Localización
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.framePressable, styles.frameWrapperSpaceBlock]}
              onPress={openFrameContainer8}
            >
              <View style={styles.frameView}>
                <Image
                  style={styles.frameLayout15}
                  contentFit="cover"
                  source={require('../assets/frame-1547755977.png')}
                />
                <Text style={styles.helloTypo12}>Deporte</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.framePressable, styles.frameWrapperSpaceBlock]}
              onPress={openFrameContainer10}
            >
              <View style={styles.frameView}>
                <Image
                  style={styles.frameLayout15}
                  contentFit="cover"
                  source={require('../assets/frame-1547755978.png')}
                />
                <Text style={styles.helloTypo12}>Fecha</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.helloAshfakWrapper, styles.groupContainerFlexBox]}
              onPress={() => navigation.navigate('PruebasEncontradas')}
            >
              <Text style={styles.helloAshfak6}>Buscar</Text>
            </Pressable>
          </View>
          <View style={styles.frameParent3}>
            <View>
              <Text style={[styles.helloAshfak1, styles.helloTypo13]}>
                Últimas horas de inscripción
              </Text>
              <View style={styles.frameParent4}>
                <View style={styles.image94ParentShadowBox5}>
                  <Image
                    style={[styles.image94Icon, styles.image94IconLayout1]}
                    contentFit="cover"
                    source={require('../assets/image-941.png')}
                  />
                  <View
                    style={[
                      styles.imGoingToShakeYParent,
                      styles.frameGroupSpaceBlock3
                    ]}
                  >
                    <Text style={[styles.imGoingTo, styles.goingClr]}>
                      Torneo de baloncesto
                    </Text>
                    <View style={styles.minParent}>
                      <Text
                        style={[styles.min, styles.minClr1]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                      <Text
                        style={[styles.min, styles.minClr1]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.image94ParentShadowBox4}>
                  <Image
                    style={[styles.image94Icon, styles.image94IconLayout1]}
                    contentFit="cover"
                    source={require('../assets/image-942.png')}
                  />
                  <View
                    style={[
                      styles.imGoingToShakeYParent,
                      styles.frameGroupSpaceBlock3
                    ]}
                  >
                    <Text style={[styles.imGoingTo, styles.goingClr]}>
                      Ciclismo
                    </Text>
                    <View style={styles.minParent}>
                      <Text
                        style={[styles.min, styles.minClr1]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                      <Text
                        style={[styles.min, styles.minClr1]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.image94ParentShadowBox4}>
                  <Image
                    style={[styles.image94Icon, styles.image94IconLayout1]}
                    contentFit="cover"
                    source={require('../assets/image-943.png')}
                  />
                  <View
                    style={[
                      styles.imGoingToShakeYParent,
                      styles.frameGroupSpaceBlock3
                    ]}
                  >
                    <Text style={[styles.imGoingTo2, styles.minTypo6]}>
                      Ciclismo
                    </Text>
                    <View style={styles.minParent}>
                      <Text
                        style={[styles.min4, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                      <Text style={[styles.min4, styles.minTypo6]}>
                        ¡La inscripción acaba en 10 horas!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.helloAshfakParent2}>
              <Text style={[styles.helloAshfak1, styles.helloTypo13]}>
                Últimas pruebas añadidas
              </Text>
              <View style={styles.frameParent4}>
                <View style={styles.image94ParentShadowBox5}>
                  <Image
                    style={[styles.image94Icon, styles.image94IconLayout1]}
                    contentFit="cover"
                    source={require('../assets/image-944.png')}
                  />
                  <View
                    style={[
                      styles.imGoingToShakeYParent,
                      styles.frameGroupSpaceBlock3
                    ]}
                  >
                    <Text style={[styles.imGoingTo, styles.goingClr]}>
                      Lorem ipsum
                    </Text>
                    <View style={styles.minParent}>
                      <Text
                        style={[styles.min6, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                      <Text
                        style={[styles.min6, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.image94ParentShadowBox4}>
                  <Image
                    style={[styles.image94Icon, styles.image94IconLayout1]}
                    contentFit="cover"
                    source={require('../assets/image-945.png')}
                  />
                  <View
                    style={[
                      styles.imGoingToShakeYParent,
                      styles.frameGroupSpaceBlock3
                    ]}
                  >
                    <Text style={[styles.imGoingTo2, styles.minTypo6]}>
                      Lorem ipsum
                    </Text>
                    <View style={styles.minParent}>
                      <Text
                        style={[styles.min6, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                      <Text
                        style={[styles.min6, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.image94ParentShadowBox4}>
                  <Image
                    style={[styles.image94Icon, styles.image94IconLayout1]}
                    contentFit="cover"
                    source={require('../assets/image-943.png')}
                  />
                  <View
                    style={[
                      styles.imGoingToShakeYParent,
                      styles.frameGroupSpaceBlock3
                    ]}
                  >
                    <Text style={[styles.imGoingTo2, styles.minTypo6]}>
                      Lorem ipsum
                    </Text>
                    <View style={styles.minParent}>
                      <Text
                        style={[styles.min6, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                      <Text
                        style={[styles.min6, styles.minTypo6]}
                      >{`Lorem ipsum dolor sit amet. `}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.helloAshfakParent2}>
            <Text style={[styles.helloAshfak9, styles.minTypo6]}>
              Resultados de las útlimas pruebas
            </Text>
            <View style={styles.frameParent4}>
              <View style={styles.image94ParentShadowBox5}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout1]}
                  contentFit="cover"
                  source={require('../assets/image-943.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock3
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo6]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text
                      style={[styles.min6, styles.minTypo6]}
                    >{`Lorem ipsum dolor sit amet. `}</Text>
                    <Text
                      style={[styles.min6, styles.minTypo6]}
                    >{`Lorem ipsum dolor sit amet. `}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox4}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout1]}
                  contentFit="cover"
                  source={require('../assets/image-944.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock3
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo6]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text
                      style={[styles.min6, styles.minTypo6]}
                    >{`Lorem ipsum dolor sit amet. `}</Text>
                    <Text
                      style={[styles.min6, styles.minTypo6]}
                    >{`Lorem ipsum dolor sit amet. `}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox4}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout1]}
                  contentFit="cover"
                  source={require('../assets/image-945.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock3
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo6]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text
                      style={[styles.min6, styles.minTypo6]}
                    >{`Lorem ipsum dolor sit amet. `}</Text>
                    <Text
                      style={[styles.min6, styles.minTypo6]}
                    >{`Lorem ipsum dolor sit amet. `}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menInferior}>
          <View style={[styles.groupContainer, styles.groupContainerFlexBox]}>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate('UltimasConsultas')}
            >
              <Image
                style={styles.iconLayout7}
                contentFit="cover"
                source={require('../assets/group-1171276700.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.vector, styles.frameLayout14]}
              onPress={() => navigation.navigate('Favoritos1')}
            >
              <Image
                style={styles.iconLayout7}
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
              style={[styles.frame, styles.frameLayout14]}
              onPress={() => navigation.navigate('HistorialDePruebas')}
            >
              <Image
                style={styles.iconLayout7}
                contentFit="cover"
                source={require('../assets/frame-1547756022.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.groupPressable, styles.frameLayout14]}
              onPress={() => navigation.navigate('TuPerfil')}
            >
              <Image
                style={styles.iconLayout7}
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

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay}>
          <Pressable
            style={styles.frameContainer6Bg}
            onPress={closeFrameContainer6}
          />
          <Maps onClose={closeFrameContainer6} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer8Visible}>
        <View style={styles.frameContainer8Overlay}>
          <Pressable
            style={styles.frameContainer8Bg}
            onPress={closeFrameContainer8}
          />
          <Sports onClose={closeFrameContainer8} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer10Visible}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeFrameContainer10}
          />
          <Calendar onClose={closeFrameContainer10} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  image94IconLayout1: {
    width: '100%',
    overflow: 'hidden'
  },
  frameParentPosition9: {
    paddingHorizontal: Padding.p_xl,
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameGroupFlexBox4: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  helloTypo13: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  iconLayout7: {
    height: '100%',
    width: '100%'
  },
  frameGroupSpaceBlock3: {
    paddingVertical: 0,
    alignSelf: 'stretch'
  },
  frameWrapperSpaceBlock: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  helloTypo12: {
    marginLeft: 11,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  groupContainerFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  goingClr: {
    color: Color.sportsNaranja,
    fontSize: FontSize.inputLabel_size,
    alignSelf: 'stretch'
  },
  minClr1: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    alignSelf: 'stretch'
  },
  minTypo6: {
    fontWeight: '100',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  frameLayout14: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontWeight: '700',
    textAlign: 'left'
  },
  wrapper: {
    width: 29,
    height: 22
  },
  icon1: {
    overflow: 'hidden'
  },
  materialSymbolsnotifications: {
    width: 27,
    marginLeft: 7,
    height: 24
  },
  groupParent: {
    width: 63,
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfakParent: {
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  helloAshfak1: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta,
    fontWeight: '700',
    textAlign: 'left'
  },
  frameChild: {
    width: 6,
    height: 6,
    marginTop: 5
  },
  helloAshfakGroup: {
    alignItems: 'center'
  },
  helloAshfak2: {
    color: Color.violeta3,
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    textAlign: 'left'
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    marginTop: 19,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  frameContainer6Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer6Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameLayout15: {
    width: 24,
    height: 24
  },
  helloAshfak3: {
    flex: 1
  },
  frameView: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frameWrapper: {
    backgroundColor: Color.colorLinen_100,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl
  },
  frameContainer8Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer8Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  framePressable: {
    marginTop: 10,
    backgroundColor: Color.colorLinen_100,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl
  },
  frameContainer10Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer10Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  helloAshfak6: {
    color: Color.blanco,
    textAlign: 'center',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  helloAshfakWrapper: {
    backgroundColor: Color.sportsNaranja,
    height: 42,
    marginTop: 10,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  frameContainer: {
    width: 320,
    marginTop: 19
  },
  image94Icon: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    maxWidth: '100%',
    height: 95,
    alignSelf: 'stretch',
    overflow: 'hidden'
  },
  imGoingTo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  min: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  minParent: {
    marginTop: 2,
    alignSelf: 'stretch'
  },
  imGoingToShakeYParent: {
    height: 44,
    paddingHorizontal: Padding.p_8xs,
    marginTop: 5
  },
  image94ParentShadowBox5: {
    height: 162,
    width: 187,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowColor: 'rgba(39, 39, 39, 0.2)',
    borderRadius: Border.br_sm,
    alignItems: 'center',
    backgroundColor: Color.blanco
  },
  image94ParentShadowBox4: {
    marginLeft: 15,
    height: 162,
    width: 187,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowColor: 'rgba(39, 39, 39, 0.2)',
    borderRadius: Border.br_sm,
    alignItems: 'center',
    backgroundColor: Color.blanco
  },
  imGoingTo2: {
    color: Color.sportsNaranja,
    fontSize: FontSize.inputLabel_size,
    alignSelf: 'stretch'
  },
  min4: {
    fontSize: FontSize.size_3xs,
    fontWeight: '100',
    color: Color.sportsVioleta,
    alignSelf: 'stretch'
  },
  frameParent4: {
    width: 328,
    marginTop: 10,
    flexDirection: 'row'
  },
  min6: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    alignSelf: 'stretch'
  },
  helloAshfakParent2: {
    marginTop: 19
  },
  frameParent3: {
    height: 354,
    marginTop: 19,
    alignItems: 'center'
  },
  helloAshfak9: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta
  },
  frameParent: {
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_6xl,
    alignItems: 'center',
    top: 0,
    height: 800
  },
  container: {
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
  frame: {
    width: 20,
    marginLeft: 47
  },
  groupPressable: {
    width: 19,
    marginLeft: 47
  },
  groupContainer: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl,
    width: 360,
    left: 0,
    position: 'absolute'
  },
  menInferiorChild: {
    left: 165,
    width: 37,
    height: 24,
    top: 0,
    position: 'absolute'
  },
  menInferior: {
    top: 725,
    height: 75,
    width: 360,
    left: 0,
    position: 'absolute'
  },
  inicioBuscador: {
    overflow: 'hidden',
    height: 800,
    flex: 1,
    backgroundColor: Color.blanco,
    width: '100%'
  }
})

export default InicioBUSCADOR
