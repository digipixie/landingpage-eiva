import { Phone, Mail, MessageCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-9 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-poppins">Cebu Pacific</h3>
            <p className="text-gray-300 font-montserrat text-sm">Your Journey. Our Passion.</p>
            <div className="flex space-x-4">
              <Facebook className="w-4 h-4 text-blue-400" />
              <Twitter className="w-4 h-4 text-blue-400" />
              <Instagram className="w-4 h-4 text-blue-400" />
              <Youtube className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold font-montserrat">Quick Links</h4>
            <ul className="space-y-2 text-sm font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Book a Flight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manage Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Check-in</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flight Status</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold font-montserrat">Support</h4>
            <ul className="space-y-2 text-sm font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Advisories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold font-montserrat">Legal</h4>
            <ul className="space-y-2 text-sm font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Unsubscribe</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-300 font-montserrat">
              © 2024 Cebu Pacific Air, Inc. All rights reserved.
            </p>
            <p className="text-sm text-gray-300 font-montserrat">
              Domestic Airport Road, Pasay City 1300, Philippines
            </p>
            <p className="text-xs text-gray-400 font-montserrat">
              Please verify within 24 hours to avoid travel interruption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
