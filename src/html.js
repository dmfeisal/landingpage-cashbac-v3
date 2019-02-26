require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

import React from "react"
import PropTypes from "prop-types"
import * as extScript from './components/externaljs'

console.log(extScript.GtmBody, 'gtmbody')

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
          {this.props.headComponents}
          <link href="http://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"></link>
        </head>
        <body {...this.props.bodyAttributes}>
          <div id="no-script-gtm" dangerouslySetInnerHTML={{ __html: extScript.GtmBody }}/>
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.CB_GTM}`} height="0" width="0" style={{ 'display': 'none', 'visibility': 'hidden' }}></iframe>
          </noscript>
          <noscript>
            <img height="1" width="1" style={{ 'display': 'none', 'visibility': 'hidden' }} src={`https://www.facebook.com/tr?id=${process.env.CB_PIXEL}&ev=PageView&noscript=1`}/>
          </noscript>
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
