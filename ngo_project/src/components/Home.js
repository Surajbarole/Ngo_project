import React from 'react'
import About from './About'
import NavPage from './NavPage'
import Contact from './Contact'
import Governance from './Governance'
import Projects from './Projects'
// import ContactUs from './ContactUs'
function Home() {
  return (
    <>
    <div>
      {/* <NavPage/> */}
      <About/>
      <Projects/>
      {/* <Governance/> */}
      <Contact/>
    </div>
    </>
  )
}

export default Home
