"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <img src="logo_accent.svg"/>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium">
              About
            </Link>
            <Link href="/location" className="text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium">
              Location
            </Link>
            <Link href="/contact" className="text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium">
              Contact
            </Link>
            <Button className="bg-[#5CECD3] text-[#003D63] hover:bg-[#003D63] hover:text-white transition-all rounded-full">
              Book a Session
            </Button>
          </div>

          <button
            className="md:hidden text-[#003D63]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block py-2 text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/location"
              className="block py-2 text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-[#003D63] hover:text-[#5CECD3] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-[#5CECD3] text-[#003D63] hover:bg-[#003D63] hover:text-white transition-all rounded-full">
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
