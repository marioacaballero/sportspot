import React, { useState, useCallback, useEffect } from 'react'
import { Text, StyleSheet, Pressable, View, Modal, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Maps from '../components/Maps'
import Sports from '../components/Sports'
import Calendario from '../components/Calendar'
import { Padding, FontFamily, Border, FontSize, Color } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { getAllSports } from '../redux/actions/sports'
import { getAllEventsFilters } from '../redux/actions/events'
import { setNameEvent } from '../redux/slices/events.slices'

const InicioBUSCADOR = ({ setMostrarInicioBuscador }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [frameContainer8Visible, setFrameContainer8Visible] = useState(false)
  const [frameContainer10Visible, setFrameContainer10Visible] = useState(false)
  const [selected, setSelected] = useState(null)
  const [eventsFilter, setEventsFilter] = useState({
    sportName: '',
    location: '',
    dateStart: '',
    dateEnd: ''
  })

  console.log(eventsFilter)

  useEffect(() => {
    dispatch(getAllSports())
  }, [])

  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true)
  }, [])

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false)
  }, [])

  const openFrameContainer8 = useCallback(() => {
    setFrameContainer8Visible(true)
  }, [])

  const closeFrameContainer8 = useCallback(() => {
    setFrameContainer8Visible(false)
  }, [])

  const openFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(true)
  }, [])

  const closeFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(false)
  }, [])

  const onSubmit = () => {
    dispatch(getAllEventsFilters(eventsFilter))
  }

  return (
    <>
      <View style={styles.frameContainer}>
        <Pressable
          onPress={() => setMostrarInicioBuscador(false)}
          style={styles.arrowContainer}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/up-arrow.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}
          onPress={openFrameContainer6}
        >
          <View style={styles.frameView}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require('../assets/frame-1547755976.png')}
            />
            <Text style={[styles.helloAshfak3, styles.helloTypo]}>
              Localización
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameWrapperSpaceBlock]}
          onPress={openFrameContainer8}
        >
          <View style={styles.frameView}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require('../assets/frame-1547755977.png')}
            />
            <Text style={styles.helloTypo}>Deporte</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameWrapperSpaceBlock]}
          onPress={openFrameContainer10}
        >
          <View style={styles.frameView}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require('../assets/frame-1547755978.png')}
            />
            <Text style={styles.helloTypo}>
              {!selected ? 'Fecha' : selected}
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.helloAshfakWrapper, styles.groupContainerFlexBox]}
          onPress={() => {
            onSubmit()
            dispatch(setNameEvent(eventsFilter))
            navigation.navigate('PruebasEncontradas')
            setMostrarInicioBuscador(false)
          }}
        >
          <Text style={[styles.helloAshfak6, styles.helloTypo1]}>Buscar</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay}>
          <Pressable
            style={styles.frameContainer6Bg}
            onPress={closeFrameContainer6}
          />
          <Maps
            onClose={closeFrameContainer6}
            setEventsFilter={setEventsFilter}
          />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer8Visible}>
        <View style={styles.frameContainer8Overlay}>
          <Pressable
            style={styles.frameContainer8Bg}
            onPress={closeFrameContainer8}
          />
          <Sports
            onClose={closeFrameContainer8}
            setEventsFilter={setEventsFilter}
          />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer10Visible}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeFrameContainer10}
          />
          <Calendario
            onClose={closeFrameContainer10}
            setSelected={setSelected}
            selected={selected}
            setEventsFilter={setEventsFilter}
            eventsFilter={eventsFilter}
          />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  helloTypo1: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  arrowContainer: {
    left: '87%',
    marginBottom: '3%'
  },
  frameWrapperSpaceBlock: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  helloTypo: {
    marginLeft: 11,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  groupContainerFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  wrapper: {
    width: 29,
    height: 22
  },
  frameContainer6Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer6Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameLayout1: {
    width: 24,
    height: 24
  },
  helloAshfak3: {
    flex: 1
  },
  frameView: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frameWrapper: {
    backgroundColor: Color.colorLinen_100,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl
  },
  frameContainer8Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer8Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  framePressable: {
    marginTop: 10,
    backgroundColor: Color.colorLinen_100,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl
  },
  frameContainer10Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer10Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  helloAshfak6: {
    color: Color.blanco,
    textAlign: 'center',
    fontSize: FontSize.inputPlaceholder_size,
    alignSelf: 'stretch'
  },
  helloAshfakWrapper: {
    backgroundColor: Color.sportsNaranja,
    height: 42,
    marginTop: 10,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: '100%'
  },
  frameContainer: {
    width: '100%',
    padding: 20,
    marginTop: 19
  },
  container: {
    width: 22,
    height: 25
  },
  frame: {
    width: 20,
    marginLeft: 47
  },
  groupContainer: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl,
    width: 360,
    left: 0,
    position: 'absolute'
  },
  inicioBuscador: {
    overflow: 'hidden',
    height: 800,
    flex: 1,
    backgroundColor: Color.blanco,
    width: '100%'
  },
  icon: {
    width: 29,
    height: 13
  }
})

export default InicioBUSCADOR
