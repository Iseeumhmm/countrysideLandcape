import path from 'path'
// import axios from 'axios'
import fetchHomePageImages from './src/contentful/fetchHomePageImages'
import fetchWorkImages from './src/contentful/fetchWorkImages'



export default {
  getRoutes: async () => {
    const images = await fetchHomePageImages()
    const contentfulImages = await fetchWorkImages()
    let page = (key) => {
      let workImages = {
        copy: `${key}`,
        items: contentfulImages[key]
      }
      return {workImages}
    }
    return [
      {
        path: '/',
        getData: () => ({
          images
        })
      },
      {
        path: '/about',
        template: 'src/pages/about.js'
        
      },
      {
        path: '/our-work',
        template: 'src/pages/ourWork.js',
        getData: () => ({
          contentfulImages
        })
      },
      {
        path: '/test-page',
        template: 'src/pages/test-page.js'
      },
      {
        path: '/contact',
        template: 'src/pages/contact.js'
      },
      {
        path: '/pools',
        template: 'src/pages/services.js',
        getData: () => page("pools")
      },
      {
        path: '/stonework',
        template: 'src/pages/services.js',
        getData: () => page("stonework")
      },
      {
        path: '/retainingwalls',
        template: 'src/pages/services.js',
        getData: () => page("retainingwalls")
      },
      {
        path: '/structures',
        template: 'src/pages/services.js',
        getData: () => page("structures")
      },
      {
        path: '/woodworking',
        template: 'src/pages/services.js',
        getData: () => page("woodworking")
      },
      {
        path: '/woodworking',
        template: 'src/pages/services.js',
        getData: () => page("woodworking")
      },
      {
        path: '/pools/single',
        template: 'src/pages/drilldown.js',
        getData: () => page("pools")
      },
      {
        path: '/stonework/single',
        template: 'src/pages/drilldown.js',
        getData: () => page("stonework")
      },
      {
        path: '/retainingwalls/single',
        template: 'src/pages/drilldown.js',
        getData: () => page("retainingwalls")
      },
      {
        path: '/structures/single',
        template: 'src/pages/drilldown.js',
        getData: () => page("structures")
      },
      {
        path: '/woodworking/single',
        template: 'src/pages/drilldown.js',
        getData: () => page("woodworking")
      },
      {
        path: '/woodworking/single',
        template: 'src/pages/drilldown.js',
        getData: () => page("woodworking")
      },
      {
        path: '/Blog',
        template: 'src/pages/blog.js',
        // getData: () => page("woodworking")
      },
      // {
      //   path: '/blog',
      //   getData: () => ({
      //     images
      //   }),
      //   children: images.map(image => ({
      //     path: `/post/${image.id}`,
      //     template: 'src/containers/Post',
      //     getData: () => ({
      //       image,
      //     }),
      //   })),
      // },
    ]
  },
  siteRoot: 'https://review.rickheffren.com',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
