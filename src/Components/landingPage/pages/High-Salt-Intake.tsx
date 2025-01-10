import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';
const HighSaltIntake:React.FC=()=>{
return (<> <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"0 auto"}}>            
     <div>
            <Bold style={{fontSize:30}}>  HIGH SALT INTAKE
            </Bold>
       <br/><br/>
<ResponsiveImage containerSize={300} src='/MoreImages/high_salt_meat.png'/>
       <br/><br/>
   <b style={{fontSize:'large'}}> Understanding the Risks of High Salt Intake
   </b><br/>



   Salt is crucial for our body to function properly—it helps our nerves send signals and our muscles contract. However, eating too much salt can lead to high blood pressure, especially in people of African descent, who are more likely to develop hypertension at a younger age and face more severe health problems.

 
<br/>

<Bold style={{fontSize:"larger"}}>
How Salt Affects Your Blood Pressure
</Bold>
<br/><br/>

Eating too much salt causes your body to hold onto water. This extra water raises your blood volume, which increases the pressure on your blood vessels and can make your blood pressure go up. Over time, this high blood pressure puts a strain on your heart and can lead to serious issues like heart disease, strokes, and kidney damage.
<br/><br/>
 
<Bold style={{fontSize:"larger"}}>
Tips for Reducing Salt in Your Diet
 </Bold>

Know Your Limits: The World Health Organisation (WHO) recommends adults eat less than one teaspoon (5 grams) of salt each day to stay healthy.
<br/><br/>{`
Check Food Labels: Always look at food labels and choose products with low or no added salt. Look for terms like "low-sodium," "sodium-free," or "no added salt."`}
<br/><br/>

Eat Fresh: Try to eat more fresh fruits, vegetables, whole grains, and lean proteins. These foods are naturally lower in sodium than processed foods.
<br/><br/>

Use Other Flavors: Instead of salt, try using herbs, spices, lemon juice, or vinegar to add flavor to your meals.
<br/><br/>

Avoid Processed Foods: Cut down on processed foods like canned soups, sauces, snack foods, processed meats, and pre-packaged meals, as they often have a lot of added sodium.
<br/>
Be Careful Eating Out: When dining out, ask for your meals to be made with less salt and get any sauces or dressings on the side. Try not to add extra salt at the table.
<br/><br/>
{`
Stay Hydrated: Drink lots of water throughout the day to help flush out excess sodium. Also, try to limit sugary drinks and alcohol, which aren't great for your heart health.
`}

 <br/><br/>

<br/>
It is important to know your blood pressure numbers. By eating less salt and making other healthy choices, you can lower your risk of high blood pressure and its complications. We encourage everyone, especially those of African descent, to take control of their heart health and inspire others to do the same.
<br/><br/>
By understanding and adjusting your salt intake, you can significantly improve your heart health and reduce the risk of hypertension. Remember to consult with a healthcare provider to assess your personal health needs and get the most effective advice tailored to you.

 <br/>






<br/><br/>
 </div>
 </section>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default HighSaltIntake;