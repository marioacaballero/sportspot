import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Border, Padding } from '../GlobalStyles'

const PruebasEncontradasFiltros = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.pruebasEncontradasFiltros}>
      <View style={styles.pruebasEncontradasParent}>
        <Text style={[styles.pruebasEncontradas, styles.ciclsmoTypo]}>{`PRUEBAS
ENCONTRADAS`}</Text>
        <View style={[styles.cilarrowTopParent, styles.parentSpaceBlock3]}>
          <Image
            style={styles.cilarrowTopIcon}
            contentFit="cover"
            source={require('../assets/cilarrowtop1.png')}
          />
          <Text style={[styles.badajozCilcismo22, styles.filtrosTypo1]}>
            Badajoz, cilcismo, 22 ene.
          </Text>
        </View>
        <View style={styles.parentSpaceBlock3}>
          <View style={styles.frameGroup}>
            <View style={styles.filtrosParent}>
              <Text style={[styles.filtros, styles.filtrosTypo1]}>Filtros</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-71891.png')}
              />
            </View>
            <Pressable
              style={styles.ordenarPorParent}
              onPress={() => navigation.navigate('PruebasEncontradasOrdenar')}
            >
              <Text style={[styles.filtros, styles.filtrosTypo1]}>
                Ordenar por
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-71901.png')}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <View
              style={[styles.tuPresupuestoParent, styles.parentFrameFlexBox]}
            >
              <Text style={[styles.tuPresupuesto, styles.filtrosTypo1]}>
                Tu presupuesto:
              </Text>
              <Image
                style={styles.charmcrossIcon}
                contentFit="cover"
                source={require('../assets/charmcross.png')}
              />
            </View>
            <View style={[styles.frameView, styles.frameSpaceBlock7]}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require('../assets/frame-1547756008.png')}
              />
              <View style={[styles.lineParent, styles.linePosition]}>
                <View style={[styles.lineView, styles.lineViewLayout]} />
                <Text style={[styles.text, styles.textTypo4]}>0 €</Text>
              </View>
              <View style={[styles.lineGroup, styles.linePosition]}>
                <View style={[styles.lineView, styles.lineViewLayout]} />
                <Text style={[styles.text, styles.textTypo4]}>1000 €</Text>
              </View>
              <View style={styles.parent}>
                <Text style={[styles.text2, styles.textTypo4]}>55 €</Text>
                <View style={[styles.frameChild2, styles.lineViewLayout]} />
              </View>
              <Image
                style={[styles.ellipseIcon, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require('../assets/ellipse-7193.png')}
              />
              <Image
                style={[styles.frameChild3, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require('../assets/ellipse-7193.png')}
              />
            </View>
            <View style={[styles.frameParent1, styles.frameSpaceBlock7]}>
              <View style={styles.frameParent2}>
                <View style={styles.parentFrameFlexBox}>
                  <View style={styles.path3391Parent}>
                    <Image
                      style={styles.path3391Icon}
                      contentFit="cover"
                      source={require('../assets/path-3391.png')}
                    />
                    <Text style={[styles.ciclsmo, styles.ciclsmoTypo]}>
                      Ciclísmo
                    </Text>
                  </View>
                  <View style={styles.toggle}>
                    <View
                      style={[styles.toggleChild, styles.togglePosition1]}
                    />
                    <Image
                      style={[styles.toggleItem, styles.toggleLayout]}
                      contentFit="cover"
                      source={require('../assets/ellipse-2102.png')}
                    />
                  </View>
                </View>
                <View style={styles.frameParent4}>
                  <View
                    style={[styles.carreteraParent, styles.parentFrameFlexBox]}
                  >
                    <Text style={[styles.carretera, styles.filtrosTypo1]}>
                      Carretera
                    </Text>
                    <View style={styles.toggle}>
                      <View
                        style={[styles.toggleInner, styles.togglePosition1]}
                      />
                      <Image
                        style={[styles.toggleChild1, styles.toggleLayout]}
                        contentFit="cover"
                        source={require('../assets/ellipse-210.png')}
                      />
                    </View>
                  </View>
                  <View style={[styles.pistaParent, styles.parentFrameFlexBox]}>
                    <Text style={[styles.carretera, styles.filtrosTypo1]}>
                      Pista
                    </Text>
                    <View style={styles.toggle}>
                      <View
                        style={[styles.toggleInner, styles.togglePosition1]}
                      />
                      <Image
                        style={[styles.toggleChild1, styles.toggleLayout]}
                        contentFit="cover"
                        source={require('../assets/ellipse-2102.png')}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.montaaParent, styles.parentFrameFlexBox]}
                  >
                    <Text style={[styles.carretera, styles.filtrosTypo1]}>
                      Montaña
                    </Text>
                    <View style={styles.toggle}>
                      <View
                        style={[styles.toggleInner, styles.togglePosition1]}
                      />
                      <Image
                        style={[styles.toggleChild1, styles.toggleLayout]}
                        contentFit="cover"
                        source={require('../assets/ellipse-2103.png')}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.ciclocrssParent, styles.parentFrameFlexBox]}
                  >
                    <Text style={[styles.carretera, styles.filtrosTypo1]}>
                      Ciclocróss
                    </Text>
                    <View style={styles.toggle}>
                      <View
                        style={[styles.toggleInner, styles.togglePosition1]}
                      />
                      <Image
                        style={[styles.toggleChild1, styles.toggleLayout]}
                        contentFit="cover"
                        source={require('../assets/ellipse-210.png')}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.ciclocrssParent, styles.parentFrameFlexBox]}
                  >
                    <Text style={[styles.carretera, styles.filtrosTypo1]}>
                      Trial
                    </Text>
                    <View style={styles.toggle}>
                      <View
                        style={[styles.toggleInner, styles.togglePosition1]}
                      />
                      <Image
                        style={[styles.toggleChild1, styles.toggleLayout]}
                        contentFit="cover"
                        source={require('../assets/ellipse-210.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                <View style={styles.path3391Parent}>
                  <Image
                    style={styles.path3391Icon1}
                    contentFit="cover"
                    source={require('../assets/path-33911.png')}
                  />
                  <Text style={[styles.ciclsmo, styles.ciclsmoTypo]}>
                    Senderismo/caminata
                  </Text>
                </View>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition1]} />
                  <Image
                    style={[styles.toggleChild1, styles.toggleLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-2102.png')}
                  />
                </View>
              </View>
              <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                <View style={styles.path3391Parent}>
                  <Image
                    style={styles.path3391Icon1}
                    contentFit="cover"
                    source={require('../assets/path-33911.png')}
                  />
                  <Text style={[styles.ciclsmo, styles.ciclsmoTypo]}>
                    Carreras en ruta
                  </Text>
                </View>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition1]} />
                  <Image
                    style={[styles.toggleChild1, styles.toggleLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-2102.png')}
                  />
                </View>
              </View>
              <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                <View style={styles.path3391Parent}>
                  <Image
                    style={styles.path3391Icon1}
                    contentFit="cover"
                    source={require('../assets/path-33911.png')}
                  />
                  <Text style={[styles.ciclsmo, styles.ciclsmoTypo]}>
                    Decatlón
                  </Text>
                </View>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition1]} />
                  <Image
                    style={[styles.toggleChild1, styles.toggleLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-2102.png')}
                  />
                </View>
              </View>
              <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                <View style={styles.path3391Parent}>
                  <Image
                    style={styles.path3391Icon1}
                    contentFit="cover"
                    source={require('../assets/path-33911.png')}
                  />
                  <Text style={[styles.ciclsmo, styles.ciclsmoTypo]}>
                    Triatlón
                  </Text>
                </View>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition1]} />
                  <Image
                    style={[styles.toggleChild1, styles.toggleLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-2102.png')}
                  />
                </View>
              </View>
              <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                <View style={styles.path3391Parent}>
                  <Image
                    style={styles.path3391Icon1}
                    contentFit="cover"
                    source={require('../assets/path-33911.png')}
                  />
                  <Text style={[styles.ciclsmo, styles.ciclsmoTypo]}>
                    CrossFit
                  </Text>
                </View>
                <View style={styles.toggle}>
                  <View style={[styles.toggleInner, styles.togglePosition1]} />
                  <Image
                    style={[styles.toggleChild1, styles.toggleLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-2102.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menInferior, styles.menInferiorPosition4]}>
        <View style={[styles.groupParent, styles.menInferiorPosition4]}>
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
            style={[styles.vector, styles.frameLayout16]}
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
            style={[styles.container, styles.frameLayout16]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-1547756022.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout16]}
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
  )
}

