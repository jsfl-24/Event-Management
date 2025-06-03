import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-zinc-900 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Take Down 2.0
          </h1>
          <p className="text-xl md:text-3l mb-6 text-zinc-400 tracking-wider">
            Code • Create • Innovate
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-zinc-300">
            Join our college-level tech festival featuring cutting-edge
            workshops, intense hackathons, coding competitions, and tech talks.
          </p>

          <button className="bg-zinc-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-white hover:text-zinc-900 transition duration-300 transform hover:scale-105 font-semibold">
            <Link href="#events">Register Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
