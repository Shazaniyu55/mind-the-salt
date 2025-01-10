import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';
const Smoking:React.FC=()=>{
return (<><Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"0 auto"}}>            
     <div>
            <Bold style={{fontSize:30}}>  SMOKING
            </Bold>
       <br/><br/>
<ResponsiveImage containerSize={250} src='/MoreImages/smoking.png'/>
       <br/><br/>
       <h4><Bold>  The Risk of Smoking</Bold></h4>
 
<p>
 Smoking cigarettes, cigars, or pipes is a big health risk. It is particularly harmful for heart health, causing high blood pressure and heart disease. People of African descent might smoke more due to various social, cultural, or economic reasons, making it crucial to address this habit to maintain good heart health.
 </p>
  
 
 <h4><Bold>How Smoking Affects Blood Pressure</Bold></h4>
  
 <p>
 The chemicals in tobacco smoke harm the inside of blood vessels, making them narrow and stiff. This makes it harder for blood to flow, which raises blood pressure. Smoking also speeds up the process where plaque builds up in arteries, increasing the risk of high blood pressure, heart attacks, and strokes.
 </p>
  
 
 <h4><Bold>Tips for Quitting Smoking</Bold></h4>
  
 <p>
 Set a Quit Date: Pick a day that you want to stop smoking. Mark it on your calendar and start preparing mentally and emotionally.
 <br/><br/>
 Seek Support: Get help from friends, family, or groups like smoking cessation programs. You can also use quit-smoking apps or call helplines.
 <br/><br/>
 
 Identify Triggers: Notice what makes you want to smoke, like stress or being around other smokers. Find other ways to handle these situations, like chewing gum or going for a walk.
 <br/><br/>
 
 Consider Nicotine Replacement: Talk to your doctor about using products like patches, gum, or lozenges that help you handle withdrawal symptoms and cravings.
 <br/><br/>
 
 Manage Stress: Try healthy ways to relax and de-stress instead of smoking. Exercise, meditate, or spend time outdoors.
 <br/><br/>
 
 Stay Busy: Engage in activities that keep your hands and mind occupied, like hobbies, puzzles, or crafts.
 <br/><br/>
 
 Reward Yourself: Celebrate your non-smoking milestones. Treat yourself to something nice or do something you enjoy as a reward.
 <br/><br/>
 
 Stay Committed: Keep your reasons for quitting in mind and stay focused on your goals. Stick with your plan, even if it gets tough.
 
 </p> 
 
 <h4><Bold>Check Your Blood Pressure Regularly</Bold></h4>
  
 Understanding your blood pressure levels can motivate you to stay smoke-free. Quitting smoking can significantly improve your heart health and lower your risk of hypertension.
 
  
 
 <h4><Bold>TAKE ACTION TODAY!</Bold></h4>

 Quitting smoking is a big step toward better health. By stopping smoking, individuals of African descent can greatly reduce their risk of hypertension and other heart problems. Let’s encourage and support each other to quit smoking for good.
            </div>
            </section>
            <br/><br/><br/>

            <Footer/>

</div>
</>)
}
export default Smoking;