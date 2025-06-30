import React from 'react'
import './Navbar.css'
import StarBackground from '../Background/Starback';
import underline from '../../assets/nav_underline.svg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg'; // Adjust the path as necessary
const Navbar = () => {

  const[menu,setMenu]= useState('home');

  return (
    <div className='navbar'>
      <img src={menu_open} alt="" className='nav-mob-open' />
        
        <ul className="nav-menu">
          <img src={menu_close} alt="" className="nav-mob-close" />
          <h1><span>Ritesh's Portfolio</span></h1>
          <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt='' />:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==='about'?<img src={underline} alt='' />:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==='skills'?<img src={underline} alt='' />:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==='projects'?<img src={underline} alt='' />:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt='' />:<></>}</li>
        </ul>

        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}
export default Navbar