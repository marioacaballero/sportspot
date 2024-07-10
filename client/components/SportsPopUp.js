import React, { useEffect } from 'react'
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import { setSport } from '../redux/slices/sports.slices'
import FutbolSVG from './SVG/Sports/FutbolSVG'
import CiclismoSVG from './SVG/Sports/CiclismoSVG'
import HockeySVG from './SVG/Sports/HockeySVG'
import TenisSVG from './SVG/Sports/TenisSVG'
import RunningSVG from './SVG/Sports/RunningSVG'
import RugbySVG from './SVG/Sports/RugbySVG'
import HandballSVG from './SVG/Sports/HandballSVG'
import BasketSVG from './SVG/Sports/BasketSVG'

const SportsPopUp = ({ onClose }) => {
  const dispatch = useDispatch()

  const { sports, sport } = useSelector((state) => state.sports)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    console.log('selected sport changed', sport)
  }, [sport])

  return (
    <View style={styles.sports}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10
        }}
      >
        {sports.map((singleSport) => (
          <Pressable
            key={singleSport.id}
            onPress={() => {
              dispatch(setSport(singleSport))
              onClose()
            }}
            style={{ backgroundColor: '#fff' }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
                width: (Dimensions.get('screen').width * 0.7) / 4,
                height: (Dimensions.get('screen').width * 0.7) / 4,
                borderRadius: 100,
                border: '1px solid #E5E5E5',
                elevation: 6,
                shadowColor: '#0426ba',
                backgroundColor:
                  sport.name === singleSport.name ? '#f25910' : '#fff'
              }}
            >
              {singleSport?.name === 'golf' && (
                // <FutbolSVG showColor={showColor} />
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector.png')
                      : require('../assets/icons/Vector.png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'ciclismo' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (10).png')
                      : require('../assets/icons/Vector (10).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'carrera' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (11).png')
                      : require('../assets/icons/Vector (11).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'triatlon' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (9).png')
                      : require('../assets/icons/Vector (9).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'trail' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (5).png')
                      : require('../assets/icons/Vector (5).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'padel' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (6).png')
                      : require('../assets/icons/Vector (6).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'tenis' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (7).png')
                      : require('../assets/icons/Vector (7).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'fitness' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (8).png')
                      : require('../assets/icons/Vector (8).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'escalada' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (4).png')
                      : require('../assets/icons/Vector (4).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'orientacion' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (2).png')
                      : require('../assets/icons/Vector (2).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'patinaje' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (1).png')
                      : require('../assets/icons/Vector (1).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
              {singleSport?.name === 'marcha' && (
                <Image
                  source={
                    sport.name === singleSport.name
                      ? require('../assets/icons/wVector (12).png')
                      : require('../assets/icons/Vector (12).png')
                  }
                  style={{ width: 30, height: 30, objectFit: 'contain' }}
                ></Image>
              )}
            </View>

            <Text
              style={{
                fontSize: FontSize.size_sm,
                fontFamily: FontFamily.inputPlaceholder,
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 7,
                width: '100%',
                color: Color.sportsVioleta
              }}
            >
              {capitalizeFirstLetter(singleSport.name)}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    marginTop: 10,
    width: '100%'
  },
  itemType: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsNaranja,
    marginTop: 10,
    width: 60,
    textAlign: 'center'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3
  },
  sports: {
    borderRadius: 15,
    backgroundColor: Color.blanco,
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    justifyContent: 'space-between'
  },
  touchable: {
    alignItems: 'center',
    padding: 10,
    width: '24%'
  }
})

export default SportsPopUp
