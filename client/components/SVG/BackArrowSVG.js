import React from 'react'
import { Svg, Path, Rect } from 'react-native-svg'

const BackArrowSVG = () => {
  return (
    <Svg width="25" height="25" viewBox="0 0 21 21" fill="none">
      <Rect
        width="21"
        height="21"
        transform="translate(0 21) rotate(-90)"
        fill="white"
      />
      <Path
        d="M6.17798 4.98006L0.65625 10.5018L6.17798 16.0234L7.10604 15.0953L3.16862 11.158L20.3124 11.158L20.3124 9.84546L3.16874 9.84546L7.10604 5.90816L6.17798 4.98006Z"
        fill="#40036f"
      />
    </Svg>
  )
}

export default BackArrowSVG
