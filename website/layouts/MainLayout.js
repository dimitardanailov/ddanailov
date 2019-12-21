import MainHeader from '../components/MainHeader';
import PersonalStory from '../components/PersonalStory';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Skills from '../components/Skills';
import MainFooter from '../components/MainFooter';

function MainLayout() {
  return (
    <div>
      <MainHeader />
      <h1>Dear Guest,</h1>
      <PersonalStory />
      <OpenSourceProjects />
      <Skills />
      <MainFooter />
    </div>
  );
}

export default MainLayout;
