import React from "react";
import Card from "../../components/Card";

const ProjectListing = ({ project }) => {
  return (
    <Card className="project__listing">
      <div className="project__listing__image" data-aos="fade-out">
        <img src={project.image} alt="project__image" />
      </div>
      <h4 data-aos="fade-down">{project.title}</h4>
      <p data-aos="fade-down">{project.desc}</p>

      <div className="project__listing__cta" data-aos="fade-up">
        {project.view && (
          <a
            href={project.view}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        )}
        <a
          href={project.github}
          className="btn primary sm "
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default ProjectListing;
