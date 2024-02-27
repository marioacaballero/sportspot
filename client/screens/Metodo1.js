import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'

const Metodo1 = () => {
  // const navigation = useNavigation()

  return (
    <View style={styles.metodo}>
      <View style={styles.pencillineParent}>
        <View style={styles.pencilline}>
          <Image
            style={styles.medalIcon}
            contentFit="cover"
            source={require('../assets/medal.png')}
          />
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.eresDeportistaWrapper}>
            <Text style={[styles.eresDeportista, styles.trabajaTypo]}>
              ¿Eres deportista?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.trabajaConNosotrosWrapper}>
        <Text
          style={[styles.trabajaConNosotros, styles.trabajaTypo]}
        >{`TRABAJA CON
NOSOTROS`}</Text>
      </View>
      <Text style={styles.trabajaConNosotrosContainer}>
        {`Trabaja con nosotros y vive la emoción de
formar parte de una plataforma deportiva
innovadora!`}{' '}
        Valoramos la dedicación, la pasión y elespíritu competitivo. Estamos en
        la búsquedade individuos apasionados por el mundo deldeporte para unirse
        a nuestro portal ycontribuir al crecimiento continuo de
        nuestraplataforma.{' '}
      </Text>
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
  frameLayout: {
    height: 20,
    marginLeft: 47
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
    alignItems: 'center'
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
  eresDeportistaWrapper: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row'
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
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: '100%',
    height: 247,
    flexDirection: 'row'
    // left: 20
    // position: 'absolute'
  },
  trabajaConNosotros: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  trabajaConNosotrosWrapper: {
    top: 67,
    left: '7%',
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 22,
    height: 25
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
    width: 360
  },
  trabajaConNosotrosContainer: {
    top: 244,
    left: 25,
    width: '85%',
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorBlack,
    textAlign: 'center',
    position: 'absolute'
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
  }
})

export default Metodo1
