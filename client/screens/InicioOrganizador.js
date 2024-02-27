import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView
  // TextInput,
  // Pressable
} from 'react-native'
import FomularioEventos from '../components/FomularioEventos'

import { Padding, FontSize, FontFamily, Color, Border } from '../GlobalStyles'

const InicioOrganizador = () => {
  return (
    <ScrollView
      style={[styles.inicioOrganizador]}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.frameView}>
        <Text style={styles.helloAshfak3}>{`Breve descripción del servicio a
        organizadores`}</Text>
        <View style={[styles.healthiconsmegaphoneParent]}>
          <Image
            style={styles.healthiconsmegaphone}
            contentFit="cover"
            source={require('../assets/healthiconsmegaphone.png')}
          />
          <View style={styles.helloAshfakParent1}>
            <Text
              style={[styles.helloAshfak4, styles.helloTypo1]}
            >{`NUEVO PUNTO DE 
            CONTACTO`}</Text>
            <Text style={[styles.helloAshfak5, styles.helloTypo]}>
              Entre deportistas y organizadores.
            </Text>
          </View>
        </View>
        <Image
          style={{ marginTop: 15 }}
          source={require('../assets/right-organization.png')}
        />
        {/* <View style={styles.connectorLayout} /> */}
        <View style={styles.healthiconsmegaphoneParent}>
          <View style={styles.helloAshfakParent2}>
            <Text style={[styles.helloAshfak6, styles.helloLayout]}>{`AUMENTO DE
            INSCRIPCIONES`}</Text>
            <Text style={[styles.helloAshfak7, styles.helloLayout]}>
              En las competiciones ofrecidas por los organizadores
            </Text>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={styles.lineIconLayout}
              contentFit="cover"
              source={require('../assets/line-101.png')}
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector7.png')}
            />
            <Image
              style={[styles.frameChild1, styles.lineIconLayout]}
              contentFit="cover"
              source={require('../assets/line-100.png')}
            />
          </View>
        </View>
        <Image
          style={{ marginTop: 15 }}
          source={require('../assets/left-organization.png')}
        />
        {/* <View style={[styles.connectorLine1, styles.connectorLayout]} /> */}
        <View style={styles.healthiconsmegaphoneParent}>
          <Image
            style={styles.faSolidcoinsIcon}
            contentFit="cover"
            source={require('../assets/fasolidcoins.png')}
          />
          <View style={styles.helloAshfakParent3}>
            <Text style={[styles.helloAshfak4, styles.helloTypo1]}>{`AUMENTO DE
            INGRESOS`}</Text>
            <Text style={[styles.helloAshfak9, styles.helloTypo]}>
              Para los organizadores de los eventos deportivos
            </Text>
          </View>
        </View>
        <View style={{ width: '100%' }}>
          <Image
            style={{ marginTop: 15 }}
            source={require('../assets/right-organization.png')}
          />
        </View>
        {/* <View style={styles.connectorLayout} /> */}
        <View style={styles.healthiconsmegaphoneParent}>
          <View style={styles.helloAshfakParent2}>
            <Text style={[styles.helloAshfak4, styles.helloTypo1]}>
              ÉXITO DE PRUEBAS
            </Text>
            <Text
              style={[styles.helloAshfak9, styles.helloTypo]}
            >{`Por parte de los deportistas,
              generando renombre en
              competiciones de los
              organizadores`}</Text>
          </View>
          <Image
            style={styles.fluentMdl2medalSolidIcon}
            contentFit="cover"
            source={require('../assets/fluentmdl2medalsolid.png')}
          />
        </View>

        <View style={styles.helloAshfakParent2}>
          <Text style={[styles.helloAshfak4, styles.helloTypo1]}>
            ACCEDE Y CREA TU EVENTO
          </Text>
          <Text
            style={[styles.helloAshfak9, styles.helloTypo]}
          >{`Por parte de los deportistas,
              generando renombre en
              competiciones de los
              organizadores`}</Text>
        </View>
        <FomularioEventos />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.blanco,
    height: 52,
    padding: 8
  },
  itemsTextArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.blanco,
    // height: 52,
    padding: 8,
    height: 100
  },
  textArea: {
    marginTop: 6,
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  textAreaInput: {
    alignSelf: 'flex-start'
  },
  groupContainerSpaceBlock: {
    paddingHorizontal: Padding.p_xl
  },
  helloTypoScroll: {
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },

  helloTypo2: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloTypo1: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloTypo: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    fontSize: FontSize.inputLabel_size
  },
  helloLayout: {
    width: 189,
    textAlign: 'left'
  },
  lineIconLayout: {
    height: 23,
    width: 3
  },
  connectorLayout: {
    height: 31,
    width: 247,
    borderWidth: 2,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl
    // marginTop: 20
  },

  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  frameChild: {
    width: 29,
    height: 22
  },
  materialSymbolsnotificationsIcon: {
    width: 27,
    marginLeft: 7,
    height: 24,
    overflow: 'hidden'
  },
  groupParent: {
    width: 63,
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfakParent: {
    justifyContent: 'space-between',
    zIndex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  helloAshfak1: {
    color: Color.violeta3
  },
  frameItem: {
    width: 6,
    height: 6,
    marginTop: 5
  },
  helloAshfakGroup: {
    alignItems: 'center'
  },
  helloAshfak2: {
    color: Color.sportsVioleta
  },
  helloAshfakContainer: {
    marginLeft: 30,
    alignItems: 'center'
  },
  frameParent: {
    zIndex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: Padding.p_6xl,
    top: 0
  },
  helloAshfak3: {
    textAlign: 'center',
    fontSize: FontSize.size_sm,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  healthiconsmegaphone: {
    width: 69,
    height: 63,
    overflow: 'hidden'
  },
  helloAshfak4: {
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  helloAshfak5: {
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  helloAshfakParent1: {
    marginLeft: 27,
    flex: 1
  },
  healthiconsmegaphoneParent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  helloAshfak6: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfak7: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    fontSize: FontSize.inputLabel_size
  },
  helloAshfakParent2: {
    flex: 1,
    marginTop: 15
  },
  vectorIcon: {
    width: 31,
    marginLeft: 1,
    height: 56
  },
  frameChild1: {
    marginLeft: 1
  },
  vectorParent: {
    width: 45,
    alignItems: 'flex-end',
    marginLeft: 27,
    flexDirection: 'row'
  },
  connectorLine1: {
    transform: [
      {
        rotate: '180deg'
      }
    ]
  },
  faSolidcoinsIcon: {
    width: 57,
    height: 56,
    overflow: 'hidden'
  },
  helloAshfak9: {
    width: 191,
    textAlign: 'left'
  },
  helloAshfakParent3: {
    marginLeft: 35,
    flex: 1
  },
  fluentMdl2medalSolidIcon: {
    width: 62,
    height: 64,
    marginLeft: 16,
    overflow: 'hidden'
  },
  frameView: {
    padding: Padding.p_xl,
    zIndex: 2,
    alignItems: 'center',
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 29,
    height: 22
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
  groupContainer: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center'
  },
  materialSymbolsnotifications: {
    width: 27,
    marginLeft: 7,
    height: 24
  },
  icon1: {
    overflow: 'hidden'
  },
  frameParentFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    left: 0,
    position: 'absolute'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  inicioOrganizador: {
    height: '100%',
    backgroundColor: Color.colorLinen_200,
    marginTop: 20,
    borderRadius: 30
    // paddingTop: 180,
    // flex: 1
  }
})

export default InicioOrganizador
