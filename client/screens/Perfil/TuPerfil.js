import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler
} from 'react-native'
import {
  useFocusEffect,
  useIsFocused,
  useNavigation
} from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Padding,
  Border,
  Color
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import Megafone from '../../components/SVG/Megafone'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setSelectedIcon } from '../../redux/slices/users.slices'
import { getUser } from '../../redux/actions/users'

import OrganizadorModal from '../../components/AccesoOrganizadorModal'
import DatosDeportista from '../../components/DatosDeportista'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
// import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { AntDesign } from '@expo/vector-icons'
import AccesoOrganizadorModal from '../../components/AccesoOrganizadorModal'

const TuPerfil = () => {
  const { t, i18n } = useTranslation()
  const [rol, setRol] = useState(false)
  const [modalState, setModalState] = useState(false)
  const [modalSport, setModalSport] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)

  const [selectedLanguaje, setSelectedLanguaje] = useState(i18n.language)

  useEffect(() => {
    getUserPreferencesState()
    dispatch(getUser(user?.id))
  }, [])

  const getModalState = () => {
    setModalState(true)
    setModalSport(true)
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('InicioDeportista')
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [navigation])
  )

  const getUserPreferencesState = async () => {
    console.log('Getting user pref state...')
    const state = await AsyncStorage.getItem('modalSport')
    console.log('state', state)
    if (!state || state !== 'alreadyShowed') {
      if (user && !user?.preferences?.location) {
        setPreferencesModalVisible(true)
      }
    }
  }

  const onChangeRol = () => {
    // if (user.rol === 'organizer') {
    // }
    setRol(!rol)
  }

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch(setSelectedIcon('TuPerfil'))
    }
  }, [isFocused])
  const cumpleaños = moment(user.birthDate)
  const today = moment()
  const age = today.diff(cumpleaños, 'years')

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.tuPerfil}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {modalState && (
            <DatosDeportista
              fromEdit={true}
              modalSport={modalSport}
              setModalSport={setModalSport}
              setModalState={setModalState}
            />
          )}
          <View style={styles.tuPerfilParent}>
            {rol && <OrganizadorModal toggleModal={onChangeRol} />}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={[styles.tuPerfil1, styles.tuPerfil1Typo]}>
                {t('tuperfil')}
              </Text>
              {/* <Pressable onPress={() => navigation.goBack()}>
              <BackArrowSVG />
            </Pressable> */}
            </View>
            <View style={styles.unsplashn6gnca77urcParent}>
              <Image
                style={styles.unsplashn6gnca77urcIcon}
                contentFit="cover"
                source={
                  user?.avatar
                    ? { uri: user?.avatar }
                    : require('../../assets/unsplashn6gnca77urc.png')
                }
              />
              <View style={{ marginLeft: '5%', width: '55%' }}>
                {user?.name || user?.lastName ? (
                  <>
                    <Text
                      style={{
                        fontSize: 20,
                        color: Color.sportsNaranja,
                        textAlign: 'left',
                        fontFamily: FontFamily.inputPlaceholder,
                        fontWeight: '700'
                      }}
                    >
                      {user?.name}
                    </Text>
                    <Text style={[styles.tuPerfilDato, styles.tuPerfil1Typo]}>
                      {user?.lastName}
                    </Text>
                  </>
                ) : (
                  <></>
                )}
                {user?.genres ? (
                  <>
                    <Text
                      style={[
                        styles.tuPerfilDato,
                        styles.tuPerfil1Typo,
                        { color: Color.sportsVioleta, fontSize: 14 }
                      ]}
                    >
                      {`${t(user?.genres.toLowerCase())}${
                        age && age > 0 ? `, ${age} ${t('edad')}` : ''
                      }`}
                    </Text>
                  </>
                ) : (
                  <></>
                )}
                {/* {user?.phoneNumber ? (
                  <>
                    <Text
                      style={[styles.laraMacasBlanco, styles.tuPerfil1Typo]}
                    >
                      Número de teléfono:
                    </Text>
                    <Text style={[styles.tuPerfilDato, styles.tuPerfil1Typo]}>
                      {user?.phoneNumber}
                    </Text>
                  </>
                ) : (
                  <></>
                )}
                {user?.address ? (
                  <>
                    <Text
                      style={[styles.laraMacasBlanco, styles.tuPerfil1Typo]}
                    >
                      Dirección:
                    </Text>
                    <Text style={[styles.tuPerfilDato, styles.tuPerfil1Typo]}>
                      {user?.address}
                    </Text>
                  </>
                ) : (
                  <></>
                )} */}
                {/* {user?.birthDate ? (
                  <>

                    <Text style={[styles.tuPerfilDato, styles.tuPerfil1Typo]}>
                      {age} años
                    </Text>
                  </>
                ) : (
                  <></>
                )} */}
              </View>
            </View>
            <View style={styles.frameParent}>
              <Pressable
                style={styles.solarsettingsBoldParent}
                onPress={() => navigation.navigate('Cuenta')}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('gestionatucuenta')}
                </Text>
              </Pressable>
              <View
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock
                ]}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold1.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('premios')}
                </Text>
                <View style={styles.soonButton}>
                  <Text style={styles.soonText}>Soon</Text>
                </View>
              </View>
              <Pressable
                onPress={() => {
                  // setShowCollaboratorModal(true)
                  navigation.navigate('Colaboradores')
                }}
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock
                ]}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold2.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('entidades')}
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock
                ]}
                onPress={() => navigation.navigate('Contacta')}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold3.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('atencionalc')}
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock
                ]}
                onPress={() => navigation.navigate('Metodo1')}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold4.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('trabajacon')}
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock
                ]}
                onPress={() => getModalState()}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('userpref')}
                </Text>
              </Pressable>
              {/* <Pressable
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock
                ]}
                onPress={() => navigation.navigate('SubirDocumentos')}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold.png')}
                />
                <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
                  {t('configurarIban')}
                </Text>
              </Pressable> */}

              <Pressable
                style={[
                  styles.solarsettingsBoldGroup,
                  styles.solarsettingsSpaceBlock,
                  styles.organizer
                ]}
                onPress={onChangeRol}
              >
                <View style={styles.solarsettingsBoldIcon2}>
                  <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/whiteMega.png')}
                  />
                </View>
                <Text style={[styles.cerrarSesin, styles.cerrarSesinTypo]}>
                  {user?.rol === 'sportsman'
                    ? t('serorganizador')
                    : t('serdeportista')}
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.solarsettingsBoldParent1,
                  styles.solarsettingsSpaceBlock
                ]}
                onPress={async () => {
                  await AsyncStorage.clear()
                  navigation.navigate('SignIn')
                  await dispatch(clearUser())
                }}
              >
                <Image
                  style={styles.solarsettingsBoldIcon}
                  contentFit="cover"
                  source={require('../../assets/solarsettingsbold5.png')}
                />
                <Text style={[styles.cerrarSesin, styles.cerrarSesinTypo]}>
                  {t('cerrarsesion')}
                </Text>
              </Pressable>
              <TouchableOpacity
                onPress={async () => {
                  setSelectedLanguaje(selectedLanguaje === 'es' ? 'en' : 'es')
                  if (selectedLanguaje == 'es') {
                    await i18n.changeLanguage('en')
                  } else {
                    await i18n.changeLanguage('es')
                  }
                }}
                style={{
                  borderRadius: 50,
                  marginTop: 20,
                  overflow: 'hidden',
                  backgroundColor: '#E2DCEC',
                  width: 70,
                  height: 40,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  gap: 7,
                  alignItems: 'center',
                  flexDirection: 'row'
                }}
              >
                <Text
                  style={{
                    color: Color.sportsVioleta,
                    fontWeight: '700'
                  }}
                >
                  {i18n.language.toUpperCase()}
                </Text>
                <AntDesign name="swap" size={20} color={'#40036F'} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* {showCollaboratorModal && (
        <AccesoOrganizadorModal
          collaborator={true}
          toggleModal={() => setShowCollaboratorModal((prev) => !prev)}
        />
      )} */}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  tuPerfil1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  cerrarSesinTypo: {
    marginLeft: 10,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  organizer: {
    backgroundColor: Color.sportsNaranja
  },
  logo: {
    backgroundColor: Color.blanco
  },
  solarsettingsSpaceBlock: {
    marginTop: 10,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    height: 43,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pajamaswork: {
    top: 618,
    left: 150,
    width: 16,
    height: 16,
    overflow: 'hidden'
  },
  tuPerfil1: {
    fontSize: FontSize.size_11xl,
    color: Color.sportsVioleta
  },
  unsplashn6gnca77urcIcon: {
    borderRadius: Border.br_5xs,
    width: '40%',
    height: 123
  },
  laraMacasBlanco: {
    fontSize: FontSize.size_mini,
    color: Color.sportsNaranja
  },
  tuPerfilDato: {
    fontSize: 20,
    color: Color.sportsNaranja
  },
  mujer23Aos: {
    fontFamily: FontFamily.inputPlaceholder,
    marginTop: 8,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  laraMacasBlancoCarrrilhoParent: {
    marginLeft: 21
  },
  unsplashn6gnca77urcParent: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row'
  },
  solarsettingsBoldIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_31xl,
    overflow: 'hidden'
  },
  solarsettingsBoldIcon2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Border.br_31xl,
    width: 30,
    height: 30,
    backgroundColor: 'transparent'
  },
  gestionaTuCuenta: {
    color: Color.sportsVioleta
  },
  solarsettingsBoldParent: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    height: 43,
    backgroundColor: Color.naranja3,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row'
  },
  solarsettingsBoldGroup: {
    backgroundColor: Color.naranja3,
    marginTop: 10
  },
  cerrarSesin: {
    color: '#ffff'
  },
  solarsettingsBoldParent1: {
    backgroundColor: Color.sportsVioleta
  },
  frameParent: {
    alignSelf: 'stretch',
    marginTop: 30,
    alignItems: 'center'
  },
  tuPerfilParent: {
    paddingTop: 30,
    paddingHorizontal: Padding.p_xl
  },
  tuPerfil: {
    flex: 1,
    overflow: 'hidden',
    width: '100%'
  },
  soonButton: {
    height: 20,
    width: 40,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.grisGeneral,
    alignItems: 'center',
    left: '90%'
  },
  soonText: {
    color: Color.gris,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputLabel_size,
    top: 1,
    fontWeight: '700'
  }
})

export default TuPerfil
