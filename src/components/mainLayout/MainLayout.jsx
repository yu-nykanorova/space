import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import './MainLayout.scss';

export const MainLayout = () => {
  return (
    <div className="page">
      <Header />
      <main  className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
