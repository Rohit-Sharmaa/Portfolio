import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";
import "./portfolio.css";
const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Here are some of my projects</p>

      <div className="container portfolio__container">
        <ProjectsCategories />
        <Projects  projects = {projects}/>
      </div>
    </section>
  );
};

export default Portfolio;
