import { ThemeConfig } from 'antd';

export const customVariables = {
  // Primary Colors
  colorBlueMainPrimary: '#4166F5',
  colorBlue50Dark: '#21337B',
  colorBlue30Dark: '#2E47AC',
  colorBlue30Light: '#7A94F8',
  colorBlueLightBg: '#EFF2FF',

  // Secondary Colors
  colorPurpleMainPrimary: '#A5A2D8',
  colorPurple50Dark: '#4A445E',
  colorPurple30Dark: '#685F83',
  colorPurple30Light: '#CAC3DD',

  // Gray Colors
  colorGrayMain: '#ECEEF7',
  colorGray30Light: '#F2F3F9',
  colorGray50Dark: '#76777C',
  colorGrayBorder: '#DBDBDB',

  colorWhite: '#FFFFFF',
  colorMainWhite: '#F9F9F9',
  colorBlack: '#000000',
  colorBlacklight: '#4F4F4F',
  colorUserAvatarBg: '#BDC9FA',
};

export const theme: ThemeConfig = {
  token: {
    colorPrimary: customVariables.colorBlueMainPrimary,
    colorWhite: customVariables.colorWhite,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
  },
  components: {
    Menu: {},
    Button: {
      borderRadius: 8,
    },
    Segmented: {
      fontSize: 14,
      itemSelectedBg: customVariables.colorBlueMainPrimary,
      itemSelectedColor: customVariables.colorWhite,
      itemColor: customVariables.colorBlack,
      trackBg: customVariables.colorGrayMain,
      trackPadding: 4,
      borderRadius: 8,
    },
  },
};
