import { Link } from 'react-router-dom'
import { ChevronRight, Cloud, ArrowRight, CheckCircle, Server, Shield, Zap } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const CloudNative = () => {
  const features = [
    {
      icon: Server,
      title: 'Microservices Architecture',
      description: 'Design and implement scalable microservices that enable rapid development and deployment.'
    },
    {
      icon: Cloud,
      title: 'Container Orchestration',
      description: 'Leverage Kubernetes and Docker for efficient container management and scaling.'
    },
    {
      icon: Zap,
      title: 'Serverless Computing',
      description: 'Build event-driven applications using serverless functions and managed services.'
    },
    {
      icon: Shield,
      title: 'Cloud-Native Security',
      description: 'Implement security best practices for cloud-native applications and infrastructure.'
    }
  ]

  const benefits = [
    'Improved scalability and performance',
    'Faster time to market',
    'Reduced infrastructure costs',
    'Enhanced reliability and availability',
    'Better resource utilization',
    'Simplified deployment and management'
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
            <Link to="/services" className="hover:text-primary-600 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary-900 font-medium">Cloud Native Development</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-secondary-900">
                  Cloud Native Development
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  Build scalable, resilient applications using modern cloud technologies and microservices architecture 
                  that can handle the demands of today's digital landscape.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/services" className="btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Cloud Native?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Scalable and resilient architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Faster development and deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Cost-effective resource utilization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Cloud Native Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We provide comprehensive cloud-native development services to help you build 
              modern, scalable applications that thrive in the cloud.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Benefits of Cloud Native Development
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Ready to Go Cloud Native?
              </h3>
              <p className="text-secondary-600 mb-6">
                Let's discuss how cloud-native development can transform your business 
                and help you achieve your digital transformation goals.
              </p>
              <Link to="/contact" className="btn-primary w-full flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Applications
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Ready to build scalable, resilient applications that can handle the demands 
            of modern business? Let's discuss your cloud-native development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  )
}

export default CloudNative 