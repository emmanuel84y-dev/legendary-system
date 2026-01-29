
import React from 'react';

interface MethodsViewProps {
  onGoBack: () => void;
  onGoToContact: () => void;
}

const MethodsView: React.FC<MethodsViewProps> = ({ onGoBack, onGoToContact }) => {
  const steps = [
    { 
      title: 'Base Camp: Discovery', 
      desc: 'We begin by immersing ourselves in your ecosystem to establish a comprehensive baseline. Beyond just financial data, we conduct stakeholder interviews and cultural assessments to understand the hidden dynamics of your organization. This deep dive ensures that our strategy is built on empirical "ground truth" rather than assumptions, identifying both the visible challenges and the latent opportunities that lie beneath the surface.' 
    },
    { 
      title: 'Mapping the Ridge', 
      desc: 'With a clear baseline established, we move to a rigorous diagnostic phase. We utilize proprietary benchmarking tools and forensic data analysis to identify structural inefficiencies, competitive gaps, and value leakage. This stage is about pinpointing the specific "break points" in your value chain that are hindering growth, separating symptomatic issues from the underlying root causes.' 
    },
    { 
      title: 'The Ascent Plan', 
      desc: 'We translate insights into action by co-creating a detailed, multi-phase implementation roadmap. This isn\'t just a high-level strategy deck; it is a granular operational plan defining critical milestones, resource allocation, and key performance indicators. We balance immediate "quick wins" with long-term structural transformation to ensure momentum is generated early and sustained throughout the journey.' 
    },
    { 
      title: 'Summit Push', 
      desc: 'Execution is where most strategies fail, which is why we embed our consultants directly alongside your teams. We provide hands-on support to drive the initiative, managing change resistance and troubleshooting real-time challenges. Acting as force multipliers, we ensure that new processes are adopted and that the strategic vision is translated into daily operational reality.' 
    },
    { 
      title: 'Establishing the Plateau', 
      desc: 'Reaching the summit is only the first step; sustaining high performance is the ultimate goal. We focus on institutionalizing the changes through rigorous documentation, automated KPI dashboards, and knowledge transfer. By building internal capability and establishing continuous improvement loops, we ensure that the gains are locked in and your organization is resilient against future market shifts.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        <button onClick={onGoBack} className="text-deepBlue font-bold hover:text-gold transition mb-12 flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>

        <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-deepBlue mb-8 leading-tight">
          The <span className="text-gold">Peak Performance</span> Framework
        </h1>
        
        <p className="text-xl text-gray-600 mb-20 leading-relaxed max-w-3xl">
          We don't believe in generic advice. Our methodology is built on the same principles used by top global firms (McKinsey, BCG, Bain), but adapted for the agility required in today's digital economy.
        </p>

        <div className="relative ml-4 md:ml-8 space-y-16">
          {/* Timeline Connector Line - Starts at center of 1st point, ends at center of last point */}
          <div className="absolute left-0 top-[20px] bottom-[20px] w-1 bg-gold"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-12">
              <div className="absolute -left-[18px] top-0 w-10 h-10 rounded-full bg-deepBlue text-gold flex items-center justify-center font-bold shadow-lg border-4 border-white z-10">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-deepBlue mb-3">{step.title}</h3>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-deepBlue p-10 md:p-16 rounded-[3rem] text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready for your Ascent?</h2>
          <p className="text-silver text-lg mb-10 max-w-2xl mx-auto">Our structured approach ensures that no stone is left unturned in your pursuit of operational excellence.</p>
          <button onClick={onGoToContact} className="inline-block px-10 py-4 bg-gold text-deepBlue font-bold rounded-full hover:bg-white transition-all">
            Book Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default MethodsView;
