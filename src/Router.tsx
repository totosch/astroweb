import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import Home from './pages/Home/Home';
import Layout from './Layout';
import Targets from './pages/Targets/Targets';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.TARGETS} element={<Targets />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;