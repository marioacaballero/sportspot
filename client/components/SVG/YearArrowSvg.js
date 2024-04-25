import React from 'react'
import { Svg, Path } from 'react-native-svg'

export const LeftYearArrowSvg = ({ color }) => {
  return (
    <Svg fill={color} width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <Path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"/>
    </Svg>

  )
}

export const RightYearArrowSvg = ({ color }) => {
  return (
        <Svg fill={color} width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/>
        </Svg>
  )
}
