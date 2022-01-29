import Keyword from '@ddanailov/components/Keyword'
import TargetBlank from '@ddanailov/components/TargetBlankLink'
import Space from '@ddanailov/styled/Space'

import Slogan from '@ddanailov/styled/Slogan'

function AboutMe() {
  return (
    <>
      <Slogan>Who is Dimitar Danailov ?</Slogan>

      <p>
        I'm a remote software engineer. My expertise includes various different
        areas: front - end development, web peformance, backend, mobile, cloud
        security, DevOps, Blockchain. In the past four year my main focus is
        software consulting. Technology stack:
      </p>
      <ul>
        <li>
          <Keyword word="Web3" /> and <Keyword word="Blockchain" />
        </li>
        <li>
          Fine with both front-end (<Keyword word="React.js" /> and{' '}
          <Keyword word="Nextjs" />, Native web components, State machines,
          D3.js, Polymer and SPA) and back-end(
          <Keyword word="Nodejs" />, <Keyword word="Go" />)
        </li>
        <li>Amazon web services, Azure and Google Cloud are my best friends</li>
        <li>Creating software is my hobby</li>
        <li>
          Mentorship:{' '}
          <TargetBlank
            href="https://stackoverflow.com/users/609707/d-danailov"
            title="My top tags are: Android, MySQL, Ruby on Rails, PHP and Javascript"
          >
            I love to share my experience with the world
          </TargetBlank>
        </li>
        <li>
          <TargetBlank
            href="https://github.com/dimitardanailov"
            title="Founder of #Javascript Consulting Company."
          >
            I love open source contribution
          </TargetBlank>
        </li>
        <li>I'm a guy with good self - education discipline</li>
      </ul>
    </>
  )
}

export default AboutMe
