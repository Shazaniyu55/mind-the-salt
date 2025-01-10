"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';

const Brochures: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <Navigation />
        <br /><br /><br />

        <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
        <div>
      <h1>BROCHURES</h1>
      <div className="module">
        <h2>Sodium 101: A Quick Guide to Understanding and Managing Sodium Intake</h2>
        <div className="moduleOverview">
          <p>
            This module is designed to educate participants about the fundamental aspects of sodium in our diet, its essential roles in the human body, the consequences of excessive sodium intake, and effective strategies for sodium reduction. The goal is to empower individuals to make informed dietary choices for better health outcomes.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Section 1: Introduction to Sodium</h2>
        <div className="objective">
          <h3>Objective</h3>
          <p>
            This section introduces what sodium is, explains its important roles in our bodies, and outlines why it is a crucial part of our diets. By the end of this section, you should understand the difference between sodium and salt and know why our bodies need sodium.
          </p>
        </div>

        <div className="whatIsSodium">
          <h3>What is Sodium?</h3>
          <p>
            <strong>Definition:</strong> Sodium is a naturally occurring element that is soft and silvery-white when pure. It reacts easily with other elements, especially chlorine, to form sodium chloride—commonly known as table salt. In the body, sodium acts as an electrolyte, which means it carries an electric charge when dissolved in fluids such as blood.
          </p>
          <p>
            <strong>Sodium vs. Salt:</strong> {`It's important to distinguish between sodium and salt. Table salt is a compound made up of about 40% sodium and 60% chloride. Most of the sodium we eat comes from salt.`}
          </p>
        </div>

        <div className="whyDoWeNeedSodium">
          <h3>Why Do We Need Sodium?</h3>
          <ul>
            <li><strong>Fluid Balance:</strong> Sodium is crucial for keeping the right balance of fluids in your body. It helps control your blood pressure and is vital for staying hydrated.</li>
            <li><strong>Nerve Function:</strong> Sodium is essential for sending electrical signals in the nervous system. These signals are necessary for everything from moving your muscles to feeling sensations.</li>
            <li><strong>Overall Function:</strong> Sodium works with potassium, another electrolyte, to help maintain your body’s acid-base balance, move nutrients into cells, and remove waste products.</li>
          </ul>
        </div>

        <div className="sodiumInDailyLives">
          <h3>Sodium in Our Daily Lives</h3>
          <ul>
            <li><strong>Culinary Uses:</strong> Beyond health, sodium chloride (table salt) is a staple in kitchens worldwide because it enhances flavors, preserves food, and helps cure meats.</li>
            <li><strong>Industrial Uses:</strong> Sodium is also used in many industrial applications. For example, sodium bicarbonate, or baking soda, is used in baking, cleaning, and even in fire extinguishers.</li>
          </ul>
        </div>

        <div className="educationalInsight">
          <h3>Educational Insight</h3>
          <p>
            Understanding the role of sodium starts with recognizing its essential functions in the body and its uses in our daily lives. While necessary for health, too much sodium can cause health issues, making it important to manage how much we consume.
          </p>
        </div>

        <div className="conclusion">
          <h3>Conclusion</h3>
          <p>
            Sodium is vital for many body functions, but many people consume more than necessary, largely due to processed foods. The following sections will explore how to manage and balance sodium intake effectively.
          </p>
        </div>

        <div className="references">
          <h3>References</h3>
          <ul>
            <li>{`Centers for Disease Control and Prevention (CDC). (2022). "Sodium Fact Sheet." This resource explains sodium's role in the body and its impact on health. Available at `}<Link href="https://www.cdc.gov/salt/pdfs/sodium_role.pdf">CDC Sodium Facts</Link>.</li>
            <li>{`American Heart Association (AHA). (2022). "How much sodium should I eat per day?" This article provides guidelines on daily sodium intake. Available at `}<Link href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day">American Heart Association - Sodium Intake</Link>.</li>
          </ul>
        </div>
      </div>

      {/* Repeat similar structures for other sections */}
      
      <div className="assessment">
        <h2>Assessment</h2>
        <p>Click on the link below to complete the assessment based on this module. Your participation helps enhance our understanding and improvement of this educational content.</p>
        <Link href="#">Begin Assessment</Link>
      </div>
    </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Brochures;
