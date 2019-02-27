require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

/* eslint-disable no-useless-escape */
export const fbSDK = `
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1246921535324181',
      xfbml      : true,
      version    : 'v2.8'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
`

export const fbPixel = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');
  fbq('init', '486616274880339');
  fbq('track', "PageView");
`
export const gtmHead = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${process.env.CB_GTM}');
`

export const GtmBody = `
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.CB_GTM}" height="0" width="0" style="display:none; visibility:hidden"></iframe></noscript>
`

export const PixelBody = `
  <img height="1" width="1" style=" display: none; visibility: hidden" src="https://www.facebook.com/tr?id=${process.env.CB_PIXEL}&ev=PageView&noscript=1"/>
`

export const dataLayerGTM = `
  window.dataLayer = []
`