'use client'

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Award, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await axios.post('https://lutroo.co.za/api/booking', formData)

        if(res.status >= 200 || res.status <= 300){
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })

            router.push("/booking/success")
        }
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Book a session</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Connect with our experts to begin your journey
                    </p>
                </div>
            </section>

          <section className="px-5">
              <form onSubmit={handleSubmit} className="space-y-6 max-w-[450px] py-10 mx-auto">
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
                          placeholder="07 123 4567"
                      />
                  </div>
                  <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#003D63] mb-2">
                          Subject
                      </label>
                      <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full"
                          placeholder=""
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
                      Book a sesion
                  </Button>
              </form>
          </section>

            <Footer />
        </>
    );
}
