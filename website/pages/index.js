import dynamic from 'next/dynamic'

import styled from 'styled-components'

import MainLayout from '@ddanailov/layouts/MainLayout'

import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'
import Blob from '@ddanailov/components/Animations/Blob'

import Slogan from '@ddanailov/styled/Slogan'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

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
