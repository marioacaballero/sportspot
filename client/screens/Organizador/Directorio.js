import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
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

  const userEvents = events.filter(
    (event) => event.event_creator_id === user.id
  )

  const filteredEvents = userEvents.filter((event) =>
    event.event_title.toLowerCase().includes(searchText.toLowerCase())
  )

  const handleSearch = (text) => {
    setSearchText(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Directorio de organizadores</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PublicarEvento')}>
          <Text style={styles.masEvento}>+</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.search}>
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
          <View style={styles.foldersContainer}>
            {filteredEvents.map((event) => (
              <TouchableOpacity
                key={event.event_id}
                style={styles.folder}
                onPress={() => {
                  dispatch(getEventById(event.event_id))
                  navigation.navigate('PruebasEncontradasDetalle')
                }}
              >
                <FolderSVG />
                <Text style={styles.folderText}>{event.event_title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.blanco,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20
  },
  titleContainer: {
    position: 'absolute',
    top: 67,
    left: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  title: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    width: '80%'
  },
  masEvento: {
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontSize: 35,
    marginRight: 10
  },
  innerContainer: {
    marginTop: '40%',
    padding: 15,
    width: '90%'
  },
  search: {
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
  },
  image: {
    width: 20,
    height: 20,
    left: 5
  },
  foldersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    gap: 20
  },
  folder: {
    width: '28.7%',
    alignItems: 'center'
  },
  folderText: {
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  }
})

export default Directorio
