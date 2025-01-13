import React, { useState, useEffect } from 'react';
import { Edit, Trash2, X } from 'react-feather';
import ScrollAnimation from './ScrollAnimation';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    imageUrl: '',
    projectLink: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedProjects;
    if (isEditing) {
      updatedProjects = projects.map(project => 
        project.id === formData.id ? formData : project
      );
    } else {
      const newProject = {
        ...formData,
        id: Date.now()
      };
      updatedProjects = [...projects, newProject];
    }
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    resetForm();
  };

  const handleEdit = (project) => {
    setFormData(project);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const resetForm = () => {
    setFormData({
      id: null,
      title: '',
      description: '',
      imageUrl: '',
      projectLink: ''
    });
    setIsEditing(false);
  };

  return (
    <section className="project-manager">
      <div className="container">
        <ScrollAnimation delay={200}>
          <h1 className="animate-title">Kelola Proyek</h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <form onSubmit={handleSubmit} className="animate-form">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Judul Proyek"
              required
              className="animate-input"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Deskripsi Proyek"
              required
              className="animate-input"
            />
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="URL Gambar"
              required
              className="animate-input"
            />
            <input
              type="url"
              name="projectLink"
              value={formData.projectLink}
              onChange={handleInputChange}
              placeholder="Link Proyek"
              required
              className="animate-input"
            />
            <button type="submit" className="animate-button">
              {isEditing ? 'Update Proyek' : 'Tambah Proyek'}
            </button>
            {isEditing && (
              <button type="button" onClick={resetForm} className="cancel-button animate-button">
                Batal
              </button>
            )}
          </form>
        </ScrollAnimation>

        <div className="project-list">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={200 * (index + 1)}>
              <div className="project-item animate-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-actions">
                  <button onClick={() => handleEdit(project)} className="edit-button animate-button">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDelete(project.id)} className="delete-button animate-button">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectManager;

