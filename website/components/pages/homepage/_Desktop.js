import dynamic from '@ddanailov/components/Pages/homepage/next/dynamic'

import MainHeader from '@ddanailov/components/Pages/homepage/@ddanailov/components/MainHeader'

import {
  PageTemplate,
  PageHolder,
} from '@ddanailov/components/Pages/homepage/@ddanailov/styled/layouts/Desktop'

import DesktopMenu from '@ddanailov/components/Pages/homepage/@ddanailov/components/Menu/Desktop'
import PersonalStory from '@ddanailov/components/Pages/homepage/@ddanailov/components/PersonalStory'
import OpenSourceProjects from '@ddanailov/components/Pages/homepage/@ddanailov/components/OpenSourceProjects'
import Skills from '@ddanailov/components/Pages/homepage/@ddanailov/components/Skills'
import Typing from '@ddanailov/components/Pages/homepage/@ddanailov/components/Animations/Typing'

import Slogan from '@ddanailov/components/Pages/homepage/@ddanailov/styled/Slogan'

import styled from '@ddanailov/components/Pages/homepage/styled-components'

const Container = styled.section`
  position: relative;
  min-height: 100%;
`

const Sidebar = dynamic(() =>
  import('@ddanailov/components/Pages/homepage/@ddanailov/components/Sidebar'),
)
const SocialIcons = dynamic(() =>
  import(
    '@ddanailov/components/Pages/homepage/@ddanailov/components/SocialIcons'
  ),
)
const MainFooter = dynamic(() =>
  import(
    '@ddanailov/components/Pages/homepage/@ddanailov/components/MainFooter'
  ),
)

const HomePageDesktop = () => (
  <Container>
    <MainHeader />
    <PageTemplate>
      <Sidebar />

      <PageHolder>
        <DesktopMenu />

        <Typing />

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
