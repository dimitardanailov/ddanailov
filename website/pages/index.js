import MainLayout from '../layouts/MainLayout';

import PersonalStory from '../components/PersonalStory';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Skills from '../components/Skills';
import Sidebar from '../components/Sidebar';

const Page = () => (
  <div>
    <Sidebar />
    <h1>Dear Guest,</h1>
    <PersonalStory />
    <OpenSourceProjects />
    <Skills />
  </div>
);

export default MainLayout(Page);
