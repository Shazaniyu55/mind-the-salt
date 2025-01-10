import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';
const AlcoholConsumption:React.FC=()=>{
return (<>
  <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"0 auto"}}>            
     <div>
            <Bold style={{fontSize:30}}>  ALCOHOL CONSUMPTION
            </Bold>
       <br/><br/>
<ResponsiveImage containerSize={250} src='/MoreImages/alcohol_intake.png'/>
       <br/><br/>
       <h4><Bold>  The Risk of Excessive Alcohol Consumption</Bold></h4>
 
<br/>
 While a little alcohol might be okay for some people, drinking too much is bad for your heart. This is especially important for individuals of African descent, who may have cultural or social habits that include drinking alcohol. Managing how much you drink is key to keeping your heart healthy.
 <br/>
  
 
 How Alcohol Affects Blood Pressure
  
 <br/><br/>
 Drinking a lot of alcohol can raise your blood pressure. It does this by making certain hormones that tighten your blood vessels and messing up the balance of salts in your body. Over time, heavy drinking can also make you gain weight, hurt your liver, and increase your risk of heart diseases.
 <br/><br/>
  
 
 Tips for Drinking Alcohol Safely
  
 <br/><br/>
 Know What is Moderate: Try to keep your drinking light—up to one drink a day for women and two for men.
 <br/><br/>
 
 Watch Your Drink Size: Make sure your drinks aren’t too big. A standard drink should have about 14 grams of pure alcohol.
 <br/><br/>
 
 Choose Lower Alcohol Drinks: Go for drinks that have less alcohol and fewer calories, like light beers or wine mixed with water.
 <br/><br/>
 
 Drink Water Too: Have a glass of water or another non-alcoholic drink between alcoholic ones to help pace yourself and stay hydrated.
 <br/><br/>
 
 Avoid Binge Drinking: Stay away from drinking a lot at once. This can really bump up your blood pressure and is dangerous for your health.
 <br/><br/>
 
 Set Personal Limits: Decide how many drinks you’ll have beforehand and stick to that number.
 <br/><br/>
 
 Handle Drinking Triggers: Be aware of what makes you want to drink and find other ways to cope with those feelings or situations.
 <br/><br/>
 
 Get Support: If you’re finding it hard to cut back, talk to friends, join a support group, or get help from a professional.
 <br/><br/>
 
  
 
 Regularly Check Your Blood Pressure
 <br/><br/>
  
 
 Keeping an eye on your blood pressure can motivate you to keep your drinking in check. This helps reduce your risk of hypertension.
 <br/><br/>
 
  
  
 
 By being careful with how much alcohol you drink, people of African descent can lower their risk of high blood pressure and improve their heart health. Let’s encourage each other to drink responsibly and put our heart health first.
            </div>
            </section>
            <br/><br/><br/>

            <Footer/>

</div>
</>)
}
export default AlcoholConsumption;