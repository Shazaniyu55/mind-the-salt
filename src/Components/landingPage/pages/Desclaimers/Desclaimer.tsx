"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';

const Desclaimer: React.FC = () => {
  return (
    <>
    <Navigation />
         <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
       
       
         <br/><br/><br/>
         <br/><br/><br/>
       <section style={{maxWidth:900,margin:"0 auto"}}>            
       <div>
        <div>
      <h1><Bold>Disclaimer</Bold></h1><br/>
      <p>
        {`The content on this website is meant only for learning and should not be taken as medical advice. It's important to talk to a healthcare professional who understands your specific health needs for any personal medical advice or treatment plans. Always consult a doctor or qualified health expert before making any changes to your healthcare routine.`}
      </p>
    </div>


        </div>
        
</section>
        <br/><br/>
        <br/><br/>
        <Footer />
      </div>
    </>
  );
};

export default Desclaimer;
