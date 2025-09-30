import { useState } from 'react';
import { AlertTriangle, Shield, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Index() {
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 px-6 lg:px-17">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f5943ea369fe4acfb678cae352a4dc32d697188e?width=2880" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="text-5xl font-bold text-cebu-blue font-poppins mb-6">
                Verify Your Account
              </h1>
              <p className="text-xl text-gray-800 font-montserrat max-w-2xl mx-auto">
                Please update your password within 24 hours<br />
                to avoid travel interruption.
              </p>
            </div>

            <div className="flex justify-center">
              {/* Security Verification Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h3 className="text-xl font-semibold text-cebu-blue font-poppins text-center mb-6">
                  Security Verification
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-500 font-montserrat mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-montserrat text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cebu-blue focus:border-cebu-blue"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-cebu-yellow text-cebu-blue font-semibold font-poppins py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Verify
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center font-montserrat">
                    No data is transmitted. This is a training simulation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Account Information Section */}
        <section className="py-16 px-6 lg:px-17">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-cebu-blue font-poppins">
                  Account Information
                </h2>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold font-montserrat">
                  High Priority
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-500 font-montserrat">Account Email:</span>
                  <span className="text-gray-800 font-montserrat">user@example.com</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-500 font-montserrat">Go Rewards Tier:</span>
                  <span className="text-gray-800 font-montserrat">Silver Member</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-500 font-montserrat">Last Login Location:</span>
                  <span className="text-red-600 font-medium font-montserrat">Unknown - Tokyo, Japan</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-500 font-montserrat">Account Status:</span>
                  <span className="text-red-600 font-bold font-montserrat">Verification Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affected Booking Section */}
        <section className="py-16 px-6 lg:px-17">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-cebu-blue font-poppins text-center mb-8">
              Affected Booking
            </h2>
            
            <div className="bg-yellow-50 border-l-4 border-cebu-yellow rounded-lg shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 font-montserrat">
                  Upcoming Flight
                </h3>
                <span className="bg-cebu-yellow text-cebu-blue px-3 py-1 rounded-full text-sm font-bold font-montserrat">
                  At Risk
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 font-montserrat">Route</p>
                  <p className="text-base font-semibold text-gray-800 font-montserrat">Manila (MNL) → Singapore (SIN)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-montserrat">Flight</p>
                  <p className="text-base font-semibold text-gray-800 font-montserrat">5J 807</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-montserrat">Date & Time</p>
                  <p className="text-base font-semibold text-gray-800 font-montserrat">December 15, 2024 • 08:30 AM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-montserrat">Booking Reference</p>
                  <p className="text-base font-semibold text-gray-800 font-montserrat">ABC123XYZ</p>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-semibold text-sm font-montserrat">
                  ⚠️ This booking will be cancelled if verification is not completed by December 14, 2024 • 11:59 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Concerns Section */}
        <section className="py-16 px-6 lg:px-17 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-cebu-blue font-poppins text-center mb-8">
              Security Concerns Detected
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Suspicious Activity */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800 font-montserrat">
                    Suspicious Activity
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 font-montserrat">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Multiple failed login attempts detected
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Access from unrecognized devices
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Login attempts from different countries
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Unusual booking pattern identified
                  </li>
                </ul>
              </div>

              {/* Account Vulnerabilities */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800 font-montserrat">
                    Account Vulnerabilities
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 font-montserrat">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Password not updated in 180+ days
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Two-factor authentication disabled
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Security questions not configured
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Email verification pending
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Process Section */}
        <section className="py-16 px-6 lg:px-17">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-cebu-blue font-poppins text-center mb-8">
              Verification Process
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                {[
                  { step: '1', title: 'Click verification', subtitle: 'button' },
                  { step: '2', title: 'Enter current', subtitle: 'credentials' },
                  { step: '3', title: 'Create new', subtitle: 'password' },
                  { step: '4', title: 'Enable 2FA security', subtitle: '' },
                  { step: '5', title: 'Receive', subtitle: 'confirmation' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold font-montserrat mb-3">
                      {item.step}
                    </div>
                    <div className="text-sm text-gray-800 font-montserrat">
                      <div>{item.title}</div>
                      {item.subtitle && <div>{item.subtitle}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Need Assistance Section */}
        <section className="py-16 px-6 lg:px-17 bg-cebu-blue text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Need Assistance?
            </h2>
            <p className="text-lg font-montserrat opacity-90 mb-12">
              Our security team is available 24/7 to help you with the verification process
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Support */}
              <div className="text-center">
                <Phone className="w-8 h-8 text-cebu-yellow mx-auto mb-4" />
                <h3 className="text-base font-semibold font-montserrat mb-2">
                  Phone Support
                </h3>
                <p className="text-sm opacity-80 font-montserrat">
                  +63 2 8702 0888
                </p>
              </div>

              {/* Email Support */}
              <div className="text-center">
                <Mail className="w-8 h-8 text-cebu-yellow mx-auto mb-4" />
                <h3 className="text-base font-semibold font-montserrat mb-2">
                  Email Support
                </h3>
                <p className="text-sm opacity-80 font-montserrat">
                  security@cebupacificair.com
                </p>
              </div>

              {/* Live Chat */}
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-cebu-yellow mx-auto mb-4" />
                <h3 className="text-base font-semibold font-montserrat mb-2">
                  Live Chat
                </h3>
                <p className="text-sm opacity-80 font-montserrat">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
