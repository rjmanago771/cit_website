import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, FileText, Users, Settings, Home, Mail, UserCheck } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1>Admin Dashboard</h1>
            <p>College of Information and Technology</p>
          </div>
          <div className="header-right">
            <div className="user-info">
              <span className="user-email">{currentUser?.email}</span>
            </div>
            <button onClick={() => navigate('/')} className="home-button">
              <Home size={20} />
              Return to Website
            </button>
            <button onClick={handleLogout} className="logout-button">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome back!</h2>
          <p>Manage your website content from here</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">
              <FileText size={32} />
            </div>
            <h3>Announcements</h3>
            <p>Create, edit, and manage announcements</p>
            <button onClick={() => navigate('/admin/announcements')} className="card-button">Manage Announcements</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <Users size={32} />
            </div>
            <h3>Events</h3>
            <p>Add and update upcoming events</p>
            <button onClick={() => navigate('/admin/events')} className="card-button">Manage Events</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <Mail size={32} />
            </div>
            <h3>Contact Messages</h3>
            <p>View and respond to contact inquiries</p>
            <button onClick={() => navigate('/admin/contacts')} className="card-button">View Messages</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <UserCheck size={32} />
            </div>
            <h3>Event Registrations</h3>
            <p>View all event registrations</p>
            <button onClick={() => navigate('/admin/registrations')} className="card-button">View Registrations</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <Settings size={32} />
            </div>
            <h3>Settings</h3>
            <p>Configure website settings</p>
            <button className="card-button">View Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
