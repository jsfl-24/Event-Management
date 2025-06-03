export default function EventsSection() {
  const events = [
    {
      icon: "🤖",
      title: "AI/ML Workshop",
      description:
        "Hands-on workshop covering machine learning fundamentals, neural networks, and practical AI implementation with industry mentors.",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
    },
    {
      icon: "💻",
      title: "24-Hour Hackathon",
      description:
        "Non-stop coding marathon to build innovative solutions. Team up with fellow coders and create something amazing in 24 hours.",
      date: "March 16-17, 2025",
      time: "24 Hours Non-Stop",
    },
    {
      icon: "🚀",
      title: "Startup Pitch Competition",
      description:
        "Present your tech startup ideas to industry experts and investors. Win funding and mentorship opportunities.",
      date: "March 18, 2025",
      time: "2:00 PM - 6:00 PM",
    },
    {
      icon: "⚡",
      title: "Coding Competition",
      description:
        "Test your programming skills in our intense coding challenges. Multiple rounds with increasing difficulty levels.",
      date: "March 19, 2025",
      time: "12:00 PM - 8:00 PM",
    },
    {
      icon: "🔧",
      title: "Tech Exhibition",
      description:
        "Showcase innovative student projects, research work, and cutting-edge technology demonstrations from various departments.",
      date: "March 15-19, 2025",
      time: "All Festival Days",
    },
    {
      icon: "🎤",
      title: "Tech Talks & Seminars",
      description:
        "Inspiring talks by industry leaders, alumni, and tech experts on emerging technologies, career guidance, and innovation trends.",
      date: "March 17, 2025",
      time: "9:00 AM - 5:00 PM",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Events
          </h2>
          <p className="text-xl text-gray-400">
            Exciting lineup of tech competitions, workshops and learning
            opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600"
            >
              <div className="text-cyan-400 text-4xl mb-4">{event.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {event.title}
              </h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="text-sm text-cyan-300">
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
