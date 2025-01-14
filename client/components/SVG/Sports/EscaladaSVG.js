import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EscaladaSVG(props) {
  const color = props.showColor && props.showColor?.includes('escalada') ? 'white' : '#40036f'

  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 88 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M87 36.752l-9.39-10.29a6.81 6.81 0 00-3.42-2l-5.71-1.39-6.68-6.19-1.19-10.62a3.49 3.49 0 00-6.17-1.8 3.45 3.45 0 00-.74 2.57l1.33 11.91a3.48 3.48 0 001.1 2.18l9.84 9.12-3.95 16.36-10.47-.25a4.931 4.931 0 00-3.82 1.64L37.1 59.762a5 5 0 007.39 6.67l9.1-10.08 6.25.15-3.83 5.47a5.05 5.05 0 00-.82 3.74l2.82 15.73a5 5 0 004.9 4.1c.295-.002.59-.028.88-.08a5 5 0 004-5.79l-2.45-13.68 8-11.38a4.48 4.48 0 00.73-1.54c.87-3.47 3.11-12.8 3.84-15.87l2.83 3.08L79 50.752a3.48 3.48 0 002.88 4c.19.02.38.02.57 0a3.48 3.48 0 003.45-2.92l2-12.16a3.45 3.45 0 00-.9-2.92z"
        fill={color}
      />
      <Path
        d="M72.24 20.932a6.81 6.81 0 10-1.8-9.47 6.8 6.8 0 001.8 9.47zM38.65 12.912l15-11a1 1 0 00-.62-1.89H4.69A4.69 4.69 0 000 4.713v80.75a1.48 1.48 0 002.77.72l12.81-23c.412-.733.719-1.52.91-2.34l4.42-19.18a9.09 9.09 0 012.54-4.47l7.87-7.53a9 9 0 002.62-4.84l1.18-6.32a8.91 8.91 0 013.53-5.59z"
        fill={color}
      />
    </Svg>
  )
}

export default EscaladaSVG
