import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';
import "./css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
const AboutSalt:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
           
        
<main>
    <h1>Salt: Small Crystals, Big Impact</h1>
    <p>Salt is essential for life, yet in today’s world, we often consume far more than our bodies need. Understanding salt’s role in your diet—why it’s needed, how much is too much, and ways to cut back—can have a huge impact on your health. Let’s uncover the facts behind this everyday seasoning and learn how to strike the right balance.</p>

    <section>
        <h2>What is Salt?</h2>
        <p>Salt is a mineral composed primarily of sodium and chloride. It plays a key role in fluid balance, nerve function, and muscle contractions. However, most people eat more salt than necessary, overshadowing these essential benefits.</p>
        <ul>
            <li>Salt is the primary source of sodium in our diets.</li>
            <li>The recommended daily sodium intake is less than 2,300 mg (approx. 5g of salt), but global intake averages 9-12g per day.</li>
            <li>Reducing salt by just 1g/day could prevent 1.65 million deaths annually from heart-related diseases.</li>
        </ul>
    </section>

    <section>
        <h2>Why Do We Need Salt?</h2>
        <p>In moderation, salt supports essential bodily functions:</p>
        <ul>
            <li><strong>Fluid Balance:</strong> Sodium helps maintain proper hydration and circulation.</li>
            <li><strong>Nerve Function:</strong> It enables nerves to transmit signals, affecting everything from your heartbeat to your sense of taste.</li>
            <li><strong>Muscle Contractions:</strong> Sodium is necessary for muscles, including your heart, to contract efficiently.</li>
        </ul>
        <p>Your body needs only about 500 mg of sodium daily, far less than what most people consume. Finding this balance ensures you reap the benefits without risks.</p>
    </section>

    <section>
        <h2>How Salt Affects Your Health</h2>
        <p>Excessive salt intake can be harmful:</p>
        <ul>
            <li><strong>High Blood Pressure:</strong> Cutting salt lowers BP by 5-6 mmHg for those with hypertension.</li>
            <li><strong>Heart Disease & Stroke:</strong> Reduced sodium can lower stroke risk by 23% and heart disease by 17%.</li>
            <li><strong>Kidney Strain:</strong> Too much salt overworks your kidneys, increasing the risk of kidney disease.</li>
            <li><strong>Bone & Stomach Health:</strong> High sodium intake can weaken bones and elevate stomach cancer risk.</li>
        </ul>
    </section>

    <section>
        <h2>How to Reduce Salt Intake</h2>
        <p>Small changes make a big difference:</p>
        <ul>
            <li><strong>Check Food Labels:</strong> Choose foods with less than 120 mg sodium per 100g.</li>
            <li><strong>Cook Creatively:</strong> Replace salt with herbs, spices, lemon juice, and vinegar for robust flavours without sodium overload.</li>
            <li><strong>Rinse Canned Foods:</strong> Washing canned veggies and beans can remove up to 40% of added salt.</li>
            <li><strong>Avoid Salty Snacks:</strong> Swap crisps and salted nuts for fresh fruits or unsalted seeds.</li>
            <li><strong>Gradual Reduction:</strong> Slowly reducing salt helps your taste buds adjust and appreciate more subtle flavours.</li>
        </ul>
        <p>By embracing these steps, you’ll discover new, exciting ways to enjoy food’s natural tastes while protecting your health.</p>
    </section>
</main>
   
           
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default AboutSalt;