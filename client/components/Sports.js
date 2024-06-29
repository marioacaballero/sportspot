import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import BasketSVG from './SVG/Sports/BasketSVG'
import HockeySVG from './SVG/Sports/HockeySVG'
import TennisSVG from './SVG/Sports/TenisSVG'
import CiclismoSVG from './SVG/Sports/CiclismoSVG'
import RugbySVG from './SVG/Sports/RugbySVG'
import HandballSVG from './SVG/Sports/HandballSVG'
import FutbolSVG from './SVG/Sports/FutbolSVG'
import SenderismoSVG from './SVG/Sports/SenderismoSVG'
import CarreraSVG from './SVG/Sports/CarreraSVG'
import CiclismoSVG2 from './SVG/Sports/CiclismoSVG2'
import TrailSVG from './SVG/Sports/TrailSVG'
import PadelSVG from './SVG/Sports/PadelSVG'
import TenisSVG from './SVG/Sports/TenisSVG'
import CrossfitSVG from './SVG/Sports/CrossfitSVG'
import EscaladaSVG from './SVG/Sports/EscaladaSVG'
import OrientacionSVG from './SVG/Sports/OrientacionSVG'
import PatinajeSVG from './SVG/Sports/PatinajeSVG'
import GolfSVG from './SVG/Sports/GolfSVG'
import { setSport } from '../redux/slices/sports.slices'
import TenisSVG2 from './SVG/Sports/TenisSVG2'
import TriatlonSVG from './SVG/Sports/TriatlonSVG.js'

const Sports = ({
  onClose,
  eventsFilter,
  setEventsFilter,
  setLocalSport,
  localSport,
  searchedSports,
  setSearchedSports
}) => {
  const dispatch = useDispatch()

  const { sports } = useSelector((state) => state.sports)
  // const [showColor, setShowColor] = useState([])

  console.log('searchedSports', searchedSports)

  const handleClose = () => {
    onClose()
  }

  // useEffect(() => {
  //   if (searchedSports && searchedSports?.length > 0) {
  //     // const newLocalSport = localSport.split(', ')
  //     // console.log('newl', newLocalSport)
  //     setShowColor((prev) => {
  //       const newArray = [...prev, searchedSports]
  //       const uniqueArray = [...new Set(newArray)]
  //       return uniqueArray
  //     })
  //   }
  // }, [])
  // const sportSelectStyle = (name) => {
  //   const isSelected = showColor?.includes(name)

  //   if (isSelected) {
  //     setShowColor(showColor.filter((sport) => sport !== name))
  //     setSearchedSports(searchedSports.filter((sport) => sport !== name))
  //   } else {
  //     setSearchedSports((prev) => {
  //       const newArray = [...prev, name]
  //       const uniqueArray = [...new Set(newArray)]
  //       return uniqueArray
  //     })
  //     setShowColor([...showColor, name])
  //     const newSport = [...showColor, name]
  //     // setLocalSport(newSport.join(', '))
  //   }
  // }

  const uniqueSports = {}
  const filteredSports = sports
    .map((sport) => {
      if (!uniqueSports[sport.name]) {
        uniqueSports[sport.name] = true
        return sport
      }
      return null
    })
    .filter((sport) => sport !== null)

  return (
    <View style={styles.sports}>
      <View style={styles.container}>
        {filteredSports?.map((sport) => (
          <View key={sport?.name} style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                setEventsFilter((prevState) => {
                  const { sportName } = prevState
                  let newSportName

                  if (sportName.includes(sport.name)) {
                    newSportName = sportName.filter(
                      (name) => name !== sport.name
                    )
                  } else {
                    newSportName = [...sportName, sport.name]
                  }
                  setLocalSport(newSportName.join(', '))

                  return {
                    ...prevState,
                    sportName: newSportName
                  }
                })
                dispatch(setSport(sport.name))
                // sportSelectStyle(sport?.name)
              }}
              style={{
                alignItems: 'center',
                border: '1px solid #E5E5E5',
                elevation: 6,
                shadowColor: '#0426ba',
                borderRadius: 100,
                padding: 15,
                backgroundColor: eventsFilter?.sportName.includes(sport?.name)
                  ? Color.sportsNaranja
                  : 'white'
              }}
            >
              <View>
                {sport?.name === 'senderismo' && (
                  // <FutbolSVG showColor={showColor} />
                  <SenderismoSVG
                    showColor={eventsFilter?.sportName || []}
                  ></SenderismoSVG>
                )}
                {sport?.name === 'ciclismo' && (
                  <CiclismoSVG2 showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'carrera' && (
                  // <HockeySVG showColor={showColor} />
                  <CarreraSVG
                    showColor={eventsFilter?.sportName || []}
                  ></CarreraSVG>
                )}
                {sport?.name === 'tenis' && (
                  <TenisSVG2 showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'triatlon' && (
                  <TriatlonSVG
                    showColor={eventsFilter?.sportName || []}
                  ></TriatlonSVG>
                )}
                {sport?.name === 'trail' && (
                  <TrailSVG showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'padel' && (
                  <PadelSVG showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'crossfit' && (
                  <CrossfitSVG showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'escalada' && (
                  <EscaladaSVG showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'orientacion' && (
                  <OrientacionSVG showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'patinaje' && (
                  <PatinajeSVG showColor={eventsFilter?.sportName || []} />
                )}
                {sport?.name === 'golf' && (
                  <GolfSVG showColor={eventsFilter?.sportName || []} />
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.ftbol}>
              {sport?.name.slice(0, 1).toUpperCase()}
              {sport?.name.slice(1)}
            </Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.helloAshfakWrapper}
          onPress={handleClose}
        >
          <Text style={styles.helloAshfak}>Listo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 6
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.blanco,
    textAlign: 'center'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    justifyContent: 'center',
    marginTop: 30
  },
  sports: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blanco,
    width: 361,
    flexDirection: 'column',
    alignItems: 'center',
    padding: Padding.p_xl,
    marginTop: 15,
    justifyContent: 'space-between'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  }
})

export default Sports
