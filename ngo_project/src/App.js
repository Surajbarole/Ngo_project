import './App.css';
import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Governance from "./components/Governance"
import Contact from './components/Contact';
import Projects from "./components/Projects"
import NavPage from './components/NavPage';
import ContactUs from './components/ContactUs';
import {BrowserRouter ,Routes, Route} from "react-router-dom"

function App() {

  return (
    < >

      <BrowserRouter>
        <NavPage/>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/governance' element={<Governance />}/>
        <Route path='/projects' element={<Projects />}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
