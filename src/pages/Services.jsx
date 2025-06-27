import { Link } from 'react-router-dom'
import { ChevronRight, Cloud, Brain, Smartphone, Globe, Database, ArrowRight, CheckCircle } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Native Development',
      description: 'Build scalable, resilient applications using modern cloud technologies and microservices architecture.',
      path: '/services/cloud-native-development',
      color: 'from-blue-500 to-cyan-500',
      features: ['Microservices Architecture', 'Container Orchestration', 'Serverless Computing', 'Cloud-Native Security']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to gain insights and automate processes.',
      path: '/services/ai-machine-learning',
      color: 'from-purple-500 to-pink-500',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Chatbots & Conversational AI']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences.',
      path: '/services/mobile-apps',
      color: 'from-green-500 to-emerald-500',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Solutions', 'Mobile App Maintenance']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Develop modern, responsive web applications using cutting-edge technologies and frameworks.',
      path: '/services/web-development',
      color: 'from-orange-500 to-red-500',
      features: ['Frontend Development', 'Backend Development', 'E-commerce Solutions', 'Progressive Web Apps']
    },
    {
      icon: Database,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      path: '/services/cloud-migration',
      color: 'from-indigo-500 to-blue-500',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Hybrid Cloud Solutions']
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, understand your business goals, and create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and creates detailed technical specifications.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support, maintenance, and optimization services.'
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
            <span className="text-secondary-900 font-medium">Services</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              We offer comprehensive software development services tailored to meet your business needs 
              and drive digital transformation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link to="/solutions" className="btn-secondary">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end software development services 
              that help businesses innovate and grow.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Link to={service.path} className="block">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery 
              while maintaining flexibility to adapt to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Why Choose Teem Cloud?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      Expert Team
                    </h3>
                    <p className="text-secondary-600">
                      Our team of 50+ experienced developers, designers, and consultants bring diverse expertise to every project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-secondary-600">
                      We've successfully delivered 500+ projects across various industries and technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-secondary-600">
                      We maintain the highest standards of quality with comprehensive testing and quality assurance processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-secondary-600">
                      We provide continuous support, maintenance, and optimization services to ensure your solution evolves with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-lg mb-6 text-primary-100">
                Let's discuss your project requirements and how we can help bring your vision to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Free consultation and project assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Detailed proposal with timeline and pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Agile development with regular updates</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 mt-6 inline-block">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Let's discuss how our services 
            can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Consultation
            </Link>
            <Link to="/industries" className="btn-secondary">
              View Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}

export default Services 