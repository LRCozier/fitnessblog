export interface User {
  id: string;
  email: string;
  name: string;
  passwordHash?: string;
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  date: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  content: string;
  date: string;
}