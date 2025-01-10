"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';

const TreatmentOption: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "auto", backgroundColor:"#FFA805" }}>
        <Navigation />
        <br /><br /><br />

  <div style={{ padding: 20, maxWidth: 900, margin: "10px auto", backgroundColor:"#fff"}}>
   
    <div>
      <h1><Bold>Treatment Options</Bold></h1><br/>
      <h2>Understanding Treatment Options for High Blood Pressure</h2>
      <p>
        Managing high blood pressure involves a mix of medications, lifestyle changes, and sometimes alternative therapies. Here is a clear breakdown of the options:
      </p>

      <h3>Medications</h3>
      <ul>
        <li><strong>Diuretics:</strong> These help your body get rid of extra salt and water, which can lower your blood pressure.</li>
        <li><strong>ACE Inhibitors:</strong> These drugs stop a hormone called angiotensin II from making your blood vessels narrow, so your blood vessels relax and your blood pressure goes down.</li>
        <li><strong>Angiotensin II Receptor Blockers (ARBs):</strong> Similar to ACE inhibitors, ARBs help your blood vessels stay relaxed, lowering blood pressure.</li>
        <li><strong>Beta Blockers:</strong> These reduce how hard your heart has to work, which helps lower your blood pressure.</li>
        <li><strong>Calcium Channel Blockers:</strong> These prevent calcium from entering the cells of your heart and blood vessels, helping your blood vessels relax and reducing blood pressure.</li>
      </ul>

      <h3>Lifestyle Changes</h3>
      <ul>
        <li><strong>Healthy Diet:</strong> Eating plenty of fruits, vegetables, whole grains, and lean proteins, and cutting back on salt, fats, and sugars can help control blood pressure.</li>
        <li><strong>Regular Exercise:</strong> Activities like walking, swimming, or cycling for about 30 minutes on most days can significantly lower blood pressure.</li>
        <li><strong>Weight Management:</strong> Keeping a healthy weight reduces the burden on your heart and can decrease blood pressure.</li>
        <li><strong>Limiting Alcohol:</strong> Drinking less alcohol or none at all can lower your blood pressure.</li>
        <li><strong>Quitting Smoking:</strong> Stopping smoking improves your blood {`vessels'`} health and decreases blood pressure.</li>
      </ul>

      <h3>Alternative and Complementary Therapies</h3>
      <ul>
        <li><strong>Mindfulness and Stress Reduction:</strong> Techniques like meditation, deep breathing, and yoga can reduce stress and help lower blood pressure.</li>
        <li><strong>Biofeedback:</strong> This method uses devices to teach you how to control certain body functions, like heart rate, which can help manage blood pressure.</li>
        <li><strong>Acupuncture:</strong> This traditional therapy might lower blood pressure by activating specific body points.</li>
        <li><strong>Herbal Supplements:</strong> Some herbs like garlic and fish oil might help lower blood pressure, but it’s important to talk with a doctor before trying these.</li>
        <li><strong>Nutritional Supplements:</strong> Supplements like potassium, magnesium, and omega-3 fatty acids can also help, but should be used under medical supervision.</li>
      </ul>

      <h3>Consulting Healthcare Professionals</h3>
      <p>
        It is crucial to talk to a healthcare provider before starting any new treatment for high blood pressure, especially to avoid interactions with other medications you might be taking.
      </p>
      <h3>Combining Treatments</h3>
      <p>
        Often, the best way to manage high blood pressure is by combining different treatments. Medications might be necessary, but lifestyle changes and alternative therapies can significantly boost their effectiveness.
      </p>
    </div>

        </div>

        <Footer />
      </div>
    </>
  )
}
export default TreatmentOption;
