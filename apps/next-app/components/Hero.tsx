import Link from 'next/link'
import React from 'react'
import { CardContainer } from 'ui'

type Props = {}

const Hero = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center mx-auto md:mb-10">
      <h1 className="mt-10 mb-2 text-3xl font-bold text-gray-500 md:text-5xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="text-lg md:text-2xl">
        Get started by editing{' '}
        <code className="p-2 text-sm bg-gray-100 rounded-lg">
          pages/index.js
        </code>
      </p>
      <div className="grid max-w-5xl grid-cols-1 gap-5 m-4 mt-10 md:grid-cols-2">
        <CardContainer>
          <Link href="/about">
            <h2>About Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link>
        </CardContainer>
        <CardContainer>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </CardContainer>

        <CardContainer>
          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </CardContainer>

        <CardContainer>
          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </CardContainer>

        <CardContainer>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </CardContainer>
      </div>
    </main>
  )
}

export default Hero
