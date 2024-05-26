import * as React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize
} from '../../../GlobalStyles'
import BackArrowSVG from '../../../components/SVG/BackArrowSVG'
import { useTranslation } from "react-i18next";

const Metodo = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.metodo}>
      <View style={[styles.pencillineParent, styles.metodoInnerPosition]}>
        <View style={styles.pencilline}>
          <Image
            style={styles.walletIcon}
            contentFit="cover"
            source={require('../../../assets/wallet.png')}
          />
        </View>
        <View style={styles.frameWrapper}>
          <Text style={[styles.datosDePago, styles.labelFlexBox]}>
           {t("datosdepago")}
          </Text>
        </View>
      </View>
      <View style={styles.gestionaTuCuentaWrapper}>
        <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
        {t("gestionatucuentaM")}
        </Text>
        {/* <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable> */}
      </View>
      <View style={[styles.metodoInner, styles.metodoInnerPosition]}>
        <View style={styles.datosDePagoContainer}>
          <Text style={[styles.datosDePago1, styles.datosTypo]}>
          {t("datosdepago")}
          </Text>
        </View>
      </View>
      <View style={styles.inputParent}>
        <View style={styles.input}>
          <Text style={[styles.label, styles.labelFlexBox]}>
          {t("nombredeltitular")}

          </Text>
          <Text style={[styles.placehoder, styles.labelFlexBox]}>Nombre</Text>
        </View>
        <View style={styles.input}>
          <Text style={[styles.label, styles.labelFlexBox]}>
          {t("numerodetarjeta")}

          </Text>
          <Text style={[styles.placehoder, styles.labelFlexBox]}>
            XXXX - XXXX - XXXX - XXXX
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            width: "100%",
          }}
        >
          <View style={styles.inputBorder}>
            <Text style={[styles.label, styles.labelFlexBox]}>{t("tipo")}</Text>
            <Text style={[styles.placehoder, styles.labelFlexBox]}>Visa</Text>
          </View>
          <View style={[styles.input3, styles.inputBorder2]}>
            <Text style={[styles.label, styles.labelFlexBox]}>
            {t("fechacaducidad")}
            </Text>
            <Text style={[styles.placehoder, styles.labelFlexBox]}>30/27</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  metodoInnerPosition: {
    width: "100%",
    position: 'absolute'
  },
  labelFlexBox: {
    color: Color.sportsVioleta,
    textAlign: 'left'
  },
  datosTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  inputBorder: {
    height: 47,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    width: "48%"
  },
  inputBorder2: {
    height: 47,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    width: "48%"
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
  frameWrapper: {
    width: 201,
    height: 83,
    paddingHorizontal: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    justifyContent: 'center',
    top: 7
  },
  pencillineParent: {
    top: 172,
    borderRadius: Border.br_3xs,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    elevation: 3,
    shadowOpacity: 1,
    borderColor: Color.blanco,
    height: 290,
    flexDirection: 'row',
    borderStyle: 'solid',
    width: 300,
    backgroundColor: Color.blanco
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch',
    width: '80%'
  },
  gestionaTuCuentaWrapper: {
    top: 30,
    left: 20,
    position: 'absolute',
    height:200

  },
  datosDePago1: {
    color: Color.sportsNaranja,
    textAlign: 'left',
    fontSize:18,
    fontWeight: '700',
    paddingLeft:10
  },
  datosDePagoContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  metodoInner: {
    top: 130,
    justifyContent: 'center'
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
  input: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: "100%",
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 20
  },
  input3: {
    // width: 118,
    marginLeft: 15,
    alignSelf: 'flex-start'
  },
  inputParent: {
    top: 210,
    // left: 31,
    width: "100%",
    height: "auto",
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    padding: 14
  },
  metodo: {
    backgroundColor: Color.blanco,
    height: "auto",
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:14,
    alignItems: 'center'
  }
})

export default Metodo
