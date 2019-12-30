import styled from 'styled-components';

import MainLayout from '../layouts/MainLayout';

import PersonalStory from '../components/PersonalStory';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Skills from '../components/Skills';
import Sidebar from '../components/Sidebar';

const PageHolder = styled.section`
  position: relative;
  margin: 1rem 1.2rem;
`;

const Page = () => (
  <div>
    <Sidebar />
    <PageHolder>
      <h1>Dear Guest,</h1>
      <PersonalStory />
      <OpenSourceProjects />
      <Skills />
    </PageHolder>
  </div>
);

export default MainLayout(Page);
