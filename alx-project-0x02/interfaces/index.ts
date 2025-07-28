// interfaces/index.ts

export interface User {
  id: number
  name: string
  email: string
  avatarUrl?: string
}

export interface Post {
  id: number
  title: string
  body: string
  authorId: number
  createdAt: string
  updatedAt?: string
}

export interface CardProps {
  title: string
  content: string
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large'
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  children: React.ReactNode
  onClick?: () => void
}

export interface PostProps {
  id: number
  title: string
  body: string
  userId: number
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
