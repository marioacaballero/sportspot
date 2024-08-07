import {
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  ToastAndroid,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { Border, Color, FontFamily } from '../../../GlobalStyles'
import {
  deleteCollaborator,
  getAllCollaborators
} from '../../../redux/actions/collaborators'
import { useDispatch } from 'react-redux'
import { t } from 'i18next'

const CardColaborador = ({ name, url, image, id, setShowDeleteModal }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    Alert.alert(
      t('confirmarEliminacion'),
      t('seguroeliminarcolab'),
      [
        {
          text: t('cancelar'),
          style: 'cancel'
        },
        {
          text: t('eliminar'),
          onPress: async () => {
            await dispatch(deleteCollaborator(id))
            ToastAndroid.show(t('colabborradoconexito'), ToastAndroid.SHORT)
            await dispatch(getAllCollaborators())
          }
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <View
      style={{
        width: Dimensions.get('screen').width / 2 - 23,
        height: 200,
        shadowOpacity: 1,
        marginBottom: 3,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowColor: 'black',
        alignItems: 'center',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: Border.br_sm
      }}
    >
      <Image
        contentFit={'cover'}
        style={{ width: '100%', height: 120 }}
        source={{
          uri: image
        }}
      />
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingVertical: 5,
          paddingHorizontal: 10,
          gap: 4,
          height: 80
        }}
      >
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: Color.sportsVioleta
          }}
        >
          {name || '-'}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={3}
          style={{
            fontSize: 12,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: Color.sportsVioleta
          }}
        >
          {`URL: ${url || '-'}`}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowDeleteModal(id)
        }}
        style={{
          backgroundColor: Color.sportsNaranja,
          position: 'absolute',
          top: 10,
          right: 10,
          width: 25,
          height: 25,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          style={{ width: 15, height: 15 }}
          contentFit={'cover'}
          source={require('../../../assets/deleteIcon.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default CardColaborador
