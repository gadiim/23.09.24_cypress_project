import UrlVisit from './url';
const urlVisit = new UrlVisit();

const navUrls = [
    () => urlVisit.productsPage(),
    () => urlVisit.solutionsPage(),
    () => urlVisit.pricingPage(),
    () => urlVisit.whyTelnyxPage(),
    () => urlVisit.resourcesPage(),
  ];
  
  const navElementsFullScreen = [
    'Products',
    'Solutions',
    'Pricing',
    'Why Telnyx',
    'Resources',
    'Developers',
    'Shop',
    'Contact us',
    'Log in',
    'Sign Up'
  ];
  
  const navElementsNonFullScreen = [
    'Products',
    'Solutions',
    'Pricing',
    'Why Telnyx',
    'Resources',
    'Developers',
    'Shop',
    'Contact us',
    'Log in',
    'Sign Up'
  ];
  
  export { navUrls, navElementsFullScreen, navElementsNonFullScreen };
