import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Padding, Border, Color } from '../GlobalStyles'
import { Path, Rect, Svg } from 'react-native-svg'

const TuPerfil = () => {
  const navigation = useNavigation()

  return (
    <ScrollView
      style={styles.tuPerfil}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* <View style={styles.pajamaswork} /> */}
      <View style={styles.tuPerfilParent}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={[styles.tuPerfil1, styles.tuPerfil1Typo]}>
            TU PERFIL
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Svg width="25" height="25" viewBox="0 0 21 21" fill="none">
              <Rect
                width="21"
                height="21"
                transform="translate(0 21) rotate(-90)"
                fill="white"
              />
              <Path
                d="M6.17798 4.98006L0.65625 10.5018L6.17798 16.0234L7.10604 15.0953L3.16862 11.158L20.3124 11.158L20.3124 9.84546L3.16874 9.84546L7.10604 5.90816L6.17798 4.98006Z"
                fill={Color.sportsVioleta}
              />
            </Svg>
          </Pressable>
        </View>
        <View style={styles.unsplashn6gnca77urcParent}>
          <Image
            style={styles.unsplashn6gnca77urcIcon}
            contentFit="cover"
            source={require('../assets/unsplashn6gnca77urc.png')}
          />
          <View style={styles.laraMacasBlancoCarrrilhoParent}>
            <Text
              style={[styles.laraMacasBlanco, styles.tuPerfil1Typo]}
            >{`Lara Macías
Blanco Carrrilho`}</Text>
            <Text style={styles.mujer23Aos}>Mujer, 23 años</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.solarsettingsBoldParent}
            onPress={() => navigation.navigate('Cuenta')}
          >
            <Image
              style={styles.solarsettingsBoldIcon}
              contentFit="cover"
              source={require('../assets/solarsettingsbold.png')}
            />
            <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
              Gestiona tu cuenta
            </Text>
          </Pressable>
          <View
            style={[
              styles.solarsettingsBoldGroup,
              styles.solarsettingsSpaceBlock
            ]}
          >
            <Image
              style={styles.solarsettingsBoldIcon}
              contentFit="cover"
              source={require('../assets/solarsettingsbold1.png')}
            />
            <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
              Premios alcanzados
            </Text>
          </View>
          <View
            style={[
              styles.solarsettingsBoldGroup,
              styles.solarsettingsSpaceBlock
            ]}
          >
            <Image
              style={styles.solarsettingsBoldIcon}
              contentFit="cover"
              source={require('../assets/solarsettingsbold2.png')}
            />
            <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
              Entidades colaboradores
            </Text>
          </View>
          <View
            style={[
              styles.solarsettingsBoldGroup,
              styles.solarsettingsSpaceBlock
            ]}
          >
            <Image
              style={styles.solarsettingsBoldIcon}
              contentFit="cover"
              source={require('../assets/solarsettingsbold3.png')}
            />
            <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
              Contactar con atención al cliente
            </Text>
          </View>
          <Pressable
            style={[
              styles.solarsettingsBoldGroup,
              styles.solarsettingsSpaceBlock
            ]}
            onPress={() => navigation.navigate('Metodo1')}
          >
            <Image
              style={styles.solarsettingsBoldIcon}
              contentFit="cover"
              source={require('../assets/solarsettingsbold4.png')}
            />
            <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
              Trabaja con nosotros
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.solarsettingsBoldParent1,
              styles.solarsettingsSpaceBlock
            ]}
            onPress={() => {
              localStorage.clear()
              navigation.navigate('IniciarSesin')
            }}
          >
            <Image
              style={styles.solarsettingsBoldIcon}
              contentFit="cover"
              source={require('../assets/solarsettingsbold5.png')}
            />
            <Text style={[styles.cerrarSesin, styles.cerrarSesinTypo]}>
              Cerrar sesión
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tuPerfil1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  cerrarSesinTypo: {
    marginLeft: 10,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  solarsettingsSpaceBlock: {
    marginTop: 10,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    height: 43,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorPosition: {
    left: 0,
    width: 360
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  pajamaswork: {
    top: 618,
    left: 150,
    width: 16,
    height: 16,
    overflow: 'hidden'
  },
  tuPerfil1: {
    fontSize: FontSize.size_11xl,
    color: Color.sportsVioleta
  },
  unsplashn6gnca77urcIcon: {
    borderRadius: Border.br_5xs,
    width: 132,
    height: 122
  },
  laraMacasBlanco: {
    fontSize: FontSize.size_xl,
    color: Color.sportsNaranja
  },
  mujer23Aos: {
    fontFamily: FontFamily.inputPlaceholder,
    marginTop: 8,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  laraMacasBlancoCarrrilhoParent: {
    marginLeft: 21
  },
  unsplashn6gnca77urcParent: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row'
  },
  solarsettingsBoldIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_31xl,
    overflow: 'hidden'
  },
  gestionaTuCuenta: {
    color: Color.sportsVioleta
  },
  solarsettingsBoldParent: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    height: 43,
    backgroundColor: Color.naranja3,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row'
  },
  solarsettingsBoldGroup: {
    backgroundColor: Color.naranja3,
    marginTop: 10
  },
  cerrarSesin: {
    color: Color.violeta3
  },
  solarsettingsBoldParent1: {
    backgroundColor: Color.sportsVioleta
  },
  frameParent: {
    alignSelf: 'stretch',
    marginTop: 30,
    alignItems: 'center'
  },
  tuPerfilParent: {
    // marginLeft: -180,
    // left: '50%',
    paddingTop: 30,
    paddingHorizontal: Padding.p_xl,
    // width: 360,
    top: 0
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
    backgroundColor: Color.gris,
    height: 65,
    justifyContent: 'center',
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
    left: 0,
    paddingHorizontal: Padding.p_xl
  },
  tuPerfil: {
    backgroundColor: Color.blanco,
    flex: 1,
    height: 800,
    overflow: 'hidden',
    width: '100%'
  }
})

export default TuPerfil
