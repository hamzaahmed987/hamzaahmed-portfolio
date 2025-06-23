'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FiHeart,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDownload,
} from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:-top-40 md:-right-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:-bottom-40 md:-left-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-xl md:blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="mb-4 md:mb-6 ">
            <span className="inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-200">
              <FiHeart size={16}  />
              Get to Know Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
            Passionate developer crafting digital experiences that make a difference.
          </p>
        </div>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center mb-20 md:mb-32">
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl blur-lg md:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/20">
                <div className="aspect-square w-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="/hamza.jpg"
                    alt="Hamza Ahmed"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Hi, I&apos;m Hamza Ahmed
            </h2>

            <div className="space-y-4 md:space-y-6 text-slate-300">
              <p>
                I&apos;m a dedicated web developer whose journey began 2 years ago. Over this time, I&apos;ve gained hands-on experience building modern, responsive applications.
              </p>
              <p>
                Right now, I&apos;m diving deep into <span className="text-purple-400 font-semibold">Agentic AI</span>. My goal is to master AI agents and integrate them into smart web apps.
              </p>
              <p>
                Beyond coding, I&apos;m always exploring new ideas and creative solutions to solve real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/resume-hamza.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <FiDownload size={20} />
                Download Resume
              </Link>

              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: 'https://github.com/hamzaahmed987' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hamza-ahmed-9b38402b3/' },
                  { icon: FiTwitter, href: 'https://x.com/Khamzat_ahmad' },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ...rest of the sections unchanged, apply same icon fix: use size instead of className ... */}
      </div>
    </div>
  );
}
