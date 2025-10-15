"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post('https://lutroo.co.za/api/form', formData)

    console.log(res)

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're here to help you on your journey to wholistic wellness
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003D63] mb-6">Get In Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Have questions about our services or ready to book your first session? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#003D63]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] mb-1">Phone</h3>
                    <a href="tel:+27699925452" className="text-gray-700 hover:underline">+27 69 992 5452</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#003D63]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] mb-1">Email</h3>
                    <a href="mailto:info@lutroo.co.za" className="text-gray-700 hover:underline">info@lutroo.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#003D63]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] mb-1">Location</h3>
                    <p className="text-gray-700">Available Online<br />Serving Clients Everywhere</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#003D63]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] mb-1">Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#003D63] mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#003D63] mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#003D63] mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="071 234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#003D63] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="w-full bg-[#5CECD3] text-[#003D63] hover:bg-[#003D63] hover:text-white transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Don't wait to begin your path to wholistic wellness
          </p>
          <Button size="lg" className="bg-[#5CECD3] text-[#003D63] hover:bg-white hover:text-[#003D63] text-lg px-8 py-6 transition-all transform hover:scale-105">
            Book a Session
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
