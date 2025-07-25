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
