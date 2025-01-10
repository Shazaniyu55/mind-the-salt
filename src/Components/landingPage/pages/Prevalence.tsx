import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import "@/Components/landingPage/style.css";
import Bold from '@/utils/Bold';
const Prevalence:React.FC=()=>{
return (<>
            <Navigation />
            <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


            <br/><br/><br/>
            <br/><br/><br/>
<section style={{maxWidth:900,margin:"0 auto"}}>            
<div>
            <Bold style={{fontSize:30}}>     How common is hypertension?
       </Bold>

<br/><br/>
 Hypertension is a very common health issue that affects millions of people all over the world. The World Health Organization (WHO) reports that about 1.13 billion people globally have high blood pressure. It is one of the most frequent chronic conditions out there. People of African descent are especially likely to have hypertension. Many people do not even realise they have it because it often does not show any symptoms.
 <br/><br/>
 Hypertension is one of the main reasons people suffer from heart diseases, strokes, and kidney failure. That is why it is so important to know about this condition and take action early. Recognising hypertension early, getting the right treatment, and making changes in how you live can greatly lower the risks of serious health issues.

 </div>
</section>

            <br/><br/><br/>

            <Footer/>
</div>
</>)
}
export default Prevalence;