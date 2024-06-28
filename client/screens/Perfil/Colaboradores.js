import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import { t } from 'i18next'
import * as ImagePicker from 'expo-image-picker'
import { ActivityIndicator } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import CardColaborador from './Pago/CardColaborador'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteCollaborator,
  getAllCollaborators,
  postCollaborator
} from '../../redux/actions/collaborators'

const Colaboradores = () => {
  const dispatch = useDispatch()
  const [selectedPage, setSelectedPage] = useState('feed')
  const { user } = useSelector((state) => state.users)
  const { allCollaborators, loading } = useSelector(
    (state) => state.collaborators
  )
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [link, setLink] = useState('')

  const handleUploadCollaboratorData = () => {
    console.log('Sending collaborator data...')
    console.log('data:', { name, link, selectedImage })
    dispatch(
      postCollaborator({
        fullName: name,
        link,
        image: selectedImage,
        creatorId: user?.id
      })
    ).then((res) => {
      dispatch(getAllCollaborators())
      ToastAndroid.show(t('informacionEnviada'), ToastAndroid.SHORT)
      setSelectedPage('feed')
      setName('')
      setLink('')
      setSelectedImage(null)
    })
  }

  function transformHttpToHttps(url) {
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://')
    } else {
      return url
    }
  }

  const uploadImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.canceled) {
      setIsLoading(true)
      const profileImageData = {
        uri: result.assets[0].uri,
        type: 'image/jpg',
        name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
      }

      const profileImageForm = new FormData()
      profileImageForm.append('file', profileImageData)
      profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
      profileImageForm.append('cloud_name', 'dnewfuuv0')

      await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
        method: 'post',
        body: profileImageForm
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('dataUrl from profile:', data.url)
          setSelectedImage(transformHttpToHttps(data.url))
          setIsLoading(false)
        })
    }
    setIsLoading(false)
  }

  useEffect(() => {
    dispatch(getAllCollaborators())
  }, [])

  return (
    <LinearGradient
      colors={['#fff', '#f9f9f9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View
        style={{
          overflow: 'hidden',
          flex: 1,
          paddingTop: 30
        }}
      >
        {loading ? (
          <View
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 35
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.size_5xl,
                  fontFamily: FontFamily.inputPlaceholder,
                  fontWeight: '700',
                  color: Color.sportsVioleta,
                  marginLeft: 20
                }}
              >
                {t('entidades').toUpperCase()}
              </Text>
            </View>
            <ActivityIndicator
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'transparent',
                alignSelf: 'center',
                marginTop: Dimensions.get('screen').height / 4
              }}
              animating={true}
              size="large"
              color={Color.sportsVioleta}
            />
          </View>
        ) : selectedPage === 'upload' ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 35
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.size_5xl,
                  fontFamily: FontFamily.inputPlaceholder,
                  fontWeight: '700',
                  color: Color.sportsVioleta,
                  marginLeft: 20
                }}
              >
                {t('entidades').toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 20,
                paddingBottom: 10,
                gap: 20
              }}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  paddingVertical: 5,
                  borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 4
                  },
                  elevation: 5,
                  shadowRadius: 10,
                  shadowOpacity: 1,
                  marginTop: 30
                }}
              >
                <View
                  style={{
                    width: '100%',
                    paddingVertical: Padding.p_5xs,
                    flexDirection: 'column',
                    paddingHorizontal: 10,
                    gap: 15
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: Padding.p_base,
                      height: 46,
                      width: '100%',
                      borderColor: Color.sportsVioleta,
                      borderRadius: Border.br_xl,
                      borderWidth: 1,
                      borderStyle: 'solid',
                      paddingVertical: Padding.p_5xs
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: FontSize.size_5xs,
                          fontFamily: FontFamily.inputPlaceholder,
                          alignSelf: 'stretch',
                          textAlign: 'left',
                          color: Color.sportsVioleta
                        }}
                      >
                        {t('nombreCompleto')}
                      </Text>
                      <TextInput
                        placeholder={t('ingreseNombre')}
                        style={{
                          color: Color.sportsVioleta,
                          fontSize: FontSize.size_sm,
                          alignSelf: 'stretch'
                        }}
                        onChangeText={(value) => setName(value)}
                        value={name}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: Padding.p_base,
                      height: 46,
                      width: '100%',
                      borderColor: Color.sportsVioleta,
                      borderRadius: Border.br_xl,
                      borderWidth: 1,
                      borderStyle: 'solid',
                      paddingVertical: Padding.p_5xs
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: FontSize.size_5xs,
                          fontFamily: FontFamily.inputPlaceholder,
                          alignSelf: 'stretch',
                          textAlign: 'left',
                          color: Color.sportsVioleta
                        }}
                      >
                        {t('link')}
                      </Text>
                      <TextInput
                        placeholder={t('ingreseLink')}
                        style={{
                          color: Color.sportsVioleta,
                          fontSize: FontSize.size_sm,
                          alignSelf: 'stretch'
                        }}
                        onChangeText={(value) => setLink(value)}
                        value={link}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      gap: 15,
                      alignItems: 'center'
                    }}
                  >
                    <Pressable
                      onPress={uploadImage}
                      style={{
                        paddingHorizontal: Padding.p_base,
                        height: 46,
                        width: selectedImage ? '80%' : '100%',
                        backgroundColor: Color.sportsVioleta,
                        borderRadius: Border.br_xl,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: FontFamily.inputPlaceholder,
                          fontWeight: '700',
                          alignSelf: 'stretch',
                          textAlign: 'center',
                          color: '#fff'
                        }}
                      >
                        {isLoading ? (
                          <ActivityIndicator
                            style={{
                              width: 20,
                              height: 20,
                              backgroundColor: 'transparent'
                            }}
                            animating={true}
                            size="small"
                            color={'#fff'}
                          />
                        ) : selectedImage ? (
                          t('cambiarLogo')
                        ) : (
                          t('subirLogo')
                        )}
                      </Text>
                    </Pressable>
                    {selectedImage && (
                      <Image
                        source={{ uri: selectedImage }}
                        style={{ width: 45, height: 45, borderRadius: 5 }}
                        contentFit="cover"
                        alt="preview"
                      />
                    )}
                  </View>
                </View>
              </View>

              <Pressable
                disabled={
                  !name.length === 0 || link.length === 0 || !selectedImage
                }
                onPress={handleUploadCollaboratorData}
                style={{
                  paddingHorizontal: Padding.p_base,
                  height: 46,
                  width: '100%',
                  backgroundColor: Color.sportsVioleta,
                  borderRadius: Border.br_xl,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: FontFamily.inputPlaceholder,
                    fontWeight: '700',
                    alignSelf: 'stretch',
                    textAlign: 'center',
                    color: '#fff'
                  }}
                >
                  {t('confirmar')}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setName('')
                  setLink('')
                  setSelectedImage(null)
                  setSelectedPage('feed')
                }}
                style={{
                  paddingHorizontal: Padding.p_base,
                  height: 46,
                  width: '100%',
                  backgroundColor: '#fff',
                  borderRadius: Border.br_xl,
                  borderWidth: 2,
                  borderColor: Color.sportsNaranja,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: FontFamily.inputPlaceholder,
                    fontWeight: '700',
                    alignSelf: 'stretch',
                    textAlign: 'center',
                    color: Color.sportsNaranja
                  }}
                >
                  {t('cancelar')}
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 20
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.size_5xl,
                  fontFamily: FontFamily.inputPlaceholder,
                  fontWeight: '700',
                  color: Color.sportsVioleta
                }}
              >
                {t('entidades').toUpperCase()}
              </Text>
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Color.sportsVioleta,
                  borderRadius: 10
                }}
                onPress={() => setSelectedPage('upload')}
              >
                <Text style={{ color: '#fff', fontSize: 26, bottom: 2 }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 14,
                paddingHorizontal: 15,
                paddingTop: 30,
                paddingBottom: 50
              }}
            >
              {allCollaborators.map((collaborator, i) => (
                <CardColaborador
                  key={i}
                  name={collaborator.fullName}
                  url={collaborator.link}
                  image={collaborator.image}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </LinearGradient>
  )
}

export default Colaboradores
