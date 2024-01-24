import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native'
import PopupAlerta from '../components/PopupAlerta'
import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'

const PruebasEncontradasDetalle1 = () => {
  const [vectorIconVisible, setVectorIconVisible] = useState(false)
  const navigation = useNavigation()

  const openVectorIcon = useCallback(() => {
    setVectorIconVisible(true)
  }, [])

  const closeVectorIcon = useCallback(() => {
    setVectorIconVisible(false)
  }, [])

  return (
    <>
      <View style={styles.pruebasEncontradasDetalle}>
        <View
          style={[styles.unsplashon4qwhhjcemParent, styles.parentPosition1]}
        >
          <Image
            style={styles.unsplashon4qwhhjcemIcon}
            contentFit="cover"
            source={require('../assets/unsplashon4qwhhjcem.png')}
          />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.pruebaDeCiclismo, styles.reseasDeLaTypo1]}>
                  Prueba de ciclismo
                </Text>
                <Text style={[styles.modalidadMontaa, styles.ciclismoTypo4]}>
                  Modalidad Montaña
                </Text>
              </View>
              <View style={styles.vectorParent}>
                <Pressable style={styles.vector} onPress={openVectorIcon}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/alert.png')}
                  />
                </Pressable>
                <Image
                  style={[
                    styles.clarityshareSolidIcon,
                    styles.containerLayout2
                  ]}
                  contentFit="cover"
                  source={require('../assets/claritysharesolid.png')}
                />
                <Image
                  style={[
                    styles.clarityshareSolidIcon,
                    styles.containerLayout2
                  ]}
                  contentFit="cover"
                  source={require('../assets/like--spotsport.png')}
                />
              </View>
            </View>
            <Text
              style={[styles.loremIpsumDolor, styles.reseasDeLaSpaceBlock1]}
            >{`Lorem ipsum dolor sit amet consectetur. Scelerisque augue mattis libero tristique venenatis vulputate tristique. 

Mi feugiat cras dignissim proin pharetra. Eget in tellus mi cras fames vestibulum. `}</Text>
            <Text style={[styles.laInscripcinDe, styles.reseasDeLaSpaceBlock1]}>
              La inscripción de la prueba es en el pueblo de Hornachos, Badajoz.
              Se celebrará el 1 de febrero de 2024. Si te interesa par-ticipar
              tienes hasta el 22 de enero de 2024 para realizar la inscripción.
              El precio de inscripción es de 22€ por persona.
            </Text>
            <Text style={[styles.reseasDeLa, styles.reseasDeLaSpaceBlock1]}>
              Reseñas de la prueba
            </Text>
          </View>
          <Pressable
            style={[styles.cilarrowTopParent, styles.parentSpaceBlock4]}
            onPress={() => navigation.navigate('PruebasEncontradasOrdenar')}
          >
            <Image
              style={styles.cilarrowTopIcon}
              contentFit="cover"
              source={require('../assets/cilarrowtop.png')}
            />
            <Text style={[styles.ciclismo, styles.ciclismoTypo4]}>
              Ciclismo
            </Text>
          </Pressable>
        </View>
        <View style={[styles.menInferior, styles.menInferiorPosition6]}>
          <View style={[styles.groupParent, styles.menInferiorPosition6]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate('UltimasConsultas')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/group-1171276700.png')}
              />
            </Pressable>
            <Pressable
              style={styles.vector1}
              onPress={() => navigation.navigate('Favoritos1')}
            >
              <Image
                style={styles.icon}
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
              style={[styles.container, styles.containerLayout2]}
              onPress={() => navigation.navigate('HistorialDePruebas')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/frame-1547756022.png')}
              />
            </Pressable>
            <Pressable
              style={styles.frame}
              onPress={() => navigation.navigate('TuPerfil')}
            >
              <Image
                style={styles.icon}
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
      </View>

      <Modal animationType="fade" transparent visible={vectorIconVisible}>
        <View style={styles.vectorIconOverlay}>
          <Pressable style={styles.vectorIconBg} onPress={closeVectorIcon} />
          <PopupAlerta onClose={closeVectorIcon} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  parentPosition1: {
    left: 0,
    position: 'absolute'
  },
  reseasDeLaTypo1: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_3xl,
    textAlign: 'left',
    fontWeight: '700'
  },
  ciclismoTypo4: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  containerLayout2: {
    width: 20,
    height: 20
  },
  reseasDeLaSpaceBlock1: {
    marginTop: 20,
    fontFamily: FontFamily.inputPlaceholder
  },
  parentSpaceBlock4: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorPosition6: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  unsplashon4qwhhjcemIcon: {
    maxWidth: '100%',
    height: 351,
    zIndex: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%'
  },
  pruebaDeCiclismo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsNaranja,
    fontSize: FontSize.size_3xl
  },
  modalidadMontaa: {
    fontSize: FontSize.size_lg
  },
  vectorIconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  vectorIconBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  vector: {
    height: 22,
    width: 19
  },
  clarityshareSolidIcon: {
    marginLeft: 10,
    height: 20,
    overflow: 'hidden'
  },
  vectorParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flexDirection: 'row'
  },
  frameGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  loremIpsumDolor: {
    fontWeight: '300',
    width: 320,
    color: Color.violeta2,
    fontSize: FontSize.inputPlaceholder_size,
    marginTop: 20,
    textAlign: 'left'
  },
  laInscripcinDe: {
    textAlign: 'justify',
    width: 320,
    color: Color.violeta2,
    fontSize: FontSize.inputPlaceholder_size,
    marginTop: 20,
    fontWeight: '700'
  },
  reseasDeLa: {
    textAlign: 'left',
    color: Color.sportsNaranja,
    fontSize: FontSize.size_3xl,
    fontWeight: '700',
    marginTop: 20
  },
  frameParent: {
    backgroundColor: Color.naranja3,
    padding: Padding.p_xl,
    zIndex: 1,
    alignSelf: 'stretch'
  },
  cilarrowTopIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden'
  },
  ciclismo: {
    fontSize: FontSize.size_xl,
    marginLeft: 13
  },
  cilarrowTopParent: {
    top: 50,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    width: 178,
    height: 53,
    zIndex: 2,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.blanco
  },
  unsplashon4qwhhjcemParent: {
    top: 0
  },
  wrapper: {
    width: 22,
    height: 25
  },
  vector1: {
    width: 23,
    marginLeft: 47,
    height: 20
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    marginLeft: 47,
    height: 20
  },
  frame: {
    marginLeft: 47,
    height: 20,
    width: 19
  },
  groupParent: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    justifyContent: 'center',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
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
    top: 725,
    height: 75
  },
  pruebasEncontradasDetalle: {
    flex: 1,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.blanco
  }
})

export default PruebasEncontradasDetalle1
