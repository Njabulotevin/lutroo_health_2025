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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">About Lutroo</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals, families, and couples through faith-based wholistic wellness
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#003D63] mb-6 font-serif">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lutroo Health and Wellness is an organization offering a range of services to cater to the mental health and holistic health needs of our clients. With a focus on providing personalized support and guidance, we aim to help individuals achieve their mental health goals through a holistic approach.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our holistic approach focuses on healing body, mind, soul and restoring relationships. Lutroo provides faith-based counseling, seminars, workshops, health and wellness coaching, and employee health and wellness services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our services are available online, ensuring accessibility to all our clients. We cater for individuals, families, and couples.
              </p>
            </div>
            <div className="bg-[#5CECD3]/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Heart className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] text-lg mb-2">Holistic Approach</h3>
                    <p className="text-gray-700 text-sm">Healing body, mind, soul, and restoring relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Users className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-700 text-sm">Highly skilled counseling professionals with extensive experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Target className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] text-lg mb-2">Flexible Options</h3>
                    <p className="text-gray-700 text-sm">Personalized pricing and scheduling to meet your unique needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-4xl font-bold text-[#003D63] my-6 font-serif">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
               To encourage personal responsibility in achieving and maintaining health and wellness. Our approach focuses on healing and restoring body, mind and soul through professional counseling and natural remedies. We are committed to being confidential, empathetic and educational in our approach as we offer affordable and accessible professional services
              </p>
              
            </div>
            <div className="p-8">
              
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#003D63] mb-12 text-center font-serif">Our Team</h2>
          <div className="flex flex-col items-center gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-[320px] ">
              <div className="h-[200px] bg-[#5CECD3]/20 flex items-center justify-center mb-6 rounded-md">
                <User className="text-[#003D63]" size={100} />
              </div>
              <h3 className="text-xl font-bold text-[#003D63] mb-4">Patience Lethokuhle Ncube</h3>
              <p className="text-gray-700 leading-relaxed">
               Registered Social Worker in Private Practice
              </p>
               <p className="text-gray-700 leading-relaxed">
               Reg No: 10-53868
              </p>
              <p className="text-gray-700 leading-relaxed">
               Pr No: 1191291
              </p>
            </div>
          
          </div>
          
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <h2 className="text-4xl font-bold text-[#003D63] mb-12 text-center font-serif">Affiliated Bodies</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="bhf.png" className="max-w-[250px]"/>
             <img  src="SACSSP.jpg" className="max-w-[250px]"/>
          </div>
          
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Experience personalized, faith-based support that addresses your whole being
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
