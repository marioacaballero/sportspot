import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'

const Cuenta = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.cuenta}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={[styles.gestionaTuCuentaContainer, styles.editarPerfilTypo]}
          >
            {`GESTIONA TU 
CUENTA`}
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('EditarPerfil')}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require('../../assets/vector3.png')}
          />
          <View style={styles.frameGroup}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Editar perfil
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Actualiza los datos de tu cuenta
            </Text>
          </View>

          <View style={styles.vectorIconLayout}>
            <BackArrowSVG color={'#FF6F00'} />
          </View>
        </Pressable>

        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('Seguridad')}
        >
          <Image
            style={styles.shieldcheckIcon}
            contentFit="cover"
            source={require('../../assets/shieldcheck.png')}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Seguridad
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Mantén segura tu cuenta, elimina tu cuenta
            </Text>
          </View>

          <View style={styles.vectorIconLayout}>
            <BackArrowSVG color={'#FF6F00'} />
          </View>
        </Pressable>

        <Pressable
          style={styles.pencillineParent}
          onPress={() => navigation.navigate('DatosDePago')}
        >
          <Image
            style={styles.shieldcheckIcon}
            contentFit="cover"
            source={require('../../assets/wallet.png')}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.editarPerfilWrapper}>
              <Text style={[styles.editarPerfil, styles.editarPerfilTypo]}>
                Datos de pago
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Elimina o añade métodos de pago
            </Text>
          </View>

          <View style={styles.vectorIconLayout}>
            <BackArrowSVG color={'#FF6F00'} />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  editarPerfilTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  goingTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_3xs,
    color: Color.sportsVioleta
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl
  },
  vectorIcon: {
    width: 25,
    height: 25
  },
  editarPerfil: {
    fontSize: FontSize.size_sm,
    display: 'flex',
    alignItems: 'center'
  },
  editarPerfilWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  frameGroup: {
    flexDirection: 'column',
    width: '100%',
    marginLeft: 10
  },
  vectorIconLayout: {
    transform: 'rotate(-180deg)'
  },
  pencillineParent: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.blanco,
    backgroundColor: 'white',
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 40
  },
  shieldcheckIcon: {
    width: 32,
    height: 32
  },
  cuenta: {
    backgroundColor: Color.blanco,
    paddingHorizontal: 15,
    paddingVertical: 30,
    flex: 1
  }
})

export default Cuenta
