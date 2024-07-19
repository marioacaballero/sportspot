import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  Switch,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEventFromPrice,
  setFilteredEvents,
  setFiltersToFilters,
  setNameEvent
} from '../redux/slices/events.slices'
import { List } from 'react-native-paper'

const PruebasEncontradasFiltros = ({
  setModalVisible,
  setStart,
  setEnd,
  end,
  start
}) => {
  const dispatch = useDispatch()
  const { eventsFilter } = useSelector((state) => state.events)

  const [typesFilter, setTypesFilter] = useState({})
  const [switchStates, setSwitchStates] = useState({})

  const toggleSwitch = (key, value) => {
    const [name, modality] = key.split('-')

    setSwitchStates((prevState) => ({ ...prevState, [key]: value }))

    setTypesFilter((prevState) => {
      const updateState = { ...prevState }

      if (value) {
        updateState[name] = [...(updateState[name] || []), modality]
      } else {
        updateState[name] = (updateState[name] || [])?.filter(
          (item) => item !== modality
        )
      }

      return updateState
    })
  }

  const toggleSwitchSport = (key, value) => {
    const name = key.split('-')[1]

    setSwitchStates((prevState) => ({ ...prevState, [key]: value }))

    setTypesFilter((prevState) => {
      const updateState = { ...prevState }

      if (value) {
        updateState[name] = [...(updateState[name] || [])]
      }

      return updateState
    })
  }

  const handleValuesChange = (newValues) => {
    setStart(newValues[0])
    setEnd(newValues[1])
  }

  // const priceDispatch = () => {
  //   dispatch(
  //     setFilteredEvents(
  //       [...eventsFilter]?.filter((event) => {
  //         const precio = parseInt(event.price)
  //         return precio >= start && precio <= end
  //       })
  //     )
  //   )
  // }

  const uniqueSports = {}

  const result = Object.values(uniqueSports)

  const [expandedStates, setExpandedStates] = useState({})

  const handlePress = (sportName) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [sportName]: !prevState[sportName]
    }))
  }

  const submit = () => {
    setModalVisible(false)
    dispatch(setFiltersToFilters(typesFilter))
  }

  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          height: 220,
          padding: 15,
          borderRadius: 15
        }}
      >
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              alignSelf: 'stretch',
              fontFamily: FontFamily.inputPlaceholder,
              fontWeight: '700',
              fontSize: FontSize.inputPlaceholder_size,
              flex: 1
            }}
          >
            Tu presupuesto:
          </Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Image
              style={{ width: 21, height: 21, overflow: 'hidden' }}
              contentFit="cover"
              source={require('../assets/charmcross.png')}
            />
          </Pressable>
        </View>

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Inicio: {start}</Text>
          <Text>Fin: {end}</Text>
          <MultiSlider
            values={[start, end]}
            sliderLength={300}
            onValuesChange={handleValuesChange}
            // onValuesChangeFinish={priceDispatch}
            min={0}
            max={500}
            step={1}
            allowOverlap={false}
            snapped
            markerStyle={{
              backgroundColor: Color.sportsNaranja
            }}
            selectedStyle={{ backgroundColor: Color.naranja3 }}
            unselectedStyle={{ backgroundColor: 'lightgray' }}
            containerStyle={{ height: 40 }}
          />
        </View>

        <View>
          <View style={{ flexDirection: 'column' }}>
            {result.map((sport, i) => (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <List.Section
                  style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5
                  }}
                  titleStyle={{
                    textAlign: 'left',
                    color: Color.sportsVioleta,
                    fontFamily: FontFamily.inputPlaceholder,
                    fontWeight: '700'
                  }}
                  title={`${sport?.sportname
                    ?.slice(0, 1)
                    .toUpperCase()}${sport?.sportname?.slice(1)}`}
                >
                  <List.Accordion
                    onPress={() => handlePress(sport.sportname)}
                    expanded={expandedStates[sport.sportname]}
                  >
                    {sport?.event_modality?.map((type, i) => (
                      <View
                        key={i}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                        }}
                      >
                        <List.Item
                          titleStyle={{
                            fontSize: FontSize.inputPlaceholder_size,
                            textAlign: 'left',
                            color: Color.sportsVioleta,
                            fontFamily: FontFamily.inputPlaceholder,
                            fontWeight: '700'
                          }}
                          title={type}
                        />
                        <Switch
                          trackColor={{ false: '#767577', true: '#F25910' }}
                          thumbColor={
                            switchStates[`${sport.sportname}-${type}`]
                              ? '#FFFFFF'
                              : '#FFFFFF'
                          }
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={(value) =>
                            toggleSwitch(`${sport.sportname}-${type}`, value)
                          }
                          value={switchStates[`${sport.sportname}-${type}`]}
                          style={{ transform: [{ scale: 0.8 }] }}
                        />
                      </View>
                    ))}
                  </List.Accordion>
                </List.Section>
                <View>
                  <Switch
                    trackColor={{ false: '#767577', true: '#F25910' }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(value) =>
                      toggleSwitchSport(
                        `${sport.sportname}-${sport.sportname}`,
                        value
                      )
                    }
                    value={
                      switchStates[`${sport.sportname}-${sport.sportname}`]
                    }
                    style={{ transform: [{ scale: 0.8 }] }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Color.sportsNaranja,
            height: 42,
            marginTop: 10,
            padding: Padding.p_3xs,
            borderRadius: Border.br_31xl,
            justifyContent: 'center'
          }}
          onPress={() => {
            // priceDispatch()
            setModalVisible(false)
            dispatch(
              setNameEvent({
                sportName: '',
                location: '',
                dateStart: []
              })
            )
          }}
        >
          <Text
            style={{
              color: Color.blanco,
              textAlign: 'center',
              fontSize: FontSize.inputPlaceholder_size,
              alignSelf: 'stretch',
              fontFamily: FontFamily.inputPlaceholder,
              fontWeight: '700'
            }}
          >
            Aplicar filtros
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PruebasEncontradasFiltros
