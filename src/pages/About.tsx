import { 
  Target, 
  Eye, 
  History,
  Star,
  Cloud,
  Shield,
  Database,
  Code,
  Globe,
  Building2,
  Cpu,
  GraduationCap,
  Lightbulb
} from 'lucide-react';
import './About.css';

const About = () => {
  const programs = [
    {
      title: 'Cloud Architect',
      icon: Cloud,
      description: 'Focus on algorithms, software development, and theoretical foundations of computing.'
    },
    {
      title: 'Information Technology',
      icon: Cpu,
      description: 'Practical skills in system administration, network management, and IT infrastructure.'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Learn to protect systems and data from cyber threats with hands-on security training.'
    },
    {
      title: 'Data Science',
      icon: Database,
      description: 'Master data analysis, machine learning, and visualization to drive insights.'
    },
    {
      title: 'Software Engineering',
      icon: Code,
      description: 'Design, develop, and maintain complex software systems using industry best practices.'
    },
    {
      title: 'Web Development',
      icon: Globe,
      description: 'Create modern, responsive web applications using the latest frameworks and tools.'
    }
  ];

  const whyChooseItems = [
    {
      icon: Building2,
      title: 'Industry Connections',
      description: 'Strong partnerships with leading tech companies provide internship opportunities and career pathways.'
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Facilities',
      description: 'State-of-the-art labs equipped with the latest technology for hands-on learning experiences.'
    },
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Learn from experienced professors and industry practitioners who bring real-world expertise.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Emphasis on innovation, entrepreneurship, and creative problem-solving in all programs.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About CIT</h1>
        <p>College of Information and Technology</p>
        <p>Leading the way in technology education and innovation</p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mv-container">
          <div className="mv-card mission">
            <div className="mv-icon">
              <Target size={32} />
            </div>
            <h2>Our Mission</h2>
            <p>
              The College of Information and Technology at the University of the Assumption
              provides world-class technology education that 
              empowers students to become innovative leaders, skilled 
              practitioners, and ethical technologists who can shape 
              the future of our digital world.
            </p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon">
              <Eye size={32} />
            </div>
            <h2>Our Vision</h2>
            <p>
              To be recognized as the premier College of Information Technology 
              in the Philippines under the University of the Assumption, known for producing 
              graduates who drive technological innovation and 
              positive change in society.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="history-container">
          <div className="history-header">
            <History size={32} />
            <h2>Our History</h2>
          </div>
          <div className="history-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="programs-container">
          <h2>Our Programs</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">
                  <program.icon size={24} />
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CIT Section */}
      <section className="why-choose-about">
        <div className="why-choose-container">
          <div className="why-header">
            <Star size={28} />
            <h2>Why Choose CIT?</h2>
          </div>
          <div className="why-items">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="why-item">
                <div className="why-icon">
                  <item.icon size={32} />
                </div>
                <div className="why-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="campus-life-section">
        <div className="campus-container">
          <h2>Life at CIT</h2>
          <p>Experience the vibrant community of innovators and future tech leaders</p>
          <div className="campus-gallery">
            <div className="campus-gallery-item large">
              <img src="/student_activities_images/Student Activities.jpg" alt="Student Activities" />
              <div className="campus-overlay">
                <span>Student Activities</span>
              </div>
            </div>
            <div className="campus-gallery-item">
              <img src="/awards_images/awards1.jpg" alt="Awards" />
              <div className="campus-overlay">
                <span>Excellence & Awards</span>
              </div>
            </div>
            <div className="campus-gallery-item">
              <img src="/community_events_images/597478583_1361822645957116_3458253094588781467_n.jpg" alt="Community Events" />
              <div className="campus-overlay">
                <span>Community Outreach</span>
              </div>
            </div>
            <div className="campus-gallery-item">
              <img src="/research_projects_images/ResiLinked.jpg" alt="Research Projects" />
              <div className="campus-overlay">
                <span>Research & Innovation</span>
              </div>
            </div>
            <div className="campus-gallery-item">
              <img src="/student_activities_images/589953396_1347998430672871_601116659293660751_n.jpg" alt="Learning" />
              <div className="campus-overlay">
                <span>Hands-on Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
