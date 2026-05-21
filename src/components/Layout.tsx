
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Manage snap-active: on for all pages except landing (Index manages its own) and /success
  React.useLayoutEffect(() => {
    const noSnap = ['/', '/success'];
    if (!noSnap.includes(location.pathname)) {
      document.documentElement.classList.add('snap-active');
    } else {
      document.documentElement.classList.remove('snap-active');
    }
    return () => {
      document.documentElement.classList.remove('snap-active');
    };
  }, [location.pathname]);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);

    // Handle hash links (like #pricing)
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[76px] sm:pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
