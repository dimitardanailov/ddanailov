import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const MainLayout = Page => () => (
  <div>
    <MainHeader />
    <Page />
    <MainFooter />
  </div>
);

export default MainLayout;
