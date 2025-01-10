import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
const MeasurePrevalence:React.FC=()=>{
return (<>
         <Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
            <Bold style={{fontSize:30}}> PREVENTIVE MEASURES
       </Bold>
       <br/><br/>
       <Bold style={{fontSize:30}}>
 How can you prevent hypertension?
  </Bold>
 <br/>
 <b>Diet:</b> Follow the DASH diet which includes lots of fruits, vegetables, whole grains, poultry, fish, and nuts. Try to eat less salt. Aim for no more than 2,300 milligrams of sodium each day — that is about one teaspoon of table salt. If possible, go for even less, about 1,500 milligrams per day.
 <br/>
 <b>Exercise:</b> Try to get at least 150 minutes of moderate exercise (like brisk walking or cycling) or 75 minutes of vigorous exercise (like running) each week. Also, do exercises that make your muscles stronger, like lifting weights, at least two days a week.
 <br/>
 <b>Weight Management: </b>Keeping a healthy weight helps control your blood pressure. Even losing a small amount of weight if you are overweight can help a lot.
 <br/>
 Limiting Alcohol and Quitting Smoking: Drinking less alcohol and stopping smoking can both lower your blood pressure and improve your heart health.
 <br/>
 <b>Stress Management: </b>Long-term stress can increase your blood pressure. Managing your stress is important.
 <br/>
 <b>To help manage stress:</b>
 <br/>
 <b>Relaxation Techniques:</b> Try meditation, deep breathing exercises, or yoga to calm down and relax.
 <b>Time Management:</b> Organise your tasks and set achievable goals to help keep stress away.<br/>
 <b>Support:</b> Talk to friends, family, or a professional if you’re feeling overwhelmed. They can provide support and guidance.
 </div>
 </section>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default MeasurePrevalence;