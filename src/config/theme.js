import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DUMMY_DATA = {
  _LOREM:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
};

export const COLORS = {
  yellow: '#FFC700',
  black: '#020202',
  gray: '#8D92A3',
  white: '#fff',
  lightGray: '#F5F6FB',
  transparent: 'transparent',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  //font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2},
  h3: {fontFamily: 'Poppins-Medium', fontSize: SIZES.h3},
  h4: {fontFamily: 'Poppins-Medium', fontSize: SIZES.h4},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5},
};

const appTheme = {COLORS, SIZES, FONTS, DUMMY_DATA};

export default appTheme;
