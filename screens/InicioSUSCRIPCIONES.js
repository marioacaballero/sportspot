import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView
} from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'

const InicioSUSCRIPCIONES = () => {
  // const navigation = useNavigation()

  return (
    <ScrollView
      style={styles.inicioSuscripciones2}
      contentContainerStyle={{ paddingBottom: 200 }}
    >
      <View style={styles.helloAshfakParent}>
        <Text style={[styles.helloAshfak, styles.helloClr]}>
          PLANES DE SUSCRIPCIÓN
        </Text>
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
                  <Text style={styles.estasSonLasVentajasQueObt}>
                    <Text style={styles.helloTypo}>
                      ¡Estas son las ventajas que obtendrías al hacerte Premium!
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
                      <Text style={[styles.helloAshfak1, styles.helloClr]}>
                        {
                          'Alertas personalizadas en tiempo real que te informarán sobre eventos importantes.'
                        }
                      </Text>
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
                      <Text style={[styles.helloAshfak1, styles.helloClr]}>
                        {
                          'Nos preocupamos por la autenticidad de tu experiencia, contarás con la capacidad de validar reseñas, asegurando la calidad de la información.'
                        }
                      </Text>
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
                      <Text style={[styles.helloAshfak1, styles.helloClr]}>
                        {
                          'Hemos establecido colaboraciones exclusivas que te brindarán descuentos especiales con nuestros colaboradores.'
                        }
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameContainer}>
                  <View style={styles.warningParent}>
                    <View style={styles.helloAshfakWrapper3}>
                      <Text style={[styles.helloAshfak6, styles.helloTypo]}>
                        ¡Actúa ahora y experimenta una forma completamente nueva
                        de abordar tus objetivos deportivos con Spotsport
                        Premium!
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Pressable style={styles.contentInner}>
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                    Plan mensual
                  </Text>
                </View>
              </Pressable>
              <Pressable style={styles.contentInner}>
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                    Plan trimestral
                  </Text>
                </View>
              </Pressable>
              <Pressable style={styles.contentInner}>
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                    Plan semestral
                  </Text>
                </View>
              </Pressable>
              <Pressable style={styles.contentInner}>
                <View
                  style={[
                    styles.helloAshfakWrapper4,
                    styles.groupContainerFlexBox
                  ]}
                >
                  <Text style={[styles.helloAshfak7, styles.helloTypo]}>
                    Plan anual
                  </Text>
                </View>
              </Pressable>
              <View style={styles.divider} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  helloClr: {
    color: Color.sportsVioleta
    // textAlign: 'left'
  },
  helloTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  groupContainerFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  menInferiorPosition: {
    width: 360,
    left: 0
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: 22,
    // textAlign: 'left',
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
    // alignSelf: 'center',
    alignItems: 'center'
    // flex: 1
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
    height: 80,
    width: 296
  },
  warningIcon: {
    width: 32,
    height: 32
  },
  helloAshfak1: {
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfakWrapper: {
    marginLeft: 10,
    flex: 1
  },
  warningParent: {
    flexDirection: 'row'
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
    // textAlign: 'left',
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
    color: Color.blanco
    // textAlign: 'left'
  },
  helloAshfakWrapper4: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 38,
    padding: Padding.p_3xs,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_xl
  },
  div2Cards: {
    height: 800,
    backgroundColor: Color.blanco
  },
  div2CardsWrapper: {
    height: 730,
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
  inicioSuscripciones2: {
    // height: 900,
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_xl,
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
  }
})

export default InicioSUSCRIPCIONES
