
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-heading font-bold mb-8">PINNACLE <span className="text-gold">.</span></h2>
            <p className="text-silver text-lg leading-relaxed mb-8 opacity-80">
              A premier advisory firm dedicated to helping businesses navigate global complexity and achieve the absolute summit of their potential.
            </p>
            <div className="flex space-x-5">
              {['linkedin-in', 'twitter', 'facebook-f', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-deepBlue transition-all duration-300 shadow-xl"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b-2 border-gold max-w-max pb-2">Expertise</h4>
            <ul className="space-y-4 text-silver text-base">
              <li><a href="#" className="hover:text-gold transition">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-gold transition">Operations Excellence</a></li>
              <li><a href="#" className="hover:text-gold transition">HR & Talent Strategy</a></li>
              <li><a href="#" className="hover:text-gold transition">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-gold transition">Mergers & Acquisitions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b-2 border-gold max-w-max pb-2">Navigation</h4>
            <ul className="space-y-4 text-silver text-base">
              <li><a href="#home" className="hover:text-gold transition">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition">Our Mission</a></li>
              <li><a href="#services" className="hover:text-gold transition">Consulting Services</a></li>
              <li><a href="#insights" className="hover:text-gold transition">Insights & Research</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Book Discovery Call</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b-2 border-gold max-w-max pb-2">Global HQ</h4>
            <div className="space-y-6 text-silver">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-gold mt-1"></i>
                <p>123 Business Summit Plaza,<br />Financial District, Lagos,<br />Nigeria.</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-gold mt-1"></i>
                <p>+234 (0) 123-456-7890</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-clock text-gold mt-1"></i>
                <p>9:00 AM — 6:00 PM (WAT)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-silver text-sm">
          <p className="mb-6 md:mb-0 opacity-60">© {new Date().getFullYear()} Pinnacle Consulting Group. All Rights Reserved.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition opacity-60 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:text-white transition opacity-60 hover:opacity-100">Terms of Service</a>
            <a href="#" className="hover:text-white transition opacity-60 hover:opacity-100">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
