import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SenderismoSVG(props) {
  const color = props.showColor && props.showColor?.includes('marcha') ? 'white' : '#40036f'

  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 61 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.263 63.32l-2.74 18.46a6.07 6.07 0 0012 1.69l2.13-14.1-11.39-6.05z"
        fill={color}
      />
      <Path
        d="M48.693 34.84l-4.81-3.37c-5-2.88-6.15-7.95-11.69-8.78a8.83 8.83 0 00-9.93 7.47l-3.42 24.27c-.41 2.73 1.63 4.49 3.89 5.45l16.78 8.89v13.84a6.071 6.071 0 0012.14-.12V66.05a7.59 7.59 0 00-4-6.67l-10-5.31a1.439 1.439 0 01-.76-1.49l1.65-11.87c2.44 1.53 6.08 5 9.2 4.76h8.17a5.32 5.32 0 000-10.63h-7.22z"
        fill={color}
      />
      <Path
        d="M55.503 86.69a1.56 1.56 0 003.11 0V48.13a9.09 9.09 0 01-3.11.45v38.11zM58.613 26.97a1.56 1.56 0 00-3.11 0v4.76a8.64 8.64 0 013.11.46v-5.22zM34.283 19.65c13-.46 13-19.19 0-19.65-13.01.46-13.03 19.19 0 19.65zM15.253 24.63l-7.08-1a4.668 4.668 0 00-5.28 4L.043 47.96a4.68 4.68 0 004 5.27c.23 0 7.77 1.17 7.74 1a4.69 4.69 0 004.62-4l2.84-20.33a4.658 4.658 0 00-3.99-5.27z"
        fill={color}
      />
    </Svg>
  )
}

export default SenderismoSVG
