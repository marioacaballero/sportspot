import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function WorkWithUs() {
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
            marginBottom: 52,
            marginHorizontal: 21,
            width: 318
          }}
        >
          {'TRABAJA CON\nNOSOTROS'}
        </Text>
        <View
          style={{
            borderColor: '#D7D7D7',
            borderRadius: 10,
            borderWidth: 1,
            paddingTop: 15,
            paddingBottom: 34,
            marginBottom: 27,
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
              alignItems: 'center',
              marginBottom: 24,
              marginHorizontal: 20
            }}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={{
                width: 22,
                height: 30,
                marginRight: 16
              }}
            />
            <Text
              style={{
                color: '#40036F',
                fontSize: 14,
                flex: 1
              }}
            >
              {'¿Eres deportista?'}
            </Text>
          </View>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              marginHorizontal: 32,
              width: 254
            }}
          >
            {
              'Trabaja con nosotros y vive la emoción de\nformar parte de una plataforma deportiva\ninnovadora!\nValoramos la dedicación, la pasión y el\nespíritu competitivo. Estamos en la búsqueda\nde individuos apasionados por el mundo del\ndeporte para unirse a nuestro portal y\ncontribuir al crecimiento continuo de nuestra\nplataforma.\n\n'
            }
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#F25910',
            borderRadius: 50,
            paddingVertical: 14,
            marginBottom: 246,
            marginHorizontal: 39
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16
            }}
          >
            {'Trabaja con nosotros'}
          </Text>
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
