import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "./style.css"
const The_Basics_of_Sodium_and_Health:React.FC=()=>{
return (<div style={{overflow:"auto",maxHeight:"100vh"}}>

<Navigation />

<div className="booklets">




{/* 
<header>
  <h1>The Basics of Sodium and Health</h1>
  <p>A Simple Guide to Managing Sodium for Better Health</p>
</header> */}
<div className="container">
<button id="menuToggle" className="menu-toggle" aria-label="Toggle Menu">
  <i className="fa fa-reorder"></i>
</button>
  <aside className="side-menu" style={{maxHeight:"100vh",overflow:"auto"}} id="sideMenu">
    <h2>Table of Contents</h2>
    <ul>
      <li><a href="#preface">Preface</a></li>
      <li><a href="#about-author">About the Author</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
      <li><a href="#section1">1. What is Sodium?</a></li>
      <li><a href="#section2">2. How Much Sodium Do We Need?</a></li>
      <li><a href="#section3">3. Health Risks of Too Much Sodium</a></li>
      <li><a href="#section4">4. Benefits of Reducing Sodium</a></li>
      <li><a href="#section5">5. Practical Tips to Reduce Sodium Intake</a></li>
      <li><a href="#section6">6. Resources and References</a></li>
      <li><a href="#glossary">Glossary of Terms</a></li>
      <li><a href="#final-thoughts">Final Thoughts</a></li>
      <li><a href="#back-cover">Back Cover</a></li>
    </ul>
  </aside>

  <main style={{maxHeight:"100vh",overflow:"auto"}}>
    <div className='header_mobile'>
      <h1>The Basics of Sodium and Health</h1>
  <p>A Simple Guide to Managing Sodium for Better Health</p>
    </div>

    <br/>
    <section className="preface" id="preface">
      <h2>Preface</h2>
      <p><em>The Basics of Sodium and Health</em> provides straightforward guidance on sodium’s role in the body, recommended limits, and simple strategies to reduce intake. Learn to spot hidden sodium, read labels, and discover tasty alternatives. This guide supports balanced, informed decisions for better everyday health.</p>
    </section>

    <section id="about-author" className="author">
      <h2>About the Author</h2>
      <p><strong>Jesse Enebi Usman</strong> is committed to health education and equity. His doctoral work at Sheffield Hallam University focuses on improving health outcomes and making healthcare information accessible, especially for underserved communities.</p>
    </section>

    <section id="acknowledgments" className="acknowledgments">
      <h2>Acknowledgments</h2>
      <p>Thanks to Sheffield Hallam University for supporting Jesse’s PhD research. Appreciation goes to Professor Markos Klonizakis, Professor Charmaine Childs, and Dr. David Rogerson for their mentorship and encouragement.</p>
    </section>

    <section id="glossary">
      <h2>Glossary of Terms</h2>
      <ul>
        <li><strong>Sodium:</strong> A mineral essential for functions like fluid balance, nerve function, and muscle movement.</li>
        <li><strong>Electrolyte:</strong> A substance that carries an electric charge, crucial for muscle and nerve function.</li>
        <li><strong>Processed Foods:</strong> Foods altered from their natural state, often with added sodium.</li>
        <li><strong>Low-Sodium Label:</strong> Indicates reduced sodium content on food packaging.</li>
        <li><strong>Hypertension:</strong> High blood pressure, which can be influenced by sodium intake.</li>
        <li><strong>Hidden Sodium:</strong> Sodium added to foods that may not taste salty, like breads or sauces.</li>
      </ul>
    </section>

    <section id="section1">
      <h2>1. What is Sodium?</h2>
      <p><strong>Objective:</strong> Understand what sodium is and how it differs from salt.</p>
      <p className="image-suggestion">Image Suggestion: An image of a saltshaker with fresh vegetables (as per cover suggestion), illustrating balance.</p>
      <img src="https://via.placeholder.com/700x300.png?text=Salt+%26+Veggies" alt="Salt and Vegetables Image"/>

      <h3>What is Sodium?</h3>
      <p>Sodium is a mineral that supports fluid balance, nerve function, and muscle movement. It’s part of table salt (sodium chloride), which is about 40% sodium and 60% chloride.</p>

      <h3>Why Do We Need Sodium?</h3>
      <p><strong>Fluid Balance:</strong> Maintains the right amount of fluids.</p>
      <p><strong>Nerve & Muscle Function:</strong> Sends signals enabling movement and sensation.</p>
      <p><strong>Teamwork with Potassium:</strong> Works together to keep cells healthy and balanced.</p>

      <div className="key-takeaway">Key Takeaway: Sodium is vital, but moderation is key. The next sections show how to keep it in check.</div>
      <p><strong>Sources:</strong><br/>
      CDC - <a href="http://www.cdc.gov/salt/facts.htm">www.cdc.gov/salt/facts.htm</a><br/>
      AHA - <a href="http://www.heart.org/sodium">www.heart.org/sodium</a></p>
    </section>

    <section id="section2">
      <h2>2. How Much Sodium Do We Need?</h2>
      <p><strong>Objective:</strong> Learn daily sodium limits and identify common sources.</p>

      <h3>Sodium Intake Guidelines</h3>
      <ul>
        <li><strong>WHO:</strong>{"< 2,000 mg/day (approx. 1 tsp salt"})</li>
        <li><strong>AHA:</strong> Ideal ≤1,500 mg/day for risk groups, max ≤2,300 mg/day</li>
        <li><strong>NHS (UK):</strong> ≤2,400 mg/day for adults</li>
      </ul>

      <h3>Common Sources of Sodium</h3>
      <p>Processed foods (canned soups, deli meats, breads) and dining out contribute most dietary sodium. Read labels for “low sodium” or “no added salt” and check %Daily Value to gauge intake.</p>

      <div className="key-takeaway">Key Takeaway: Use food labels and guidelines to keep sodium in a healthy range.</div>

      <p><strong>Sources:</strong><br/>
      AHA - <a href="http://www.heart.org/sodium">www.heart.org/sodium</a><br/>
      NHS - <a href="https://www.nhs.uk/live-well/eat-well/salt-nutrition/">NHS Salt Facts</a><br/>
      WHO - <a href="https://www.who.int/publications/i/item/9789241504836">WHO Guideline</a></p>
    </section>

    <section id="section3">
      <h2>3. Health Risks of Too Much Sodium</h2>
      <p><strong>Objective:</strong> Understand the impact of excessive sodium on health.</p>

      <h3>Key Health Risks</h3>
      <ul>
        <li><strong>High Blood Pressure:</strong> Excess sodium raises blood pressure.</li>
        <li><strong>Heart Disease:</strong> Leads to heart attacks and heart failure.</li>
        <li><strong>Kidney Damage:</strong> Overworks kidneys, potentially causing disease.</li>
        <li><strong>Bone Health:</strong> Causes calcium loss, risking osteoporosis.</li>
      </ul>

      <p><strong>At-Risk Groups:</strong> Those with high blood pressure, kidney issues, older adults, and people of African descent may be more affected.</p>
      <div className="key-takeaway">Key Takeaway: Too much sodium harms heart, kidneys, and bones. Moderation is essential.</div>

      <p><strong>Sources:</strong><br/>
      Mozaffarian et al. (2014) NEJM study<br/>
      CDC - Sodium Facts</p>
    </section>

    <section id="section4">
      <h2>4. Benefits of Reducing Sodium</h2>
      <p><strong>Objective:</strong> Recognize positive outcomes of lowering sodium intake.</p>

      <h3>Health Benefits</h3>
      <ul>
        <li><strong>Lower Blood Pressure:</strong> Reduces strain on heart and vessels.</li>
        <li><strong>Heart Health:</strong> Decreases risk of heart disease and stroke.</li>
        <li><strong>Kidney Protection:</strong> Less stress on kidneys, preventing disease.</li>
        <li><strong>Bone Strength:</strong> Retains more calcium, supporting bone density.</li>
      </ul>

      <div className="key-takeaway">Key Takeaway: Cutting sodium enhances heart, kidney, and bone health—simple steps, big impact.</div>
    </section>

    <section id="section5">
      <h2>5. Practical Tips to Reduce Sodium Intake</h2>
      <p><strong>Objective:</strong> Gain actionable strategies to lower sodium daily.</p>

      <h3>Easy Strategies</h3>
      <ul>
        <li><strong>Cook at Home:</strong> Control salt levels by using fresh ingredients.</li>
        <li><strong>Read Labels:</strong> Choose low or no-sodium products.</li>
        <li><strong>Use Herbs & Spices:</strong> Garlic, ginger, thyme, citrus juice add flavour.</li>
        <li><strong>Fresh Produce:</strong> Naturally low in sodium—opt for fresh or no-salt-added canned/frozen.</li>
        <li><strong>Careful Dining Out:</strong> Request less salt, sauces on the side, and select grilled/steamed options.</li>
      </ul>

      <div className="key-takeaway">Key Takeaway: Small changes, like reading labels and using spices, help maintain flavour and cut salt.</div>
    </section>

    <section id="section6">
      <h2>6. Resources and References</h2>
      <p>For more info and science-backed data:</p>
      <div className="resource-links">
        <a href="http://www.cdc.gov">CDC</a>
        <a href="http://www.heart.org">AHA</a>
        <a href="http://www.heartsafrica.org">HEARTSAFRICA</a>
      </div>
    </section>

    <section id="final-thoughts" className="final-thoughts">
      <h2>Final Thoughts</h2>
      <p>Making informed choices about sodium leads to better health. You don’t have to lose flavour—just find balance. Use the tips and label guidance in this booklet to keep sodium in check. Enjoy the natural tastes of fresh foods and protect your heart, kidneys, and bones. Explore the provided resources to continue learning.</p>
    </section>

    <section id="back-cover">
      <h2>Back Cover Summary</h2>
      <p>This booklet simplifies sodium and health, helping you understand daily limits, spot hidden sources, and adopt low-sodium habits. Whether learning to read labels or using herbs instead of salt, these steps support your heart, kidney, and bone health. Make small changes for big improvements and enjoy balanced, nutritious meals every day.</p>
    </section>

  </main>
</div>






    </div>



            <Footer/>

</div>)
}
export default The_Basics_of_Sodium_and_Health;