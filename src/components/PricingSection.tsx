
import { useEffect, useRef } from 'react';

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Transformation Programs - Online Fitness Coach India";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Kickstart",
      duration: "3 Months",
      features: [
        "Personalized workout plan",
        "Basic nutrition guidance", 
        "Weekly check-ins",
        "WhatsApp support",
        "Exercise form videos"
      ],
      popular: false
    },
    {
      name: "Transform",
      duration: "6 Months",
      features: [
        "Advanced workout programs",
        "Detailed meal plans",
        "Bi-weekly progress reviews",
        "24/7 chat support",
        "Supplement guidance",
        "Body composition tracking"
      ],
      popular: true
    },
    {
      name: "Master",
      duration: "8 Months", 
      features: [
        "Elite training protocols",
        "Custom nutrition coaching",
        "Weekly video calls",
        "Priority support access",
        "Advanced tracking tools",
        "Mindset coaching sessions"
      ],
      popular: false
    },
    {
      name: "Champion",
      duration: "12 Months",
      features: [
        "Complete lifestyle transformation",
        "1-on-1 monthly consultations",
        "Holistic fitness approach",
        "VIP support channel",
        "Competition prep training",
        "Long-term maintenance planning"
      ],
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="text-purple-600">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized workout and nutrition plan programs designed for every fitness transformation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular 
                  ? 'border-purple-400 shadow-purple-100' 
                  : 'border-purple-200 hover:border-purple-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-purple-600 font-semibold text-lg">{plan.duration}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold text-sm">✓</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-700 border-2 border-transparent hover:border-purple-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Not sure which program is right for you?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-3 rounded-lg text-xl transition-all duration-300"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
