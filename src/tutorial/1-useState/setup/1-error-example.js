import React, { useState } from 'react'

const ErrorExample = () => {
  const [title, setTitle] = useState('random title')
  // let title = 'random title'
  const handleClick = () => {
    setTitle('another title')
  }
  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  )
}

export default ErrorExample
