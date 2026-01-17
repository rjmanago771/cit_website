import { useState, useEffect } from 'react';
import { Calendar, Tag } from 'lucide-react';
import { announcementService } from '../services/announcementService';
import type { Announcement } from '../types';
import './Announcements.css';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    try {
      const data = await announcementService.getAll();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error loading announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'important': return 'Important';
      case 'achievement': return 'Achievement';
      case 'event': return 'Event';
      case 'facility': return 'Facility Update';
      default: return type;
    }
  };

  return (
    <div className="announcements-page">
      {/* Hero Section */}
      <section className="announcements-hero">
        <h1>All Announcements</h1>
        <p>College of Information and Technology</p>
        <p>Stay updated with the latest news and events from CIT</p>
      </section>

      {/* Announcements List */}
      <section className="announcements-list">
        <div className="announcements-container">
          {loading ? (
            <div className="loading-state">Loading announcements...</div>
          ) : announcements.length === 0 ? (
            <div className="empty-state">
              <p>No announcements available at this time.</p>
            </div>
          ) : (
            announcements.map((announcement) => (
              <article key={announcement.id} className={`announcement-item ${announcement.type}`}>
              <div className="announcement-header">
                <div className="announcement-meta">
                  <span className="announcement-date-badge">
                    <Calendar size={14} />
                    {announcement.date}
                  </span>
                </div>
                <span className={`announcement-type-badge ${announcement.type}`}>
                  <Tag size={12} />
                  {getTypeLabel(announcement.type)}
                </span>
              </div>
              <h2>{announcement.title}</h2>
              <div className="announcement-content">
                {announcement.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Announcements;
