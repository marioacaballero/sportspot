import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import FormularioEventos from '../../components/FomularioEventos'
import { LinearGradient } from 'expo-linear-gradient'

const PublicarEvento = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params
  const [eventData, setEventData] = useState()
  const [onEditMode, setOnEditMode] = useState()

  useEffect(() => {
    if (params && params?.onEdit) {
      console.log('event from params:', params?.eventState)
      console.log('onEdit from params: ', params?.onEdit)
      setEventData(params?.eventState)
      setOnEditMode(true)
    }
  }, [])

  console.log('onEditMode: ', onEditMode)

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Publicar un evento</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <BackArrowSVG />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <FormularioEventos
              onEditMode={onEditMode}
              eventData={params?.eventState}
              formattedEventData={{
                title: params?.eventState?.title || '',
                description: params?.eventState?.description || '',
                price: params?.eventState?.price || '',
                dateStart: params?.eventState?.dateStart || '',
                dateEnd: params?.eventState?.dateInscription || '',
                location: params?.eventState?.location || '',
                timeStart: params?.eventState?.timeStart || '',
                sportId: params?.eventState?.sportId || '',
                eventLink: params?.eventState?.eventLink || '',
                inscriptionLink: params?.eventState?.inscriptionLink || '',
                places: params?.eventState?.places?.toString() || '',
                mail: params?.eventState?.creator?.email || '',
                image: params?.eventState?.image || '',
                phoneNumber: params?.eventState?.phoneNumber?.toString() || ''
              }}
              setEventData={setEventData}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20
  },
  titleContainer: {
    position: 'absolute',
    top: 22,
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
    fontWeight: '700'
  },
  innerContainer: {
    marginTop: '15%',
    padding: 20,
    backgroundColor: Color.blanco,
    borderRadius: 10,
    elevation: 5,
    width: '90%'
  }
})

export default PublicarEvento
