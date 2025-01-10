import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';
const PoorDiet:React.FC=()=>{
return (<>
 <Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"10px auto"}}>            
<div>
            <Bold style={{fontSize:30}}>  Poor Diet
            </Bold>
       <br/><br/>
   <b>  The Risk of a Poor Diet  </b><br/>

<ResponsiveImage containerSize={250} src='/MoreImages/Poor_dietary_practice.png'/>


<p>
Eating too much unhealthy food, like items high in bad fats, sugars, and salt, is a big risk factor for high blood pressure and heart disease. For people of African descent, traditional diets might include lots of salt, sugar, and unhealthy fats. It is important to understand how these foods can affect your heart health.
</p>
<br/>


<Bold style={{fontSize:30}}> Tips for Improving Your Diet</Bold>
 
<li>
Eat More Fruits and Vegetables: Try to fill half of your plate with fruits and vegetables at every meal. These foods are full of heart-healthy vitamins, minerals, and fiber.
</li>
<li>
Choose Whole Grains: Pick whole grains like brown rice, quinoa, oats, and whole wheat bread over refined grains like white rice and white bread. Whole grains have more nutrients and fiber, which are good for your heart.
</li>
<li>
Limit Processed Foods: Reduce your intake of processed items like sugary snacks, fast food, and pre-packaged meals, which tend to be loaded with bad fats, sugars, and salt.
</li>
<li>
Watch Portion Sizes: Keep an eye on how much you eat, especially at restaurants. Smaller portions can help you manage your weight and your blood pressure.
</li>
<li>
Reduce Sodium Intake: Cut down on salty foods like processed meats, canned soups, and salty snacks. Use herbs, spices, and citrus to flavour your food instead of salt.
</li>
<li>
Choose Healthy Fats: Eat foods with good fats, such as avocados, nuts, seeds, and olive oil, and avoid bad fats found in fried foods and fatty meats.
</li>
<li>
Stay Hydrated: Drink plenty of water to stay hydrated. Avoid sugary drinks, and try water, herbal teas, or water infused with fruits instead.
</li>
<li>
Plan Ahead: Planning your meals and snacks can help you make healthier choices. Keep healthy snacks like fruits, nuts, and cut veggies ready for when you are hungry.
</li>
<p>
Knowing your blood pressure numbers is crucial. By improving your diet, you can lower your risk of high blood pressure and enhance your overall heart health. Let us encourage everyone, especially those of African descent, to eat more wholesome, balanced meals.
</p>












            <br/><br/><br/>
            </div>
            </section>
            <Footer/>

</div>
</>)
}
export default PoorDiet;