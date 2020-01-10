import path from 'path'
import axios from 'axios'
import fetchPosts from './src/contentful/fetchPosts'

const imagesToGet = [
  "https://source.unsplash.com/random/300x300/?nature,water",
  "https://source.unsplash.com/random/300x300/?nature,trees",
  "https://source.unsplash.com/random/300x300/?nature,pond",
  "https://source.unsplash.com/random/300x300/?nature,sky"
]
let requests = []
let workImages = []
imagesToGet.map( url => {
  return (
    requests.push(axios.get(url))
  )
})

export default {
  getRoutes: async () => {
    const images = await fetchPosts()
    axios.all(requests).then(axios.spread((...responses) => {
       workImages = responses
      // use/access the results 
    })).catch(errors => {
      console.log('something went wrong downloading images from static.config.js... ', errors)
    })
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
          imagesToGet
        })
      },
      {
        path: '/contact',
        template: 'src/pages/contact.js'
      }
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
