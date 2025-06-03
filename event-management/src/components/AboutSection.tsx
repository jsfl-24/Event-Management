export default function AboutSection() {
  const stats = [
    { number: "3000+", label: "Student Participants" },
    { number: "40+", label: "Tech Events" },
    { number: "75+", label: "Industry Speakers" },
    { number: "₹5L+", label: "Prize Pool" },
  ];

  return (
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
              departments across the region for an unforgettable celebration of
              innovation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From intensive coding workshops and hackathons to startup pitch
              competitions and tech exhibitions, our festival offers hands-on
              learning experiences that bridge the gap between academic
              knowledge and industry requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-800 rounded-lg border border-gray-600"
                >
                  <div className="text-2xl font-bold text-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
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
  );
}
