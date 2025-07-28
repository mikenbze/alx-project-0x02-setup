
// pages/home.tsx

import Header from '@/components/layout/Header'
import Head from 'next/head'
import { useState } from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'

interface Post {
  title: string
  content: string
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPost = (title: string, content: string) => {
    const newPost = { title, content }
    setPosts((prev) => [newPost, ...prev])
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to the Home Page</h1>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add New Post
          </button>
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        )}
      </main>
    </>
  )
}
