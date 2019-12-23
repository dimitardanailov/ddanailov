import MainLayout from '../layouts/MainLayout';

import PersonalStory from '../components/PersonalStory';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Skills from '../components/Skills';

const Page = () => (
  <div>
    <h1>Dear Guest,</h1>
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
  </div>
);

export default MainLayout(Page);
