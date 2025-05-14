import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';

const Home: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Empower Your Team with Business Module Hub
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                The all-in-one platform for managing and distributing business modules to your team.
                Streamline operations, enhance productivity, and gain valuable insights.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="p-2 bg-gray-100 border-b flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dashboard Preview" 
                    className="w-full object-cover"
                    style={{ height: '300px' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-teal-700 rounded-lg shadow-lg p-4 w-64">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">30% Productivity Boost</h3>
                      <p className="text-teal-200 text-sm">
                        Our customers report significant efficiency improvements
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-64">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold">AI-Powered Insights</h3>
                      <p className="text-gray-500 text-sm">
                        Intelligent recommendations based on your team's usage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything You Need to Manage Your Business Modules
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools to streamline module distribution, 
              track usage, and gain valuable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Module Library</h3>
              <p className="text-gray-600 mb-5">
                Access a wide range of business modules for different departments and functions. 
                Easily download and assign them to your team members.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Categorized modules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Version management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Simple assignment flow</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Management</h3>
              <p className="text-gray-600 mb-5">
                Efficiently manage your team members, assign roles, and control module 
                access with our intuitive team management features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">User activity tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bulk user management</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reports</h3>
              <p className="text-gray-600 mb-5">
                Gain valuable insights into module usage, team performance, and business 
                impact with our powerful analytics and AI-powered reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI-powered insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom report builder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scheduled report delivery</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Geofencing</h3>
              <p className="text-gray-600 mb-5">
                Protect your sensitive business modules with advanced security features, 
                including location-based access controls.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geolocation restrictions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Secure credential management</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Reports</h3>
              <p className="text-gray-600 mb-5">
                Set up automated reports to keep stakeholders informed with the latest 
                insights and metrics about module usage and team performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customizable report templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multiple export formats</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integration Hub</h3>
              <p className="text-gray-600 mb-5">
                Connect with your existing business tools and systems for a seamless workflow 
                and enhanced productivity across your organization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">8x8 Contact Center</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API access for custom integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SSO with major providers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/features">
              <Button size="lg">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section with Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Trusted by Businesses Worldwide
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies that are already benefiting from our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Active Companies</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">10k+</div>
              <div className="text-gray-600">Modules Downloaded</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">30%</div>
              <div className="text-gray-600">Productivity Increase</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Streamline Your Business Operations
                </h3>
                <p className="text-gray-600 mb-6">
                  Business Module Hub helps companies like yours improve efficiency, reduce training time, 
                  and ensure consistent business processes across teams and departments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reduce onboarding time by up to 40%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Improve process compliance by 60%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cut operational costs by 25% on average</span>
                  </li>
                </ul>
                <Link to="/register">
                  <Button>Start Your Free Trial</Button>
                </Link>
              </div>
              <div className="bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it. Hear from businesses that have transformed their operations with Business Module Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Customer"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Michael Johnson</h4>
                  <p className="text-gray-600">CTO, TechAdvance Inc.</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Business Module Hub has revolutionized how we manage and distribute our internal tools.
                The setup was painless, and the analytics have provided invaluable insights into how our team uses different modules."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Customer"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Sarah Williams</h4>
                  <p className="text-gray-600">HR Director, Global Services</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The ability to assign specific modules to team members and track their usage has dramatically 
                improved our training process. The geofencing feature ensures our sensitive data stays secure."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Customer"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">David Chen</h4>
                  <p className="text-gray-600">Operations Manager, EastCoast Logistics</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The automated reports have saved our team countless hours of manual work. The insights we get
                from the AI-powered analytics have helped us identify and address inefficiencies we weren't even aware of."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for your business, from startups to enterprises.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-lg p-1 inline-flex shadow-sm">
              <button 
                onClick={() => setBillingPeriod('monthly')} 
                className={`px-4 py-2 rounded-md font-medium ${billingPeriod === 'monthly' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('annual')} 
                className={`px-4 py-2 rounded-md font-medium ${billingPeriod === 'annual' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Free</h3>
                <p className="mt-2 text-gray-600">Perfect for small teams just getting started.</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600">{billingPeriod === 'monthly' ? '/month' : '/year'}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic module library access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Up to 3 team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">5 module downloads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/register">
                    <Button variant="outline" fullWidth>Sign Up Free</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-900 overflow-hidden transform scale-105">
              <div className="bg-blue-900 text-white text-center py-2 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="mt-2 text-gray-600">For growing teams that need more capabilities.</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{billingPeriod === 'monthly' ? '$49' : '$470'}</span>
                  <span className="text-gray-600">{billingPeriod === 'monthly' ? '/month' : '/year'}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full module library access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Up to 10 team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">20 module downloads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">API access</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/register">
                    <Button fullWidth>Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                <p className="mt-2 text-gray-600">For organizations with advanced needs.</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{billingPeriod === 'monthly' ? '$199' : '$1,910'}</span>
                  <span className="text-gray-600">{billingPeriod === 'monthly' ? '/month' : '/year'}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited modules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Multi-location geofencing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">White labeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom module development</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/register">
                    <Button variant="outline" fullWidth>Contact Sales</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/pricing">
              <Button size="lg" variant="ghost">
                Compare All Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Super Admin Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Super Admin Dashboard
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Complete control and oversight of your entire Business Module ecosystem with our comprehensive Super Admin Dashboard.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 mb-12">
            <div className="p-2 bg-gray-100 border-b flex items-center space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-sm text-gray-500 font-medium">Super Admin Dashboard</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* Dashboard Overview */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dashboard Overview</h3>
                <p className="text-gray-600 mb-4">
                  Get a bird's-eye view of your entire system with real-time metrics, activity feeds, and system health indicators.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Real-time system metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Activity monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">System health indicators</span>
                  </li>
                </ul>
              </div>

              {/* Module Manager */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Module Manager</h3>
                <p className="text-gray-600 mb-4">
                  Create, edit, and manage all business modules from a centralized interface with version control and deployment tools.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Module creation wizard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Version control system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Deployment scheduling</span>
                  </li>
                </ul>
              </div>

              {/* Company Monitor */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Monitor</h3>
                <p className="text-gray-600 mb-4">
                  Track and manage all client companies with detailed insights into usage patterns, subscription status, and growth metrics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Company health scores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Subscription management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Usage trend analysis</span>
                  </li>
                </ul>
              </div>

              {/* User Manager */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">User Manager</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive user management across all companies with role assignments, access controls, and activity monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cross-company user management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced permission system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">User activity auditing</span>
                  </li>
                </ul>
              </div>

              {/* Request Center */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Center</h3>
                <p className="text-gray-600 mb-4">
                  Centralized management of all client requests, feature suggestions, and support tickets with workflow automation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Request prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated workflow routing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SLA monitoring</span>
                  </li>
                </ul>
              </div>

              {/* Analytics & AI Insights */}
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & AI Insights</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics and AI-powered insights to identify trends, predict needs, and optimize the entire platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-driven recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom report generation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/admin-demo">
              <Button size="lg">
                Explore Admin Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Stay Updated with Business Module Hub
            </h2>
            <p className="mt-4 text-xl text-teal-100 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, tips, and industry insights.
            </p>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <form className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-white text-base font-medium text-teal-700 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 sm:px-10"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-teal-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;