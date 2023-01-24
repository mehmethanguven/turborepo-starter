import React from 'react'

type Props = {
  children: any
}

export const CardContainer = ({ children }: Props) => {
  return (
    <div className="flex items-center h-40 p-5 border border-gray-100 rounded-lg min-w-1/2">
      {children}
    </div>
  )
}
