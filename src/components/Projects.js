import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'react-feather';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Web Federasi Renang',
      description: 'Swimm Federation',
      imageUrl: '/images/projek1.png',
      projectLink: 'https://github.com/assegaf1010/assegaf.github.io'
    },
    {
      id: 2,
      title: 'UI UX SiDesa',
      description: 'UI UX Desain untuk Sistem DIgitalisasi Desa',
      imageUrl: '/images/projek2.png',
      projectLink: 'https://www.figma.com/proto/t7IxioTvvNNptRZcnsmk76/SiDesa?page-id=2%3A16&node-id=517-8&node-type=frame&viewport=905%2C-2376%2C0.65&t=Ys7Oo0qV8t2j2jPF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=517%3A8&show-proto-sidebar=1'
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p className="subtitle">Recent work I've done</p>
        <div className="carousel-container">
          <button className="scroll-button left" onClick={prevProject} aria-label="Previous project">
            <ChevronLeft size={24} />
          </button>
          <div className="project-carousel">
            <div className="project-card">
              <div className="project-image">
                <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} />
                <div className="project-overlay">
                  <a href={projects[currentIndex].projectLink} target="_blank" rel="noopener noreferrer" className="view-project">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <button className="scroll-button right" onClick={nextProject} aria-label="Next project">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;

  