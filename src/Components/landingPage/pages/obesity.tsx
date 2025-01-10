import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';
const Obesity:React.FC=()=>{
return (<> <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"0 auto"}}>            
     <div>
            <Bold style={{fontSize:30}}>  OBESITY
            </Bold>
       <br/><br/>
<ResponsiveImage containerSize={250} src='/MoreImages/obese_black_people.png'/>
       <br/><br/>
    <Bold>  The Risks of Obesity</Bold>
Obesity means having too much body fat, and it is a big risk for high blood pressure and heart disease. People of African descent might be more likely to become obese because of genetics and life circumstances that make gaining weight easier. It is important to manage your weight to keep your heart healthy.

 

<Bold style={{fontSize:'larger'}}>How Obesity Affects Blood Pressure
</Bold>

Being overweight makes your heart and blood vessels work harder, which can raise your blood pressure. Obesity also leads to health problems like insulin resistance (which can lead to diabetes) and inflammation, both of which can increase your risk of high blood pressure and other serious conditions.

 
<br/><br/>
<Bold style={{fontSize:'larger'}}>Tips for Managing Weight
 </Bold>
<br/><br/>
Eat a Balanced Diet: Fill your meals with a mix of fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid too many sugary drinks, fast food, and fatty snacks.
<br/><br/>
Watch Your Portions: Keep an eye on how much you eat, especially foods that are high in calories. Using smaller plates can help you eat less.
<br/><br/>
Stay Active: Try to get at least 150 minutes of moderate exercise (like brisk walking) or 75 minutes of intense exercise (like running) each week.
<br/><br/>
Sit Less: Try not to sit down for too long. Get up and move around regularly throughout the day.
<br/><br/>
Set Realistic Goals: Aim for slow, steady weight loss—about 1-2 pounds a week. This is safe and more likely to be successful long-term.
<br/><br/>

Get Support: Connect with friends, family, or groups that can support your weight loss efforts. They can offer motivation and advice when you need it.
<br/><br/>

Manage Stress: Techniques like deep breathing, yoga, and doing hobbies can reduce stress, which can help prevent weight gain.
<br/><br/>

Sleep Well: Make sure you get 7-9 hours of sleep each night. Not sleeping enough can make you gain weight and affect your overall health.
<br/><br/>

 

Take Action to Check Your Blood Pressure
 
<br/><br/>

By living a healthier lifestyle, eating right, and staying active, people of African descent can manage their weight and lower their risk of high blood pressure. Let us encourage each other to make positive health changes.
      
</div>
</section>
            <br/><br/><br/>
            <Footer/>

</div>
</>)
}
export default Obesity;