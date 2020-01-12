import path from 'path'
// import axios from 'axios'
import fetchHomePageImages from './src/contentful/fetchHomePageImages'
import fetchWorkImages from './src/contentful/fetchWorkImages'



export default {
  getRoutes: async () => {
    const images = await fetchHomePageImages()
    const contentfulImages = await fetchWorkImages()

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
      // {
      //   path: '/contact',
      //   template: 'src/pages/contact.js'
      // }
      // {
      //   path: '/test',
      //   template: 'src/pages/index_test.js'
        
      // },
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
