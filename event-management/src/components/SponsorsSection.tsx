"use client";

import Image from "next/image";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
    },
    {
      name: "Google",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
    },
    {
      name: "Apple",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png",
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
    },
    {
      name: "Meta",
      logo: "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png",
    },
    {
      name: "Netflix",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
    },
    {
      name: "Tesla",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Tesla-Logo.png",
    },
    {
      name: "Spotify",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png",
    },
  ];

  return (
    <>
      <section id="sponsors" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sponsors
            </h2>
            <p className="text-xl text-zinc-400">
              Powered by industry leaders and tech innovators
            </p>
          </div>

          {/* Infinite Marquee Container */}
          <div className="relative overflow-hidden bg-zinc-800 rounded-lg py-8">
            <div className="flex animate-infinite-scroll whitespace-nowrap">
              {/* Multiple repetitions for seamless infinite scroll */}
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-16 mr-16">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={160}
                        height={80}
                        className="object-contain p-4"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CSS for infinite scrolling */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
          width: calc(400% + 64px); /* 4 sets * 100% + spacing */
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
