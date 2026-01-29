
import React from 'react';
import { TEAM } from '../data';

interface TeamViewProps {
  onGoBack: () => void;
}

const TeamView: React.FC<TeamViewProps> = ({ onGoBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={onGoBack} className="text-deepBlue font-bold hover:text-gold transition mb-12 flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>

        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-deepBlue mb-6">
            Meet the <span className="text-gold">Partners</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collective of senior advisors, data scientists, and industry veterans dedicated to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="group">
              <div className="relative h-96 mb-6 overflow-hidden rounded-3xl shadow-xl">
                {/* Fallback color if images not uploaded yet */}
                <div className="absolute inset-0 bg-slate-200"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-deepBlue via-transparent to-transparent opacity-60"></div>
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{member.specialty}</span>
              <h3 className="text-2xl font-bold text-deepBlue mb-1">{member.name}</h3>
              <p className="text-gray-500 font-bold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamView;
