import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, Color, Border, FontSize } from '../GlobalStyles'

const Metodo = () => {
  // const navigation = useNavigation()

  return (
    <View style={styles.metodo}>
      <View style={[styles.pencillineParent, styles.metodoInnerPosition]}>
        <View style={styles.pencilline}>
          <Image
            style={styles.walletIcon}
            contentFit="cover"
            source={require('../assets/wallet.png')}
          />
        </View>
        <View style={styles.frameWrapper}>
          <View
            style={[styles.datosDePagoWrapper, styles.inputContentFlexBox1]}
          >
            <Text style={[styles.datosDePago, styles.datosTypo]}>
              Datos de pago
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.gestionaTuCuentaWrapper}>
        <Text style={[styles.gestionaTuCuentaContainer, styles.datosTypo]}>
          GESTIONA TU CUENTA
        </Text>
      </View>
      <View style={[styles.metodoInner, styles.metodoInnerPosition]}>
        <View style={styles.datosDePagoContainer}>
          <Text style={[styles.datosDePago1, styles.datosTypo]}>
            Datos de pago
          </Text>
        </View>
      </View>
      <View style={styles.inputParent}>
        <View style={styles.input}>
          <View style={[styles.inputContent, styles.inputContentFlexBox1]}>
            <Text style={[styles.label, styles.datosTypo]}>
              Nombre del titular
            </Text>
            <Text style={[styles.placehoder, styles.datosTypo]}>
              Lara Macías Blanco Carrillo
            </Text>
          </View>
        </View>
        <View style={styles.input1}>
          <View style={[styles.inputContent, styles.inputContentFlexBox1]}>
            <Text style={[styles.label, styles.datosTypo]}>
              Número de tarjeta
            </Text>
            <Text style={[styles.placehoder, styles.datosTypo]}>
              XXXX - XXXX - XXXX - XXXX
            </Text>
          </View>
        </View>
        <View style={[styles.input2, styles.inputBorder1]}>
          <View style={[styles.inputContent, styles.inputContentFlexBox1]}>
            <Text style={[styles.label, styles.datosTypo]}>Tipo</Text>
            <Text style={[styles.placehoder, styles.datosTypo]}>Visa</Text>
          </View>
        </View>
        <View style={[styles.input3, styles.inputBorder1]}>
          <View style={[styles.inputContent, styles.inputContentFlexBox1]}>
            <Text style={[styles.label, styles.datosTypo]}>
              Fecha de caducidad
            </Text>
            <Text style={[styles.placehoder, styles.datosTypo]}>30/27</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  metodoInnerPosition: {
    width: 320,
    left: 20,
    position: 'absolute'
  },
  inputContentFlexBox1: {
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  datosTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  menInferiorLayout2: {
    width: 360,
    position: 'absolute'
  },
  frameLayout2: {
    height: 20,
    marginLeft: 47
  },
  inputBorder1: {
    height: 47,
    marginLeft: 15,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  walletIcon: {
    width: 32,
    height: 32
  },
  pencilline: {
    paddingLeft: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_mini,
    paddingTop: Padding.p_mini,
    alignItems: 'center'
  },
  datosDePago: {
    display: 'flex',
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch',
    fontWeight: '700',
    fontSize: FontSize.size_sm,
    alignItems: 'center',
    flex: 1
  },
  datosDePagoWrapper: {
    flexDirection: 'row'
  },
  frameWrapper: {
    width: 201,
    height: 83,
    paddingHorizontal: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_mini
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
    borderColor: Color.colorGainsboro_100,
    height: 326,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 320
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch',
    fontWeight: '700'
  },
  gestionaTuCuentaWrapper: {
    top: 67,
    left: 20,
    position: 'absolute'
  },
  datosDePago1: {
    color: Color.sportsNaranja,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.size_sm
  },
  datosDePagoContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  metodoInner: {
    top: 140,
    justifyContent: 'center'
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  label: {
    fontSize: FontSize.size_5xs,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  placehoder: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch',
    fontWeight: '700',
    fontSize: FontSize.size_sm
  },
  inputContent: {
    flex: 1
  },
  input: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: 295,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  input1: {
    marginLeft: 15,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: 295,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  input2: {
    width: 82
  },
  input3: {
    width: 118
  },
  inputParent: {
    top: 240,
    left: 31,
    width: 298,
    height: 167,
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute'
  },
  metodo: {
    backgroundColor: 'red',
    // height: 800,
    // overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Metodo
