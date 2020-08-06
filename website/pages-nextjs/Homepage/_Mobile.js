import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import HiringWrapper from '@ddanailov/components/Hiring'

import Slogan from '@ddanailov/styled/Slogan'
import ExternalArticles from '@ddanailov/components/Articles/ExternalArticles'

const HomePageMobile = () => (
  <>
    <Slogan>Dear Guest,</Slogan>
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
    <HiringWrapper />
    <ExternalArticles />
  </>
)

export default MainMobileLayout(HomePageMobile)
