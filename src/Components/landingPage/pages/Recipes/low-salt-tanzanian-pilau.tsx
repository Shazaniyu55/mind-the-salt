import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltTanzanianPilau:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

           <section>

            
    <main>
        <h1 className="animated-text">Low-Salt Tanzanian Pilau</h1>
        <p className="highlight">Tanzanian Pilau is a fragrant and spiced rice dish that is a beloved staple in Tanzanian cuisine. This version reduces salt while maintaining the {"dish's"} aromatic and flavourful essence.</p>

        <section className="image-section">
            <img src="tanzanian-pilau-placeholder.jpg" alt="Low-Salt Tanzanian Pilau" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>2 cups basmati rice - the main ingredient.</li>
            <li>2 tablespoons vegetable oil - for cooking.</li>
            <li>1 large onion, finely chopped - adds sweetness and depth.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>1 tablespoon grated ginger - adds warmth.</li>
            <li>1 teaspoon ground cumin - adds earthy flavour.</li>
            <li>1 teaspoon ground coriander - adds citrusy undertones.</li>
            <li>1 teaspoon ground cardamom - for floral notes.</li>
            <li>1/2 teaspoon ground cloves - adds warmth and depth.</li>
            <li>1/2 teaspoon ground cinnamon - adds warmth and sweetness.</li>
            <li>1/4 teaspoon ground turmeric - for colour and flavour.</li>
            <li>2 cups low-sodium vegetable or chicken broth - for cooking.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavour.</li>
            <li>Fresh coriander leaves, chopped - for garnish.</li>
            <li>Cashew nuts or raisins, for garnish (optional).</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Rinse the Rice:</span> Rinse the basmati rice under cold water until the water runs clear. Drain and set aside.</li>
            <li><span className="highlight">Sauté the Aromatics:</span> Heat vegetable oil in a large pot over medium heat. Add chopped onion and sauté until softened and translucent. Stir in minced garlic and grated ginger, and cook for another minute until fragrant.</li>
            <li><span className="highlight">Toast the Spices:</span> Add ground cumin, coriander, cardamom, cloves, cinnamon, and turmeric to the pot. Toast the spices for a minute until fragrant, stirring continuously to prevent burning.</li>
            <li><span className="highlight">Cook the Rice:</span> Add the rinsed basmati rice to the pot, stirring to coat it evenly with the spiced onion mixture. Pour in low-sodium broth, and bring the mixture to a boil. Reduce the heat to low, cover the pot, and let it simmer for 15-20 minutes, or until the rice is cooked through and the liquid is absorbed.</li>
            <li><span className="highlight">Adjust Seasoning and Serve:</span> Taste the Pilau and adjust seasoning with salt and freshly ground black pepper if necessary. Garnish with chopped coriander and cashew nuts or raisins (if using) before serving. Serve hot as a side dish or main course.</li>
        </ol>

        <div className="back-link">
            <a href="recipes.html">&#8592; Back to Recipes</a>
        </div>
    </main>
           </section>
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default LowSaltTanzanianPilau;