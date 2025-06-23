'use client';

import { useState } from 'react';
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiCalendar,
  FiZap
} from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // ✅ Correct type for input and textarea
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Correct type for form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mblyzrdw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      description: 'Drop me a line anytime',
      contact: 'hamzawzr0897@gmail.com',
      href: 'mailto:hamzawzr0897@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      description: "Let&apos;s have a conversation",
      contact: '+92318-XXXXXXX',
      href: 'tel:+92318-XXXXXXX',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      description: 'Based in',
      contact: 'Karachi, Pakistan',
      href: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiCalendar,
      title: 'Schedule',
      description: 'Book a meeting',
      contact: 'Calendar (Coming Soon)',
      href: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      href: 'https://github.com/hamzaahmed987',
      color: 'hover:text-gray-300'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hamza-ahmed-9b38402b3/',
      color: 'hover:text-blue-400'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      href: 'https://x.com/Khamzat_ahmad',
      color: 'hover:text-sky-400'
    },
    {
      icon: FiMail,
      name: 'Email',
      href: 'mailto:hamzawzr0897@gmail.com',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-green-400/15 to-blue-400/15 blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-200">
              <FiZap size={16} className="inline mr-2" />
              Let&apos;s Connect
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and explore how we can create something amazing together.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="group bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {method.title}
              </h3>
              <p className="text-slate-400 text-sm mb-2">{method.description}</p>
              <p className="text-purple-300 font-medium">{method.contact}</p>
            </a>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <p className="text-slate-400">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      <FiUser size={16} className="inline mr-2" /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      <FiMail size={16} className="inline mr-2" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    <FiZap size={16} className="inline mr-2" /> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400 transition-all duration-300"
                    placeholder="What&apos;s this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    <FiMessageSquare size={16} className="inline mr-2" /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl text-green-200 text-center">
                    <FiZap size={20} className="inline mr-2" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Connect Socially
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 transform ${social.color}`}
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <social.icon size={20} className="text-white" />
                    </div>
                    <span className="font-medium text-slate-200">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Quick Info
              </h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Currently available for new projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Time zone: Your Timezone</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                <p className="text-sm text-purple-200">
                  <FiZap size={16} />
                  Pro tip: The more details you share about your project, the better I can help you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
