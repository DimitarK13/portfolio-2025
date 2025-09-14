import { Outlet } from 'react-router';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import './App.css';

function Layout({ withFooter = true }) {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      {withFooter && <Footer />}
    </>
  );
}

export default Layout;
