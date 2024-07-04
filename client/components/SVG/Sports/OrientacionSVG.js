import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OrientacionSVG(props) {
  const color = props.showColor && props.showColor?.includes('orientacion') ? 'white' : '#40036f'

  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 90 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M50.43 26.083l-8.19 5 4.61 4.6 5-8.19a1 1 0 00-1.38-1.38l-.04-.03z"
        fill={color}
      />
      <Path
        d="M37.28 39.233l5-8.19 4.6 4.6-8.19 5a1 1 0 01-1.38-.37 1 1 0 010-1l-.03-.04zM6.85 57.523c10.11-2.06 10.54-2.26 11.54-2.39V6.903L6.85 9.423v48.1z"
        fill={color}
      />
      <Path
        d="M27.17 32.863a17.48 17.48 0 0015 17.32v8.68l-20.66-4.21V6.863c14.63 3 18.56 3.74 20.66 4.13v4.55a17.49 17.49 0 00-15 17.32zM67.55 7.383v47.48l-21.89 4.51v-9a17.5 17.5 0 000-34.94v-3.55h.19c.073.01.147.01.22 0l21.48-4.5zM69.76 54.783h.32c.73 0 .81 0 13.37 2.55V9.223l-13.14-2.72-.55.12v48.16zM3.76 61.033a1.12 1.12 0 01-.41-.87V7.323a1.12 1.12 0 01.89-1.1L17 3.703a1.69 1.69 0 001.35-1.65 1.672 1.672 0 00-2-1.64l-13.54 2.7A3.51 3.51 0 000 6.543v55.61a2.85 2.85 0 003.42 2.79l5.72-1.16c4.36-.89 6.53-1.28 7.82-1.49a1.69 1.69 0 001.4-1.66 1.68 1.68 0 00-2-1.65c-1.78.31-5.05.92-11.69 2.28a1.11 1.11 0 01-.93-.23h.02zM40.84 3.813c-2.58-.5-7.21-1.41-17.28-3.47a1.69 1.69 0 00-2 1.65 1.68 1.68 0 001.35 1.64c9.9 2 14.62 3 17.31 3.48a1.68 1.68 0 10.62-3.3zM22.89 62.173l17.3 3.52a1.67 1.67 0 002-1.64 1.67 1.67 0 00-1.34-1.64l-17.3-3.52a1.68 1.68 0 00-2 1.64 1.68 1.68 0 001.34 1.64zM47.68 66.203l18.53-3.82a1.68 1.68 0 001.34-1.64 1.681 1.681 0 00-2-1.64l-18.53 3.82a1.67 1.67 0 00-.072 3.26c.24.06.49.067.732.02zM67.55 2.203a1.68 1.68 0 00-2-1.64l-18.52 3.82a1.67 1.67 0 00-.083 3.258c.24.059.491.063.733.012l18.55-3.81a1.68 1.68 0 001.32-1.64z"
        fill={color}
      />
      <Path
        d="M70.31 1.603a1.67 1.67 0 001.33 1.66l13.18 2.72a1.12 1.12 0 01.89 1.1v52.85a1.12 1.12 0 01-1.12 1.12h-.22c-6.92-1.41-10.5-2.1-12.34-2.45a1.67 1.67 0 00-2 1.6 1.68 1.68 0 001.36 1.67l2.07.4 6.9 1.39 5 1a3.101 3.101 0 003.7-3V6.583a3.82 3.82 0 00-3-3.74L72.32.033a1.67 1.67 0 00-2 1.62l-.01-.05z"
        fill={color}
      />
    </Svg>
  )
}

export default OrientacionSVG