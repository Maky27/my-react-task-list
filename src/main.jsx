import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Header from './Components/Header';
import theme from './Components/theme';
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);