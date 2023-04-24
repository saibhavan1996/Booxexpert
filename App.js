import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from "./component/Home"
import About from "./component/About"
import Blogs from "./component/Blogs"
import Services from "./component/Services"
import Registration from "./component/RegistrationForm"
import LoginForm from "./component/LoginForm"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact path="/"  element={<LoginForm/>} />
          <Route exact path="/Registration"  element={<Registration/>} />
          <Route exact path="/h"  element={<Home/>} />
          <Route exact path="/about"  element={<About/>} />
          <Route exact path="/blogs"  element={<Blogs/>} />
          <Route exact path="/services"   element={<Services/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App