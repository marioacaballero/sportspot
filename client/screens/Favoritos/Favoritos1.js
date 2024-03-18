import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, StyleSheet, View, Pressable, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Padding,
  FontSize,
  Color,
  FontFamily,
  Border
} from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import { getFavorites } from '../../redux/actions/events'

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
      <LinearGradient
        colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#40036F']}
        locations={[0, 0.2, 0.5, 0.8, 1]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.linearGradient}
      >
        <ActivityIndicator
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
            // backdropFilter: 'blur(5px)'
          }}
          animating={true}
          size="large"
          color={Color.violeta2}
        />
      </LinearGradient>
    )
  } else {
    return (
      <View style={styles.favoritos}>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parentSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    width: '100%'
  },
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
  frameParent: {
    paddingTop: 30,
    paddingHorizontal: Padding.p_xl,
    top: 0
  },
  wrapper: {
    width: 22,
    height: 25
  },
  container: {
    width: 20
  },
  frame: {
    width: 19
  },
  groupParent: {
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_xl,
    width: 360
  },
  favoritos: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Favoritos1
