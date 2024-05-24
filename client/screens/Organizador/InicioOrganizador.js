import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
  Linking
} from 'react-native'
// import FomularioEventos from '../components/FomularioEventos'
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border
} from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import WebSVG from '../../components/SVG/WebSVG'
import MensajeSVG from '../../components/SVG/MensajeSVG'
import ContactoSVG from '../../components/SVG/ContactoSVG'
import AccesoOrganizadorModal from '../../components/AccesoOrganizadorModal'
import { useDispatch, useSelector } from 'react-redux'
import { setShowGuestModal } from '../../redux/slices/events.slices'

const InicioOrganizador = () => {
  const navigation = useNavigation()
  const { user } = useSelector((state) => state.users)
  // console.log(user?.rol)
  const isGuest = user?.email === 'guestUser@gmail.com'
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <ScrollView style={[styles.inicioOrganizador]}>
      <View style={styles.topContainer}>
        {user?.rol === 'sportsman' && (
          <Pressable
            style={styles.helloAshfakWrapper2}
            onPress={() => {
              if (isGuest) {
                dispatch(setShowGuestModal(true))
                return
              }
              toggleModal()
            }}
          >
            <Text style={styles.buttonsText}>Acceso como organizador</Text>
          </Pressable>
        )}
        {/* {user?.rol === 'organizer' && (
          <Pressable
            style={styles.helloAshfakWrapper}
            onPress={() => navigation.navigate('PublicarEvento')}
            disabled={user?.rol === 'sportsman'}
          >
            <Text style={styles.buttonsText}>Publicar un evento</Text>
          </Pressable>
        )} */}
        <Pressable
          style={styles.helloAshfakWrapper}
          onPress={() => {
            if (isGuest) {
              dispatch(setShowGuestModal(true))
              return
            }
            navigation.navigate('PublicarEvento')
          }}
          // disabled={user?.rol === 'sportsman'}
        >
          <Text style={styles.buttonsText}>Publicar un evento</Text>
        </Pressable>
        {/* <Pressable
          style={styles.helloAshfakWrapper}
          onPress={() => navigation.navigate('Directorio')}
        >
          <Text style={styles.buttonsText}>Ver eventos creados</Text>
        </Pressable> */}
      </View>
      <View style={styles.frameView}>
        <Text style={styles.helloAshfak3}>
          Breve descripción del servicio a organizadores
        </Text>
        <View style={[styles.healthiconsmegaphoneParent]}>
          <Image
            style={styles.healthiconsmegaphone}
            contentFit="cover"
            source={require('../../assets/megaphone.png')}
          />
          <View style={styles.helloAshfakParent1}>
            <Text style={[styles.helloAshfak4, styles.helloTypo1]}>
              NUEVO PUNTO DE CONTACTO
            </Text>
            <Text style={[styles.helloAshfak5, styles.helloTypo]}>
              Entre deportistas y organizadores.
            </Text>
          </View>
        </View>
        <Image
          style={{ width: '94%', height: 22, marginTop: 15 }}
          source={require('../../assets/purpleArrow.png')}
        />
        {/* <View style={styles.connectorLayout} /> */}
        <View style={styles.healthiconsmegaphoneParent}>
          <View style={styles.helloAshfakParent2}>
            <Text style={[styles.helloAshfak6, styles.helloLayout]}>
              AUMENTO DE INSCRIPCIONES
            </Text>
            <Text style={[styles.helloAshfak7, styles.helloTypo]}>
              En las competiciones ofrecidas por los organizadores
            </Text>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={{ width: 46, height: 78, marginLeft: -10 }}
              contentFit="cover"
              source={require('../../assets/orangeUpArrow.png')}
            />
          </View>
        </View>
        <Image
          style={{ width: '94%', height: 22, marginTop: 15 }}
          source={require('../../assets/purpleLeftArrow.png')}
        />
        {/* <View style={[styles.connectorLine1, styles.connectorLayout]} /> */}
        <View style={styles.healthiconsmegaphoneParent}>
          <Image
            style={styles.faSolidcoinsIcon}
            contentFit="cover"
            source={require('../../assets/ingresos.png')}
          />
          <View style={styles.helloAshfakParent3}>
            <Text style={[styles.helloAshfak4, styles.helloTypo1]}>
              AUMENTO DE INGRESOS
            </Text>
            <Text style={[styles.helloAshfak9, styles.helloTypo]}>
              Para los organizadores de los eventos deportivos
            </Text>
          </View>
        </View>
        <View style={{ width: '100%' }}>
          <Image
            style={{ width: '94%', height: 22, marginTop: 15 }}
            source={require('../../assets/purpleArrow.png')}
          />
        </View>
        {/* <View style={styles.connectorLayout} /> */}
        <View style={styles.healthiconsmegaphoneParent}>
          <View style={styles.helloAshfakParent2}>
            <Text style={[styles.helloAshfak4, styles.helloTypo1]}>
              ÉXITO DE PRUEBAS
            </Text>
            <Text style={[styles.helloAshfak9, styles.helloTypo]}>
              Por parte de los deportistas, generando renombre en competiciones
              de los organizadores
            </Text>
          </View>
          <Image
            style={styles.fluentMdl2medalSolidIcon}
            contentFit="cover"
            source={require('../../assets/medal.png')}
          />
        </View>

        {/* <FomularioEventos /> */}
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => Linking.openURL('https://www.spotsport.eu/')}
            style={styles.helloAshfakWrapper}
          >
            <WebSVG />
            <Text style={styles.buttonsText}>spotsport.eu</Text>
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL('mailto:organizadores@spotsport.eu')}
            style={styles.helloAshfakWrapper}
          >
            <MensajeSVG />
            <Text style={styles.buttonsText}>organizadores@spotsport.eu</Text>
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL('tel:organizadores@spotsport.eu')}
            style={styles.helloAshfakWrapper}
          >
            <ContactoSVG />
            <Text style={styles.buttonsText}>600014747</Text>
          </Pressable>
        </View>
      </View>
      {/* <Image
        style={{
          width: '100%',
          height: 751 * 0.85,
          alignSelf: 'center'
        }}
        contentFit="cover"
        source={require('../../assets/content.png')}
      /> */}
      {modalVisible && <AccesoOrganizadorModal toggleModal={toggleModal} />}
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
  topContainer: {
    gap: 5,
    marginBottom: 30
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
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },

  helloTypo2: {
    fontSize: FontSize.size_mid,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloTypo1: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloTypo: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    fontSize: FontSize.size_mid
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
    fontSize: FontSize.size_xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    alignSelf: 'stretch'
  },
  healthiconsmegaphone: {
    width: 87,
    height: 77,
    overflow: 'hidden'
  },
  helloAshfak4: {
    textAlign: 'left',
    alignSelf: 'stretch',
    width: '60%',
    fontSize: FontSize.size_mid
  },
  helloAshfak5: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: FontSize.size_mid
  },
  helloAshfakParent1: {
    marginLeft: 27,
    flex: 1
  },
  healthiconsmegaphoneParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  helloAshfak6: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_mid,
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
  helloAshfakParent4: {
    // flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
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
    width: 63,
    height: 48,
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
    width: 65,
    height: 91,
    overflow: 'hidden'
  },
  frameView: {
    padding: Padding.p_xl,
    zIndex: 2,
    overflow: 'hidden',
    backgroundColor: Color.colorLinen_200,
    borderRadius: 30
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
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  inicioOrganizador: {
    height: '100%',
    marginTop: 20,
    paddingBottom: 15,
    width: '100%',
    alignSelf: 'center',
    marginLeft: 5
  },
  buttonsContainer: {
    marginTop: 20
  },
  helloAshfakWrapper: {
    backgroundColor: Color.sportsNaranja,
    height: 48,
    marginTop: 10,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  helloAshfakWrapper2: {
    backgroundColor: Color.sportsVioleta,
    height: 48,
    marginTop: 10,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  buttonsText: {
    color: Color.blanco,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder
  }
})

export default InicioOrganizador
