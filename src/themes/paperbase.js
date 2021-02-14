import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';

const rawTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Raleway thin', sans-serif",
    fontSize: 14,
    fontWeightLight: 400, // Work Sans
    fontWeightRegular: 500, // Work Sans
    fontWeightMedium: 7500, // Roboto Condensed
    fontFamilySecondary: "'Raleway Medium', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 48,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 42,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 36,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 20,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 18,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 16,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 14,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 12,
    },
  },
  // shadows: [
  //   ...rawTheme.shadows,
  // ],

  overrides: {
    MuiTabs: {
      root: {
        // marginLeft: rawTheme.spacing.unit,
        color: rawTheme.palette.primary.contrastText,
        background: rawTheme.palette.primary.light,
      },
      indicator: {
        height: 2,
        borderRadius: 0,
        backgroundColor: rawTheme.palette.secondary.main,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'upperCase',
        // margin: '0 16px',
        // minWidth: 0,
        [rawTheme.breakpoints.up('md')]: {
          // minWidth: 0,
        },
      },
      labelContainer: {
        padding: 0,
        [rawTheme.breakpoints.up('md')]: {
          padding: 0,
        },
      },
    },
  },
};

export default theme;
