import React, { useState, useCallback, useEffect, useRef } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border
} from '../../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUser,
  updateUser,
  updateUserAvatar
} from '../../redux/actions/users'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import CalendarOneDay from '../../components/CalendarOneDay'
import { setDateStart } from '../../redux/slices/events.slices'
import { useTranslation } from 'react-i18next'
import DatosDeportista from '../../components/DatosDeportista'
import AsyncStorage from '@react-native-async-storage/async-storage'

const EditarPerfil = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  // const { dateStart } = useSelector((state) => state.events)
  const { user } = useSelector((state) => state.users)

  const [topContainerVisible, setTopContainerVisible] = useState(false)
  const [preferencesModalVisible, setPreferencesModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [valuesUser, setValuesUser] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    genres: user?.genres || '',
    birthDate: user?.birthDate || '',
    address: user?.address || '',
    phoneNumber: user?.phoneNumber || ''
  })

  // useEffect(() => {
  //   setValuesUser((prevValues) => ({
  //     ...prevValues,
  //     birthDate: dateStart || ''
  //   }))
  // }, [dateStart])

  const settingValuesUser = (field, value) => {
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const scrollViewRef = useRef(null)

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true })
    }
  }, [])

  const openTopContainer = useCallback(() => {
    setTopContainerVisible(true)
  }, [])

  const closeTopContainer = useCallback(() => {
    setTopContainerVisible(false)
  }, [])

  const onSubmit = async () => {
    const data = {
      id: user.id,
      valuesUser
    }
    await dispatch(updateUser(data))
    dispatch(getUser(user.id))
    dispatch(setDateStart(''))
    navigation.navigate('TuPerfil')
  }

  const getUserPreferencesState = async () => {
    console.log('Getting user pref state...')
    const state = await AsyncStorage.getItem('modalSport')
    console.log('state', state)
    console.log('user:', user)
    if (!state || state !== 'alreadyShowed') {
      if (user && !user?.preferences?.location) {
        setPreferencesModalVisible(true)
      }
    }
  }

  useEffect(() => {
    getUserPreferencesState()
  }, [])

  const uploadImage = async () => {
    let result = {}
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    })

    setSelectedImage(`data:image/jpeg;base64,${result?.assets[0].base64}`)
    const data = {
      id: user.id,
      avatar: `data:image/jpeg;base64,${result?.assets[0].base64}`
    }
    dispatch(updateUserAvatar(data))
    dispatch(getUser(user.id))
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {preferencesModalVisible && (
        <DatosDeportista
          modalSport={preferencesModalVisible}
          // setModalSport={setModalSport}
          setModalState={setPreferencesModalVisible}
        />
      )}
      <ScrollView ref={scrollViewRef}>
        <View style={styles.editarPerfil}>
          <View style={styles.topContainer}>
            <Text
              style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}
            >
              {t('gestionatucuentaM')}
            </Text>
            {/* <Pressable onPress={() => navigation.goBack()}>
              <BackArrowSVG />
            </Pressable> */}
          </View>
          <View style={styles.editarPerfilInner}>
            <View
              style={[styles.editarPerfilWrapper, styles.groupParentFlexBox]}
            >
              <Text style={styles.editarPerfil1}>{t('editarperfil')}</Text>
            </View>
          </View>
          <Pressable
            style={styles.unsplashn6gnca77urcWrapper}
            onPress={() => uploadImage()}
          >
            <Image
              style={styles.unsplashn6gnca77urcIcon}
              contentFit="cover"
              source={
                selectedImage
                  ? { uri: selectedImage }
                  : user?.avatar
                  ? { uri: user.avatar }
                  : require('../../assets/unsplashn6gnca77urc.png')
              }
            />
            <View style={styles.editar}>
              <Text style={styles.editarText}>{t('editar')}</Text>
            </View>
          </Pressable>
          <View style={styles.frameParent}>
            <View style={styles.card1Wrapper}>
              <View style={styles.card1}>
                <View style={{ ...styles.datosPersonalesWrapper }}>
                  <Image
                    style={styles.userIcon}
                    contentFit="cover"
                    source={require('../../assets/user.png')}
                  />
                  <Text
                    style={[styles.datosPersonales, styles.card1ChildPosition]}
                  >
                    {t('datospersonales')}
                  </Text>
                </View>
                <View style={[styles.inputParent, styles.inputFlexBox]}>
                  <View style={styles.input}>
                    <View
                      style={[styles.inputContent, styles.inputContentFlexBox]}
                    >
                      <Text style={[styles.label, styles.labelFlexBox]}>
                        {t('nombre')}
                      </Text>
                      <TextInput
                        style={{
                          fontWeight: '700',
                          color: Color.sportsVioleta
                        }}
                        placeholder={user.name || 'Nombre'}
                        placeholderTextColor={
                          user.name ? Color.sportsVioleta : 'gray'
                        }
                        value={valuesUser?.name}
                        onChangeText={(value) =>
                          settingValuesUser('name', value)
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.input1}>
                    <View
                      style={[styles.inputContent, styles.inputContentFlexBox]}
                    >
                      <Text style={[styles.label, styles.labelFlexBox]}>
                        {t('apellido')}
                      </Text>
                      <TextInput
                        style={{
                          fontWeight: '700',
                          color: Color.sportsVioleta
                        }}
                        placeholder={user?.lastName || 'Apellido'}
                        placeholderTextColor={
                          user.lastName ? Color.sportsVioleta : 'gray'
                        }
                        value={valuesUser?.lastName}
                        onChangeText={(value) =>
                          settingValuesUser('lastName', value)
                        }
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-around'
                    }}
                  >
                    <View style={[styles.input2, styles.inputBorder]}>
                      <View
                        style={[
                          styles.inputContent,
                          styles.inputContentFlexBox
                        ]}
                      >
                        <Text style={[styles.label, styles.labelFlexBox]}>
                          {t('genero')}
                        </Text>
                        <Picker
                          style={styles.inputGenre}
                          dropdownIconColor={'white'}
                          mode={'dropdown'}
                          selectedValue={''}
                          onValueChange={(itemValue, itemIndex) =>
                            settingValuesUser('genres', itemValue)
                          }
                        >
                          <Picker.Item label={t('hombre')} value="Hombre" />
                          <Picker.Item label={t('mujer')} value="Mujer" />
                          <Picker.Item label={t('otros')} value="Otros" />
                        </Picker>
                        <Text
                          style={{
                            backgroundColor: '#fff',
                            fontWeight: '700',
                            color: Color.sportsVioleta
                          }}
                        >
                          {t(
                            valuesUser.genres.toLowerCase().length > 0
                              ? valuesUser.genres.toLowerCase()
                              : 'selecciona'
                          )}
                        </Text>
                      </View>
                    </View>
                    <Pressable style={[styles.top, styles.inputBorderDate]}>
                      <View
                        style={[
                          styles.inputContent3,
                          styles.groupParentFlexBox
                        ]}
                      >
                        <View style={[styles.inputContentDate]}>
                          <Text style={[styles.label, styles.labelFlexBox]}>
                            {t('nacimiento')}
                          </Text>
                          <TextInput
                            placeholder={user?.birthDate || '12/12/2000'}
                            placeholderTextColor={
                              user?.birthDate
                                ? Color.sportsVioleta
                                : Color.sportsVioleta
                            }
                            style={{
                              color: Color.sportsVioleta,
                              fontWeight: '700',
                              paddingBottom: 7
                            }}
                            value={valuesUser?.birthDate || '2020/12/12'}
                            // onChangeText={(value) =>
                            //   settingValuesUser('fechaNacimiento', value)
                            // }
                            editable={false}
                          />
                        </View>
                        <Pressable onPress={openTopContainer}>
                          <Image
                            style={styles.iconlylightcalendar}
                            contentFit="cover"
                            source={require('../../assets/iconlylightcalendar.png')}
                          />
                        </Pressable>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card11Wrapper}>
              <View style={styles.card11}>
                <View style={styles.datosDeContactoWrapper}>
                  <Image
                    style={[styles.addressbookIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require('../../assets/addressbook.png')}
                  />
                  <Text
                    style={[styles.datosPersonales, styles.card1ChildPosition]}
                  >
                    {t('datoscontacto')}
                  </Text>
                </View>
              </View>
              <View style={[styles.inputGroup, styles.inputFlexBox2]}>
                <View style={styles.input}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      {t('email')}
                    </Text>
                    <Text
                      style={{
                        color: user.email ? Color.sportsVioleta : 'gray',
                        fontWeight: '700'
                      }}
                    >
                      {user?.email || 'ejemplo@gmail.com'}
                    </Text>
                  </View>
                </View>
                <View style={styles.inputCel}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      {t('telefono')}
                    </Text>
                    <TextInput
                      style={{ fontWeight: '700', color: Color.sportsVioleta }}
                      placeholder={user?.phoneNumber || t('escribeaca')}
                      placeholderTextColor={
                        user.phoneNumber ? Color.sportsVioleta : 'gray'
                      }
                      value={valuesUser.phoneNumber}
                      onChangeText={(value) =>
                        settingValuesUser('phoneNumber', value)
                      }
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={[styles.inputAdress, styles.inputBorder]}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      {t('direccion')}
                    </Text>
                    <TextInput
                      style={{ fontWeight: '700', color: Color.sportsVioleta }}
                      placeholder={user?.address || t('escribeaca')}
                      placeholderTextColor={
                        user.address ? Color.sportsVioleta : 'gray'
                      }
                      value={valuesUser.address}
                      onChangeText={(value) =>
                        settingValuesUser('address', value)
                      }
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.helloAshfakWrapper}
                  onPress={onSubmit}
                >
                  <Text style={[styles.helloAshfak, styles.kmTypo]}>
                    {t('actualizar')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Modal animationType="fade" transparent visible={topContainerVisible}>
          <View style={styles.topContainerOverlay}>
            <Pressable
              style={styles.topContainerBg}
              onPress={closeTopContainer}
            />
            <CalendarOneDay
              setValuesUser={setValuesUser}
              valuesUser={valuesUser}
              onClose={closeTopContainer}
              start={true}
              suscription={false}
            />
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  labelFlexBox: {
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  helloAshfak: {
    color: Color.blanco,
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center'
  },
  topContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  groupParentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card1ChildPosition: {},
  inputFlexBox: {
    alignItems: 'flex-end',
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 10
  },
  inputFlexBox2: {
    alignItems: 'flex-end',
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  inputContentFlexBox: {
    flex: 1,
    alignSelf: 'stretch'
  },
  inputBorder: {
    height: 47,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  inputBorderDate: {
    height: 47,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  iconLayout: {},
  inputGenre: {
    fontWeight: '700',
    color: Color.sportsVioleta,
    width: 155,
    position: 'absolute',
    left: -15,
    top: -6
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left',
    alignSelf: 'stretch',
    width: '80%'
  },
  editarPerfil1: {
    fontSize: 19,
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  editarPerfilWrapper: {
    alignItems: 'center'
  },
  editarPerfilInner: {
    top: 2,
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  unsplashn6gnca77urcIcon: {
    borderRadius: 10,
    width: 132,
    height: 122,
    position: 'relative'
  },
  unsplashn6gnca77urcWrapper: {
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  userIcon: {
    height: 22,
    width: 22
  },
  datosPersonales: {
    fontSize: FontSize.size_sm,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontFamily: FontFamily.inputPlaceholder,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    color: Color.sportsVioleta,
    marginTop: 3
  },
  datosPersonalesWrapper: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 10,
    gap: 6
  },
  label: {
    textAlignVertical: 'center',
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch',
    fontWeight: 700
  },
  inputContent: {
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  inputContentDate: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flex: 1
  },
  input: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: '100%',
    paddingVertical: Padding.p_5xs
  },
  inputCel: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: '100%',
    paddingVertical: Padding.p_5xs,
    top: 10
  },
  inputAdress: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: '100%',
    paddingVertical: Padding.p_5xs,
    top: 20
  },
  input1: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: '100%',
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  input2: {
    width: '36%'
  },
  topContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  topContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlylightcalendar: {
    width: 24,
    marginLeft: 16,
    height: 24
  },
  inputContent3: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1
  },
  top: {
    width: '60%'
  },
  inputParent: {
    gap: 15
  },
  card1: {
    width: '100%',
    height: 'auto',
    paddingBottom: 20,
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    borderRadius: Border.br_base,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.blanco,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  card1Wrapper: {
    height: 'auto',
    marginBottom: 20,
    gap: 5
  },
  card11Wrapper: {
    height: 260,
    borderRadius: Border.br_base,
    backgroundColor: Color.blanco,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  favoriteIActiveIcon1: {
    height: '14.29%',
    width: '4.92%',
    position: 'absolute',
    top: '15.49%',
    right: '4.25%',
    left: '90.83%',
    display: 'none'
  },
  datosDeContactoWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 4
  },
  addressbookIcon: {
    height: 30,
    width: 30
  },
  card11: {
    height: 245,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 5
  },
  inputGroup: {
    top: 52,
    left: 9,
    zIndex: 1,
    position: 'absolute',
    gap: 20
  },
  frameParent: {
    top: 60,
    paddingHorizontal: 14
  },
  editarPerfil: {
    paddingBottom: 140,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  editar: {
    backgroundColor: 'rgba(186, 8, 249, 0.4)',
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    width: 132,
    height: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  },
  editarText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: FontFamily.proximaNova,
    marginTop: 2
  }
})

export default EditarPerfil
