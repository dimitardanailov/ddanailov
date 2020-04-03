import dynamic from 'next/dynamic'

import MainLayout from '@ddanailov/layouts/MainLayout'

import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import Slogan from '@ddanailov/styled/Slogan'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

const Page = () => (
  <>
    <Slogan>Dear Guest,</Slogan>
    <SocialIcons />
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
  </>
)

export default MainLayout(Page)
