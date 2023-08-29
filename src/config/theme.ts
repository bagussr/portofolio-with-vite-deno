import { extendTheme } from '@chakra-ui/react';
import '@fontsource/noto-serif';

const global = {
  'html, body': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    maxWidth: '100vw',
    height: '100vh',
  },
  a: {
    textDecoration: 'none',
  },
  '.custom-pattern': {
    zIndex: 20,
    position: 'absolute',
    borderRadius: '100%',
    width: 'var(--chakra-space-5)',
    height: 'var(--chakra-space-5)',
    overflow: 'hidden',
    top: 'var(--chakra-space-3)',
    left: 'var(--chakra-space-2)',
    '@media (min-width: 980px)': {
      width: 'var(--chakra-space-8)',
      height: 'var(--chakra-space-8)',
      left: 'var(--chakra-space-4)',
      top: 'var(--chakra-space-4)',
    },
    _after: {
      content: '""',
      position: 'absolute',
      top: '2.6px',
      left: '2.6px',
      borderRadius: '50%',
      background: '#003459',
      width: '77.5%',
      height: '77.5%',
      '@media (min-width: 980px)': {
        width: '85%',
        height: '85%',
      },
    },
    _before: {
      position: 'absolute',
      background:
        'linear-gradient(90deg,  red,blue,yellow,green, red, yellow, blue, green)',
      backgroundSize: '100%',
      content: '""',
      display: 'inline-block',
      filter: 'blur(2px)',
      width: '100%',
      height: '100%',
      animationDelay: '3s',
    },
  },
};

const theme = extendTheme({
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  styles: {
    global: global,
  },
  fonts: {
    heading: "'Noto Serif', sans-serif",
    body: "'Noto Serif', sans-serif",
  },
  colors: {
    brand: {
      primary: '#00a8e8',
      secondary: '#007ea7',
      background: '#003459',
      black: '#00171f',
      blue: '#284b63',
      green: '#3c6e71',
      gray: '#d9d9d9',
      brown: '#914110',
      sky: '#0074B7',
    },
  },
  components: {
    Box: {
      variants: {
        'shadow-pattern': {
          backgroundImage:
            'linear-gradient(to bottom, rgba(255,255,255,0.05), rgb(0,0,0,0.1), rgb(0,0,0,0.2), rgba(0,0,0,0.6))',
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.background',
      },
    },
  },
});

export default theme;
