import dynamic from 'next/dynamic'

import {PageTemplate, PageHolder} from '@ddanailov/styled/layouts/Desktop'

import DesktopMenu from '@ddanailov/components/Menu/Desktop'
import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import Slogan from '@ddanailov/styled/Slogan'

import HiringWrapper from '@ddanailov/components/Hiring'

import NightShiftModeToggleButton from '@ddanailov/components/NightShiftMode/ToggleButton'

import ExternalArticles from '@ddanailov/components/Articles/ExternalArticles'

const Sidebar = dynamic(() => import('@ddanailov/components/Sidebar'))
const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

const HomePageDesktop = () => (
  <>
    <PageTemplate>
      <Sidebar />

      <PageHolder>
        <DesktopMenu />
        <NightShiftModeToggleButton />
        <Slogan>Dear Guest,</Slogan>
        <PersonalStory />
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
