import Link from 'next/link';

export default function HomePage() {
  const events = [
    { name: 'Coding Event', slug: 'coding' },
    { name: 'Robotics Event', slug: 'robotics' },
    { name: 'Design Event', slug: 'design' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to TechFest 2025</h1>
      <p className="text-center mb-10 text-lg max-w-xl mx-auto">
        Join us for an exciting series of technology events, workshops, and competitions!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {events.map(event => (
          <Link
            key={event.slug}
            href={`/events/${event.slug}`}
            className="bg-white text-black p-6 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-bold">{event.name}</h2>
            <p className="text-sm mt-2">Click to register now!</p>
          </Link>
        ))}
      </div>
    </main>
  );
}