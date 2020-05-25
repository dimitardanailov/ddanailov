import dynamic from 'next/dynamic'

import Keyword from '@ddanailov/components/Keyword'
import TargetBlank from '@ddanailov/components/TargetBlankLink'
import Space from '@ddanailov/styled/Space'

import Slogan from '@ddanailov/styled/Slogan'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

function AboutMe() {
  return (
    <>
      <Slogan>Dimitar Danailov</Slogan>

      <SocialIcons />

      <p>
        I've been working as a full stack engineer (front-end, backend, mobile
        and sysadmin / devOps) since June 2010. The last two years my focus is:
        Consulting.
      </p>

      <ul>
        <li>
          Fine with both front-end (<Keyword word="React.js" /> and{' '}
          <Keyword word="Nextjs" />, Native web components, D3.js, Polymer and
          SPA) and back-end(
          <Keyword word="Nodejs" />, <Keyword word="Go" />)
        </li>
        <li>Amazon web services, Azure and Google Cloud are my best friends</li>
        <li>Creating software is my hobby</li>
        <li>Mentorship: I love to share my experience with the world</li>
        <li>
          I love the open source and <Space />
          <TargetBlank
            href="https://stackoverflow.com/users/609707/d-danailov"
            title="My top tags are: Android, MySQL, Ruby on Rails, PHP and Javascript"
          >
            Stackoverflow
          </TargetBlank>
        </li>
        <li>I'm a guy with good self - education discipline</li>
      </ul>
    </>
  )
}

export default AboutMe
