export default function SponsorsSection() {
  const titleSponsors = [
    { name: "TECH CORP", color: "text-cyan-400" },
    { name: "INNOVATE INC", color: "text-purple-400" },
  ];

  const goldSponsors = ["STARTUP A", "COMPANY B", "FIRM C", "BRAND D"];

  const silverSponsors = [
    "SPONSOR 1",
    "SPONSOR 2",
    "SPONSOR 3",
    "SPONSOR 4",
    "SPONSOR 5",
    "SPONSOR 6",
  ];

  return (
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
            {titleSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 border border-gray-600"
              >
                <div className={`text-4xl font-bold ${sponsor.color}`}>
                  {sponsor.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-yellow-400 mb-6">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600"
              >
                <div className="text-2xl font-bold text-yellow-400">
                  {sponsor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-lg font-bold text-center text-gray-400 mb-6">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-cyan-500/20 transition duration-300 text-center border border-gray-600"
              >
                <div className="text-sm font-bold text-gray-300">{sponsor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
