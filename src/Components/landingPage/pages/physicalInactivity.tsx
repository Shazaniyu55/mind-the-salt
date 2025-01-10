import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
const PhysicalInactivity:React.FC=()=>{
return (<> <Navigation />
   <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
 
 
   <br/><br/><br/>
   <br/><br/><br/>
 <section style={{maxWidth:900,margin:"0 auto"}}>            
 <div>
            <Bold style={{fontSize:30}}>  PHYSICAL INACTIVITY
            </Bold>
       <br/><br/>
   <b  style={{fontSize:15}}>  Understanding the Risk of Physical Inactivity</b><br/>

<br/>
Not getting enough physical activity is a major risk factor for high blood pressure and heart disease. For people of African descent, there might be extra challenges like limited money, cultural views, or not enough places to exercise that can make it hard to stay active. It’s really important to tackle these challenges to keep your heart healthy.<br/>

   <br/>
   <b  style={{fontSize:15}}>How Being Active Helps Your Blood Pressure</b>
   Staying active helps keep your blood pressure healthy. It does this by:


   <li>Improving heart health: Exercise makes your heart stronger and more efficient.
</li>
<li>
Reducing stress: Physical activity can help lower stress, which is good for your blood pressure.
</li>

<li>
Helping you stay at a healthy weight: This is key because being overweight can lead to high blood pressure.
   </li>
   <br/>
   On the other hand, sitting too much and not exercising can lead to weight gain, higher blood pressure, and a greater risk of heart problems.
   
   <br/><br/>
   <b style={{fontSize:15}}>Tips for Increasing Physical Activity
   </b>
<br/>

<li>
Start Small: If you’re not very active now, start with easy things like taking short walks, choosing stairs over elevators, or doing some gardening.
</li>

<li>
Choose Fun Activities: Pick activities you like, such as dancing, swimming, or cycling. You’re more likely to keep doing them if you enjoy them.
</li>

<li>
Set Achievable Goals: Try to get at least 150 minutes of moderate exercise (like brisk walking) or 75 minutes of more intense exercise (like running) every week, as suggested by health experts.
</li>

<li>
Make It Regular: Schedule specific times for exercise and make it a routine part of your day.
</li>

<li>
Stay Active All Day: Look for chances to move more throughout your day—take breaks to stretch or walk, do chores energetically, or enjoy active hobbies.
</li>

<li>
Include Muscle-Building: Do exercises like weight lifting or using resistance bands at least two days a week to build muscle strength and endurance.
</li>

<li>
Get Support: Join forces with friends, family, or groups who are also trying to be more active. Exercise classes or sports teams can also keep you motivated.
</li>

<li>
Talk to a Professional: If you’re new to exercising or have health issues, check with a doctor or a fitness expert to make sure your exercise plan is safe and right for you.
</li>









   <br/><br/>
 </div>
 </section>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default PhysicalInactivity;