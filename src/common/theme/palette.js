import { grey } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

// Multisoluciones brand palette
const brand = {
  primary: '#02685D',
  primaryLight: '#3F8175',
  primaryDark: '#014A42',
  secondary: '#3F8175',
  secondaryLight: '#5BA193',
  secondaryDark: '#2C5C53',
  neutral: '#676666',
  white: '#FFFFFF',
};

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? '#0F1F1D' : '#F5F8F7',
    paper: darkMode ? '#152A27' : brand.white,
  },
  primary: {
    main:
      validatedColor(server?.attributes?.colorPrimary)
      || (darkMode ? brand.primaryLight : brand.primary),
    light: brand.primaryLight,
    dark: brand.primaryDark,
    contrastText: brand.white,
  },
  secondary: {
    main:
      validatedColor(server?.attributes?.colorSecondary)
      || (darkMode ? brand.secondaryLight : brand.secondary),
    light: brand.secondaryLight,
    dark: brand.secondaryDark,
    contrastText: brand.white,
  },
  neutral: {
    main: brand.neutral,
    contrastText: brand.white,
  },
  geometry: {
    main: brand.primaryLight,
  },
  alwaysDark: {
    main: grey[900],
  },
  brand,
});
