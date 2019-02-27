/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// load css here
import './src/styles/styles.scss';

// custom javascript here
const addJS = (jsCode) => {
    var s = document.createElement(`script`)
    s.type = `text/javascript`
    s.innerText = jsCode
    document.getElementsByTagName(`head`)[0].appendChild(s)
}

// define embed script for carousel
const carouselScript = (e) => {
  addJS(`
    window.carousel = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.carousel || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://wikiki.github.io/node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
    return t;
  }(document, "script", "carousel-wjs"));
`)
}

const gtmTag = () => {
  addJS(`
    window.gtm = (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.CB_GTM}')
  `)
}

const mailchimpTag = () => {
  addJS(`
    window.mailchimp = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.mailchimp || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    }(document, "script", "mailchimp-wjs"));
  `)
}

const pixelTag = () => {
  addJS(`
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${process.env.CB_PIXEL}');
    fbq('track', 'PageView');
  `)
}

// toggle for menu mobile
const toggleMenu = () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
}

export const onClientEntry = () => {
  // run embed script
  carouselScript();
  gtmTag();
  mailchimpTag();
  pixelTag();
}

export const onInitialClientRender = () => {
  // check if class name or id available on that page
  const carouselContainer = document.querySelector('.carousel.carousel-animate-slide')
  const formcontainer = document.querySelector('#mc-embedded-subscribe-form')
  // load script carousel
  if(window.bulmaCarousel && carouselContainer) {
    window.bulmaCarousel.attach();
  }
  // run toggle menu 
  toggleMenu();
  

  if (window.$ && formcontainer) {
    window.$("#mc-embedded-subscribe-form").validate()
  }
}

export const onRouteUpdate = ({ location, prevLocation }) => {
   // check if class name or id available on that page
   const carouselContainer = document.querySelector('.carousel.carousel-animate-slide')
   const formcontainer = document.querySelector('#mc-embedded-subscribe-form')
   // load script carousel
   if(window.bulmaCarousel && carouselContainer) {
     window.bulmaCarousel.attach();
   }
   // run toggle menu 
   toggleMenu();
   
 
   if (window.$ && formcontainer) {
     window.$("#mc-embedded-subscribe-form").validate()
   }
}