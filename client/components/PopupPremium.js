import React from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const PopupPremium = ({ setModalVisible }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.premium}>
      <View style={styles.groupParent1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/group-11712766981.png')}
        />
        <Text style={styles.helloAshfak6}>Premium</Text>
      </View>
      <Text style={[styles.helloAshfak7, styles.helloSpaceBlock]}>
        Pásate al siguiente nivel y desbloquea un sin fin de beneficios
        exclusivos en el mundo del deporte
      </Text>
      <Text style={[styles.helloAshfak8, styles.helloSpaceBlock]}>
        Estamos seguros de que te encantará tu experiencia deportiva con
        Spotsport Premium. Además, estamos ofreciendo una oferta especial para
        nuestros usuarios existentes. ¡No querrás perdértela! Para más
        información puedes contactar con nuestro servicio de soporte técnico
      </Text>
      <Text style={[styles.helloAshfak9, styles.helloTypo]}>
        ¡Actúa ahora y experimenta una forma completamente nueva de abordar tus
        objetivos deportivos con Spotsport Premium!
      </Text>
      <View style={[styles.premiumInner, styles.helloSpaceBlock]}>
        <View style={styles.helloAshfakWrapper}>
          <Pressable
            onPress={() => {
              navigation.navigate('InicioSUSCRIPCIONES')
              setModalVisible(false)
            }}
          >
            <Text style={[styles.helloAshfak10, styles.helloTypo]}>
              Acceder a planes de suscripción
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  helloSpaceBlock: {
    marginTop: 14,
    alignSelf: 'stretch'
  },
  helloTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  frameChild: {
    width: 29,
    height: 22,
    bottom: 3
  },
  vector: {
    width: 23,
    marginLeft: 47
  },
  helloAshfak6: {
    fontSize: FontSize.size_lg,
    width: 90,
    height: 25,
    marginLeft: 13,
    color: Color.sportsNaranja,
    textAlign: 'left',
    fontWeight: '500'
  },
  groupParent1: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  helloAshfak7: {
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    marginTop: 14,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfak8: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  helloAshfak9: {
    marginTop: 14,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Color.sportsNaranja
  },
  helloAshfak10: {
    color: Color.blanco,
    textAlign: 'left'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  premiumInner: {
    flexDirection: 'row'
  },
  premium: {
    justifyContent: 'center',
    alignSelf: 'center',
    // position: 'absolute',
    // top: 100,
    // right: 20,
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(69, 68, 68, 0.47)',
    width: 320,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xl,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    backgroundColor: Color.blanco,
    zIndex: 10
  }
})

export default PopupPremium
