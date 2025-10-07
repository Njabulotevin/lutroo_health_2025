import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlipCard from '@/components/FlipCard';

export default function Services() {
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

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#003D63] to-[#005a8c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health and wellness services tailored to your unique needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <Footer />
    </>
  );
}
