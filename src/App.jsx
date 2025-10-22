import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ExternalLink, Calendar, MapPin, Phone, Briefcase, GraduationCap, Award, Users, TrendingUp } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'work', 'writing', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Collab ML",
      description: "AI/ML marketplace connecting creators and brands. Scaled from concept to $15M in investor interest with 300+ creators and 40+ brands in 3 months.",
      tech: ["GCP Vertex AI", "Python", "ML Pipelines", "React"],
      status: "Live",
      link: "https://collabml.ai",
      linkedinLink: "https://www.linkedin.com/company/collaba-ml/?viewAsMember=true",
      image: '/images/collab-ml-logo-new.png',
      metrics: { creators: "300+", brands: "40+", funding: "$15M" }
    },
    {
      title: "Financial Forecasting System",
      description: "ML system achieving 25% accuracy improvement in construction industry financial predictions using advanced forecasting algorithms.",
      tech: ["Python", "TensorFlow", "Financial Modeling", "Data Analysis"],
      status: "Completed",
      link: "https://github.com/perm-moore",
      image: '/images/financial-forecasting.jpg',
      metrics: { improvement: "25%", industry: "Construction", type: "ML System" }
    },
    {
      title: "ML Automation Pipeline",
      description: "Reduced decision time by 92% across finance and operations through agent-based infrastructure with predictive ML and automated reporting.",
      tech: ["AWS Bedrock", "ML Agents", "Automation", "ERP Integration"],
      status: "In Production",
      image: '/images/ml-automation-pipeline.png',
      metrics: { efficiency: "92%", scope: "Finance & Ops", type: "Automation" }
    }
  ]

  const articles = [
    {
      title: "n8n Meetup in LA Photos | September 2025",
      description: "TL;DR: n8n held a meetup in Venice Beach and did a live demo. The whole event was very informative, with around 500+ guests.",
      date: "Sep 2025",
      readTime: "3 min read",
      link: "https://medium.com/@permmoore186",
      image: '/images/n8n-meetup.jpeg'
    },
    {
      title: "AWS Summit 2025 | Event Photo Album & Experience",
      description: "September 17th, 2025 | Los Angeles Convention Center DT-LA. Comprehensive coverage of the latest AWS innovations and networking opportunities.",
      date: "Sep 2025",
      readTime: "5 min read",
      link: "https://medium.com/@permmoore186",
      image: '/images/aws-summit.jpg'
    },
    {
      title: "Google Irvine Office Visit as a Former Googler",
      description: "Lunch with the team and reflections on my time at Google, working on Trust & Safety and YouTube operations.",
      date: "Aug 2025",
      readTime: "4 min read",
      link: "https://medium.com/@permmoore186",
      image: '/images/google-office.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Google-style Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">PM</span>
                </div>
                <span className="text-xl font-normal text-gray-900">Perm Moore</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['About', 'Work', 'Writing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <a href="mailto:perm@collabaml.ai" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/perm-moore" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/perm/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://medium.com/@permmoore186" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="https://calendly.com/perm-collabaml" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <div className="text-center mb-6">
                <img 
                  src="/images/perm-profile.png" 
                  alt="Perm Moore" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <h2 className="text-xl font-medium text-gray-900 mb-1">Perm Moore</h2>
                <p className="text-sm text-gray-600 mb-2">Product Specialist • AI/ML Expert</p>
                <p className="text-xs text-gray-500">Serving creator's partnership content through product features installment since 2016 🏆</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  <span>Founder & CEO, Collab ML</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <GraduationCap className="w-4 h-4 text-green-500" />
                  <span>Physics & Astronomy, UofL</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>San Francisco & Los Angeles</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <span>perm@collabaml.ai</span>
                </div>
              </div>

              {/* Google-style badges */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">7+</div>
                    <div className="text-xs text-gray-600">Years at Google</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-semibold text-green-600">$15M</div>
                    <div className="text-xs text-gray-600">Investor Interest</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-lg font-semibold text-red-600">300+</div>
                    <div className="text-xs text-gray-600">Creators</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-lg font-semibold text-yellow-600">40+</div>
                    <div className="text-xs text-gray-600">Brands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* About Section */}
            <section id="about" className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                About
              </h3>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  I'm the Founder & CEO of <strong>Collab ML</strong>, an AI/ML marketplace connecting creators and brands. 
                  I scaled the platform from concept to <strong>$15M in investor interest</strong> with 300+ creators and 40+ brands in just 3 months.
                </p>
                <p className="mb-4">
                  Previously, I spent nearly a decade at <strong>Google and YouTube</strong>, leading strategy and operations for Trust & Safety, 
                  working with teams like Google DeepMind to enhance ML models for risk detection and content moderation.
                </p>
                <p>
                  With a background in Physics & Astronomy from University of Louisville and experience at Microsoft, 
                  I bring deep technical expertise to building scalable AI/ML solutions for the creator economy.
                </p>
              </div>
            </section>

            {/* Work Section */}
            <section id="work" className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Briefcase className="w-5 h-5 text-green-500 mr-2" />
                Projects
              </h3>
              
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        {project.image && (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            project.status === 'Live' ? 'bg-green-100 text-green-800' :
                            project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-semibold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex space-x-3">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Visit Website
                        </a>
                      )}
                      {project.linkedinLink && (
                        <a 
                          href={project.linkedinLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-blue-700 text-white text-sm rounded-md hover:bg-blue-800 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 mr-1" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Writing Section */}
            <section id="writing" className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <ExternalLink className="w-5 h-5 text-red-500 mr-2" />
                Writing
              </h3>
              
              <div className="grid gap-6">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {article.image && (
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">{article.title}</h4>
                      <p className="text-gray-700 mb-4">{article.description}</p>
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Read on Medium
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <a 
                  href="https://medium.com/@permmoore186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  View All Articles on Medium
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-2" />
                Let's Connect
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Get in Touch</h4>
                  <div className="space-y-3">
                    <a href="mailto:perm@collabaml.ai" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>perm@collabaml.ai</span>
                    </a>
                    <a href="https://calendly.com/perm-collabaml" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Calendar className="w-5 h-5" />
                      <span>Schedule a Meeting</span>
                    </a>
                    <a href="https://www.linkedin.com/in/perm/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Follow My Work</h4>
                  <div className="space-y-3">
                    <a href="https://medium.com/@permmoore186" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      <span>Medium Articles</span>
                    </a>
                    <a href="https://github.com/perm-moore" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub Projects</span>
                    </a>
                    <a href="https://x.com/pm17208" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span>Twitter Updates</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600">
                  Ready to explore AI/ML opportunities or discuss the future of the creator economy? 
                  Let's connect and see how we can collaborate.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2025 Perm Moore. Built with Google-inspired design and passion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
