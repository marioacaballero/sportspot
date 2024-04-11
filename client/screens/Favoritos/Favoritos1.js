import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  FlatList,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'
import {
  Padding,
  FontSize,
  Color,
  FontFamily,
  Border
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { getFavorites } from '../../redux/actions/events'
import { SafeAreaView } from 'react-native-safe-area-context'

const Favoritos1 = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { allFavorites, favorites, loadingGet } = useSelector(
    (state) => state.events
  )

  useEffect(() => {
    dispatch(getFavorites(user.id))
  }, [favorites])

  // Agrupar favoritos por deporte
  const groupedFavorites = allFavorites.reduce((grouped, favorite) => {
    const sportName = favorite.title
    if (!grouped[sportName]) {
      grouped[sportName] = []
    }
    grouped[sportName].push(favorite)
    return grouped
  }, {})

  if (loadingGet) {
    return (
      <View>
        <Image
          style={styles.background}
          source={require('../../assets/BGInicio.png')}
          contentFit="cover"
        />
        <ActivityIndicator
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }}
          animating={true}
          size="large"
          color={Color.violeta2}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.favoritos}>
        <View style={styles.topContainer}>
          <Text style={[styles.tusFavoritos, styles.imGoingToFlexBox]}>
            TUS FAVORITOS
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={styles.groupParentFlexBox}>
            <Text style={styles.tusListasTypo}>Tus listas</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Object.entries(groupedFavorites)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
            <Pressable
              style={[styles.frameContainer, styles.frameSpaceBlock]}
              onPress={() =>
                navigation.navigate('Favoritos', { sport: item[1] })
              }
            >
              <View style={styles.frameGroup}>
                <View style={styles.pruebasDeCiclismoWrapper}>
                  <Text style={styles.tusListasTypo}>{item[0]}</Text>
                </View>
                <Text style={[styles.imGoingTo, styles.imGoingToFlexBox]}>
                  ({item[1].length}) Pruebas añadidas
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%'
  },
  imGoingToFlexBox: {
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  frameSpaceBlock: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  tusListasTypo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  groupParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tusFavoritos: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left'
  },
  frameWrapper: {
    justifyContent: 'center'
  },
  pruebasDeCiclismoWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  imGoingTo: {
    fontSize: FontSize.size_3xs,
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsNaranja,
    marginTop: 5
  },
  frameGroup: {
    padding: Padding.p_3xs,
    flex: 1
  },
  frameContainer: {
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: 'row'
  },
  favoritos: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    flex: 1,
    paddingHorizontal: Padding.p_xl,
    paddingTop: 30
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default Favoritos1
