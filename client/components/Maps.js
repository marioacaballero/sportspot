import React, { useContext, useEffect, useState } from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { StyleSheet, Keyboard } from 'react-native'
import mergedCities from '../utils/mergedCities.json'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import {
  setNearbyLoading,
  setNearbyLocations
} from '../redux/slices/events.slices'

const Maps = ({
  onClose,
  setEventsFilter,
  setTyping,
  inscription,
  item,
  profile
}) => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (profile && searchValue) {
      console.log('setting value')
      setEventsFilter((prevState) => ({
        ...prevState,
        [item]: searchValue
      }))
      onClose()
      return
    }
    if (inscription && searchValue) {
      console.log('setting value')
      setEventsFilter((prevState) => ({
        ...prevState,
        [item]: searchValue
      }))
      onClose()
      return
    }
    if (searchValue) {
      console.log('setting value')
      setEventsFilter((prevState) => ({
        ...prevState,
        location: searchValue
      }))
      onClose()
    }
  }, [searchValue])

  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    console.log('inscription', inscription)
    console.log('item', item)
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log('Keyboard shown')
        setTyping && setTyping(true)
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Keyboard hidden')
        setTyping && setTyping(false)
        setKeyboardVisible(false)
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  // const getNearbyPlaces = async (lat, lng) => {
  //   const radius = 75000 // 30 km
  //   const type = 'locality' // Buscar ciudades cercanas
  //   const apiKey = 'AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc'

  //   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=${apiKey}`

  //   try {
  //     const response = await fetch(url)
  //     const result = await response.json()

  //     if (result.status === 'OK') {
  //       console.log(
  //         'Nearby cities:',
  //         result.results.map((result) => result.name)
  //       )
  //       setEventsFilter((prev) => {
  //         return {
  //           ...prev,
  //           nearCitys: result.results
  //         }
  //       })
  //       // Aquí puedes manejar los resultados como desees
  //     } else {
  //       console.error('Places service failed due to:', result.status)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching nearby places:', error)
  //   }
  // }

  const getNearbyPlaces3 = async (lat, lng) => {
    const radius = 75000 // 75 km
    const apiKey = 'AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc'

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=${apiKey}`

    try {
      const response = await fetch(url)
      const result = await response.json()

      if (result.status === 'OK') {
        const localities = result.results.filter((place) =>
          place.types.includes('locality')
        )
        console.log(
          'Nearby localities:',
          localities.map((result) => result.name)
        )
        setEventsFilter((prev) => {
          return {
            ...prev,
            nearCitys: localities
          }
        })
        // Aquí puedes manejar los resultados como desees
      } else {
        console.error('Places service failed due to:', result.status)
      }
    } catch (error) {
      console.error('Error fetching nearby places:', error)
    }
  }

  const getNearbyPlaces4 = async (location) => {
    const radius = 75000 // 75 km
    const apiKey = 'AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc'

    // Get the coordinates for the specified location
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`

    try {
      const geocodeResponse = await fetch(geocodeUrl)
      const geocodeResult = await geocodeResponse.json()

      if (geocodeResult.status === 'OK' && geocodeResult.results.length > 0) {
        const { lat, lng } = geocodeResult.results[0].geometry.location

        // Use the nearbysearch endpoint to find nearby places
        const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=${apiKey}`

        const nearbyResponse = await fetch(nearbyUrl)
        const nearbyResult = await nearbyResponse.json()

        if (nearbyResult.status === 'OK') {
          const localities = nearbyResult.results.filter(
            (place) =>
              place.types.includes('locality') ||
              place.types.includes('political')
          )
          console.log(
            'Nearby localities:',
            localities.map((result) => result.name)
          )
          setEventsFilter((prev) => {
            return {
              ...prev,
              nearCitys: localities
            }
          })
          // Aquí puedes manejar los resultados como desees
        } else {
          console.error('Places service failed due to:', nearbyResult.status)
        }
      } else {
        console.error('Geocode service failed due to:', geocodeResult.status)
      }
    } catch (error) {
      console.error('Error fetching nearby places:', error)
    }
  }

  // const getNearbyPlaces = async (location) => {
  //   const radius = 75000 // 75 km
  //   const apiKey = 'AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc'

  //   // Encode the location name to ensure it's properly formatted for the URL
  //   const encodedLocation = encodeURIComponent(location)

  //   // Get the coordinates for the specified location
  //   const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${apiKey}`

  //   try {
  //     const geocodeResponse = await fetch(geocodeUrl)
  //     const geocodeResult = await geocodeResponse.json()

  //     if (geocodeResult.status === 'OK' && geocodeResult.results.length > 0) {
  //       const { lat, lng } = geocodeResult.results[0].geometry.location

  //       // Use the nearbysearch endpoint to find nearby places
  //       const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=${apiKey}`

  //       const nearbyResponse = await fetch(nearbyUrl)
  //       const nearbyResult = await nearbyResponse.json()

  //       if (nearbyResult.status === 'OK') {
  //         const localities = nearbyResult.results.filter(
  //           (place) =>
  //             place.types.includes('locality') ||
  //             place.types.includes('political')
  //         )
  //         console.log(
  //           'Nearby localities:',
  //           localities.map((result) => result.name)
  //         )
  //         setEventsFilter((prev) => {
  //           return {
  //             ...prev,
  //             nearCitys: localities
  //           }
  //         })
  //         // Aquí puedes manejar los resultados como desees
  //       } else {
  //         console.error('Places service failed due to:', nearbyResult.status)
  //       }
  //     } else {
  //       console.error('Geocode service failed due to:', geocodeResult.status)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching nearby places:', error)
  //   }
  // }
  const getNearbyPlaces = async (lat, lng) => {
    dispatch(setNearbyLoading(true))
    const radius = 37500 // 37.5 km
    const query = 'locality' // Buscar localidades cercanas
    const apiKey = 'AIzaSyBH0Ey-G2PbWkSCLyGG1A9TCg9LDPlzQpc'

    let allResults = []
    let nextPageToken = null

    const fetchResults = async (pageToken = '') => {
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${lat},${lng}&radius=${radius}&key=${apiKey}${
        pageToken ? `&pagetoken=${pageToken}` : ''
      }`

      try {
        const response = await fetch(url)
        const result = await response.json()

        if (result.status === 'OK') {
          allResults = allResults.concat(result.results)

          if (result.next_page_token) {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            await fetchResults(result.next_page_token)
          }
        } else {
          console.error('Places service failed due to:', result.status)
        }
      } catch (error) {
        console.error('Error fetching nearby places:', error)
      }
    }

    await fetchResults()

    console.log(
      'All nearby localities:',
      allResults.map((result) => result.name)
    )
    dispatch(setNearbyLocations(allResults.map((result) => result.name)))
    setEventsFilter((prev) => {
      return {
        ...prev,
        nearCitys: allResults.map((result) => result.name)
      }
    })
    dispatch(setNearbyLoading(false))
  }

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
        if (details && details.geometry && details.geometry.location) {
          const { lat, lng } = details.geometry.location
          console.log('Latitud:', lat, 'Longitud:', lng)
          getNearbyPlaces(lat, lng)
        }
        setSearchValue(data.description)
      }}
      onFail={(error) => console.log(error)}
      requestUrl={{
        url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
        useOnPlatform: 'web'
      }}
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
