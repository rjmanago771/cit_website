import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { announcementService } from '../services/announcementService';
import type { Announcement } from '../types';
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import './ManageAnnouncements.css';

const ManageAnnouncements = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: 'important' as Announcement['type'],
    content: ['']
  });

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    try {
      setLoading(true);
      const data = await announcementService.getAll();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error loading announcements:', error);
      alert('Failed to load announcements');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const announcementData = {
        ...formData,
        content: formData.content.filter(line => line.trim() !== '')
      };

      if (editingId) {
        await announcementService.update(editingId, announcementData);
      } else {
        await announcementService.create(announcementData);
      }

      resetForm();
      loadAnnouncements();
      alert(editingId ? 'Announcement updated!' : 'Announcement created!');
    } catch (error) {
      console.error('Error saving announcement:', error);
      alert('Failed to save announcement');
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setFormData({
      title: announcement.title,
      date: announcement.date,
      type: announcement.type,
      content: announcement.content
    });
    setEditingId(announcement.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;
    
    try {
      await announcementService.delete(id);
      loadAnnouncements();
      alert('Announcement deleted!');
    } catch (error) {
      console.error('Error deleting announcement:', error);
      alert('Failed to delete announcement');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      type: 'important',
      content: ['']
    });
    setEditingId(null);
    setShowForm(false);
  };

  const addContentLine = () => {
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, '']
    }));
  };

  const updateContentLine = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.map((line, i) => i === index ? value : line)
    }));
  };

  const removeContentLine = (index: number) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index)
    }));
  };

  if (!currentUser) {
    navigate('/admin/login');
    return null;
  }

  return (
    <div className="manage-announcements">
      <header className="page-header">
        <button onClick={() => navigate('/admin/dashboard')} className="back-button">
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <h1>Manage Announcements</h1>
        <button onClick={() => setShowForm(!showForm)} className="add-button">
          <Plus size={20} />
          New Announcement
        </button>
      </header>

      {showForm && (
        <div className="form-container">
          <div className="form-header">
            <h2>{editingId ? 'Edit Announcement' : 'New Announcement'}</h2>
            <button onClick={resetForm} className="close-button">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  placeholder="e.g., March 15, 2024"
                  required
                />
              </div>

              <div className="form-group">
                <label>Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as Announcement['type'] }))}
                >
                  <option value="important">Important</option>
                  <option value="achievement">Achievement</option>
                  <option value="event">Event</option>
                  <option value="facility">Facility Update</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Content (one paragraph/bullet per line)</label>
              {formData.content.map((line, index) => (
                <div key={index} className="content-line">
                  <textarea
                    value={line}
                    onChange={(e) => updateContentLine(index, e.target.value)}
                    placeholder="Enter content line..."
                    rows={2}
                  />
                  {formData.content.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeContentLine(index)}
                      className="remove-line-button"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addContentLine} className="add-line-button">
                <Plus size={16} />
                Add Line
              </button>
            </div>

            <div className="form-actions">
              <button type="button" onClick={resetForm} className="cancel-button">
                Cancel
              </button>
              <button type="submit" className="save-button">
                <Save size={20} />
                {editingId ? 'Update' : 'Create'} Announcement
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="announcements-list">
        {loading ? (
          <div className="loading">Loading announcements...</div>
        ) : announcements.length === 0 ? (
          <div className="empty-state">
            <p>No announcements yet. Create your first one!</p>
          </div>
        ) : (
          announcements.map(announcement => (
            <div key={announcement.id} className="announcement-item">
              <div className="announcement-header">
                <div>
                  <h3>{announcement.title}</h3>
                  <p className="announcement-meta">
                    <span className={`type-badge ${announcement.type}`}>{announcement.type}</span>
                    <span className="date">{announcement.date}</span>
                  </p>
                </div>
                <div className="announcement-actions">
                  <button onClick={() => handleEdit(announcement)} className="edit-button">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDelete(announcement.id)} className="delete-button">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="announcement-content">
                {announcement.content.slice(0, 2).map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                {announcement.content.length > 2 && <p className="more">...</p>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageAnnouncements;
