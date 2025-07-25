// pages/home.tsx

import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  )
}
