'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    college: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ ...formData, events: [] }));
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white">
      <form onSubmit={handleSignup} className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Signup</h2>
        <input name="username" onChange={handleChange} type="text" placeholder="Username" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <input name="firstName" onChange={handleChange} type="text" placeholder="First Name" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <input name="college" onChange={handleChange} type="text" placeholder="College Name" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <input name="email" onChange={handleChange} type="email" placeholder="Email" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" required className="w-full p-3 bg-black border border-zinc-700 rounded" />
        <button type="submit" className="w-full bg-white text-black p-3 rounded hover:bg-zinc-300">Create Account</button>
      </form>
    </div>
  );
}
