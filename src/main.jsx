import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import './assets/scss/main.scss';



const theme = createTheme({
  palette:{
    primary:{
      main:lightBlue[400],
      contrastText:'#ffffff',
    },
    typography:{
      button:{
        color:'#ffffff',
      }
    },
  },

  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
          backgroundColor: 'black'
          },
        },
      },
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
</BrowserRouter>
  </React.StrictMode>,
)
