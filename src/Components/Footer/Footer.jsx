import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg' // Adjust the path as necessary
import Picture1 from '../../assets/Picture1.jpg'
const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className='Footer-top'>
                    <div className="Footer-top-left">
                        <img src={Picture1} alt=""/>
                        <p>Ritesh Dash – Aspiring ML Engineer | Passionate about data, systems, and building impactful tech. Constantly learning. Eager to collaborate. Open to opportunities.</p>
                    </div>
                    <div className="Footer-top-right">
                        <div className="Footer-email-input">
                            <img src={user_icon} alt="" />
                            <input type="email" placeholder='Enter your email' />
                        </div>
                        <div className="Footer-subscribe">Subscribe</div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='Footer-bottom'>
                <p>© 2025 Ritesh Dash. All rights reserved.</p>
                <div className="Footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </>
    );
}
export default Footer;