import React, { useState, useCallback, useEffect } from 'react'
import { Text, StyleSheet, Pressable, View, Modal, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Maps from '../components/Maps'
import Sports from '../components/Sports'
import Calendario from '../components/Calendar'
import { Padding, FontFamily, Border, FontSize, Color } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSports } from '../redux/actions/sports'
import { getAllEventsFilters } from '../redux/actions/events'
import { setNameEvent } from '../redux/slices/events.slices'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const InicioBUSCADOR = ({ setMostrarInicioBuscador }) => {
  const navigation = useNavigation()
  const { events } = useSelector((state) => state.events)
  const dispatch = useDispatch()
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [frameContainer8Visible, setFrameContainer8Visible] = useState(false)
  const [frameContainer10Visible, setFrameContainer10Visible] = useState(false)
  const [selected, setSelected] = useState(null)
  const [localSport, setLocalSport] = useState('')
  const [eventsFilter, setEventsFilter] = useState({
    sportName: '',
    location: '',
    dateStart: []
  })

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
    const resQuery = {}
    for (let p in eventsFilter) {
      if (eventsFilter[p].length > 0) {
        resQuery[p] = eventsFilter[p]
      }
    }
    dispatch(getAllEventsFilters(resQuery))
  }

  return (
    <>
      <View style={styles.frameContainer}>
        {/* <Pressable
          onPress={() => setMostrarInicioBuscador(false)}
          style={styles.arrowContainer}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/up-arrow.png')}
          />
        </Pressable> */}
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
            <Text
              style={[
                styles.helloAshfak3,
                styles.helloTypo,
                { fontWeight: 'bold' }
              ]}
            >
              {eventsFilter.location ? eventsFilter.location : 'Localización'}
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
            <Text style={styles.helloTypo}>
              {!localSport ? 'Deporte' : localSport}
            </Text>
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
          style={styles.helloAshfakWrapper}
          onPress={() => {
            onSubmit()
            dispatch(setNameEvent(eventsFilter))
            navigation.navigate('PruebasEncontradas')
            setMostrarInicioBuscador(false)
          }}
        >
          <Text style={styles.helloAshfak6}>Buscar</Text>
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
            setLocalSport={setLocalSport}
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
  arrowContainer: {
    position: 'absolute',
    left: '110%',
    top: 36
  },
  frameWrapperSpaceBlock: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  helloTypo: {
    marginLeft: 11,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: 'bold',
    maxWidth: '90%',
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta
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
    alignSelf: 'stretch',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfakWrapper: {
    backgroundColor: Color.sportsNaranja,
    height: 42,
    marginTop: 10,
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  frameContainer: {
    width: '100%',
    padding: 20,
    paddingHorizontal: 6,
    marginTop: 0
  },
  frame: {
    width: 20,
    marginLeft: 47
  },
  icon: {
    width: 20,
    height: 9,
    top: 1
  }
})

export default InicioBUSCADOR
