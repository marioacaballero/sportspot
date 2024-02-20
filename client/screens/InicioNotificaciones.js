import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Padding, Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getAlNotificationsByUser } from '../redux/actions/notifications'

const InicioNotificaciones = () => {
  const { notifications } = useSelector((state) => state.notifications)
  const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  // const navigation = useNavigation()

  useEffect(() => {
    dispatch(getAlNotificationsByUser(user.id))
  }, [])

  return (
    <View style={styles.frameParent1}>
      <View style={styles.materialSymbolsnotificationsParent}>
        <Image
          style={[
            styles.materialSymbolsnotificationsIcon,
            styles.materialLayout
          ]}
          contentFit="cover"
          source={require('../assets/materialsymbolsnotifications2.png')}
        />
        <Text style={[styles.helloAshfak6, styles.imGoingToClr]}>
          Notificaciones
        </Text>
      </View>

      {notifications &&
        notifications.map((notification, i) => (
          <View key={i}>
            <View style={[styles.lineView, styles.frameChildBorder]} />
            <View style={styles.frameParent2}>
              <View style={styles.frameParent3}>
                <View style={styles.frameParent4}>
                  <View style={styles.vectorWrapper}>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require('../assets/vector6.png')}
                    />
                  </View>
                  <View style={styles.helloAshfakParent3}>
                    <Text style={[styles.helloAshfak7, styles.helloTypo4]}>
                      {notification.title}
                    </Text>
                    <Text style={[styles.helloAshfak8, styles.helloTypo1]}>
                      {notification.message}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.helloAshfak9, styles.helloTypo]}>
                  {notification.createdAt}
                </Text>
              </View>
              <View style={[styles.frameChild1, styles.frameChildBorder]} />
            </View>
          </View>
        ))}

      {/* <View style={styles.materialSymbolsnotificationsParent}>
        <Image
          style={[
            styles.materialSymbolsnotificationsIcon,
            styles.materialLayout
          ]}
          contentFit="cover"
          source={require('../assets/materialsymbolsnotifications2.png')}
        />
        <Text style={[styles.helloAshfak6, styles.imGoingToClr]}>
          Notificaciones
        </Text>
      </View>
      <View style={[styles.lineView, styles.frameChildBorder]} />
      <View style={styles.frameParent2}>
        <View style={styles.frameParent3}>
          <View style={styles.frameParent4}>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
            </View>
            <View style={styles.helloAshfakParent3}>
              <Text style={[styles.helloAshfak7, styles.helloTypo4]}>
                ¡Nueva prueba cerca de ti!
              </Text>
              <Text style={[styles.helloAshfak8, styles.helloTypo1]}>
                Échale un vistazo
              </Text>
            </View>
          </View>
          <Text style={[styles.helloAshfak9, styles.helloTypo]}>
            1 nov, a las 20:05
          </Text>
        </View>
        <View style={[styles.frameChild1, styles.frameChildBorder]} />
      </View> */}

      {/* <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={[styles.mdibankIcon, styles.iconPosition]}
                contentFit="cover"
                source={require('../assets/mdibank.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text
                style={[styles.helloAshfak10, styles.helloTypo4]}
              >{`¡El Club Lorem Ipsum acaba de
                  publicar una nueva prueba!`}</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>1 nov, a las 20:05</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View>
      <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={[styles.mdibankIcon, styles.iconPosition]}
                contentFit="cover"
                source={require('../assets/mdibank.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text
                style={[styles.helloAshfak10, styles.helloTypo4]}
              >{`¡El Club Lorem Ipsum acaba de
                  publicar una nueva prueba!`}</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>25 oct, a las 15:16</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View>
      <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text style={[styles.helloAshfak14, styles.helloTypo5]}>
                ¡Nueva prueba cerca de ti!
              </Text>
              <Text style={styles.helloTypo1}>Échale un vistazo</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>20 oct, a las 21:06</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View>
      <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={[styles.ionbicycleIcon, styles.iconPosition]}
                contentFit="cover"
                source={require('../assets/ionbicycle.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text style={[styles.helloAshfak14, styles.helloTypo5]}>
                Prueba de ciclismo añadida recientemente
              </Text>
              <Text style={styles.helloTypo1}>¡No te la pierdas!</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>16 oct, a las 18:07</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View>
      <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text style={[styles.helloAshfak14, styles.helloTypo5]}>
                ¡Nueva prueba cerca de ti!
              </Text>
              <Text style={styles.helloTypo1}>Échale un vistazo</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>13 oct, a las 10:53</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View>
      <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={[
                  styles.materialSymbolshikingSharpIcon,
                  styles.iconPosition
                ]}
                contentFit="cover"
                source={require('../assets/materialsymbolshikingsharp.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text
                style={[styles.helloAshfak10, styles.helloTypo4]}
              >{`Prueba de senderismo añadida
                  recientemente`}</Text>
              <Text style={styles.helloTypo1}>¡No te la pierdas!</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>9 oct, a las 13:39</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View>
      <View style={styles.frameParent5}>
        <View>
          <View style={styles.frameParent7}>
            <View style={styles.vectorWrapper}>
              <Image
                style={[styles.mdibankIcon, styles.iconPosition]}
                contentFit="cover"
                source={require('../assets/mdibank.png')}
              />
            </View>
            <View style={styles.helloAshfakWrapper}>
              <Text
                style={[styles.helloAshfak10, styles.helloTypo4]}
              >{`¡El Club Lorem Ipsum acaba de
                  publicar una nueva prueba!`}</Text>
            </View>
          </View>
          <Text style={styles.helloTypo}>3 oct, a las 09:45</Text>
        </View>
        <View style={[styles.frameChild2, styles.frameChildBorder]} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: 'center',
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameGroupFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  helloTypo4: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  materialLayout: {
    width: 27,
    height: 24
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frameGroupSpaceBlock: {
    paddingVertical: 0,
    alignSelf: 'stretch'
  },
  helloTypo2: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100'
  },
  imGoingToClr: {
    color: Color.sportsNaranja,
    textAlign: 'left'
  },
  minTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  menPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  vectorLayout: {
    width: 23,
    height: 20
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.violeta3,
    borderStyle: 'solid'
  },
  helloTypo1: {
    fontFamily: FontFamily.inputPlaceholder,
    marginTop: 2,
    fontSize: FontSize.inputLabel_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  helloTypo: {
    color: Color.colorThistle,
    fontSize: FontSize.size_3xs,
    marginTop: 5,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    textAlign: 'left'
  },
  iconPosition: {
    marginTop: -9.5,
    zIndex: 0,
    left: '50%',
    top: '50%',
    overflow: 'hidden',
    position: 'absolute'
  },
  helloTypo5: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl
  },
  frameChild: {
    width: 29,
    height: 22
  },
  icon: {
    overflow: 'hidden'
  },
  materialSymbolsnotifications: {
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
    fontWeight: '100',
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
    fontWeight: '100',
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  image94Icon: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    maxWidth: '100%',
    height: 95,
    overflow: 'hidden',
    alignSelf: 'stretch',
    width: '100%'
  },
  imGoingTo: {
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '100',
    alignSelf: 'stretch'
  },
  min: {
    color: Color.sportsVioleta
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
  image94ShadowBox: {
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
  frameWrapper: {
    width: 328,
    marginTop: 10,
    flexDirection: 'row'
  },
  frameView: {
    marginTop: 19
  },
  min2: {
    color: Color.colorGray_100
  },
  frameParent: {
    paddingTop: Padding.p_48xl,
    paddingBottom: Padding.p_6xl,
    top: 0,
    height: 800
  },
  wrapper: {
    height: 25,
    width: 22
  },
  vector: {
    marginLeft: 47,
    height: 20
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    width: 20,
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
    alignItems: 'center',
    flexDirection: 'row'
  },
  materialSymbolsnotificationsIcon: {
    overflow: 'hidden',
    height: 24
  },
  helloAshfak6: {
    fontSize: FontSize.size_lg,
    marginLeft: 13,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    flex: 1
  },
  materialSymbolsnotificationsParent: {
    alignItems: 'flex-end',
    height: 30,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  lineView: {
    marginTop: 12,
    alignSelf: 'stretch'
  },
  vectorIcon: {
    marginTop: -8.5,
    marginLeft: -7,
    width: 13,
    height: 17,
    zIndex: 0,
    left: '50%',
    top: '50%',
    position: 'absolute'
  },
  vectorWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.sportsNaranja,
    width: 32,
    height: 33
  },
  helloAshfak7: {
    fontSize: FontSize.inputLabel_size,
    alignSelf: 'stretch'
  },
  helloAshfak8: {
    alignSelf: 'stretch'
  },
  helloAshfakParent3: {
    marginLeft: 10,
    flex: 1
  },
  frameParent4: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  helloAshfak9: {
    alignSelf: 'stretch'
  },
  frameParent3: {
    alignSelf: 'stretch'
  },
  frameChild1: {
    marginTop: 5,
    alignSelf: 'stretch'
  },
  frameParent2: {
    marginTop: 12,
    alignSelf: 'stretch'
  },
  mdibankIcon: {
    marginLeft: -9,
    width: 18,
    height: 19
  },
  helloAshfak10: {
    fontSize: FontSize.inputLabel_size
  },
  helloAshfakWrapper: {
    marginLeft: 10
  },
  frameParent7: {
    flexDirection: 'row'
  },
  frameChild2: {
    width: 281,
    marginTop: 5
  },
  frameParent5: {
    marginTop: 12
  },
  helloAshfak14: {
    textAlign: 'center',
    fontSize: FontSize.inputLabel_size,
    color: Color.sportsVioleta
  },
  ionbicycleIcon: {
    marginLeft: -12,
    height: 20,
    width: 23
  },
  materialSymbolshikingSharpIcon: {
    marginLeft: -11,
    height: 20,
    width: 22
  },
  frameParent1: {
    justifyContent: 'center',
    alignSelf: 'center',
    minWidth: '100%',
    // position: 'absolute',
    // top: 100,
    // right: 20,
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(69, 68, 68, 0.47)',
    // width: 320,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xl,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4
    },
    backgroundColor: Color.blanco,
    zIndex: 10
  }
})

export default InicioNotificaciones
