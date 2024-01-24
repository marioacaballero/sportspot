import * as React from 'react'
import { Text, StyleSheet, Pressable, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'

const InicioPREMIUM = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.inicioPremium}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.helloAshfakParent, styles.frameGroupFlexBox]}>
          <Text style={[styles.helloAshfak, styles.helloTypo2]}>INICIO</Text>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-1171276698.png')}
            />
            <Pressable
              style={styles.materialSymbolsnotifications}
              onPress={() => navigation.navigate('InicioNotificaciones')}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/materialsymbolsnotifications.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
          <View style={styles.helloAshfakGroup}>
            <Text style={[styles.helloAshfak1, styles.minTypo2]}>
              Deportista
            </Text>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/ellipse-47.png')}
            />
          </View>
          <View style={styles.helloAshfakGroup}>
            <Text style={[styles.helloAshfak1, styles.minTypo2]}>
              Organizador
            </Text>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/ellipse-47.png')}
            />
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.helloAshfak3, styles.minTypo2]}>
            Últimas horas de inscripción
          </Text>
          <View style={styles.frameContainer}>
            <View style={styles.image94ParentShadowBox1}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-941.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                  Torneo de baloncesto
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min, styles.minTypo1]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text style={[styles.min, styles.minTypo1]}>
                    ¡La inscripción acaba en 10 horas!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.image94ParentShadowBox}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-942.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                  Ciclismo
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min, styles.minTypo1]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text style={[styles.min, styles.minTypo1]}>
                    ¡La inscripción acaba en 10 horas!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.image94ParentShadowBox}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-943.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                  Ciclismo
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min, styles.minTypo1]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text style={[styles.min, styles.minTypo1]}>
                    ¡La inscripción acaba en 10 horas!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.helloAshfak3, styles.minTypo2]}>
            Últimas pruebas añadidas
          </Text>
          <View style={styles.frameContainer}>
            <View style={styles.image94ParentShadowBox1}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-944.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo3, styles.goingTypo]}>
                  Lorem ipsum
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min6, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text
                    style={[styles.min6, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                </View>
              </View>
            </View>
            <View style={styles.image94ParentShadowBox}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-945.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo3, styles.goingTypo]}>
                  Lorem ipsum
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min6, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text
                    style={[styles.min6, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                </View>
              </View>
            </View>
            <View style={styles.image94ParentShadowBox}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-943.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                  Lorem ipsum
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.helloAshfak5, styles.helloTypo1]}>
            Resultados de las útlimas pruebas
          </Text>
          <View style={styles.frameContainer}>
            <View style={styles.image94ParentShadowBox1}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-943.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo3, styles.goingTypo]}>
                  Lorem ipsum
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                </View>
              </View>
            </View>
            <View style={styles.image94ParentShadowBox}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-944.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo3, styles.goingTypo]}>
                  Lorem ipsum
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                </View>
              </View>
            </View>
            <View style={styles.image94ParentShadowBox}>
              <Image
                style={[styles.image94Icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/image-945.png')}
              />
              <View
                style={[
                  styles.imGoingToShakeYParent,
                  styles.frameGroupSpaceBlock
                ]}
              >
                <Text style={[styles.imGoingTo, styles.goingTypo]}>
                  Lorem ipsum
                </Text>
                <View style={styles.minParent}>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                  <Text
                    style={[styles.min10, styles.minTypo]}
                  >{`Lorem ipsum dolor sit amet. `}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menInferiorParent, styles.menLayout]}>
        <View style={[styles.menInferior, styles.menLayout]}>
          <View style={[styles.groupContainer, styles.frameParentPosition]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate('UltimasConsultas')}
            >
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require('../assets/group-1171276700.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.vector, styles.frameLayout]}
              onPress={() => navigation.navigate('Favoritos1')}
            >
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require('../assets/vector.png')}
              />
            </Pressable>
            <Image
              style={styles.capturaDePantalla20231124}
              contentFit="cover"
              source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
            />
            <Pressable
              style={[styles.container, styles.frameLayout]}
              onPress={() => navigation.navigate('HistorialDePruebas')}
            >
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require('../assets/frame-1547756022.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.frame, styles.frameLayout]}
              onPress={() => navigation.navigate('TuPerfil')}
            >
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require('../assets/group-1171276701.png')}
              />
            </Pressable>
          </View>
          <Image
            style={styles.menInferiorChild}
            contentFit="cover"
            source={require('../assets/ellipse-7194.png')}
          />
        </View>
        <View style={styles.premium}>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-11712766981.png')}
            />
            <Text style={[styles.helloAshfak6, styles.helloTypo2]}>
              Premium
            </Text>
          </View>
          <Text style={[styles.helloAshfak7, styles.helloSpaceBlock]}>
            Pásate al siguiente nivel y desbloquea un sin fin de beneficios
            exclusivos en el mundo del deporte
          </Text>
          <Text style={[styles.helloAshfak8, styles.helloSpaceBlock]}>
            Estamos seguros de que te encantará tu experiencia deportiva con
            Spotsport Premium. Además, estamos ofreciendo una oferta especial
            para nuestros usuarios existentes. ¡No querrás perdértela! Para más
            información puedes contactar con nuestro servicio de soporte técnico
          </Text>
          <Text
            style={[styles.helloAshfak9, styles.helloTypo]}
          >{`¡Actúa ahora y experimenta una forma
completamente nueva de abordar tus
objetivos deportivos con Spotsport Premium!`}</Text>
          <View style={[styles.premiumInner, styles.helloSpaceBlock]}>
            <View style={styles.helloAshfakWrapper}>
              <Text style={[styles.helloAshfak10, styles.helloTypo]}>
                Acceder a planes de suscripción
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    paddingHorizontal: Padding.p_xl,
    width: 360,
    left: 0,
    justifyContent: 'center',
    position: 'absolute'
  },
  frameGroupFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  helloTypo2: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  iconLayout: {
    overflow: 'hidden',
    width: '100%'
  },
  frameGroupSpaceBlock: {
    paddingVertical: 0,
    alignSelf: 'stretch'
  },
  minTypo2: {
    fontFamily: FontFamily.interThin,
    fontWeight: '100'
  },
  goingTypo: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  minTypo1: {
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  minTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  helloTypo1: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
  },
  menLayout: {
    height: 75,
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  helloSpaceBlock: {
    marginTop: 14,
    alignSelf: 'stretch'
  },
  helloTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  frameChild: {
    width: 29,
    height: 22
  },
  icon: {
    height: '100%'
  },
  materialSymbolsnotifications: {
    width: 27,
    marginLeft: 7,
    height: 24
  },
  groupParent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  helloAshfakParent: {
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  helloAshfak1: {
    color: Color.violeta3,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
  },
  frameItem: {
    width: 6,
    height: 6,
    marginTop: 5
  },
  helloAshfakGroup: {
    alignItems: 'center'
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    marginTop: 19,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  helloAshfak3: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  image94Icon: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    maxWidth: '100%',
    height: 95,
    alignSelf: 'stretch'
  },
  imGoingTo: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.interThin,
    fontWeight: '100'
  },
  min: {
    fontFamily: FontFamily.interThin,
    fontWeight: '100',
    alignSelf: 'stretch'
  },
  minParent: {
    marginTop: 2,
    alignSelf: 'stretch'
  },
  imGoingToShakeYParent: {
    height: 44,
    paddingHorizontal: Padding.p_8xs,
    marginTop: 5
  },
  image94ParentShadowBox1: {
    height: 162,
    width: 187,
    shadowColor: 'rgba(39, 39, 39, 0.2)',
    borderRadius: Border.br_sm,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    alignItems: 'center',
    backgroundColor: Color.blanco
  },
  image94ParentShadowBox: {
    marginLeft: 15,
    height: 162,
    width: 187,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowColor: 'rgba(39, 39, 39, 0.2)',
    borderRadius: Border.br_sm,
    alignItems: 'center',
    backgroundColor: Color.blanco
  },
  frameContainer: {
    width: 328,
    marginTop: 10,
    flexDirection: 'row'
  },
  frameView: {
    marginTop: 19
  },
  imGoingTo3: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  min6: {
    fontFamily: FontFamily.inputPlaceholder
  },
  min10: {
    fontFamily: FontFamily.interThin,
    fontWeight: '100'
  },
  helloAshfak5: {
    color: Color.sportsVioleta,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  frameParent: {
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_6xl,
    top: 0,
    height: 800
  },
  icon1: {
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
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorChild: {
    left: 165,
    width: 37,
    height: 24,
    top: 0,
    position: 'absolute'
  },
  menInferior: {
    top: 0
  },
  helloAshfak6: {
    fontSize: FontSize.size_lg,
    width: 90,
    height: 19,
    marginLeft: 13,
    color: Color.sportsNaranja,
    textAlign: 'left'
  },
  groupParent1: {
    alignItems: 'flex-end',
    height: 22,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  helloAshfak7: {
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    marginTop: 14,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.interBold,
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
    top: -623,
    left: 20,
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(69, 68, 68, 0.47)',
    width: 320,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: Color.blanco
  },
  menInferiorParent: {
    top: 725
  },
  inicioPremium: {
    height: 800,
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
  }
})

export default InicioPREMIUM
