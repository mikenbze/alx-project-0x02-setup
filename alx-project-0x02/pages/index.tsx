// pages/index.tsx

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to ALX Project 2" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
        <h1 className="text-5xl font-bold mb-4">Welcome to ALX Project 2</h1>
        <p className="text-lg text-center max-w-md">
          This is your Next.js project with TypeScript and Tailwind CSS setup successfully.
        </p>
      </main>
    </>
  )
}
