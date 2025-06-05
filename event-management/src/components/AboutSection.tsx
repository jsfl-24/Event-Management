"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About TakeDown 2.0
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            A premier technology festival bringing together students,
            professionals, and industry experts for two days of innovation and
            learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              TakeDown 2.0 aims to bridge the gap between academic learning and
              industry requirements. We provide a platform for students to
              showcase their talents, learn from experts, and network with
              like-minded individuals.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Our festival features cutting-edge workshops, intense
              competitions, and inspiring talks from industry leaders, creating
              an ecosystem of innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-zinc-300">Participants</div>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-zinc-300">Events</div>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-zinc-300">Days</div>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-white mb-2">₹50K+</div>
              <div className="text-zinc-300">Prize Pool</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-zinc-700 p-8 rounded-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Innovation
            </h3>
            <p className="text-zinc-300">
              Cutting-edge workshops and competitions designed to spark
              creativity and push the boundaries of technology.
            </p>
          </div>

          <div className="text-center bg-zinc-700 p-8 rounded-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Networking
            </h3>
            <p className="text-zinc-300">
              Connect with industry professionals, mentors, and peers to build
              lasting relationships and career opportunities.
            </p>
          </div>

          <div className="text-center bg-zinc-700 p-8 rounded-lg">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Excellence
            </h3>
            <p className="text-zinc-300">
              Compete in exciting challenges with amazing prizes and recognition
              opportunities for outstanding performances.
            </p>
          </div>
        </div>

        {/* Event Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Event Timeline
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">
                Day 1 - June 5, 2025
              </h4>
              <ul className="space-y-2 text-zinc-300">
                <li>• 9:00 AM - Registration & Welcome</li>
                <li>• 10:00 AM - AI/ML Workshop</li>
                <li>• 2:00 PM - Web Development Workshop</li>
                <li>• 5:00 PM - Networking Session</li>
              </ul>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">
                Day 2 - June 6, 2025
              </h4>
              <ul className="space-y-2 text-zinc-300">
                <li>• 9:00 AM - 24-Hour Hackathon Begins</li>
                <li>• 2:00 PM - Startup Pitch Competition</li>
                <li>• 6:00 PM - Tech Talks</li>
                <li>• 8:00 PM - Award Ceremony</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
