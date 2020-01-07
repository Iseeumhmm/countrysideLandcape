import React from 'react'
import { useRouteData } from 'react-static'
//import { Link } from 'components/Router'

export default function Blog() {
  const { images } = useRouteData()
  return (
    <div>
      <h1>It's blog time.</h1>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All images:
      {images.map(post => (
         
         <img key="1" src={post.backgroundImage.fields.file.url}></img>
       
     ))}
      {/* <ul>
        {images.map(post => (
          <li key="1">
            <img>{post.backgroundImage.fields.file.url}</img>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul> */}
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
