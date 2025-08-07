// Navigation data
export const HOME_NAV_ITEMS = [
  { id: 'about', label: 'About', action: 'scrollToSection' },
  { id: 'screenshots', label: 'Screenshots', action: 'scrollToSection' },
  { id: 'tech-blog', label: 'Tech Blog', action: 'scrollToSection' },
];

export const LEGAL_NAV_ITEMS = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'terms', label: 'Terms', to: '/terms' },
  { id: 'privacy', label: 'Privacy', to: '/privacy' },
];

// Social links
export const SOCIAL_LINKS = [
  {
    name: "Discord",
    icon: "💬",
    url: "#discord",
    description: "Join our community server"
  },
  {
    name: "LinkedIn",
    icon: "💼",
    url: "#linkedin",
    description: "Connect with us professionally"
  },
  {
    name: "Email",
    icon: "📧",
    url: "mailto:yumemi.inquiries@gmail.com",
    description: "Direct inquiries and feedback"
  }
];

// Quick links
export const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Join Beta', href: '#beta-signup' },
  { label: 'Tech Blog', href: '#blog' },
];

// Common styles
export const COMMON_STYLES = {
  navButton: 'text-sm font-medium transition-colors duration-300 hover:opacity-80',
  mobileNav: 'block w-full text-left text-gray-300 hover:text-purple-400 font-medium',
  betaButton: 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
  card: 'bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl',
  sectionHeader: 'text-4xl md:text-5xl font-bold text-white mb-6',
  sectionDescription: 'text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed',
};

// Contact information
export const CONTACT_INFO = {
  email: 'yumemi.inquiries@gmail.com',
  copyright: '© 2024 Yumemi. All rights reserved.',
  developer: 'Gina Peng',
};
