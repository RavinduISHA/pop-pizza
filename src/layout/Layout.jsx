import React from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  const location = useLocation();

  // Define an array of route paths where you don't want to show Header and Footer
  const excludeHeaderFooterPaths = ['/login', '/register'];

  // Check if the current path is in the array of paths to exclude
  const shouldExcludeHeaderFooter = excludeHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldExcludeHeaderFooter && <Header />}
      <main>
        <Routers />
      </main>
      {!shouldExcludeHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
