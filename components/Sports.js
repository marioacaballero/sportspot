import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'

const Sports = ({ onClose }) => {
  const [showColor, setShowColor] = useState(null)

  const handleClose = () => {
    onClose()
  }

  const sportSelectStyle = (name) => {
    setShowColor(name)
  }

  return (
    <View style={styles.sports}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity>
          {/* <Image
            style={styles.frameChild1}
            contentFit="cover"
            source={require('../assets/group-18314.png')}
          /> */}

          <TouchableOpacity
            onPress={() => sportSelectStyle('basket')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor === 'basket' ? '#40036F' : 'white' // Puedes ajustar el color de fondo según tus necesidades
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M14.0206 4.42554C13.8279 3.15667 13.4383 1.87222 12.8707 0.617188C9.92321 1.03165 7.25534 2.31604 5.13477 4.20286L12.4608 11.5289C13.8921 9.70862 14.4454 7.22232 14.0206 4.42554Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M12.4682 13.9844C10.7185 15.429 8.4674 16.1838 5.93825 16.1839C5.26817 16.1839 4.57882 16.1309 3.8739 16.0239C2.6424 15.8369 1.40104 15.486 0.182802 14.9855C0.181475 15.0694 0.179688 15.1532 0.179688 15.2375C0.179688 19.0035 1.59039 22.4394 3.9111 25.0477L13.7213 15.2375L12.4682 13.9844Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M11.2379 12.7518L3.91184 5.42578C2.02502 7.54636 0.740633 10.2142 0.326172 13.1617C1.58126 13.7292 2.86577 14.119 4.13447 14.3117C6.93142 14.7365 9.41766 14.1832 11.2379 12.7518Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M25.7557 16.1629C22.959 15.738 20.4726 16.2914 18.6523 17.7227L25.9784 25.0488C27.8652 22.9282 29.1496 20.2604 29.5641 17.3129C28.3091 16.7453 27.0247 16.3556 25.7557 16.1629Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M16.1978 17.7138L14.945 16.4609L5.13477 26.2711C7.74305 28.5919 11.179 30.0025 14.945 30.0025C15.0292 30.0025 15.1131 30.0008 15.197 29.9994C14.6965 28.7811 14.3456 27.5398 14.1585 26.3083C13.6475 22.9428 14.3704 19.9269 16.1978 17.7138Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M13.6914 12.7614L14.9442 14.0143L24.7544 4.20407C22.1462 1.8833 18.7102 0.472656 14.9442 0.472656C14.86 0.472656 14.7761 0.474444 14.6922 0.475828C15.1927 1.69401 15.5436 2.93526 15.7307 4.16693C16.2417 7.53239 15.5188 10.5483 13.6914 12.7614Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M15.8679 26.0487C16.0605 27.3174 16.4504 28.602 17.0179 29.8571C19.9654 29.4426 22.6332 28.1582 24.7538 26.2714L17.4277 18.9453C15.9964 20.7656 15.4432 23.2519 15.8679 26.0487Z"
                    fill="#B6B6B6"
                  />
                  <Path
                    d="M17.4208 16.4889C19.634 14.6614 22.6498 13.9386 26.0153 14.4496C27.247 14.6367 28.4883 14.9876 29.7064 15.4881C29.7078 15.4042 29.7096 15.3203 29.7096 15.236C29.7096 11.47 28.2989 8.03407 25.9782 5.42578L16.168 15.236L17.4208 16.4889Z"
                    fill="#B6B6B6"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_1419_29214">
                    <Rect
                      width="29.5302"
                      height="29.5302"
                      fill="white"
                      transform="translate(0.179688 0.472656)"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
          </TouchableOpacity>

          <Text
            style={showColor === 'basket' ? styles.sportSelected : styles.ftbol}
          >
            Basket
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sportSelectStyle('fultbol')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-183141.png')}
          />
          <Text
            style={
              showColor === 'fultbol' ? styles.sportSelected : styles.ftbol
            }
          >
            Fútbol
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sportSelectStyle('rugby')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-183142.png')}
          />
          <Text
            style={showColor === 'rugby' ? styles.sportSelected : styles.ftbol}
          >
            Rugby
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sportSelectStyle('handball')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-183143.png')}
          />
          <Text
            style={
              showColor === 'handball' ? styles.sportSelected : styles.ftbol
            }
          >
            Handball
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20
        }}
      >
        <TouchableOpacity
          onPress={() => sportSelectStyle('ciclismo')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-18315.png')}
          />
          <Text
            style={
              showColor === 'ciclismo' ? styles.sportSelected : styles.ftbol
            }
          >
            Ciclismo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sportSelectStyle('tenis')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-18317.png')}
          />
          <Text
            style={showColor === 'tenis' ? styles.sportSelected : styles.ftbol}
          >
            Tenis
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sportSelectStyle('running')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-183171.png')}
          />
          <Text
            style={
              showColor === 'running' ? styles.sportSelected : styles.ftbol
            }
          >
            Running
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sportSelectStyle('hockey')}
          style={styles.groupContainerSpaceBlock1}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-183172.png')}
          />
          <Text
            style={showColor === 'hockey' ? styles.sportSelected : styles.ftbol}
          >
            Hockey
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helloAshfakWrapper}>
        <Text style={styles.helloAshfak} onPress={handleClose}>
          Listo
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainerSpaceBlock1: {
    // marginLeft: 20,
    alignItems: 'center'
  },
  frameChild: {
    width: 63,
    height: 63,
    marginLeft: 10
  },
  frameChild1: {
    width: 63,
    height: 63
  },
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 11
  },
  groupParent: {
    alignItems: 'center'
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
    flexDirection: 'column', // Arrange children horizontally
    // flexWrap: 'wrap', // Allow wrapping to the next row
    padding: Padding.p_xl,
    marginTop: 15,
    // maxWidth: '100%',
    // maxHeight: '100%',
    justifyContent: 'space-between' // Distribute children evenly along the row
  },
  sportSelected: {
    color: 'blue',
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    textAlign: 'center',
    marginTop: 11
  }
})

export default Sports
