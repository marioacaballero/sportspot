import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '../../../GlobalStyles'

const CardColaborador = ({ name, url, image }) => {
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
    </View>
  )
}

export default CardColaborador
