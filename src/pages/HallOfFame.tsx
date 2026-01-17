import { User } from 'lucide-react';
import './HallOfFame.css';

interface Project {
  id: number;
  title: string;
  description: string;
  author: string;
  year: string;
  image: string;
}

const HallOfFame = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'ResiLinked',
      description: 'A comprehensive resident management system that streamlines communication between residents and local government units for better community services.',
      author: 'CIT Research Team',
      year: 'Class of 2024',
      image: '/research_projects_images/ResiLinked.jpg'
    },
    {
      id: 2,
      title: 'SoilScope',
      description: 'An innovative IoT-based soil monitoring system that helps farmers optimize crop yields through real-time soil analysis and data-driven recommendations.',
      author: 'CIT Research Team',
      year: 'Class of 2024',
      image: '/research_projects_images/SoilScope.jpg'
    },
    {
      id: 3,
      title: 'UA Clinic System',
      description: 'A digital healthcare management platform designed to modernize university clinic operations with appointment scheduling, patient records, and health monitoring.',
      author: 'CIT Research Team',
      year: 'Class of 2024',
      image: '/research_projects_images/UAClinicSystem.jpg'
    }
  ];

  return (
    <div className="hall-of-fame-page">
      {/* Hero Section */}
      <section className="hof-hero">
        <h1>Hall of Fame</h1>
        <p>College of Information and Technology</p>
        <p>Outstanding capstone projects and student innovations</p>
      </section>

      {/* Featured Research Projects */}
      <section className="featured-projects">
        <h2>Featured Research Projects</h2>
        <div className="featured-grid">
          {projects.map((project) => (
            <article key={project.id} className="featured-project-card">
              <div className="featured-image-container">
                <img src={project.image} alt={project.title} className="featured-image" />
              </div>
              <div className="featured-info">
                <h3>{project.title}</h3>
                <p className="featured-description">{project.description}</p>
                <div className="project-author">
                  <User size={14} />
                  <span>{project.author} - {project.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Awards Gallery */}
      <section className="awards-gallery">
        <h2>Awards & Recognition</h2>
        <p className="awards-subtitle">Celebrating our students' achievements and excellence</p>
        <div className="awards-grid">
          <img src="/awards_images/awards1.jpg" alt="CIT Awards 1" className="award-image" />
          <img src="/awards_images/awards2.jpg" alt="CIT Awards 2" className="award-image" />
          <img src="/awards_images/awards3.jpg" alt="CIT Awards 3" className="award-image" />
          <img src="/awards_images/awards4.jpg" alt="CIT Awards 4" className="award-image" />
          <img src="/awards_images/awards5.jpg" alt="CIT Awards 5" className="award-image" />
        </div>
      </section>
    </div>
  );
};

export default HallOfFame;
