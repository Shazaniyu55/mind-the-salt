import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "./style.css"
const Reducing_Salt_Intake_A_Simple_Guide_for_People_of_African_Descent_in_the_UK:React.FC=()=>{
return (<div style={{overflow:"auto",maxHeight:"100vh"}}>

<Navigation />

<div className="booklets">



{/* <header>
  <h1>Reducing Salt Intake: A Simple Guide for People of African Descent in the UK</h1>
  <p>Empower Yourself with Healthier Choices</p>
</header> */}

<div className="container">
  <button id="menuToggle" className="menu-toggle" aria-label="Toggle Menu">
    <i className="fa fa-reorder"></i>
  </button>
  <aside style={{maxHeight:"100vh",overflow:"auto"}} id="sideMenu" className="side-menu">
    <br/><br/><br/>
    <h2>Contents</h2>

    <ul>
      <li><a href="#about-author">About the Author</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
      <li><a href="#welcome-message">Welcome Message</a></li>
      <li><a href="#section1">Section 1: Understanding Salt &amp; Health</a></li>
      <li><a href="#section2">Section 2: Identifying High-Salt Foods</a></li>
      <li><a href="#section3">Section 3: Practical Tips for Reducing Salt</a></li>
      <li><a href="#section4">Section 4: Your Personal Plan</a></li>
      <li><a href="#appendix">Appendixes</a></li>
      <li><a href="#final-thoughts">Final Thoughts</a></li>
    </ul>
  </aside>
  <main style={{maxHeight:"100vh",overflow:"auto"}}>
    <div className='header_mobile'>
      <h1>Reducing Salt Intake: A Simple Guide for People of African Descent in the UK</h1>
      <p>Empower Yourself with Healthier Choices</p>
    </div>
    <br/>
    <section id="about-author" className="author">
      <h2>About the Author</h2>
      <p><strong>Jesse Enebi Usman</strong> is dedicated to health education and equity. This booklet, part of his doctoral work at Sheffield Hallam University, focuses on improving health outcomes for underserved communities by making healthcare information accessible and impactful.</p>
    </section>

    <section id="acknowledgments" className="acknowledgments">
      <h2>Acknowledgments</h2>
      <p>Special thanks to Sheffield Hallam University for supporting Jesse’s PhD research. Gratitude to Professor Markos Klonizakis, Professor Charmaine Childs, and Dr. David Rogerson for their mentorship and encouragement.</p>
    </section>

    <section id="welcome-message">
      <h2>Welcome Message</h2>
      <p><strong>Welcome!</strong><br/>
      Thank you for choosing <em>Reducing Salt Intake: A Simple Guide for People of African Descent in the UK</em>. This guide aims to empower you with tools and knowledge to manage sodium intake, tackle high blood pressure in our community, and maintain flavourful traditions while nurturing good health.</p>
    </section>

    <section id="section1">
      <h2>Section 1: Understanding Salt and Health in the African Descent Community</h2>
      <p><strong>Objective:</strong> Understand how salt affects health and how to make practical changes.</p>
      <p className="image-suggestion">Image Suggestion: Infographic on salt intake, blood pressure, and health risks.</p>
      <img src="https://via.placeholder.com/700x300.png?text=Infographic" alt="Salt and Blood Pressure Infographic"/>

      <h3>Salt and High Blood Pressure</h3>
      <p>Excessive salt leads to fluid retention, raising blood pressure and increasing risks of heart disease, stroke, and kidney damage. Regular check-ups and mindful salt reduction are key.</p>

      <h3>Cultural Influences on Diet</h3>
      <p>Salt is integral to many African and Afro-Caribbean cuisines. Honour tradition by exploring herbs, spices, and new techniques to maintain flavour while cutting salt.</p>

      <h3>Access to Healthy Food</h3>
      <p>Limited access to fresh, healthy foods often means relying on salty, processed options. Supporting local markets, farming initiatives, and affordable cooking classNamees can improve community health.</p>

      <div className="key-takeaway">Key Takeaway: Cultural respect plus healthier habits equals stronger communities and better well-being.</div>
    </section>

    <section id="section2">
      <h2>Section 2: Identifying High-Salt Foods</h2>
      <p><strong>Objective:</strong> Recognise hidden salt in traditional dishes.</p>
      <p className="image-suggestion">Image Suggestion: Photos of seasoning cubes, smoked meats, sauces alongside fresh ingredients.</p>
      <img src="https://via.placeholder.com/700x300.png?text=High-Salt+Foods" alt="High-Salt Foods Examples"/>

      <h3>Traditional Dishes and Hidden Salt</h3>
      <p>Soups, stews, sauces, preserved meats, fermented foods, and spice blends often contain hidden salt. Read labels, cook with fresh ingredients, and experiment with homemade seasonings to reduce salt while keeping meals tasty.</p>

      <div className="key-takeaway">Key Takeaway: Identify hidden salt sources to make healthier choices without losing cultural essence.</div>
    </section>

    <section id="section3">
      <h2>Section 3: Practical Tips for Reducing Salt</h2>
      <p><strong>Objective:</strong> Learn shopping, cooking, and dining strategies to cut salt intake.</p>
      <p className="image-suggestion">Image Suggestion: A checklist of herbs and spices as salt replacements.</p>
      <img src="https://via.placeholder.com/700x300.png?text=Spices+%26+Herbs" alt="Herbs and Spices Checklist"/>

      <h3>Shopping for Lower-Salt Options</h3>
      <p>Choose fresh produce, lean meats, whole grains, and “no added salt” products. Plan meals and use herbs/spices for flavour.</p>

      <h3>Adding Flavour Without Salt</h3>
      <p>Garlic, ginger, thyme, citrus, and vinegar add depth to dishes. Experiment with new recipes and techniques to maintain taste.</p>

      <h3>Making Healthier Choices When Eating Out</h3>
      <p>Opt for grilled or steamed dishes, request sauces on the side, share portions, and be mindful of hidden salt.</p>

      <h3>Explore Different Cooking Techniques</h3>
      <p>Grill, roast, or bake to enhance natural flavours without relying on salt.</p>

      <div className="key-takeaway">Key Takeaway: Small steps—reading labels, using spices—significantly cut salt while preserving deliciousness.</div>
    </section>

    <section id="section4">
      <h2>Section 4: Creating Your Personal Salt Reduction Plan</h2>
      <p><strong>Objective:</strong> Set goals, track progress, and seek support.</p>
      <p className="image-suggestion">Image Suggestion: A sample goal-setting template graphic.</p>
      <img src="https://via.placeholder.com/700x300.png?text=Goal+Setting+Template" alt="Goal Setting Template"/>

      <h3>Setting Achievable Goals</h3>
      <p>Reduce salt gradually, involve family, celebrate milestones. It’s about steady progress, not perfection.</p>

      <h3>Taking Actionable Steps</h3>
      <p>Try new seasonings, seek community support, and consult health professionals or online groups for guidance.</p>

      <h3>Tracking Progress and Seeking Support</h3>
      <p>Use a food diary, share updates with friends, learn from setbacks, and monitor blood pressure regularly.</p>

      <div className="key-takeaway">Key Takeaway: A tailored plan plus community support makes salt reduction sustainable and encouraging.</div>
    </section>

    <section id="appendix">
      <h2>Appendixes</h2>
      <h3>1. Goal Setting Template</h3>
      <table>
        <tr><th>Goal</th><th>Target Date</th><th>Progress Check Date</th><th>Completed (✔)</th></tr>
        <tr><td>Reduce salt in cooking by 50%</td><td>1 month from today</td><td>2 weeks from today</td><td></td></tr>
      </table>

      <h3>2. Daily Tracking Log</h3>
      <table>
        <tr><th>Date</th><th>Food/Dish</th><th>Salt Used</th><th>Herbs/Spices Substituted</th></tr>
        <tr><td>2024-11-08</td><td>Egusi Soup</td><td>1 tsp</td><td>Thyme, garlic</td></tr>
      </table>

      <h3>3. Weekly Reflection and Adjustments</h3>
      <table>
        <tr><th>Reflection Area</th><th>Notes</th></tr>
        <tr><td>What went well this week?</td><td></td></tr>
        <tr><td>What challenges did I face?</td><td></td></tr>
        <tr><td>What adjustments can I make for next week?</td><td></td></tr>
      </table>
    </section>

    <section id="final-thoughts" className="final-thoughts">
      <h2>Final Thoughts</h2>
      <p>Making positive changes starts with small steps. Reducing salt protects your heart and kidneys. This guide helps balance tradition with healthier eating, empowering you to shape a better future for yourself and your family.</p>

      <h3>Resources and Further Information</h3>
      <div className="resource-links">
        <a href="http://www.bhf.org.uk">British Heart Foundation</a> 
        <a href="http://www.worldhypertensionleague.org">World Hypertension League</a> 
        <a href="http://www.cdc.gov">CDC - Sodium Facts</a> 
        <a href="http://www.nhs.uk">NHS - Salt and Your Diet</a> 
        <a href="http://www.heartsafrica.org">HEARTS AFRICA</a>
      </div>
    </section>

    <section className="back-cover">
      <h2>Back Cover Summary</h2>
      <p>This booklet offers practical, culturally sensitive advice on reducing salt intake for people of African descent in the UK. Learn to identify hidden salt, make healthier swaps, and create a personal plan—all without losing the flavours you love. Small changes can lead to big health gains.</p>
    </section>
  </main>
</div>
















    </div>



            <Footer/>

</div>)
}
export default Reducing_Salt_Intake_A_Simple_Guide_for_People_of_African_Descent_in_the_UK;