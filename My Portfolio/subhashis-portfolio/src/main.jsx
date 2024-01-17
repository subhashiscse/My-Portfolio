import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { GlobalStyle } from './components/common/global'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
