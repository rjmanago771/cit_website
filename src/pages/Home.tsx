import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Calendar,
  ArrowRight,
  Lightbulb,
  Award,
  Users,
  BookOpen,
  Briefcase,
  GraduationCap,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './Home.css';
import { announcementService } from '../services/announcementService';
import type { Announcement } from '../types';

const Home = () => {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await announcementService.getAll();
        // Get only the latest 3 announcements
        setAnnouncements(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const galleryCategories = {
    awards: {
      title: 'Awards & Recognition',
      icon: Award,
      color: '#fff3e0',
      images: [
        '/awards_images/awards1.jpg',
        '/awards_images/awards2.jpg',
        '/awards_images/awards3.jpg',
        '/awards_images/awards4.jpg',
        '/awards_images/awards5.jpg'
      ]
    },
    activities: {
      title: 'Student Activities',
      icon: Users,
      color: '#e8f5e9',
      images: [
        '/student_activities_images/Student Activities.jpg',
        '/student_activities_images/Student Activities1.jpg',
        '/student_activities_images/486260025_1137436368395746_1262322134438329341_n.jpg',
        '/student_activities_images/486481229_1137436315062418_6289813631646890680_n.jpg',
        '/student_activities_images/486640201_1137436055062444_2113061809207738559_n.jpg',
        '/student_activities_images/486709516_1137436028395780_6846826846539764922_n.jpg',
        '/student_activities_images/589953396_1347998430672871_601116659293660751_n.jpg',
        '/student_activities_images/591750812_1348005974005450_2170312604018908075_n.jpg'
      ]
    },
    research: {
      title: 'Research Projects',
      icon: BookOpen,
      color: '#e3f2fd',
      images: [
        '/research_projects_images/ResiLinked.jpg',
        '/research_projects_images/SoilScope.jpg',
        '/research_projects_images/UAClinicSystem.jpg'
      ]
    },
    community: {
      title: 'Community Events',
      icon: Lightbulb,
      color: '#fff8e1',
      images: [
        '/community_events_images/597478583_1361822645957116_3458253094588781467_n.jpg',
        '/community_events_images/597737157_1361822642623783_6960097381551651774_n.jpg',
        '/community_events_images/597775316_1361822549290459_3722301270097540960_n.jpg',
        '/community_events_images/597854651_1361822552623792_8411448789423785385_n.jpg',
        '/community_events_images/597932517_1361822649290449_2811507370633927311_n.jpg',
        '/community_events_images/597945574_1361822245957156_6553648366429472119_n.jpg',
        '/community_events_images/598028925_1361822339290480_5889155525264263028_n.jpg',
        '/community_events_images/600140091_1361822269290487_9192617567910788173_n.jpg'
      ]
    }
  };

  const galleryItems = [
    { id: 'awards', title: 'Awards', icon: Award, color: '#fff3e0', image: '/awards_images/awards1.jpg' },
    { id: 'activities', title: 'Student Activities', icon: Users, color: '#e8f5e9', image: '/student_activities_images/Student Activities.jpg' },
    { id: 'research', title: 'Research Projects', icon: BookOpen, color: '#e3f2fd', image: '/research_projects_images/ResiLinked.jpg' },
    { id: 'community', title: 'Community Events', icon: Lightbulb, color: '#fff8e1', image: '/community_events_images/597478583_1361822645957116_3458253094588781467_n.jpg' },
  ];

  const whyChoose = [
    {
      icon: Briefcase,
      title: 'Industry-Relevant Skills',
      description: 'Hands-on learning using modern tools, frameworks, and technologies.'
    },
    {
      icon: Award,
      title: 'Student Excellence',
      description: 'Award-winning projects, hackathons, and academic achievements.'
    },
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Guidance from experienced instructors and IT professionals.'
    },
    {
      icon: Lightbulb,
      title: 'Career-Ready Graduates',
      description: 'Preparing students for real-world challenges and IT careers.'
    }
  ];

  const openGallery = (categoryId: string) => {
    setActiveGallery(categoryId);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextImage = () => {
    if (activeGallery) {
      const images = galleryCategories[activeGallery as keyof typeof galleryCategories].images;
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (activeGallery) {
      const images = galleryCategories[activeGallery as keyof typeof galleryCategories].images;
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              College of Information<br />
              and Technology
            </h1>
            <p className="hero-subtitle">Empowering the next generation of tech leaders</p>
            <div className="hero-buttons">
              <Link to="/hall-of-fame" className="btn btn-primary">
                Explore Student Projects
              </Link>
              <Link to="/announcements" className="btn btn-outline">
                View Announcements
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-icon-container">
              <Laptop size={80} />
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcements-section">
        <div className="section-header">
          <h2>Latest Announcements</h2>
          <Link to="/announcements" className="view-all">
            View all Announcements <ArrowRight size={16} />
          </Link>
        </div>
        <div className="announcements-grid">
          {loading ? (
            <p>Loading announcements...</p>
          ) : announcements.length === 0 ? (
            <p>No announcements available at the moment.</p>
          ) : (
            announcements.map((item) => (
              <article key={item.id} className="announcement-card">
                <div className="announcement-date">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.content[0]}</p>
              </article>
            ))
          )}
        </div>
      </section>

      {/* CIT Life Gallery */}
      <section className="gallery-section">
        <div className="section-header centered">
          <h2>CIT Life Gallery</h2>
          <p>Moments that define our community</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => openGallery(item.id)}
            >
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-preview-image" />
                <div className="gallery-overlay">
                  <item.icon size={32} />
                  <span className="gallery-title">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {activeGallery && (
        <div className="lightbox-modal" onClick={closeGallery}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeGallery}>
              <X size={24} />
            </button>
            <h3 className="lightbox-title">
              {galleryCategories[activeGallery as keyof typeof galleryCategories].title}
            </h3>
            <div className="lightbox-image-container">
              <button className="lightbox-nav prev" onClick={prevImage}>
                <ChevronLeft size={32} />
              </button>
              <img 
                src={galleryCategories[activeGallery as keyof typeof galleryCategories].images[currentImageIndex]} 
                alt="Gallery" 
                className="lightbox-image"
              />
              <button className="lightbox-nav next" onClick={nextImage}>
                <ChevronRight size={32} />
              </button>
            </div>
            <div className="lightbox-thumbnails">
              {galleryCategories[activeGallery as keyof typeof galleryCategories].images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Thumbnail ${index + 1}`}
                  className={`lightbox-thumb ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            <p className="lightbox-counter">
              {currentImageIndex + 1} / {galleryCategories[activeGallery as keyof typeof galleryCategories].images.length}
            </p>
          </div>
        </div>
      )}

      {/* Why Choose CIT */}
      <section className="why-choose-section">
        <div className="section-header centered">
          <h2>Why Choose CIT?</h2>
          <p>Building future-ready IT professionals through innovation and excellence</p>
        </div>
        <div className="features-grid">
          {whyChoose.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
