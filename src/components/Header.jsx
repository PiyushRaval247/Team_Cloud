import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { navigationData } from '../data/navigation'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@teemcloud.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/contact" className="hover:text-accent-200 transition-colors">
                Get a Quote
              </Link>
              <Link to="/resources/blog" className="hover:text-accent-200 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-600">Teem Cloud</h1>
                <p className="text-xs text-secondary-500">Global Software Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationData.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                      isActive(item.path) || location.pathname.startsWith(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-4">
                      <div className="grid gap-2">
                        {item.children?.map((child) => (
                          <div key={child.id}>
                            <Link
                              to={child.path}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="font-semibold text-secondary-800 mb-1">
                                {child.title}
                              </h3>
                              <p className="text-sm text-secondary-600">
                                {child.description}
                              </p>
                            </Link>
                            
                            {/* Sub-dropdown for nested children */}
                            {child.children && (
                              <div className="ml-4 mt-2 space-y-1">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.id}
                                    to={subChild.path}
                                    className="block p-2 rounded hover:bg-gray-50 transition-colors"
                                  >
                                    <h4 className="font-medium text-secondary-700 text-sm">
                                      {subChild.title}
                                    </h4>
                                    <p className="text-xs text-secondary-500">
                                      {subChild.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary">
                Start Project
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container-custom px-4 py-4">
              <div className="space-y-2">
                {navigationData.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        isActive(item.path) || location.pathname.startsWith(item.path)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === item.id && item.children && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <div key={child.id}>
                            <Link
                              to={child.path}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <h3 className="font-semibold text-secondary-800 mb-1">
                                {child.title}
                              </h3>
                              <p className="text-sm text-secondary-600">
                                {child.description}
                              </p>
                            </Link>
                            
                            {child.children && (
                              <div className="ml-4 mt-2 space-y-1">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.id}
                                    to={subChild.path}
                                    className="block p-2 rounded hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <h4 className="font-medium text-secondary-700 text-sm">
                                      {subChild.title}
                                    </h4>
                                    <p className="text-xs text-secondary-500">
                                      {subChild.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="btn-primary w-full text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 