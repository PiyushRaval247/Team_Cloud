import { Mail } from 'lucide-react'

const NewsletterSignup = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead with Industry Insights
          </h2>
          <p className="text-lg mb-8 text-primary-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates on technology trends, 
            industry insights, and exclusive content delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-secondary-900 placeholder-secondary-500"
            />
            <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-sm text-primary-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup 