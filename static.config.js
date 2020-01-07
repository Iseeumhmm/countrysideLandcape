import path from 'path'
import axios from 'axios'
import fetchPosts from './src/contentful/fetchPosts'

export default {
  getRoutes: async () => {
    const images = await fetchPosts()

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
        path: '/blog',
        getData: () => ({
          images
        }),
        children: images.map(image => ({
          path: `/post/${image.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            image,
          }),
        })),
      },
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
