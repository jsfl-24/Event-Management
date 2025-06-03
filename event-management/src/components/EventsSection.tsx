import Link from "next/link";

export default function EventsSection() {
  const keyEvents = [
    {
      title: "AI/ML Workshop",
      description:
        "Hands-on workshop covering machine learning fundamentals and neural networks.",
      date: "June 5, 2025",
      time: "10:00 AM - 4:00 PM",
      registrationLink: "#ai-ml-registration",
    },
    {
      title: "24-Hour Hackathon",
      description:
        "Non-stop coding marathon to build innovative solutions with fellow developers.",
      date: "June 6, 2025",
      time: "24 Hours",
      registrationLink: "#hackathon-registration",
    },
    {
      title: "Startup Pitch",
      description:
        "Present your tech startup ideas to industry experts and investors.",
      date: "June 5, 2025",
      time: "2:00 PM - 6:00 PM",
      registrationLink: "#startup-pitch-registration",
    },
  ];

  const allEvents = [
    ...keyEvents,
    // Technical Events
    {
      title: "Web Development Sprint",
      description:
        "Build responsive websites using modern frameworks and tools.",
      date: "June 6, 2025",
      time: "9:00 AM - 5:00 PM",
      registrationLink: "#web-dev-registration",
      type: "technical",
    },
    {
      title: "Cybersecurity Challenge",
      description:
        "Test your skills in ethical hacking and security protocols.",
      date: "June 5, 2025",
      time: "1:00 PM - 6:00 PM",
      registrationLink: "#cybersecurity-registration",
      type: "technical",
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications from scratch.",
      date: "June 6, 2025",
      time: "10:00 AM - 4:00 PM",
      registrationLink: "#mobile-dev-registration",
      type: "technical",
    },
    // Non-Technical Events
    {
      title: "UI/UX Design Contest",
      description:
        "Design user-friendly interfaces and exceptional user experiences.",
      date: "June 5, 2025",
      time: "11:00 AM - 3:00 PM",
      registrationLink: "#design-contest-registration",
      type: "non-technical",
    },
    {
      title: "Innovation Ideas Showcase",
      description: "Present your innovative ideas and creative solutions.",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      registrationLink: "#innovation-registration",
      type: "non-technical",
    },
    {
      title: "Tech Quiz Competition",
      description:
        "Test your knowledge in various technology domains and win prizes.",
      date: "June 6, 2025",
      time: "3:00 PM - 6:00 PM",
      registrationLink: "#tech-quiz-registration",
      type: "non-technical",
    },
    {
      title: "Gaming Tournament",
      description: "Competitive gaming event featuring popular esports titles.",
      date: "June 6, 2025",
      time: "12:00 PM - 8:00 PM",
      registrationLink: "#gaming-registration",
      type: "non-technical",
    },
  ];

  return (
    <>
      {/* Key Events Section */}
      <section id="events" className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Events
            </h2>
            <p className="text-xl text-zinc-400">
              Exciting lineup of tech competitions and workshops
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyEvents.map((event, index) => (
              <div
                key={index}
                className="bg-zinc-700 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-zinc-500/20 transition duration-300 border border-zinc-600"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  {event.title}
                </h3>
                <p className="text-zinc-300 mb-4">{event.description}</p>
                <div className="text-sm text-zinc-400 mb-4">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                </div>
                <Link
                  href={event.registrationLink}
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition duration-300"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Events
            </h2>
            <p className="text-xl text-zinc-400">
              Complete lineup of technical and non-technical events
            </p>
          </div>

          {/* Technical Events */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">
              Technical Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents
                .filter((event) => event.type === "technical" || !event.type)
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-red-500/20 transition duration-300 border border-zinc-700"
                  >
                    <h4 className="text-lg font-bold mb-3 text-white">
                      {event.title}
                    </h4>
                    <p className="text-zinc-300 mb-3 text-sm">
                      {event.description}
                    </p>
                    <div className="text-xs text-zinc-400 mb-4">
                      <p>Date: {event.date}</p>
                      <p>Time: {event.time}</p>
                    </div>
                    <Link
                      href={event.registrationLink}
                      className="inline-block bg-red-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-red-700 transition duration-300"
                    >
                      Register
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          {/* Non-Technical Events */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">
              Non-Technical Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allEvents
                .filter((event) => event.type === "non-technical")
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-yellow-500/20 transition duration-300 border border-zinc-700"
                  >
                    <h4 className="text-lg font-bold mb-3 text-white">
                      {event.title}
                    </h4>
                    <p className="text-zinc-300 mb-3 text-sm">
                      {event.description}
                    </p>
                    <div className="text-xs text-zinc-400 mb-4">
                      <p>Date: {event.date}</p>
                      <p>Time: {event.time}</p>
                    </div>
                    <Link
                      href={event.registrationLink}
                      className="inline-block bg-yellow-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-yellow-700 transition duration-300"
                    >
                      Register
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
