import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import FolderSVG from '../../components/SVG/FolderSVG'
import LupaSVG from '../../components/SVG/LupaSVG'
import { getAllEvents, getEventById } from '../../redux/actions/events'
import { useTranslation } from 'react-i18next'

const Directorio = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { events } = useSelector((state) => state.events)
  const { user } = useSelector((state) => state.users)

  const [searchText, setSearchText] = useState('')
  const [modalIban, setModalIban] = useState(false)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [])

  const userEvents = events

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
          {t('directorio')}
        </Text>
        {/* <Pressable onPress={() => navigation.navigate('SubirDocumentos')}> */}
        <Pressable onPress={() => setModalIban(true)}>
          <Image
            style={{ width: 30, height: 30, objectFit: 'contain' }}
            source={require('../../assets/solarsettingsbold.png')}
          />
          {/* <Text style={[styles.gestionaTuCuenta, styles.cerrarSesinTypo]}>
            {t('configurarIban')}
          </Text> */}
        </Pressable>

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
            placeholder={t('buscar')}
            placeholderTextColor={Color.sportsVioleta}
            onChangeText={handleSearch}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
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
                      navigation.navigate('PruebasEncontradasDetalle', {
                        organizer: true,
                        id: event?.id
                      })
                    )
                  }}
                >
                  <FolderSVG />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
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
      <Modal
        animationType="fade"
        transparent
        visible={modalIban}
        onRequestClose={() => setModalIban(false)}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={() => setModalIban(false)}
        >
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: Color.sportsNaranja,
              borderRadius: 10,
              width: 200,
              right: 20,
              top: 20,
              alignSelf: 'flex-end',
              gap: 10,
              padding: 20
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModalIban(false)
                navigation.navigate('SubirDocumentos')
              }}
              style={{
                width: '100%',
                backgroundColor: Color.sportsNaranja,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  textAlignVertical: 'center'
                }}
              >
                Configurar IBAN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalIban(false)
                navigation.navigate('DocumentosClientes')
              }}
              style={{
                width: '100%',
                backgroundColor: Color.sportsNaranja,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  textAlignVertical: 'center'
                }}
              >
                Documentos
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default Directorio
