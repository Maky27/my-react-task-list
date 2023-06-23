import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header';
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Header>
    <App />
    </Header>
    </ChakraProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
