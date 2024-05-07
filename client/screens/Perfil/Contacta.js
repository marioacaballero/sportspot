import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { LinearGradient } from 'expo-linear-gradient'

const Contacta = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad')
    navigation.goBack()
  }

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contáctanos</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.messageContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Escribe un mensaje..."
              multiline
              numberOfLines={10}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput placeholder="Nombre" />
          </View>
          <View style={styles.textContainer}>
            <TextInput placeholder="Email" />
          </View>
          <TouchableOpacity style={styles.sendContainer} onPress={handlePress}>
            <Text style={styles.send}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_8xs,
    flex: 1,
    height: '100%'
  },
  innerContainer: {
    top: 99,
    borderRadius: Border.br_base,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5,
    backgroundColor: Color.blanco,
    borderStyle: 'solid',
    width: '90%',
    height: 360,
    left: 20,
    position: 'absolute',
    alignItems: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 20,
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
  textContainer: {
    paddingHorizontal: Padding.p_base,
    height: 45,
    width: '90%',
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: Padding.p_5xs,
    marginTop: 20
  },
  messageContainer: {
    paddingHorizontal: Padding.p_base,
    height: '35%',
    width: '90%',
    borderColor: Color.sportsVioleta,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: Padding.p_5xs,
    marginTop: 20
  },
  textInput: {
    textAlign: 'left',
    bottom: 30
  },
  sendContainer: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    height: 43,
    width: '90%',
    borderRadius: Border.br_31xl,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Color.sportsVioleta,
    marginTop: 20
  },
  send: {
    color: Color.violeta3,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  }
})

export default Contacta
