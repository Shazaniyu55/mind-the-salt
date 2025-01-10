import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Bone_Health_Osteoporosis:React.FC=()=>{
return (<>
            <Navigation />

  <div style={{ height: "100vh", overflow: "auto" }}className="Reader_body">
            <br/><br/><br/>
            <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
<section>
<main>
        <h2>How Does Salt Affect Your Bones?</h2>
        <p>You might not think of your bones when you hear about salt, but eating too much can weaken them over time. Salt causes your body to lose calcium through urine, which is a mineral your bones need to stay strong. If your calcium levels drop too low, your bones become weaker, increasing your risk of fractures and conditions like osteoporosis.</p>

        <h2 className="section-title">The Science Behind Salt and Bone Loss</h2>
        <ul>
            <li><strong>Calcium Loss:</strong> When you consume too much salt, your kidneys excrete more calcium along with sodium. Over time, this can lead to a calcium deficit in your body.</li>
            <li><strong>Weakened Bones:</strong> Without enough calcium, your bones lose density and strength, making them more fragile. This is especially concerning for older adults, who are already at higher risk of bone-related issues.</li>
            <li><strong>Increased Risk of Osteoporosis:</strong> Osteoporosis is a condition where bones become brittle and prone to fractures. A high-salt diet can accelerate this process.</li>
        </ul>

        <h2 className="section-title">Who’s Most at Risk?</h2>
        <ul>
            <li><strong>Postmenopausal Women:</strong> Hormonal changes make women more prone to calcium loss and bone density reduction.</li>
            <li><strong>Older Adults:</strong> Bone density naturally decreases with age, and excess salt speeds this up.</li>
            <li><strong>People with Low Calcium Intake:</strong> Those who don’t get enough calcium from their diet are at greater risk.</li>
        </ul>

        <h2 className="section-title">How to Protect Your Bones</h2>
        <ul>
            <li><strong>Eat Calcium-Rich Foods:</strong> Include dairy products, leafy green vegetables, and fortified plant-based milks in your diet.</li>
            <li><strong>Cut Back on Salt:</strong> Avoid processed and packaged foods high in sodium.</li>
            <li><strong>Stay Active:</strong> Weight-bearing exercises like walking, dancing, or yoga strengthen bones.</li>
            <li><strong>Get Enough Vitamin D:</strong> This helps your body absorb calcium more effectively. You can get it from sunlight, supplements, or foods like oily fish and eggs.</li>
            <li><strong>Check Labels:</strong> Look for foods with lower sodium levels, and compare brands to choose healthier options.</li>
        </ul>

        <h2 className="section-title">Did You Know?</h2>
        <ul>
            <li>Women with a high-salt diet are four times more likely to develop osteoporosis than those with a low-salt diet.</li>
            <li>Reducing salt doesn’t just help your bones—it improves your overall health, too.</li>
        </ul>

        <div className="cta">
            <p><strong>Protect your bones by reducing salt and adding more calcium to your diet.</strong> Visit our Resources page for bone-friendly recipes and tips to keep your bones strong and healthy.</p>
            <a href="/Resources">Explore Resources</a>
        </div>
    </main>
</section>
            </div>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}

export default Bone_Health_Osteoporosis