import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';
import Bold from '@/utils/Bold';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import ResponsiveImage from '@/utils/ResposiveImage';


const RiskFactors:React.FC=()=>{
return (<>            <Navigation />
  <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


  <br/><br/><br/>
  <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
            <Bold style={{fontWeight:"bold",fontSize:25}}>Hypertension RISK FACTORS</Bold>

 <br/>
<ResponsiveImage containerSize={300} src='/images/hypertension.webp'/>
<br/>
Genetic and Age-Related Factors<br/>
<b>Genetics:</b> High blood pressure can be inherited. If your parents or other close family members have high blood pressure, you might have a higher chance of getting it too.
<br/>
<b>Age:</b> As we get older, our blood vessels naturally get stiffer, making it harder for blood to flow through them. This can raise blood pressure. Generally, the risk increases for men starting in their 40s and for women in their 60s.
<br/><br/>
 

Lifestyle and Environmental Factors<br/>
<b>Diet: </b>Eating a lot of salt, saturated fats, and trans fats, and not enough fruits, vegetables, and whole grains can lead to high blood pressure. Following a heart-healthy diet like the DASH diet, which includes lots of fruits, vegetables, and low-fat dairy products, can help lower your blood pressure.
<br/>
<b>Physical Activity:</b> Being active is important. Not exercising enough can lead to weight gain, which is a big risk factor for high blood pressure.
<br/>
<b>Alcohol and Tobacco:</b> Both smoking and drinking alcohol can increase your blood pressure. Smoking damages the inside of your blood vessels, making them tighter, and alcohol can raise your blood pressure every time you drink.

 <br/><br/>

Health Conditions and Other Factors<br/>
<b>Obesity:</b> Carrying extra weight puts more strain on your heart and increases blood pressure.
<br/>
<b>Chronic Conditions:</b> Health issues like diabetes, kidney disease, and high cholesterol can all contribute to high blood pressure.
<br/>
<b>Sleep Apnea: </b>This condition, where your breathing stops and starts while you sleep, also increases your risk of developing high blood pressure.

</div>
</section>
            <br/><br/><br/>
            <Footer/>
            
</div>
</>)
}
export default RiskFactors;