import dynamic from 'next/dynamic'

import {PageTemplate, PageHolder} from '@ddanailov/styled/layouts/Desktop'

import DesktopMenu from '@ddanailov/components/Menu/Desktop'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import Slogan from '@ddanailov/styled/Slogan'

import HiringWrapper from '@ddanailov/components/Hiring'

import ExternalArticles from '@ddanailov/components/Articles/ExternalArticles'

const Sidebar = dynamic(() => import('@ddanailov/components/Sidebar'))
const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

import PersonalStory from './Components/PersonalStory'
import Accomplishments from './Components/Accomplishments'
import Certificates from './Components/Certificates'
import FreelanceProfiles from './Components/FreelanceProfiles'

const HomePageDesktop = () => (
  <>
    <PageTemplate>
      <Sidebar />

      <PageHolder>
        <DesktopMenu />
        <Slogan>Dear Guest,</Slogan>
        <PersonalStory />
        <Accomplishments />
        <Certificates />
        <FreelanceProfiles />
        <OpenSourceProjects />
        <Skills />
        <HiringWrapper />
        <ExternalArticles />
        <MainFooter />
      </PageHolder>
    </PageTemplate>
  </>
)

export default HomePageDesktop
