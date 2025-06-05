"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, []);

  return (
    <section
      id="home"
      className="bg-zinc-900 min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            TakeDown 2.0
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-zinc-400 tracking-wider">
            Code • Create • Innovate
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-zinc-300">
            Join our college-level tech festival featuring cutting-edge
            workshops, intense hackathons, coding competitions, and tech talks.
            Two days of innovation, learning, and networking with industry
            experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#events"
              className="bg-white text-zinc-900 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 font-semibold"
            >
              View Events
            </a>

            {!userDetails ? (
              <Link
                href="/signup"
                className="bg-zinc-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-zinc-600 transition duration-300 border border-zinc-600"
              >
                Register Now
              </Link>
            ) : (
              <a
                href="http://127.0.0.1:8000/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-zinc-600 transition duration-300 border border-zinc-600"
              >
                Admin Panel
              </a>
            )}
          </div>

          {/* Event Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                June 5-6
              </h3>
              <p className="text-zinc-400 text-sm">Two days of tech events</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                10+ Events
              </h3>
              <p className="text-zinc-400 text-sm">Workshops & competitions</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Win Prizes
              </h3>
              <p className="text-zinc-400 text-sm">Amazing rewards await</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
