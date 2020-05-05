import dynamic from '@ddanailov/components/Pages/homepage/next/dynamic'

import MainMobileLayout from '@ddanailov/components/Pages/homepage/@ddanailov/layouts/Mobile/MainMobileLayout'

import PersonalStory from '@ddanailov/components/Pages/homepage/@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/Pages/homepage/@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Pages/homepage/@ddanailov/components/Skills'

import Slogan from '@ddanailov/components/Pages/homepage/@ddanailov/styled/Slogan'

const SocialIcons = dynamic(() =>
  import(
    '@ddanailov/components/Pages/homepage/@ddanailov/components/SocialIcons'
  ),
)

const HomePageMobile = () => (
  <>
    <Slogan>Dear Guest,</Slogan>
    <SocialIcons />
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
  </>
)

export default MainMobileLayout(HomePageMobile)
