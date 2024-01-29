import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable
} from 'react-native'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'

const EscribirResea = ({ onClose }) => {
  return (
    <View style={styles.escribirResea}>
      <View style={styles.frameParent}>
        <View style={styles.clarityeditSolidParent}>
          <Image
            style={styles.clarityeditSolidIcon}
            contentFit="cover"
            source={require('../assets/clarityeditsolid.png')}
          />
          <Text style={[styles.escribeUnaResea, styles.helloAshfakTypo]}>
            Escribe una reseña aquí
          </Text>
        </View>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock1]}>
          {/* <View style={styles.frameChild} /> */}
          <TextInput
            style={styles.frameChild}
            placeholder="Escribe una reseña aquí"
            // value={reseña}
            // onChangeText={(text) => setReseña(text)}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
          <Pressable
            style={[styles.helloAshfakWrapper, styles.helloFlexBox]}
            onPress={onClose}
          >
            <Text style={[styles.helloAshfak, styles.helloAshfakTypo]}>
              Cancelar
            </Text>
          </Pressable>
          <Pressable style={[styles.helloAshfakContainer, styles.helloFlexBox]}>
            <Text style={[styles.helloAshfak, styles.helloAshfakTypo]}>
              Publicar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  helloAshfakTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '700',
    fontSize: FontSize.size_sm
  },
  frameSpaceBlock1: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  helloFlexBox: {
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: Color.sportsNaranja,
    borderRadius: Border.br_xl,
    flex: 1,
    flexDirection: 'row'
  },
  clarityeditSolidIcon: {
    width: 14,
    height: 14,
    overflow: 'hidden'
  },
  escribeUnaResea: {
    color: Color.sportsVioleta,
    marginLeft: 10
  },
  clarityeditSolidParent: {
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  frameChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.naranja3,
    height: 100,
    alignSelf: 'stretch',
    padding: 15
  },
  frameWrapper: {
    height: 100
  },
  helloAshfak: {
    color: Color.blanco
  },
  helloAshfakWrapper: {
    paddingHorizontal: Padding.p_6xl
  },
  helloAshfakContainer: {
    paddingHorizontal: Padding.p_11xl,
    marginLeft: 10
  },
  frameGroup: {
    flexDirection: 'row'
  },
  frameParent: {
    padding: Padding.p_3xs,
    flex: 1
  },
  escribirResea: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.blanco,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 320,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    // maxWidth: '100%',
    // maxHeight: '100%',
    flexDirection: 'row',
    bottom: '100%'
  }
})

export default EscribirResea
