import { useState } from "react";
import "./SkillsSection.css";
import StarBackground from "../Background/Starback.jsx";
import theme_pattern from "../../assets/theme_pattern.svg";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },
  
  { name: "Tailwind CSS", level: 70, category: "Frontend" },


  // Backend
 
  { name: "PostgreSQL", level: 65, category: "Backend" },
  { name: "Basic SQL", level: 80, category: "Backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "Microsoft Excel", level: 95, category: "Tools" },
  { name: "Microsoft Powerpoint", level: 95, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
    { name: "LTSpice", level: 95, category: "Tools" },
      { name: "Vivado", level: 95, category: "Tools" },
        { name: "Keil", level: 95, category: "Tools" },
  // Coding Languages
  { name: "C", level: 70, category: "Coding Languages" },
  { name: "C++", level: 75, category: "Coding Languages" },
  { name: "Python", level: 90, category: "Coding Languages" },

  { name: "MATLAB", level: 70, category: "Coding Languages" },
  { name: "Verilog", level: 90, category: "Coding Languages" },
  { name: "VHDL", level: 90, category: "Coding Languages" },
  { name: "ARM7 Assembly Language", level: 90, category: "Coding Languages" },
 
  

];

const categories = ["All","Coding Languages", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {/* Optional: <StarBackground /> if you want stars in this section only */}
      <div className="skills">
        <div className="skills-title">
          <h1>My Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>

      {/* Centered filter buttons */}
      <div className="skills-filters">
        {categories.map((category, key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={
              "px-5 py-2 rounded-full transition-colors duration-300 capitalize " +
              (activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/70 text-foreground hover:bg-secondary")
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
          <div
            key={key}
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
          >
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full origin-left"
                style={{ width: skill.level + "%" }}
              />
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
