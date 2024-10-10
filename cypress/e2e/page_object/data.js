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
    'Log in'
  ];

  const email = '123@mail.com';
  const first_name = 'unreal first_name';
  const last_name = 'unreal last_name';
  const password = '123unreal_Password';

  const shopProducts = [
    '#CardLink-template--14828910739534__product-grid-6960027533390', //contains("Telnyx Classic Hat")
    '#CardLink-template--14828910739534__product-grid-7428845666382', //contains("Telnyx International Travel Adapter")
    '#CardLink-template--14828910739534__product-grid-7428954161230', //contains("Telnyx Portable Wireless Power Charger")
    '#CardLink-template--14828910739534__product-grid-6915266183246', //contains("Telnyx Pullover Hoodie")
    '#CardLink-template--14828910739534__product-grid-6738575687758', //contains("Telnyx SIM Card for IoT and M2M (10PK)")
    '#CardLink-template--14828910739534__product-grid-6751953256526', //contains("Telnyx SIM Card for IoT and M2M (1PK)")
    '#CardLink-template--14828910739534__product-grid-6761603727438', //contains("Telnyx SIM Card for IoT and M2M (3PK)")
    '#CardLink-template--14828910739534__product-grid-7466250174542', //contains("Telnyx SIM Card M2M (1PK)")
    '#CardLink-template--14828910739534__product-grid-7466249289806', //contains("Telnyx SIM Card M2M (200PK)")
    '#CardLink-template--14828910739534__product-grid-7466249683022', //contains("Telnyx SIM Card M2M (2PK)")
    '#CardLink-template--14828910739534__product-grid-7466246438990', //contains("Telnyx SIM Card M2M (500PK)")
    '#CardLink-template--14828910739534__product-grid-7466249486414', //contains("Telnyx SIM Card M2M (50PK)")
  ];
  
  export { 
    navUrls, 
    navElementsFullScreen, 
    navElementsNonFullScreen,
    email,
    first_name,
    last_name,
    password,
    shopProducts
   };
