
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  image: string; // Added image field
  approach: { title: string; description: string }[];
  outcomes: string[];
}

export interface Insight {
  id: string;
  title: string;
  category: 'Strategy' | 'Human Resources' | 'Operations';
  image: string;
  summary: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  result: string;
  description: string;
  icon: string;
  image: string; // Added image property for case studies
}

export interface Metric {
  label: string;
  value: string;
  icon: string;
}

export interface ClientLogo {
  name: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}
