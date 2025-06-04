"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  registrationLink: string;
  fee: string;
  feeAmount: number;
  type: string;
  day: number;
}

export default function EventsSection() {
  const router = useRouter();

  const handleRegistration = (link: string) => {
    console.log("Navigating to:", link);
    router.push(link);
  };

  const keyEvents: Event[] = [
    {
      title: "AI/ML Workshop",
      description:
        "Hands-on workshop covering machine learning fundamentals and neural networks.",
      date: "June 5, 2025",
      time: "10:00 AM - 4:00 PM",
      registrationLink: "/register/ai-ml",
      fee: "₹299",
      feeAmount: 299,
      type: "technical",
      day: 1,
    },
    {
      title: "24-Hour Hackathon",
      description:
        "Non-stop coding marathon to build innovative solutions with fellow developers.",
      date: "June 6, 2025",
      time: "24 Hours",
      registrationLink: "/register/hackathon",
      fee: "₹499",
      feeAmount: 499,
      type: "technical",
      day: 2,
    },
    {
      title: "Startup Pitch",
      description:
        "Present your tech startup ideas to industry experts and investors.",
      date: "June 5, 2025",
      time: "2:00 PM - 6:00 PM",
      registrationLink: "/register/startup-pitch",
      fee: "Free",
      feeAmount: 0,
      type: "non-technical",
      day: 1,
    },
  ];

  const allEvents: Event[] = [
    ...keyEvents,
    {
      title: "Cybersecurity Challenge",
      description:
        "Test your skills in ethical hacking and security protocols.",
      date: "June 5, 2025",
      time: "1:00 PM - 6:00 PM",
      registrationLink: "/register/cybersecurity",
      fee: "₹249",
      feeAmount: 249,
      type: "technical",
      day: 1,
    },
    {
      title: "UI/UX Design Contest",
      description:
        "Design user-friendly interfaces and exceptional user experiences.",
      date: "June 5, 2025",
      time: "11:00 AM - 3:00 PM",
      registrationLink: "/register/design-contest",
      fee: "₹149",
      feeAmount: 149,
      type: "non-technical",
      day: 1,
    },
    {
      title: "Innovation Ideas Showcase",
      description: "Present your innovative ideas and creative solutions.",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      registrationLink: "/register/innovation",
      fee: "Free",
      feeAmount: 0,
      type: "non-technical",
      day: 1,
    },
    {
      title: "Web Development Sprint",
      description:
        "Build responsive websites using modern frameworks and tools.",
      date: "June 6, 2025",
      time: "9:00 AM - 5:00 PM",
      registrationLink: "/register/web-dev",
      fee: "₹199",
      feeAmount: 199,
      type: "technical",
      day: 2,
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications from scratch.",
      date: "June 6, 2025",
      time: "10:00 AM - 4:00 PM",
      registrationLink: "/register/mobile-dev",
      fee: "₹299",
      feeAmount: 299,
      type: "technical",
      day: 2,
    },
    {
      title: "Gaming Tournament",
      description: "Competitive gaming event featuring popular esports titles.",
      date: "June 6, 2025",
      time: "12:00 PM - 8:00 PM",
      registrationLink: "/register/gaming",
      fee: "₹199",
      feeAmount: 199,
      type: "non-technical",
      day: 2,
    },
    {
      title: "Tech Quiz Competition",
      description:
        "Test your knowledge in various technology domains and win prizes.",
      date: "June 6, 2025",
      time: "3:00 PM - 6:00 PM",
      registrationLink: "/register/tech-quiz",
      fee: "₹99",
      feeAmount: 99,
      type: "technical",
      day: 2,
    },
  ];

  // Filter events by day
  const day1Events = allEvents.filter((event) => event.day === 1);
  const day2Events = allEvents.filter((event) => event.day === 2);

  return (
    <>
      {/* Key Events Section */}
      <section
        id="events"
        className="py-20 bg-zinc-900 relative overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="backdrop-blur-md bg-white/10 rounded-xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {event.title}
                  </h3>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    Day {event.day}
                  </span>
                </div>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="text-sm text-zinc-400 mb-6 space-y-1">
                  <p>📅 {event.date}</p>
                  <p>🕒 {event.time}</p>
                  <p>
                    💰 <span className="text-green-400">{event.fee}</span>
                  </p>
                </div>
                <button
                  onClick={() => handleRegistration(event.registrationLink)}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-wise Events Section */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event Schedule
            </h2>
            <p className="text-xl text-zinc-400">
              Two days of tech innovation and learning
            </p>
          </div>

          {/* Day 1 Events */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Day 1 - June 5, 2025
              </h3>
              <p className="text-zinc-400">Workshops, Pitches & Innovation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {day1Events.map((event, index) => (
                <div
                  key={index}
                  className="bg-zinc-700 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-zinc-500/20 transition duration-300 border border-zinc-600 relative"
                >
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Day 1
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white pr-16">
                    {event.title}
                  </h4>
                  <p className="text-zinc-300 mb-3 text-sm">
                    {event.description}
                  </p>
                  <div className="text-xs text-zinc-400 mb-4">
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>
                      Fee: <span className="text-green-400">{event.fee}</span>
                    </p>
                  </div>
                  <Link
                    href={event.registrationLink}
                    className="inline-block bg-zinc-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-zinc-500 transition duration-300"
                    prefetch={false}
                  >
                    Register
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 Events */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Day 2 - June 6, 2025
              </h3>
              <p className="text-zinc-400">
                Development, Gaming & Competitions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {day2Events.map((event, index) => (
                <div
                  key={index}
                  className="bg-zinc-700 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-zinc-500/20 transition duration-300 border border-zinc-600 relative"
                >
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      Day 2
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white pr-16">
                    {event.title}
                  </h4>
                  <p className="text-zinc-300 mb-3 text-sm">
                    {event.description}
                  </p>
                  <div className="text-xs text-zinc-400 mb-4">
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>
                      Fee: <span className="text-green-400">{event.fee}</span>
                    </p>
                  </div>
                  <Link
                    href={event.registrationLink}
                    className="inline-block bg-zinc-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-zinc-500 transition duration-300"
                    prefetch={false}
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
