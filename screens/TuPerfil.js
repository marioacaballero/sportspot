import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Padding, Border, Color } from '../GlobalStyles'

const TuPerfil = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.tuPerfil}>
      <View style={styles.pajamaswork} />
      <View style={styles.tuPerfilParent}>
        <Text style={[styles.tuPerfil1, styles.tuPerfil1Typo]}>TU PERFIL</Text>
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
            onPress={() => navigation.navigate('IniciarSesin')}
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
    </View>
  )
}

const styles = StyleSheet.create({
  tuPerfil1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  cerrarSesinTypo: {
    marginLeft: 10,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
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
    width: 360,
    position: 'absolute'
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
    position: 'absolute',
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
    marginLeft: -180,
    left: '50%',
    paddingTop: Padding.p_48xl,
    paddingHorizontal: Padding.p_xl,
    width: 360,
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
