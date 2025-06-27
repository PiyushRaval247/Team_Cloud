import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'

const Solutions = () => {
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
            <span className="text-secondary-900 font-medium">Solutions</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Comprehensive software solutions designed to address your business challenges 
              and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Solutions Portfolio Coming Soon
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            This page will showcase our comprehensive solution offerings and success stories.
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

export default Solutions 