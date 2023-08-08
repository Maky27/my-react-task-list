import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    background: {
      light: 'white', // Color de fondo en modo claro
      dark: 'black',  // Color de fondo en modo oscuro
    },
    text: {
      light: 'black', // Color de texto en modo claro
      dark: 'white',  // Color de texto en modo oscuro
    },
    // Otros colores...
  },
});

export default theme;
