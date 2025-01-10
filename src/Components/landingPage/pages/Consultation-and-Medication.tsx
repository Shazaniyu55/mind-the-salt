import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
const ConsultationMedication:React.FC=()=>{
return (<> <Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
            <Bold style={{fontSize:30}}>   CONSULTATION AND MEDICATION
            </Bold>
       <br/><br/>

       <Bold style={{fontSize:20}}>  Blood Pressure Monitoring</Bold>
       <br/>
<br/>
<b>Why Regular Consultations Are Important</b><br/>
Personalised Care: Regular check-ups with your doctor help ensure that your treatment plan is tailored to your specific health needs.
<br/>
Adjust Treatments: Your doctor can adjust your treatment plan based on how well your current approach is controlling your blood pressure.
<br/>
Early Problem Detection: During consultations, doctors can spot any potential health issues before they become serious.
<br/>
 <br/>
<b>Understanding Medication for High Blood Pressure</b><br/>
If lifestyle changes like diet and exercise are not enough to control your high blood pressure, medication may be necessary. Here is how it helps:
<br/>
Different Types for Different Needs: There are several types of blood pressure medications, and each works in a unique way. Some help relax your blood vessels, others slow down your heartbeat, and some remove excess salt and water through urine.
<br/>
Combination Therapy: Sometimes, a combination of medications is used to achieve the best results. Your doctor will determine the safest and most effective combination for you.
<br/>
Ongoing Adjustment: Medication types and dosages might need to be adjusted over time to keep your blood pressure at a safe level.
Tips for Taking Medication
Consistency is Key: Take your medication exactly as prescribed, at the same time every day.
<br/>
Track Your Progress: Keep a log of your blood pressure readings to see how your medication is affecting your levels.
<br/>
Communicate with Your Doctor: If you experience side effects or have concerns about your medication, talk to your doctor. Never stop taking medication without consulting your healthcare provider first.
<br/><br/>
 </div>
 </section>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default ConsultationMedication;