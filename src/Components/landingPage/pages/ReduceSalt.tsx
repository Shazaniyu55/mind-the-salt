import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';
import "./css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import { MDBBtn } from 'mdb-react-ui-kit';
const ReduceSalt:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
           
<main>
        <h1>Small Changes, Big Health Benefits</h1>
        <p>Reducing salt is one of the simplest and most effective ways to protect your health. By making mindful choices, you can lower your salt intake without giving up flavour or enjoyment. Here’s everything you need to know to get started.</p>

        <section>
            <h2>Why Reduce Salt?</h2>
            <ul>
                <li><strong>Protect Your Heart:</strong> Eating less salt reduces the risk of high blood pressure, heart disease, and stroke.</li>
                <li><strong>Quick Results:</strong> Within just 2-3 weeks of cutting back, your taste buds adjust, and your body begins to recover from the effects of high salt.</li>
                <li><strong>Long-Term Impact:</strong> Reducing salt intake globally by 30% could save millions of lives annually from cardiovascular disease.</li>
            </ul>
            <p><strong>Did You Know?</strong></p>
            <ul>
                <li>Too much salt is responsible for an estimated 3 million deaths each year worldwide.</li>
                <li>Over 75% of the salt we eat is hidden in processed foods, not added at the table.</li>
            </ul>
        </section>

        <section>
            <h2>How to Reduce Salt</h2>
            <p>Practical tips to lower your salt intake:</p>
            <ul>
                <li><strong>Start in the Kitchen:</strong> Replace salt with herbs, spices, garlic, or lemon juice.</li>
                <li><strong>Check Food Labels:</strong> Look for {`"low sodium"`} options and understand the numbers.</li>
                <li><strong>Smart Shopping:</strong> Choose fresh or frozen foods over processed options.</li>
                <li><strong>Eating Out:</strong> Request no-added-salt dishes and avoid salty condiments.</li>
            </ul>
        </section>

        <section>
            <h2>Salt Substitutes and Alternatives</h2>
            <ul>
                <li><strong>Herbs and Spices:</strong> Use rosemary, thyme, cumin, and turmeric for natural flavour.</li>
                <li><strong>Citrus:</strong> Add lemon or lime juice to enhance taste.</li>
                <li><strong>Vinegar:</strong> Balsamic or apple cider vinegar can boost flavour in salads and marinades.</li>
            </ul>
        </section>

        <section>
            <h2>Track Your Progress</h2>
            <p>Use these strategies to monitor and improve:</p>
            <ul>
                <li>Write down your daily salt intake and compare it with the recommended 2,300 mg (5g of salt).</li>
                <li>Set weekly goals, like cooking fresh meals or avoiding table salt.</li>
            </ul>
            <MDBBtn>Download Salt Tracker</MDBBtn>
        </section>
    </main>
           
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default ReduceSalt;