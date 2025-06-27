import { Link } from 'react-router-dom'
import { ChevronRight, Users, Award, Target, Heart, Globe, Clock, Shield } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with our clients to achieve shared success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace innovation and cutting-edge technologies to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our business relationships.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'Visionary leader with 15+ years in software development and business strategy.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/150/150',
      bio: 'Technology expert specializing in cloud architecture and AI solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      image: '/api/placeholder/150/150',
      bio: 'Experienced engineering leader focused on scalable software solutions.'
    },
    {
      name: 'David Kim',
      role: 'VP of Sales',
      image: '/api/placeholder/150/150',
      bio: 'Sales strategist with deep understanding of enterprise software markets.'
    }
  ]

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Teem Cloud was established with a vision to transform businesses through innovative software solutions.'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, establishing our reputation for quality.'
    },
    {
      year: '2020',
      title: 'Cloud Migration Focus',
      description: 'Expanded our expertise in cloud migration services, helping businesses modernize their infrastructure.'
    },
    {
      year: '2021',
      title: 'AI & ML Division',
      description: 'Launched our AI and Machine Learning division to meet growing demand for intelligent solutions.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries, serving clients across North America, Europe, and Asia.'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Reached a major milestone of 500+ successful projects across various industries and technologies.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-custom px-4">
          <nav className="flex items-center space-x-2 text-sm text-secondary-600">
            <Link to="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary-900 font-medium">About Us</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-secondary-900">
                  About Teem Cloud
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  We are a global software company that specializes in custom solutions, 
                  helping businesses transform their digital presence and achieve their goals 
                  through innovative technology.
                </p>
                <p className="text-lg text-secondary-600">
                  With expertise in cloud-native development, AI and machine learning, 
                  mobile apps, websites, and cloud migration, we serve clients across 
                  media, healthcare, fintech, e-commerce, and more.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/about-teem/our-mission" className="btn-secondary">
                  Our Mission
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-sm text-primary-100">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-sm text-primary-100">Expert Developers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">25+</div>
                      <div className="text-sm text-primary-100">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">99%</div>
                      <div className="text-sm text-primary-100">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with clients, 
              partners, and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Teem Cloud and drive our mission 
              to deliver exceptional software solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium text-center mb-4">
                  {member.role}
                </p>
                <p className="text-secondary-600 text-sm text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From our founding to becoming a global software solutions provider, 
              here are the key milestones in our company's history.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-secondary-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Teem Cloud can help transform your business 
            with innovative software solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}

export default About 