import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import BackArrowSVG from '../components/SVG/BackArrowSVG'
import CorazonSVG from '../components/SVG/CorazonSVG'
import { favorite, getFavorites } from '../redux/actions/events'

const Favoritos = ({ route }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { sport } = route.params

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const toggleFavorite = async (pruebaId) => {
    const data = {
      id: user.id,
      eventId: pruebaId
    }
    await dispatch(favorite(data))
    await dispatch(getFavorites(user.id))
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
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={[styles.backParent, styles.backParentSpaceBlock]}>
          <View style={styles.frameWrapper}>
            <View style={styles.groupParentFlexBox}>
              <Text style={[styles.pruebasDeCiclismo, styles.ciclismoTypo]}>
                {`Pruebas de ${sport[0].title} (${sport.length})`}
              </Text>
            </View>
          </View>
        </View>
        {sport.map((prueba, index) => (
          <View
            key={index}
            style={[styles.backParent, styles.backParentSpaceBlock]}
          >
            <View style={[styles.frameGroup, styles.backParentSpaceBlock]}>
              <View style={[styles.image84Parent, styles.parentFlexBox]}>
                <Image
                  style={styles.image84Icon}
                  contentFit="cover"
                  source={{ uri: prueba.image }}
                />
                <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
                  <View style={styles.ciclismoParent}>
                    <Text style={[styles.ciclismo, styles.ciclismoTypo]}>
                      {prueba.description}
                    </Text>
                    <Pressable onPress={() => toggleFavorite(prueba.id)}>
                      <CorazonSVG isFavorite={true} />
                    </Pressable>
                  </View>
                  <Text style={styles.imGoingToContainer}>
                    <Text style={styles.modalidadMontaaLocalizaci}>
                      -Modalidad: {prueba.modality} {'\n'}
                    </Text>
                    <Text>
                      -Localización: {prueba.location} {'\n'}
                    </Text>
                    <Text>
                      -Fecha de la prueba: {prueba.dateStart} {'\n'}
                    </Text>
                    <Text style={styles.modalidadMontaaLocalizaci}>
                      -Fecha límite de inscripción: {prueba.dateInscription}
                    </Text>
                  </Text>
                  <Text style={styles.imGoingToContainer1}>
                    <Text style={styles.precioDeInscripcin}>
                      {'PRECIO DE INSCRIPCIÓN: '}
                    </Text>
                    <Text
                      style={[styles.text, styles.textTypo]}
                    >{`${prueba.price}€`}</Text>
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
          </View>
        ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between'
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
