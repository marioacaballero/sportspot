import * as Font from 'expo-font'

export const loadFonts = async () => {
  await Font.loadAsync({
    'Proxima-Nova': require('./assets/fonts/Proxima-Nova-Font.otf')
  })
}

/* fonts */
export const FontFamily = {
  inputPlaceholder: 'Proxima-Nova'
}
/* font sizes */
export const FontSize = {
  size_xl: 20,
  size_3xl: 22,
  inputPlaceholder_size: 16,
  size_lg: 18,
  size_sm: 14,
  size_5xs: 8,
  inputLabel_size: 12,
  size_5xl: 24,
  size_3xs: 10,
  size_2xs: 11,
  size_11xl: 30,
  size_mini: 15,
  size_mid: 17
}
/* Colors */
export const Color = {
  blanco: '#fff',
  gris: '#f2f1f8',
  violeta2: '#642794',
  sportsVioleta: '#40036f',
  colorLinen_100: '#fdf0e7',
  colorLinen_200: '#feeee7',
  naranja3: '#fcece7',
  sportsNaranja: '#f25910',
  colorGray_100: '#2b2849',
  colorGray_200: '#120d26',
  colorGray_300: '#0a0a0a',
  rojoUbiqum: '#f44336',
  colorTomato_100: '#ff3b30',
  black2: '#abafb1',
  colorDarkgray_100: '#9e9e9e',
  violeta3: '#e2dcec',
  colorGainsboro_100: '#d8d8d8',
  colorBlack: '#000',
  primaryColor1: '#4355fa',
  grayPaletteGray30: '#ededed',
  black4: '#5e6366',
  colorDimgray_100: '#54595e',
  colorThistle: '#c7bed5',
  colorMistyrose: '#fcddcf',
  grisGeneral: '#bcbcbc'
}
/* Paddings */
export const Padding = {
  p_xl: 20,
  p_3xs: 10,
  p_8xs: 5,
  p_5xs: 8,
  p_xs: 12,
  p_lgi: 19,
  p_base: 16,
  p_mid: 17,
  p_9xs: 4,
  p_smi: 13,
  p_83xl: 102,
  p_6xs: 7,
  p_mini: 15,
  p_11xs: 2,
  p_11xl: 30,
  p_sm: 14,
  p_4xl: 23,
  p_2xl: 21,
  p_181xl: 200,
  p_182xl: 201,
  p_6xl: 25,
  p_48xl: 67,
  p_16xl: 35,
  p_152xl: 171,
  p_31xl: 50,
  p_5xl: 24
}
/* border radiuses */
export const Border = {
  br_31xl: 50,
  br_5xs: 8,
  br_base: 16,
  br_5xl: 24,
  br_xl: 20,
  br_3xs: 10,
  br_xs: 12,
  br_sm: 14,
  br_7xs: 6,
  br_9xs: 4,
  br_8xs: 5
}
