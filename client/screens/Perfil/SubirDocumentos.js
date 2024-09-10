import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import FormularioDocumentos from '../../components/FormularioDocumentos'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { tiposDeDocumentos } from '../../components/utils/TypesDocuments'
import CustomAlert from '../../components/CustomAlert'
import CustomAlert2 from '../../components/CustomAlert2'
import axiosInstance from '../../utils/apiBackend'
import { getUser } from '../../redux/actions/users'

const SubirDocumentos = () => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const route = useRoute()
  const params = route.params
  const [eventData, setEventData] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  const dispatch = useDispatch()
  const [onEditMode, setOnEditMode] = useState()
  const { user } = useSelector((state) => state.users)

  useEffect(() => {
    if (params && params?.onEdit) {
      console.log('event from params:', params?.eventState)
      console.log('onEdit from params: ', params?.onEdit)
      setEventData(params?.eventState)
      setOnEditMode(true)
    }
  }, [])

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
            <Text style={styles.title}>{t('configurarIban')}</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <BackArrowSVG />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            {true ? (
              <FormularioDocumentos
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
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: Color.sportsVioleta
                    }}
                  >
                    {user?.preferences?.IBAN?.merchantCustomerIban}
                  </Text>
                  <Text>
                    {tiposDeDocumentos[user?.preferences?.IBAN?.documentType]}
                  </Text>
                  <Text>
                    {user?.preferences?.IBAN?.documentStatus === 3
                      ? t('aprobado')
                      : t('pendiente')}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setDeleteModal(true)}>
                  <Image
                    style={{ width: 40, height: 40 }}
                    width={40}
                    height={40}
                    source={require('../../assets/cancelacion.png')}
                  ></Image>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <CustomAlert2
        action={async () => {
          const obj = { ...user.preferences }
          delete obj.IBAN
          console.log(obj, 'OBJ')
          await axiosInstance
            .patch(`users/${user.id}`, { preferences: obj })
            .then((e) => {
              dispatch(getUser(user.id))
              console.log(e)
              navigation.goBack()
            })
        }}
        onClose={() => setDeleteModal(false)}
        visible={deleteModal}
        message={'¿Seguro quiere eliminar el IBAN?'}
      ></CustomAlert2>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20
  },
  title: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  innerContainer: {
    padding: 20,
    backgroundColor: Color.blanco,
    borderRadius: 10,
    elevation: 5,
    width: '90%'
  }
})

export default SubirDocumentos
