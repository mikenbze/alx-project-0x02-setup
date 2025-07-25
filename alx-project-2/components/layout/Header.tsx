// components/layout/Header.tsx

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">ALX Project 2</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/users" className="hover:underline">Users</Link>
        </nav>
      </div>
    </header>
  )
}
