// src/DefaultFooter.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './DefaultFooter.css';

function DefaultFooter() {
  return (
    <footer className="footers">
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>Monaco Media Works</title>
        <meta name="description" content="© 2024 Monaco Media Works. All rights reserved." />
        <meta name="keywords" content="Monaco Media Works, footer, media, projects, creative solutions" />
        <meta property="og:title" content="Monaco Media Works - Footer" />
        <meta property="og:description" content="© 2024 Monaco Media Works. All rights reserved." />
        <link rel="canonical" href="https://www.monacomediaworks.com" />
      </Helmet>
      
      <p>© 2024 Monaco Media Works. All rights reserved.</p>
    </footer>
  );
}

export default DefaultFooter;
