//add navbar items here
const navigationItems = [
    {
        name: 'Home',
        navigation: '/',
    },

    {
        name: 'About Us',
        menuItems: ['Who We Are', 'Our Team', 'Our Vision'],
        navigation: ['/about-us', '/our-team', '/vision'],
    },

    {
        name: 'Join Us',
        navigation: '/attend-service',
    },

    {
        name: 'Events',
        navigation: '/events',
    },

    {
        name: 'Contact Us',
        navigation: '/contact-us',
    },
];

export default navigationItems;