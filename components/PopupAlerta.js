import * as React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Border, FontSize, FontFamily, Color, Padding } from '../GlobalStyles'

const PopupAlerta = ({ onClose }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.popupAlerta}>
      <View style={styles.oopsParent}>
        <Text style={styles.oops}>¡Oops!</Text>
        <Text style={styles.debesSerPremium}>{`Debes ser premium para 
guardar una alerta`}</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.helloAshfakWrapper, styles.helloFlexBox2]}>
          <Text style={[styles.helloAshfak, styles.helloTypo16]}>Cancelar</Text>
        </View>
        <Pressable
          style={[styles.helloAshfakContainer, styles.helloFlexBox2]}
          onPress={() => navigation.navigate('InicioSUSCRIPCIONES')}
        >
          <Text style={[styles.helloAshfak1, styles.helloTypo16]}>
            Hacerme Premium
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  helloFlexBox2: {
    justifyContent: 'center',
    height: 38,
    borderRadius: Border.br_31xl,
    flex: 1,
    alignItems: 'center'
  },
  helloTypo16: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '700'
  },
  oops: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,

    fontSize: FontSize.inputPlaceholder_size
  },
  debesSerPremium: {
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'center',
    marginTop: 14,
    color: Color.sportsVioleta,

    fontSize: FontSize.inputPlaceholder_size
  },
  oopsParent: {
    alignItems: 'center'
  },
  helloAshfak: {
    color: Color.sportsNaranja
  },
  helloAshfakWrapper: {
    borderStyle: 'solid',
    borderColor: Color.sportsNaranja,
    borderWidth: 1
  },
  helloAshfak1: {
    color: Color.blanco
  },
  helloAshfakContainer: {
    backgroundColor: Color.sportsNaranja,
    padding: Padding.p_3xs,
    marginLeft: 10
  },
  frameParent: {
    width: 282,
    flexDirection: 'row',
    marginTop: 30
  },
  popupAlerta: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    padding: Padding.p_xl,
    maxWidth: '100%',
    maxHeight: '100%',
    alignItems: 'center'
  }
})

export default PopupAlerta
