import path from 'path'
import axios from 'axios'
import fetchPosts from './src/contentful/fetchPosts'

export default {
  getRoutes: async () => {
    const images = await fetchPosts()
    const workImages = [
      "https://source.unsplash.com/random/300x300/?nature,water",
      "https://source.unsplash.com/random/300x300/?nature,trees",
      "https://source.unsplash.com/random/300x300/?nature,pond",
      "https://source.unsplash.com/random/300x300/?nature,sky"
    ]
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
          workImages
        })
      },
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
