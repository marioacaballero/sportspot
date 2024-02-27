import React, { useState, useCallback } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Image,
  ScrollView,
  TextInput
} from 'react-native'
import Calendar from '../components/Calendar'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser, updateUserAvatar } from '../redux/actions/users'
import BackArrowSVG from '../components/SVG/BackArrowSVG'

const EditarPerfil = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const [topContainerVisible, setTopContainerVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [, setDate] = useState('')
  const [valuesUser, setValuesUser] = useState({
    name: user?.name || '',
    apellido: user?.apellido || '',
    sexo: user?.sexo || '',
    fechaNacimiento: user?.fechaNacimiento || '',
    direccion: user?.direccion || '',
    telefono: user?.telefono || ''
  })

  const settingValuesUser = (field, value) => {
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const openTopContainer = useCallback(() => {
    setTopContainerVisible(true)
  }, [])

  const closeTopContainer = useCallback(() => {
    setTopContainerVisible(false)
  }, [])

  const onSubmit = () => {
    const data = {
      id: user.id,
      valuesUser
    }

    dispatch(updateUser(data))
    dispatch(getUser(user.id))
  }

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
  console.log(selectedImage)

  return (
    <ScrollView>
      <View style={styles.editarPerfil}>
        <View
          style={{
            paddingTop: 30,
            paddingHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
            GESTIONA TU CUENTA
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={styles.editarPerfilInner}>
          <View style={[styles.editarPerfilWrapper, styles.groupParentFlexBox]}>
            <Text style={styles.editarPerfil1}>Editar perfil</Text>
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
              selectedImage ? { uri: selectedImage } : { uri: user?.avatar }
            }
          />
          <View
            style={{
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              width: 132,
              height: 30,
              position: 'absolute',
              bottom: 0,
              left: 0,
              overflow: 'hidden'
            }}
          >
            <LinearGradient
              colors={['#BA08F9', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 0.5 }}
              style={{ flex: 1 }}
            >
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontFamily: FontFamily.inputPlaceholder,
                  marginTop: 5
                }}
              >
                Editar
              </Text>
            </LinearGradient>
          </View>
        </Pressable>
        <View style={styles.frameParent}>
          <View style={styles.card1Wrapper}>
            <View style={styles.card1}>
              <Image
                style={styles.favoriteIActiveIcon}
                contentFit="cover"
                source={require('../assets/favorite-iactive.png')}
              />
              <Image
                style={styles.userIcon}
                contentFit="cover"
                source={require('../assets/user.png')}
              />
              <View style={styles.datosPersonalesWrapper}>
                <Text
                  style={[styles.datosPersonales, styles.card1ChildPosition]}
                >
                  Datos personales
                </Text>
              </View>
              <View style={[styles.inputParent, styles.inputFlexBox]}>
                <View style={styles.input}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Nombre
                    </Text>
                    <TextInput
                      // style={[styles.label, styles.labelFlexBox]}
                      placeholder={user?.name || 'Nombre'}
                      value={valuesUser?.name}
                      onChangeText={(value) => settingValuesUser('name', value)}
                    />
                  </View>
                </View>
                <View style={styles.input1}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Apellido
                    </Text>
                    <TextInput
                      // style={[styles.label, styles.labelFlexBox]}
                      placeholder={user?.apellido || 'Apellido'}
                      value={valuesUser?.apellido}
                      onChangeText={(value) =>
                        settingValuesUser('apellido', value)
                      }
                    />
                  </View>
                </View>
                <View style={[styles.input2, styles.inputBorder]}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Género
                    </Text>
                    <TextInput
                      placeholder={user?.sexo || '-'}
                      value={valuesUser.sexo}
                      onChangeText={(value) => settingValuesUser('sexo', value)}
                    />
                    {/* <Text style={[styles.placehoder, styles.placehoderTypo]}>
                      Mujer
                    </Text> */}
                  </View>
                </View>
                <Pressable style={[styles.top, styles.inputBorderDate]}>
                  <View></View>
                  <View
                    style={[styles.inputContent3, styles.groupParentFlexBox]}
                  >
                    <View style={[styles.inputContentDate]}>
                      <Text style={[styles.label, styles.labelFlexBox]}>
                        Fecha de nacimiento
                      </Text>
                      <TextInput
                        placeholder={user?.fechaNacimiento || '12/12/2020'}
                        value={valuesUser.fechaNacimiento}
                        onChangeText={(value) =>
                          settingValuesUser('fechaNacimiento', value)
                        }
                      />
                      {/* <Text style={[styles.placehoder, styles.placehoderTypo]}>
                        12/12/2020
                      </Text> */}
                    </View>
                    <Pressable onPress={openTopContainer}>
                      <Image
                        style={styles.iconlylightcalendar}
                        contentFit="cover"
                        source={require('../assets/iconlylightcalendar.png')}
                      />
                    </Pressable>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.card11Wrapper}>
            <View style={styles.card11}>
              <Image
                style={[styles.favoriteIActiveIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/favorite-iactive1.png')}
              />
              <View style={styles.datosDeContactoWrapper}>
                <Text
                  style={[styles.datosPersonales, styles.card1ChildPosition]}
                >
                  Datos de contacto
                </Text>
              </View>
              <Image
                style={[styles.addressbookIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/addressbook.png')}
              />
            </View>
            <View style={[styles.inputGroup, styles.inputFlexBox]}>
              <View style={styles.input}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelFlexBox]}>Email</Text>
                  <TextInput placeholder={user?.email || 'ejemplo@gmail.com'} />
                  {/* <Text style={[styles.placehoder, styles.placehoderTypo]}>
                    ejemplo@gmail.com
                  </Text> */}
                </View>
              </View>
              <View style={styles.inputCel}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Teléfono
                  </Text>
                  <TextInput
                    placeholder={user?.telefono || '@600100100'}
                    value={valuesUser.telefono}
                    onChangeText={(value) =>
                      settingValuesUser('telefono', value)
                    }
                  />
                  {/* <Text style={[styles.placehoder, styles.placehoderTypo]}>
                    600100100
                  </Text> */}
                </View>
              </View>
              <View style={[styles.inputAdress, styles.inputBorder]}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Dirección
                  </Text>
                  <TextInput
                    placeholder={user?.direccion || '@C/Falsa, 123'}
                    value={valuesUser.direccion}
                    onChangeText={(value) =>
                      settingValuesUser('direccion', value)
                    }
                  />
                  {/* <Text style={[styles.placehoder, styles.placehoderTypo]}>
                    C/Falsa, 123
                  </Text> */}
                </View>
              </View>
              <View style={styles.helloAshfakWrapper}>
                <Text
                  style={[styles.helloAshfak, styles.kmTypo]}
                  onPress={onSubmit}
                >
                  Actualizar
                </Text>
              </View>
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
          <Calendar onClose={closeTopContainer} setDate={setDate} />
        </View>
      </Modal>
    </ScrollView>
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
    marginTop: 24,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  groupParentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  placehoderTypo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  card1ChildPosition: {
    left: '0%',
    top: '10%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  inputFlexBox: {
    alignItems: 'flex-end',
    width: 298,
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
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  menInferiorLayout: {
    width: 360,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  gestionaTuCuentaWrapper: {
    top: 67
  },
  editarPerfil1: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  editarPerfilWrapper: {
    alignItems: 'center'
  },
  editarPerfilInner: {
    top: 20,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  unsplashn6gnca77urcIcon: {
    borderRadius: Border.br_5xs,
    width: 132,
    height: 122,
    position: 'relative'
  },
  unsplashn6gnca77urcWrapper: {
    top: 50,
    // paddingLeft: Padding.p_83xl,
    // paddingRight: Padding.p_3xs,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIActiveIcon: {
    width: 16,
    height: 35,
    display: 'none'
  },
  userIcon: {
    height: 22,
    marginLeft: 4,
    width: 22
  },
  datosPersonales: {
    fontSize: FontSize.inputLabel_size,
    textTransform: 'capitalize',
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  datosPersonalesWrapper: {
    width: 195,
    height: 24,
    marginLeft: 11,
    alignItems: 'center'
  },
  label: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  placehoder: {
    color: Color.sportsVioleta,
    fontSize: FontSize.size_sm,
    alignSelf: 'stretch'
  },
  inputContent: {
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  inputContentDate: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginLeft: 15,
    flex: 1
  },
  input: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: 295,
    paddingVertical: Padding.p_5xs
  },
  inputCel: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: 295,
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
    width: 295,
    paddingVertical: Padding.p_5xs,
    top: 20
  },
  input1: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: 295,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  input2: {
    width: 82
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
    width: 197
  },
  inputParent: {
    gap: 15
  },
  card1: {
    width: 324,
    paddingHorizontal: Padding.p_smi,
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
    height: '45%'
  },
  card11Wrapper: {
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
  card1Child: {
    right: '0%',
    bottom: '0%',

    borderRadius: Border.br_base,
    top: '0%',
    backgroundColor: Color.blanco
  },
  favoriteIActiveIcon1: {
    height: '14.29%',
    width: '4.92%',
    top: '12.49%',
    right: '4.25%',
    bottom: '73.22%',
    left: '90.83%',
    display: 'none'
  },
  datosDeContactoWrapper: {
    height: '13.63%',
    width: '59.6%',
    right: '26.02%',
    bottom: '82.9%',
    left: '14.37%',
    position: 'absolute'
  },
  addressbookIcon: {
    height: '13.06%',
    width: '9.79%',
    top: '2.86%',
    right: '86.85%',
    bottom: '84.08%',
    left: '3.36%'
  },
  card11: {
    width: 327,
    height: 245,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  input5: {
    width: 295,
    height: 47
  },
  inputGroup: {
    top: 48,
    left: 18,
    zIndex: 1,
    position: 'absolute',
    gap: 15
  },
  frameParent: {
    top: 80
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    height: 25,
    width: 22
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
    // top: 10,
    // left: 0,
    backgroundColor: Color.gris,
    height: 65,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  editarPerfil: {
    // overflow: 'hidden',
    paddingBottom: 220,
    width: '100%',
    backgroundColor: Color.blanco,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

export default EditarPerfil
