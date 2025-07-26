// pages/home.tsx

import Head from 'next/head'
import Card from '@/components/common/Card'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Home Page</h1>

        <Card
          title="Learn Next.js"
          content="Next.js is a powerful React framework for building server-side rendered applications."
        />

        <Card
          title="Explore Tailwind CSS"
          content="Tailwind CSS helps you build modern, responsive UIs without leaving your HTML."
        />

        <Card
          title="Build with TypeScript"
          content="TypeScript brings type safety and developer efficiency to your JavaScript code."
        />
      </main>
    </>
  )
}
