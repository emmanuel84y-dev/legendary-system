
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [category, setCategory] = useState('Strategy');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('SUBMITTING');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('category', category);

    try {
      const response = await fetch('https://formspree.io/f/xykkklkp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('SUCCESS');
        form.reset();
      } else {
        setFormState('ERROR');
      }
    } catch (err) {
      setFormState('ERROR');
    }
  };

  return (
    <section id="contact" className="py-24 bg-lightGray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="w-full lg:w-3/5 p-10 md:p-16">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h4>
            <h2 className="text-4xl font-heading font-bold text-deepBlue mb-4">Let's Reach the Summit</h2>
            <p className="text-gray-600 mb-10 text-lg">Schedule your free 30-minute discovery call to align your vision with our execution.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-deepBlue mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-deepBlue/5 focus:border-deepBlue transition shadow-sm" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-deepBlue mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-deepBlue/5 focus:border-deepBlue transition shadow-sm" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-deepBlue mb-2 uppercase tracking-wide">Inquiry Type</label>
                <div className="flex flex-wrap gap-3">
                  {['Strategy', 'HR', 'Operations'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                        category === cat ? 'bg-deepBlue text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-deepBlue mb-2 uppercase tracking-wide">Project Details</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-deepBlue/5 focus:border-deepBlue transition shadow-sm" 
                  placeholder="What are your primary business objectives for the next 12 months?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'SUBMITTING'}
                className={`w-full font-extrabold py-5 rounded-xl transition-all shadow-xl active:scale-[0.98] ${
                  formState === 'SUBMITTING' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gold text-deepBlue hover:bg-deepBlue hover:text-white'
                }`}
              >
                {formState === 'SUBMITTING' ? 'Transmission in Progress...' : 'Book Discovery Call'}
              </button>

              {formState === 'SUCCESS' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl font-bold flex items-center gap-3 animate-fade-in">
                  <i className="fas fa-check-circle"></i> Strategy Request Received. We'll be in touch within 24 hours.
                </div>
              )}
              {formState === 'ERROR' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl font-bold flex items-center gap-3 animate-fade-in">
                  <i className="fas fa-exclamation-triangle"></i> Something went wrong. Please try emailing us directly.
                </div>
              )}
            </form>
          </div>

          <div className="w-full lg:w-2/5 bg-deepBlue text-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold rounded-full opacity-10"></div>
            
            <h3 className="text-3xl font-bold mb-10 relative z-10">Peak Contact Info</h3>
            
            <address className="not-italic space-y-8 text-lg relative z-10">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 text-gold group-hover:bg-gold group-hover:text-deepBlue transition-all">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span className="block font-bold text-xs text-silver uppercase tracking-widest mb-1">Inquiries</span>
                  <a href="mailto:info@pinnacleconsulting.com" className="hover:text-gold transition break-all">info@pinnacleconsulting.com</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 text-gold group-hover:bg-gold group-hover:text-deepBlue transition-all">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <span className="block font-bold text-xs text-silver uppercase tracking-widest mb-1">Direct Line</span>
                  <a href="tel:+23412345678" className="hover:text-gold transition">+234 123 4567</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 text-gold group-hover:bg-gold group-hover:text-deepBlue transition-all">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <span className="block font-bold text-xs text-silver uppercase tracking-widest mb-1">LinkedIn</span>
                  <a href="#" className="hover:text-gold transition">Pinnacle Consulting Official</a>
                </div>
              </div>
            </address>

            <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Strategic Hours</h4>
              <p className="text-silver mb-2">Mon - Fri: 09:00 — 18:00 (WAT)</p>
              <p className="text-silver">Weekend: By Appointment Only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
