"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Link from 'next/link';

const Findings: React.FC = () => {
  return (
    <>
  <Navigation />
       <div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">
     
     
       <br/><br/><br/>
       <br/><br/><br/>
     <section style={{maxWidth:900,margin:"0 auto"}}>            
     <div>
        <div>

      
    <div>
      <h1>RESEARCH</h1><br/>
      <h2>LATEST FINDINGS</h2>

      <h3>Some current research findings on hypertension</h3>
      <ul>
        <li>
          A systematic review and meta-analysis of natural and quasi-experiments on interventions in hypertension found that education and counseling on lifestyle modifications such as promoting physical activity, promoting a healthy diet, and smoking cessation consultations could help prevent hypertension in healthy people. <Link href="#">Visit here for more.</Link>
        </li>
        <li>
          A study on investigating hypertension in younger patients found that secondary hypertension may account for up to 30% of diagnoses of young onset hypertension. The most common causes are thyroid dysfunction, renal parenchymal disease, and renal artery stenosis secondary to fibromuscular dysplasia. <Link href="#">Visit here for more.</Link>
        </li>
        <li>
          A study by researchers at NUI Galway, Johns Hopkins University, and Harvard Medical School found no evidence that diastolic blood pressure can be harmful to patients when reduced to levels that were previously considered to be too low. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          An article highlighting the most influential ten clinical studies on hypertension in 2022 concluded that the rational use of antihypertensive medications is important for effective hypertension management. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A summary of some of the most important clinical trials in hypertension research published in 2022/2023, including findings regarding new pharmacological approaches to treat resistant hypertension and describing new insights on the optimal timing of antihypertensive therapies. <Link href="#">Click here for more.</Link>
        </li>
      </ul>

      <h3>Some current findings on hypertension and salt intake</h3>
      <ul>
        <li>
          An umbrella review of systematic reviews found that blood pressure was significantly associated with sodium intake. The study also found significant associations between sodium, fats, and carbohydrates with cholesterol. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A systematic review and dose-response meta-analysis of observational cohort studies up to January 21, 2022, found an almost linear relationship between sodium intake/excretion and hypertension risk. The study confirmed prior findings based on experimental studies and reinforced the validity of recommendations to prevent cardiovascular disease through the reduction of sodium intake in both normotensive and hypertensive adults. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A randomized trial comparing the effects of high-sodium and low-sodium diets on blood pressure in adults with normal blood pressure and high blood pressure found that following a low-sodium diet significantly lowered blood pressure in 70%-75% of participants in as little as one week. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A study found that reducing sodium intake in adults with elevated blood pressure or hypertension decreased thirst, urine volume (a marker of fluid intake), and blood pressure, but did not affect metabolic energy needs. <Link href="#">Click here for more.</Link>
        </li>
      </ul>

      <h3>Some current research findings on hypertension in people of African descent</h3>
      <ul>
        <li>
          A genome-wide association study of blood pressure in 31,968 Africans and African-Americans identified three novel genomic regions associated with blood pressure. These regions had not been reported in previous studies of other races/ethnicities. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A cross-sectional study of seven communities in East and West Africa found that a quarter of participants had hypertension, about 40% were unaware, half of those aware were treated, and half of those treated had controlled blood pressure. The study also found that access to health insurance is needed to improve awareness, treatment, and control of hypertension in sub-Saharan Africa. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          The Bogalusa Heart Study found that blood pressure variability, diet, salt intake, and other environmental effects had a greater damaging effect on the hearts of black Americans compared with Caucasian Americans due to differing autonomic and metabolic responses to stress. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A study found that eight of 10 studies reported higher rates of hypertension in men of African descent, and eight of nine studies showed higher rates of hypertension in women of African descent. <Link href="#">Click here for more.</Link>
        </li>
      </ul>

      <h3>Some current research findings on salt intake in people of African descent</h3>
      <ul>
        <li>
          A systematic review and meta-regression of salt intakes in sub-Saharan Africa found that 81% of adult populations consumed more than the World Health Organisation’s recommended maximum intake of 2g sodium/day. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A study found shocking levels of salt in popular African and Caribbean foods served in restaurants across London. This high salt content could potentially contribute to hypertension and cardiovascular complications in people of Black African descent globally. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A study reported that popular dishes from African and Caribbean restaurants in London can contain the same level of salt as that in over 30 packets of ready-salted crisps. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A study on salt intake in South Africa reported a mean dietary salt intake of 10.2g (standard deviation 3.05g) in subjects of African descent. The higher salt intake could reflect a transition to the Westernised dietary pattern, which includes more salted, processed foods. <Link href="#">Click here for more.</Link>
        </li>
        <li>
          A new two-year exploratory research grant has been received to study the link between salt taste sensitivity and salt intake, blood pressure, hypertension, and genetic variations in individuals of African descent. <Link href="#">Click here for more.</Link>
        </li>
      </ul>
    </div>



    </div>
        </div>
</section>
<br/>
<br/>
<br/>
        <Footer />
      </div>
    </>
  );
};

export default Findings;
