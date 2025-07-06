'use client'

import { FormEvent, useState } from "react"

export default function LoginPage() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    if(response.ok) {
      window.location.href = '/'
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Fazer Login</button>
      </form>
    </main>
  )
}