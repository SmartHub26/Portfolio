import React from 'react';
import './Projects.css'; // Ensure you have a CSS file for styling
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from '../../assets/services_data.js'; // Adjust the path as necessary
import arrow_icon from '../../assets/arrow_icon.svg'; // Adjust the path as necessary
const Projects = () => {
  return (
    <div id='projects' className="projects">
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="projects-container">
            {services_data.map((service, index) => {
                return <div key={index} className="projects-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="projects-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt=""/>
                    </div>
                
                </div>

            })}
        </div>

    </div>
  )
}
export default Projects;