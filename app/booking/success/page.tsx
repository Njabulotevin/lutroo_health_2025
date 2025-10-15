import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Award, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Thank you</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Your session has been successfully booked. We’ll get back to you soon with more details.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
