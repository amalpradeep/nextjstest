import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface IndexProps {
  children: ReactNode;
}

const Layout: React.FC<IndexProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
