import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiCode, FiCpu, FiDatabase, FiGlobe, FiLayers, FiServer, FiZap, FiActivity } from 'react-icons/fi';

export default function Home() {
  const technologies = [
    { name: 'Next.js', icon: <FiCode className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-blue-400 to-blue-600' },
    { name: 'React', icon: <FiCpu className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-cyan-400 to-cyan-600' },
    { name: 'JavaScript', icon: <FiCode className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', icon: <FiCode className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Tailwind CSS', icon: <FiLayers className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-teal-400 to-teal-600' },
    { name: 'Python', icon: <FiActivity className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-green-400 to-green-600' },
    { name: 'FastAPI', icon: <FiServer className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-orange-400 to-orange-600' },
    { name: 'OpenAI Agent SDK', icon: <FiZap className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-purple-400 to-purple-600' },
  ];

  const featuredProjects = [
    {
      title: 'Blog Website',
      description: 'A blog website with modern design and responsive layout.',
      tags: ['Next.js', 'Tailwind'],
      link: 'https://blog-website-eta-khaki.vercel.app/',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack solution with payment integration and analytics',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://nikee-ten.vercel.app/',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Optimized Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:-top-40 md:-right-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:-bottom-40 md:-left-40 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-xl md:blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Mobile Optimized */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center py-12 md:py-20">
          <div className="mb-6 md:mb-8 transform hover:scale-105 transition-transform duration-300">
            <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-200">
              <FiZap className="inline w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Web Developer & AI Specialist
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Hamza Ahmed
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-6 md:mb-8 max-w-3xl md:max-w-4xl font-light">
            Crafting{' '}
            <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              digital experiences
            </span>{' '}
            with cutting-edge AI
          </h2>
          
          <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed">
            I architect and develop next-generation web applications with AI integration.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <Link 
              href="/projects" 
              className="group px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl md:rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform text-sm sm:text-base"
            >
              <FiGlobe className="w-4 h-4 md:w-5 md:h-5" />
              Explore My Work 
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="group px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl md:rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transform text-sm sm:text-base"
            >
              <FiMail className="w-4 h-4 md:w-5 md:h-5" />
              Let&apos;s Collaborate
            </Link>
          </div>
        </section>

        {/* Technologies Section - Mobile Optimized */}
        <section className="py-12 md:py-20">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              My Arsenal
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-lg lg:text-xl text-slate-400">
              Technologies I use to bring visions to reality
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {technologies.map((tech) => (
              <div 
                key={tech.name} 
                className="group bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 transform"
              >
                <div className={`inline-flex p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${tech.color} mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects - Mobile Optimized */}
        <section className="py-12 md:py-20">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-lg lg:text-xl text-slate-400">
              Showcasing innovation through code
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-10">
            {featuredProjects.map((project) => (
              <div 
                key={project.title} 
                className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] transform overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} mb-4 sm:mb-6`}>
                    <FiCode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-white/10 backdrop-blur-sm text-purple-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={project.link} 
                    className="group/link inline-flex items-center gap-1 sm:gap-2 text-purple-300 hover:text-purple-200 font-medium sm:font-semibold transition-colors text-sm sm:text-base"
                  >
                    View Project 
                    <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-16">
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform text-sm sm:text-base"
            >
              View All Projects
              <FiArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </section>

        {/* About Me Preview - Mobile Optimized */}
        <section className="py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 sm:p-2 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/20">
                  <div className="aspect-square w-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden relative">
                    <Image
                      src="/hamza.jpg"
                      alt="Hamza Ahmed"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                About Me
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
                With experience in web development, I specialize in creating
                performant, accessible, and visually stunning digital experiences with AI integration.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-8 md:mb-10">
                {[
                  { icon: FiCode, text: 'Clean, scalable architecture' },
                  { icon: FiZap, text: 'AI/ML integration' },
                  { icon: FiDatabase, text: 'End-to-end development' }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 sm:gap-4 group">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-slate-200 text-base sm:text-lg group-hover:text-purple-200 transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 transform text-sm sm:text-base"
              >
                Discover My Journey
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-12 md:py-20 mb-12 md:mb-20">
          <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to Create?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-12 leading-relaxed">
                Let&apos;s collaborate to turn your vision into reality with web solutions and AI integration.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                <Link 
                  href="mailto:hamzawzr0897@gmail.com"
                  className="group px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base md:text-lg font-bold rounded-xl sm:rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                >
                  <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start a Conversation
                  <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="https://github.com/hamzaahmed987" 
                    className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 transform"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/hamza-ahmed-9b38402b3/" 
                    className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 transform"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}