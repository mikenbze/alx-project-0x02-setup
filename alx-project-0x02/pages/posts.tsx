// pages/posts.tsx

import React from 'react'
import { GetStaticProps } from 'next'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'
import Header from '@/components/layout/Header'

interface PostsPageProps {
  posts: PostProps[]
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const posts: PostProps[] = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default PostsPage
