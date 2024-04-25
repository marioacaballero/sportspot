import React, { useState } from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
// import { data } from '../utils/townesEspaña'
import cities from '../utils/cities.json'
import BackArrowSVG from './SVG/BackArrowSVG'

const Maps = ({ onClose, setEventsFilter }) => {
  const [searchText, setSearchText] = useState('')
  const [comunities, setComunities] = useState({})
  const [provinces, setProvinces] = useState({})
  const [town, setTown] = useState({})
  const [comunitiesState, setComunitiesState] = useState(cities)
  const [provincesState, setProvincesState] = useState([])
  const [townState, setTownState] = useState([])

  // console.log({ comunities, provinces, town })
  // const itemsPerPage = 50

  // useEffect(() => {
  //   setEventsLocal(data.slice(0, itemsPerPage))
  // }, [])

  // const filterEventsByLetter = (letter) => {
  //   return data.filter((event) =>
  //     event.label.toLowerCase().startsWith(letter.toLowerCase())
  //   )
  // }

  const handleTextChange = (text) => {
    setSearchText(text)
    if (!comunities.label) {
      if (text === '') {
        setComunitiesState(cities)
      } else {
        const filtercomunities = cities.filter((p) =>
          p.label.toLowerCase().includes(text.toLowerCase())
        )
        setComunitiesState(filtercomunities)
      }
    }
    if (comunities.label && !provinces.label) {
      if (text === '') {
        setProvincesState(comunities.provinces)
      } else {
        const filterprovinces = comunities.provinces.filter((p) =>
          p.label.toLowerCase().includes(text.toLowerCase())
        )
        setProvincesState(filterprovinces)
      }
    }
    if (comunities.label && provinces.label) {
      if (text === '') {
        setTownState(provinces.towns)
      } else {
        const filtertowns = provinces.towns.filter((p) =>
          p.label.toLowerCase().includes(text.toLowerCase())
        )
        setTownState(filtertowns)
      }
    }
  }

  // const handleLoadMore = () => {
  //   const nextPage = currentPage + 1
  //   const startIndex = (nextPage - 1) * itemsPerPage
  //   const endIndex = nextPage * itemsPerPage
  //   setEventsLocal([
  //     ...eventsLocal,
  //     ...filterEventsByLetter(searchText).slice(startIndex, endIndex)
  //   ])
  //   setCurrentPage(nextPage)
  // }

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
    const paddingToBottom = 20
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      // handleLoadMore()
    }
  }

  const verify = () => {
    if (!comunities.label) {
      return comunitiesState.map((c, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={{ paddingHorizontal: 20 }}
            onPress={() => {
              handleSelect(c.label)
            }}
          >
            <Text key={i} style={styles.helloTypo}>
              {c.label}
            </Text>
          </TouchableOpacity>
        )
      })
    }
    if (comunities.label && !provinces.label) {
      return (
        <>
          {provincesState.map((c, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{ paddingHorizontal: 20 }}
                onPress={() => {
                  handleSelect(c.label)
                }}
              >
                <Text key={i} style={styles.helloTypo}>
                  {c.label}
                </Text>
              </TouchableOpacity>
            )
          })}
        </>
      )
    }
    if (comunities.label && provinces.label && !town.label) {
      return (
        <>
          {townState.map((c, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{ paddingHorizontal: 20 }}
                onPress={() => {
                  handleSelect(c.label)
                }}
              >
                <Text key={i} style={styles.helloTypo}>
                  {c.label}
                </Text>
              </TouchableOpacity>
            )
          })}
        </>
      )
    }
  }

  const handleSelect = (label) => {
    if (!comunities.label) {
      const foundcomunities = cities.find((c) => c.label === label)
      setComunities(foundcomunities)
      setProvincesState(foundcomunities.provinces)
      setSearchText('')
    } else if (comunities.label && !provinces.label) {
      const foundprovinces = comunities.provinces.find((c) => c.label === label)
      setProvinces(foundprovinces)
      setTownState(foundprovinces.towns)
      setSearchText('')
    } else if (comunities.label && provinces.label) {
      const foundtown = provinces.towns.find((c) => c.label === label)
      setTown(foundtown)
      setSearchText('')
    }
  }

  const channgeState = () => {
    if (comunities.label && !provinces.label) {
      setComunities({})
    }
    if (provinces.label && !town.label) {
      setProvinces({})
    }
    if (town.label) {
      setTown({})
    }
  }

  const finalLocation = () => {
    if (!comunities.label) {
      return 'Localización'
    } else if (comunities.label && !provinces.label) {
      return comunities.label
    } else if (provinces.label && !town.label) {
      return comunities.label + ',' + provinces.label
    } else if (town.label) {
      return comunities.label + ',' + provinces.label + ',' + town.label
    }
  }

  return (
    <View style={[styles.maps, styles.mapsLayout]}>
      <View style={styles.mapsInner}>
        <View>
          <View style={styles.items}>
            <TextInput
              style={styles.helloTypoScroll}
              placeholder="Buscar"
              value={searchText}
              onChangeText={handleTextChange}
            />
          </View>
          <View style={styles.towns}>
            <Text style={styles.text}>
              {comunities.label && comunities.label + ' ,'}
              {provinces.label && provinces.label + ' ,'} {town.label}
            </Text>
            {comunities.label && (
              <TouchableOpacity style={styles.arrow} onPress={channgeState}>
                <BackArrowSVG />
              </TouchableOpacity>
            )}
          </View>
          <ScrollView
            style={styles.mapViewParent}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            {verify()}
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.helloAshfakWrapper}
          onPress={() => {
            onClose()
            setEventsFilter((prevState) => ({
              ...prevState,
              location: finalLocation()
            }))
          }}
        >
          <Text style={[styles.helloAshfak, styles.kmTypo]}>Listo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapsLayout: {
    maxWidth: '90%',
    top: -12,
    maxHeight: 390,
    borderRadius: Border.br_5xs
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsNaranja,
    height: 45,
    padding: 6
  },
  helloTypoScroll: {
    width: '100%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    left: 20
  },
  helloTypo: {
    marginTop: 9,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsVioleta
  },
  helloTypoSelected: {
    marginTop: 9,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.sportsNaranja
  },
  kmTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  helloAshfak: {
    color: Color.blanco,
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700'
  },
  towns: {
    display: 'flex',
    flexDirection: 'row'
  },
  arrow: {
    position: 'absolute',
    top: 18,
    right: 3
  },
  text: {
    color: Color.sportsVioleta
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  mapViewParent: {
    alignSelf: 'stretch',
    height: 180
  },
  mapsInner: {
    justifyContent: 'center',
    minWidth: '100%',
    marginBottom: 40
  },
  maps: {
    backgroundColor: Color.blanco,
    padding: Padding.p_xl
  }
})

export default Maps
