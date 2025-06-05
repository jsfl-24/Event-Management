'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem('user');
    if (!stored) return alert('No account found');

    const user = JSON.parse(stored);
    if (user.username === username && user.password === password) {
      router.push('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white">
      <form onSubmit={handleLogin} className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <button type="submit" className="w-full bg-white text-black p-3 rounded hover:bg-zinc-300">Login</button>
      </form>
    </div>
  );
}
