import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { NavItem, Project, Skill, SocialLink, Experience, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Alex Dev",
  role: "Creative Frontend Engineer",
  description: "I build accessible, pixel-perfect, secure, and performant web experiences using modern technologies.",
};

export const SKILLS: Skill[] = [
  { 
    name: 'React', 
    category: 'frontend', 
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    name: 'TypeScript', 
    category: 'frontend', 
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  { 
    name: 'Tailwind CSS', 
    category: 'frontend', 
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },
  { 
    name: 'Node.js', 
    category: 'backend', 
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'PostgreSQL', 
    category: 'backend', 
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  { 
    name: 'Figma', 
    category: 'design', 
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  { 
    name: 'Docker', 
    category: 'tools', 
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  { 
    name: 'Next.js', 
    category: 'frontend', 
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Ecommerce',
    description: 'A full-featured ecommerce dashboard with real-time analytics, inventory management, and dark mode support.',
    tags: ['React', 'Tailwind', 'Supabase'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'AI Chat Interface',
    description: 'A responsive chat interface for LLMs featuring streaming responses, markdown support, and chat history.',
    tags: ['Next.js', 'OpenAI API', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Crypto Portfolio',
    description: 'Real-time cryptocurrency tracking application with interactive charts and portfolio balancing tools.',
    tags: ['Vue', 'D3.js', 'Firebase'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: '#',
    github: '#',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard. Improved performance by 40%."
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2019 - 2021",
    description: "Developed award-winning landing pages and interactive campaigns for global brands."
  },
  {
    role: "Junior Web Developer",
    company: "Startup Inc",
    period: "2018 - 2019",
    description: "Collaborated on the MVP launch of a fintech mobile-first web application."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { platform: 'Email', url: 'mailto:hello@example.com', icon: Mail },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Inc.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Alex is an exceptional developer who truly cares about the user experience. The dashboard he built for us not only looks stunning but also performs flawlessly under high load.",
    rating: 5
  },
  {
    id: '2',
    name: "Michael Chen",
    role: "CTO",
    company: "Startup Sphere",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with Alex was a game-changer for our MVP. His ability to translate complex requirements into intuitive interfaces is unmatched. Highly recommended!",
    rating: 5
  },
  {
    id: '3',
    name: "Emily Davis",
    role: "Creative Director",
    company: "Design & Co.",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "It's rare to find a developer with such a strong eye for design. Alex perfectly captured our brand aesthetic while ensuring the site remained accessible and fast.",
    rating: 5
  }
];