
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const transformations = [
    {
      name: "Rajesh K.",
      result: "Lost 13kg, Built Muscle",
      testimonial: "Best online fitness coaching experience! Got jacked transformation in 6 months with personalized workout and nutrition plan.",
      location: "Mumbai",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    },
    {
      name: "Priya S.",
      result: "Body Recomposition Success",
      testimonial: "Holistic fitness and mindset approach changed my life completely. Amazing transformation coach journey!",
      location: "Delhi",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    },
    {
      name: "Arjun P.",
      result: "Gained 8kg Muscle",
      testimonial: "Muscle gain and fat loss program delivered incredible results. Best fitness transformation journey ever!",
      location: "Bangalore",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    },
    {
      name: "Sneha M.",
      result: "Lost 15kg Fat",
      testimonial: "Personalized workout and nutrition plan made all the difference in my body recomposition goals.",
      location: "Chennai",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Real Results - Online Fitness Transformation Coach India";
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

  // Auto-play for mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % transformations.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section ref={sectionRef} id="transformations" className="py-16 bg-gradient-to-br from-battleship-gray to-battleship-gray/90">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-baby-powder mb-6">
            Real{' '}
            <span className="text-burnt-sienna">
              Results
            </span>
          </h2>
          <p className="text-bone text-xl max-w-3xl mx-auto">
            Join hundreds who transformed their bodies with our online fitness transformation coaching
          </p>
        </div>
        
        {/* Single Large Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-baby-powder/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-ash-gray/30 hover:border-burnt-sienna/50 transition-all duration-500 shadow-2xl min-h-[500px]">
            {/* Before/After Images */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="aspect-[3/4] bg-ash-gray/20 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="text-bone text-lg font-semibold block mb-2">BEFORE</span>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-ash-gray/30 rounded-full mx-auto"></div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-burnt-sienna/20 to-burnt-sienna/30 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="text-burnt-sienna text-lg font-semibold block mb-2">AFTER</span>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-burnt-sienna/40 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-baby-powder mb-2">{transformations[currentIndex].name}</h3>
                <div className="text-burnt-sienna font-semibold text-lg md:text-xl mb-2">{transformations[currentIndex].result}</div>
                <div className="text-bone">{transformations[currentIndex].location}</div>
              </div>
              
              <blockquote className="text-bone italic text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                "{transformations[currentIndex].testimonial}"
              </blockquote>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-battleship-gray hover:bg-burnt-sienna text-baby-powder p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-battleship-gray hover:bg-burnt-sienna text-baby-powder p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-burnt-sienna' : 'bg-ash-gray/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-matte px-12 py-4 text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Transformation Coach Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
