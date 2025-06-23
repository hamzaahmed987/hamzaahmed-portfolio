'use client';

import { FiGithub, FiExternalLink, FiCode, FiZap } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  status: 'completed' | 'in-progress';
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Python Data Analyzer',
      description: 'Data analysis tool built with Python for processing and visualizing complex datasets.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
      image: '/images/project3.jpg',
      link: 'https://data-sweeperr.streamlit.app/',
      github: 'https://github.com/hamzaahmed987/Python_Assignment-1',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Bit Converter',
      description: 'Python and Streamlit app to convert between bits, bytes, and other units.',
      tags: ['Python', 'Streamlit'],
      image: '/images/project4.jpg',
      link: 'https://bit-converterr.streamlit.app/',
      github: 'https://github.com/hamzaahmed987/BitConvert',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Pass Guard',
      description: 'Secure password manager built in Python using Streamlit.',
      tags: ['Python', 'Streamlit'],
      image: '/images/project5.jpg',
      link: 'https://pass-guard.streamlit.app/',
      github: 'https://github.com/hamzaahmed987/passguard',
      status: 'completed'
    },
    {
      id: 4,
      title: 'E-commerce Website',
      description: 'Modern e-commerce platform with dynamic product management.',
      tags: ['Next.js', 'Tailwind CSS', 'Sanity'],
      image: '/images/project7.jpg',
      link: 'https://nikee-ten.vercel.app/',
      github: 'https://github.com/hamzaahmed987/Nike',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Truth Finder AI',
      description: 'Web app that uses OpenAI to find the truth about a topic.',
      tags: ['Next.js', 'Tailwind CSS', 'AI'],
      image: '/images/project6.jpg',
      link: 'https://truthfinder-ai.vercel.app/',
      github: 'https://github.com/hamzaahmed987/AI_Truth_Finder-frontend',
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description: 'Intelligent chat application with natural language processing.',
      tags: ['Next.js', 'TypeScript', 'OpenAI SDK'],
      image: '/images/project1.jpg',
      link: '#',
      github: 'https://github.com/username/ai-chat',
      status: 'in-progress'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Optimized Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:-top-40 md:-right-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:-bottom-40 md:-left-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-xl md:blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-200">
              <FiCode className="inline w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              My Work
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h1>

          <p className="max-w-md md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Showcasing my skills in web development, AI integration, and Python programming.
          </p>
        </div>

        {/* Projects Grid - Mobile Optimized */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            My Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 transform">
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className={`px-2 py-1 text-[10px] xs:text-xs font-medium rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.status === 'completed' ? '✓ Done' : '⚡ WIP'}
                    </span>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="h-28 sm:h-32 md:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 flex items-center justify-center">
                    <FiCode className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-300" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-white group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 text-[10px] xs:text-xs bg-white/10 text-slate-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] xs:text-xs bg-white/10 text-slate-300 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-1 sm:gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 px-2 py-1 text-[10px] xs:text-xs bg-white/10 text-slate-300 rounded sm:rounded-lg hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Code
                      </a>
                    )}
                    <a
                      href={project.link}
                      className="flex items-center gap-1 px-2 py-1 text-[10px] xs:text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded sm:rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10">
          <FiZap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400 mx-auto mb-2 sm:mb-3 md:mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Interested in working together?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-3 sm:mb-4 md:mb-6 max-w-md md:max-w-xl mx-auto">
            I&apos;m excited to take on new challenges and create amazing projects.
          </p>
          <a
            href="/contact"
            className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg sm:rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium shadow-md hover:shadow-purple-500/25 hover:scale-105 transform text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}