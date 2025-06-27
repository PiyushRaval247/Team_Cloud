import { Link } from 'react-router-dom'
import { ChevronRight, Target, Eye, Users, Globe, Award, ArrowRight } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const OurMission = () => {
  const missionPillars = [
    {
      icon: Target,
      title: 'Innovation Excellence',
      description: 'We push the boundaries of technology to create cutting-edge solutions that drive business transformation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We build lasting relationships with our clients, working as an extension of their team to achieve shared success.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We serve clients worldwide, bringing diverse perspectives and solutions to address complex global challenges.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in every project, ensuring reliable and scalable solutions.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const goals = [
    {
      year: '2024',
      title: 'Expand AI Capabilities',
      description: 'Launch advanced AI and machine learning services to help businesses leverage intelligent automation.',
      status: 'In Progress'
    },
    {
      year: '2025',
      title: 'Global Market Leadership',
      description: 'Establish Teem Cloud as a leading provider of cloud-native solutions across key markets.',
      status: 'Planning'
    },
    {
      year: '2026',
      title: 'Sustainability Focus',
      description: 'Integrate sustainable practices and green technology solutions into our service offerings.',
      status: 'Planning'
    }
  ]

  const commitments = [
    {
      title: 'Continuous Learning',
      description: 'We invest in ongoing education and training to stay at the forefront of technology trends.'
    },
    {
      title: 'Ethical Technology',
      description: 'We develop solutions that respect privacy, security, and ethical considerations.'
    },
    {
      title: 'Community Impact',
      description: 'We contribute to the tech community through open source projects and knowledge sharing.'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We foster a diverse and inclusive workplace that reflects the global communities we serve.'
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
            <Link to="/about-teem" className="hover:text-primary-600 transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary-900 font-medium">Our Mission</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              To empower businesses worldwide with innovative software solutions that drive digital transformation, 
              enhance operational efficiency, and create sustainable competitive advantages.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-secondary-600">
                To be the global leader in custom software solutions, recognized for our technical excellence, 
                client partnership approach, and commitment to delivering transformative digital experiences 
                that shape the future of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Mission Pillars
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              These four pillars form the foundation of our mission and guide every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPillars.map((pillar, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Strategic Goals
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our roadmap for the future, outlining key objectives that will drive our continued growth and success.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-primary-600">
                    {goal.year}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    goal.status === 'In Progress' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {goal.status}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {goal.title}
                </h3>
                <p className="text-secondary-600">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Commitments
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Beyond our core mission, we are committed to making a positive impact in the technology industry and society.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-secondary-600">
                    {commitment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Whether you're a client looking for innovative solutions or a talented professional 
            wanting to make an impact, we invite you to be part of our journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/about-teem/careers" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}

export default OurMission 