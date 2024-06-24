import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'

const Contacta = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation()

  const handlePress = () => {
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad')
    navigation.goBack()
  }

  const handleRedirect = (redirectTo) => {
    switch (redirectTo) {
      case 'legal':
        return Linking.openURL(
          'https://drive.google.com/file/d/1I9itjjpA8mOzenah7djkBAplrvK2ZJVO/view?usp=sharing'
        )
      case 'privacy':
        return Linking.openURL(
          'https://drive.google.com/file/d/17NSB0Pf9nTNeUC_KoCCWREujcucV6v8s/view?usp=sharing'
        )
      case 'terms':
        return Linking.openURL(
          'https://drive.google.com/file/d/1GXoysbDZVzPw3FMiuNhCNDAPuopBMzXs/view?usp=sharing'
        )
      default:
        return Linking.openURL(
          'https://drive.google.com/file/d/1GXoysbDZVzPw3FMiuNhCNDAPuopBMzXs/view?usp=sharing'
        )
    }
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('contactanos')}</Text>
          {/* <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable> */}
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.messageContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={t('contactanos')}
              multiline
              numberOfLines={10}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput placeholder={t('nombre')} />
          </View>
          <View style={styles.textContainer}>
            <TextInput placeholder={t('email')} />
          </View>
          <TouchableOpacity style={styles.sendContainer} onPress={handlePress}>
            <Text style={styles.send}>{t('enviar')}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10, padding: 20, marginTop: 10 }}>
          <Pressable onPress={() => handleRedirect('legal')}>
            <Text
              style={{
                fontSize: 14,
                color: Color.sportsVioleta,
                fontFamily: FontFamily.inputPlaceholder,
                fontWeight: '700',
                textDecorationLine: 'underline'
              }}
            >
              Aviso legal
            </Text>
          </Pressable>
          <Pressable onPress={() => handleRedirect('privacy')}>
            <Text
              style={{
                fontSize: 14,
                color: Color.sportsVioleta,
                fontFamily: FontFamily.inputPlaceholder,
                fontWeight: '700',
                textDecorationLine: 'underline'
              }}
            >
              Política de Privacidad
            </Text>
          </Pressable>
          <Pressable onPress={() => handleRedirect('terms')}>
            <Text
              style={{
                fontSize: 14,
                color: Color.sportsVioleta,
                fontFamily: FontFamily.inputPlaceholder,
                fontWeight: '700',
                textDecorationLine: 'underline'
              }}
            >
              Términos y condiciones
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_8xs,
    flex: 1
  },
  innerContainer: {
    marginTop: 76,
    borderRadius: Border.br_base,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5,
    backgroundColor: Color.blanco,
    borderStyle: 'solid',
    width: '90%',
    height: 360,
    left: 20,
    alignItems: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 20,
    left: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  title: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  textContainer: {
    paddingHorizontal: Padding.p_base,
    height: 45,
    width: '90%',
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: Padding.p_5xs,
    marginTop: 20
  },
  messageContainer: {
    height: 130,
    width: '90%',
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 20
  },
  textInput: {
    textAlignVertical: 'top',
    textAlign: 'left',
    paddingVertical: 7,
    paddingHorizontal: 10
  },
  sendContainer: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    height: 43,
    width: '90%',
    borderRadius: Border.br_31xl,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Color.sportsVioleta,
    marginTop: 20
  },
  send: {
    color: Color.violeta3,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  }
})

export default Contacta
