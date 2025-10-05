import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, TrendingUp, Users } from 'lucide-react'
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
      title: "Sales Pro Agent",
      description: "An intelligent sales automation system built with n8n, featuring advanced data scraping and lead generation capabilities.",
      tech: ["n8n", "Octoparse", "API Integration", "Automation"],
      status: "In Development",
      link: "#"
    },
    {
      title: "Data Pipeline Optimizer",
      description: "A comprehensive solution for optimizing data workflows and improving sales team efficiency through automated insights.",
      tech: ["Python", "Data Analysis", "Workflow Automation"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Portfolio Analytics Dashboard",
      description: "A dynamic dashboard showcasing professional metrics and project outcomes with real-time data visualization.",
      tech: ["React", "Chart.js", "API Integration"],
      status: "Live",
      link: "#"
    }
  ]

  const skills = [
    { name: "n8n Automation", icon: Code },
    { name: "Data Scraping", icon: Database },
    { name: "Sales Strategy", icon: TrendingUp },
    { name: "Team Leadership", icon: Users }
  ]

  const mediumArticles = [
    {
      title: "Building the Future of Sales Automation",
      excerpt: "How I'm revolutionizing sales processes through intelligent automation and data-driven insights.",
      date: "Oct 2025",
      readTime: "5 min read",
      link: "https://medium.com/@permmoore"
    },
    {
      title: "From Military Discipline to Tech Excellence",
      excerpt: "Applying White House standards and military-grade discipline to create exceptional tech solutions.",
      date: "Sep 2025",
      readTime: "7 min read",
      link: "https://medium.com/@permmoore"
    },
    {
      title: "The Art of Professional Networking",
      excerpt: "Strategic approaches to building meaningful professional relationships in the tech industry.",
      date: "Sep 2025",
      readTime: "4 min read",
      link: "https://medium.com/@permmoore"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              PERM
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Work', 'Writing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/permmoore" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-slate-600 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/permmoore" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                PERM MOORE
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
              SALES PRO AGENT BUILDER
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Building the future of sales automation through intelligent data-driven solutions. 
              I combine military-grade discipline with cutting-edge technology to create exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('work')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
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
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">WHO I AM</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Hey! I'm Perm. Welcome to my corner of the internet.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  I'm a sales pro agent builder dedicated to creating intelligent automation solutions that transform how businesses approach sales and data management. Currently, I'm building cutting-edge sales automation systems using n8n and advanced data scraping techniques with Octoparse.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  I bring military-grade discipline and White House standards to everything I build, ensuring exceptional quality and attention to detail. My approach combines strategic thinking with hands-on technical execution.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors"
                    >
                      <skill.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-slate-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">PM</span>
                    </div>
                    <p className="text-slate-600 font-medium">Professional Photo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">THE WORKS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant={project.status === 'Live' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}>
                          {project.status}
                        </Badge>
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-800">{project.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700">
                        View Project <ArrowRight className="w-4 h-4" />
                      </Button>
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
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">MY WRITING</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4 text-sm text-slate-500">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-800 leading-tight">{article.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{article.excerpt}</p>
                      <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700">
                        Read on Medium <ExternalLink className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Articles on Medium
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">LET'S BUILD SOMETHING GREAT</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Ready to transform your sales processes with intelligent automation? 
              Let's connect and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </div>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/permmoore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/permmoore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://medium.com/@permmoore" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p>&copy; 2025 Perm Moore. Built with precision and passion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
