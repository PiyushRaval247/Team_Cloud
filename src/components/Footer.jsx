import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react'
import { navigationData } from '../data/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Teem Cloud</h2>
            <p className="text-lg mb-8 text-primary-100">
              Get the latest insights on technology trends, industry updates, and company news delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-secondary-900 placeholder-secondary-500"
              />
              <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-primary-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Teem Cloud</h3>
                  <p className="text-sm text-secondary-400">Global Software Solutions</p>
                </div>
              </div>
              
              <p className="text-secondary-300 mb-6">
                Empowering businesses with innovative software solutions, cloud-native development, and cutting-edge AI technology.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/cloud-native-development" className="text-secondary-300 hover:text-white transition-colors">
                    Cloud Native Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-machine-learning" className="text-secondary-300 hover:text-white transition-colors">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobile-apps" className="text-secondary-300 hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-development" className="text-secondary-300 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-migration" className="text-secondary-300 hover:text-white transition-colors">
                    Cloud Migration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Industries</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/industries/media-entertainment" className="text-secondary-300 hover:text-white transition-colors">
                    Media & Entertainment
                  </Link>
                </li>
                <li>
                  <Link to="/industries/healthcare" className="text-secondary-300 hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/industries/fintech" className="text-secondary-300 hover:text-white transition-colors">
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link to="/industries/ecommerce" className="text-secondary-300 hover:text-white transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link to="/industries/manufacturing" className="text-secondary-300 hover:text-white transition-colors">
                    Manufacturing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-300">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94000<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-secondary-300">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-secondary-300">info@teemcloud.com</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/contact" className="btn-accent">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800 py-8">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} Teem Cloud. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/about-teem" className="text-secondary-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about-teem" className="text-secondary-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/about-teem" className="text-secondary-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 