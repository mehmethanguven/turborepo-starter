import * as React from 'react'
export const Button = () => {
  const [text, setText] = React.useState('Boop')
  const handleClick = (): void => {
    setText('Boop updated')
  }
  return (
    <button
      onClick={handleClick}
      className="w-60 px-3 py-2 rounded drop-shadow-2xl text-white font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-indigo-400 focus:ring-4 focus:ring-offset-2 transition-all duration-200"
    >
      {text}
    </button>
  )
}
