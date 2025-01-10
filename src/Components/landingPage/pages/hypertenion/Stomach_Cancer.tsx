import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Stomach_Cancer:React.FC=()=>{
return (<>
            <Navigation />

  <div style={{ height: "100vh", overflow: "auto" }}className="Reader_body">
            <br/><br/><br/>
            <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
<section>



<main>
        <h2>How Does Salt Increase the Risk of Stomach Cancer?</h2>
        <p>Eating too much salt doesn’t just harm your heart and kidneys—it can also increase your risk of stomach cancer. High salt intake can damage the lining of your stomach, making it more vulnerable to infection by <i>Helicobacter pylori</i> (H. pylori), a bacterium linked to stomach ulcers and cancer.</p>
        <p>Over time, the irritation and inflammation caused by excess salt can lead to long-term damage, increasing the likelihood of stomach cancer.</p>

        <h2 className="section-title">How Salt Affects Your Stomach</h2>
        <ul>
            <li><strong>Irritation of the Stomach Lining:</strong> Salt directly irritates the protective lining of your stomach, making it easier for harmful bacteria to take hold.</li>
            <li><strong>Promotes H. pylori Growth:</strong> Studies show that a high-salt diet creates a favourable environment for <i>H. pylori</i>, a known risk factor for stomach cancer.</li>
            <li><strong>Inflammation and Long-Term Damage:</strong> Chronic inflammation from <i>H. pylori</i> infection, combined with a high-salt diet, can lead to precancerous changes in the stomach.</li>
        </ul>

        <h2 className="section-title">Who’s Most at Risk?</h2>
        <ul>
            <li><strong>People with H. pylori Infection:</strong> Those already infected are at much greater risk.</li>
            <li><strong>Heavy Consumers of Processed or Pickled Foods:</strong> Foods like salted fish, cured meats, and pickles often have extremely high salt content.</li>
            <li><strong>Smokers and Alcohol Drinkers:</strong> Salt combined with other irritants increases the likelihood of stomach damage.</li>
        </ul>

        <h2 className="section-title">Symptoms of Stomach Cancer</h2>
        <ul>
            <li>Persistent stomach pain or discomfort.</li>
            <li>Nausea, vomiting, or loss of appetite.</li>
            <li>Blood in vomit or stools.</li>
            <li>Unexplained weight loss or feeling very tired.</li>
        </ul>
        <p>If you experience these symptoms, see a doctor as soon as possible.</p>

        <h2 className="section-title">How to Reduce Your Risk</h2>
        <ul>
            <li><strong>Cut Down on Processed and Pickled Foods:</strong> These are some of the biggest sources of hidden salt.</li>
            <li><strong>Opt for Fresh Ingredients:</strong> Fresh fruits, vegetables, and lean proteins are naturally low in salt and better for your stomach.</li>
            <li><strong>Treat H. pylori Infections:</strong> Regular check-ups can detect and treat <i>H. pylori</i> before it causes serious damage.</li>
            <li><strong>Limit Salted Snacks:</strong> Reduce your intake of crisps, salted nuts, and similar high-salt foods.</li>
            <li><strong>Cook at Home:</strong> Preparing meals at home helps you control how much salt goes into your food.</li>
        </ul>

        <h2 className="section-title">Did You Know?</h2>
        <ul>
            <li>Stomach cancer rates are significantly higher in countries where diets include a lot of salted, smoked, or pickled foods.</li>
            <li>Cutting back on salt can reduce your risk of stomach cancer and improve overall digestive health.</li>
        </ul>

        <div className="cta">
            <p><strong>Protect your stomach by reducing salt and eating fresh, unprocessed foods.</strong> Explore our Resources page for healthy, low-salt recipes and tips to support your digestive health.</p>
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

export default Stomach_Cancer