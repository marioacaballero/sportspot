import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'
import FolderSVG from '../../components/SVG/FolderSVG'

const Directorio = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Directorio de organizadores</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.search}>
          <Image
            source={require('../../assets/menu.png')}
            style={styles.image}
            contentFit="cover"
          />
          <TextInput
            placeholder="Buscar en el directorio"
            placeholderTextColor={Color.sportsVioleta}
          />
        </View>
        <View>
          <View style={styles.foldersContainer}>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO X</Text>
            </View>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO X</Text>
            </View>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO X</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.foldersContainer}>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO H</Text>
            </View>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO Z</Text>
            </View>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO R</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.foldersContainer}>
            <View>
              <FolderSVG />
              <Text style={styles.folderText}>EVENTO A</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.blanco,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20
  },
  titleContainer: {
    position: 'absolute',
    top: 67,
    left: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  title: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    width: '80%'
  },
  innerContainer: {
    marginTop: '40%',
    padding: 20,
    width: '90%'
  },
  search: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    height: 40,
    marginBottom: 20,
    elevation: 4,
    backgroundColor: Color.blanco,
    alignItems: 'center',
    gap: 20,
    padding: 10,
    flexDirection: 'row'
  },
  image: {
    width: 20,
    height: 20,
    left: 5
  },
  foldersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  folderText: {
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  }
})

export default Directorio
