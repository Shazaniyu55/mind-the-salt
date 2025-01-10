"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';

const LowSaltAccessPlan: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <Navigation />
        <br /><br /><br />

        <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
          <h1>Low-Salt Success Plan</h1>

          <h2>Overview</h2>
          <p>The plan spans 4 weeks. Participants will have access to detailed weekly goals, a variety of resources, interactive tools, and continuous support from doctors or dieticians.</p>

          <h2>Week 1: Introduction to Low-Sodium Living</h2>
          <h3>Objective:</h3>
          <p>Understand the health risks associated with high sodium intake and identify common high-sodium foods.</p>
          <h3>Activities:</h3>
          <ul>
            <li>{`Start the "Sodium 101" interactive module.`}</li>
            <li>Use the Interactive Salt Calculator daily to track sodium intake.</li>
          </ul>
          <h3>Resources:</h3>
          <p>A variety of resources, such as leaflets, guide booklets, posters, and videos are provided on the website under Education.</p>
          <h3>Challenge:</h3>
          <p>Eliminate one high-sodium snack from your diet this week.</p>

          <h2>Week 2: Smart Grocery Shopping</h2>
          <h3>Objective:</h3>
          <p>Learn to read and understand food labels to make low-sodium choices.</p>
          <h3>Activities:</h3>
          <ul>
            <li>Complete the Sodium 101 module and the assessment.</li>
          </ul>
          <h3>Resources:</h3>
          <p>A variety of resources, such as leaflets, guide booklets, posters, and videos are provided on the website.</p>
          <h3>Challenge:</h3>
          <p>Prepare a salt-free dinner using fresh ingredients.</p>

          <h2>Week 3: Cooking and Seasoning Techniques</h2>
          <h3>Objective:</h3>
          <p>Master cooking techniques that enhance flavor without adding extra salt.</p>
          <h3>Activities:</h3>
          <ul>
            <li>Download and study our Low-Salt Guide. Start incorporating the techniques into at least two meals per day.</li>
          </ul>
          <h3>Resources:</h3>
          <p>Low-Salt Guide and recipes provided on the website.</p>
          <h3>Challenge:</h3>
          <p>Host a low-sodium meal night for family or friends.</p>

          <h2>Week 4: Establishing New Habits</h2>
          <h3>Objective:</h3>
          <p>Solidify low-sodium habits and understand how to maintain them long-term.</p>
          <h3>Activities:</h3>
          <ul>
            <li>Review progress with your doctor or dietician in a one-on-one session.</li>
            <li>Set long-term low-sodium goals based on personal dietary needs.</li>
          </ul>
          <h3>Resources:</h3>
          <p>Access the Low-Salt Guide and other resources provided on the website.</p>
          <h3>Challenge:</h3>
          <p>Avoid adding table salt to any meals for one week.</p>

          <h2>Tools and Support</h2>
          <p>Continuous Access to a healthcare professional: Routine check-ins with healthcare professionals can be arranged through this website.</p>
          <p>Interactive Tools: Interact with this website as a registered member. Only members have access to the interactive tools such as Health Monitor, Medication Tracker, etc.</p>
          <p>Community Forum: Ongoing support and engagement through our active online community and forums.</p>

          <h2>Educational Materials</h2>
          <ul>
            <li>Downloadable Guides</li>
            <li>Educational Videos and Animations</li>
            <li>Research Articles</li>
            <li>Downloadable Infographics</li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LowSaltAccessPlan;
