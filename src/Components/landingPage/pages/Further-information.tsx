import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
const FurtherInformation:React.FC=()=>{
return (<> <Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"10px auto"}}>            
<div>
            <Bold style={{fontSize:30}}>  FURTHER INFORMATION
            </Bold>
       <br/><br/>
   <b>   Websites</b><br/>
<ol><li>British Heart Foundation offers a wealth of information on cardiovascular health, including detailed guides on blood pressure. See here<Link href="https://www.bhf.org.uk/informationsupport/risk-factors/high-blood-pressure"> BHF - Hypertension</Link>
</li>
<li>
The NHS website provides a comprehensive overview of hypertension, from understanding and diagnosing to treatment options and lifestyle advice.See here<Link href="https://www.nhs.uk/conditions/high-blood-pressure-hypertension/">NHS - Hypertension</Link> 
</li>
<li>
American Heart Association provides extensive resources on blood pressure management, dietary recommendations, and lifestyle changes to maintain heart health. See here
<Link href="https://www.heart.org/en/health-topics/high-blood-pressure"> AHA - Hypertension</Link></li>
</ol><br/><br/>
<b>Blood Pressure Apps</b><br/>
Apps such as MyDiary, Blood Pressure Monitor, and Hello Heart can be useful for tracking blood pressure readings, medication, and lifestyle factors.
 
<br/><br/>
<b>DASH Diet Mobile Apps</b><br/>
Apps focused on the DASH diet can help in planning meals and tracking dietary intake.
<br/><br/>
 </div>
            <br/><br/><br/>
            </section>
            <Footer/>
</div>
</>)
}
export default FurtherInformation;