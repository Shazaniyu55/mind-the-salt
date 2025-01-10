import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Kidney_Disease:React.FC=()=>{
return (<>
            <Navigation />

  <div style={{ height: "100vh", overflow: "auto" }} className="Reader_body">
            <br/><br/><br/>
            <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
                <section>

            <main>
        <h2>How Does Salt Affect Your Kidneys?</h2>
        <p>Your kidneys play a vital role in keeping your body healthy. They filter your blood, remove waste, and balance fluids. Eating too much salt forces your kidneys to work harder, and over time, this extra strain can lead to serious kidney problems.</p>
        <p>When your kidneys struggle to keep up, it can result in high blood pressure, fluid buildup, and long-term damage known as chronic kidney disease (CKD).</p>

        <h2 className="section-title">The Impact of Too Much Salt on Kidneys</h2>
        <ul>
            <li><strong>High Blood Pressure:</strong> Excess salt increases blood pressure, which damages the small blood vessels in your kidneys. This makes it harder for them to filter waste properly.</li>
            <li><strong>Calcium Loss and Kidney Stones:</strong> Eating too much salt can cause your body to lose calcium in your urine. This increases the risk of kidney stones, which are painful and can damage your kidneys.</li>
            <li><strong>Chronic Kidney Disease (CKD):</strong> Prolonged strain from high salt intake can lead to CKD, a condition where your kidneys gradually lose their ability to function.</li>
        </ul>

        <h2 className="section-title">Symptoms of Kidney Problems</h2>
        <ul>
            <li>Swelling in the hands, feet, or ankles (fluid retention).</li>
            <li>Fatigue or difficulty concentrating.</li>
            <li>Changes in urination, such as frequency or colour.</li>
            <li>High blood pressure that’s hard to control.</li>
        </ul>
        <p>If you experience these symptoms, consult a healthcare professional for advice.</p>

        <h2 className="section-title">Why Reducing Salt Helps Your Kidneys</h2>
        <ul>
            <li>Lower blood pressure, reducing strain on your kidneys.</li>
            <li>Decrease the risk of kidney stones by balancing calcium levels.</li>
            <li>Protect your kidneys from long-term damage and prevent CKD.</li>
        </ul>

        <h2 className="section-title">Practical Tips to Protect Your Kidneys</h2>
        <ul>
            <li><strong>Limit Processed Foods:</strong> Processed and packaged foods often contain hidden salt.</li>
            <li><strong>Drink Plenty of Water:</strong> Staying hydrated helps your kidneys flush out waste more effectively.</li>
            <li><strong>Choose Fresh Ingredients:</strong> Fresh fruits, vegetables, and lean proteins are naturally low in salt.</li>
            <li><strong>Season with Herbs, Not Salt:</strong> Flavour your food with natural spices and herbs like basil, garlic, or rosemary.</li>
            <li><strong>Cook at Home:</strong> Homemade meals let you control how much salt you use.</li>
        </ul>

        <h2 className="section-title">Did You Know?</h2>
        <ul>
            <li>People with high blood pressure are up to four times more likely to develop kidney disease.</li>
            <li>Reducing salt intake is one of the easiest ways to protect your kidneys and improve your overall health.</li>
        </ul>

        <div className="cta">
            <p><strong>Keep your kidneys healthy by taking small steps to reduce salt in your diet.</strong> Visit our Resources page for tips, recipes, and tools to make kidney-friendly meals.</p>
            <a href="resources.html">Explore Resources</a>
        </div>
    </main>
    </section>

</div>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default Kidney_Disease;