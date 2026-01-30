import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
      },
      blue: {
        50: '#EBF8FF',
        100: '#BEE3F8',
        200: '#90CDF4',
        300: '#63B3ED',
        400: '#4299E1',
        500: '#3182CE',
        600: '#2B6CB0',
        700: '#2C5282',
        800: '#2A4365',
        900: '#1A365D',
      },
      green: {
        50: '#F0FFF4',
        100: '#C6F6D5',
        200: '#9AE6B4',
        300: '#68D391',
        400: '#48BB78',
        500: '#38A169',
        600: '#2F855A',
        700: '#276749',
        800: '#22543D',
        900: '#1C4532',
      },
      red: {
        50: '#FFF5F5',
        100: '#FED7D7',
        200: '#FEB2B2',
        300: '#FC8181',
        400: '#F56565',
        500: '#E53E3E',
        600: '#C53030',
        700: '#9B2C2C',
        800: '#822727',
        900: '#63171B',
      },
      accent: '#FE3039'
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    textStyles: {
      h0: {
        fontSize: 'clamp(1.8rem, 5vw, 5rem)',
        fontWeight: 'bold',
        lineHeiht: 'shorter',
      },
      h1: {
        fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
        fontWeight: 'bold',
        lineHeiht: 'shorter',
      },
      h2: {
        fontSize: 'clamp(1.25rem, 3vw, 4.875rem)',
        fontWeight: 'bold',
        lineHeight: 'shorter',
      },
      h3: {
        fontSize: 'clamp(0.7rem, 2.5vw, 1.5rem)',
        fontWeight: 'semibold',
        lineHeight: 'short',
      },
      h4: {
        fontSize: 'clamp(0.5rem, 2vw, 1.25rem)',
        fontWeight: 'semibold',
        lineHeight: 'short',
      },
      h5: {
        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
        fontWeight: 'medium',
        lineHeight: 'short',
      },
      h6: {
        fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
        fontWeight: 'medium',
        lineHeight: 'short',
      },
      body: {
        fontSize: 'clamp(0.4rem, 1.25vw, 1rem)',
        lineHeight: 'base',
      },
      caption: {
        fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
        lineHeight: 'short',
      },
    },
});

export default theme;