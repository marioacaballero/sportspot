import React from 'react'
import { Svg, Path } from 'react-native-svg'

const CorazonSVG = ({ isFavorite }) => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 25 23"
      fill={isFavorite || '#40036F'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.764 21.5C12.764 21.5 1.40039 15.1364 1.40039 7.4091C1.40039 6.04306 1.87368 4.71922 2.73973 3.6628C3.60578 2.60639 4.8111 1.88266 6.15061 1.61476C7.49012 1.34686 8.88108 1.55133 10.0868 2.19338C11.2926 2.83544 12.2386 3.87541 12.764 5.13637C13.2894 3.87541 14.2355 2.83544 15.4412 2.19338C16.647 1.55133 18.0379 1.34686 19.3774 1.61476C20.7169 1.88266 21.9223 2.60639 22.7883 3.6628C23.6544 4.71922 24.1277 6.04306 24.1277 7.4091C24.1277 15.1364 12.764 21.5 12.764 21.5Z"
        fill={isFavorite || '#40036F'}
        stroke={isFavorite || '#40036F'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default CorazonSVG
