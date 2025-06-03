export default function AboutSection() {
  const stats = [
    { number: "3000+", label: "Students" },
    { number: "40+", label: "Events" },
    { number: "75+", label: "Speakers" },
    { number: "₹5L+", label: "Prizes" },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About TechFest 2025
            </h2>
            <p className="text-lg text-zinc-300 mb-6">
              TechFest 2025 is our college's flagship technology festival,
              designed by students for students. This annual event brings
              together the brightest minds from engineering departments.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              From intensive coding workshops and hackathons to startup
              competitions, our festival offers hands-on learning experiences
              that bridge academic knowledge and industry requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-zinc-800 rounded-lg border border-zinc-600"
                >
                  <div className="text-2xl font-bold text-white-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg p-8 border border-zinc-600">
            <div className="text-6xl text-center mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-center text-white mb-4">
              Our Mission
            </h3>
            <p className="text-center text-zinc-300">
              To empower college students with practical tech skills and create
              a community where ideas transform into reality through
              collaborative learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
