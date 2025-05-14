import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { auth, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFeatures = () => setFeaturesOpen(!featuresOpen);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm py-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-900 rounded flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <span className="text-xl font-semibold text-gray-900">
            {auth.company?.name || 'Business Module Hub'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button 
              onClick={toggleFeatures}
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {featuresOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                <Link to="/features#smodules" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Module Library
                </Link>
                <Link to="/features#analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Analytics & Reports
                </Link>
                <Link to="/features#team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Team Management
                </Link>
                <Link to="/features#security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Security Features
                </Link>
              </div>
            )}
          </div>
          <a 
            href="/#pricing" 
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Pricing
          </a>
          {!auth.isAuthenticated ? (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Log in</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to={auth.user?.role === 'super_admin' ? '/admin/dashboard' : '/dashboard'}>
                <Button variant="outline" size="sm">Dashboard</Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <div className="py-2">
              <button 
                onClick={toggleFeatures}
                className="text-gray-600 hover:text-gray-900 flex items-center w-full justify-between"
              >
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {featuresOpen && (
                <div className="mt-2 pl-4 border-l-2 border-gray-100 space-y-2">
                  <Link to="/features#modules" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                    Module Library
                  </Link>
                  <Link to="/features#analytics" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                    Analytics & Reports
                  </Link>
                  <Link to="/features#team" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                    Team Management
                  </Link>
                  <Link to="/features#security" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                    Security Features
                  </Link>
                </div>
              )}
            </div>
            <a 
              href="/#pricing" 
              className="text-gray-600 hover:text-gray-900 py-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }
              }}
            >
              Pricing
            </a>
            {!auth.isAuthenticated ? (
              <>
                <Link to="/login" className="py-2">
                  <Button fullWidth>Log in</Button>
                </Link>
                <Link to="/register" className="py-2">
                  <Button variant="outline" fullWidth>Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={auth.user?.role === 'super_admin' ? '/admin/dashboard' : '/dashboard'} className="py-2">
                  <Button fullWidth>Dashboard</Button>
                </Link>
                <Button variant="outline" fullWidth onClick={logout}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;