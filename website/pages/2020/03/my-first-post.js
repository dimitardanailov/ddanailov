import dynamic from 'next/dynamic'

import styled, { css } from 'styled-components'

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

const Page = () => (
  <PageTemplate>
    Hello world

    
  </PageTemplate>
)

export default MainLayout(Page)