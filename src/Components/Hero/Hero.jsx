import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling
import Picture1 from "../../assets/Picture1.jpg"; // Assuming you have a hero image in this path
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={Picture1} alt="" />
            <h1><span>I'm Ritesh Dash,</span><br></br>Pre-final year at MIT Manipal, India  </h1>
            <p> I'm an aspiring tech innovator blending code, creativity, and curiosity.
I'm passionate about solving real-world problems through machine learning, data-driven solutions, and clean, impactful design. Whether it's building smart systems, streamlining user experiences, or diving deep into algorithms, I'm always up for a challenge. Let's build the future — one project at a time.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        
            
        </div>
        </div>
    )
    }
export default Hero;