import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Maps from '../components/Maps'
import Sports from '../components/Sports'
import { useNavigation } from '@react-navigation/native'
import Bienvenida from './Bienvenida'
import PruebasEncontradasFiltros from './PruebasEncontradasFiltros'
import PruebasEncontradasOrdenar from './PruebasEncontradasOrdenar'
import PruebasEncontradas from './PruebasEncontradas'
import Popupfiltros from '../components/Popupfiltros'
import PruebasEncontradasDetalle1 from './PruebasEncontradasDetalle1'
import PruebasEncontradasDetalle from './PruebasEncontradasDetalle'
import IniciarSesin from './IniciarSesin'
import Registrarse from './Registrarse'
import InicioBUSCADOR from './InicioBUSCADOR'
import InicioPREMIUM from './InicioPREMIUM'
import InicioNotificaciones from './InicioNotificaciones'
import InicioDeportista from './InicioDeportista'
import InicioOrganizador from './InicioOrganizador'
import InicioSUSCRIPCIONES from './InicioSUSCRIPCIONES'
import UltimasConsultas from './UltimasConsultas'
import Favoritos1 from './Favoritos1'
import Seguridad from './Seguridad'
import DatosDePago from './DatosDePago'
import Metodo from './Metodo'
import Metodo1 from './Metodo1'
import Cuenta from './Cuenta'
import TuPerfil from './TuPerfil'
import Favoritos from './Favoritos'
import HistorialDePruebas from './HistorialDePruebas'
import EscribirResea from '../components/EscribirResea'
import PopupAlerta from '../components/PopupAlerta'
import Calendar from '../components/Calendar'
import EditarPerfil from './EditarPerfil'
import { FontSize, FontFamily, Padding, Border, Color } from '../GlobalStyles'

