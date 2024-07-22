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
  ScrollView,
  TouchableOpacity
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { favorite, getUser } from '../../redux/actions/users'
import { LinearGradient } from 'expo-linear-gradient'
import { visitEvent } from '../../redux/actions/events'
import { getEventByIdRedux } from '../../redux/slices/events.slices'
import { t } from 'i18next'

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
      .then((data) => dispatch(getUser(user.id)))
      .then((response) => navigation.navigate('Favoritos1'))
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View
        style={{
          overflow: 'hidden',
          flex: 1,
          paddingTop: 30,
          paddingHorizontal: 15
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View style={{ flexDirection: 'column' }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: FontSize.size_5xl,
                  fontFamily: FontFamily.inputPlaceholder,
                  fontWeight: '700',
                  color: Color.sportsVioleta,
                  width: '80%'
                }}
              >
                {t('tusfavoritos')}
              </Text>
            </View>
          </View>
          <View style={styles.backParentSpaceBlock}>
            <Text style={[styles.pruebasDeCiclismo, styles.ciclismoTypo]}>
              {`${t('pruebasde')} ${sport[0].title} (${sport.length})`}
            </Text>
          </View>
          {sport.map((prueba, index) => (
            <Pressable
              onPress={() => {
                //  console.log('id evento', prueba.id)
                dispatch(
                  visitEvent({
                    eventId: prueba.id,
                    userId: user.id
                  })
                )
                dispatch(getEventByIdRedux(prueba.id))
                navigation.navigate('PruebasEncontradasDetalle')
              }}
              key={index}
              style={styles.frameGroup}
            >
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.image84Icon}
                  contentFit="cover"
                  source={{ uri: prueba.image }}
                />
                <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
                  <View style={styles.ciclismoParent}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        fontFamily: FontFamily.inputPlaceholder,
                        fontWeight: '700',
                        textAlign: 'left',
                        fontSize: 14,
                        color: Color.sportsNaranja,
                        maxWidth: '90%'
                      }}
                    >
                      {prueba.description}
                    </Text>
                    <TouchableOpacity
                      style={{ position: 'absolute', top: 5, right: 2 }}
                      onPress={() => toggleFavorite(sport[0].id)}
                    >
                      <MaterialCommunityIcons
                        name={'cards-heart'}
                        color="#F25910"
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.imGoingToContainer}>
                    <View
                      style={{ flexDirection: 'row', gap: 4, maxWidth: '70%' }}
                    >
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ color: Color.sportsVioleta, fontSize: 12 }}
                      >
                        {t('modalidad')}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontWeight: 300,
                          fontSize: 12,
                          color: Color.sportsVioleta
                        }}
                      >
                        {prueba.modality}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: 'row', gap: 3, maxWidth: '70%' }}
                    >
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ color: Color.sportsVioleta, fontSize: 12 }}
                      >
                        {t('localizacion')}:
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontWeight: 300,
                          color: Color.sportsVioleta,
                          fontSize: 12
                        }}
                      >
                        {prueba.location}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: 'row', gap: 3, maxWidth: '70%' }}
                    >
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ color: Color.sportsVioleta, fontSize: 12 }}
                      >
                        {t('fechaprueba')}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontWeight: 300,
                          fontSize: 12,
                          color: Color.sportsVioleta,
                          maxWidth: '80%'
                        }}
                      >
                        {`${prueba.dateStart.slice(
                          8,
                          10
                        )}-${prueba.dateStart.slice(
                          5,
                          7
                        )}-${prueba.dateStart.slice(0, 4)}`}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: 'row', gap: 3, maxWidth: '70%' }}
                    >
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ color: Color.sportsVioleta, fontSize: 12 }}
                      >
                        {t('fechalimite')}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 12,
                          fontWeight: 300,
                          color: Color.sportsVioleta,
                          maxWidth: '60%'
                        }}
                      >
                        {`${prueba.dateInscription.slice(
                          8,
                          10
                        )}-${prueba.dateInscription.slice(
                          5,
                          7
                        )}-${prueba.dateInscription.slice(0, 4)}`}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      ...styles.imGoingToContainer1,
                      gap: 3,
                      flexDirection: 'row'
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 700,
                        fontSize: 12,
                        color: Color.sportsVioleta
                      }}
                    >
                      {t('precioinscripcion')}
                    </Text>
                    <Text
                      style={{
                        color: Color.sportsNaranja,
                        fontWeight: 500,
                        fontSize: 12
                      }}
                    >
                      {prueba.price + '€'}
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable style={styles.vectorParent} onPress={toggleModal}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require('../../assets/vector5.png')}
                />
                <Text style={[styles.helloAshfak, styles.ciclismoTypo]}>
                  {t('crearalerta')}
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
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
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
    backgroundColor: '#FFFF',
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 1,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'black'
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
    width: 114,
    height: '100%'
  },
  ciclismo: {
    fontSize: 14,
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
    marginTop: 5,
    textAlign: 'left',
    flexDirection: 'column',
    maxWidth: 230,

    gap: -3,
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
    marginTop: 5,
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
