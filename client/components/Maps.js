import React, { useEffect, useState } from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import cities from '../utils/cities.json'
import mergedCities from '../utils/mergedCities.json'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useTranslation } from 'react-i18next'

const Maps = ({ onClose, setEventsFilter, setTyping }) => {
  const [searchText, setSearchText] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const [data, setData] = useState(mergedCities.slice(0, 100))
  const { t, i18n } = useTranslation()

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
  useEffect(() => {
    if (searchValue) {
      setEventsFilter((prevState) => ({
        ...prevState,
        location: searchValue
      }))
      onClose()
    }
  }, [searchValue])

  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log('Keyboard shown')
        setTyping(true)
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Keyboard hidden')
        setTyping(false)
        setKeyboardVisible(false)
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <GooglePlacesAutocomplete
      placeholder={t('buscar')}
      query={{
        key: 'AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc',
        language: i18n.language // language of the results
      }}
      enablePoweredByContainer={false}
      styles={{ container: { width: '90%', height: '100%', top: 30 } }}
      fetchDetails={true}
      onPress={(data, details = null) => {
        setSearchValue(data.description)
      }}
      onFail={(error) => console.log(error)}
      requestUrl={{
        url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
        useOnPlatform: 'web'
      }} // this in only required for use on the web. See https://git.io/JflFv more for details.
    />
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 10,
    paddingTop: 10,
    minHeight: '50%',
    width: '90%',
    backgroundColor: '#ecf0f1'
  },
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
    zIndex: 99,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    alignItems: 'center',
    marginTop: 10,
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
