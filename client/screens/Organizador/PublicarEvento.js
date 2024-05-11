import React from 'react'
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import FormularioEventos from '../../components/FomularioEventos'

const PublicarEvento = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Publicar un evento</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={styles.innerContainer}>
          <FormularioEventos />
        </View>
      </View>
    </ScrollView>
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
