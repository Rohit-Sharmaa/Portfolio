import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";
import "./portfolio.css";
const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
   if(category == "all"){
    setProjects(data);
    return;
   }

    const filterProjects = data.filter(
      (project) => project.category === category
    );


    setProjects(filterProjects)
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects</p>

      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects = {filterProjectsHandler}/>
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
