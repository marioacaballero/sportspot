import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, Border, FontSize } from '../GlobalStyles'

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
          <View style={[styles.datosDePagoWrapper, styles.inputContentFlexBox]}>
            <Text style={[styles.datosDePago, styles.labelFlexBox]}>
              Datos de pago
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.gestionaTuCuentaWrapper}>
        <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
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
          <View style={[styles.inputContent, styles.inputContentFlexBox]}>
            <Text style={[styles.label, styles.labelFlexBox]}>
              Nombre del titular
            </Text>
            <Text style={[styles.placehoder, styles.labelFlexBox]}>
              Lara Macías Blanco Carrillo
            </Text>
          </View>
        </View>
        <View style={styles.input}>
          <View style={[styles.inputContent, styles.inputContentFlexBox]}>
            <Text style={[styles.label, styles.labelFlexBox]}>
              Número de tarjeta
            </Text>
            <Text style={[styles.placehoder, styles.labelFlexBox]}>
              XXXX - XXXX - XXXX - XXXX
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            // backgroundColor: 'red',
            width: 298
          }}
        >
          <View style={styles.inputBorder}>
            <View style={[styles.inputContent, styles.inputContentFlexBox]}>
              <Text style={[styles.label, styles.labelFlexBox]}>Tipo</Text>
              <Text style={[styles.placehoder, styles.labelFlexBox]}>Visa</Text>
            </View>
          </View>
          <View style={[styles.input3, styles.inputBorder]}>
            <View style={[styles.inputContent, styles.inputContentFlexBox]}>
              <Text style={[styles.label, styles.labelFlexBox]}>
                Fecha de caducidad
              </Text>
              <Text style={[styles.placehoder, styles.labelFlexBox]}>
                30/27
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  metodoInnerPosition: {
    width: 350,
    // left: 20,
    position: 'absolute'
  },
  inputContentFlexBox: {
    // justifyContent: 'space-between',
    // alignSelf: 'stretch'
  },
  labelFlexBox: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  datosTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  menInferiorLayout: {
    width: 360,
    position: 'absolute'
  },
  frameLayout: {
    height: 20
    // marginLeft: 47
  },
  inputBorder: {
    height: 47,

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
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
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
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
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
    fontSize: FontSize.size_sm,
    fontWeight: '700'
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
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'left'
  },
  placehoder: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
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
    borderStyle: 'solid',
    marginTop: 20
  },
  input1: {
    // marginLeft: 15,
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
    // width: 118,
    marginLeft: 15,
    alignSelf: 'flex-start'
  },
  inputParent: {
    top: 240,
    // left: 31,
    width: 298,
    height: 167,
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    padding: 15
  },
  metodo: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Metodo
