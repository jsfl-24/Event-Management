export default function HeroSection() {
  return (
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
            workshops, intense hackathons, coding competitions, and tech talks.
            Connect with fellow developers and shape the future of technology.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition duration-300 shadow-lg shadow-cyan-500/25">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
