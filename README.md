# Cashbac Static pages rendered by gatsby js

* Node JS version v10.15.3
* NPM version 6.4.1
* Yarn version 1.13.*
* Gatsby JS
* Bulma
* CSS Modules
* Long term caching for static assets
* Images optimization ([libpngissue fix for OSX user](https://github.com/tcoopman/image-webpack-loader#libpng-issues))
* Eslint

## How it works

This boilerplate uses React Router v4, with server side rendering.
SSR for CSS modules use `css-loader/locals`, no extra wrapper function for component is needed.

* [Installation](#installation)
* [Development](#development)
* [Production](#production)
* [Static](#static)
* [Component](#component)
* [After deploy](#after-deploy)

## Development guide

## Prerequisites
- [Node.js](https://nodejs.org/en/) (Version 8.0.* +)
- [NPM](https://nodejs.org/en/) (Version 6.4.* +)
- [Yarn](https://yarnpkg.com) (Optional. You can still use `npm` if you want, but highly recommended for your own sanity.)

## Installation
```javascript
npm install
or
yarn install
```
...as usual...

## Development
Run website in development mode on `localhost:8000`, with Hot Module Replacement for Reducers and Components

```javascript
npm run start
```

## Staging

### Build

Run build Static server and client ( SSR and Styled Components Active )

```
npm run build-staging
```

Run service on background

```
npm run serve
```

## Production

### Build

Run build Static server and client ( SSR and Styled Components Active )

```
npm run build
```

Run service on background

```
npm run serve
```

## deployment reference
[https://www.gatsbyjs.org/docs/deploying-and-hosting/](https://www.gatsbyjs.org/docs/deploying-and-hosting/)

## server reference
[https://www.netlify.com/features/](https://www.netlify.com/features/)


## Contributing
[https://github.com/cashbac](https://github.com/cashbac)
