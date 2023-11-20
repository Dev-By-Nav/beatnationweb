import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Silver from './Pages/Packages/Silver'
import Bronze from './Pages/Packages/Bronze'
import Platinum from './Pages/Packages/Platinum'
import Gold from './Pages/Packages/Gold'
import Custom from './Pages/Packages/Custom'
import Band from './Pages/Packages/Band'


function App() {
  return (
    <div className=''>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/contact-us' element={<Contact />}></Route>

        <Route exact path='/package1' element={<Bronze />}></Route>
        <Route exact path='/package2' element={<Silver />}></Route>
        <Route exact path='/package3' element={<Gold />}></Route>
        <Route exact path='/package4' element={<Platinum />}></Route>
        <Route exact path='/custom-package' element={<Custom />}></Route>
        <Route exact path='/band' element={<Band />}></Route>
        

        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  )
}

export default App