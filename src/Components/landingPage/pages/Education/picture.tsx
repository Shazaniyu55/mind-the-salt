"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';

const Picture: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <Navigation />
        <br /><br /><br />

        <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
<h4><Bold>Pictures</Bold></h4>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Picture;
