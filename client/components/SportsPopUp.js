import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { setSport } from '../redux/slices/sports.slices'

const SportsPopUp = ({ onClose }) => {
  const dispatch = useDispatch()
  const { sports } = useSelector((state) => state.sports)

  return (
    <View style={styles.container}>
      {sports.map((sport) => (
        <Pressable
          key={sport.id}
          onPress={() => {
            dispatch(setSport(sport))
            onClose()
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.item}>{sport.name.toUpperCase()}</Text>
            <Text style={styles.itemType}>{sport.type}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    marginTop: 10
  },
  itemType: {
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsNaranja,
    marginLeft: 10,
    marginTop: 10
  },
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: Color.blanco,
    width: '100%',
    // alignItems: 'center',
    paddingVertical: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
})

export default SportsPopUp
