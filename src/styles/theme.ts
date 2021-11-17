import { getRem } from './../utils/rem';
export default {
  colors: {
    primary: '#683B0D',
    secondary: '#F8970C',
    lightPrimary: '#FCE2B6',

    button: '#D3C7C7',

    gray: '#7C7C7C',
    green: '#00160A',
    white: '#FFFFFF',
    lightBlue: '#ACF8FF',
    black: '#000000',

    background: '#F5FCFE',
  },
  fonts: {
    regular: 'regular',
    medium: 'medium',
    semibold: 'semibold',
  },
  space: {
    '2': getRem(0.125),
    '4': getRem(0.25),
    '8': getRem(0.5),
    '16': getRem(1),
    '24': getRem(1.5),
    '32': getRem(2),
    '64': getRem(4),
    '128': getRem(8),
  },
  fontSizes: {
    '14': getRem(0.875, true),
    '18': getRem(1.125, true),
    '24': getRem(1.5, true),
  },
  radius: {
    full: 99999,
    base: getRem(0.5),
  },
};
