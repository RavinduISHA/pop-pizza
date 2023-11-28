import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Menu } from '../pages/Menu'
import { Deals } from '../pages/Deals'
import { Contact } from '../pages/Contact'

const Routers = () => {
  return( 
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default Routers
