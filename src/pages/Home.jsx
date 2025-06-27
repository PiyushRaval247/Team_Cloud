import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Brain, Smartphone, Globe, Database, Users, Award, Clock, Shield } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Native Development',
      description: 'Build scalable, resilient applications using modern cloud technologies and microservices architecture.',
      path: '/services/cloud-native-development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to gain insights and automate processes.',
      path: '/services/ai-machine-learning',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences.',
      path: '/services/mobile-apps',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Develop modern, responsive web applications using cutting-edge technologies and frameworks.',
      path: '/services/web-development',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      path: '/services/cloud-migration',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Expert Developers', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ]

  const industries = [
    { name: 'Media & Entertainment', path: '/industries/media-entertainment' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Fintech', path: '/industries/fintech' },
    { name: 'E-commerce', path: '/industries/ecommerce' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Education', path: '/industries/education' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
                  Global Software Solutions
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                  Transforming Ideas Into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                    {' '}Digital Reality
                  </span>
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  Teem Cloud specializes in custom software solutions, cloud-native development, AI and machine learning, 
                  mobile apps, websites, and cloud migration for businesses worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/about-teem" className="btn-secondary text-lg px-8 py-4">
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Why Choose Teem Cloud?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Award className="w-4 h-4" />
                        </div>
                        <span>Proven track record with 500+ successful projects</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4" />
                        </div>
                        <span>Expert team of 50+ skilled developers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4" />
                        </div>
                        <span>Enterprise-grade security and compliance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We offer comprehensive software development services tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Link to={service.path} className="block">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {service.description}
                    </p>
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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We have deep expertise across multiple industries, delivering tailored solutions that address specific challenges and opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.path}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {industry.name}
                </h3>
                <div className="flex items-center text-primary-600 font-medium">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Teem Cloud can help you achieve your digital transformation goals and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link to="/solutions" className="btn-secondary text-lg px-8 py-4">
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}

export default Home 