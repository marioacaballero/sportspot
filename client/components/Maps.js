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
import cities from '../utils/cities.json'
import mergedCities from '../utils/mergedCities.json'

const Maps = ({ onClose, setEventsFilter }) => {
  const [searchText, setSearchText] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const [data, setData] = useState(mergedCities.slice(0, 100))

  const [filteredData, setFilteredData] = useState()

  const handleTextChangee = (text) => {
    if (searchValue) {
      setSearchValue()
      setSearchText('')
      setFilteredData()
      return
    }
    setSearchText(text)
    console.log('text: ', text)
    if (text === '') {
      return
    }
    const filteredLocations = [...mergedCities].filter((location) =>
      location.label.toLowerCase()?.includes(text.toLowerCase())
    )
    setFilteredData(filteredLocations)
  }

  const verify = () => {
    if (filteredData) {
      return filteredData.map((c, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={{ paddingHorizontal: 20 }}
            onPress={() => {
              handleSelect(c)
            }}
          >
            <Text key={i} style={styles.helloTypo}>
              {c.label}
            </Text>
          </TouchableOpacity>
        )
      })
    }
    return data.slice(0, 50).map((c, i) => {
      return (
        <TouchableOpacity
          key={i}
          style={{ paddingHorizontal: 20 }}
          onPress={() => {
            handleSelect(c)
          }}
        >
          <Text key={i} style={styles.helloTypo}>
            {c.label}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  const handleSelect = (data) => {
    if (data.type === 'city') {
      setSearchValue(data.label)
    }
    if (data.type === 'province') {
      const provinceCity = cities.filter(
        (city) => city.code === data.parent_code
      )[0]
      console.log('provinceCity', provinceCity)
      console.log(
        'final provice response: ',
        `${provinceCity.label},${data.label}`
      )
      setSearchValue(`${provinceCity.label},${data.label}`)
    }
    if (data.type === 'town') {
      const townProvince = cities
        .map((city) =>
          city.provinces.filter(
            (province) => province.code === data.parent_code
          )
        )
        .filter((arr) => arr.length > 0)
        .map((arr) =>
          arr.map((obj) => {
            const { towns, ...rest } = obj
            return rest
          })
        )[0][0]

      const townProvinceCity = cities.filter(
        (city) => city.code === townProvince.parent_code
      )[0]

      console.log('townProvince', townProvince)
      console.log('townProvinceCity', townProvinceCity)
      console.log(
        'final provice response: ',
        `${townProvinceCity.label},${townProvince.label},${data.label}`
      )
      setSearchValue(
        `${townProvinceCity.label},${townProvince.label},${data.label}`
      )
    }
    setSearchText('')
  }

  return (
    <View style={[styles.maps, styles.mapsLayout]}>
      <View style={styles.mapsInner}>
        <View>
          <View style={styles.items}>
            <TextInput
              style={styles.helloTypoScroll}
              placeholder="Buscar"
              value={searchValue || searchText}
              onChangeText={handleTextChangee}
            />
          </View>
          <ScrollView
            style={styles.mapViewParent}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            {verify()}
          </ScrollView>
        </View>
        <TouchableOpacity
          disabled={!searchValue}
          style={styles.helloAshfakWrapper}
          onPress={() => {
            onClose()
            setEventsFilter((prevState) => ({
              ...prevState,
              location: searchValue
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
    right: 3,
    zIndex: 9
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
