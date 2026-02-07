
import { Service, Insight, Testimonial, CaseStudy, Metric, ClientLogo, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy Consulting',
    description: 'Crafting clear roadmaps for growth and competitive advantage using data-driven insights.',
    longDescription: 'Our strategy consulting practice employs the Peak Performance Framework to identify untapped market opportunities. We analyze competitive landscapes using AI-augmented data sets to provide C-suite executives with actionable intelligence. We focus on long-term sustainability, portfolio optimization, and market entry strategies that minimize risk while maximizing shareholder value.',
    icon: 'fa-chess-queen',
    color: 'border-deepBlue',
    image: '/images/service-strategy.jpg',
    approach: [
      { title: 'Market Diagnosis', description: 'We begin with a deep-dive analysis of your market position, utilizing proprietary data scrapers to benchmark against global competitors.' },
      { title: 'Scenario Modeling', description: 'Using Monte Carlo simulations, we stress-test various strategic pivots to ensure resilience against economic downturns.' },
      { title: 'Strategic Formulation', description: 'We co-create the "North Star" vision with your executive team, defining clear OKRs and strategic pillars.' },
      { title: 'Execution Roadmap', description: 'Strategy without execution is hallucination. We deliver a week-by-week implementation plan with assigned owners.' }
    ],
    outcomes: [
      'Clear 3-5 year strategic roadmap',
      'Identification of $10M+ in new revenue opportunities',
      'Optimized business portfolio reducing risk by 25%',
      'Alignment of C-Suite on critical priorities'
    ]
  },
  {
    id: 'ops',
    title: 'Operations Optimization',
    description: 'Streamlining processes to boost efficiency and reduce operational costs effectively.',
    longDescription: 'Operations are the heartbeat of any organization. We utilize Lean Six Sigma principles combined with digital twin technology to map your current processes and identify bottlenecks. Our interventions typically result in a 20-40% increase in throughput without increasing headcount. We specialize in supply chain resilience, procurement transformation, and front-line efficiency.',
    icon: 'fa-cogs',
    color: 'border-gold',
    image: '/images/service-ops.jpg',
    approach: [
      { title: 'Process Mining', description: 'We deploy digital tools to trace the actual flow of work, uncovering hidden inefficiencies and "shadow processes".' },
      { title: 'Lean Re-engineering', description: 'We systematically remove waste (Muda) from your value chain, focusing on value-add activities.' },
      { title: 'Technology Integration', description: 'We identify where RPA (Robotic Process Automation) can replace manual data entry and repetitive tasks.' },
      { title: 'Change Management', description: 'We train your workforce on new methodologies to ensure the improvements stick long after we leave.' }
    ],
    outcomes: [
      '20-30% reduction in operational costs',
      '50% reduction in cycle times',
      'Improved supply chain resilience',
      'Higher employee satisfaction due to reduced manual toil'
    ]
  },
  {
    id: 'hr',
    title: 'HR & Talent Advisory',
    description: 'Building strong teams and leadership structures that align with your corporate culture.',
    longDescription: 'Talent is the ultimate competitive advantage. Our HR advisory services go beyond traditional personnel management. We help organizations design high-performance cultures, implement sophisticated KPI frameworks, and manage executive succession. Our proprietary "Culture Index" assessment helps align individual motivations with corporate mission statements.',
    icon: 'fa-users',
    color: 'border-gold',
    image: '/images/service-hr.jpg',
    approach: [
      { title: 'Culture Audit', description: 'We measure the invisible forces driving your organization using anonymous surveys and behavioral interviews.' },
      { title: 'Org Design 2.0', description: 'We restructure reporting lines to optimize for speed and decision-making authority rather than hierarchy.' },
      { title: 'Incentive Alignment', description: 'We redesign compensation packages to reward behaviors that actually drive long-term value.' },
      { title: 'Leadership Academy', description: 'We build bespoke training programs to turn your high-potential managers into true executives.' }
    ],
    outcomes: [
      'Reduction in voluntary turnover by 15-20%',
      'Increased internal promotion rate',
      'Clear succession plans for all Key Personnel',
      ' measurable increase in Employee Net Promoter Score (eNPS)'
    ]
  },
  {
    id: 'growth',
    title: 'Growth Solutions',
    description: 'Driving innovation and scaling businesses sustainably in new and existing markets.',
    longDescription: 'Scaling is a science, not a gamble. We provide the structural support needed for rapid expansion, including international market entry analysis, customer acquisition cost (CAC) optimization, and M&A readiness. We help startups and established firms alike navigate the "Valley of Death" between growth phases through meticulous financial modeling and brand positioning.',
    icon: 'fa-chart-line',
    color: 'border-deepBlue',
    image: '/images/service-growth.jpg',
    approach: [
      { title: 'Market Opportunity Scan', description: 'We analyze adjacencies and white spaces in the market where your core competencies can win.' },
      { title: 'Go-to-Market Strategy', description: 'We build the sales engine, defining channels, pricing strategies, and customer acquisition tactics.' },
      { title: 'Product-Market Fit Testing', description: 'We run rapid experiments to validate demand before you commit significant capital.' },
      { title: 'Scaling Infrastructure', description: 'We ensure your tech stack and operational processes can handle 10x volume.' }
    ],
    outcomes: [
      'Successful entry into new geographic or demographic markets',
      'Double-digit revenue growth year-over-year',
      'optimized Customer Acquisition Cost (CAC)',
      'Investment-ready financial models'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Marcus Thorne',
    role: 'Managing Director',
    bio: 'Former McKinsey partner with 20 years of experience in global supply chain restructuring.',
    image: '/images/team-marcus.jpg',
    specialty: 'Operational Excellence'
  },
  {
    id: 't2',
    name: 'Elena Vance',
    role: 'Chief Strategy Officer',
    bio: 'Architect of multiple Fortune 500 market entry strategies across Sub-Saharan Africa and SEA.',
    image: '/images/team-elena.jpg',
    specialty: 'Market Dynamics'
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Director of Operations',
    bio: 'Expert in Lean Six Sigma and automated manufacturing systems with a PhD in Industrial Engineering.',
    image: '/images/team-david.jpg',
    specialty: 'Process Automation'
  },
  {
    id: 't4',
    name: 'Sarah Jenkins',
    role: 'HR Advisory Lead',
    bio: 'Specialist in organizational psychology and high-performance culture design.',
    image: '/images/team-sarah.jpg',
    specialty: 'Talent Management'
  },
  {
    id: 't5',
    name: 'Amara Okafor',
    role: 'Innovation Partner',
    bio: 'Leads our Digital Transformation wing, specializing in cloud-native business models.',
    image: '/images/team-amara.jpg',
    specialty: 'Digital Transformation'
  },
  {
    id: 't6',
    name: 'Christopher Hayes',
    role: 'Senior Advisor',
    bio: 'Former board member of multiple Fortune 500 companies with expertise in corporate governance and executive compensation.',
    image: '/images/team-christopher.jpg',
    specialty: 'Corporate Governance'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'strategy-post',
    title: '5 Strategies for Sustainable Business Growth',
    category: 'Strategy',
    image: '/images/strategy1.jpg',
    summary: 'Discover the core pillars of long-term business scalability.',
    content: `
      <p class="mb-4">Sustainable growth is not merely about increasing headcount or revenue; it is about building a structural foundation that thrives under pressure. At Pinnacle, we believe growth must be intentional, measurable, and resilient.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">1. The "North Star" Alignment</h4>
      <p class="mb-4">Every growth initiative must align with a single, clear objective. When departments work in silos, growth becomes fragmented. We utilize the Balanced Scorecard methodology to ensure vertical and horizontal alignment across the entire organization.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">2. Data-Driven Agility</h4>
      <p class="mb-4">Relying on legacy reports is a recipe for stagnation. Modern growth requires real-time diagnostic analytics. By implementing AI-driven dashboards, executives can move from reactive troubleshooting to proactive strategy adjustments.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">3. Scalable Infrastructure</h4>
      <p class="mb-4">Premature scaling is the leading cause of startup failure. We help firms audit their "Break Points"—the revenue milestones where current systems will fail—and rebuild them for 10x capacity before the demand arrives.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">4. Client-Centric Innovation</h4>
      <p class="mb-4">Growth is the byproduct of solving high-value problems. By shifting from a product-led to a solution-led mindset, firms can tap into higher margin segments and increase lifetime customer value (LTV).</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">5. Talent as a Multiplier</h4>
      <p class="mb-4">The ultimate bottleneck to growth is always talent. Sustainable organizations don't just hire; they design high-performance ecosystems where top performers can multiply their impact through efficient delegation and automation.</p>
    `
  },
  {
    id: 'hr-post',
    title: 'The Future of HR in a Digital World',
    category: 'Human Resources',
    image: '/images/strategy2.jpg',
    summary: 'How digital transformation is reshaping talent management.',
    content: `
      <p class="mb-4">The traditional HR department is undergoing a radical metamorphosis. In a post-digital world, HR is no longer an administrative function; it is a strategic intelligence hub.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">The Hybrid Paradox</h4>
      <p class="mb-4">As remote work becomes normalized, the "Social Capital" of a firm is at risk. Future-ready HR leaders are focusing on "Asynchronous Culture"—building a sense of belonging and mission that exists outside of Zoom calls and office cubicles.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">Predictive Talent Analytics</h4>
      <p class="mb-4">Why do people leave? Why do they stay? Moving from gut feeling to predictive modeling allows HR to identify flight risks and high-potential leaders with mathematical precision, reducing turnover costs by up to 30%.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">AI-Human Synergy</h4>
      <p class="mb-4">Automation is not a threat to talent; it is an unlock. By automating 80% of administrative HR tasks, professionals can refocus on executive coaching, leadership development, and organizational design—the high-value tasks that AI cannot replicate.</p>
    `
  },
  {
    id: 'ops-post',
    title: 'How to Optimize Operations for Maximum Efficiency',
    category: 'Operations',
    image: '/images/strategy3.jpg',
    summary: 'Ruthless methods for cutting operational waste.',
    content: `
      <p class="mb-4">Operational efficiency is often misunderstood as "cost-cutting." In reality, true optimization is about "value-unlocking." It is the art of doing more with less friction, not just less resource.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">The Lean Digital Twin</h4>
      <p class="mb-4">We start by mapping every micro-interaction in your value chain. Using process mining tools, we create a digital twin to simulate "What-If" scenarios, ensuring that optimizations in one department don't create bottlenecks in another.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">Ruthless Simplification</h4>
      <p class="mb-4">Complexity is the enemy of efficiency. We apply the "Zero-Based" principle to every meeting, report, and approval gate. If a process does not directly add value to the end customer or the firm's strategic goals, it is eliminated.</p>
      <h4 class="text-deepBlue font-bold text-xl mb-2">Sustainable Automation</h4>
      <p class="mb-4">Automating a bad process only makes it fail faster. We first standardize, then simplify, and only then automate. This hierarchical approach ensures that your technology investment drives real ROI rather than technical debt.</p>
    `
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  { 
    id: 'cs1', 
    title: 'Supply Chain Digital Twin', 
    client: 'Global Logistics Conglomerate', 
    result: '$120M Annual Savings', 
    description: 'Faced with volatile shipping rates and unpredictable demand spikes, this Fortune 500 logistics firm was bleeding margin. We implemented a "Digital Twin" of their entire global supply chain, allowing for real-time scenario modeling. By simulating disruptions before they occurred, we optimized inventory placement and route planning, resulting in a 14% reduction in logistics spend and a 20% improvement in on-time delivery.', 
    icon: 'fa-truck-fast',
    image: '/images/case-1.jpg'
  },
  { 
    id: 'cs2', 
    title: 'Legacy Banking Modernization', 
    client: 'Heritage Financial Institution', 
    result: '200% Mobile Engagement', 
    description: 'A 100-year-old bank was losing market share to agile fintech competitors. We led a comprehensive digital transformation, migrating legacy COBOL mainframes to a cloud-native microservices architecture. We redesigned the customer UX from the ground up, launching a new mobile banking app that drove a 200% increase in daily active users and reduced customer support costs by 35% through AI-driven self-service.', 
    icon: 'fa-building-columns',
    image: '/images/case-2.jpg'
  },
  { 
    id: 'cs3', 
    title: 'Post-Merger Cultural Integration', 
    client: 'BioStream & PharmaCorp', 
    result: '95% Key Talent Retention', 
    description: 'The merger of two pharmaceutical giants threatened to stall R&D due to toxic culture clashes. We deployed our "Culture Assessment Framework" to identify friction points. By redesigning the organizational structure to empower cross-functional "Squads" rather than hierarchical silos, we not only retained 95% of key scientific talent but also accelerated the drug discovery pipeline by 6 months.', 
    icon: 'fa-handshake',
    image: '/images/case-3.jpg'
  },
  { 
    id: 'cs4', 
    title: 'Retail Expansion Intelligence', 
    client: 'Luxury Fashion Brand', 
    result: '50 New Stores, 0 Failures', 
    description: 'A high-end fashion retailer planned an aggressive expansion into Asian markets. Traditional demographic data was insufficient. We utilized geospatial AI and sentiment analysis to identify micro-locations with the highest propensity for luxury consumption. This data-driven site selection strategy led to the successful launch of 50 new flagship stores, all of which achieved profitability within 6 months.', 
    icon: 'fa-shop',
    image: '/images/case-4.jpg'
  },
  { 
    id: 'cs5', 
    title: 'Automated Manufacturing', 
    client: 'AutoBuild Co', 
    result: '25% Production Cost Reduction', 
    description: 'Facing stiff price competition, an automotive parts manufacturer needed to reduce costs without sacrificing quality. We integrated IoT sensors and Robotic Process Automation (RPA) into their assembly lines. This "Smart Factory" initiative enabled predictive maintenance, reducing downtime by 40% and cutting overall production costs by a quarter, effectively restoring their competitive margin.', 
    icon: 'fa-robot',
    image: '/images/case-5.jpg'
  },
  { 
    id: 'cs6', 
    title: 'Energy Transition Strategy', 
    client: 'EcoPower International', 
    result: '30% Renewable Portfolio', 
    description: 'An energy major needed to pivot from fossil fuels to renewables to meet investor ESG mandates. We modeled the financial viability of various green energy assets (wind, solar, hydrogen) against future regulatory scenarios. Our strategic roadmap guided the divestment of high-carbon assets and the acquisition of high-yield renewable projects, successfully rebalancing their portfolio by 30% in just 2 years.', 
    icon: 'fa-solar-panel',
    image: '/images/case-6.jpg'
  },
  { 
    id: 'cs7', 
    title: 'Customer Experience Transformation', 
    client: 'Global Insurance Provider', 
    result: '45% NPS Improvement', 
    description: 'A century-old insurance provider faced customer satisfaction ratings in the bottom quartile of their industry. We conducted a comprehensive customer journey mapping exercise, identifying 47 distinct pain points across digital and physical touchpoints. By redesigning their claims process and deploying AI-powered customer support, we reduced average claim processing time from 21 days to 4 days and increased Net Promoter Score by 45 points within 18 months.', 
    icon: 'fa-heart-pulse',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
  },
  { 
    id: 'cs8', 
    title: 'Vertical Integration Strategy', 
    client: 'Premium Consumer Goods Co', 
    result: '$85M Cost Elimination', 
    description: 'A consumer goods manufacturer was losing margin pressure due to supplier concentration. We evaluated strategic acquisition targets across their value chain and executed a bold vertical integration strategy, bringing 60% of inputs in-house. This move not only reduced supply chain vulnerability but also delivered significant cost savings through economies of scale and reduced intermediary margins.', 
    icon: 'fa-arrows-alt',
    image: '/images/case-8.jpg'
  },
  { 
    id: 'cs9', 
    title: 'Data Monetization Initiative', 
    client: 'Telecom Giant', 
    result: '$220M New Revenue Stream', 
    description: 'A telecommunications company had accumulated massive amounts of customer data but lacked the capability to monetize it responsibly. We developed a comprehensive data commercialization strategy, designing privacy-compliant products for B2B segments while maintaining customer trust. This initiative created an entirely new business unit generating over $220M in annual recurring revenue within two years.', 
    icon: 'fa-database',
    image: '/images/case-9.jpg'
  },
  { 
    id: 'cs10', 
    title: 'Mid-Market Acquisition Enablement', 
    client: 'Regional Technology Distributor', 
    result: '5 Successful Acquisitions', 
    description: 'A technology distributor wanted to grow through acquisition but lacked post-merger integration expertise. We built a comprehensive M&A playbook, provided deal screening capabilities, and managed integration of 5 sequential acquisitions totaling $450M in combined revenue. By applying consistent integration methodologies, we achieved cost synergy targets of 18-22% on each deal while maintaining 90%+ retention of key talent.', 
    icon: 'fa-handshake',
    image: '/images/case-10.jpg'
  },
  { 
    id: 'cs11', 
    title: 'Blockchain Supply Chain Network', 
    client: 'Pharmaceutical Manufacturer', 
    result: 'Anti-Counterfeit Verified', 
    description: 'Counterfeiting cost the pharmaceutical industry billions annually, and our client was losing market share in developing countries due to unverified authenticity concerns. We architected a blockchain-based supply chain network that provided immutable proof of product authenticity while maintaining regulatory compliance across 45+ countries. The solution reduced counterfeit incidence by 94% and increased market penetration in high-risk regions.', 
    icon: 'fa-link',
    image: 'https://images.unsplash.com/photo-1563986768609-7fa38ff12b23?w=400&h=400&fit=crop'
  },
  { 
    id: 'cs12', 
    title: 'Sustainability-Linked Financial Restructuring', 
    client: 'Industrial Equipment Manufacturer', 
    result: '15% WACC Reduction', 
    description: 'A legacy manufacturing company wanted to lower their cost of capital while transitioning to sustainable practices. We designed a sustainability-linked financing structure where coupon rates decreased as the company hit ESG milestones. This innovative structure not only reduced their weighted average cost of capital by 150 basis points but also accelerated the company\'s environmental transition, creating positive stakeholder alignment.', 
    icon: 'fa-leaf',
    image: '/images/case-12.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'James R.', role: 'Logistics Director', text: 'Pinnacle Consulting helped us reduce operational costs by 25% while improving efficiency.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80' },
  { id: '2', name: 'Sarah L.', role: 'CEO, Tech Frontier', text: 'Their strategic insights gave us the clarity we needed to expand into new markets.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80' },
  { id: '3', name: 'Michael K.', role: 'Operations Head', text: 'A game-changer for our supply chain management. Professional and results-oriented.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80' }
];

export const METRICS: Metric[] = [
  { label: 'Average Client ROI', value: '35%', icon: 'fa-chart-pie' },
  { label: 'Annual Growth Rate', value: '22%', icon: 'fa-arrow-trend-up' },
  { label: 'Years of Excellence', value: '15+', icon: 'fa-calendar-check' },
  { label: 'Successful Mergers', value: '50+', icon: 'fa-handshake' }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'AWS', icon: 'fa-aws' },
  { name: 'Stripe', icon: 'fa-stripe' },
  { name: 'Google', icon: 'fa-google' },
  { name: 'Microsoft', icon: 'fa-microsoft' },
  { name: 'Airbnb', icon: 'fa-airbnb' }
];
