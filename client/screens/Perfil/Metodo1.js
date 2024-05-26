import * as React from 'react'
import { StyleSheet, View, Text, Image, Pressable, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  Padding,
  FontSize,
  Color,
  Border
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { LinearGradient } from 'expo-linear-gradient'
import i18next from 'i18next'
import { useTranslation } from "react-i18next";

const Metodo1 = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();

  const handlebutton = () => {
    Linking.openURL('mailto:organizadores@spotsport.eu')
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.metodo}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t("trabajaconnosotros")}</Text>
          {/* <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable> */}
        </View>
        <View style={styles.pencillineParent}>
          <View style={styles.pencilline}>
            <Image
              style={styles.medalIcon}
              contentFit="cover"
              source={require('../../assets/medal.png')}
            />
            <View style={styles.frameWrapper}>
              <Text style={[styles.eresDeportista, styles.trabajaTypo]}>
              {t("eresdeportista")}
              </Text>
            </View>
          </View>
          <Text style={styles.trabajaConNosotrosContainer}>
            {i18next.language === "es" ? `Trabaja con nosotros y vive la emoción de formar parte de una
            plataforma deportiva innovadora! Valoramos la dedicación, la pasión
            y el espíritu competitivo. Estamos en la búsqueda de individuos
            apasionados por el mundo del deporte para unirse a nuestro portal y
            contribuir al crecimiento continuo de nuestra plataforma.` :
              `"Work with us and experience the excitement of being part of an innovative sports platform! We value dedication, passion, and competitive spirit. We are looking for individuals passionate about the world of sports to join our portal and contribute to the continuous growth of our platform."`}
          </Text>
        </View>
        <View
          style={[styles.trabajaConNosotrosFrame, styles.groupParentFlexBox]}
        >
          <Pressable onPress={handlebutton}>
            <Text style={[styles.trabajaConNosotros1, styles.trabajaTypo]}>
              {t("trabajacon")}
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  trabajaTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  groupParentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  medalIcon: {
    width: 32,
    height: 32
  },
  pencilline: {
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row'
  },
  eresDeportista: {
    fontSize: FontSize.size_mid,
    display: 'flex',
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1
  },
  frameWrapper: {
    width: 180,
    height: 69,
    paddingTop: Padding.p_4xl,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs
  },
  pencillineParent: {
    top: 110,
    borderRadius: Border.br_3xs,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 5,
    shadowOpacity: 1,
    borderStyle: 'solid',
    width: '100%',
    height: 320,
    backgroundColor: Color.blanco,
    alignItems: 'center'
  },
  trabajaConNosotrosContainer: {
    width: '85%',
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorBlack,
    textAlign: 'center',
    letterSpacing: 0.3,
    lineHeight: 18
  },
  trabajaConNosotros1: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  trabajaConNosotrosFrame: {
    top: 446,
    // left: 39,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: '100%',
    height: 43,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs
  },
  metodo: {
    minHeight: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 15,
    left: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '97%'
  },
  title: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    width: '70%'
  }
})

export default Metodo1
