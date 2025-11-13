export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface CreateAnnouncementRequest {
  title: string;
  content: string;
  
}