import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CarreraSVG(props) {

  const color = props.showColor && props.showColor?.includes('carrera') ? 'white' : '#40036f'
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 85 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M68.832 37.06V26.54a5.83 5.83 0 00-9.93-4.12l-21.79 21.79a5.82 5.82 0 000 8.23l12.23 12.28-15 15a5.82 5.82 0 108.23 8.22l19.07-19.07a5.82 5.82 0 000-8.22l-12.17-12.32 7.74-7.75v2.3a5.83 5.83 0 005.82 5.82h15.69a5.82 5.82 0 000-11.64h-9.89zM34.092 31.31a5.798 5.798 0 004.11-1.7l7.84-7.84 4 2.87 5.55-5.54a10.362 10.362 0 013-2.05l.58-.27-10.59-7.34a5.84 5.84 0 00-7.34.72l-11.21 11.22a5.82 5.82 0 004.11 9.93h-.05z"
        fill={color}
      />
      <Path
        d="M33.782 55.77a10.31 10.31 0 01-2.69-4.75l-.17-.62-29.22 29.23a5.812 5.812 0 108.22 8.22l28-28-4.14-4.08zM72.802 19.78c13.11-.47 13.09-19.32 0-19.78-13.08.47-13.1 19.31 0 19.78z"
        fill={color}
      />
    </Svg>
  )
}

export default CarreraSVG
