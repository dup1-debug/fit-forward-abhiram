import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-forest-green-500 to-forest-green-700 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-helvetica">themight</h3>
            <p className="text-green-100 max-w-md mx-auto font-zt-formom">
              Transform your body, transform your life. India's leading online fitness transformation coach.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://instagram.com/abhiramnair" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 text-white bg-gradient-to-r from-charcoal-700 to-charcoal-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:coach@themight.com"
              className="w-10 h-10 text-white bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="text-green-100 text-sm space-y-1 font-zt-formom">
            <p>coach@themight.com</p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-green-400 mt-8 pt-6 text-center">
          <p className="text-green-200 text-sm font-zt-formom">
            © 2025 themight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
