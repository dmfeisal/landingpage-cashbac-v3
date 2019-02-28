require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

import React from "react"
import PropTypes from "prop-types"
import * as extScript from './components/externaljs'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="author" content="Cashbac" />
          <meta name="copyright" content="PT. Global Pay Indonesia" />
          <meta name="language" content="English"  />
          <meta name="geo.country" content="ina"  />
          <meta name="geo.placename" content="Indonesia"  />
          <meta name="geo.region" content="ina"  />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="fb:admin" content="1561901533" />
          <meta name="fb:app_id" content="162069917716206" />
          <meta property="og:locality" content="Jakarta" />
          <meta property="og:region" content="DKI Jakarta" />
          <meta property="og:postal-code" content="10350" />
          <meta property="og:country-name" content="Indonesia" />
          <meta property="og:email" content="help@cashbac.com" />
          <meta property="og:phone_number" content="+6221-806-81255" />
          <meta name="google" content="notranslate" />
          <meta name="msvalidate.01" content="EDBACD8EE46F5F1E12F307F144A2E581" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Cashbac" />
          <meta name="apple-mobile-web-app-status-bar-style" content=" #26ADE4" />
          <meta name="theme-color" content=" #26ADE4" />
          
          <link href="http://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" as="style"></link>

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <div id="no-script-gtm" dangerouslySetInnerHTML={{ __html: extScript.GtmBody }}/>
          <div id="no-script-pixel" dangerouslySetInnerHTML={{ __html: extScript.PixelBody }}/>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
