import styled from 'styled-components';

import MainLayout from '../layouts/MainLayout';

import PersonalStory from '../components/PersonalStory';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Skills from '../components/Skills';
import Sidebar from '../components/Sidebar';

const PageTemplate = styled.section`
  position: relative;

  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PageHolder = styled.section`
  position: relative;
  margin: 1rem 1.2rem;
`;

const Page = () => (
  <PageTemplate>
    <Sidebar />

    <PageHolder>
      <h1>Dear Guest,</h1>
      <PersonalStory />
      <OpenSourceProjects />
      <Skills />
    </PageHolder>
  </PageTemplate>
);

export default MainLayout(Page);
