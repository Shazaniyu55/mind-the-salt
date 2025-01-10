import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Lowsaltugaliandsukumawiki:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

           <section>


            
    <main>
        <h1 className="animated-text">Low-Salt Ugali and Sukuma Wiki</h1>
        <p className="highlight">Ugali and Sukuma Wiki is a staple meal in East Africa, particularly Kenya and Tanzania. This recipe focuses on creating a nutritious and flavourful dish while being mindful of sodium intake.</p>

        <section className="image-section">
            <img src="ugali-sukuma-placeholder.jpg" alt="Low-Salt Ugali and Sukuma Wiki" className="recipe-image"/>
        </section>

        <h2>Ingredients for Ugali</h2>
        <ul>
            <li>2 cups maize flour (cornmeal) - the main ingredient.</li>
            <li>4 cups water - for cooking.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
        </ul>

        <h2>Ingredients for Sukuma Wiki</h2>
        <ul>
            <li>1 bunch of collard greens or kale, washed and chopped - provides greens.</li>
            <li>1 large onion, chopped - for flavour.</li>
            <li>2 tomatoes, chopped - adds acidity and moisture.</li>
            <li>2 tablespoons vegetable oil - for sautéing.</li>
            <li>1 teaspoon grated ginger - adds warmth.</li>
            <li>1/2 teaspoon turmeric - for colour and its anti-inflammatory properties.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavour.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Ugali:</span> In a large pot, bring the water to a boil. Gradually add maize flour to the boiling water, stirring constantly to prevent lumps from forming. Continue stirring until the mixture thickens and starts to pull away from the sides of the pot. Reduce the heat to low and simmer, covered, for about 10-15 minutes, stirring occasionally, until the Ugali is cooked through and has a smooth, firm texture. If using salt, add it sparingly during cooking and adjust to taste.</li>
            <li><span className="highlight">Cook the Sukuma Wiki:</span> Heat vegetable oil in a large pan over medium heat. Add chopped onions and sauté until translucent. Stir in grated ginger and turmeric, and cook for another minute until fragrant. Add chopped tomatoes and cook until they soften and release their juices. Add the chopped collard greens or kale to the pan, stirring to combine with the onion and tomato mixture. Cover the pan and let the greens cook for about 10-15 minutes, stirring occasionally, until they are tender. Season with salt and freshly ground black pepper to taste, if desired. Keep in mind that the dish will still be flavourful without added salt.</li>
            <li><span className="highlight">Serve:</span> Serve the hot Ugali alongside the Sukuma Wiki for a wholesome and satisfying meal.</li>
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
export default Lowsaltugaliandsukumawiki;