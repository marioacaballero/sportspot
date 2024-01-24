import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'

const Favoritos = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.favoritos}>
      <View style={[styles.frameParent, styles.frameParentPosition1]}>
        <View>
          <Text style={[styles.tusFavoritos, styles.ciclismoTypo1]}>
            TUS FAVORITOS
          </Text>
        </View>
        <View style={[styles.backParent, styles.backParentSpaceBlock]}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require('../assets/back.png')}
          />
          <View style={styles.frameWrapper}>
            <View style={styles.groupParentFlexBox3}>
              <Text style={[styles.pruebasDeCiclismo, styles.ciclismoTypo1]}>
                Pruebas de ciclismo (2)
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.backParentSpaceBlock]}>
          <View style={[styles.image84Parent, styles.parentFlexBox]}>
            <Image
              style={styles.image84Icon}
              contentFit="cover"
              source={require('../assets/image-84.png')}
            />
            <View style={[styles.frameContainer, styles.frameSpaceBlock2]}>
              <View style={styles.ciclismoParent}>
                <Text style={[styles.ciclismo, styles.ciclismoTypo1]}>
                  Ciclismo
                </Text>
                <Image
                  style={styles.heartIcon}
                  contentFit="cover"
                  source={require('../assets/heart.png')}
                />
              </View>
              <Text style={styles.imGoingToContainer}>
                <Text
                  style={styles.modalidadMontaaLocalizaci}
                >{`Modalidad: Montaña
Localización: Hornachos, Badajoz
Fecha de la prueba: `}</Text>
                <Text style={styles.textTypo}>{`01 feb 2024
`}</Text>
                <Text
                  style={styles.modalidadMontaaLocalizaci}
                >{`Fecha límite de inscripción: `}</Text>
                <Text style={styles.textTypo}>22 ene 2024</Text>
              </Text>
              <Text style={styles.imGoingToContainer1}>
                <Text
                  style={styles.precioDeInscripcin}
                >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                <Text style={[styles.text, styles.textTypo]}>22€</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.vectorParent, styles.parentFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector5.png')}
            />
            <Text style={[styles.helloAshfak, styles.ciclismoTypo1]}>
              Crear alerta
            </Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.backParentSpaceBlock]}>
          <View style={[styles.image84Parent, styles.parentFlexBox]}>
            <Image
              style={styles.image84Icon}
              contentFit="cover"
              source={require('../assets/image-94.png')}
            />
            <View style={styles.frameSpaceBlock2}>
              <View style={styles.groupParentFlexBox3}>
                <Text style={[styles.ciclismo, styles.ciclismoTypo1]}>
                  Ciclismo
                </Text>
                <Image
                  style={styles.heartIcon1}
                  contentFit="cover"
                  source={require('../assets/heart1.png')}
                />
              </View>
              <Text style={styles.imGoingToContainer}>
                <Text
                  style={styles.modalidadMontaaLocalizaci}
                >{`Modalidad: Carretera
Localización: Mérida, Badajoz
Fecha de la prueba: `}</Text>
                <Text style={styles.textTypo}>{`18 ene 2024
`}</Text>
                <Text
                  style={styles.modalidadMontaaLocalizaci}
                >{`Fecha límite de inscripción: `}</Text>
                <Text style={styles.textTypo}>10 ene 2024</Text>
              </Text>
              <Text style={styles.imGoingToContainer1}>
                <Text
                  style={styles.precioDeInscripcin}
                >{`PRECIO DE INSCRIPCIÓN: `}</Text>
                <Text style={[styles.text, styles.textTypo]}>35€</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.vectorParent, styles.parentFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector5.png')}
            />
            <Text style={[styles.helloAshfak, styles.ciclismoTypo1]}>
              Crear alerta
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.menInferior, styles.menInferiorLayout5]}>
        <View style={[styles.groupParent, styles.menInferiorLayout5]}>
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
            style={[styles.vector, styles.frameLayout6]}
            onPress={() => navigation.navigate('Favoritos1')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/vector1.png')}
            />
          </Pressable>
          <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
          />
          <Pressable
            style={[styles.container, styles.frameLayout6]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-1547756022.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.frameLayout6]}
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
          style={[styles.menInferiorChild, styles.frameParentPosition2]}
          contentFit="cover"
          source={require('../assets/ellipse-7194.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition1: {
    left: '50%',
    marginLeft: -180
  },
  ciclismoTypo1: {
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  backParentSpaceBlock: {
    marginTop: 25,
    alignItems: 'center'
  },
  parentFlexBox: {
    width: 320,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameSpaceBlock2: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    flex: 1
  },
  textTypo: {
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder
  },
  menInferiorLayout5: {
    width: 360,
    position: 'absolute'
  },
  frameLayout6: {
    height: 20,
    marginLeft: 47
  },
  frameParentPosition2: {
    top: 0,
    position: 'absolute'
  },
  tusFavoritos: {
    fontSize: FontSize.size_5xl,
    width: 186,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  backIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden'
  },
  pruebasDeCiclismo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  groupParentFlexBox3: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameWrapper: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  backParent: {
    flexDirection: 'row'
  },
  image84Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 110,
    height: 110
  },
  ciclismo: {
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsNaranja,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  heartIcon: {
    width: 14,
    height: 14,
    marginLeft: 119
  },
  ciclismoParent: {
    flexDirection: 'row'
  },
  modalidadMontaaLocalizaci: {
    fontFamily: FontFamily.inputPlaceholder
  },
  imGoingToContainer: {
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  precioDeInscripcin: {
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder
  },
  text: {
    color: Color.sportsNaranja
  },
  imGoingToContainer1: {
    fontSize: FontSize.size_2xs,
    marginTop: 10,
    textAlign: 'left'
  },
  frameContainer: {
    justifyContent: 'center'
  },
  image84Parent: {
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1
  },
  vectorIcon: {
    width: 15,
    height: 16
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.blanco,
    marginLeft: 10,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  vectorParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    marginTop: 10,
    justifyContent: 'center'
  },
  frameGroup: {
    justifyContent: 'center'
  },
  heartIcon1: {
    width: 17,
    height: 17,
    marginLeft: 119
  },
  frameParent: {
    paddingTop: Padding.p_48xl,
    paddingHorizontal: Padding.p_xl,
    top: 0,
    position: 'absolute'
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
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
  },
  menInferiorChild: {
    left: 165,
    width: 37,
    height: 24
  },
  menInferior: {
    bottom: 0,
    height: 75,
    left: '50%',
    marginLeft: -180
  },
  favoritos: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Favoritos
