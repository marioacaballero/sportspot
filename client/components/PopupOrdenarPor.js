import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFilteredEvents,
  setNameEvent,
  setOrderEvents
} from '../redux/slices/events.slices'

const PopupOrdenarPor = ({ setModalVisible }) => {
  const { events, eventsFilter } = useSelector((state) => state.events)
  const dispatch = useDispatch()
  const [valuesOrder, setvaluesOrder] = useState({
    dateStart: false,
    price: false
  })
  const [selectedFilter, setSelectedFilter] = useState()

  const orderItems = (field, value) => {
    setvaluesOrder((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const submit = () => {
    dispatch(setOrderEvents(valuesOrder))
    setModalVisible(false)
  }

  const sortByDate = (array, order) => {
    return [...array].sort((a, b) => {
      const dateA = new Date(a.dateStart)
      const dateB = new Date(b.dateStart)

      if (order === 'asc') {
        return dateA - dateB
      } else if (order === 'desc') {
        return dateB - dateA
      }
    })
  }

  const sortByPrice = (array) => {
    return [...array].sort((a, b) => {
      const priceA = parseFloat(a.price)
      const priceB = parseFloat(b.price)
      return priceA - priceB
    })
  }

  const sortBySubscribers = (array) => {
    return [...array].sort((a, b) => b.suscribers.length - a.suscribers.length)
  }

  const toggleFilter = (filter) => {
    dispatch(
      setNameEvent({
        sportName: '',
        location: '',
        dateStart: []
      })
    )
    if (selectedFilter === filter) {
      setSelectedFilter()
      dispatch(setFilteredEvents(events))
      return
    }
    if (filter === 'date') {
      setSelectedFilter(filter)
      const orderedEvents = sortByDate(events, 'asc')
      dispatch(setFilteredEvents(orderedEvents))
      return
    }
    if (filter === 'price') {
      setSelectedFilter(filter)
      const orderedEvents = sortByPrice(events)
      dispatch(setFilteredEvents(orderedEvents))
      return
    }
    if (filter === 'popularity') {
      setSelectedFilter(filter)
      const orderedEvents = sortBySubscribers(events)
      dispatch(setFilteredEvents(orderedEvents))
    }
  }

  // console.log('events keys', events[0].suscribers.length)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          borderRadius: Border.br_5xs,
          backgroundColor: Color.blanco,
          shadowColor: 'rgba(0, 0, 0, 0.25)',
          shadowOffset: {
            width: -2,
            height: -2
          },
          shadowRadius: 4,
          alignSelf: 'center',
          elevation: 4,
          shadowOpacity: 1,
          width: '90%',
          paddingHorizontal: Padding.p_xl,
          paddingVertical: Padding.p_3xs
        }}
      >
        <View style={styles.charmcrossWrapper}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Image
              style={styles.charmcrossIcon}
              contentFit="cover"
              source={require('../assets/charmcross.png')}
            />
          </Pressable>
        </View>
        {/* ======================= DATA ======================== */}
        <Pressable
          style={styles.fechaParent}
          // onPress={() => {
          //   orderItems('dateStart', true)
          // }}
        >
          <Text
            style={{
              textAlign: 'left',
              color: Color.sportsVioleta,
              fontFamily: FontFamily.inputPlaceholder,
              fontSize: FontSize.inputPlaceholder_size,
              alignItems: 'center',
              fontWeight: selectedFilter === 'date' ? '700' : '500'
            }}
          >
            Fecha
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#F25910' }}
            thumbColor={'#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => {
              toggleFilter('date')
            }}
            value={selectedFilter === 'date'}
            style={styles.switch}
          />
        </Pressable>
        {/* ======================= PRICE ======================= */}
        <Pressable
          style={styles.fechaParent}
          // onPress={() => {
          //   orderItems('dateStart', true)
          // }}
        >
          <Text
            style={{
              textAlign: 'left',
              color: Color.sportsVioleta,
              fontFamily: FontFamily.inputPlaceholder,
              fontSize: FontSize.inputPlaceholder_size,
              alignItems: 'center',
              fontWeight: selectedFilter === 'price' ? '700' : '500'
            }}
          >
            Precio
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#F25910' }}
            thumbColor={'#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => {
              toggleFilter('price')
            }}
            value={selectedFilter === 'price'}
            style={styles.switch}
          />
        </Pressable>
        {/* ======================= POPULARITY ======================= */}
        <Pressable
          style={styles.fechaParent}
          // onPress={() => {
          //   orderItems('dateStart', true)
          // }}
        >
          <Text
            style={{
              textAlign: 'left',
              color: Color.sportsVioleta,
              fontFamily: FontFamily.inputPlaceholder,
              fontSize: FontSize.inputPlaceholder_size,
              alignItems: 'center',
              fontWeight: selectedFilter === 'popularity' ? '700' : '500'
            }}
          >
            Popularidad
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#F25910' }}
            thumbColor={'#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => {
              toggleFilter('popularity')
            }}
            value={selectedFilter === 'popularity'}
            style={styles.switch}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  fechaTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: FontSize.inputPlaceholder_size,
    alignItems: 'center'
  },
  togglePosition2: {
    borderRadius: Border.br_xl,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%'
  },
  toggleItemLayout1: {
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  parentFlexBox2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1
  },
  charmcrossIcon: {
    width: 21,
    height: 21
  },
  charmcrossWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  fecha: {
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder
  },
  toggleChild: {
    backgroundColor: Color.sportsNaranja
  },
  toggleItem: {
    right: '4.67%',
    left: '47.67%'
  },
  toggle: {
    width: 30,
    height: 17
  },
  fechaParent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  precio: {
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder
  },
  toggleInner: {
    backgroundColor: Color.gris
  },
  ellipseIcon: {
    right: '44.67%',
    left: '7.67%'
  },

  proximidadParent: {
    alignItems: 'center'
  },
  frameParent: {
    alignItems: 'center'
  },
  popupfiltrosInner: {
    marginTop: 12,
    alignItems: 'flex-end',
    alignSelf: 'stretch'
  },
  popupfiltros: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: -2,
      height: -2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: '100%',
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    // maxHeight: '100%',
    maxWidth: '100%',
    top: 210
    // left: 20
  },
  switch: {
    transform: [{ scale: 0.8 }],
    marginRight: -10
  }
})

export default PopupOrdenarPor
