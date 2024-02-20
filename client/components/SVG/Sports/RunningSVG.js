import React from 'react'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

const RunningSVG = ({ showColor }) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <G clipPath="url(#clip0_1419_29214)">
        <Path
          d="M5.51172 21.2092L11.6635 22.4396L12.5862 20.5941M19.0455 26.1306V21.2092L14.1241 17.5182L15.3545 10.1361M15.3545 5.21472C15.3545 5.54103 15.4841 5.85397 15.7149 6.08471C15.9456 6.31544 16.2585 6.44507 16.5848 6.44507C16.9112 6.44507 17.2241 6.31544 17.4548 6.08471C17.6856 5.85397 17.8152 5.54103 17.8152 5.21472C17.8152 4.88841 17.6856 4.57547 17.4548 4.34474C17.2241 4.114 16.9112 3.98438 16.5848 3.98438C16.2585 3.98438 15.9456 4.114 15.7149 4.34474C15.4841 4.57547 15.3545 4.88841 15.3545 5.21472Z"
          // stroke={showColor.includes('running') ? 'white' : '#B6B6B6'}
          stroke="#B6B6B6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          // fill={showColor.includes('running') ? 'white' : '#B6B6B6'}
          fill="#B6B6B6"
        />
        <Path
          d="M9.20312 15.0581V11.3671L15.3549 10.1367L19.0459 13.8278L22.7369 15.0581"
          // stroke={showColor.includes('running') ? 'white' : '#B6B6B6'}
          stroke="#B6B6B6"
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
  )
}

export default RunningSVG
