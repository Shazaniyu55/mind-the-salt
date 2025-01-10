"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css";

const OurResearchStrategy: React.FC = () => {
  return (
    <><Navigation />
    <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
  
  
    <br/><br/><br/>
    <br/><br/><br/>
  <section style={{maxWidth:900,margin:"0 auto"}}>            
  <div>
        <div>
      <h1>OUR RESEARCH STRATEGY</h1>
<br/>
      <h2>Current Research on Dietary Salt Intake</h2>
      <p>
        Our current research explores how too much salt in our diets leads to high blood pressure. It is known that many people of African descent consume more than the recommended amount of salt, which significantly raises the risk of hypertension. Here is what we are currently doing:
      </p>
      <ul>
        <li>
          <strong>Educating:</strong> We are developing clear, easy-to-understand materials that explain how salt impacts your health and contributes to high blood pressure. You can access these from the RESOURCES page of the website.
        </li>
        <li>
          <strong>Advocating:</strong> We push for healthier eating habits by supporting policies that reduce salt in processed foods and help communities make better dietary choices.
        </li>
        <li>
          <strong>Researching:</strong> We partner with academic institutions to study the specific effects of salt on blood pressure among African populations.
        </li>
        <li>
          <strong>Supporting:</strong> We are creating guides and programs that help individuals understand how to effectively reduce salt in their diet and manage their blood pressure.
        </li>
      </ul>

      <h2>Expanding Future Research</h2>
      <p>
        Understanding that high blood pressure has many causes, we plan to expand our research to cover additional risk factors:
      </p>
      <ul>
        <li>
          <strong>Physical Inactivity:</strong> We intend to investigate how different levels of physical activity can influence blood pressure. This includes studying the effects of simple daily activities like walking, and more intense exercises. We’ll develop programs that encourage people to integrate more activity into their everyday lives.
        </li>
        <li>
          <strong>Tobacco and Alcohol Use:</strong> Our future research will look into how smoking and excessive alcohol consumption contribute to high blood pressure. We plan to create educational campaigns and support groups to help people quit smoking and reduce alcohol intake.
        </li>
        <li>
          <strong>Stress Management:</strong> Chronic stress is a major contributor to hypertension. We aim to explore various stress management techniques, such as mindfulness, meditation, and lifestyle coaching. Our goal is to find the most effective methods to reduce stress and promote these practices through workshops and online resources.
        </li>
        <li>
          <strong>Dietary Education Beyond Salt:</strong> While salt intake is crucial, other dietary factors also affect blood pressure. We plan to research the impact of fats, sugars, and overall calorie intake. Educational programs will be developed to teach balanced eating practices.
        </li>
      </ul>
    </div>
        </div>
        </section>
<br/><br/>
        <Footer />
      </div>
    </>
  );
};

export default OurResearchStrategy;
