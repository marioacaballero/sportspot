import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'

const InicioSUSCRIPCIONES = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.inicioSuscripciones2}>
      <View style={styles.helloAshfakParent}>
        <Text style={[styles.helloAshfak, styles.helloClr]}>{`PLANES DE
SUSCRIPCIÓN`}</Text>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-1171276697.png')}
          />
          <Image
            style={styles.materialSymbolsnotificationsIcon}
            contentFit="cover"
            source={require('../assets/materialsymbolsnotifications2.png')}
          />
        </View>
      </View>
      <View style={styles.div2CardsWrapper}>
        <View style={styles.div2Cards}>
          <View style={styles.card}>
            <View style={styles.content}>
              <View>
                <Text style={[styles.estasSonLasContainer, styles.helloClr]}>
                  <Text>
                    <Text style={styles.estasSonLasVentajasQueObt}>
                      <Text style={[styles.estasSonLas, styles.helloTypo15]}>
                        ¡Estas son las ventajas que obtendrías al hacerte
                        Premium!
                      </Text>
                    </Text>
                  </Text>
                  <Text>
                    <Text style={styles.estasSonLasVentajasQueObt}>
                      <Text style={styles.blankLine1}> </Text>
                    </Text>
                  </Text>
                  <Text>
                    <Text style={styles.blankLine1}>
                      <Text style={styles.blankLine3}> </Text>
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frameParent}>
                <View style={styles.frameWrapper}>
                  <View style={styles.warningParent}>
                    <Image
                      style={styles.warningIcon}
                      contentFit="cover"
                      source={require('../assets/warning.png')}
                    />
                    <View style={styles.helloAshfakWrapper}>
                      <Text
                        style={[styles.helloAshfak1, styles.helloClr]}
                      >{`Alertas personalizadas en tiempo real que te informarán sobre eventos importantes. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.warningParent}>
                    <Image
                      style={styles.mappinlineIcon}
                      contentFit="cover"
                      source={require('../assets/mappinline.png')}
                    />
                    <View style={styles.helloAshfakWrapper}>
                      <Text style={[styles.helloAshfak2, styles.helloClr]}>
                        Tendrás acceso exclusivo a registro detallado (ubicación
                        y radio de notificaciones) de deportes precedentes.
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.warningParent}>
                    <Image
                      style={styles.warningIcon}
                      contentFit="cover"
                      source={require('../assets/numberone.png')}
                    />
                    <View style={styles.helloAshfakWrapper}>
                      <Text style={[styles.helloAshfak1, styles.helloClr]}>
                        Reconocemos tu compromiso y dedicación, por eso cada uso
                        de la app te permitirá acumular puntos que podrás
                        canjear por recompensas y beneficios adicionales.
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.warningParent}>
                    <Image
                      style={styles.warningIcon}
                      contentFit="cover"
                      source={require('../assets/star.png')}
                    />
                    <View style={styles.helloAshfakWrapper}>
                      <Text
                        style={[styles.helloAshfak1, styles.helloClr]}
                      >{`Nos preocupamos por la autenticidad de tu experiencia, contarás con la capacidad de validar reseñas, asegurando la calidad de la información. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.warningParent}>
                    <Image
                      style={styles.warningIcon}
                      contentFit="cover"
                      source={require('../assets/percent.png')}
                    />
                    <View style={styles.helloAshfakWrapper}>
                      <Text
                        style={[styles.helloAshfak1, styles.helloClr]}
                      >{`Hemos establecido colaboraciones exclusivas que te brindarán descuentos especiales con nuestros colaboradores. `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.warningParent}>
                    <View style={styles.helloAshfakWrapper3}>
                      <Text
                        style={[styles.helloAshfak6, styles.helloTypo15]}
                      >{`¡Actúa ahora y experimenta una forma
completamente nueva de abordar tus
objetivos deportivos con Spotsport Premium!`}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Pressable
                style={styles.contentInner}
                onPress={() => navigation.navigate('PruebasEncontradasDetalle')}
              >
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox1
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo15]}>
                    Plan mensual
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.contentInner}
                onPress={() => navigation.navigate('PruebasEncontradasDetalle')}
              >
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox1
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo15]}>
                    Plan trimestral
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.contentInner}
                onPress={() => navigation.navigate('PruebasEncontradasDetalle')}
              >
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox1
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo15]}>
                    Plan semestral
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.contentInner}
                onPress={() => navigation.navigate('PruebasEncontradasDetalle')}
              >
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox1
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo15]}>
                    Plan anual
                  </Text>
                </View>
              </Pressable>
              <View style={styles.divider} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menInferior, styles.menInferiorPosition5]}>
        <View style={[styles.groupContainer, styles.menInferiorPosition5]}>
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
            style={[styles.vector, styles.frameLayout17]}
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
            style={[styles.container, styles.frameLayout17]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-15477560222.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout17]}
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
  helloClr: {
    color: Color.sportsVioleta,
    textAlign: 'left'
  },
  helloTypo15: {
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder
  },
  groupContainerFlexBox1: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  menInferiorPosition5: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameLayout17: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
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
  estasSonLas: {
    fontFamily: FontFamily.inputPlaceholder
  },
  estasSonLasVentajasQueObt: {
    fontSize: FontSize.inputPlaceholder_size
  },
  blankLine1: {
    fontFamily: FontFamily.inputPlaceholder
  },
  blankLine3: {
    fontSize: FontSize.inputLabel_size
  },
  estasSonLasContainer: {
    height: 44,
    width: 296,
    textAlign: 'left'
  },
  warningIcon: {
    width: 32,
    height: 32
  },
  helloAshfak1: {
    fontSize: FontSize.inputLabel_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  helloAshfakWrapper: {
    marginLeft: 10,
    flex: 1
  },
  warningParent: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  frameWrapper: {
    width: 297
  },
  mappinlineIcon: {
    width: 35,
    height: 37
  },
  helloAshfak2: {
    width: 246,
    fontSize: FontSize.inputLabel_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  frameContainer: {
    marginTop: 24,
    width: 297
  },
  helloAshfak6: {
    color: Color.sportsNaranja,
    textAlign: 'center',
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  helloAshfakWrapper3: {
    flex: 1
  },
  frameParent: {
    marginTop: 16
  },
  helloAshfak7: {
    fontSize: FontSize.size_sm,
    color: Color.blanco,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  helloAshfakWrapper4: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 38,
    padding: Padding.p_3xs,
    flex: 1
  },
  contentInner: {
    width: 282,
    marginTop: 16,
    flexDirection: 'row'
  },
  divider: {
    borderStyle: 'solid',
    borderColor: Color.blanco,
    borderTopWidth: 1,
    height: 1,
    marginTop: 16,
    alignSelf: 'stretch'
  },
  content: {
    width: 296
  },
  card: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_xl
  },
  div2Cards: {
    height: 602,
    backgroundColor: Color.blanco
  },
  div2CardsWrapper: {
    height: 876,
    zIndex: 1,
    marginTop: 20
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
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
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
    zIndex: 2
  },
  inicioSuscripciones2: {
    height: 800,
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
  }
})

export default InicioSUSCRIPCIONES