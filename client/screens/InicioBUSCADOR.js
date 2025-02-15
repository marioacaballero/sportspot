import React, { useState, useCallback, useEffect } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Maps from '../components/Maps'
import Sports from '../components/Sports'
import Calendario from '../components/Calendar'
import { Padding, FontFamily, Border, FontSize, Color } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSports } from '../redux/actions/sports'
import { getAllEventsFilters } from '../redux/actions/events'
import {
  setNameEvent,
  setSearchEventsFilters
} from '../redux/slices/events.slices'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useTranslation } from 'react-i18next'
import { AntDesign } from '@expo/vector-icons'

const InicioBUSCADOR = ({
  setMostrarInicioBuscador,
  searchedSports,
  setSearchedSports
}) => {
  const navigation = useNavigation()
  const { events, nearbyLoading, searchEventsFilters } = useSelector(
    (state) => state.events
  )
  const dispatch = useDispatch()
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false)
  const [frameContainer8Visible, setFrameContainer8Visible] = useState(false)
  const [frameContainer10Visible, setFrameContainer10Visible] = useState(false)
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedInput, setSelectedInput] = useState(false)
  const [searching, setSearching] = useState(false)
  const [sport, setSport] = useState([])

  const [localSport, setLocalSport] = useState('')
  const [eventsFilter, setEventsFilter] = useState({
    sportName: [],
    location: '',
    dateStart: [],
    nearCitys: []
  })
  const { t, i18n } = useTranslation()

  useEffect(() => {
    dispatch(getAllSports())
  }, [])
  useEffect(() => {
    if (searching && !nearbyLoading) {
      navigation.navigate('PruebasEncontradas', {
        filter: eventsFilter,
        search,
        localSport,
        fromSearch: true
      })
      setMostrarInicioBuscador(false)
    }
  }, [nearbyLoading, searching])

  useEffect(() => {
    if (!selected) {
      setEventsFilter((prevState) => ({
        ...prevState,
        dateStart: ''
      }))
    }
  }, [selected])

  useEffect(() => {
    // console.log('eventsFilter changed=======', eventsFilter)
  }, [eventsFilter])

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

  return (
    <>
      <View style={styles.frameContainer}>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => console.log('asdasdas')}
        >
          <View style={styles.buscarWrapper}>
            <Image
              style={{ width: 24, height: 24 }}
              contentFit="cover"
              source={require('../assets/icbaselinesearch.png')}
            />
            <TextInput
              onPress={() => setSelectedInput(true)}
              onBlur={() => setSelectedInput(false)}
              onChangeText={(text) => setSearch(text)}
              placeholder={t('buscar')}
              placeholderTextColor={'rgba(64,3,111,1)'}
              style={{
                fontWeight: '700',
                width: '100%',
                color: Color.sportsVioleta
              }}
            ></TextInput>
          </View>
        </Pressable>
        {selectedInput && (
          <View>
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
                  {eventsFilter.location
                    ? eventsFilter.location
                    : t('localizacion')}
                </Text>
                {eventsFilter.location && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: Color.sportsNaranja,
                      width: 20,
                      height: 20,
                      justifyContent: 'center',
                      borderRadius: 100,
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      setEventsFilter((prev) => {
                        return { ...prev, location: '', nearCitys: [] }
                      })
                      dispatch(
                        setSearchEventsFilters({
                          sportName: [],
                          location: '',
                          dateStart: [],
                          nearCitys: []
                        })
                      )
                    }}
                  >
                    {/* <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 600
                      }}
                    >
                      X
                    </Text> */}
                    <AntDesign name="close" color={'#fff'} size={14} />
                  </TouchableOpacity>
                )}
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
                  {!localSport ? t('deporte') : localSport}
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
                  {!selected ? t('fecha') : selected}
                </Text>
              </View>
            </Pressable>
            <Pressable
              // disabled={nearbyLoading === true}
              style={{
                backgroundColor: Color.sportsNaranja,
                height: 42,
                marginTop: 10,
                padding: Padding.p_3xs,
                borderRadius: Border.br_31xl,
                alignSelf: 'stretch',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center'
              }}
              onPress={() => {
                if (!nearbyLoading) {
                  navigation.navigate('PruebasEncontradas', {
                    filter: eventsFilter,
                    search,
                    localSport,
                    fromSearch: true
                  })
                  setMostrarInicioBuscador(false)
                } else {
                  setSearching(true)
                }
              }}
            >
              {nearbyLoading && searching ? (
                <ActivityIndicator
                  animating={true}
                  size="small"
                  color={'#fff'}
                />
              ) : (
                <Text style={styles.helloAshfak6}>{t('buscar')}</Text>
              )}
              {/* <Text style={styles.helloAshfak6}>{t('buscar')}</Text> */}
            </Pressable>
          </View>
        )}
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
            fromSearch={true}
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
            setSport={setSport}
            onClose={closeFrameContainer8}
            setEventsFilter={setEventsFilter}
            setLocalSport={setLocalSport}
            localSport={localSport}
            searchedSports={searchedSports}
            eventsFilter={eventsFilter}
            setSearchedSports={setSearchedSports}
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
  buscar: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left'
  },
  buscarWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    width: '100%',
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
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
    marginTop: 10,
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
