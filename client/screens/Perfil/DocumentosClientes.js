import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { tiposDeDocumentos } from '../../components/utils/TypesDocuments'
import CustomAlert2 from '../../components/CustomAlert2'
import axiosInstance from '../../utils/apiBackend'
import { getUser } from '../../redux/actions/users'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'

const DocumentosClientes = () => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const route = useRoute()
  const params = route.params
  const [deleteModal, setDeleteModal] = useState(false)
  const [documents, setDocuments] = useState([])
  const [selectedDocument, setSelectedDocument] = useState({})

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)

  const getDocuments = async () => {
    const docs = await axiosInstance.get('documents')
    setDocuments(docs.data)
    console.log(docs.data)
  }

  useEffect(() => {
    getDocuments()
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
            <Text style={styles.title}>Documentos</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <BackArrowSVG />
            </Pressable>
          </View>
          {documents &&
            documents.map((d, i) => (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  paddingHorizontal: 20,
                  marginBottom: 20
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
                    {d.merchantCustomerIban}
                  </Text>
                  <Text>{d.name}</Text>

                  <Text>{tiposDeDocumentos[d.documentType]}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDocument(d)
                    setDeleteModal(true)
                  }}
                >
                  <Image
                    style={{ width: 25, height: 25 }}
                    width={40}
                    height={40}
                    source={require('../../assets/cancelacion.png')}
                  ></Image>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
      <CustomAlert2
        action={async () => {
          setDeleteModal(false)
          await axiosInstance
            .delete(`documents/${selectedDocument.id}`)
            .then((e) => {
              getDocuments()
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

export default DocumentosClientes
