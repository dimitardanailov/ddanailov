import React from 'react'
import Prism from 'prismjs'

import Slogan from '@ddanailov/styled/Slogan'

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <div>
        <Slogan>Make your React web apps discoverable - JavaScript SEO</Slogan>

        <p>My goal is to share my experience with you.</p>
        <p>Article takeaway is:</p>
        <ul>
          <li>What is behing GoogleBot</li>
        </ul>

        <h5>What is behind GoogleBot</h5>

        <p>My article wants to start with the official information by Google</p>
        <blockquote>
          Googlebot is the crawler that visits web pages to include them within
          Google Search index. The number one question we got from the community
          at events and social media was if we could make Googlebot evergreen
          with the latest Chromium. Today, we are happy to announce that
          Googlebot now runs the latest Chromium rendering engine (74 at the
          time of this post) when rendering pages for Search. Moving forward,
          Googlebot will regularly update its rendering engine to ensure support
          for latest web platform features.
        </blockquote>

        <p>
          Source:
          https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html
        </p>

        <p>
          If you still don't understand what means my previous paragraph: I'll
          try to expain. Google uses almost the same version like your browser
          to fetch the important data. Of course the browser has limitions and
          advantages if you compare with your browser but the version is almost
          the same.
        </p>

        <p></p>
      </div>
    )
  }
}

export default Content
