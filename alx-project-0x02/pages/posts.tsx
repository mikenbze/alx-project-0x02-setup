//pages/posts.tsx



//export default function PostsPage() {
 // return (
  //  <>
	<Header />
  //    <main className="p-4">
  //      <h1 className="text-2xl font-bold">Posts Page</h1>
 //     </main>
  //  </>
 // )
//}


// pages/posts.tsx
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'
import Header from '@/components/layout/Header'

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}
