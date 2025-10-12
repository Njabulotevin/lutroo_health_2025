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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#003D63] mb-6 font-serif">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lutroo is a Greek word meaning “to redeem” or “to ransom”. At the heart of our mission is the truth that Christ paid it all at the Cross; not only to forgive our sins but to restore us fully to His image. True restoration is wholistic, encompassing the mind, body, spirit and even our relationships. Christ died so that we can be free from diseases, brokenness and anything that keeps us from living in full health and purpose.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Lutroo Health and Wellness, we believe that God’s desire is for each person to be whole. Just as Christ looks at us as complete beings, our approach focuses on the whole person. We integrate psychology, faith and practical wellness strategies to guide you toward mental clarity, spiritual growth and physical health.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Why choose Lutroo? We combine Christ centered guidance with professional therapy, wholistic wellness support and creative tools designed to restore wholeness in every part of your life. Our tagline, “Wholistic health” reflects our commitment to supporting every aspect of you, helping you experience true restoration, balance and a flourishing life.
              </p>
              <h2 className="text-4xl font-bold text-[#003D63] mb-6 font-serif mt-10">Meet your therapist </h2>
              <p className="text-gray-700 leading-relaxed">
                  <span className="text-[#5CECD3] font-bold">Lethokuhle</span> is Social Worker and Christian Psychotherapist specializing in faith-based counseling and wholistic health. She has a deep passion for couple counseling and family life, believing that strong families are the foundation of thriving communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond private practice, she is a professional public speaker, sharing insights on health and wellness in churches and communities. Committed to making counseling accessible to all, she provides free services through health expos, where she hosts Open Space Counseling and provides virtual counseling to young people navigating identity, purpose and life transitions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through her ministry she visits the elderly and physically challenged bringing counseling and care directly into their homes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                She is inspired by sunflowers because they always look toward the direction of the sun- a reminder to face the light even in darkest seasons. Just as the sunflower seeks the sun, she believes that every person can turn toward God’s light; finding hope, healing and resilience along the way.
              </p>
            </div>
            <div className="bg-[#5CECD3]/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CECD3] flex items-center justify-center flex-shrink-0">
                    <Heart className="text-[#003D63]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D63] text-lg mb-2">Wholistic Approach</h3>
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
            <div className="p-8">
              <img src="/about.jpeg"/>
            </div>
            <div>
                 <h2 className="text-4xl font-bold text-[#003D63] my-6 font-serif">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
               To encourage personal responsibility in achieving and maintaining health and wellness. Our approach focuses on healing and restoring body, mind and soul through professional counseling and natural remedies. We are committed to being confidential, empathetic and educational in our approach as we offer affordable and accessible professional services
              </p>
              
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
               Pr No: 1191292
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
