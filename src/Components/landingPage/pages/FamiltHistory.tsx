import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';
const FamilyHistory:React.FC=()=>{
return (<>
  <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"10px auto"}}>            
     <div>
            <Bold style={{fontSize:30}}>  FAMILY HISTORY
            </Bold>
       <br/><br/>
<ResponsiveImage containerSize={250} src='/images/familyHistory.jpg'/>
       <br/><br/>
   <h4><Bold >    The Risk of Family History on Hypertension</Bold></h4>
Family history is a key factor in determining your risk of developing high blood pressure. If you are of African descent, you might find that hypertension is more common in your family, which increases your personal risk. Knowing and addressing this risk is vital for keeping your heart healthy.

 
<br/><br/>
<h4><Bold > 
How Family History Affects Blood Pressure
 </Bold></h4>
<p>{`
If your family has a history of high blood pressure, you're more likely to develop it too. This can be due to genetic reasons—traits you inherit from your parents—as well as environmental and lifestyle habits that your family shares. If you know that high blood pressure runs in your family, it is important to be extra careful about your own heart health.`}
</p>
 
<h4><Bold > 
Tips for Managing the Risk from Family History
 </Bold></h4>
<p>
Know Your Family’s Health History: Talk with your family to learn about any history of high blood pressure, heart disease, stroke, or other heart-related issues. Understanding these can help you gauge your own risk.
</p><p>
Monitor Your Blood Pressure Regularly: Regularly check your blood pressure, especially if your family has a history of hypertension. This helps catch any increases early, allowing you to address them quickly.
</p><p>
Adopt a Healthy Lifestyle: Eating a balanced diet, exercising regularly, managing stress, and avoiding harmful habits like smoking and heavy drinking can help counteract your inherited risk of high blood pressure.
</p><p>
Stay in Touch with Your Healthcare Provider: Inform your doctor about your family history. They can offer advice tailored to your specific risk factors and monitor your health more closely.
</p><p>
Take Preventive Steps: Beyond diet and exercise, make sure to maintain a healthy weight, manage your stress effectively, and steer clear of smoking and excessive drinking. These steps are crucial if you’re genetically predisposed to high blood pressure.
</p><p>
 

Assess Your Risk of Hypertension
 
</p><p>
Being proactive about your heart health is crucial. Regular assessments can help you understand your blood pressure better and take timely actions to manage it.
</p><p>
 
By actively managing your risk factors and being aware of your family history, you can significantly lower your chances of developing hypertension. Let’s commit to maintaining our heart health through preventive measures and regular health checks.
</p>


            </div>
            <br/><br/><br/>
</section>
            <Footer/>

</div>
</>)
}
export default FamilyHistory;