import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#events", label: "Events" },
    { href: "#about", label: "About Us" },
    { href: "#sponsors", label: "Sponsors" },
  ];

  const socialLinks = [
    { href: "#", icon: "📘" },
    { href: "#", icon: "📷" },
    { href: "#", icon: "🐦" },
    { href: "#", icon: "💼" },
  ];

  return (
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
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
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
  );
}
