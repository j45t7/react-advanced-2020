import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    text === 'random title' ? setText('another title') : setText('random title')
  }
  return (
    <>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  )
}

export default UseStateBasics
