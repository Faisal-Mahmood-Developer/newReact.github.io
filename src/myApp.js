import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './React module/Home.js'
import About from './React module/about.js'
import Contact from './React module/contact.js'
import Form from  './React module/form.js'
import Layout  from "./React module/layout.js";


function Header(){
    return (
        <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
        </>
    
    )
}

export default Header;