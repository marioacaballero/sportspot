import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import FolderSVG from '../../components/SVG/FolderSVG'
import LupaSVG from '../../components/SVG/LupaSVG'
import { getAllEvents, getEventById } from '../../redux/actions/events'

const Directorio = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { events } = useSelector((state) => state.events)
  const { user } = useSelector((state) => state.users)

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    dispatch(getAllEvents())
  }, [])

  const userEvents = events.filter((event) => event?.creator?.id === user?.id)

  const filteredEvents = userEvents.filter((event) =>
    event.title.toLowerCase()?.includes(searchText.toLowerCase())
  )

  const handleSearch = (text) => {
    setSearchText(text)
  }

  return (
    <View
      style={{
        backgroundColor: Color.blanco,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%'
        }}
      >
        <Text
          style={{
            fontSize: FontSize.size_5xl,
            color: Color.sportsVioleta,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            width: '80%'
          }}
        >
          Directorio de organizadores
        </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('PublicarEvento')}>
          <Text
            style={{
              color: Color.sportsVioleta,
              fontFamily: FontFamily.inputPlaceholder,
              fontSize: 35,
              marginRight: 10,
              fontWeight: 'semibold'
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable> */}
      </View>
      <View
        style={{
          paddingTop: 20,
          width: '90%'
        }}
      >
        <View
          style={{
            borderRadius: 30,
            borderWidth: 1,
            borderColor: Color.sportsVioleta,
            height: 40,
            marginBottom: 20,
            elevation: 4,
            backgroundColor: Color.blanco,
            alignItems: 'center',
            gap: 5,
            padding: 10,
            flexDirection: 'row'
          }}
        >
          <LupaSVG />
          <TextInput
            placeholder="Buscar"
            placeholderTextColor={Color.sportsVioleta}
            onChangeText={handleSearch}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 10,
              gap: 20
            }}
          >
            {filteredEvents &&
              filteredEvents?.map((event) => (
                <TouchableOpacity
                  key={event?.id}
                  style={{ width: '28.7%', alignItems: 'center' }}
                  onPress={() => {
                    dispatch(getEventById(event?.id)).then((data) =>
                      navigation.navigate('PruebasEncontradasDetalle')
                    )
                  }}
                >
                  <FolderSVG />
                  <Text
                    style={{
                      fontSize: FontSize.inputLabel_size,
                      fontFamily: FontFamily.inputPlaceholder,
                      color: Color.sportsVioleta
                    }}
                  >
                    {event.title}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Directorio
