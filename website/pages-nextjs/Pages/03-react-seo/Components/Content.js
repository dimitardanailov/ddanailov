import React from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import TargetBlank from '@ddanailov/components/TargetBlankLink'

import Slogan from '@ddanailov/styled/Slogan'

function TargetBlankExample() {
  // prettier-ignore
  const raw = 
`function CustomComponent() {
  return (
    <a href="http://ddanailov.dev/" target="_blank" rel="noopener">
      My website
    </a>
  );
}`

  return (
    <pre>
      <code className="language-javascript">{raw}</code>
    </pre>
  )
}

function ImageInvalidName() {
  // prettier-ignore
  const raw = 
`/*** SEO penalty ***/
<img src="./1.jpeg" />

/*** My recommendation is ***/
<img src="./tv-sony-led-display.jpeg" />`

  return (
    <pre>
      <code className="language-html">{raw}</code>
    </pre>
  )
}

function ImageReusable() {
  // prettier-ignore
  const raw = 
`<picture>
  <source src="foo.webp" type="image/webp" />
  <source src="foo.png" type="image/png" />
  <!-- fallback content -->
  <img src="foo.png" alt="insert alt text here">
</picture>
`

  return (
    <pre>
      <code className="language-html">{raw}</code>
    </pre>
  )
}

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <div>
        <Slogan>Make your React web apps discoverable - JavaScript SEO</Slogan>
        <p>The article takeaway is:</p>
        <ul>
          <li>Google bot: Overview and architecture</li>
          <li>The common SEO mistake ?</li>
          <li>Tooling: Google LightHouse</li>
        </ul>
        <h4>Google bot: Overview and architecture</h4>
        <p>The architecture behind Google crawler is: Architecture</p>
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
          <TargetBlank
            title="The new evergreen Googlebot"
            href="https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html"
          >
            The new evergreen Googlebot
          </TargetBlank>
        </p>
        <p>The updates are adding on the table:</p>
        <ul>
          <li>EcmaScript 6 support</li>
          <li>
            <TargetBlank
              title="IntersectionObserver for lazy-loading "
              href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#lazy_loading_images"
            >
              Lazy - loading and dynamic import
            </TargetBlank>
          </li>
          <li>
            <TargetBlank
              title="Web Components v1 APIs"
              href="https://developers.google.com/web/fundamentals/web-components/"
            >
              Custom Elements v1: Reusable Web Components
            </TargetBlank>
          </li>
        </ul>
        <p>
          Why the announcement is important for the React community: Step by
          step the large enterprise applications are migrated from old Monolith
          applications to Single Page Application. My expectations are in the
          next a few years more jQuery applications to be migrated to React.
        </p>
        <p>The next chapter is common mistakes</p>
        <h4>The common mistakes?</h4>
        Google is one of the leading tech companies in our planet and in page
        SEO optimization can be a tough job! If you want Google to increase SEO
        index vs SEO penalties please add in your radar
        <ul>
          <li>DRY pattern</li>
          <li>Good naming conventions</li>
          <li>Lazy loading</li>
          <li>Caching</li>
          <li>Compression</li>
        </ul>
        <p>
          The chapter will start with Basic / common mistakes. The final part
          will be advance subjects as Compression, Caching and Google AppLight
          House.
        </p>
        <h5>GoogleBot is more important vs the end user</h5>
        <p>
          The main traffic in your website will be Google Searches. The next
          three sources are: Social Links, Direct Traffic, Link Building. SEO
          optimization is important and critical for each website. My advice is
          focus on customers / the end - user. Please be careful with bounce
          rate and SEO penalty.
        </p>
        <h6>What's bounce rate ?</h6>
        <p>
          Bounce rate are not valuable users for your website. The typical
          bounce rate session is between 1 second and 45 seconds. If the end
          user is not happy from the page content he or she will close the page.
        </p>
        <p>
          Bounce rate are not valuable users for your website. The typical
          bounce rate session is between 1 second and 45 seconds. If the end
          user is not happy from the page content he or she will close the page.
        </p>
        <p>
          Tip: Google soon or later will add SEO penalties for the cheaters. The
          strong organic traffict must be your long term goal.
        </p>
        <h5>Hyperlinks</h5>
        <p>
          Each website has at least one HyperLink. Unfortunately if your team
          doesn’t have experience with SEO the common mistakes:
        </p>
        <ul>
          <li>Title attribute is missing</li>
          <li>JavaScript onClickEvents</li>
          <li>Target blank is missing or doesn’t have rel="noopener"</li>
        </ul>
        <h6>Title attribute is missing</h6>
        <p>
          Google loves hyperlinks. The common mistake is the title attribute is
          missing or title attribute is not relevant with the page content.
        </p>
        <h6>onClick listener</h6>
        <p>
          The second mistake: the engineers love onClick events. If you want
          good SEO results please avoid onClick listeners if the element is a
          navigation element.
        </p>
        <h6>target="_blank"</h6>
        <p>
          The attribute opens the desired link in the new tab. The main issues
          in our days with target="_blank" are security or performance.
        </p>
        <p>
          If you want google to skip penalties the magic attributes is:
          rel="noopener" or rel="noreferrer"
        </p>
        <TargetBlankExample />
        <h5>Images</h5>
        <p>Image optimization is a tricky subject. The common mistakes:</p>
        <h6>Random / stupid names</h6>
        <p>
          If you want image optimization please be careful with image
          conventation. My advice is: the images must be meaningful.
        </p>
        <ImageInvalidName />
        <h6>Image dimensions</h6>
        <p>
          If the page requires image with size 180x150 you must provide image
          with these dimensions. One of the common mistake is the server
          response returns image with size 2000x2000. Google ads seo penalties:
          Your page is not mobile friendly, the internet traffic in our days is
          a hot subject, the browser must resize image. Each resize requires CPU
          and memory. Google doesn’t like expansive website for the end user.
        </p>
        <h5>Compression</h5>
        <h6>Webp and Webm</h6>
        <p>
          Webp and Webm are a new standard in the web development. The numbers
          behind Webp are:
        </p>
        <blockquote>
          WebP lossless images are 26% smaller in size compared to PNGs. WebP
          lossy images are 25-34% smaller than comparable JPEG images at
          equivalent SSIM quality index.
        </blockquote>
        <p>
          Source:
          <TargetBlank
            title="A new image format for the Web"
            href="https://developers.google.com/speed/webp"
          >
            A new image format for the Web
          </TargetBlank>
        </p>
        <p>
          Webp is not supported by Safari, iOS Safari and IE. The main reason
          Apple to be not interested by Webp is the browser war with Google.
        </p>
        <p>I'd like to share how we can create a reusable web component</p>
        <ImageReusable />
        <h6>Video compression</h6>
        <p>
          Webm is the video equivalent. Webm has better browser support if you
          compare with webp. The format is supported by the latest Safari, iOS
          Safari. The important note is: The support is partial
        </p>
        <blockquote>Only supports VP8 used in WebRTC.</blockquote>
        <p>
          Unfortunately my experience in this area is not so big. I can't
          advantages and disadvantages between VP8 and VP9. I can give you my
          personal opinion: Our generation is living in the industrial age and
          we're busy. The video usage is increase each year. If you want
          competitor advantage: video is one of the hot areas.
        </p>
        <h4>Google Lighthouse</h4>
        <p>
          The last item in my SEO basket is the{' '}
          <TargetBlank
            href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en"
            title="Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps. "
          >
            Google Lighthouse tool / report
          </TargetBlank>
          . The software measures five important categories
        </p>
        <ul>
          <li>Performance</li>
          <li>Accessibility</li>
          <li>Best practices</li>
          <li>SEO</li>
          <li>Progressive Web App</li>
        </ul>
        <p>
          Google LightHouse report has a main goal: Improving webpage quality.
          The tool is under open source license. Google LightHouse report can be
          used as a Google Chrome DevTool extension, command line or Node
          module.
        </p>
        <p>The useful links are</p>
        <ul>
          <li>
            Quick-start guide on using Lighthouse:
            <TargetBlank
              title="Quick-start guide on using Lighthouse"
              href="https://developers.google.com/web/tools/lighthouse/"
            >
              https://developers.google.com/web/tools/lighthouse/
            </TargetBlank>
          </li>
          <li>
            View and share reports online:
            <TargetBlank title="View and share reports online">
              https://googlechrome.github.io/lighthouse/viewer/
            </TargetBlank>
          </li>
          <li>
            View and share reports online:
            <TargetBlank
              title="View and share reports online: * Github source and details"
              href="https://github.com/GoogleChrome/lighthouse"
            >
              https://github.com/GoogleChrome/lighthouse
            </TargetBlank>
          </li>
        </ul>
        <p>If you want to understand more about LightHouse</p>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/mLjxXPHuIJo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    )
  }
}

export default Content
