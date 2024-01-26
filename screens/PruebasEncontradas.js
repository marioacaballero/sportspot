import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'
import PopupOrdenarPor from '../components/PopupOrdenarPor'
import PruebasEncontradasFiltros from './PruebasEncontradasFiltros'

const PruebasEncontradas = () => {
  const navigation = useNavigation()

  const [modalOrder, setModalOrder] = useState(false)
  const [modalFilter, setModalFilter] = useState(false)

  const toggleModalOrder = () => {
    setModalOrder(true)
  }

  const toggleModalFilter = () => {
    setModalFilter(true)
  }

  return (
    <ScrollView style={styles.pruebasEncontradas}>
      <View style={styles.pruebasEncontradasParent}>
        <Text style={[styles.pruebasEncontradas1, styles.ene2024Typo]}>
          {'PRUEBAS ENCONTRADAS'}
        </Text>
        <View style={[styles.cilarrowTopParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.cilarrowTopIcon}
            contentFit="cover"
            source={require('../assets/cilarrowtop1.png')}
          />
          <Text
            style={[styles.badajozCilcismo22, styles.filtrosTypo]}
            onPress={() => navigation.navigate('InicioDeportista')}
          >
            Badajoz, cilcismo, 22 ene.
          </Text>
        </View>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <Pressable style={styles.filtrosParent} onPress={toggleModalFilter}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalFilter}
              >
                <PruebasEncontradasFiltros setModalVisible={setModalFilter} />
              </Modal>
              <Text style={styles.filtrosTypo}>Filtros</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-7189.png')}
              />
            </Pressable>
            <View style={styles.filtrosParent}>
              <Pressable onPress={toggleModalOrder}>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalOrder}
                >
                  <PopupOrdenarPor setModalVisible={setModalOrder} />
                </Modal>
                <Text style={styles.filtrosTypo}>Ordenar por</Text>
              </Pressable>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-7190.png')}
              />
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.unsplashon4qwhhjcemParentShadowBox}>
              <Image
                style={styles.unsplashon4qwhhjcemIcon}
                contentFit="cover"
                source={require('../assets/unsplashon4qwhhjcem2.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.frameGroupFlexBox}>
                  <Text style={[styles.senderismo, styles.textTypo]}>
                    Senderismo
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
                    onPress={() =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    }
                  >
                    {
                      'Modalidad: Pista                               Localización: Mérida, Badajor.                                                        Fecha de la prueba: '
                    }
                  </Text>
                  <Text style={styles.ene2024Typo}>
                    {'25 ene 2024                    '}
                  </Text>
                  <Text style={styles.modalidadPistaLocalizacin}>
                    {'Plazo límite de inscripción: '}
                  </Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </View>
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
                <View style={styles.frameGroupFlexBox}>
                  <Text
                    style={[styles.senderismo, styles.textTypo]}
                    onPress={() =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    }
                  >
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
                    onPress={() =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    }
                  >
                    {
                      'Modalidad: Pista                               Localización: Mérida, Badajor.                                                        Fecha de la prueba: '
                    }
                  </Text>
                  <Text style={styles.ene2024Typo}>
                    {'25 ene 2024                    '}
                  </Text>
                  <Text style={styles.modalidadPistaLocalizacin}>
                    {'Plazo límite de inscripción: '}
                  </Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
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
                source={require('../assets/unsplashon4qwhhjcem4.png')}
              />
              <View style={styles.frameView}>
                <View style={styles.frameGroupFlexBox}>
                  <Text style={[styles.senderismo, styles.textTypo]}>
                    CrossFit
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
                    onPress={() =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    }
                  >
                    {
                      'Modalidad: Pista                               Localización: Mérida, Badajor.                                                        Fecha de la prueba: '
                    }
                  </Text>
                  <Text style={styles.ene2024Typo}>
                    {'25 ene 2024                    '}
                  </Text>
                  <Text style={styles.modalidadPistaLocalizacin}>
                    {'Plazo límite de inscripción: '}
                  </Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
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
                <View style={styles.frameGroupFlexBox}>
                  <Text
                    style={[styles.senderismo, styles.textTypo]}
                    onPress={() =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    }
                  >
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
                    onPress={() =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    }
                  >
                    {
                      'Modalidad: Pista                               Localización: Mérida, Badajor.                                                        Fecha de la prueba: '
                    }
                  </Text>
                  <Text style={styles.ene2024Typo}>
                    {'25 ene 2024                    '}
                  </Text>
                  <Text style={styles.modalidadPistaLocalizacin}>
                    {'Plazo límite de inscripción: '}
                  </Text>
                  <Text style={styles.ene2024Typo}>22 ene 2024</Text>
                </Text>
                <Text
                  style={[
                    styles.imGoingToContainer1,
                    styles.goingContainerFlexBox
                  ]}
                >
                  <Text style={styles.precioDeInscripcin}>
                    {'PRECIO DE INSCRIPCIÓN: '}
                  </Text>
                  <Text style={styles.textTypo}>22€</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ene2024Typo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  parentSpaceBlock: {
    marginTop: 20,
    alignItems: 'center'
  },
  filtrosTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  frameGroupFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  textTypo: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
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
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  menInferiorPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  pruebasEncontradas1: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta,
    width: 180
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
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    padding: Padding.p_3xs,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  frameChild: {
    width: 10,
    height: 10,
    marginTop: 5
  },
  filtrosParent: {
    alignItems: 'center'
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0
  },
  unsplashon4qwhhjcemIcon: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    height: 132
  },
  senderismo: {
    fontSize: FontSize.size_sm,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'left',
    flex: 1
  },
  likeSpotsport: {
    height: 20,
    overflow: 'hidden'
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
  frameContainer: {
    marginTop: 8,
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  frameParent: {
    width: 320
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
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
  },
  pruebasEncontradas: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default PruebasEncontradas
