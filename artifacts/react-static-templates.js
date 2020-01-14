

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
      
const t_2 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js'), universalOptions)
      t_2.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js'
      
const t_3 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js'), universalOptions)
      t_3.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js'
      
const t_4 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js'), universalOptions)
      t_4.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js'
      
const t_5 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js'), universalOptions)
      t_5.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js'
      
const t_6 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js'), universalOptions)
      t_6.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js'
      
const t_7 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js'), universalOptions)
      t_7.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js'
      
const t_8 = universal(import('/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js'), universalOptions)
      t_8.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js'
      

// Template Map
export default {
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js': t_0,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js': t_1,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js': t_2,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js': t_3,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js': t_4,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js': t_5,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js': t_6,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js': t_7,
'/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js': t_8
}
// Not Found Template
export const notFoundTemplate = "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js"

