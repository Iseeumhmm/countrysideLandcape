

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js'
      
const t_1 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js'
      
const t_2 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js'), universalOptions)
      t_2.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js'
      
const t_3 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js'), universalOptions)
      t_3.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js'
      
const t_4 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js'), universalOptions)
      t_4.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js'
      

// Template Map
export default {
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js': t_0,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js': t_1,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js': t_2,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js': t_3,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js': t_4
}
// Not Found Template
export const notFoundTemplate = "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js"

