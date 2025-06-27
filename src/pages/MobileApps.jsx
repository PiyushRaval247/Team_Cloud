import { Link } from 'react-router-dom'
import { ChevronRight, Smartphone } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const MobileApps = () => {
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
            <span className="text-secondary-900 font-medium">Mobile Apps</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Create native and cross-platform mobile applications that deliver 
              exceptional user experiences across all devices.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Mobile App Solutions Coming Soon
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            This page will showcase our mobile app development capabilities and solutions.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  )
}

export default MobileApps 