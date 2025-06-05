// src/app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getSession, useSession, signOut } from 'next-auth/react';
import connectToDB from '../lib/mongodb';
import {getRegisteredEvents}from '../lib/registeredEvents';
import { redirect } from 'next/navigation';

// Type for the event
type EventType = {
  _id: string;
  name: string;
  date: string;
  slug: string;
};

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchEvents = async () => {
        const email = session?.user?.email;
        if (!email) return;

        const res = await fetch(`/api/registeredEvents?email=${email}`);
        const data = await res.json();
        setEvents(data);
      };
      fetchEvents();
    } else if (status === 'unauthenticated') {
      redirect('/login');
    }
  }, [session, status]);

  if (status === 'loading') return <p className="text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <button
          onClick={() => signOut()}
          className="bg-zinc-800 text-white px-4 py-2 rounded border border-white"
        >
          Logout
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <p><span className="font-semibold">Name:</span> {session?.user?.name}</p>
        <p><span className="font-semibold">Email:</span> {session?.user?.email}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Registered Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {events.map((event) => (
          <div
            key={event._id}
            className="p-4 border border-zinc-500 rounded bg-zinc-800"
          >
            <h3 className="text-lg font-bold">{event.name}</h3>
            <p className="text-sm text-zinc-300">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
