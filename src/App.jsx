import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, TrendingUp, Users, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'writing', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const projects = [
    {
      title: "Collaba ML",
      description: "AI/ML marketplace connecting creators and brands. Scaled from concept to $15M in investor interest with 300+ creators and 40+ brands in 3 months.",
      tech: ["GCP Vertex AI", "Python", "ML Pipelines", "React"],
      status: "Live",
      link: "https://collabml.ai",
      linkedinLink: "https://www.linkedin.com/company/collaba-ml/?viewAsMember=true",
      image: '/images/collab-ml-logo-new.png'
    },
    {
      title: "Financial Forecasting System",
      description: "ML system achieving 25% accuracy improvement in construction industry financial predictions using advanced forecasting algorithms.",
      tech: ["Python", "TensorFlow", "Financial Modeling", "Data Analysis"],
      status: "Completed",
      link: "https://github.com/perm-moore",
      image: "/images/financial-forecasting.jpg"
    },
    {
      title: "ML Automation Pipeline",
      description: "Reduced decision time by 92% across finance and operations through agent-based infrastructure with predictive ML and automated reporting.",
      tech: ["AWS Bedrock", "ML Agents", "Automation", "ERP Integration"],
      status: "In Production",
      image: "/images/ml-automation-pipeline.png"
    }
  ]

  const skills = [
    { name: "ML/AI Engineering", icon: Brain },
    { name: "Product Strategy", icon: TrendingUp },
    { name: "Cloud Architecture", icon: Code },
    { name: "Team Leadership", icon: Users }
  ]

  const mediumArticles = [
    {
      title: "n8n Meetup in LA Photos | September 2025",
      excerpt: "TL;DR: n8n held a meetup in Venice Beach and did a live demo. The whole event was very informative, with around 500+ guests.",
      date: "Sep 2025",
      readTime: "3 min read",
      link: "https://medium.com/@permmoore186",
      image: "/images/n8n-meetup.jpeg"
    },
    {
      title: "AWS Summit 2025 | Event Photo Album & Experience",
      excerpt: "September 17th, 2025 | Los Angeles Convention Center DT-LA. Comprehensive coverage of the latest AWS innovations and networking opportunities.",
      date: "Sep 2025",
      readTime: "5 min read",
      link: "https://medium.com/@permmoore186",
      image: "/images/aws-summit.jpg"
    },
    {
      title: "Google Irvine Office Visit as a Former Googler",
      excerpt: "Lunch with the team and reflections on my time at Google, working on Trust & Safety and YouTube operations.",
      date: "Aug 2025",
      readTime: "4 min read",
      link: "https://medium.com/@permmoore186",
      image: "/images/google-office.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-amber-900"
            >
              PERM
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Work', 'Writing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                    activeSection === item.toLowerCase() ? 'text-amber-700' : 'text-stone-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:perm@collabaml.ai" 
                 className="text-stone-600 hover:text-amber-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/perm-moore" target="_blank" rel="noopener noreferrer" 
                 className="text-stone-600 hover:text-amber-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/perm/" target="_blank" rel="noopener noreferrer"
                 className="text-stone-600 hover:text-amber-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://medium.com/@permmoore186" target="_blank" rel="noopener noreferrer"
                 className="text-stone-600 hover:text-amber-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a href="https://x.com/pm17208" target="_blank" rel="noopener noreferrer"
                 className="text-stone-600 hover:text-amber-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://calendly.com/perm-collabaml" target="_blank" rel="noopener noreferrer"
                 className="text-stone-600 hover:text-amber-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-stone-100/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-stone-800">
              PERM MOORE
            </h1>
          <h2 className="text-2xl md:text-3xl font-light text-amber-800 mb-8 tracking-wide text-center">
            <div>AI/ML AUTOMATION | PRODUCT INFRASTRUCTURE</div>
            <div>FOUNDER & CEO, COLLABA ML (2025 - PRESENT)</div>
          </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Building the future of AI/ML automation for the creator economy. Former Google/YouTube executive 
              with expertise in machine learning, product strategy, and scaling innovative platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('work')}
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg font-light border-0"
              >
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 text-lg font-light"
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-center mb-16 text-stone-800">WHO I AM</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed font-light">
                  Hey! I'm Perm. Welcome to my corner of the internet.
                </p>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed font-light">
                  I'm the Founder & CEO of Collaba ML, an AI/ML marketplace connecting creators and brands. 
                  I scaled the platform from concept to $15M in investor interest with 300+ creators and 40+ brands in just 3 months.
                </p>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed font-light">
                  Previously, I spent nearly a decade at Google and YouTube, leading strategy and operations for Trust & Safety, 
                  working with teams like Google DeepMind to enhance ML models for risk detection and content moderation.
                </p>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                  With a background in Physics & Astronomy from University of Louisville and experience at Microsoft, 
                  I bring deep technical expertise to building scalable AI/ML solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-stone-50 hover:bg-amber-50 transition-colors"
                    >
                      <skill.icon className="w-5 h-5 text-amber-700" />
                      <span className="font-light text-stone-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                  <img 
                    src="/images/perm-profile.png" 
                    alt="Perm Moore"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-stone-600 font-light mb-2">San Francisco & Los Angeles</p>
                <p className="text-stone-500 text-sm font-light">Physics & Astronomy, University of Louisville</p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-center mb-16 text-stone-800">THE WORKS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant={project.status === 'Live' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'} 
                               className={`font-light ${project.status === 'Live' ? 'bg-amber-700 text-white' : project.status === 'Completed' ? 'bg-stone-200 text-stone-700' : 'border-stone-300 text-stone-600'}`}>
                          {project.status}
                        </Badge>
                        <ExternalLink className="w-4 h-4 text-stone-400" />
                      </div>
                      {project.logo ? (
                        <div className="flex flex-col items-start gap-2 mb-4">
                          <img 
                            src={project.logo} 
                            alt={`${project.title} logo`}
                            className="w-full max-w-sm object-contain"
                          />
                        </div>
                      ) : project.image ? (
                        <div className="flex flex-col items-start gap-2 mb-4">
                          <img 
                            src={project.image} 
                            alt={`${project.title} preview`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <h3 className="text-xl font-light text-stone-800">{project.title}</h3>
                        </div>
                      ) : (
                        <h3 className="text-xl font-light mb-3 text-stone-800">{project.title}</h3>
                      )}
                      <p className="text-stone-600 mb-4 leading-relaxed font-light">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-light border-stone-300 text-stone-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.link && (
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="flex-1 text-amber-700 hover:text-amber-800 font-light"
                            onClick={() => window.open(project.link, '_blank')}
                          >
                            Visit Website <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                          {project.linkedinLink && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="flex-1 text-amber-700 hover:text-amber-800 font-light"
                              onClick={() => window.open(project.linkedinLink, '_blank')}
                            >
                              <Linkedin className="w-3 h-3 mr-1" />
                              LinkedIn
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-center mb-16 text-stone-800">MY WRITING</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm bg-white overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4 text-sm text-stone-500 font-light">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-light mb-3 text-stone-800 leading-tight">{article.title}</h3>
                      <p className="text-stone-600 mb-4 leading-relaxed font-light">{article.excerpt}</p>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-amber-700 hover:text-amber-800 font-light"
                        onClick={() => window.open(article.link, '_blank')}
                      >
                        Read on Medium <ExternalLink className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-light"
                onClick={() => window.open('https://medium.com/@permmoore186', '_blank')}
              >
                View All Articles on Medium
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-stone-800">LET'S BUILD SOMETHING GREAT</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to explore AI/ML opportunities or discuss the future of the creator economy? Let's connect and see how we can collaborate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-light text-stone-800 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-stone-600 font-light mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-light mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-light mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-light mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors text-lg font-light"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Options */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-light text-stone-800 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:perm@collabaml.ai"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-stone-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <Mail className="w-6 h-6 text-amber-800" />
                    </div>
                    <div>
                      <div className="font-light text-stone-800">Email</div>
                      <div className="text-stone-600 text-sm">perm@collabaml.ai</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://calendly.com/perm-collabaml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-stone-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <svg className="w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-light text-stone-800">Schedule a Call</div>
                      <div className="text-stone-600 text-sm">Book time on my calendar</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/perm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-stone-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <Linkedin className="w-6 h-6 text-amber-800" />
                    </div>
                    <div>
                      <div className="font-light text-stone-800">LinkedIn</div>
                      <div className="text-stone-600 text-sm">Professional networking</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-light text-stone-800 mb-4">Follow My Work</h3>
                <div className="flex gap-4">
                  <a href="https://medium.com/@permmoore186" target="_blank" rel="noopener noreferrer"
                     className="flex-1 bg-stone-100 hover:bg-stone-200 p-4 rounded-lg transition-colors text-center">
                    <svg className="w-6 h-6 mx-auto mb-2 text-stone-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    <div className="text-sm font-light text-stone-600">Medium</div>
                  </a>
                  <a href="https://x.com/pm17208" target="_blank" rel="noopener noreferrer"
                     className="flex-1 bg-stone-100 hover:bg-stone-200 p-4 rounded-lg transition-colors text-center">
                    <svg className="w-6 h-6 mx-auto mb-2 text-stone-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <div className="text-sm font-light text-stone-600">Twitter</div>
                  </a>
                  <a href="https://github.com/perm-moore" target="_blank" rel="noopener noreferrer"
                     className="flex-1 bg-stone-100 hover:bg-stone-200 p-4 rounded-lg transition-colors text-center">
                    <Github className="w-6 h-6 mx-auto mb-2 text-stone-600" />
                    <div className="text-sm font-light text-stone-600">GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-stone-800 text-stone-300 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-light">&copy; 2025 Perm Moore. Built with precision and passion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
