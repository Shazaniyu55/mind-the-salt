import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
const Empowerment:React.FC=()=>{
return (

<> 
<Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
            <Bold style={{fontSize:30}}>  EMPOWERMENT
            </Bold>
       <br/><br/>

       <Bold style={{fontSize:15}}>  Empowerment Through Knowledge and Support</Bold>
       <br/>


       Taking charge of your health is one of the best things you can do for yourself, especially when it comes to preventing and managing high blood pressure. At Mind The Salt, we believe that with the right knowledge, resources, and support, individuals can make powerful choices for their heart health.

 <br/>
<br/>



<Bold style={{fontSize:15}}>What We Offer at Mind The Salt</Bold>
<li>Education: We provide clear, easy-to-understand information about high blood pressure, including what causes it and how it can be prevented or managed.
</li>
<li>
Advocacy: We work to make sure that people of African descent have access to the health resources and care they need.
</li>
<li>
Research: We stay on the cutting edge of heart health research to bring you the latest and most effective strategies for managing blood pressure.
</li>
<li>
Treatment Options: We guide you through the various ways to treat high blood pressure, from lifestyle changes to medications.
</li>
 

<br/><br/>
 </div>
 </section>
            <br/><br/><br/>
            <Footer/>
</div>



</>

)
}
export default Empowerment;