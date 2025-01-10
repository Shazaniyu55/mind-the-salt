"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';

const AdviceDesclaimer: React.FC = () => {
  return (
    <>  <Navigation />
    <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
  
  
    <br/><br/><br/>
    <br/><br/><br/>
  <section style={{maxWidth:900,margin:"0 auto"}}>            
  <div>

        <div>
      <h1><Bold>Medical Advice Disclaimer</Bold></h1><br/>
      <p>
        Please note that MIND THE SALT does not offer medical advice, diagnoses, or treatments. All the information on our website is for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
      </p>
      <h2>Always Consult Your Doctor</h2>
      <p>
        If you have any concerns about your health or think you might have hypertension or any other medical condition, it is important to consult with a healthcare professional. Only a qualified doctor can provide a diagnosis and recommend appropriate treatment options based on your individual health needs.
      </p>
      <h2>Use Our Information Responsibly</h2>
      <p>
        While we aim to provide helpful and accurate information, we encourage you to use it as a guide to understanding health issues related to hypertension and not as a tool for self-diagnosis or treatment. Always check with a healthcare professional before making any changes to your treatment plan or lifestyle that could affect your health.
      </p>
    </div>


        </div>
</section>
<br/><br/><br/>
        <Footer />
      </div>
    </>
  );
};

export default AdviceDesclaimer;
