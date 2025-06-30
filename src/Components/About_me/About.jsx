import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling
import Picture1 from "../../assets/Picture1.jpg"; // Assuming you have a picture in this path
import theme_pattern from "../../assets/theme_pattern.svg"; // Assuming you have a theme pattern image in
import StarBackground from '../Background/Starback';

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={Picture1} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hey there! I’m Ritesh Dash, a passionate developer and problem-solver driven by curiosity and the desire to build impactful tech. I enjoy turning complex challenges into clean, efficient, and user-friendly solutions — whether through machine learning, front-end development, or systems design.

                            Currently exploring the intersection of AI, full-stack development, and data, I’ve been working on hands-on projects that combine practicality with innovation. From building smart apps to diving into DSA and open-source contributions, I love learning by doing.

                            Outside of code, I value clarity, creativity, and continuous growth — and I’m always up for collaborating on exciting ideas.

                            Let’s connect and create something awesome!</p>
                    </div>

                </div>
            </div>
            <div className="about-education">
                <div className="about-edu">
                    <h1>GPA: 7.44</h1>
                    <p>MIT Manipal</p>
                </div>
                <hr />
                <div className="about-edu">
                    <h1>90%</h1>
                    <p>Class 12th Certificate<br></br>Delhi Public School, Nerul</p>
                </div>
                <hr />
                <div className="about-edu">
                    <h1>93.4%</h1>
                    <p>Class 10th Certificate<br></br>Ryan Internatinal School, Sanpada</p>
                </div>

            </div>
        </div>
            )
}
export default About;