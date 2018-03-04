import React from 'react'
import Layout from './components/structure/Layout'
import {BrowserRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () =>
  <MuiThemeProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </MuiThemeProvider>

export default App
