import { View, Text, StyleSheet } from 'react-native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'

const CardReview = ({ title, description, qualification }) => {
  const createRating = ({
    rating,
    total = 5,
    starIcon = '⭐',
    emptyIcon = '☆'
  }) => {
    const stars = starIcon.repeat(rating)
    const empty = emptyIcon.repeat(total - rating)

    // return `${stars}${empty}`
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 13 }}>{stars}</Text>
        <Text style={{ fontSize: 18, marginBottom: 3 }}>{empty}</Text>
      </View>
    )
  }
  return (
    <View style={styles.cajitaFeliz}>
      <View style={styles.cajitaFeliz2}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: Color.sportsVioleta,
            fontSize: FontSize.size_lg,
            fontWeight: 'bold',
            width: '70%',
            letterSpacing: 1
          }}
        >
          {title}
        </Text>
        <View>{createRating({ rating: qualification })}</View>
      </View>
      <Text style={styles.text1}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cajitaFeliz: {
    borderColor: Color.sportsNaranja,
    borderWidth: 1,
    backgroundColor: Color.blanco,
    padding: 10,
    margin: 10,
    borderRadius: 8
  },
  cajitaFeliz2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: Color.sportsVioleta,
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  text1: {
    color: Color.sportsVioleta,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.inputPlaceholder
  }
})

export default CardReview
