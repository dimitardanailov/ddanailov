import dynamic from 'next/dynamic'

import {PageTemplate, PageHolder} from '@ddanailov/styled/layouts/Desktop'

import DesktopMenu from '@ddanailov/components/Menu/Desktop'
import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'
import Typing from '@ddanailov/components/Animations/Typing'

import Slogan from '@ddanailov/styled/Slogan'

import ExternalArticles from '@ddanailov/components/Articles/ExternalArticles'

const Sidebar = dynamic(() => import('@ddanailov/components/Sidebar'))
const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

const HomePageDesktop = () => (
  <>
    <PageTemplate>
      <Sidebar />

      <PageHolder>
        <DesktopMenu />
        <Slogan>Hire me as: </Slogan>
        <Typing />
        <Slogan>Dear Guest,</Slogan>
        <PersonalStory />
        <OpenSourceProjects />
        <Skills />

        <ExternalArticles />
        <MainFooter />
      </PageHolder>
    </PageTemplate>
  </>
)

export default HomePageDesktop
