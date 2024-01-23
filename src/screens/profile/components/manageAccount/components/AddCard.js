import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function AddCard() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF'
      }}
    >
      <ScrollView
        style={{
          flex: 1,
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
          {'Datos de pago'}
        </Text>
        <View
          style={{
            borderColor: '#D7D7D7',
            borderRadius: 10,
            borderWidth: 1,
            paddingTop: 18,
            paddingBottom: 91,
            paddingHorizontal: 11,
            marginBottom: 237,
            marginHorizontal: 20,
            shadowColor: '#00000040',
            shadowOpacity: 0.3,
            shadowOffset: {
              width: -2,
              height: -2
            },
            shadowRadius: 4,
            elevation: 4
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 26
            }}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={{
                width: 25,
                height: 22,
                marginTop: 2,
                marginRight: 24
              }}
            />
            <Text
              style={{
                color: '#40036F',
                fontSize: 14,
                flex: 1
              }}
            >
              {'Datos de pago'}
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
              {'Nombre del titular'}
            </Text>
            <Text
              style={{
                color: '#40036F',
                fontSize: 14
              }}
            >
              {'Lara Macías Blanco Carrillo'}
            </Text>
          </View>
          <View
            style={{
              borderColor: '#40036F',
              borderRadius: 20,
              borderWidth: 1,
              paddingVertical: 9,
              paddingHorizontal: 17,
              marginBottom: 14
            }}
          >
            <Text
              style={{
                color: '#40036F',
                fontSize: 8,
                marginBottom: 7
              }}
            >
              {'Número de tarjeta'}
            </Text>
            <Text
              style={{
                color: '#40036F',
                fontSize: 14
              }}
            >
              {'XXXX - XXXX - XXXX - XXXX'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: 82,
                borderColor: '#40036F',
                borderRadius: 20,
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 17,
                marginRight: 15
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 8,
                  marginBottom: 7
                }}
              >
                {'Tipo'}
              </Text>
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 14
                }}
              >
                {'Visa'}
              </Text>
            </View>
            <View
              style={{
                width: 118,
                borderColor: '#40036F',
                borderRadius: 20,
                borderWidth: 1,
                paddingVertical: 10,
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
                {'Fecha de caducidad'}
              </Text>
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 14
                }}
              >
                {'30/27'}
              </Text>
            </View>
          </View>
        </View>
        <View style={{}}>
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
          <Image
            source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
            resizeMode={'stretch'}
            style={{
              position: 'absolute',
              top: -10,
              right: 158,
              width: 37,
              height: 24
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
