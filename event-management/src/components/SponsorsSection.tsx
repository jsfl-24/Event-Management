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
      <section id="sponsors" className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sponsors
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Powered by industry leaders and tech innovators who believe in
              fostering the next generation of technology
            </p>
          </div>

          {/* Infinite Marquee Container */}
          <div className="relative overflow-hidden bg-zinc-900 rounded-lg py-8 border border-zinc-700">
            <div className="flex animate-infinite-scroll whitespace-nowrap">
              {/* Multiple repetitions for seamless infinite scroll */}
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-16 mr-16">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
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

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-6">
              Interested in becoming a sponsor?
            </p>
            <a
              href="mailto:sponsors@takedown2025.com"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contact Us
            </a>
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
          animation: infinite-scroll 30s linear infinite;
          width: calc(400% + 64px); /* 4 sets * 100% + spacing */
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }

        /* Fade effect on edges */
        #sponsors .relative::before,
        #sponsors .relative::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 10;
          pointer-events: none;
        }

        #sponsors .relative::before {
          left: 0;
          background: linear-gradient(to right, rgb(39 39 42), transparent);
        }

        #sponsors .relative::after {
          right: 0;
          background: linear-gradient(to left, rgb(39 39 42), transparent);
        }
      `}</style>
    </>
  );
}
