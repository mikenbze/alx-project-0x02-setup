// pages/about.tsx

import Head from 'next/head'
import Button from '@/components/common/Button'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="space-x-4">
          <Button size="small" shape="rounded-sm">
            Small & Rounded-sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium & Rounded-md
          </Button>
          <Button size="large" shape="rounded-full">
            Large & Rounded-full
          </Button>
        </div>
      </main>
    </>
  )
}
