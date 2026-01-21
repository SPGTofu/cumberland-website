import translations from '../languages/translations';

const lang = (typeof window !== 'undefined' && window.localStorage.getItem('lang')) || 'en';
const tr = (node) => (node?.[lang] || node?.en || '').trim();

const navigationItems = [
  {
    name: tr(translations.nav?.home),
    navigation: '/',
  },
  {
    name: tr(translations.nav?.about),
    menuItems: [
      tr(translations.nav?.aboutItems?.whoWeAre),
      tr(translations.nav?.aboutItems?.ourTeam),
      tr(translations.nav?.aboutItems?.ourBeliefs),
    ],
    navigation: ['/about-us', '/our-team', '/vision'],
  },
  {
    name: tr(translations.nav?.joinUs),
    navigation: '/attend-service',
  },
  {
    name: tr(translations.nav?.contactUs),
    navigation: '/contact-us',
  },
];

export default navigationItems;