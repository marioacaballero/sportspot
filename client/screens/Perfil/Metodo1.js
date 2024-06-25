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
import { useTranslation } from 'react-i18next'

const Metodo1 = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation()

  const handlebutton = () => {
    Linking.openURL('mailto:organizadores@spotsport.eu')
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1, paddingHorizontal: 25 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('trabajaconnosotros')}</Text>
      </View>
      <View
        style={{
          marginTop: i18next.language === 'es' ? 130 : 100,
          marginBottom: 30,
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
          paddingVertical: 25,
          backgroundColor: Color.blanco,
          alignItems: 'center',
          gap: 15
        }}
      >
        <View style={styles.pencilline}>
          <Image
            style={styles.medalIcon}
            resizeMode="contain"
            source={require('../../assets/medal.png')}
          />
          <View style={styles.frameWrapper}>
            <Text style={[styles.eresDeportista, styles.trabajaTypo]}>
              {t('eresdeportista')}
            </Text>
          </View>
        </View>
        <Text
          style={{
            width: '85%',
            fontSize: FontSize.size_mini,
            fontFamily: FontFamily.inputPlaceholder,
            color: Color.colorBlack,
            textAlign: 'center',
            letterSpacing: 0.3,
            lineHeight: 18
          }}
        >
          {i18next.language === 'es'
            ? 'Trabaja con nosotros y vive la emoción de formar parte de una plataforma deportiva innovadora!'
            : 'Work with us and experience the excitement of being part of an innovative sports platform!'}
        </Text>
        <Text
          style={{
            width: '85%',
            fontSize: FontSize.size_mini,
            fontFamily: FontFamily.inputPlaceholder,
            color: Color.colorBlack,
            textAlign: 'center',
            letterSpacing: 0.3,
            lineHeight: 18
          }}
        >
          {i18next.language === 'es'
            ? `Valoramos la dedicación, la pasión y el espíritu competitivo. Estamos en la búsqueda de individuos apasionados por el mundo del deporte para unirse a nuestro portal y contribuir al crecimiento continuo de nuestra plataforma.`
            : 'We value dedication, passion, and competitive spirit. We are looking for individuals passionate about the world of sports to join our portal and contribute to the continuous growth of our platform.'}
        </Text>
      </View>

      <View
        style={{
          borderRadius: Border.br_31xl,
          backgroundColor: Color.sportsNaranja,
          width: '100%',
          height: 43,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Pressable onPress={handlebutton}>
          <Text
            style={{
              fontSize: FontSize.inputPlaceholder_size,
              color: Color.blanco,
              textAlign: 'left',
              fontFamily: FontFamily.inputPlaceholder,
              fontWeight: '700'
            }}
          >
            {t('trabajacon')}
          </Text>
        </Pressable>
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
    flexDirection: 'row'
  },
  medalIcon: {
    width: 35,
    height: 35
  },
  pencilline: {
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
    // width: 180,
    // height: 69,
    // paddingTop: Padding.p_4xl,
    // paddingBottom: Padding.p_3xs,
    // paddingRight: Padding.p_3xs
  },
  pencillineParent: {
    marginTop: 130,
    marginBottom: 30,
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
    paddingVertical: 25,
    backgroundColor: Color.blanco,
    alignItems: 'center',
    gap: 15
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
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: '100%',
    height: 43
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
    top: 20,
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
