import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
const MonitoringAndManagement:React.FC=()=>{
return (<>  <Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
            <Bold style={{fontSize:30}}>     MONITORING AND MANAGEMENT
       </Bold>
       <br/><br/>

       <Bold style={{fontSize:20}}>  Blood Pressure Monitoring</Bold>
       <br/>
Monitoring your blood pressure is a key part of managing your health, especially if you have high blood pressure or are at risk. Here is why it is important and how you can do it effectively:
<br/><br/>
<b>Why Monitor Your Blood Pressure?</b><br/>
Early Detection: Regularly checking your blood pressure can help catch high blood pressure early, even before it causes any symptoms.
<br/><br/>
Track Treatment Efficacy: If you’re making lifestyle changes or taking medication, monitoring helps you see what is working and what is not.
<br/><br/>
Prevent Complications: By managing your blood pressure, you can reduce your risk of heart disease, stroke, kidney damage, and other serious health issues.
<br/><br/>
How to Monitor Your Blood Pressure at Home
Choose a Validated Monitor: Use an arm cuff monitor that has been validated for accuracy. Avoid using finger or wrist monitors, as they can be less reliable.
<br/><br/>
Consistent Timing: Try to take your readings at the same times each day, such as in the morning before breakfast and in the evening before dinner.
<br/><br/>
Proper Technique: Sit in a chair with your feet flat on the floor and your arm supported so the cuff is at heart level. Rest quietly for five minutes before taking a measurement.
<br/>
Record Your Readings: Keep a log of your blood pressure readings to share with your healthcare provider. This record can help your doctor make informed decisions about your treatment.
<br/><br/>
<b>When to Check with Your Doctor</b><br/>
If you notice a consistent rise in your blood pressure readings.
<br/>
If your readings are frequently higher than 130/80 mmHg, which is considered high.
<br/>
Any sudden changes in your blood pressure or if you experience symptoms like severe headaches, chest pain, or visual changes.

 
<br/><br/>
 </div>
 </section>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default MonitoringAndManagement;