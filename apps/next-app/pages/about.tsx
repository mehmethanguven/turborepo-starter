import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen p-10 justify-items-center">
      <main className="flex flex-col items-center justify-center p-10">
        <h1 className="p-5 text-3xl" data-testid="about">
          About Page
        </h1>
        <p className="text-xl">
          <Link href="/">&larr; Go Back</Link>
        </p>
      </main>
    </div>
  )
}
