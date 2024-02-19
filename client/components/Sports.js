import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'
import { useSelector } from 'react-redux'

const Sports = ({ onClose }) => {
  const { sports } = useSelector((state) => state.sports)
  const [showColor, setShowColor] = useState([])

  const handleClose = () => {
    onClose()
  }

  const sportSelectStyle = (name) => {
    const isSelected = showColor.includes(name)

    if (isSelected) {
      setShowColor(showColor.filter((sport) => sport !== name))
    } else {
      setShowColor([...showColor, name])
    }
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
          <TouchableOpacity
            onPress={() => sportSelectStyle('basket')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('basket')
                ? '#40036F'
                : 'white'
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M14.0206 4.42554C13.8279 3.15667 13.4383 1.87222 12.8707 0.617188C9.92321 1.03165 7.25534 2.31604 5.13477 4.20286L12.4608 11.5289C13.8921 9.70862 14.4454 7.22232 14.0206 4.42554Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M12.4682 13.9844C10.7185 15.429 8.4674 16.1838 5.93825 16.1839C5.26817 16.1839 4.57882 16.1309 3.8739 16.0239C2.6424 15.8369 1.40104 15.486 0.182802 14.9855C0.181475 15.0694 0.179688 15.1532 0.179688 15.2375C0.179688 19.0035 1.59039 22.4394 3.9111 25.0477L13.7213 15.2375L12.4682 13.9844Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M11.2379 12.7518L3.91184 5.42578C2.02502 7.54636 0.740633 10.2142 0.326172 13.1617C1.58126 13.7292 2.86577 14.119 4.13447 14.3117C6.93142 14.7365 9.41766 14.1832 11.2379 12.7518Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M25.7557 16.1629C22.959 15.738 20.4726 16.2914 18.6523 17.7227L25.9784 25.0488C27.8652 22.9282 29.1496 20.2604 29.5641 17.3129C28.3091 16.7453 27.0247 16.3556 25.7557 16.1629Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M16.1978 17.7138L14.945 16.4609L5.13477 26.2711C7.74305 28.5919 11.179 30.0025 14.945 30.0025C15.0292 30.0025 15.1131 30.0008 15.197 29.9994C14.6965 28.7811 14.3456 27.5398 14.1585 26.3083C13.6475 22.9428 14.3704 19.9269 16.1978 17.7138Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M13.6914 12.7614L14.9442 14.0143L24.7544 4.20407C22.1462 1.8833 18.7102 0.472656 14.9442 0.472656C14.86 0.472656 14.7761 0.474444 14.6922 0.475828C15.1927 1.69401 15.5436 2.93526 15.7307 4.16693C16.2417 7.53239 15.5188 10.5483 13.6914 12.7614Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M15.8679 26.0487C16.0605 27.3174 16.4504 28.602 17.0179 29.8571C19.9654 29.4426 22.6332 28.1582 24.7538 26.2714L17.4277 18.9453C15.9964 20.7656 15.4432 23.2519 15.8679 26.0487Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M17.4208 16.4889C19.634 14.6614 22.6498 13.9386 26.0153 14.4496C27.247 14.6367 28.4883 14.9876 29.7064 15.4881C29.7078 15.4042 29.7096 15.3203 29.7096 15.236C29.7096 11.47 28.2989 8.03407 25.9782 5.42578L16.168 15.236L17.4208 16.4889Z"
                    fill={showColor.includes('basket') ? 'white' : '#B6B6B6'}
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

          <Text style={styles.ftbol}>
            {showColor.includes('basket') ? sports[0] : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('futbol')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('futbol')
                ? '#40036F'
                : 'white',
              marginLeft: 10
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M14.7845 0.367188C6.6432 0.367188 0.0195312 6.99085 0.0195312 15.1322C0.0195312 23.2735 6.6432 29.8972 14.7845 29.8972C22.9259 29.8972 29.5495 23.2735 29.5495 15.1322C29.5495 6.99085 22.9259 0.367188 14.7845 0.367188ZM24.9355 21.9468H21.7255C21.626 21.9466 21.5284 21.9202 21.4423 21.8704C21.3562 21.8206 21.2847 21.749 21.235 21.6629L20.0893 19.698C20.0139 19.5695 19.9919 19.4165 20.0282 19.2721L21.0831 15.0186C21.1042 14.9329 21.1451 14.8533 21.2024 14.7862C21.2597 14.719 21.3319 14.6661 21.4132 14.6317L23.4079 13.787C23.5053 13.7457 23.6124 13.7324 23.717 13.7487C23.8216 13.765 23.9196 13.8103 23.9999 13.8793L26.955 16.422C27.0279 16.4847 27.0836 16.5649 27.117 16.655C27.1504 16.7452 27.1604 16.8423 27.146 16.9374C26.9012 18.6164 26.3146 20.2274 25.4224 21.6707C25.372 21.7548 25.3007 21.8245 25.2153 21.8729C25.13 21.9213 25.0336 21.9468 24.9355 21.9468ZM6.1612 13.7927L8.1559 14.6374C8.2372 14.6718 8.30937 14.7247 8.36667 14.7918C8.42396 14.859 8.46482 14.9386 8.48598 15.0243L9.54083 19.2777C9.57713 19.4222 9.55521 19.5752 9.47978 19.7037L8.33407 21.6629C8.28434 21.749 8.21285 21.8206 8.12677 21.8704C8.04069 21.9202 7.94303 21.9466 7.84356 21.9468H4.63359C4.53651 21.9469 4.44103 21.922 4.35628 21.8747C4.27152 21.8273 4.20032 21.7591 4.14947 21.6763C3.25728 20.2331 2.67068 18.6221 2.42594 16.943C2.41155 16.848 2.42152 16.7508 2.45492 16.6607C2.48832 16.5706 2.54405 16.4904 2.61689 16.4277L5.57202 13.885C5.65202 13.8165 5.74948 13.7716 5.85353 13.7553C5.95757 13.739 6.0641 13.7519 6.1612 13.7927ZM24.4002 7.59991L23.1175 11.2471C23.0917 11.3217 23.0507 11.39 22.9971 11.4478C22.9434 11.5057 22.8783 11.5517 22.8059 11.5829L20.7062 12.4724C20.6098 12.5131 20.504 12.5265 20.4006 12.5109C20.2971 12.4954 20.1999 12.4516 20.1198 12.3843L16.1262 9.03453C16.0623 8.98173 16.0109 8.91561 15.9753 8.84081C15.9397 8.76601 15.921 8.68434 15.9203 8.60151V6.21782C15.9204 6.12442 15.9434 6.03248 15.9875 5.95014C16.0316 5.8678 16.0953 5.7976 16.173 5.74576L19.2133 3.71984C19.2927 3.66688 19.3841 3.63476 19.4791 3.62644C19.5741 3.61813 19.6697 3.63389 19.7571 3.67228C21.5065 4.43528 23.059 5.58696 24.2966 7.03983C24.3617 7.11579 24.4055 7.20759 24.4237 7.30594C24.4419 7.40428 24.4338 7.50569 24.4002 7.59991ZM10.355 3.71984L13.3961 5.74576C13.4737 5.7976 13.5375 5.8678 13.5815 5.95014C13.6256 6.03248 13.6487 6.12442 13.6488 6.21782V8.60151C13.6488 8.68447 13.6306 8.76642 13.5955 8.8416C13.5604 8.91678 13.5093 8.98336 13.4457 9.03666L9.4521 12.3865C9.37195 12.4537 9.27479 12.4975 9.17132 12.5131C9.06786 12.5286 8.96211 12.5153 8.86575 12.4745L6.76316 11.5829C6.69029 11.5521 6.62468 11.5063 6.57053 11.4486C6.51637 11.3909 6.47488 11.3225 6.4487 11.2479L5.16599 7.60062C5.13265 7.50606 5.12495 7.40437 5.14365 7.30587C5.16235 7.20738 5.20679 7.11559 5.27246 7.03983C6.51081 5.5855 8.06458 4.43279 9.81554 3.66944C9.90254 3.63222 9.99747 3.61734 10.0917 3.62614C10.1859 3.63495 10.2764 3.66715 10.355 3.71984ZM11.5838 26.9648L10.1832 23.4375C10.1512 23.3573 10.1379 23.2709 10.1443 23.1848C10.1507 23.0987 10.1766 23.0152 10.2202 22.9406L11.297 21.095C11.3467 21.0088 11.4182 20.9373 11.5043 20.8874C11.5904 20.8376 11.6881 20.8113 11.7875 20.811H17.7815C17.881 20.8113 17.9787 20.8376 18.0648 20.8874C18.1508 20.9373 18.2223 21.0088 18.2721 21.095L19.3496 22.9406C19.3933 23.0151 19.4193 23.0986 19.4258 23.1847C19.4324 23.2708 19.4192 23.3573 19.3872 23.4375L17.9966 26.9634C17.9626 27.0496 17.908 27.1261 17.8376 27.1864C17.7672 27.2466 17.6831 27.2888 17.5927 27.3091C15.7474 27.7326 13.8302 27.7326 11.9849 27.3091C11.8951 27.2885 11.8117 27.2464 11.7418 27.1864C11.672 27.1264 11.6177 27.0504 11.5838 26.9648Z"
                    fill={showColor.includes('futbol') ? 'white' : '#B6B6B6'}
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
          <Text style={styles.ftbol}>
            {showColor.includes('futbol') ? sports[1] : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('rugby')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('rugby')
                ? '#40036F'
                : 'white',
              marginLeft: 10
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M17.7815 13.2813C17.9223 13.1405 18.0014 12.9495 18.0014 12.7503C18.0014 12.5511 17.9223 12.3601 17.7815 12.2193C17.6406 12.0785 17.4496 11.9993 17.2505 11.9993C17.0513 11.9993 16.8603 12.0785 16.7195 12.2193L12.2195 16.7193C12.1498 16.789 12.0946 16.8718 12.057 16.9629C12.0193 17.0539 12 17.1515 12.0001 17.2501C12.0001 17.3486 12.0196 17.4462 12.0574 17.5372C12.0952 17.6282 12.1505 17.7109 12.2202 17.7805C12.29 17.8502 12.3727 17.9054 12.4638 17.943C12.5549 17.9807 12.6525 18 12.751 18C12.8496 17.9999 12.9471 17.9804 13.0381 17.9426C13.1292 17.9049 13.2118 17.8495 13.2815 17.7798L17.7815 13.2798V13.2813ZM27.0065 6.33929C26.996 4.43729 25.4165 2.97629 23.5535 3.00029C15.1205 3.10829 9.86598 6.23129 6.78048 10.4358C3.72198 14.6028 2.86998 19.7328 3.01548 23.7678C3.07998 25.5378 4.51698 26.8923 6.24498 26.9718C14.5295 27.3558 19.784 24.3723 22.931 20.1273C26.045 15.9273 27.029 10.5903 27.0065 6.33929ZM23.57 4.50029C24.6395 4.48679 25.499 5.31629 25.505 6.34529C25.511 7.69229 25.412 9.13979 25.172 10.6128L19.4015 4.84229C20.7814 4.62781 22.1735 4.51351 23.57 4.50029ZM17.6315 5.19479L24.8165 12.3798C24.239 14.7783 23.2565 17.1678 21.7265 19.2348C19.7495 21.8973 16.8275 24.0678 12.5615 25.0053C12.5514 24.993 12.5409 24.981 12.53 24.9693L5.13498 17.5758C5.66898 15.4113 6.57648 13.2468 7.98798 11.3223C9.99348 8.59229 13.0535 6.29429 17.633 5.19479H17.6315ZM4.77798 19.3398L10.7555 25.3173C9.39798 25.4898 7.92048 25.5483 6.31248 25.4748C5.32248 25.4283 4.54848 24.6618 4.51248 23.7123C4.46448 22.3473 4.53648 20.8608 4.77798 19.3398Z"
                    fill={showColor.includes('rugby') ? 'white' : '#B6B6B6'}
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
          <Text style={styles.ftbol}>
            {showColor.includes('rugby') ? sports[2] : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('handball')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('handball')
                ? '#40036F'
                : 'white',
              marginLeft: 10
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M17.8368 7.49935C17.1493 8.68685 17.5618 10.2243 18.7493 10.9118C19.9368 11.5993 21.4743 11.1868 22.1618 9.99935C22.8493 8.81185 22.4368 7.27435 21.2493 6.58685C20.0618 5.89935 18.5243 6.31185 17.8368 7.49935Z"
                    fill={showColor.includes('handball') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M19.8003 13.0115L16.5503 11.1365C15.2779 10.3926 14.3077 9.22487 13.8095 7.83774C13.3113 6.4506 13.3169 4.93243 13.8253 3.54899C13.9298 3.27411 13.9331 2.97101 13.8346 2.6939C13.7362 2.4168 13.5423 2.18377 13.2878 2.03649C12.6253 1.66149 11.7628 1.94899 11.5003 2.66149C10.3128 5.79899 11.0628 9.34899 13.3253 11.749L7.51278 21.8115C7.16278 22.4115 7.37528 23.174 7.97528 23.524C8.57528 23.874 9.33778 23.6615 9.68778 23.0615L10.9378 20.899L13.1003 22.149L9.97528 27.5615C9.62528 28.1615 9.83778 28.924 10.4378 29.274C11.0378 29.624 11.8003 29.4115 12.1503 28.8115L19.3878 16.2865C20.0024 17.1251 20.3994 18.1029 20.5434 19.1326C20.6874 20.1622 20.5738 21.2115 20.2128 22.1865C20.1103 22.4933 20.1308 22.8279 20.2701 23.1198C20.4094 23.4118 20.6565 23.6383 20.9594 23.7517C21.2623 23.8651 21.5974 23.8565 21.8942 23.7278C22.1909 23.599 22.4261 23.3602 22.5503 23.0615C23.7628 19.7865 23.0628 15.7615 19.8003 13.0115ZM15.9378 4.74899C16.8378 5.26149 17.9753 4.96149 18.5003 4.06149C19.0128 3.16149 18.7128 2.02399 17.8128 1.49899C17.3823 1.25914 16.8748 1.19825 16.3998 1.32949C15.9249 1.46072 15.5206 1.77354 15.2743 2.20037C15.0281 2.6272 14.9596 3.13376 15.0838 3.61064C15.2079 4.08751 15.5147 4.49641 15.9378 4.74899Z"
                    fill={showColor.includes('handball') ? 'white' : '#B6B6B6'}
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
          <Text style={styles.ftbol}>
            {showColor.includes('hanball') ? sports[3] : ''}
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
        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('ciclismo')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('ciclismo')
                ? '#40036F'
                : 'white'
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M15 23.75V18.75L11.25 15L17.5 10L20 13.75H23.75M2.5 22.5C2.5 23.4946 2.89509 24.4484 3.59835 25.1517C4.30161 25.8549 5.25544 26.25 6.25 26.25C7.24456 26.25 8.19839 25.8549 8.90165 25.1517C9.60491 24.4484 10 23.4946 10 22.5C10 21.5054 9.60491 20.5516 8.90165 19.8483C8.19839 19.1451 7.24456 18.75 6.25 18.75C5.25544 18.75 4.30161 19.1451 3.59835 19.8483C2.89509 20.5516 2.5 21.5054 2.5 22.5ZM20 22.5C20 23.4946 20.3951 24.4484 21.0983 25.1517C21.8016 25.8549 22.7554 26.25 23.75 26.25C24.7446 26.25 25.6984 25.8549 26.4017 25.1517C27.1049 24.4484 27.5 23.4946 27.5 22.5C27.5 21.5054 27.1049 20.5516 26.4017 19.8483C25.6984 19.1451 24.7446 18.75 23.75 18.75C22.7554 18.75 21.8016 19.1451 21.0983 19.8483C20.3951 20.5516 20 21.5054 20 22.5ZM20 6.25C20 6.58152 20.1317 6.89946 20.3661 7.13388C20.6005 7.3683 20.9185 7.5 21.25 7.5C21.5815 7.5 21.8995 7.3683 22.1339 7.13388C22.3683 6.89946 22.5 6.58152 22.5 6.25C22.5 5.91848 22.3683 5.60054 22.1339 5.36612C21.8995 5.1317 21.5815 5 21.25 5C20.9185 5 20.6005 5.1317 20.3661 5.36612C20.1317 5.60054 20 5.91848 20 6.25Z"
                    stroke={
                      showColor.includes('ciclismo') ? 'white' : '#B6B6B6'
                    }
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill={showColor.includes('ciclismo') ? 'white' : '#B6B6B6'}
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
          <Text style={styles.ftbol}>
            {showColor.includes('ciclismo') ? sports[4] : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('tenis')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('tenis')
                ? '#40036F'
                : 'white',
              marginLeft: 10
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M22.5365 18.7458C23.8417 18.7458 25.0935 19.2643 26.0165 20.1872C26.9394 21.1102 27.4579 22.3619 27.4579 23.6672C27.4579 24.9724 26.9394 26.2242 26.0165 27.1471C25.0935 28.0701 23.8417 28.5886 22.5365 28.5886C21.2313 28.5886 19.9795 28.0701 19.0566 27.1471C18.1336 26.2242 17.6151 24.9724 17.6151 23.6672C17.6151 22.3619 18.1336 21.1102 19.0566 20.1872C19.9795 19.2643 21.2313 18.7458 22.5365 18.7458ZM22.5365 21.2065C21.8839 21.2065 21.258 21.4657 20.7965 21.9272C20.3351 22.3887 20.0758 23.0146 20.0758 23.6672C20.0758 24.3198 20.3351 24.9457 20.7965 25.4071C21.258 25.8686 21.8839 26.1279 22.5365 26.1279C23.1891 26.1279 23.815 25.8686 24.2765 25.4071C24.738 24.9457 24.9972 24.3198 24.9972 23.6672C24.9972 23.0146 24.738 22.3887 24.2765 21.9272C23.815 21.4657 23.1891 21.2065 22.5365 21.2065ZM7.83386 18.1798C7.83386 18.1798 9.56865 16.4327 9.58095 12.9631C9.13803 10.2687 10.1961 7.1067 12.6199 4.69522C16.2248 1.0903 21.4784 0.499731 24.382 3.36644C27.2487 6.27006 26.6582 11.5236 23.0533 15.1286C20.6418 17.5523 17.4798 18.6104 14.7853 18.1675C11.3157 18.1798 9.56865 19.9146 9.56865 19.9146L4.35198 25.1313L2.61719 23.3965L7.83386 18.1798ZM22.6226 5.12584C20.691 3.2065 16.9999 3.78476 14.3547 6.44231C11.7218 9.07525 11.1312 12.7786 13.0505 14.6979C14.9822 16.6173 18.6732 16.0267 21.3062 13.3938C23.9637 10.7485 24.542 7.05748 22.6226 5.12584Z"
                    fill={showColor.includes('tenis') ? 'white' : '#B6B6B6'}
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
          <Text style={styles.ftbol}>
            {showColor.includes('tenis') ? sports[5] : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('running')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('running')
                ? '#40036F'
                : 'white',
              marginLeft: 10
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M5.51172 21.2092L11.6635 22.4396L12.5862 20.5941M19.0455 26.1306V21.2092L14.1241 17.5182L15.3545 10.1361M15.3545 5.21472C15.3545 5.54103 15.4841 5.85397 15.7149 6.08471C15.9456 6.31544 16.2585 6.44507 16.5848 6.44507C16.9112 6.44507 17.2241 6.31544 17.4548 6.08471C17.6856 5.85397 17.8152 5.54103 17.8152 5.21472C17.8152 4.88841 17.6856 4.57547 17.4548 4.34474C17.2241 4.114 16.9112 3.98438 16.5848 3.98438C16.2585 3.98438 15.9456 4.114 15.7149 4.34474C15.4841 4.57547 15.3545 4.88841 15.3545 5.21472Z"
                    stroke={showColor.includes('running') ? 'white' : '#B6B6B6'}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill={showColor.includes('running') ? 'white' : '#B6B6B6'}
                  />
                  <Path
                    d="M9.20312 15.0581V11.3671L15.3549 10.1367L19.0459 13.8278L22.7369 15.0581"
                    stroke={showColor.includes('running') ? 'white' : '#B6B6B6'}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          <Text style={styles.ftbol}>
            {showColor.includes('running') ? sports[6] : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => sportSelectStyle('hockey')}
            style={{
              alignItems: 'center',
              border: '1px solid #E5E5E5',
              borderRadius: 50,
              padding: 15,
              backgroundColor: showColor.includes('hockey')
                ? '#40036F'
                : 'white',
              marginLeft: 10
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clipPath="url(#clip0_1419_29214)">
                  <Path
                    d="M2.5 23.75V21.25C2.5 20.8958 2.62 20.5988 2.86 20.3588C3.1 20.1188 3.39667 19.9992 3.75 20H5V25H3.75C3.39584 25 3.09875 24.88 2.85875 24.64C2.61875 24.4 2.49917 24.1033 2.5 23.75ZM6.25 25V20H11.25L12.3125 17.5625L14.3125 21.9375L13.25 24.3125C13.1458 24.5417 12.9896 24.7138 12.7813 24.8288C12.5729 24.9438 12.3542 25.0008 12.125 25H6.25ZM27.5 23.75C27.5 24.1042 27.38 24.4013 27.14 24.6413C26.9 24.8813 26.6033 25.0008 26.25 25H25V20H26.25C26.6042 20 26.9013 20.12 27.1413 20.36C27.3813 20.6 27.5008 20.8967 27.5 21.25V23.75ZM23.75 25H17.875C17.6458 25 17.4271 24.9425 17.2188 24.8275C17.0104 24.7125 16.8542 24.5408 16.75 24.3125L9.15625 7.68751C8.86459 7.06251 8.90625 6.45834 9.28125 5.87501C9.65625 5.29167 10.1875 5.00001 10.875 5.00001C11.25 5.00001 11.5938 5.09917 11.9063 5.29751C12.2188 5.49584 12.4583 5.77167 12.625 6.12501L15 11.5L17.375 6.12501C17.5417 5.77084 17.7758 5.49459 18.0775 5.29626C18.3792 5.09792 18.7179 4.99917 19.0938 5.00001C19.7813 5.00001 20.3179 5.29167 20.7038 5.87501C21.0896 6.45834 21.1363 7.06251 20.8438 7.68751L17 16.0625L18.75 20H23.75V25Z"
                    fill={showColor.includes('hockey') ? 'white' : '#B6B6B6'}
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
          <Text style={styles.ftbol}>
            {showColor.includes('hockey') ? sports[7] : ''}
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
  ftbol: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontWeight: '100',
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 11
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
    padding: Padding.p_xl,
    marginTop: 15,
    justifyContent: 'space-between' // Distribute children evenly along the row
  }
})

export default Sports
