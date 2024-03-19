import * as React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  Padding,
  FontSize,
  Color,
  Border
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'

const Metodo1 = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.metodo}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TRABAJA CON NOSOTROS</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable>
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
              ¿Eres deportista?
            </Text>
          </View>
        </View>
        <Text style={styles.trabajaConNosotrosContainer}>
          Trabaja con nosotros y vive la emoción de formar parte de una
          plataforma deportiva innovadora! Valoramos la dedicación, la pasión y
          el espíritu competitivo. Estamos en la búsqueda de individuos
          apasionados por el mundo del deporte para unirse a nuestro portal y
          contribuir al crecimiento continuo de nuestra plataforma.
        </Text>
      </View>
      <View style={[styles.trabajaConNosotrosFrame, styles.groupParentFlexBox]}>
        <Text style={[styles.trabajaConNosotros1, styles.trabajaTypo]}>
          Trabaja con nosotros
        </Text>
      </View>
    </View>
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
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row'
  },
  eresDeportista: {
    fontSize: FontSize.size_sm,
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
    width: 154,
    height: 69,
    paddingTop: Padding.p_4xl,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs
  },
  pencillineParent: {
    top: 172,
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
    height: 247,
    backgroundColor: Color.blanco,
    alignItems: 'center'
  },
  trabajaConNosotrosContainer: {
    width: '85%',
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorBlack,
    textAlign: 'center',
    lineHeight: 13
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
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 67,
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
    fontWeight: '700',
    width: '70%'
  }
})

export default Metodo1
