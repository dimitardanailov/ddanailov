import dynamic from 'next/dynamic'

import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import Slogan from '@ddanailov/styled/Slogan'
import ExternalArticles from '@ddanailov/components/Articles/ExternalArticles'

const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))

const HomePageMobile = () => (
  <>
    <Slogan>Dear Guest,</Slogan>
    <SocialIcons />
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
    <ExternalArticles />
  </>
)

export default MainMobileLayout(HomePageMobile)
