import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function Security() {
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
            marginBottom: 30,
            marginHorizontal: 21
          }}
        >
          {'Seguridad'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginHorizontal: 29
          }}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
            resizeMode={'stretch'}
            style={{
              width: 26,
              height: 20,
              marginRight: 15
            }}
          />
          <Text
            style={{
              color: '#40036F',
              fontSize: 12,
              flex: 1
            }}
          >
            {'Contraseña'}
          </Text>
        </View>
        <View
          style={{
            width: 295,
            height: 46,
            borderColor: '#40036F',
            borderRadius: 20,
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 17,
            marginBottom: 14,
            marginHorizontal: 26
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
        <View
          style={{
            width: 295,
            height: 46,
            borderColor: '#40036F',
            borderRadius: 20,
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 17,
            marginBottom: 13,
            marginHorizontal: 26
          }}
        >
          <Text
            style={{
              color: '#40036F',
              fontSize: 8,
              marginBottom: 6
            }}
          >
            {'Contraseña'}
          </Text>
          <Text
            style={{
              color: '#40036F',
              fontSize: 14
            }}
          >
            {'************'}
          </Text>
        </View>
        <View
          style={{
            width: 281,
            height: 43,
            alignItems: 'center',
            backgroundColor: '#40036F',
            borderRadius: 50,
            paddingVertical: 14,
            marginBottom: 30,
            marginHorizontal: 31
          }}
        >
          <Text
            style={{
              color: '#E2DCEC',
              fontSize: 16
            }}
          >
            {'Cambiar contraseña'}
          </Text>
        </View>
        <View
          style={{
            width: 281,
            height: 43,
            alignItems: 'center',
            borderColor: '#F25910',
            borderRadius: 50,
            borderWidth: 1,
            paddingVertical: 14,
            marginBottom: 283,
            marginHorizontal: 31
          }}
        >
          <Text
            style={{
              color: '#F44336',
              fontSize: 16
            }}
          >
            {'Eliminar cuenta'}
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
