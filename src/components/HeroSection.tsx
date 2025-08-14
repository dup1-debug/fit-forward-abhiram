import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { useTheme } from '../hooks/use-theme';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const [showAnimatedWords, setShowAnimatedWords] = useState(false);
  
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = "Abhiram Nair - Transform Your Body | Online Fitness Coach India";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimatedWords(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-start overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-charcoal-900 to-black/70' 
        : 'bg-gradient-to-br from-white via-slate-50 to-stone-50'
    }`}>
      {/* Desktop Background Image (hidden on mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block mt-8"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'url(/lovable-uploads/hero1.png)' 
            : 'url(/lovable-uploads/heroSec.png)',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black/95 via-charcoal/90 to-black/70' 
            : 'bg-gradient-to-r from-white/60 via-white/40 to-transparent'
        }`}></div>
      </div>
      
      {/* Mobile Background Image (hidden on desktop) */}
      <div 
        className="absolute inset-0 bg-cover md:hidden"
        style={{
          backgroundImage: "url(/lovable-uploads/herom2.png)",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-black/80 via-charcoal/90 to-black/85' 
            : 'bg-gradient-to-b from-slate-900/50 via-black/75 to-black/65'
        }`}></div>
      </div>
      
      {/* Bottom fade-out gradient for seamless transition to next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black to-transparent' 
          : 'bg-gradient-to-t from-slate-700/50 to-transparent'
      } z-10`}></div>

      {/* Content - Different layouts for mobile and desktop */}
      <div className={`relative z-10 w-full ${theme !== 'dark' ? 'text-shadow-md' : ''}`}>
        {/* Mobile Content - Full Screen Layout */}
        <div className="md:hidden min-h-screen flex flex-col justify-center px-6 py-4">
          {/* Main Content Container - Centered */}
          <div className="flex-1 flex flex-col justify-center space-y-4 min-h-0">
            {/* Title */}
            <h1 className={`text-3xl sm:text-4xl font-bold leading-tight tracking-tight font-helvetica uppercase opacity-0 text-center ${theme === 'dark' ? 'text-white' : 'text-white'}`} style={{animation: "fadeIn 1.5s ease-in-out 0.3s forwards"}}>
              IT'S TIME TO <br/>
              <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`} style={{animation: "fadeIn 1.5s ease-in-out 0.6s forwards"}}>
                UPGRADE
              </span><br/>
              <span className="opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 0.9s forwards"}}>
                YOURSELF
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="space-y-3 text-center">
              <p className={`opacity-0 font-medium text-lg sm:text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`} style={{animation: "fadeIn 1.5s ease-in-out 1.0s forwards"}}>
                This is <span className={`font-bold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>Abhiram,</span><br/>
                Founder of themight
              </p>
              <p className={`opacity-0 text-sm sm:text-base font-medium leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-white'}`} style={{animation: "fadeIn 1.5s ease-in-out 1.3s forwards"}}>
                Transform your body with India's leading<br/>
                online fitness transformation coach
              </p>
            </div>
            
            
            {/* Animated Text */}
            <div className="opacity-0 text-center py-2" style={{animation: "fadeIn 1.5s ease-in-out 1.6s forwards"}}>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm font-bold text-white">+ CONFIDENCE</span>
                <span className="text-sm font-bold text-white">= BETTER YOU</span>
              </div>
            </div>
          </div>
          
          {/* CTA Button - Fixed at bottom with safe area */}
          <div className="flex-shrink-0 pb-safe opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 1.9s forwards"}}>
            <button 
              onClick={scrollToForm}
              className="btn-primary text-sm sm:text-base font-bold w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Your Fitness Journey Today
            </button>
          </div>
        </div>
        
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block px-4 sm:px-6 lg:px-8 pt-20 max-w-6xl">
          <div>
            <h1 className={`mb-24 text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight font-helvetica uppercase opacity-0 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`} style={{animation: "fadeIn 1.5s ease-in-out 0.3s forwards"}}>
              IT'S TIME FOR YOU TO <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                UPGRADE
              </span> YOURSELF.
            </h1>
            <div className="space-y-3 mb-5">
              <p
                className={`text-3xl font-bold font-helvetica opacity-0 text-white`}
                style={{ animation: "fadeIn 1.5s ease-in-out 1.0s forwards" }}
              >
                This is{" "}
                <span className={`font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                  Abhiram,
                </span>{" "}
                Founder of themight
              </p>
              <p
                className={`pt-2 text-xl lg:text-2xl font-medium leading-tight max-w-3xl font-helvetica opacity-0 bg-gradient-to-r from-black/60 to-transparent py-1 rounded ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
                style={{ animation: "fadeIn 1.5s ease-in-out 1.5s forwards" }}
              >
                Transform your body with India's leading
                <br />
                online fitness transformation coach
              </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <div className={`flex flex-row justify-start items-center space-x-6 text-2xl font-extrabold font-helvetica ${
                theme === 'dark' ? 'text-white' : 'text-white'
              }`}>
                <span className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 1.8s forwards"}}>+ CONFIDENCE</span>
                <span className="text-3xl font-extrabold mx-4 opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 1.9s forwards"}}>=</span>
                <span className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 2.0s forwards"}}>BETTER YOU</span>
              </div>
              <div className="opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 2.7s forwards"}}>
                <button 
                  onClick={scrollToForm}
                  className="btn-primary text-xl font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Start Your Fitness Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;