import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [pin, setPin] = useState('')
  const nav = useNavigate()

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (pin === '1234') {
      nav('/os')
    } else {
      alert('Demo PIN is 1234')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--bg)]">
      <form onSubmit={submit} className="bg-surface/80 p-8 rounded-md shadow-lg">
        <h2 className="text-2xl text-white mb-4">Restricted Access</h2>
        <label className="block text-sm text-gray-300 mb-1">Enter PIN</label>
        <input value={pin} onChange={(e) => setPin(e.target.value)} className="p-2 rounded w-48" />
        <div className="mt-4 flex justify-between items-center">
          <button className="px-4 py-2 bg-cyan-500 text-black rounded">Enter</button>
          <a href="/request-access" className="text-sm text-gray-300">Request Access</a>
        </div>
      </form>
    </div>
  )
}
