import { Picker } from '@react-native-picker/picker'
import * as React from 'react'
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Border, Color, FontSize, Padding } from '../GlobalStyles'
import { addReview } from '../redux/actions/events'

const EscribirResea = ({ onClose }) => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
    qualification: 1
  })

  const { user } = useSelector((state) => state.users)
  const { event } = useSelector((state) => state.events)

  const onChangeText = (key, value) => {
    setInputs({ ...inputs, [key]: value })
  }

  const onSubmit = () => {
    const body = {
      userId: user.id,
      eventId: event.id,
      review: {
        title: inputs.title,
        description: inputs.description,
        qualification: inputs.qualification
      }
    }
    dispatch(addReview(body))
  }

  return (
    <View style={styles.escribirResea}>
      <View style={styles.frameParent}>
        <View style={styles.clarityeditSolidParent}>
          <Image
            style={styles.clarityeditSolidIcon}
            contentFit="cover"
            source={require('../assets/clarityeditsolid.png')}
          />
          <TextInput
            style={[styles.escribeUnaResea, styles.helloAshfakTypo]}
            placeholder="Título de la reseña"
            onChangeText={(value) => onChangeText('title', value)}
            value={inputs.title}
          />
        </View>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock1]}>
          <TextInput
            style={styles.frameChild}
            placeholder="Escribe una reseña aquí"
            multiline={true}
            numberOfLines={4}
            onChangeText={(value) => onChangeText('description', value)}
            value={inputs.description}
          />
        </View>
        <View style={styles.cajita}>
          <Text style={styles.cajitaText}>Puntaje otorgado</Text>
          <Picker
            mode="dropdown"
            dropdownIconColor={'red'}
            onValueChange={(itemValue) =>
              onChangeText('qualification', itemValue)
            }
            selectedValue={inputs.qualification}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
          </Picker>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock1]}>
          <Pressable
            style={[styles.helloAshfakWrapper, styles.helloFlexBox]}
            onPress={() => onClose(false)}
          >
            <Text style={[styles.helloAshfak, styles.helloAshfakTypo]}>
              Cancelar
            </Text>
          </Pressable>
          <Pressable
            style={[styles.helloAshfakContainer, styles.helloFlexBox]}
            onPress={() => {
              onSubmit()
              onClose(false)
            }}
          >
            <Text style={[styles.helloAshfak, styles.helloAshfakTypo]}>
              Publicar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  helloAshfakTypo: {
    textAlign: 'left',
    fontWeight: '900',
    fontSize: FontSize.size_mid,
    width: '70%'
  },
  frameSpaceBlock1: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  helloFlexBox: {
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: Color.sportsNaranja,
    borderRadius: Border.br_xl,
    flex: 1,
    flexDirection: 'row'
  },
  clarityeditSolidIcon: {
    width: 14,
    height: 14,
    overflow: 'hidden'
  },
  escribeUnaResea: {
    color: Color.sportsVioleta,
    marginLeft: 10
  },
  clarityeditSolidParent: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center'
  },
  frameChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.naranja3,
    height: 300,
    alignSelf: 'stretch',
    padding: 15,
    textAlignVertical: 'top',
    fontSize: FontSize.size_mid
  },
  frameWrapper: {
    height: 300
  },
  helloAshfak: {
    color: Color.blanco
  },
  helloAshfakWrapper: {
    paddingHorizontal: Padding.p_6xl
  },
  helloAshfakContainer: {
    paddingHorizontal: Padding.p_11xl,
    marginLeft: 10
  },
  frameGroup: {
    flexDirection: 'row'
  },
  frameParent: {
    padding: Padding.p_3xs,
    flex: 1
  },
  escribirResea: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.blanco,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 320,
    // height: 500,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    flexDirection: 'row',
    alignSelf: 'center',
    top: '40%',
    zIndex: 6
  },
  cajita: {
    marginTop: 20,
    width: '70%'
  },
  cajitaText: {
    fontWeight: '600',
    color: Color.sportsVioleta,
    fontSize: FontSize.size_lg
  }
})

export default EscribirResea
