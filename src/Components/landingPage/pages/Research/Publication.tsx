"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css";
import Bold from '@/utils/Bold';
import Link from 'next/link';

const Publications: React.FC = () => {
  return (
    <>
      <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"0 auto"}}>            
     <div>


    <div>
      <h1><Bold>Our Publications</Bold></h1><br/>
      <h2>Publications</h2>
      <ul>
        <li>
          Usman, J.E.; Childs, C.; Rogerson, D.; Klonizakis, M. 
          <em> A Systematic Review of Internet-Based Interventions for the Prevention and Self-Management of Cardiovascular Diseases among People of African Descent.</em> 
          <br />
          Int. J. Environ. Res. Public Health 2022, 19, 8872. 
          <Link href="https://doi.org/10.3390/ijerph19148872" target="_blank" rel="noopener noreferrer">doi: 10.3390/ijerph19148872</Link>
        </li>
      </ul>
    </div>





   </div>
</section>
<br/><br/><br/>
        <Footer />
      </div>
    </>
  );
};

export default Publications;
