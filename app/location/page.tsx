import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Clock, MapPin, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Location() {
  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Location</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Accessible mental health support wherever you are
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#003D63] mb-6">Online Services, Global Reach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Lutroo Health and Wellness, we believe that quality mental health support should be accessible to everyone, regardless of location. That's why we offer all our services online, allowing you to connect with our expert counselors from the comfort and privacy of your own space.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're at home, at work, or traveling, our online platform ensures you can access the support you need, when you need it. All you need is a stable internet connection and a private space for your session.
              </p>
              <Button className="bg-[#5CECD3] text-[#003D63] hover:bg-[#003D63] hover:text-white transition-all">
                Book Your Online Session
              </Button>
            </div>
            <div className="bg-gradient-to-br from-[#003D63] to-[#005a8c] rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Globe className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Worldwide Access</h3>
                    <p className="text-gray-200 text-sm">Connect with us from anywhere in the world</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Video className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Secure Video Sessions</h3>
                    <p className="text-gray-200 text-sm">Private, HIPAA-compliant video conferencing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-200 text-sm">Book sessions that fit your schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">From Your Space</h3>
                    <p className="text-gray-200 text-sm">Comfort and privacy from your chosen location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#003D63] mb-8 text-center">How Online Sessions Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#5CECD3] text-[#003D63] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-[#003D63] text-lg mb-3">Book Your Session</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Choose a time that works for you and complete our simple booking process
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#5CECD3] text-[#003D63] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-[#003D63] text-lg mb-3">Receive Link</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Get a secure video conferencing link sent to your email before your session
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#5CECD3] text-[#003D63] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-[#003D63] text-lg mb-3">Connect & Begin</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Join your session from any device and start your journey to wellness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
