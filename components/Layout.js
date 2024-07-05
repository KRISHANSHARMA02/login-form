"use client"

import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="flex-grow bg-gray-200 p-8">{children}</div>
    </div>
  );
};

export default Layout;
