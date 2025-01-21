import React, { Fragment } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Routers from '../../Routers/Routers'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import { ThemeProvider } from '../ThemeContext'
function Layout() {
  return (
    <Router>
        <Fragment>
            <ThemeProvider>
              <Header/>
              <div><Routers/></div>
              <Footer/>
            </ThemeProvider>
        </Fragment>
    </Router>
  )
}

export default Layout
