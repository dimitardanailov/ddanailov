import dynamic from 'next/dynamic'

import styled from 'styled-components'

import MainLayout from '../layouts/MainLayout'

import PersonalStory from '../components/PersonalStory'
import OpenSourceProjects from '../components/OpenSourceProjects'
import Skills from '../components/Skills'
import Blob from '../components/Animations/Blob'
// TODO: import ContactForm from '../components/FormComponents/ContactForm';

const Sidebar = dynamic(() => import('../components/Sidebar'))
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

const PageTemplate = styled.section`
  position: relative;

  display: flex;
  min-height: 100%;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PageHolder = styled.section`
  position: relative;
  margin: 1rem 1.2rem;

  padding-bottom: 60px;
`

const Slogan = styled.div`
  position: relative;

  display: block;
  margin: 10px 0 10px;
  font-size: 2rem;
  font-weight: bold;
`

const Page = () => (
  <PageTemplate>
    <Sidebar />

    <PageHolder>
      <Slogan>Dear Guest,</Slogan>
      <SocialIcons />
      <Blob
        width="80%"
        size="40px"
        height="60px"
        rightBackground="#0ff"
        leftBlobBackground="#fff"
      />
      <PersonalStory />
      <OpenSourceProjects />
      <Skills />
    </PageHolder>
  </PageTemplate>
)

export default MainLayout(Page)
