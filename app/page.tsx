"use client"

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlipCard from '@/components/FlipCard';
import { Button } from '@/components/ui/button';
import { Heart, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      imageUrl: "faith.jpeg",
      title: "Faith-Based Counseling",
      description: "Integrating psychological principles with spiritual guidance for wholeness and fruitfulness.",
      details: "Faith-based counseling integrates psychological principles with spiritual guidance, recognizing that God is the Alpha and Omega of our lives and everything in between. In this approach, we understand that God created our minds, bodies, and relationships with a purpose; He desires our wholeness and fruitfulness. Through faith-based counseling, we address emotional, mental, and relational challenges while anchoring healing in God's wisdom and love. God is our healer, provider, counselor, and friend, guiding every step of the counseling process. This approach empowers individuals to find peace, purpose, and restoration through a Christ-centered framework."
    },
    {
      imageUrl: "speaking.jpeg",
      title: "Speaking Engagements",
      description: "Inspiring workshops and seminars for health, wellness and spiritual growth.",
      details: "Our speaking engagements are designed to inspire, educate, and uplift. Whether preaching, teaching or leading workshops, we provide practical tools for health, wellness and spiritual growth, encouraging individuals and communities to flourish physically, emotionally, and spiritually."
    },
    {
      imageUrl: "individual.jpg",
      title: "Individual Counseling",
      description: "Personalized support for life's challenges through comprehensive care.",
      details: [
        "Anger Management: understand triggers, control, and redirect anger in healthy ways.",
        "Trauma Recovery: Heal past wounds and regain trust and peace.",
        "Burnout Recovery: Restore energy, purpose, and emotional balance in life and work.",
        "Addiction counseling and recovery support: safe and compassionate support to break free from addiction, overcome unhealthy patterns and dependencies.",
        "Mental Health Support: Receive guidance and strategies to maintain emotional and psychological well-being.",
        "Anxiety & Stress: find calm, resilience and clarity in daily life.",
        "Depression: Receive compassionate support to navigate feelings of sadness and hopelessness and move toward hope and restoration.",
        "Transition Counseling: Navigate life changes with clarity, confidence, and spiritual grounding."
      ]
    },
    {
      imageUrl: "couples.jpg",
      title: "Family & Relationship Counseling",
      description: "Building strong relationships through understanding, respect, trust and communication.",
      details: [
        "Parental Counseling & Guidance: Equip parents with tools for effective communication, discipline, and nurturing.",
        "Family & Relationship Counseling: Strengthen bonds, resolve conflicts, and promote harmony at home.",
        "Pre-Marital Counseling: prepare for marriage by building a strong, God-centered foundation of love and trust.",
        "Couples Counseling: Reconnect, restore intimacy & trust, and build enduring partnership through guidance and faith."
      ]
    },
    {
      imageUrl: "workplace.jpeg",
      title: "Workplace Wellness",
      description: "Creating healthy, productive workplaces through comprehensive wellness programs.",
      details: [
        "Employee Assistance Programs (EAP): Support employees with confidential counseling, stress management, and wellness resources.",
        "Health & Wellness Talks: practical, inspiring sessions to help teams thrive physically, mentally and spiritually"
      ]
    },
    {
      imageUrl: "spiritual-growth.jpeg",
      title: "Spiritual Growth & Purpose Alignment",
      description: "Growing deeper in faith while aligning your life for balance and fulfilment.",
      details: [
        "Christian Wellness Coaching: a wholistic approach to nurture body, mind and spirit in harmony with faith.",
        "Spiritual Support: Receive guidance, prayer, and encouragement for personal and professional life.",
        "Purpose Alignment: discover God's purpose for your life and align your steps with His divine plan"
      ]
    }
  ];

  return (
    <>
      <Navigation />

      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#003D63] via-[#003D63] to-[#005a8c] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzVDRUNEMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#5CECD3]/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Heart className="text-[#5CECD3]" size={20} />
                <span className="text-[#5CECD3] font-medium">Professional Mental Health Support</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
                Your Path To<br />
                <span className="text-[#5CECD3] font-serif">Wholistic Wellness</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Personalized Mental Health Support and Faith-Based Counseling—Accessible Anytime, Anywhere for Individuals, Families, and Couples.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#5CECD3] text-[#003D63] hover:bg-white hover:text-[#003D63] text-lg px-8 py-6 transition-all transform hover:scale-105 shadow-lg">
                  Book a Session
                </Button>
              </div>

            
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-8 shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/image.png"
                    alt="Counseling Session"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5CECD3]/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#5CECD3]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center my-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D63] mb-6 font-serif">
              About Us
            </h2>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D63] mb-6 font-serif">
              Your Journey to Wellness Begins Here
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We have a dedicated team of counselling professionals who are highly skilled and experienced in providing quality mental health support to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#5CECD3]/20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#003D63]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#003D63] mb-3">Who We Serve</h3>
              <p className="text-gray-700 leading-relaxed">
                Individuals, families, and couples seeking holistic mental health support and spiritual guidance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#5CECD3]/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#003D63]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#003D63] mb-3">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Holistic healing that focuses on body, mind, soul and restoring relationships through faith-based principles
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#5CECD3]/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#003D63]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#003D63] mb-3">Accessibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Online services available anytime, anywhere with flexible pricing options to meet your unique needs
              </p>
            </div>
          </div>
        </div>
      </section>
<section>
   <div className="flex flex-col bg-gray-50 justify-center items-center rounded-2xl p-8 gap-20">
      <h2 className="text-4xl md:text-5xl font-bold text-[#003D63] mb-6 font-serif">
              Get in Touch
            </h2>
              <form onSubmit={handleSubmit} className="space-y-6 w-[450px]">
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

</section>
      <section className="py-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Take the first step towards wholistic wellness and discover the peace, purpose, and restoration you deserve.
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