const Group = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.mapsParent}>
        <Maps />
        <Sports />
        <LinearGradient
          style={styles.bienvenida}
          locations={[0, 0.13, 0.37, 0.64, 0.88, 1]}
          colors={[
            '#f25910',
            '#f7b99c',
            '#fff',
            '#fef8f5',
            '#642794',
            '#40036f'
          ]}
        >
          <View style={[styles.frameParent, styles.property1variantPosition]}>
            <View style={styles.capturaDePantalla20231024Parent}>
              <Image
                style={styles.capturaDePantalla20231024Icon}
                contentFit="cover"
                source={require('../assets/captura-de-pantalla-20231024-103636transformed-1.png')}
              />
              <Text
                style={[
                  styles.encuentraTuPrueba,
                  styles.planEspecialParaSpaceBlock
                ]}
              >
                ENCUENTRA TU PRUEBA
              </Text>
            </View>
            <View style={styles.capturaDePantalla20231024Parent}>
              <Text style={styles.bienvenidoa}>Bienvenido/a</Text>

              <View style={styles.frameGroup}>
                <Pressable
                  style={styles.iniciarWrapperFlexBox}
                  onPress={() => navigation.navigate('IniciarSesin')}
                >
                  <Text style={[styles.iniciarSesinCon, styles.mesTypo]}>
                    Iniciar sesión con Google
                  </Text>
                </Pressable>
                <View
                  style={[
                    styles.iniciarSesinConAppleWrapper,
                    styles.iniciarWrapperFlexBox
                  ]}
                >
                  <Text style={[styles.iniciarSesinCon, styles.mesTypo]}>
                    Iniciar sesión con Apple
                  </Text>
                </View>
                <Pressable
                  style={[
                    styles.iniciarSesinConAppleWrapper,
                    styles.iniciarWrapperFlexBox
                  ]}
                  onPress={() => navigation.navigate('Registrarse')}
                >
                  <Text style={[styles.iniciarSesinCon, styles.mesTypo]}>
                    Iniciar sesión sin registro
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1022.png')}
                />
                <Text style={[styles.es, styles.esTypo]}>ES</Text>
              </View>
              <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
                <View style={[styles.frameItem, styles.frameItemLayout]} />
                <Text style={[styles.en, styles.enTypo]}>EN</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.typeSqlInjectionParent, styles.popupAlertaLayout]}>
          <Text style={[styles.typeSql, styles.enTypo]}>Idioma</Text>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require('../assets/frame-1013.png')}
          />
        </View>
        <Bienvenida />
        <PruebasEncontradasFiltros />
        <PruebasEncontradasOrdenar />
        <PruebasEncontradas />
        <Popupfiltros />
        <PruebasEncontradasDetalle1 />
        <PruebasEncontradasDetalle />
        <IniciarSesin />
        <Registrarse />
        <InicioBUSCADOR />
        <InicioPREMIUM />
        <InicioNotificaciones />
        <InicioDeportista />
        <InicioOrganizador />
        <View
          style={[styles.inicioSuscripciones, styles.groupContainerSpaceBlock]}
        >
          <View style={styles.helloAshfakParent}>
            <Text style={styles.helloAshfakTypo}>INICIO</Text>
            <View style={styles.groupParent}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group-11712766971.png')}
              />
              <Image
                style={styles.materialSymbolsnotificationsIcon}
                contentFit="cover"
                source={require('../assets/materialsymbolsnotifications.png')}
              />
            </View>
          </View>
          <View style={styles.frameParent3}>
            <Pressable
              style={styles.helloAshfakGroup}
              onPress={() => navigation.navigate('InicioBUSCADOR')}
            >
              <Text style={[styles.helloAshfak1, styles.helloAshfak1Typo]}>
                Deportista
              </Text>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require('../assets/ellipse-48.png')}
              />
            </Pressable>
            <View style={styles.helloAshfakContainer}>
              <Text style={[styles.helloAshfak1, styles.helloAshfak1Typo]}>
                Organizador
              </Text>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require('../assets/ellipse-48.png')}
              />
            </View>
          </View>
          <View style={styles.div2CardsParent}>
            <View>
              <View style={[styles.card, styles.cardSpaceBlock]}>
                <View style={styles.content}>
                  <View style={styles.contentParent}>
                    <View style={styles.contentParent}>
                      <View style={styles.premiumParent}>
                        <Text style={styles.helloAshfakTypo}>Premium</Text>
                        <Text style={[styles.mes, styles.mesTypo]}>
                          €4.99/mes
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={[styles.planEspecialPara, styles.helloAshfak1Typo]}
                    >
                      Plan especial para un usuario
                    </Text>
                  </View>
                  <View style={styles.contentInner}>
                    <View
                      style={[styles.helloAshfakWrapper, styles.wrapperFlexBox]}
                    >
                      <Text style={[styles.helloAshfak3, styles.editarClr]}>
                        Adquirir ahora
                      </Text>
                    </View>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.content2}>
                    <View style={styles.frameParent4}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                    <View style={styles.frameParent5}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                    <View style={styles.frameParent5}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.div2Cards1}>
              <View style={[styles.card, styles.cardSpaceBlock]}>
                <View style={styles.content}>
                  <View style={styles.contentParent}>
                    <View style={styles.contentParent}>
                      <View style={styles.premiumParent}>
                        <Text style={styles.helloAshfakTypo}>VIP</Text>
                        <Text style={[styles.mes, styles.mesTypo]}>
                          €4.99/mes
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={[styles.planEspecialPara, styles.helloAshfak1Typo]}
                    >
                      Plan especial para un usuario
                    </Text>
                  </View>
                  <View style={styles.contentInner}>
                    <View
                      style={[styles.helloAshfakWrapper, styles.wrapperFlexBox]}
                    >
                      <Text style={[styles.helloAshfak3, styles.editarClr]}>
                        Adquirir ahora
                      </Text>
                    </View>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.content2}>
                    <View style={styles.frameParent4}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                    <View style={styles.frameParent5}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                    <View style={styles.frameParent5}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.div2Cards1}>
              <View style={[styles.card, styles.cardSpaceBlock]}>
                <View style={styles.content}>
                  <View style={styles.contentParent}>
                    <View style={styles.contentParent}>
                      <View style={styles.premiumParent}>
                        <Text style={styles.helloAshfakTypo}>PRO</Text>
                        <Text style={[styles.mes, styles.mesTypo]}>
                          €4.99/mes
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={[styles.planEspecialPara, styles.helloAshfak1Typo]}
                    >
                      Plan especial para un usuario
                    </Text>
                  </View>
                  <View style={styles.contentInner}>
                    <View
                      style={[styles.helloAshfakWrapper, styles.wrapperFlexBox]}
                    >
                      <Text style={[styles.helloAshfak3, styles.editarClr]}>
                        Adquirir ahora
                      </Text>
                    </View>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.content2}>
                    <View style={styles.frameParent4}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                    <View style={styles.frameParent5}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                    <View style={styles.frameParent5}>
                      <View style={styles.groupParent}>
                        <Image
                          style={[styles.checkIcon, styles.frameItemLayout]}
                          contentFit="cover"
                          source={require('../assets/check.png')}
                        />
                        <Text
                          style={[
                            styles.loremIpsumDolor,
                            styles.helloAshfak1Typo
                          ]}
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </View>
                      <Image
                        style={styles.infoIcon}
                        contentFit="cover"
                        source={require('../assets/info.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.menInferior, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-11712767002.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-15477560222.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
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
        <InicioSUSCRIPCIONES />
        <UltimasConsultas />
        <Favoritos1 />
        <Seguridad />
        <View style={[styles.seguridad, styles.seguridadPosition]}>
          <View
            style={[
              styles.gestionaTuCuentaWrapper,
              styles.seguridadInnerPosition
            ]}
          >
            <Text
              style={[styles.gestionaTuCuentaContainer, styles.helloAshfakTypo]}
            >
              {`GESTIONA TU `}CUENTA
            </Text>
          </View>
          <View style={[styles.seguridadInner, styles.seguridadInnerPosition]}>
            <View style={styles.groupParent}>
              <Text style={[styles.seguridad1, styles.seguridad1Typo]}>
                Seguridad
              </Text>
            </View>
          </View>
          <View style={styles.seguridadChild}>
            <View style={styles.card1Wrapper}>
              <View style={styles.card11}>
                <Image
                  style={styles.favoriteIActiveIcon}
                  contentFit="cover"
                  source={require('../assets/favorite-iactive.png')}
                />
                <Image
                  style={styles.passwordIcon}
                  contentFit="cover"
                  source={require('../assets/password.png')}
                />
                <View style={styles.contraseaWrapper}>
                  <Text style={[styles.contrasea, styles.iconLayout]}>
                    Contraseña
                  </Text>
                </View>
                <View style={styles.inputParent}>
                  <View style={styles.inputLayout}>
                    <View style={styles.inputContent}>
                      <Text style={styles.label}>Antigua contraseña</Text>
                      <Text style={[styles.placehoder, styles.seguridad1Typo]}>
                        ************
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.input1, styles.inputLayout]}>
                    <View style={styles.inputContent}>
                      <Text style={styles.label}>Nueva contraseña</Text>
                      <Text style={[styles.placehoder, styles.seguridad1Typo]}>
                        ************
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.input1, styles.inputLayout]}>
                    <View style={styles.inputContent}>
                      <Text style={styles.label}>Repetir contraseña</Text>
                      <Text style={[styles.placehoder, styles.seguridad1Typo]}>
                        ************
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.actualizarContraseaWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate('Seguridad')}
          >
            <Text style={[styles.actualizarContrasea, styles.editarClr]}>
              Actualizar contraseña
            </Text>
          </Pressable>
          <View style={[styles.menInferior1, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-1171276700.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-1547756022.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
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
        <DatosDePago />
        <Metodo />
        <Metodo1 />
        <Cuenta />
        <TuPerfil />
        <Favoritos />
        <HistorialDePruebas />
        <EscribirResea />
        <PopupAlerta />
        <View style={[styles.popupAlerta, styles.cardSpaceBlock]}>
          <View style={styles.helloAshfakGroup}>
            <Text style={[styles.alertaCreada, styles.helloAshfak1Typo]}>
              ¡Alerta creada!
            </Text>
            <Text
              style={[styles.sersNotificadoa2, styles.helloAshfak1Typo]}
            >{`Serás notificado/a 2 días antes
del cierre de la inscripción!`}</Text>
          </View>
          <View style={styles.popupAlertaInner}>
            <Pressable
              style={[styles.helloAshfakWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate('PruebasEncontradasDetalle')}
            >
              <Text style={[styles.helloAshfak3, styles.editarClr]}>
                ¡Gracias!
              </Text>
            </Pressable>
          </View>
        </View>
        <Calendar />
        <View style={styles.groupItem} />
        <View style={[styles.menInferior2, styles.frameWrapperLayout]}>
          <View style={[styles.property1default, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-1171276700.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-1547756022.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
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
          <View style={[styles.property1variant2, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-11712767001.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-1547756022.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
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
          <View style={[styles.property1variant3, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-1171276700.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-1547756022.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
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
          <View style={[styles.property1variant4, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-1171276700.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-15477560221.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
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
          <View style={[styles.property1variant5, styles.menLayout]}>
            <View
              style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
            >
              <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate('UltimasConsultas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-1171276700.png')}
                />
              </Pressable>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate('Favoritos1')}
              >
                <Image
                  style={styles.iconLayout}
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
                style={[styles.container, styles.frameItemLayout]}
                onPress={() => navigation.navigate('HistorialDePruebas')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/frame-1547756022.png')}
                />
              </Pressable>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate('TuPerfil')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/group-11712767012.png')}
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
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require('../assets/ellipse-7197.png')}
        />
        <Text style={[styles.digit, styles.mesTypo]}>27</Text>

        <View style={[styles.editarPerfilParent, styles.seguridadPosition]}>
          <EditarPerfil />
          <View style={styles.rectangleView} />
          <Text style={[styles.editar, styles.editarClr]}>Editar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  property1variantPosition: {
    marginLeft: -180,
    left: '50%'
  },
  planEspecialParaSpaceBlock: {
    marginTop: 6,
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  mesTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder
  },
  iniciarWrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_11xl,
    borderRadius: Border.br_31xl,
    flexDirection: 'row',
    backgroundColor: Color.violeta3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  frameWrapperLayout: {
    borderWidth: 1,
    position: 'absolute'
  },
  frameParentFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  esTypo: {
    marginLeft: 10,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'center'
  },
  frameItemLayout: {
    width: 20,
    height: 20
  },
  enTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder
  },
  popupAlertaLayout: {
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    position: 'absolute'
  },
  groupContainerSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    width: 360,
    position: 'absolute'
  },
  helloAshfak1Typo: {
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder
  },

  cardSpaceBlock: {
    padding: Padding.p_xl,
    backgroundColor: Color.blanco
  },
  wrapperFlexBox: {
    backgroundColor: Color.sportsNaranja,
    borderRadius: Border.br_31xl,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editarClr: {
    color: Color.blanco,
    textAlign: 'left'
  },
  menLayout: {
    height: 75,
    width: 360,
    position: 'absolute'
  },
  seguridadPosition: {
    top: 2955,
    height: 800,
    width: 360,
    position: 'absolute'
  },
  seguridadInnerPosition: {
    left: 20,
    position: 'absolute'
  },
  helloAshfakTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '700'
  },
  seguridad1Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '700'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  inputLayout: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: 295,
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  esTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: '500'
  },
  groupChild: {
    top: 374,
    backgroundColor: Color.colorBlack,
    width: 7310,
    height: 4639,
    left: 0,
    position: 'absolute'
  },
  capturaDePantalla20231024Icon: {
    width: 262,
    height: 69
  },
  encuentraTuPrueba: {
    fontSize: FontSize.size_3xl,
    textAlign: 'center',
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder
  },
  capturaDePantalla20231024Parent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bienvenidoa: {
    fontSize: 40,
    letterSpacing: 1.6,
    textAlign: 'left',
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  iniciarSesinCon: {
    color: Color.sportsVioleta,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    fontWeight: '700'
  },
  iniciarSesinConAppleWrapper: {
    marginTop: 10
  },
  frameGroup: {
    width: 318,
    height: 185,
    marginTop: 9
  },
  frameParent: {
    marginTop: -400,
    top: '50%',
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_181xl,
    paddingBottom: Padding.p_182xl,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 800,
    position: 'absolute'
  },
  bienvenida: {
    left: 932,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    height: 800,
    width: 360,
    top: 1164,
    position: 'absolute'
  },
  frameChild: {
    width: 18,
    height: 18,
    borderRadius: Border.br_7xs
  },
  es: {
    color: Color.rojoUbiqum,
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder
  },
  frameParent1: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.violeta3
  },
  frameItem: {
    borderColor: '#ced4da',
    borderWidth: 2,
    height: 20,
    borderRadius: Border.br_7xs,
    borderStyle: 'solid'
  },
  en: {
    marginLeft: 10,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'center'
  },
  frameParent2: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: '#f3e9ee'
  },
  frameView: {
    borderRadius: Border.br_3xs,
    alignSelf: 'stretch'
  },
  frameContainer: {
    flex: 1
  },
  frameWrapper: {
    top: 1829,
    left: 1061,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 2,
    elevation: 2,
    borderColor: '#dee2e6',
    width: 102,
    borderStyle: 'solid',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    flexDirection: 'row',
    backgroundColor: Color.violeta3
  },
  typeSql: {
    fontSize: 13,
    textAlign: 'right'
  },
  frameInner: {
    width: 24,
    height: 24
  },
  typeSqlInjectionParent: {
    top: 1788,
    left: 1075,
    width: 74,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_base,
    height: 32,
    flexDirection: 'row',
    backgroundColor: Color.violeta3,
    justifyContent: 'space-between'
  },
  groupIcon: {
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
    zIndex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  helloAshfak1: {
    color: Color.violeta3,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    fontWeight: '700'
  },
  ellipseIcon: {
    width: 6,
    height: 6,
    marginTop: 5
  },
  helloAshfakGroup: {
    alignItems: 'center'
  },
  helloAshfakContainer: {
    marginLeft: 30,
    alignItems: 'center'
  },
  frameParent3: {
    zIndex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  mes: {
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    fontSize: FontSize.size_lg,
    textAlign: 'left'
  },
  premiumParent: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  },
  contentParent: {
    alignSelf: 'stretch'
  },
  planEspecialPara: {
    color: Color.grisGeneral,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    marginTop: 6,
    fontWeight: '700'
  },
  helloAshfak3: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '700'
  },
  helloAshfakWrapper: {
    height: 38,
    padding: Padding.p_3xs,
    flex: 1
  },
  contentInner: {
    marginTop: 16,
    width: 282,
    flexDirection: 'row'
  },
  divider: {
    borderColor: Color.blanco,
    borderTopWidth: 1,
    height: 1,
    marginTop: 16,
    borderStyle: 'solid',
    alignSelf: 'stretch'
  },
  checkIcon: {
    height: 20,
    overflow: 'hidden'
  },
  loremIpsumDolor: {
    letterSpacing: 1,
    marginLeft: 8,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta,
    textAlign: 'left'
  },
  infoIcon: {
    height: 16,
    width: 16,
    overflow: 'hidden'
  },
  frameParent4: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  frameParent5: {
    marginTop: 16,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content2: {
    marginTop: 16,
    alignSelf: 'stretch'
  },
  content: {
    width: 282
  },
  card: {
    borderRadius: Border.br_3xs
  },
  div2Cards1: {
    marginTop: 20
  },
  div2CardsParent: {
    height: 564,
    zIndex: 2,
    marginTop: 20
  },
  wrapper: {
    width: 22,
    height: 25
  },
  vector: {
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
    width: 19,
    marginLeft: 47,
    height: 20
  },
  groupContainer: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0
  },
  menInferiorChild: {
    left: 165,
    width: 37,
    height: 24,
    top: 0,
    position: 'absolute'
  },
  menInferior: {
    top: 726,
    zIndex: 3,
    left: 0
  },
  inicioSuscripciones: {
    left: 3003,
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_5xl,
    backgroundColor: Color.blanco,
    overflow: 'hidden',
    height: 800,
    top: 0
  },
  gestionaTuCuentaContainer: {
    alignSelf: 'stretch'
  },
  gestionaTuCuentaWrapper: {
    top: 67
  },
  seguridad1: {
    textAlign: 'left',
    color: Color.sportsNaranja
  },
  seguridadInner: {
    top: 140,
    width: 320,
    justifyContent: 'center'
  },
  favoriteIActiveIcon: {
    display: 'none',
    height: 35,
    width: 16
  },
  passwordIcon: {
    width: 32,
    marginLeft: 11,
    height: 32
  },
  contrasea: {
    top: '0%',
    left: '0%',
    fontSize: FontSize.inputLabel_size,
    textTransform: 'capitalize',
    display: 'flex',
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,

    alignItems: 'center',
    position: 'absolute'
  },
  contraseaWrapper: {
    width: 195,
    marginLeft: 11,
    height: 32
  },
  label: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    alignSelf: 'stretch',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  placehoder: {
    color: Color.sportsVioleta,
    alignSelf: 'stretch',
    textAlign: 'left'
  },
  inputContent: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flex: 1
  },
  input1: {
    marginLeft: 15
  },
  inputParent: {
    width: 298,
    height: 165,
    marginLeft: 11,
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  card11: {
    borderRadius: Border.br_base,
    shadowColor: 'rgba(83, 89, 144, 0.07)',
    shadowRadius: 25,
    elevation: 25,
    width: 324,
    height: 221,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    backgroundColor: Color.blanco,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    flexDirection: 'row',
    overflow: 'hidden'
  },
  card1Wrapper: {
    height: 214
  },
  seguridadChild: {
    top: 173,
    left: 13,
    position: 'absolute'
  },
  actualizarContrasea: {
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '700'
  },
  actualizarContraseaWrapper: {
    top: 412,
    left: 29,
    width: 281,
    height: 43,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    flexDirection: 'row',
    position: 'absolute'
  },
  menInferior1: {
    bottom: 0,
    marginLeft: -180,
    left: '50%'
  },
  seguridad: {
    left: 5481,
    backgroundColor: Color.blanco,
    overflow: 'hidden'
  },
  alertaCreada: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontWeight: '700'
  },
  sersNotificadoa2: {
    marginTop: 14,
    fontWeight: '500',

    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  popupAlertaInner: {
    marginTop: 30,
    width: 282,
    flexDirection: 'row'
  },
  popupAlerta: {
    top: 2049,
    left: 4561,
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    position: 'absolute'
  },
  groupItem: {
    top: 2431,
    left: 462,
    borderRadius: 21,
    backgroundColor: 'rgba(242, 89, 16, 0.27)',
    width: 190,
    height: 35,
    position: 'absolute'
  },
  property1default: {
    bottom: 400,
    marginLeft: -180,
    left: '50%'
  },
  property1variant2: {
    bottom: 305,
    marginLeft: -180,
    left: '50%'
  },
  property1variant3: {
    bottom: 210,
    marginLeft: -180,
    left: '50%'
  },
  property1variant4: {
    bottom: 115,
    marginLeft: -180,
    left: '50%'
  },
  property1variant5: {
    bottom: 20,
    marginLeft: -180,
    left: '50%'
  },
  menInferior2: {
    borderRadius: Border.br_8xs,
    borderStyle: 'dashed',
    borderColor: '#9747ff',
    width: 400,
    height: 495,
    overflow: 'hidden',
    borderWidth: 1,
    top: 1164,
    left: 0
  },
  groupInner: {
    top: 2424,
    left: 607,
    width: 50,
    height: 50,
    position: 'absolute'
  },
  digit: {
    top: 2435,
    left: 621,
    lineHeight: 24,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    color: Color.sportsNaranja,
    position: 'absolute'
  },
  rectangleView: {
    top: 262,
    left: 122,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: 'rgba(186, 8, 249, 0.4)',
    width: 132,
    height: 32,
    position: 'absolute'
  },
  editar: {
    top: 266,
    left: 168,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppins,

    width: 94,
    height: 31,
    fontWeight: '500',
    color: Color.blanco,
    position: 'absolute'
  },
  editarPerfilParent: {
    left: 4669
  },
  mapsParent: {
    marginLeft: -3268,
    width: 7041,
    height: 4640,
    left: '50%',
    top: 0,
    position: 'absolute'
  },
  rectangleParent: {
    height: 5013,
    width: '100%',
    flex: 1
  }
})

export default Group
