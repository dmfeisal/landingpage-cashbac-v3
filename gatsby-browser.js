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
const carouselScript = (carouselJS) => {
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
export const onClientEntry = () => {
  // import script first
  console.log('load script')
  carouselScript();
}

export const onInitialClientRender = () => {
  if(window.bulmaCarousel) {
    window.bulmaCarousel.attach();
  }
  console.log('client render')
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}