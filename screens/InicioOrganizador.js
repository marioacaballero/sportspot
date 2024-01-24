import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontSize, FontFamily, Color, Border } from '../GlobalStyles'

const InicioOrganizador = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.inicioOrganizador, styles.groupContainerSpaceBlock]}>
      <View style={styles.helloAshfakParent}>
        <Text style={styles.helloAshfak}>INICIO</Text>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-11712766982.png')}
          />
          <Image
            style={styles.materialSymbolsnotificationsIcon}
            contentFit="cover"
            source={require('../assets/materialsymbolsnotifications.png')}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <Pressable
          style={styles.helloAshfakGroup}
          onPress={() => navigation.navigate('InicioBUSCADOR')}
        >
          <Text style={[styles.helloAshfak1, styles.helloTypo2]}>
            Deportista
          </Text>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require('../assets/ellipse-48.png')}
          />
        </Pressable>
        <View style={styles.helloAshfakContainer}>
          <Text style={[styles.helloAshfak2, styles.helloTypo2]}>
            Organizador
          </Text>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require('../assets/ellipse-471.png')}
          />
        </View>
      </View>
      <View style={[styles.frameView, styles.frameParentSpaceBlock]}>
        <Text style={styles.helloAshfak3}>{`Breve descripción del servicio a
organizadores`}</Text>
        <View
          style={[
            styles.healthiconsmegaphoneParent,
            styles.frameParentSpaceBlock
          ]}
        >
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
        <View style={styles.connectorLayout} />
        <View
          style={[
            styles.healthiconsmegaphoneParent,
            styles.frameParentSpaceBlock
          ]}
        >
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
        <View style={[styles.connectorLine1, styles.connectorLayout]} />
        <View
          style={[
            styles.healthiconsmegaphoneParent,
            styles.frameParentSpaceBlock
          ]}
        >
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
        <View style={styles.connectorLayout} />
        <View
          style={[
            styles.healthiconsmegaphoneParent,
            styles.frameParentSpaceBlock
          ]}
        >
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
      </View>
      <View style={[styles.menInferior, styles.menInferiorPosition]}>
        <View style={[styles.groupContainer, styles.menInferiorPosition]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate('UltimasConsultas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-11712767002.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.vector, styles.frameLayout]}
            onPress={() => navigation.navigate('Favoritos1')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/vector8.png')}
            />
          </Pressable>
          <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-11.png')}
          />
          <Pressable
            style={[styles.container, styles.frameLayout]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-15477560222.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate('TuPerfil')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-11712767013.png')}
            />
          </Pressable>
        </View>
        <Image
          style={styles.menInferiorChild}
          contentFit="cover"
          source={require('../assets/ellipse-71941.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainerSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center'
  },
  frameParentSpaceBlock: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  helloTypo2: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  helloTypo1: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  helloTypo: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.interThin,
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
    borderRadius: Border.br_5xl,
    marginTop: 20
  },
  menInferiorPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.interBold,
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
    flexDirection: 'row'
  },
  helloAshfak3: {
    textAlign: 'center',
    fontSize: FontSize.size_sm,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.interBold,
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
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  helloAshfak7: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.interThin,
    fontWeight: '100',
    fontSize: FontSize.inputLabel_size
  },
  helloAshfakParent2: {
    flex: 1
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLinen_200,
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
  menInferiorChild: {
    top: 0,
    left: 165,
    width: 37,
    position: 'absolute',
    height: 24
  },
  menInferior: {
    top: 726,
    height: 75,
    zIndex: 3
  },
  inicioOrganizador: {
    backgroundColor: Color.blanco,
    height: 800,
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_5xl,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default InicioOrganizador
