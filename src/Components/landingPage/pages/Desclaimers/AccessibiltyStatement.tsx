"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';

const AccessibilityStatement: React.FC = () => {
  return (
    <> <Navigation />
    <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
  
  
    <br/><br/><br/>
    <br/><br/><br/>
  <section style={{maxWidth:900,margin:"0 auto"}}>            
  <div>
     
        <div>
      <h1><Bold>Accessibility Statement for Mind The Salt</Bold></h1><br/>
      <p>
        At MIND THE SALT, we are dedicated to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so, we adhere to many of the available standards and guidelines.
      </p>

      <h2>Our Commitment</h2>
      <p>
        We understand that providing an accessible website is an ongoing effort and we are committed to continual improvement. Our goal is to ensure that everyone, including people with disabilities, can access all the information and features on our site.
      </p>

      <h2>Encountering Issues?</h2>
      <p>
        If you experience any difficulty in accessing any part of this website, please do not hesitate to contact us. We appreciate your feedback and will consider it as we evaluate ways to accommodate all of our users and our overall accessibility policies. Here is how you can reach us:
      </p>
      <p>
        Email: <Link href="mailto:info@heartsafrica.org">info@heartsafrica.org</Link><br />
        Please provide details of the specific issue you encountered and your contact information so we can assist you further.
      </p>

      <h2>Additional Assistance</h2>
      <p>
        If you need any assistance while visiting our website, or if you require any of our information in a different format, like large print, audio, or accessible PDFs, please get in touch. We will do our best to provide the information in a format that is accessible to you.
      </p>

      <h2>Stay Informed</h2>
      <p>
        We continue to make improvements to our accessibility statement and practices, hoping to deliver the most accessible and user-friendly experience possible. If you have any suggestions on how we could improve accessibility further, please let us know.
      </p>
    </div>


        </div>
</section>
<br/>
<br/>
<br/>
        <Footer />
      </div>
    </>
  );
};

export default AccessibilityStatement;
