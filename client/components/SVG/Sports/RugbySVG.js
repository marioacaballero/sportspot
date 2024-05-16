import React from 'react'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

const RugbySVG = ({ showColor }) => {
  const color = showColor && showColor?.includes('rugby') ? 'white' : '#40036f'
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <G clipPath="url(#clip0_1419_29214)">
        <Path
          d="M17.7815 13.2813C17.9223 13.1405 18.0014 12.9495 18.0014 12.7503C18.0014 12.5511 17.9223 12.3601 17.7815 12.2193C17.6406 12.0785 17.4496 11.9993 17.2505 11.9993C17.0513 11.9993 16.8603 12.0785 16.7195 12.2193L12.2195 16.7193C12.1498 16.789 12.0946 16.8718 12.057 16.9629C12.0193 17.0539 12 17.1515 12.0001 17.2501C12.0001 17.3486 12.0196 17.4462 12.0574 17.5372C12.0952 17.6282 12.1505 17.7109 12.2202 17.7805C12.29 17.8502 12.3727 17.9054 12.4638 17.943C12.5549 17.9807 12.6525 18 12.751 18C12.8496 17.9999 12.9471 17.9804 13.0381 17.9426C13.1292 17.9049 13.2118 17.8495 13.2815 17.7798L17.7815 13.2798V13.2813ZM27.0065 6.33929C26.996 4.43729 25.4165 2.97629 23.5535 3.00029C15.1205 3.10829 9.86598 6.23129 6.78048 10.4358C3.72198 14.6028 2.86998 19.7328 3.01548 23.7678C3.07998 25.5378 4.51698 26.8923 6.24498 26.9718C14.5295 27.3558 19.784 24.3723 22.931 20.1273C26.045 15.9273 27.029 10.5903 27.0065 6.33929ZM23.57 4.50029C24.6395 4.48679 25.499 5.31629 25.505 6.34529C25.511 7.69229 25.412 9.13979 25.172 10.6128L19.4015 4.84229C20.7814 4.62781 22.1735 4.51351 23.57 4.50029ZM17.6315 5.19479L24.8165 12.3798C24.239 14.7783 23.2565 17.1678 21.7265 19.2348C19.7495 21.8973 16.8275 24.0678 12.5615 25.0053C12.5514 24.993 12.5409 24.981 12.53 24.9693L5.13498 17.5758C5.66898 15.4113 6.57648 13.2468 7.98798 11.3223C9.99348 8.59229 13.0535 6.29429 17.633 5.19479H17.6315ZM4.77798 19.3398L10.7555 25.3173C9.39798 25.4898 7.92048 25.5483 6.31248 25.4748C5.32248 25.4283 4.54848 24.6618 4.51248 23.7123C4.46448 22.3473 4.53648 20.8608 4.77798 19.3398Z"
          fill={color}
          // fill="#B6B6B6"
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

export default RugbySVG
