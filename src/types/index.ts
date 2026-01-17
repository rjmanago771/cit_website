// Shared types for the application

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string[];
  type: 'important' | 'achievement' | 'event' | 'facility';
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees?: number;
  type: 'upcoming' | 'ongoing' | 'past';
  category: 'seminar' | 'workshop' | 'competition' | 'conference';
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
}
