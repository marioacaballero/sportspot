import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  Padding,
  FontSize,
  Color,
  Border
} from '../../GlobalStyles'
import PopupAlerta from '../../components/PopupAlerta'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import CorazonSVG from '../../components/SVG/CorazonSVG'
import { favorite } from '../../redux/actions/events'

const Favoritos = ({ route }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { sport } = route.params

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const toggleFavorite = (pruebaId) => {
    const data = {
      id: user.id,
      eventId: pruebaId
    }
    dispatch(favorite(data))
    navigation.navigate('Favoritos1')
  }

  return (
    <ScrollView style={styles.favoritos} showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <Text style={styles.tusFavoritos}>TUS FAVORITOS</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable>
      </View>
      <View style={styles.backParentSpaceBlock}>
        <Text style={[styles.pruebasDeCiclismo, styles.ciclismoTypo]}>
          {`Pruebas de ${sport[0].title} (${sport.length})`}
        </Text>
      </View>
      {sport.map((prueba, index) => (
        <View key={index} style={styles.frameGroup}>
          <View style={styles.parentFlexBox}>
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
                <CorazonSVG
                  isFavorite={true}
                  handle={() => toggleFavorite(sport[0].id)}
                />
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
          <Pressable style={styles.vectorParent} onPress={toggleModal}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../../assets/vector5.png')}
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
          </Pressable>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ciclismoTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left'
  },
  backParentSpaceBlock: {
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row'
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1
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
  tusFavoritos: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  pruebasDeCiclismo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  frameWrapper: {
    marginLeft: 10,
    justifyContent: 'center'
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  frameGroup: {
    justifyContent: 'center',
    marginTop: 25,
    alignItems: 'center'
  },
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoritos: {
    backgroundColor: Color.blanco,
    overflow: 'hidden',
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Favoritos
