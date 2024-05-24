import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import RightArrowGrueso from '../../components/SVG/RightArrowGrueso'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from "react-i18next";

const Cuenta = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.cuenta}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={[
                styles.gestionaTuCuentaContainer,
                styles.editarPerfilTypo
              ]}
            >
             {t("gestionatucuentamay")}
            </Text>
            {/* <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable> */}
          </View>
        </View>
        <View>
          <Pressable
            style={styles.pencillineParent}
            onPress={() => navigation.navigate('EditarPerfil')}
          >
            <View style={styles.baseText}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../../assets/vector3.png')}
              />
              <View style={styles.frameGroup}>
                <View style={styles.editarPerfilWrapper}>
                  <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                   {t("editarperfil")}
                  </Text>
                </View>
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                {t("actualizadatos")}
                </Text>
              </View>
            </View>

            <RightArrowGrueso color={'#FF6F00'} />
          </Pressable>

          <Pressable
            style={styles.pencillineParent}
            onPress={() => navigation.navigate('Seguridad')}
          >
            <View style={styles.baseText}>
              <Image
                style={styles.shieldcheckIcon}
                contentFit="cover"
                source={require('../../assets/shieldcheck.png')}
              />
              <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                <View style={styles.editarPerfilWrapper}>
                  <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                  {t("seguridad")}

                  </Text>
                </View>
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                {t("mantensegura")}

                </Text>
              </View>
            </View>
            <RightArrowGrueso color={'#FF6F00'} />
          </Pressable>

          <Pressable
            style={styles.pencillineParent}
            onPress={() => navigation.navigate('DatosDePago')}
          >
            <View style={styles.baseText}>
              <Image
                style={styles.shieldcheckIcon}
                contentFit="cover"
                source={require('../../assets/wallet.png')}
              />
              <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                <View style={styles.editarPerfilWrapper}>
                  <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                  {t("datospago")}

                  </Text>
                </View>
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                {t("eliminamdepago")}

                </Text>
              </View>
            </View>
            <RightArrowGrueso color={'#FF6F00'} />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  editarPerfilTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  goingTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl
  },
  vectorIcon: {
    width: 25,
    height: 25
  },
  editarPerfil: {
    fontSize: FontSize.size_sm,
    display: 'flex',
    alignItems: 'center'
  },
  editarPerfilWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  frameGroup: {
    flexDirection: 'column',
    marginLeft: 10
  },

  baseText: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  pencillineParent: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Color.blanco,
    backgroundColor: 'white',
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10
  },
  shieldcheckIcon: {
    width: 32,
    height: 32
  },
  cuenta: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    flex: 1
  }
})

export default Cuenta
