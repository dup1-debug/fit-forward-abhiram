
const VSLSection = () => {
  return (
    <section id="vsl" className="py-20 relative overflow-hidden">
      {/* Background with backdrop filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-charcoal-600/80 backdrop-blur-sm"></div>
      </div>
      {/* Top gradient for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/80 to-transparent z-[1]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See How Others Got{' '}
            <span className="text-sky-blue-400">
              Transformed
            </span>
          </h2>
          <p className="text-warm-beige-100 text-xl max-w-3xl mx-auto">
            Watch real transformation stories from India's leading online fitness coach
          </p>
        </div>
        
        {/* YouTube Video */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Online fitness transformation coach India - Abhiram Nair journey"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-lavender-500 text-white hover:bg-lavender-600 px-10 py-4 rounded-full text-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Fitness Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
