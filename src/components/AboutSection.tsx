import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/use-theme';
import { useIsMobile } from '../hooks/use-mobile';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/J1.jpg",
      title: "Day Zero",
      subtitle: "The moment everything changed",
      year: "2017",
      description: "Just a scrawny kid ready for change"
    },
    {
      id: 2,
      image: "/lovable-uploads/J3.jpg",
      title: "The Grind",
      subtitle: "Where discipline builds character",
      year: "2019",
      description: "Every rep counted, every meal mattered"
    },
    {
      id: 3,
      image: "/lovable-uploads/J2.jpg",
      title: "The Breakthrough", 
      subtitle: "When everything clicks",
      year: "2020",
      description: "Saying 'NO' became my superpower"
    },
    {
      id: 4,
      image: "/lovable-uploads/J4.jpg",
      title: "The Evolution",
      subtitle: "Becoming unstoppable",
      year: "2025",
      description: "Mind and body transformed completely"
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
  }, [transformationJourney.length]);

  return (
    <section ref={sectionRef} className={`relative min-h-screen overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-zinc-950/95 to-black' 
        : 'bg-gradient-to-br from-white via-slate-50/95 to-gray-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-10 blur-3xl ${
          theme === 'dark' ? 'bg-electric-blue' : 'bg-strong-green'
        } animate-pulse`}></div>
        <div className={`absolute bottom-1/4 -right-32 w-64 h-64 rounded-full opacity-10 blur-3xl ${
          theme === 'dark' ? 'bg-amber-gold' : 'bg-blue-500'
        } animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center pb-16">
          <h2 className={`font-serif text-4xl font-bold tracking-tight sm:text-5xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
            The <span className={`${theme === 'dark' ? "text-electric-blue" : "text-strong-green"} bg-gradient-to-r ${
              theme === 'dark' ? 'from-electric-blue to-amber-gold' : 'from-strong-green to-blue-600'
            } bg-clip-text text-transparent`}>Journey</span>
          </h2>
          <p className={`text-xl leading-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            From ordinary to extraordinary
          </p>
        </div>

        {/* Journey Container */}
        {isMobile ? (
          // Mobile Layout - Cinematic Cards
          <div className="space-y-12">
            {transformationJourney.map((stage, index) => {
              const isActive = activeStage >= index;
              const delay = index * 0.2;
              
              return (
                <div 
                  key={stage.id} 
                  className={`relative transition-all duration-1000 ease-out ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${delay}s` }}
                >
                  {/* Year Badge */}
                  <div className="text-center mb-6">
                    <span className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-bold ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-zinc-900 to-black border border-electric-blue/30 text-white shadow-lg shadow-electric-blue/20' 
                        : 'bg-gradient-to-r from-white to-gray-50 border border-strong-green/30 text-gray-900 shadow-lg shadow-strong-green/20'
                    }`}>
                      {stage.year}
                    </span>
                  </div>

                  {/* Image with Overlay */}
                  <div className="relative group mb-6">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={stage.image}
                        alt={`Abhiram's transformation - ${stage.title}`}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        theme === 'dark' 
                          ? 'from-black/80 via-transparent to-transparent' 
                          : 'from-black/60 via-transparent to-transparent'
                      }`}></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{stage.description}</p>
                      </div>
                      
                      {/* Subtle border animation */}
                      <div className={`absolute inset-0 rounded-3xl border-2 ${
                        theme === 'dark' ? 'border-electric-blue/20' : 'border-strong-green/20'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Desktop Layout - Horizontal Cinematic Timeline
          <div className="relative">
            {/* Background Progress Line */}
            <div className={`absolute top-1/2 left-0 right-0 h-1 ${
              theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'
            } rounded-full transform -translate-y-1/2`}>
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-electric-blue via-amber-gold to-electric-blue' 
                    : 'from-strong-green via-blue-500 to-strong-green'
                }`}
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Journey Stages */}
            <div className="grid grid-cols-4 gap-8">
              {transformationJourney.map((stage, index) => {
                const isActive = activeStage >= index;
                const delay = index * 0.3;
                
                return (
                  <div 
                    key={stage.id} 
                    className={`relative transition-all duration-1000 ease-out ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${delay}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className={`w-16 h-16 rounded-full border-4 ${
                        theme === 'dark' ? 'border-zinc-800' : 'border-gray-300'
                      } transition-all duration-700 ${
                        isActive 
                          ? `bg-gradient-to-r ${
                              theme === 'dark' 
                                ? 'from-electric-blue to-amber-gold' 
                                : 'from-strong-green to-blue-500'
                            } scale-110 shadow-lg ${
                              theme === 'dark' ? 'shadow-electric-blue/30' : 'shadow-strong-green/30'
                            }` 
                          : `${theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-100'} scale-90`
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <span className={`text-sm font-bold ${
                            isActive ? 'text-white' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {stage.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`${index % 2 === 0 ? 'mb-32' : 'mt-32'} group cursor-pointer`}>
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-6">
                        <img 
                          src={stage.image}
                          alt={`Abhiram's transformation - ${stage.title}`}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Hover Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${
                          theme === 'dark' 
                            ? 'from-black/90 via-black/50 to-transparent' 
                            : 'from-black/70 via-black/30 to-transparent'
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-lg font-bold mb-1">{stage.title}</h3>
                          <p className="text-xs opacity-90">{stage.description}</p>
                        </div>
                        
                        {/* Active State Border */}
                        {isActive && (
                          <div className={`absolute inset-0 rounded-2xl border-2 ${
                            theme === 'dark' ? 'border-electric-blue/40' : 'border-strong-green/40'
                          } animate-pulse`}></div>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="text-center space-y-2">
                        <h3 className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        } group-hover:${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} transition-colors duration-300`}>
                          {stage.title}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Final Inspiration */}
        <div className="text-center mt-24">
          <div className={`max-w-4xl mx-auto rounded-3xl p-12 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-black/90 via-zinc-900/90 to-black/90 border border-electric-blue/20 shadow-2xl shadow-electric-blue/10' 
              : 'bg-gradient-to-r from-white/90 via-gray-50/90 to-white/90 border border-strong-green/20 shadow-2xl shadow-strong-green/10'
          } backdrop-blur-sm`}>
            <blockquote className={`text-3xl sm:text-4xl font-serif font-light italic leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Don't be special, <br/>
              <span className={`bg-gradient-to-r ${
                theme === 'dark' ? 'from-amber-gold to-electric-blue' : 'from-strong-green to-blue-600'
              } bg-clip-text text-transparent font-bold`}>Be stubborn.</span>
            </blockquote>
            <cite className={`text-xl font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              — Abhiram Nair
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
