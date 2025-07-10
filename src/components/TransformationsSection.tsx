import { useState, useEffect } from 'react';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);

  const transformations = [
    {
      name: "Ajay",
      age: 28,
      location: "Creator",
      beforeImg: "/testimonials/Ajay/a.jpg",
      afterImg: "/testimonials/Ajay/b.jpg",
      results: "Fittest Food Consultant",
      timeframe: "4 months",
      testimonial: "Being a food consultant, dieting is impossible for me :)) But, Abhiram made it work for me. Now I'm probably the fittest food consultant out there xD",
    },
    {
      name: "Akshay",
      age: 32,
      location: "IT Professional", 
      beforeImg: "/testimonials/Akshay/a.JPG",
      afterImg: "/testimonials/Akshay/b.JPG",
      results: "Enhanced Athletic Performance",
      timeframe: "5 months",
      testimonial: "I was much better at my sport (cricket), much better functionality; I love to hike, I was way better at it. Best decision I've made.",
    },
    {
      name: "Alok",
      age: 24,
      location: "IT Professional",
      beforeImg: "/testimonials/Alok/a.jpg",
      afterImg: "/testimonials/Alok/b.png",
      results: "Mental & Physical Transformation",
      timeframe: "6 months",
      testimonial: "Abhiram made me mentally stronger and I understand the core values to staying fit. He made me understand that this is a lifestyle choice.",
    },
    {
      name: "Ashwath",
      age: 25,
      location: "IT Professional",
      beforeImg: "/testimonials/Ashwath/a.JPG",
      afterImg: "/testimonials/Ashwath/b.JPG",
      results: "Strength & Functional Fitness",
      timeframe: "4 months",
      testimonial: "Banger program, helped me get in shape, squat SHIT heavy and do more pull ups which is exactly what I wanted.",
    },
    {
      name: "Karavi",
      age: 28,
      location: "Musician",
      beforeImg: "/testimonials/Karavi/a.JPG",
      afterImg: "/testimonials/Karavi/b.JPG",
      results: "Complete Body Transformation",
      timeframe: "5 months",
      testimonial: "The program perfectly balanced my creative lifestyle with fitness goals. Sustainable approach that actually works long-term.",
    },
    {
      name: "Nabeel",
      age: 27,
      location: "IT Professional",
      beforeImg: "/testimonials/Nabeel/a.JPG",
      afterImg: "/testimonials/Nabeel/b.JPG",
      results: "Lean & Strong Physique",
      timeframe: "4 months",
      testimonial: "Abhiram's program is amazing, best part is the fact that there's no BS, it's straight to the point.",
    },
    {
      name: "Rahul",
      age: 29,
      location: "Assistant Professor",
      beforeImg: "/testimonials/Rahul/a.png",
      afterImg: "/testimonials/Rahul/b.jpeg",
      results: "7kg Muscle Gain",
      timeframe: "6 months",
      testimonial: "I was always skinny and could never figure out the eating part. This program made it easier and way less complicated, I was able to put on over 7kgs in muscle working with Coach Abhiram.",
    },
    {
      name: "Vinod",
      age: 32,
      location: "Professional",
      beforeImg: "/testimonials/Vinod/a.JPG",
      afterImg: "/testimonials/Vinod/b.JPG",
      results: "Lost 10kg Fat, Gained 5kg Muscle",
      timeframe: "7 months",
      testimonial: "I was overweight in the past. Abhiram's - themight program changed everything for me, I lost over 10kgs in fat and put on over 5kgs of muscle.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileCarouselIndex((prev) => (prev + 1) % transformations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [transformations.length]);

  const cardsPerPage = 4;
  const totalPages = Math.ceil(transformations.length / cardsPerPage);
  const displayedTransformations = transformations.slice(
    currentPage * cardsPerPage, 
    (currentPage * cardsPerPage) + cardsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <div id="transformations">
      {/* Mobile & Tablet Section */}
      <section className="block lg:hidden section-padding bg-gradient-to-br from-cream-warm via-stone-light to-cream-warm relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-8 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-24 left-6 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-accent rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mobile Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
              Real <span className="text-secondary">Transformations</span>
            </h2>
            <div className="h-2 w-20 bg-secondary rounded-full mx-auto"></div>
            <p className="mt-4 text-stone-gray leading-relaxed font-semibold text-lg sm:text-xl mx-4 sm:mx-8">
              See how our clients achieved amazing results with personalized coaching
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="mb-10">
            <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl mx-4 sm:mx-8 border border-stone-gray/20">
              <div className="relative h-64 sm:h-80">
                {/* Carousel Images */}
                <div className="flex transition-transform duration-500 ease-in-out h-full"
                     style={{ transform: `translateX(-${mobileCarouselIndex * 100}%)` }}>
                  {transformations.map((transformation, index) => (
                    <div key={index} className="min-w-full h-full flex">
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.beforeImg}
                          alt={`${transformation.name} before`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">BEFORE</span>
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.afterImg}
                          alt={`${transformation.name} after`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">AFTER</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Transformation Info */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-cream-warm to-stone-light">
                <div className="text-center space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">
                    {transformations[mobileCarouselIndex].name}
                  </h3>
                  <div className="flex justify-center space-x-3 text-sm text-stone-gray">
                    <span className="bg-white/80 px-2 py-1 rounded-full shadow text-xs sm:text-sm">
                      {transformations[mobileCarouselIndex].age} years
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-sm sm:text-lg font-bold text-secondary">
                      {transformations[mobileCarouselIndex].results}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-gray font-medium">
                      Timeline: {transformations[mobileCarouselIndex].timeframe}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Carousel Indicators */}
              <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileCarouselIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      mobileCarouselIndex === index ? 'bg-primary w-4 sm:w-6' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Section */}
      <section className="hidden lg:block section-padding bg-gradient-to-br from-cream-warm via-stone-light to-cream-warm relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-44 h-44 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
          <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-primary rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Desktop Header Section */}
          <div className="text-start mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-3 leading-tight">
              Real <span className="text-secondary">Transformations</span>
            </h2>
            <div className="h-2 w-24 bg-secondary rounded-full"></div>
            <p className="mt-3 text-stone-gray leading-relaxed font-semibold text-xl max-w-2xl">
              See how our clients achieved their fitness transformation journey with personalized coaching
            </p>
          </div>

          {/* Desktop Featured Transformation */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                  <img 
                    src={transformations[activeTransformation].beforeImg}
                    alt={`${transformations[activeTransformation].name} before transformation`}
                    className="w-full h-80 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105 bg-white/80"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">BEFORE</span>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={transformations[activeTransformation].afterImg}
                    alt={`${transformations[activeTransformation].name} after transformation`}
                    className="w-full h-80 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105 bg-white/80"
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">AFTER</span>
                  </div>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {transformations[activeTransformation].name}
                  </h3>
                  <p className="text-stone-gray leading-relaxed">
                    {transformations[activeTransformation].age} years • {transformations[activeTransformation].location}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-lg font-bold text-secondary">
                    {transformations[activeTransformation].results}
                  </div>
                  <div className="text-stone-gray leading-relaxed">
                    Timeline: {transformations[activeTransformation].timeframe}
                  </div>
                </div>

                <blockquote className="text-base italic text-stone-gray leading-relaxed font-light border-l-4 border-primary pl-4 bg-white/60 p-3 rounded-r-lg shadow-md">
                  "{transformations[activeTransformation].testimonial}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Desktop Transformation Gallery - Compact */}
          <div className="relative max-w-7xl mx-auto">
            {/* Gallery Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                More Success Stories
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto"></div>
            </div>

            {/* Compact Sliding Gallery Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div key={pageIndex} className="min-w-full py-6 px-4">
                    <div className="grid grid-cols-4 gap-4">
                      {transformations.slice(pageIndex * cardsPerPage, (pageIndex * cardsPerPage) + cardsPerPage).map((transformation, index) => {
                        const actualIndex = pageIndex * cardsPerPage + index;
                        return (
                          <div 
                            key={actualIndex}
                            className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl 
                            bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex flex-col h-[240px] group border
                            ${activeTransformation === actualIndex ? 'ring-3 ring-primary shadow-xl scale-105 border-primary/30' : 'hover:shadow-xl border-stone-gray/20'}`}
                            onClick={() => setActiveTransformation(actualIndex)}
                          >
                            <div className="relative h-[150px] p-2">
                              <div className="grid grid-cols-2 gap-2 h-full">
                                <div className="relative rounded-lg overflow-hidden border-2 border-stone-gray/20">
                                  <img 
                                    src={transformation.beforeImg}
                                    alt={`${transformation.name} before`}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                  />
                                  <div className="absolute top-1 left-1">
                                    <span className="bg-secondary text-white px-1 py-0.5 rounded text-xs font-bold shadow">BEFORE</span>
                                  </div>
                                </div>
                                <div className="relative rounded-lg overflow-hidden border-2 border-stone-gray/20">
                                  <img 
                                    src={transformation.afterImg}
                                    alt={`${transformation.name} after`}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                  />
                                  <div className="absolute top-1 right-1">
                                    <span className="bg-primary text-white px-1 py-0.5 rounded text-xs font-bold shadow">AFTER</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center p-3 border-t border-stone-gray/20 flex flex-col justify-center h-[90px] space-y-1">
                              <h4 className="font-bold text-primary text-base group-hover:text-secondary transition-colors">
                                {transformation.name}
                              </h4>
                              <p className="text-xs text-secondary font-semibold">
                                {transformation.results}
                              </p>
                              <p className="text-xs text-stone-gray">
                                {transformation.timeframe}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Navigation Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              {/* Left Arrow */}
              <button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-forest-dark hover:to-terracotta-dark text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                onClick={goToPrevPage}
                aria-label="Previous transformations"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPage === index 
                        ? "w-6 bg-gradient-to-r from-primary to-secondary shadow-lg" 
                        : "w-2 bg-stone-gray hover:bg-primary"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-forest-dark hover:to-terracotta-dark text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                onClick={goToNextPage}
                aria-label="Next transformations"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransformationsSection;
