import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()

    if(data.user) {
      // localStorage.setItem('token', token)
      alert('Login Successful!')
      location.href = '/dashboard'
    } else {
      alert('No user!')
    }
  }

  return (
    <form onSubmit={loginUser} style={{display: "flex", justifyContent: "center"}}>
        <input 
          type="email"
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
          />
        <input 
          type="password"
          value={password} 
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          />
          <input type='submit' value='Login' />
    </form>

    )
}

export default Login