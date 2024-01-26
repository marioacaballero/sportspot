import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontSize, FontFamily, Color, Border } from '../GlobalStyles'
import InicioPREMIUM from './InicioPREMIUM'
import InicioNotificaciones from './InicioNotificaciones'

const InicioOrganizador = () => {
  const navigation = useNavigation()

  const [modalPremium, setModalPremium] = useState(false)
  const [modalNotifications, setModalNotifications] = useState(false)

  const toggleModalPremium = () => {
    setModalPremium(!modalPremium)
  }

  const toggleModalNotifications = () => {
    setModalNotifications(!modalNotifications)
  }

  return (
    <ScrollView
      style={[styles.inicioOrganizador, styles.groupContainerSpaceBlock]}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.helloAshfakParent}>
        <Text style={styles.helloAshfak}>INICIO</Text>
        <View style={styles.groupParent}>
          <Pressable style={styles.wrapper} onPress={toggleModalPremium}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require('../assets/group-11712766982.png')}
            />
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalPremium}
            >
              <InicioPREMIUM setModalVisible={setModalPremium} />
            </Modal>
          </Pressable>

          <Pressable
            style={styles.materialSymbolsnotifications}
            onPress={toggleModalNotifications}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require('../assets/materialsymbolsnotifications.png')}
            />
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalNotifications}
            >
              <InicioNotificaciones setModalVisible={setModalNotifications} />
            </Modal>
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <Pressable
          style={styles.helloAshfakGroup}
          onPress={() => navigation.navigate('InicioDeportista')}
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
        <Image
          style={{ marginTop: 15 }}
          source={require('../assets/right-organization.png')}
        />
        {/* <View style={styles.connectorLayout} /> */}
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
        <Image
          style={{ marginTop: 15 }}
          source={require('../assets/left-organization.png')}
        />
        {/* <View style={[styles.connectorLine1, styles.connectorLayout]} /> */}
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
        <View style={{ width: '100%' }}>
          <Image
            style={{ marginTop: 15 }}
            source={require('../assets/right-organization.png')}
          />
        </View>
        {/* <View style={styles.connectorLayout} /> */}
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  groupContainerSpaceBlock: {
    paddingHorizontal: Padding.p_xl
  },
  frameParentSpaceBlock: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  helloTypo2: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloTypo1: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloTypo: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.inputPlaceholderThin,
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
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_6xl,
    top: 0
  },
  helloAshfak3: {
    textAlign: 'center',
    fontSize: FontSize.size_sm,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
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
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfak7: {
    marginTop: 2,
    color: Color.violeta2,
    fontFamily: FontFamily.inputPlaceholderThin,
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
  inicioOrganizador: {
    backgroundColor: Color.blanco,
    height: 800,
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_5xl,
    width: '100%',
    flex: 1
  },
  materialSymbolsnotifications: {
    width: 27,
    marginLeft: 7,
    height: 24
  },
  icon1: {
    overflow: 'hidden'
  },
  frameParentFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    left: 0,
    position: 'absolute'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  }
})

export default InicioOrganizador
