import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Heart_Disease_And_Strokes:React.FC=()=>{
return (<>
  <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
            <br/><br/><br/>
            <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
<section>
            <main>
        <h2>What’s the Connection Between Salt and Heart Health?</h2>
        <p>Eating too much salt can harm your heart and increase your risk of strokes. Salt makes your body hold on to extra water, which raises your blood pressure. Over time, high blood pressure puts extra strain on your heart and blood vessels, making them weaker and more likely to get damaged. This can lead to serious conditions like heart disease, heart attacks, and strokes.</p>

        <h2 className="section-title">How Salt Affects Your Heart and Blood Vessels</h2>
        <ul>
            <li><strong>High Blood Pressure (Hypertension):</strong> Salt raises your blood pressure, which is one of the biggest causes of heart disease and strokes. High blood pressure forces your heart to work harder than it should, damaging it over time.</li>
            <li><strong>Artery Damage:</strong> Over time, high blood pressure can damage your arteries, making them stiff or clogged. This reduces blood flow to your heart and brain, increasing the risk of heart attacks and strokes.</li>
            <li><strong>Fluid Overload:</strong> Excess salt causes your body to retain water. This extra fluid puts more pressure on your heart and can worsen heart conditions like heart failure.</li>
        </ul>

        <h2 className="section-title">Signs of Heart Disease and Strokes</h2>
        <p>Understanding the warning signs can save lives. Here are some common symptoms to watch out for:</p>
        <h3>Heart Disease</h3>
        <ul>
            <li>Chest pain or discomfort (angina) that may feel like pressure or squeezing.</li>
            <li>Shortness of breath, especially during physical activity.</li>
            <li>Fatigue or feeling unusually tired.</li>
            <li>Swelling in your legs, ankles, or feet (due to fluid buildup).</li>
        </ul>
        <h3>Strokes</h3>
        <p>Use the <strong>FAST</strong> test to recognise the signs of a stroke:</p>
        <ul>
            <li><strong>Face:</strong> Is one side of the face drooping?</li>
            <li><strong>Arms:</strong> Can they lift both arms, or is one weak?</li>
            <li><strong>Speech:</strong> Is their speech slurred or strange?</li>
            <li><strong>Time:</strong> If you see these signs, call emergency services immediately.</li>
        </ul>

        <h2 className="section-title">How Much Salt Is Too Much?</h2>
        <p>Most people eat more salt than they need without even realising it. The recommended daily limit is about 6 grams of salt (around 1 teaspoon), but many of us eat much more.</p>
        <h3>Hidden Sources of Salt:</h3>
        <ul>
            <li>Processed foods like ready meals, crisps, and canned soups.</li>
            <li>Fast food and takeaway meals.</li>
            <li>Bread, breakfast cereals, and cheese often have surprising amounts of salt.</li>
        </ul>

        <h2 className="section-title">How to Protect Your Heart and Brain</h2>
        <p>Here are some practical tips to reduce salt and improve your heart health:</p>
        <ul>
            <li><strong>Check Labels:</strong> Look for foods with {`"low sodium" or "reduced salt"`} labels.</li>
            <li><strong>Cook at Home:</strong> Home-cooked meals let you control how much salt you add.</li>
            <li><strong>Use Herbs and Spices:</strong> Flavour your food with garlic, lemon, pepper, or fresh herbs instead of salt.</li>
            <li><strong>Limit Processed Foods:</strong> Cut back on salty snacks, cured meats, and ready meals.</li>
            <li><strong>Taste Before Adding Salt:</strong> Many dishes already contain enough natural flavour.</li>
        </ul>

        <div className="cta">
            <p><strong>Protect your heart and brain by cutting back on salt today.</strong> Small steps can lead to big improvements in your health. Explore our Resources page for heart-healthy recipes and tips to reduce salt in your meals.</p>
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
export default Heart_Disease_And_Strokes;