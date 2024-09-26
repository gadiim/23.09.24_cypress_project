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

  const email = '123@mail.com';
  const first_name = 'unreal first_name';
  const last_name = 'unreal last_name';
  const password = '123unreal_Password';
  
  export { 
    navUrls, 
    navElementsFullScreen, 
    navElementsNonFullScreen,
    email,
    first_name,
    last_name,
    password
   };
