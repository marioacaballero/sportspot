import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'
import PopupAlerta from '../components/PopupAlerta'
import { Path, Rect, Svg } from 'react-native-svg'

const Favoritos = () => {
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.favoritos}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={styles.tusFavoritos}>TUS FAVORITOS</Text>
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
        <View style={[styles.backParent, styles.backParentSpaceBlock]}>
          <Pressable
            style={styles.backParent}
            // onPress={() => navigation.goBack()}
          >
            {/* <Image
              style={styles.backIcon}
              contentFit="cover"
              source={require('../assets/back.png')}
            /> */}
          </Pressable>
          <View style={styles.frameWrapper}>
            <View style={styles.groupParentFlexBox}>
              <Text style={[styles.pruebasDeCiclismo, styles.ciclismoTypo]}>
                Pruebas de ciclismo (2)
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.backParentSpaceBlock]}>
          <View style={[styles.image84Parent, styles.parentFlexBox]}>
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
                  style={styles.heartIcon}
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
                  {'Fecha límite de inscripción: '}
                </Text>
                <Text style={styles.textTypo}>22 ene 2024</Text>
              </Text>
              <Text style={styles.imGoingToContainer1}>
                <Text style={styles.precioDeInscripcin}>
                  {'PRECIO DE INSCRIPCIÓN: '}
                </Text>
                <Text style={[styles.text, styles.textTypo]}>22€</Text>
              </Text>
            </View>
          </View>
          <Pressable onPress={toggleModal}>
            <View style={[styles.vectorParent, styles.parentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector5.png')}
              />
              <Text style={[styles.helloAshfak, styles.ciclismoTypo]}>
                Crear alerta
              </Text>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
              >
                <TouchableWithoutFeedback onPress={toggleModal}>
                  <View style={styles.modalOverlay}>
                    <View>
                      <PopupAlerta
                        // onClose={toggleModal}
                        setModalVisible={setModalVisible}
                      />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          </Pressable>
        </View>
        <View style={[styles.frameGroup, styles.backParentSpaceBlock]}>
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
                <Text style={styles.textTypo}>{`18 ene 2024
`}</Text>
                <Text style={styles.modalidadMontaaLocalizaci}>
                  {'Fecha límite de inscripción: '}
                </Text>
                <Text style={styles.textTypo}>10 ene 2024</Text>
              </Text>
              <Text style={styles.imGoingToContainer1}>
                <Text style={styles.precioDeInscripcin}>
                  {'PRECIO DE INSCRIPCIÓN: '}
                </Text>
                <Text style={[styles.text, styles.textTypo]}>35€</Text>
              </Text>
            </View>
          </View>
          <Pressable onPress={toggleModal}>
            <View style={[styles.vectorParent, styles.parentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector5.png')}
              />
              <Text style={[styles.helloAshfak, styles.ciclismoTypo]}>
                Crear alerta
              </Text>
              {/* <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
              >
                <PopupAlerta
                  onClose={toggleModal}
                  setModalVisible={setModalVisible}
                />
              </Modal> */}
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    // left: '50%',
    // marginLeft: -180
  },
  ciclismoTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left'
  },
  backParentSpaceBlock: {
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
  textTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  frameParentPosition1: {
    top: 0,
    position: 'absolute'
  },
  tusFavoritos: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    // width: 186,
    // textAlign: 'left',
    color: Color.sportsVioleta
  },
  backIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden'
  },
  pruebasDeCiclismo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  groupParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameWrapper: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  backParent: {
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
    width: 14,
    height: 14,
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
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1
  },
  vectorIcon: {
    width: 15,
    height: 16
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    marginLeft: 10,
    textAlign: 'left'
  },
  vectorParent: {
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
    paddingTop: 30,
    paddingHorizontal: 15,
    // paddingHorizontal: Padding.p_xl,
    justifyContent: 'center'
    // top: 0,
    // position: 'absolute'
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
  modalOverlay: {
    // flex: 1,
    // top: -100,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoritos: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Favoritos