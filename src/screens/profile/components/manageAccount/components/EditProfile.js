import React from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'

export default function EditProfile() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF'
      }}
    >
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <View style={{}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              paddingTop: 72
            }}
          >
            <Text
              style={{
                color: '#40036F',
                fontSize: 24,
                marginBottom: 23,
                marginHorizontal: 22,
                width: 316
              }}
            >
              {'GESTIONA TU CUENTA'}
            </Text>
            <Text
              style={{
                color: '#F25910',
                fontSize: 14,
                marginBottom: 15,
                marginHorizontal: 21
              }}
            >
              {'Editar perfil'}
            </Text>
            <ImageBackground
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              imageStyle={{ borderRadius: 8 }}
              style={{
                width: 132,
                height: 122,
                marginBottom: 26,
                marginHorizontal: 106
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#BA08F866',
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  paddingVertical: 9,
                  marginTop: 90
                }}
              >
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15
                  }}
                >
                  {'Editar'}
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 16,
                paddingTop: 10,
                paddingBottom: 32,
                paddingHorizontal: 13,
                marginBottom: 181,
                marginHorizontal: 17,
                shadowColor: '#52588F12',
                shadowOpacity: 0.1,
                shadowOffset: {
                  width: 0,
                  height: 8
                },
                shadowRadius: 25,
                elevation: 25
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8
                }}
              >
                <Image
                  source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                  resizeMode={'stretch'}
                  style={{
                    width: 17,
                    height: 17,
                    marginRight: 14
                  }}
                />
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 12,
                    flex: 1
                  }}
                >
                  {'Datos personales'}
                </Text>
              </View>
              <View
                style={{
                  borderColor: '#40036F',
                  borderRadius: 20,
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 17,
                  marginBottom: 14
                }}
              >
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 8,
                    marginBottom: 6
                  }}
                >
                  {'Nombre'}
                </Text>
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 14
                  }}
                >
                  {'Lara'}
                </Text>
              </View>
              <View
                style={{
                  borderColor: '#40036F',
                  borderRadius: 20,
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 17,
                  marginBottom: 14
                }}
              >
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 8,
                    marginBottom: 6
                  }}
                >
                  {'Apellidos'}
                </Text>
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 14
                  }}
                >
                  {'Macías Blanco Carrillo'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    width: 82,
                    borderColor: '#40036F',
                    borderRadius: 20,
                    borderWidth: 1,
                    paddingVertical: 9,
                    paddingHorizontal: 17
                  }}
                >
                  <Text
                    style={{
                      color: '#40036F',
                      fontSize: 8,
                      marginBottom: 8
                    }}
                  >
                    {'Género'}
                  </Text>
                  <Text
                    style={{
                      color: '#40036F',
                      fontSize: 14
                    }}
                  >
                    {'Mujer'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 197,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderColor: '#40036F',
                    borderRadius: 20,
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 17
                  }}
                >
                  <View
                    style={{
                      width: 77
                    }}
                  >
                    <Text
                      style={{
                        color: '#40036F',
                        fontSize: 8,
                        marginBottom: 7
                      }}
                    >
                      {'Fecha de nacimiento'}
                    </Text>
                    <Text
                      style={{
                        color: '#40036F',
                        fontSize: 14
                      }}
                    >
                      {'12/12/2020'}
                    </Text>
                  </View>
                  <Image
                    source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                    resizeMode={'stretch'}
                    style={{
                      width: 18,
                      height: 20
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F2F1F8',
                paddingVertical: 16,
                paddingHorizontal: 28
              }}
            >
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  width: 16,
                  height: 16
                }}
              />
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch'
                }}
              ></View>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  width: 33,
                  height: 33
                }}
              />
              <View
                style={{
                  alignSelf: 'stretch'
                }}
              >
                <Image
                  source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                  resizeMode={'stretch'}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 6,
                    height: 8
                  }}
                />
                <Image
                  source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                  resizeMode={'stretch'}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 11,
                    height: 14
                  }}
                />
              </View>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  width: 22,
                  height: 20,
                  marginRight: 128
                }}
              />
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 47
                }}
              />
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  width: 19,
                  height: 20
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: -20,
              right: 16,
              width: 327,
              height: 245,
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              paddingHorizontal: 18,
              shadowColor: '#52588F12',
              shadowOpacity: 0.1,
              shadowOffset: {
                width: 0,
                height: 8
              },
              shadowRadius: 25,
              elevation: 25
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 12
              }}
            >
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  width: 25,
                  height: 26,
                  marginRight: 9
                }}
              />
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 12,
                  flex: 1
                }}
              >
                {'Datos de contacto'}
              </Text>
            </View>
            <View
              style={{
                borderColor: '#40036F',
                borderRadius: 20,
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 17,
                marginBottom: 14
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 8,
                  marginBottom: 6
                }}
              >
                {'Email'}
              </Text>
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 14
                }}
              >
                {'ejemplo@gmail.com'}
              </Text>
            </View>
            <View style={{}}>
              <View
                style={{
                  borderColor: '#40036F',
                  borderRadius: 20,
                  borderWidth: 1,
                  paddingVertical: 9,
                  paddingHorizontal: 17
                }}
              >
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 8,
                    marginBottom: 7
                  }}
                >
                  {'Teléfono'}
                </Text>
                <Text
                  style={{
                    color: '#40036F',
                    fontSize: 14
                  }}
                >
                  {'600100100'}
                </Text>
              </View>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: 128,
                  width: 37,
                  height: 24
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
