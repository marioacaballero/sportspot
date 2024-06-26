import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  ToastAndroid
} from 'react-native'
import React, { useState } from 'react'
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

const Colaboradores = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState('')

  const handleUploadCollaboratorData = () => {
    console.log('Sending collaborator data...')
    console.log('data:', { name, link, selectedImage })
    navigation.goBack()
    ToastAndroid.show(t('informacionEnviada'), ToastAndroid.SHORT)
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
      setLoading(true)
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
          setLoading(false)
        })
    }
    setLoading(false)
  }

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
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
                      width: '50%',
                      backgroundColor: Color.sportsVioleta,
                      borderRadius: Border.br_xl,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: FontFamily.inputPlaceholder,
                        fontWeight: '700',
                        alignSelf: 'stretch',
                        textAlign: 'center',
                        color: '#fff'
                      }}
                    >
                      {selectedImage ? t('cambiarLogo') : t('subirLogo')}
                    </Text>
                  </Pressable>
                  {loading ? (
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <ActivityIndicator
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: 'transparent'
                        }}
                        animating={true}
                        size="small"
                        color={Color.violeta2}
                      />
                    </View>
                  ) : selectedImage ? (
                    <Image
                      source={{ uri: selectedImage }}
                      style={{ width: 45, height: 45, borderRadius: 5 }}
                      contentFit="cover"
                      alt="preview"
                    />
                  ) : null}
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
              onPress={() => navigation.goBack()}
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
      </View>
    </LinearGradient>
  )
}

export default Colaboradores
