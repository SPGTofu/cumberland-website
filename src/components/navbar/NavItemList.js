import { translate } from "../languages/translations";

const navigationItems = [
  {
    name: translate('nav.home'),
    navigation: '/',
  },
  {
    name: translate('nav.about'),
    menuItems: [
      translate('nav.aboutItems.whoWeAre'),
      translate('nav.aboutItems.ourTeam'),
      translate('nav.aboutItems.ourBeliefs'),
    ],
    navigation: ['/about-us', '/our-team', '/vision'],
  },
  {
    name: translate('nav.joinUs'),
    navigation: '/attend-service',
  },
  {
    name: translate('nav.contactUs'),
    navigation: '/contact-us',
  },
];

export default navigationItems;