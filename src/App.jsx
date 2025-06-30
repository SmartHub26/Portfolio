import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About_me/About'
import StarBackground from './Components/Background/Starback'
import Projects from './Components/Projects/Projects'
import SkillsSection from './Components/skills/SkillsSection' // Assuming you have a skills data file
import Contact from './Components/Contact/Contact' // Assuming you have a contact component
import Footer from './Components/Footer/Footer' // Assuming you have a footer component
const App = () => {
  return (
    <div className="App">
      <StarBackground/>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
      <Footer/>

      
    </div>
  )
}
export default App