
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame } from 'lucide-react';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      title: "The Spark",
      subtitle: "Every legend begins with a single decision",
      year: "2019",
      description: "Started with a dream and determination",
      icon: Flame,
      color: "from-sky-blue-500 to-sky-blue-600",
      motivationalText: "The journey of a thousand miles begins with a single step"
    },
    {
      id: 2,
      image: "/lovable-uploads/a2120b02-0b55-4ff2-ac59-a3ef49df1ed7.png",
      title: "The Grind",
      subtitle: "Where discipline meets dedication",
      year: "2021",
      description: "Consistency became the foundation",
      icon: Zap,
      color: "from-charcoal-500 to-charcoal-600",
      motivationalText: "Success is the sum of small efforts repeated daily"
    },
    {
      id: 3,
      image: "/lovable-uploads/dd520506-8312-4484-a9fb-754cbb9305cc.png",
      title: "The Transformation",
      subtitle: "From vision to reality",
      year: "2024",
      description: "Achieved what once seemed impossible",
      icon: Trophy,
      color: "from-lavender-500 to-lavender-600",
      motivationalText: "Your body can stand almost anything. It's your mind you have to convince"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        const scrolled = Math.max(0, windowHeight - rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);
        setScrollProgress(progress);
        
        // Update active stage based on scroll progress
        const stageIndex = Math.floor(progress * transformationJourney.length);
        setActiveStage(Math.min(stageIndex, transformationJourney.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '3s' }}
    >
      {children}
    </div>
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-sage-50 via-warm-beige-50 to-lavender-50 overflow-hidden seamless-section">
      {/* Floating Background Elements */}
      <FloatingElement delay={0} className="top-20 left-10 text-sky-blue-400/30">
        <Star size={24} />
      </FloatingElement>
      <FloatingElement delay={1000} className="top-40 right-20 text-lavender-400/30">
        <Target size={32} />
      </FloatingElement>
      <FloatingElement delay={2000} className="bottom-40 left-20 text-charcoal-400/30">
        <Heart size={28} />
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-charcoal-900 to-forest-green-600 mb-6 font-helvetica">
            The Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-zt-formom">
            Witness the transformation that inspired thousands to begin their own journey
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-muted rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-forest-green-500 via-charcoal-900 to-lavender-500 rounded-full transition-all duration-1000 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Journey Stages */}
          {transformationJourney.map((stage, index) => {
            const IconComponent = stage.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeStage >= index;
            
            return (
              <div key={stage.id} className="relative mb-32">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-white shadow-xl transition-all duration-700 ${
                    isActive 
                      ? `bg-gradient-to-r ${stage.color} scale-110` 
                      : 'bg-muted scale-90'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent 
                        size={24} 
                        className={`transition-all duration-500 ${
                          isActive ? 'text-white' : 'text-muted-foreground'
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Content Layout - Image and Text on opposite sides */}
                <div className="grid grid-cols-2 gap-16 items-center">
                  {/* Left Side */}
                  <div className={`${isLeft ? 'flex justify-end' : 'flex justify-start'}`}>
                    {isLeft ? (
                      // Image on left for odd stages (2019, 2024)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${stage.color} mb-4`}>
                          {stage.year}
                        </div>

                        {/* Image Container */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Floating Number */}
                          <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                            <span className="text-2xl font-bold text-charcoal-600">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Content on left for even stages (2021)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-3xl font-bold text-charcoal-900 mb-2 font-helvetica">
                          {stage.title}
                        </h3>
                        <h4 className="text-lg text-forest-green-600 mb-3 font-zt-formom">
                          {stage.subtitle}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4 font-zt-formom">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-sage-100 to-warm-beige-100 p-4 rounded-lg border-l-4 border-forest-green-500">
                          <p className="text-sm italic text-foreground font-zt-formom">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`${isLeft ? 'flex justify-start' : 'flex justify-end'}`}>
                    {isLeft ? (
                      // Content on right for odd stages (2019, 2024)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-3xl font-bold text-charcoal-900 mb-2 font-helvetica">
                          {stage.title}
                        </h3>
                        <h4 className="text-lg text-forest-green-600 mb-3 font-zt-formom">
                          {stage.subtitle}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4 font-zt-formom">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-sage-100 to-warm-beige-100 p-4 rounded-lg border-l-4 border-forest-green-500">
                          <p className="text-sm italic text-foreground font-zt-formom">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Image on right for even stages (2021)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${stage.color} mb-4`}>
                          {stage.year}
                        </div>

                        {/* Image Container */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Floating Number */}
                          <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                            <span className="text-2xl font-bold text-charcoal-600">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Inspiration */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto rounded-3xl p-12 text-foreground">
            <blockquote className="text-3xl font-light italic leading-relaxed mb-8 font-helvetica">
              "I wasn't born with a perfect physique. Every muscle, every achievement, every transformation story you see today was built through consistency, discipline, and an unwavering belief in the process."
            </blockquote>
            <cite className="text-xl opacity-90 font-zt-formom">— Abhiram Nair</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
