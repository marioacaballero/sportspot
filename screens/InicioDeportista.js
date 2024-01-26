import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  Image,
  Modal
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'
import InicioPREMIUM from './InicioPREMIUM'
import InicioNotificaciones from './InicioNotificaciones'
import InicioBUSCADOR from './InicioBUSCADOR'

const InicioDeportista = () => {
  const navigation = useNavigation()

  const [modalPremium, setModalPremium] = useState(false)
  const [modalNotifications, setModalNotifications] = useState(false)

  const [mostrarInicioBuscador, setMostrarInicioBuscador] = useState(false)

  const handleBuscarPress = () => {
    setMostrarInicioBuscador(true)
  }

  const toggleModalPremium = () => {
    setModalPremium(!modalPremium)
  }

  const toggleModalNotifications = () => {
    setModalNotifications(!modalNotifications)
  }

  return (
    <ScrollView style={styles.inicioDeportista}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.helloAshfakParent, styles.frameGroupFlexBox]}>
          <Text style={[styles.helloAshfak, styles.imGoingToTypo]}>INICIO</Text>
          <View style={styles.groupParent}>
            <Pressable style={styles.wrapper} onPress={toggleModalPremium}>
              <Image
                style={styles.icbaselineSearchIcon}
                contentFit="cover"
                source={require('../assets/group-11712766982.png')}
              />
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalPremium}
              >
                <InicioPREMIUM setModalVisible={setModalPremium} />
              </Modal>
            </Pressable>

            <Pressable
              style={styles.materialSymbolsnotifications}
              onPress={toggleModalNotifications}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/materialsymbolsnotifications.png')}
              />
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalNotifications}
              >
                <InicioNotificaciones setModalVisible={setModalNotifications} />
              </Modal>
            </Pressable>
          </View>
        </View>

        {mostrarInicioBuscador ? (
          <InicioBUSCADOR setMostrarInicioBuscador={setMostrarInicioBuscador} />
        ) : (
          <View style={styles.buscarWrapper}>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={handleBuscarPress}
            >
              <Image
                style={styles.icbaselineSearchIcon}
                contentFit="cover"
                source={require('../assets/icbaselinesearch.png')}
              />
              <Text style={styles.buscar}>Buscar</Text>
            </Pressable>
          </View>
        )}

        <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
          <Pressable
            style={styles.helloAshfakGroup}
            onPress={() => navigation.navigate('InicioDeportista')}
          >
            <Text style={[styles.helloAshfak1, styles.helloTypo]}>
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
            <Text style={[styles.helloAshfak2, styles.helloTypo]}>
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
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.helloAshfak1, styles.helloTypo]}>
              Últimas horas de inscripción
            </Text>
            <ScrollView style={styles.frameParent1} horizontal={true}>
              <View style={styles.image94ParentShadowBox1}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-941.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo, styles.goingTypo]}>
                    Torneo de baloncesto
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min, styles.minClr]}>
                      {'Lorem ipsum dolor sit amet.'}
                    </Text>
                    <Text style={[styles.min1, styles.minTypo1]}>
                      ¡La inscripción acaba en 10 horas!
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-942.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo, styles.goingTypo]}>
                    Ciclismo
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min, styles.minClr]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min1, styles.minTypo1]}>
                      ¡La inscripción acaba en 10 horas!
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-943.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo]}>
                    Ciclismo
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min4, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min4, styles.minTypo]}>
                      ¡La inscripción acaba en 10 horas!
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.helloAshfak1, styles.helloTypo]}>
              Últimas pruebas añadidas
            </Text>
            <ScrollView style={styles.frameParent1} horizontal={true}>
              <View style={styles.image94ParentShadowBox1}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-944.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo, styles.goingTypo]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min, styles.minClr]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min, styles.minClr]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-945.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo, styles.goingTypo]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min, styles.minClr]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min, styles.minClr]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-943.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.helloAshfak1, styles.helloTypo]}>
              Resultados de las útlimas pruebas
            </Text>
            <ScrollView style={styles.frameParent1} horizontal={true}>
              <View style={styles.image94ParentShadowBox1}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-943.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-944.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.image94ParentShadowBox}>
                <Image
                  style={[styles.image94Icon, styles.image94IconLayout]}
                  contentFit="cover"
                  source={require('../assets/image-945.png')}
                />
                <View
                  style={[
                    styles.imGoingToShakeYParent,
                    styles.frameGroupSpaceBlock
                  ]}
                >
                  <Text style={[styles.imGoingTo2, styles.minTypo]}>
                    Lorem ipsum
                  </Text>
                  <View style={styles.minParent}>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet
                    </Text>
                    <Text style={[styles.min10, styles.minTypo]}>
                      Lorem ipsum dolor sit amet.{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  // image94IconLayout: {
  //   width: '100%',
  //   overflow: 'hidden'
  // },
  frameParentFlexBox: {
    // paddingHorizontal: Padding.p_xl,
    // justifyContent: 'center',
    // alignItems: 'center',
    // // width: 360,
    // width: '100%',
    // left: 0,
    // position: 'absolute'
  },
  frameGroupFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  imGoingToTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frameGroupSpaceBlock: {
    paddingVertical: 0,
    alignSelf: 'stretch'
  },
  helloTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  goingTypo: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja
  },
  minClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs
  },
  minTypo1: {
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  minTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta
  },
  wrapper: {
    height: 22,
    width: 29
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
  buscar: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
  },
  buscarWrapper: {
    // borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    // // width: 320,
    width: '100%',
    // paddingLeft: Padding.p_31xl,
    // paddingTop: Padding.p_3xs,
    // paddingRight: Padding.p_3xs,
    // paddingBottom: Padding.p_3xs,
    // marginTop: 19,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfak1: {
    color: Color.sportsVioleta
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
    color: Color.violeta3
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    marginTop: 19,
    justifyContent: 'space-between',
    flexDirection: 'row'
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
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  min: {
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  min1: {
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  minParent: {
    marginTop: 2,
    alignSelf: 'stretch'
  },
  imGoingToShakeYParent: {
    paddingHorizontal: Padding.p_8xs,
    marginTop: 5,
    height: 44
  },
  image94ParentShadowBox1: {
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
  image94ParentShadowBox: {
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
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja
  },
  min4: {
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  frameParent1: {
    width: 328,
    marginTop: 10,
    flexDirection: 'row'
  },
  min10: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs
  },
  helloAshfakParent1: {
    marginTop: 19
  },
  frameContainer: {
    // height: 549,
    display: 'flex',
    width: '100%',

    marginTop: 19,
    justifyContent: 'center'
  },
  frameParent: {
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_6xl,
    top: 0,
    height: '100%'
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
    flexDirection: 'row'
  },
  icbaselineSearchIcon: {
    // marginTop: -278,
    // marginLeft: -152,
    // top: '50%',
    // left: '50%',
    height: 29,
    width: 29
    // position: 'absolute',
    // overflow: 'hidden'
  },
  inicioDeportista: {
    flex: 1,

    backgroundColor: Color.blanco,
    width: '100%',
    zIndex: 0
  }
})

export default InicioDeportista
