import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Brand Column - Full width on mobile */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Hamza Ahmed
              </h3>
              <p className="text-gray-400 text-sm">
                Crafting digital experiences with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <FiGithub />, url: "https://github.com/hamzaahmed987" },
                  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/hamza-ahmed-9b38402b3/" },
                  { icon: <FiTwitter />, url: "https://x.com/Khamzat_ahmad" },
                  { icon: <FiMail />, url: "mailto:hamzawzr0897@gmail.com" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={item.icon.type.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Compact Navigation Links */}
            <div className="space-y-2">
              <h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2">
                Navigation
              </h4>
              <ul className="space-y-1">
                {['About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xs"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compact Resources */}
            <div className="space-y-2">
              <h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2">
                Resources
              </h4>
              <ul className="space-y-1">
                {['Blog', 'Tutorials'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xs"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Only shown on desktop */}
            <div className="hidden md:block space-y-2">
              <h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2">
                Contact
              </h4>
              <address className="not-italic text-gray-400 text-xs space-y-1">
                <p>hamzawzr0897@gmail.com</p>
                <p>Karachi, Pakistan</p>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright Bar - Sticky at bottom */}
        <div className="border-t border-gray-800 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Hamza Ahmed. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}