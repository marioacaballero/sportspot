import React from 'react'
import { Svg, Path } from 'react-native-svg'

const HistorialSVG = ({ color }) => {
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill={color || '#40036F'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.6485 15.0002C13.8235 14.8642 13.9825 14.7052 14.2995 14.3882L18.2565 10.4302C18.3525 10.3352 18.3085 10.1702 18.1815 10.1252C17.5623 9.90941 17.0002 9.55586 16.5375 9.09121C16.0729 8.62853 15.7193 8.0664 15.5035 7.44721C15.4585 7.32021 15.2935 7.27621 15.1985 7.37221L11.2395 11.3292C10.9225 11.6462 10.7635 11.8052 10.6275 11.9802C10.4665 12.1872 10.3275 12.4102 10.2155 12.6462C10.1205 12.8462 10.0495 13.0602 9.90752 13.4862L9.72352 14.0362L9.43152 14.9112L9.15852 15.7312C9.12448 15.834 9.11968 15.9442 9.14466 16.0495C9.16963 16.1549 9.2234 16.2512 9.29996 16.3278C9.37651 16.4043 9.47284 16.4581 9.57819 16.4831C9.68353 16.508 9.79375 16.5032 9.89652 16.4692L10.7165 16.1962L11.5915 15.9042L12.1415 15.7202C12.5675 15.5782 12.7815 15.5082 12.9815 15.4122C13.2175 15.2992 13.4425 15.1622 13.6485 15.0002ZM19.4955 9.19121C19.702 8.99168 19.8667 8.75304 19.9801 8.48919C20.0934 8.22534 20.153 7.94157 20.1555 7.65443C20.158 7.36729 20.1033 7.08253 19.9946 6.81676C19.8859 6.55098 19.7253 6.30951 19.5223 6.10643C19.3193 5.90336 19.0779 5.74273 18.8121 5.63393C18.5464 5.52513 18.2617 5.47033 17.9745 5.47273C17.6874 5.47513 17.4036 5.53468 17.1397 5.6479C16.8758 5.76113 16.6371 5.92576 16.4375 6.13221L16.3105 6.26021C16.25 6.31989 16.2049 6.39342 16.1791 6.47443C16.1533 6.55544 16.1476 6.64151 16.1625 6.72521C16.1825 6.83221 16.2175 6.99021 16.2825 7.17721C16.4125 7.55221 16.6585 8.04421 17.1215 8.50721C17.4955 8.88414 17.9503 9.17104 18.4515 9.34621C18.6395 9.41121 18.7965 9.44621 18.9035 9.46621C18.9872 9.48102 19.0733 9.4753 19.1543 9.44952C19.2353 9.42374 19.3088 9.37868 19.3685 9.31821L19.4955 9.19121Z"
        fill={color || '#40036F'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.30091 1.672C0.128906 2.843 0.128906 4.729 0.128906 8.5V12.5C0.128906 16.271 0.128906 18.157 1.30091 19.328C2.47191 20.5 4.35791 20.5 8.12891 20.5H10.1289C13.8999 20.5 15.7859 20.5 16.9569 19.328C18.1099 18.176 18.1289 16.332 18.1289 12.68L15.3109 15.498C15.0409 15.768 14.8199 15.989 14.5709 16.184C14.2783 16.412 13.9618 16.6075 13.6269 16.767C13.3199 16.9047 13.0046 17.0232 12.6829 17.122L10.3709 17.893C10.0039 18.0154 9.61003 18.0332 9.23349 17.9443C8.85694 17.8554 8.51259 17.6635 8.23901 17.3899C7.96544 17.1163 7.77347 16.772 7.68461 16.3954C7.59575 16.0189 7.61351 15.625 7.73591 15.258L8.00991 14.438L8.48491 13.012L8.50591 12.946C8.62691 12.584 8.72591 12.288 8.86191 12.002C9.02191 11.667 9.21691 11.351 9.44491 11.059C9.63991 10.809 9.86091 10.589 10.1309 10.319L14.1369 6.312L15.2489 5.2L15.3759 5.073C15.7157 4.7322 16.1196 4.46195 16.5643 4.27781C17.0089 4.09366 17.4856 3.99925 17.9669 4C17.8159 2.97 17.5229 2.237 16.9569 1.672C15.7859 0.5 13.8999 0.5 10.1289 0.5H8.12891C4.35791 0.5 2.47191 0.5 1.30091 1.672ZM4.37891 7.5C4.37891 7.30109 4.45792 7.11032 4.59858 6.96967C4.73923 6.82902 4.92999 6.75 5.12891 6.75H11.6289C11.8278 6.75 12.0186 6.82902 12.1592 6.96967C12.2999 7.11032 12.3789 7.30109 12.3789 7.5C12.3789 7.69891 12.2999 7.88968 12.1592 8.03033C12.0186 8.17098 11.8278 8.25 11.6289 8.25H5.12891C4.92999 8.25 4.73923 8.17098 4.59858 8.03033C4.45792 7.88968 4.37891 7.69891 4.37891 7.5ZM4.37891 11.5C4.37891 11.3011 4.45792 11.1103 4.59858 10.9697C4.73923 10.829 4.92999 10.75 5.12891 10.75H7.62891C7.82782 10.75 8.01858 10.829 8.15924 10.9697C8.29989 11.1103 8.37891 11.3011 8.37891 11.5C8.37891 11.6989 8.29989 11.8897 8.15924 12.0303C8.01858 12.171 7.82782 12.25 7.62891 12.25H5.12891C4.92999 12.25 4.73923 12.171 4.59858 12.0303C4.45792 11.8897 4.37891 11.6989 4.37891 11.5ZM4.37891 15.5C4.37891 15.3011 4.45792 15.1103 4.59858 14.9697C4.73923 14.829 4.92999 14.75 5.12891 14.75H6.62891C6.82782 14.75 7.01858 14.829 7.15924 14.9697C7.29989 15.1103 7.37891 15.3011 7.37891 15.5C7.37891 15.6989 7.29989 15.8897 7.15924 16.0303C7.01858 16.171 6.82782 16.25 6.62891 16.25H5.12891C4.92999 16.25 4.73923 16.171 4.59858 16.0303C4.45792 15.8897 4.37891 15.6989 4.37891 15.5Z"
        fill={color || '#40036F'}
      />
    </Svg>
  )
}

export default HistorialSVG
