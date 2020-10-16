import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
// [] initial value
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    value > 4 && (document.title = `NewMessage(${value})`)
    console.log('call useEffect')
  }, [value])
  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1)
        }}
      >
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
