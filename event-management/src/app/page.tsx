import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-cyan-400">
                TechFest 2025
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#home"
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#events"
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Events
                </Link>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="#sponsors"
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Sponsors
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TechFest 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-300">
              Code • Create • Innovate
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Join our college-level tech festival featuring cutting-edge
              workshops, intense hackathons, coding competitions, and tech
              talks. Connect with fellow developers and shape the future of
              technology.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition duration-300 shadow-lg shadow-cyan-500/25">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Key Events Section */}
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
            {/* Event Card 1 */}
            <div className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                AI/ML Workshop
              </h3>
              <p className="text-gray-300 mb-4">
                Hands-on workshop covering machine learning fundamentals, neural
                networks, and practical AI implementation with industry mentors.
              </p>
              <div className="text-sm text-cyan-300">
                <p>📅 March 15, 2025</p>
                <p>⏰ 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
              <div className="text-cyan-400 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                24-Hour Hackathon
              </h3>
              <p className="text-gray-300 mb-4">
                Non-stop coding marathon to build innovative solutions. Team up
                with fellow coders and create something amazing in 24 hours.
              </p>
              <div className="text-sm text-cyan-300">
                <p>📅 March 16-17, 2025</p>
                <p>⏰ 24 Hours Non-Stop</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
              <div className="text-cyan-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Startup Pitch Competition
              </h3>
              <p className="text-gray-300 mb-4">
                Present your tech startup ideas to industry experts and
                investors. Win funding and mentorship opportunities.
              </p>
              <div className="text-sm text-cyan-300">
                <p>📅 March 18, 2025</p>
                <p>⏰ 2:00 PM - 6:00 PM</p>
              </div>
            </div>

            {/* Event Card 4 */}
            <div className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Coding Competition
              </h3>
              <p className="text-gray-300 mb-4">
                Test your programming skills in our intense coding challenges.
                Multiple rounds with increasing difficulty levels.
              </p>
              <div className="text-sm text-cyan-300">
                <p>📅 March 19, 2025</p>
                <p>⏰ 12:00 PM - 8:00 PM</p>
              </div>
            </div>

            {/* Event Card 5 */}
            <div className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Tech Exhibition
              </h3>
              <p className="text-gray-300 mb-4">
                Showcase innovative student projects, research work, and
                cutting-edge technology demonstrations from various departments.
              </p>
              <div className="text-sm text-cyan-300">
                <p>📅 March 15-19, 2025</p>
                <p>⏰ All Festival Days</p>
              </div>
            </div>

            {/* Event Card 6 */}
            <div className="bg-gray-700 rounded-lg shadow-lg shadow-gray-900/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
              <div className="text-cyan-400 text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Tech Talks & Seminars
              </h3>
              <p className="text-gray-300 mb-4">
                Inspiring talks by industry leaders, alumni, and tech experts on
                emerging technologies, career guidance, and innovation trends.
              </p>
              <div className="text-sm text-cyan-300">
                <p>📅 March 17, 2025</p>
                <p>⏰ 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About TechFest 2025
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                TechFest 2025 is our college's flagship technology festival,
                designed by students for students. This annual event brings
                together the brightest minds from engineering and technology
                departments across the region for an unforgettable celebration
                of innovation.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From intensive coding workshops and hackathons to startup pitch
                competitions and tech exhibitions, our festival offers hands-on
                learning experiences that bridge the gap between academic
                knowledge and industry requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="text-2xl font-bold text-cyan-400">3000+</div>
                  <div className="text-sm text-gray-400">
                    Student Participants
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="text-2xl font-bold text-cyan-400">40+</div>
                  <div className="text-sm text-gray-400">Tech Events</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="text-2xl font-bold text-cyan-400">75+</div>
                  <div className="text-sm text-gray-400">Industry Speakers</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="text-2xl font-bold text-cyan-400">₹5L+</div>
                  <div className="text-sm text-gray-400">Prize Pool</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 border border-gray-600">
              <div className="text-6xl text-center mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Our Mission
              </h3>
              <p className="text-center text-gray-300">
                To empower college students with practical tech skills, foster
                innovation, and create a community where ideas transform into
                reality through collaborative learning and hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sponsors
            </h2>
            <p className="text-xl text-gray-400">
              Powered by industry leaders and tech innovators
            </p>
          </div>

          {/* Title Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">
              Title Sponsors
            </h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
                <div className="text-4xl font-bold text-cyan-400">
                  TECH CORP
                </div>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 border border-gray-600">
                <div className="text-4xl font-bold text-purple-400">
                  INNOVATE INC
                </div>
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center text-yellow-400 mb-6">
              Gold Sponsors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600">
                <div className="text-2xl font-bold text-yellow-400">
                  STARTUP A
                </div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600">
                <div className="text-2xl font-bold text-yellow-400">
                  COMPANY B
                </div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600">
                <div className="text-2xl font-bold text-yellow-400">FIRM C</div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600">
                <div className="text-2xl font-bold text-yellow-400">
                  BRAND D
                </div>
              </div>
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-lg font-bold text-center text-gray-400 mb-6">
              Silver Sponsors
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                "SPONSOR 1",
                "SPONSOR 2",
                "SPONSOR 3",
                "SPONSOR 4",
                "SPONSOR 5",
                "SPONSOR 6",
              ].map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600"
                >
                  <div className="text-sm font-bold text-gray-300">
                    {sponsor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white py-16 border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">📧</span>
                  <span className="text-gray-300">info@techfest2025.edu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">📞</span>
                  <span className="text-gray-300">+91 12345 67890</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">📍</span>
                  <span className="text-gray-300">
                    XYZ College of Engineering
                    <br />
                    Tech City, State - 123456
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sponsors"
                    className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  💼
                </a>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-gray-300">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-r-lg hover:from-cyan-600 hover:to-purple-700 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 TechFest. All rights reserved. | Built with 💙 by Students,
              For Students
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
