import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003D63] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 bg-white p-2 rounded-md">
               <Link href="/" className="flex items-center space-x-2">
            <img src="logo_accent.svg"/>
          </Link>
            </div>
            <p className="text-gray-300 text-sm">
              Beloved, l pray that you may prosper in all things and be in health, just as your soul prospers. <span className="text-[#5CECD3]">3 John 1:2</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#5CECD3]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#5CECD3] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#5CECD3] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5CECD3] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-300 hover:text-[#5CECD3] transition-colors text-sm">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#5CECD3] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#5CECD3]">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Faith-Based Counseling</li>
              <li>Individual Counseling</li>
              <li>Family & Relationship Counseling</li>
              <li>Workplace Wellness</li>
              <li>Spiritual Growth</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#5CECD3]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} className="text-[#5CECD3]" />
                <span>+27 69 992 5452</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} className="text-[#5CECD3]" />
                <span>info@lutroo.co.za</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Instagram size={16} className="text-[#5CECD3]" />
                <span>@lutroo_official</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin size={16} className="text-[#5CECD3] mt-1" />
                <span>Available Online<br />Serving Clients Everywhere</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lutroo Health & Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
