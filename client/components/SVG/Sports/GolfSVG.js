import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GolfSVG(props) {
  const color = props.showColor && props.showColor?.includes('golf') ? 'white' : '#40036f'

  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 81 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M65.001 84.05a4.22 4.22 0 11-4.21-4.22 4.21 4.21 0 014.21 4.22zM37.391 50.18l-7-10.76-2.42-9.71 1.55 2.78 1.43-4.57a5.14 5.14 0 00-3-6.44l-10.14-3.65a4.65 4.65 0 00-6 3.15l-8.5 26.58a9.64 9.64 0 00-.42 3.77l1.77 19.4-4.37 20.61a4.942 4.942 0 009.67 2.05l4.53-21.34c.102-.483.129-.98.08-1.47l-1.36-15 6.3 15.33-.18 21.47a4.95 4.95 0 009.89.08l.19-22.46a5 5 0 00-.37-1.92l-6.1-14.84.85-2.68-3.52-5.44c-.37-.67-1-1.16-.94-2.17l.21-11.11 2.6 10.41c.118.456.307.892.56 1.29l7.35 11.36a4.3 4.3 0 107.22-4.67l.12-.05zM31.721 1.25A8.45 8.45 0 1037.001 12a8.44 8.44 0 00-5.28-10.75z"
        fill={color}
      />
      <Path
        d="M51.791 90.79a7.81 7.81 0 00-1.94.56l-12.76-32.44a7 7 0 01-3.73.79l13.84 35.21c.37 1.7 2.82 2.73 5.58 2.31 2.76-.42 4.88-2.22 4.61-4-.27-1.78-2.77-2.86-5.6-2.43zM61.151 14.25h2.06a1.74 1.74 0 001.71-1.4l.07-.34h4.88V3.8h-1.71a1.74 1.74 0 00-1.71 1.4l-.07.34h-5.23a1.74 1.74 0 00-1.74 1.74v5.23a1.74 1.74 0 001.74 1.74zm15.69 26.26V3.8a1.74 1.74 0 00-3.48 0v36.71c-2 .24-3.49.88-3.49 1.64 0 1 2.34 1.74 5.23 1.74 2.89 0 5.23-.78 5.23-1.74 0-.76-1.46-1.4-3.49-1.64z"
        fill={color}
      />
    </Svg>
  )
}

export default GolfSVG
