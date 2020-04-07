import dynamic from 'next/dynamic'

import MainHeader from '@ddanailov/components/MainHeader'

import {PageTemplate, PageHolder} from '@ddanailov/styled/layouts/Desktop'

import DesktopMenu from '@ddanailov/components/Menu/Desktop'
import PersonalStory from '@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Skills'

import Slogan from '@ddanailov/styled/Slogan'

import styled from 'styled-components'

const Container = styled.section`
  position: relative;
  min-height: 100%;
`

const Sidebar = dynamic(() => import('@ddanailov/components/Sidebar'))
const SocialIcons = dynamic(() => import('@ddanailov/components/SocialIcons'))
const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

const HomePageDesktop = () => (
  <Container>
    <MainHeader />
    <PageTemplate>
      <Sidebar />

      <PageHolder>
        <DesktopMenu />

        <Slogan>Dear Guest,</Slogan>
        <SocialIcons />
        <PersonalStory />
        <OpenSourceProjects />
        <Skills />

        <MainFooter />
      </PageHolder>
    </PageTemplate>
  </Container>
)

export default HomePageDesktop
