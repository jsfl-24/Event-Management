// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  const events = [
    {
      name: 'Coding Event',
      slug: 'coding',
      description: 'A competitive programming challenge for all skill levels.',
    },
    {
      name: 'Robotics Event',
      slug: 'robotics',
      description: 'Build and battle bots in this exciting robotics showdown.',
    },
    {
      name: 'Design Event',
      slug: 'design',
      description: 'Show off your creativity in our UI/UX design competition.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to TechFest 2025</h1>
      <p className="text-center mb-10 text-lg max-w-xl mx-auto">
        Join us for a series of thrilling tech events, workshops, and competitions!
      </p>

      <section id="events" className="max-w-4xl mx-auto space-y-8">
        {events.map(event => (
          <div
            key={event.slug}
            className="bg-white text-black p-6 rounded-xl shadow-md space-y-3"
          >
            <h2 className="text-2xl font-bold">{event.name}</h2>
            <p>{event.description}</p>
            <Link
              href={`/events/${event.slug}`}
              className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Register Now
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
