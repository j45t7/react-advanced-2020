import React, { useState, useEffect } from 'react'
// const url = 'https://api.github.com/users/QuincyLarson';
const url = 'https://api.github.com/users/j45t7'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(res.statusText)
        }
      })
      .then((user) => {
        const { id, login, avatar_url, html_url } = user
        setUser(user)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return isLoading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : isError ? (
    <div>
      <h2>Error...</h2>
    </div>
  ) : (
    <div>
      <ul className='users' key={user.id}>
        <li>
          <img src={user.avatar_url} alt={user.login} />
          <div>
            <h4>{user.login}</h4>
            <a href={user.html_url}>profile</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MultipleReturns
