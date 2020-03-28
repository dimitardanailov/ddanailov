import dynamic from 'next/dynamic'

import styled from 'styled-components'

import MainLayout from '@ddanailov/layouts/MainLayout'

import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'
import Blob from '@ddanailov/components/Blob'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

const Slogan = styled.div`
  position: relative;

  display: block;
  margin: 10px 0 10px;
  font-size: 2rem;
  font-weight: bold;
`

const Page = () => (
  <>
    <Slogan>Dear Guest,</Slogan>
    <SocialIcons />
    <Blob
      width="80%"
      size="40px"
      height="60px"
      rightBackground="#0ff"
      leftBlobBackground="#fff"
    />
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
  </>
)

export default MainLayout(Page)
