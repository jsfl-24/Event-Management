"use client";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12 relative z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Event Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TakeDown 2.0</h3>
            <p className="text-zinc-400 mb-4">
              Join us for two days of innovation, learning, and networking. 
              Experience cutting-edge technology and connect with industry leaders.
            </p>
            <div className="text-zinc-400">
              <p className="mb-1">📅 June 5-6, 2025</p>
              <p className="mb-1">📍 Tech Campus, Innovation Hub</p>
              <p>✉️ info@takedown2025.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/signup" className="hover:text-white transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-white transition-colors">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-400">
            © 2025 TakeDown 2.0. All rights reserved. Built with ❤️ for the tech community.
          </p>
        </div>
      </div>
    </footer>
  );
}