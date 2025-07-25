import { Instagram, Mail, Phone } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-12 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black to-charcoal-900' 
        : 'bg-gradient-to-br from-strong-green-50 to-strong-green-100'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-charcoal'
            }`}>themight</h3>
            <p className={`max-w-md mx-auto font-bold ${
              theme === 'dark' ? 'text-slate-300' : 'text-strong-green-800'
            }`}>
              Transform your body, transform your life. India's leading online fitness transformation coach.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://instagram.com/abhiramnair" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-electric-blue to-strong-green' 
                  : 'bg-gradient-to-r from-strong-green to-charcoal'
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:coach@themight.com"
              className={`w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-strong-green to-electric-blue' 
                  : 'bg-gradient-to-r from-charcoal to-strong-green'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className={`text-sm font-bold ${
            theme === 'dark' ? 'text-slate-300' : 'text-strong-green-800'
          }`}>
            © {new Date().getFullYear()} themight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
