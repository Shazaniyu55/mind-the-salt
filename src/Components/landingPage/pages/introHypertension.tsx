import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';
import Bold from '@/utils/Bold';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
const IntroHypertension:React.FC=()=>{
return (<>
  
            <Navigation />
            <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


            <br/><br/><br/>
            <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
       <Bold style={{fontSize:30}}>   INTRODUCTION TO HYPERTENSION
       </Bold>
<br/><br/>



 
<Bold style={{fontSize:30}}>What is hypertension?
</Bold>

<br/><br/>
High blood pressure, also known as hypertension, happens when the force of blood against the walls of your arteries is too high. This puts extra pressure on your heart, making it work harder to pump blood around your body. Over time, this extra strain can damage your heart, brain, kidneys, and other important organs.
<br/><br/>
The tricky thing about high blood pressure is that it often does not have any obvious symptoms, so you might not even know you have it. That is why it is important to check your blood pressure regularly, especially if you have a family history of high blood pressure or other risk factors.
<br/><br/>
But here is the good news, high blood pressure can usually be managed with simple lifestyle changes, like eating a healthy diet, being active, managing stress, and sometimes taking medication as prescribed by your doctor.
<br/><br/>
At MIND THE SALT, we are here to help you take control of your heart health. Learn more about high blood pressure, assess your risk, access educational resources, and connect with our supportive community. Together, let us beat hypertension and live our healthiest lives!
<br/><br/>
 </div>
</section>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default IntroHypertension;