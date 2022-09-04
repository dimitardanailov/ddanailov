import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import HiringWrapper from '@ddanailov/components/Hiring'

import Slogan from '@ddanailov/styled/Slogan'
import ExternalArticles from '@ddanailov/components/Articles/ExternalArticles'

import PersonalStory from './Components/PersonalStory'
import Accomplishments from './Components/Accomplishments'
import Certificates from './Components/Certificates'

const HomePageMobile = () => (
  <>
    <Slogan>Dear Guest,</Slogan>
    <PersonalStory />
    <Accomplishments />
    <Certificates />
    <FreelanceProfiles />
    <OpenSourceProjects />
    <Skills />
    <HiringWrapper />
    <ExternalArticles />
  </>
)

export default MainMobileLayout(HomePageMobile)