const styles = StyleSheet.create({
  ciclsmoTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    fontWeight: '700'
  },
  parentSpaceBlock3: {
    marginTop: 20,
    width: 320,
    alignItems: 'center'
  },
  filtrosTypo1: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  parentFrameFlexBox: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  frameSpaceBlock7: {
    marginTop: 12,
    alignSelf: 'stretch'
  },
  linePosition: {
    top: 39,
    alignItems: 'center',
    position: 'absolute'
  },
  lineViewLayout: {
    height: 7,
    width: 2,
    borderRightWidth: 2,
    borderStyle: 'solid'
  },
  textTypo4: {
    letterSpacing: -1,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    top: 26,
    position: 'absolute'
  },
  togglePosition1: {
    borderRadius: Border.br_xl,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  toggleLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    position: 'absolute',
    overflow: 'hidden'
  },
  menInferiorPosition4: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameLayout16: {
    height: 20,
    marginLeft: 47
  },
  pruebasEncontradas: {
    fontSize: FontSize.size_5xl
  },
  cilarrowTopIcon: {
    width: 25,
    height: 25,
    overflow: 'hidden'
  },
  badajozCilcismo22: {
    marginLeft: 13,
    fontWeight: '700',
    fontSize: FontSize.inputPlaceholder_size
  },
  cilarrowTopParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    padding: Padding.p_3xs,
    flexDirection: 'row'
  },
  filtros: {
    fontWeight: '700',
    fontSize: FontSize.inputPlaceholder_size
  },
  frameChild: {
    marginTop: 5,
    height: 10,
    width: 10
  },
  filtrosParent: {
    alignItems: 'center'
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
  tuPresupuesto: {
    alignSelf: 'stretch',
    fontWeight: '700',
    fontSize: FontSize.inputPlaceholder_size,
    flex: 1
  },
  charmcrossIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden'
  },
  tuPresupuestoParent: {
    alignItems: 'flex-end'
  },
  frameInner: {
    top: 34,
    left: 14,
    width: 268,
    height: 1,
    position: 'absolute'
  },
  lineView: {
    borderColor: Color.sportsVioleta
  },
  text: {
    color: Color.sportsVioleta,
    letterSpacing: -1,
    fontSize: FontSize.size_sm
  },
  lineParent: {
    left: -1
  },
  lineGroup: {
    left: 242
  },
  text2: {
    color: Color.sportsNaranja
  },
  frameChild2: {
    borderColor: Color.sportsNaranja
  },
  parent: {
    top: 5,
    left: 105,
    alignItems: 'center',
    position: 'absolute'
  },
  ellipseIcon: {
    left: 112
  },
  frameChild3: {
    left: 2
  },
  frameView: {
    height: 61
  },
  path3391Icon: {
    height: 5,
    width: 10
  },
  ciclsmo: {
    fontSize: FontSize.size_mid,
    marginLeft: 5
  },
  path3391Parent: {
    alignItems: 'center',
    flexDirection: 'row'
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
  carretera: {
    fontWeight: '100'
  },
  toggleInner: {
    backgroundColor: Color.gris
  },
  toggleChild1: {
    right: '44.67%',
    left: '7.67%'
  },
  carreteraParent: {
    alignItems: 'center'
  },
  pistaParent: {
    marginTop: 8
  },
  montaaParent: {
    alignItems: 'flex-end',
    marginTop: 8
  },
  ciclocrssParent: {
    marginTop: 8,
    alignItems: 'center'
  },
  frameParent4: {
    paddingLeft: Padding.p_11xl,
    marginTop: 11,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frameParent2: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  path3391Icon1: {
    width: 5,
    height: 10
  },
  frameParent5: {
    marginTop: 15
  },
  frameParent1: {
    alignItems: 'flex-end'
  },
  frameContainer: {
    borderRadius: Border.br_5xs,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: -2,
      height: -2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingVertical: Padding.p_mini,
    marginTop: 8,
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.blanco
  },
  pruebasEncontradasParent: {
    paddingTop: Padding.p_48xl,
    paddingHorizontal: Padding.p_xl,
    left: 0,
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
    height: 65,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.gris,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
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
    height: 75
  },
  pruebasEncontradasFiltros: {
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
  }
})

export default PruebasEncontradasFiltros
