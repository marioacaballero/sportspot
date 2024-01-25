import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, View, Pressable, Modal, Image } from 'react-native'
import Calendar from '../components/Calendar'
// import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Padding, Border } from '../GlobalStyles'

const EditarPerfil = () => {
  const [topContainerVisible, setTopContainerVisible] = useState(false)
  // const navigation = useNavigation()

  const openTopContainer = useCallback(() => {
    setTopContainerVisible(true)
  }, [])

  const closeTopContainer = useCallback(() => {
    setTopContainerVisible(false)
  }, [])

  return (
    <>
      <View style={styles.editarPerfil}>
        <View style={[styles.gestionaTuCuentaWrapper, styles.wrapperPosition]}>
          <Text style={[styles.gestionaTuCuentaContainer, styles.labelTypo]}>
            {'GESTIONA TU '}CUENTA
          </Text>
        </View>
        <View style={[styles.editarPerfilInner, styles.wrapperPosition]}>
          <View style={[styles.editarPerfilWrapper, styles.groupParentFlexBox]}>
            <Text style={[styles.editarPerfil1, styles.placehoderTypo]}>
              Editar perfil
            </Text>
          </View>
        </View>
        <View
          style={[styles.unsplashn6gnca77urcWrapper, styles.wrapperPosition]}
        >
          <Image
            style={styles.unsplashn6gnca77urcIcon}
            contentFit="cover"
            source={require('../assets/unsplashn6gnca77urc.png')}
          />
        </View>
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
                    <Text style={[styles.label, styles.labelTypo]}>Nombre</Text>
                    <Text style={[styles.placehoder, styles.placehoderTypo]}>
                      Lara
                    </Text>
                  </View>
                </View>
                <View style={styles.input1}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelTypo]}>
                      Apellidos
                    </Text>
                    <Text style={[styles.placehoder, styles.placehoderTypo]}>
                      Macías Blanco Carrillo
                    </Text>
                  </View>
                </View>
                <View style={[styles.input2, styles.inputBorder]}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelTypo]}>Género</Text>
                    <Text style={[styles.placehoder, styles.placehoderTypo]}>
                      Mujer
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={[styles.top, styles.inputBorder]}
                  onPress={openTopContainer}
                >
                  <View
                    style={[styles.inputContent3, styles.groupParentFlexBox]}
                  >
                    <View
                      style={[styles.inputContent, styles.inputContentFlexBox]}
                    >
                      <Text style={[styles.label, styles.labelTypo]}>
                        Fecha de nacimiento
                      </Text>
                      <Text style={[styles.placehoder, styles.placehoderTypo]}>
                        12/12/2020
                      </Text>
                    </View>
                    <Image
                      style={styles.iconlylightcalendar}
                      contentFit="cover"
                      source={require('../assets/iconlylightcalendar.png')}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.card1Parent}>
            <View style={styles.card11}>
              <View style={[styles.card1Child, styles.card1ChildPosition]} />
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
                  <Text style={[styles.label, styles.labelTypo]}>Email</Text>
                  <Text style={[styles.placehoder, styles.placehoderTypo]}>
                    ejemplo@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.input1}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>Teléfono</Text>
                  <Text style={[styles.placehoder, styles.placehoderTypo]}>
                    600100100
                  </Text>
                </View>
              </View>
              <View style={[styles.input5, styles.inputBorder]}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    Dirección
                  </Text>
                  <Text style={[styles.placehoder, styles.placehoderTypo]}>
                    C/Falsa, 123
                  </Text>
                </View>
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
          <Calendar onClose={closeTopContainer} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 20,
    position: 'absolute'
  },
  labelTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
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
    top: '0%',
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
    marginLeft: 15,
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
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  gestionaTuCuentaWrapper: {
    top: 67
  },
  editarPerfil1: {
    color: Color.sportsNaranja
  },
  editarPerfilWrapper: {
    alignItems: 'center'
  },
  editarPerfilInner: {
    top: 140,
    width: 320,
    justifyContent: 'center'
  },
  unsplashn6gnca77urcIcon: {
    borderRadius: Border.br_5xs,
    width: 132,
    height: 122
  },
  unsplashn6gnca77urcWrapper: {
    top: 172,
    paddingLeft: Padding.p_83xl,
    paddingRight: Padding.p_3xs,
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
    marginLeft: 11,
    width: 22
  },
  datosPersonales: {
    fontSize: FontSize.inputLabel_size,
    textTransform: 'capitalize',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  datosPersonalesWrapper: {
    width: 195,
    height: 24
  },
  label: {
    fontSize: FontSize.size_5xs,
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
  input1: {
    marginLeft: 15,
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
    height: 167,
    flex: 1,
    alignItems: 'left'
  },
  card1: {
    width: 324,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowColor: 'rgba(83, 89, 144, 0.07)',
    borderRadius: Border.br_base,
    height: 234,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.blanco
  },
  card1Wrapper: {
    height: 234
  },
  card1Child: {
    right: '0%',
    bottom: '0%',
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowColor: 'rgba(83, 89, 144, 0.07)',
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
    top: '3.47%',
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
    zIndex: 0
  },
  input5: {
    width: 295,
    height: 47
  },
  inputGroup: {
    top: 48,
    left: 18,
    zIndex: 1,
    position: 'absolute'
  },
  card1Parent: {
    marginTop: 21
  },
  frameParent: {
    top: 320,
    left: 17,
    position: 'absolute'
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
    top: 10,
    left: 0,
    backgroundColor: Color.gris,
    height: 65,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  editarPerfil: {
    height: 800,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.blanco,
    flex: 1
  }
})

export default EditarPerfil
