import React from 'react'
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

const HockeySVG = ({ showColor }) => {
  const color = showColor && showColor?.includes('hockey') ? 'white' : '#40036f'
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <G clipPath="url(#clip0_1419_29214)">
        <Path
          d="M2.5 23.75V21.25C2.5 20.8958 2.62 20.5988 2.86 20.3588C3.1 20.1188 3.39667 19.9992 3.75 20H5V25H3.75C3.39584 25 3.09875 24.88 2.85875 24.64C2.61875 24.4 2.49917 24.1033 2.5 23.75ZM6.25 25V20H11.25L12.3125 17.5625L14.3125 21.9375L13.25 24.3125C13.1458 24.5417 12.9896 24.7138 12.7813 24.8288C12.5729 24.9438 12.3542 25.0008 12.125 25H6.25ZM27.5 23.75C27.5 24.1042 27.38 24.4013 27.14 24.6413C26.9 24.8813 26.6033 25.0008 26.25 25H25V20H26.25C26.6042 20 26.9013 20.12 27.1413 20.36C27.3813 20.6 27.5008 20.8967 27.5 21.25V23.75ZM23.75 25H17.875C17.6458 25 17.4271 24.9425 17.2188 24.8275C17.0104 24.7125 16.8542 24.5408 16.75 24.3125L9.15625 7.68751C8.86459 7.06251 8.90625 6.45834 9.28125 5.87501C9.65625 5.29167 10.1875 5.00001 10.875 5.00001C11.25 5.00001 11.5938 5.09917 11.9063 5.29751C12.2188 5.49584 12.4583 5.77167 12.625 6.12501L15 11.5L17.375 6.12501C17.5417 5.77084 17.7758 5.49459 18.0775 5.29626C18.3792 5.09792 18.7179 4.99917 19.0938 5.00001C19.7813 5.00001 20.3179 5.29167 20.7038 5.87501C21.0896 6.45834 21.1363 7.06251 20.8438 7.68751L17 16.0625L18.75 20H23.75V25Z"
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

export default HockeySVG
