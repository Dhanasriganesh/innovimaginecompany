import React, { Fragment } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Routers from '../../Routers/Routers'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import { ThemeProvider } from '../ThemeContext'
import Gold from '../pages/Gold'
function Layout() {
  return (
    <Router>
        <Fragment>
            <ThemeProvider>
              <Header/>
              <div><Routers/></div>
              <Gold/>
              <Footer/>
            </ThemeProvider>
        </Fragment>
    </Router>
  )
}

export default Layout
