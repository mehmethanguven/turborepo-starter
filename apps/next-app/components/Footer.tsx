import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center justify-center p-8 mt-10 border-t border-gray-200">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        Powered by{' '}
        <span className="h-4">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}

export default Footer
