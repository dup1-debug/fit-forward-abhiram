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
        ? 'bg-gradient-to-br from-black via-charcoal-900 to-black' 
        : 'bg-gradient-to-br from-white via-slate-50 to-stone-50'
    }`}>
      {/* Desktop Background Image (hidden on mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block mt-8"
        style={{
          backgroundImage: 'url(/lovable-uploads/hero1.png)',
          backgroundPosition: 'right center',
          backgroundSize: 'cover'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black/95 via-charcoal/90 to-black/70' 
            : 'bg-gradient-to-r from-charcoal/80 via-charcoal/70 to-black/30'
        }`}></div>
      </div>
      
      {/* Mobile Background Image (hidden on desktop) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url(/lovable-uploads/hero%20sec%20mobile.png)",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-black/95 via-charcoal/85 to-black/70' 
            : 'bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-black/60'
        }`}></div>
      </div>

      {/* Content - Different layouts for mobile and desktop */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-20">
        {/* Mobile Content (centered, stacked) */}
        <div className="md:hidden min-h-screen flex flex-col justify-center">
          <div className={`${theme === 'dark' ? 'text-white' : 'text-white'} space-y-10 text-center -mt-16`}>
            <div className="space-y-8 animate-fade-in">
              <h1 className={`mt-5 text-4xl font-bold leading-tight tracking-tight font-serif`}>
                Transform Your
                <span className={`block mt-3 animate-fade-in [animation-delay:200ms] ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>Body & Mind</span>
              </h1>
              <p>
                IT'S TIME FOR YOU TO UPGRADE YOURSELF
              </p>
            </div>
            
            <div className="pt-6 opacity-0 animate-fade-in [animation-delay:600ms] [animation-fill-mode:forwards]">
              <button 
                onClick={scrollToForm}
                className={`btn-primary text-lg font-bold w-full max-w-xs mx-auto py-4 px-6 rounded-full shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95 group`}
              >
                <span className="relative z-10">Start Your Fitness Journey Today</span>
              </button>
            </div>
            
            {/* Stats - Card Style for Mobile */}
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto opacity-0 animate-fade-in [animation-delay:800ms] [animation-fill-mode:forwards]">
              <div className={`backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-charcoal/80 hover:bg-charcoal/90' 
                  : 'bg-black/50 hover:bg-black/60'
              }`}>
                <div className={`text-2xl font-bold mb-1 font-serif ${
                  theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                }`}>500+</div>
                <div className={`text-xs font-medium font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-300'
                }`}>TRANSFORMED</div>
              </div>
              <div className={`backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-charcoal/80 hover:bg-charcoal/90' 
                  : 'bg-black/50 hover:bg-black/60'
              }`}>
                <div className="text-2xl font-bold text-warm-orange mb-1 font-serif">95%</div>
                <div className={`text-xs font-medium font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-300'
                }`}>SUCCESS RATE</div>
              </div>
              <div className={`backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-charcoal/80 hover:bg-charcoal/90' 
                  : 'bg-black/50 hover:bg-black/60'
              }`}>
                <div className={`text-2xl font-bold mb-1 font-serif ${
                  theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                }`}>24/7</div>
                <div className={`text-xs font-medium font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-300'
                }`}>SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block max-w-6xl">
          <div className={`${theme === 'dark' ? 'text-white' : 'text-white'} space-y-8 animate-fade-in`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight font-serif uppercase">
                <span className="opacity-70 inline">YOUR BODY DESERVES </span>
                <span
                  className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} font-extrabold tracking-wide inline transition-opacity duration-[7000ms] ${showAnimatedWords ? 'fade-in-only' : 'opacity-0'}`}
                >
                  BETTER.
                </span>
                <span className="opacity-70 inline"> SO DO </span>
                <span
                  className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} font-extrabold inline transition-opacity duration-[7000ms] ${showAnimatedWords ? 'fade-in-only' : 'opacity-0'}`}
                >
                  YOU.
                </span>
              </h1>
              <div className="space-y-3">
                <p className={`text-2xl font-bold font-helvetica ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}>
                  Hi, I'm <span className={`font-semibold ${
                    theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                  }`}>Abhiram,</span> Founder of themight
                </p>
                <p className={`text-lg lg:text-xl font-light leading-tight max-w-3xl font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-300'
                }`}>
                  Transform your body with India's leading <br /> online fitness transformation coach
                </p>
              </div>
            </div>
            
            <div>
              <button 
                onClick={scrollToForm}
                className="btn-primary text-xl font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className={`text-4xl font-bold mb-2 font-serif ${
                  theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                }`}>500+</div>
                <div className={`text-sm font-medium font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-300'
                }`}>TRANSFORMED</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-warm-orange mb-2 font-serif">95%</div>
                <div className={`text-sm font-medium font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-300'
                }`}>SUCCESS RATE</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className={`text-4xl font-bold mb-2 font-serif ${
                  theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                }`}>24/7</div>
                <div className={`text-sm font-medium font-helvetica ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-300'
                }`}>SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;