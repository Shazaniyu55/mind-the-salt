"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';

const EthicsPolicy: React.FC = () => {
  return (
    <> <Navigation />
    <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
  
  
    <br/><br/><br/>
    <br/><br/><br/>
  <section style={{maxWidth:900,margin:"0 auto"}}>            
  <div>
        <div>
      <h1><Bold>MIND THE SALT Ethics Policy</Bold></h1><br/>
      <p>
        At MIND THE SALT, we are committed to upholding the highest ethical standards in every aspect of our work. This commitment guides our actions and decisions across our research, advocacy, and community engagement efforts.
      </p>

      <h2>Research Ethics</h2>
      <p>
        We ensure that all our research activities are conducted with integrity and transparency. We obtain informed consent from all participants, protect their privacy, and ensure confidentiality. Our research is designed to be fair, respectful, and beneficial to the communities we study, adhering to both local and international ethical standards.
      </p>

      <h2>Advocacy Ethics</h2>
      <p>
        In our advocacy work, we strive for honesty and fairness in all our communications and interactions. We advocate for policies and practices that are just and equitable, ensuring that our efforts do not inadvertently harm the communities we aim to help. We remain politically neutral, focusing solely on our mission to improve health outcomes.
      </p>

      <h2>Community Engagement Ethics</h2>
      <p>
        When engaging with communities, we prioritize respect and sensitivity to cultural values and norms. We listen to community needs and feedback, and adapt our programs accordingly. We aim to build trust and foster genuine partnerships with community members, ensuring that they are active participants in any initiative that affects them.
      </p>

      <h2>Transparency and Accountability</h2>
      <p>
        We operate with full transparency and hold ourselves accountable to our stakeholders. This includes regular reporting on our activities and outcomes, financial transparency, and being responsive to any concerns raised about our work.
      </p>

      <h2>Continuous Improvement</h2>
      <p>
        We commit to continuous learning and improvement of our ethical practices. We regularly review and update our ethics policy to respond to new challenges and to reflect the best practices in global health and development.
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

export default EthicsPolicy;
