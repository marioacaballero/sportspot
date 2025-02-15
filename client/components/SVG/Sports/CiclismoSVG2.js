import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CiclismoSVG2(props) {
  const color = props.showColor && props.showColor?.includes('ciclismo') ? 'white' : '#40036f'

  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 98 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M28.042 75.998a13.709 13.709 0 11-8.32-24.58 13.751 13.751 0 0112.68 8.48l4.3-4.45a19.64 19.64 0 10-3.73 24.15 9.74 9.74 0 01-3.7-2.21c-.449-.428-.86-.893-1.23-1.39z"
        fill={color}
      />
      <Path
        d="M57.862 45.658l-10.4-6 7.56-4.74-.15 1.41a5 5 0 003.94 5.29c.06 0 18.26 3.11 18.92 3.11a4.93 4.93 0 00.8-9.79l-13.4-2.22.64-6.4c.64-4.08.92-5.36-.6-7.8l-1.92-3.07a8.459 8.459 0 00-11.67-2.68l-21 13.14c-5.15 3.23-7.67 10-3.46 15 1.65 2 17.64 11.79 17.64 11.79l-12.95 13.43a5.91 5.91 0 004.25 10 5.839 5.839 0 004.25-1.81l18.84-19.53a5.91 5.91 0 00-1.29-9.13zM81.132 18.158A9.83 9.83 0 1070.685 1.5a9.83 9.83 0 0010.447 16.657z"
        fill={color}
      />
      <Path
        d="M78.322 45.508a19.64 19.64 0 1019.65 19.64 19.73 19.73 0 00-19.65-19.64zm0 33.37a13.73 13.73 0 1113.73-13.73 13.75 13.75 0 01-13.73 13.73z"
        fill={color}
      />
    </Svg>
  )
}

export default CiclismoSVG2
