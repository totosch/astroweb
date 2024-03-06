import './Layout.css';
import LogoImage from './assets/home/neptune-logo.png';
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/BottomBar/BottomBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <TopBar image={LogoImage} />
      {children}
      <BottomBar/>
    </div>
  );
};

export default Layout;