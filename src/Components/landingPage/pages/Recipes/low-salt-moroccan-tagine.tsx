import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltMoroccan:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
<section>

<main>
        <h1 className="animated-text">Low-Salt Moroccan Vegetable Tagine</h1>
        <p className="highlight">Moroccan Vegetable Tagine is an aromatic and flavourful stew, a staple in Moroccan cuisine. This low-salt version retains the rich, spicy essence of the traditional dish.</p>

        <section className="image-section">
            <img src="tagine-placeholder.jpg" alt="Low-Salt Moroccan Vegetable Tagine" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>2 tablespoons olive oil - for cooking.</li>
            <li>1 large onion, chopped - adds sweetness and depth.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>1 teaspoon ground cumin - adds earthy warmth.</li>
            <li>1 teaspoon ground coriander - for citrusy undertones.</li>
            <li>1 teaspoon ground turmeric - for colour and anti-inflammatory properties.</li>
            <li>1/2 teaspoon ground cinnamon - adds warmth and depth.</li>
            <li>1/4 teaspoon cayenne pepper (optional) - for heat.</li>
            <li>2 large carrots, peeled and diced - adds sweetness and texture.</li>
            <li>2 large potatoes, peeled and diced - provides heartiness.</li>
            <li>1 large sweet potato, peeled and diced - adds sweetness and texture.</li>
            <li>1 red bell pepper, diced - adds sweetness and colour.</li>
            <li>1 yellow bell pepper, diced - adds sweetness and colour.</li>
            <li>1 can (400g) chickpeas, drained and rinsed - provides protein and texture.</li>
            <li>1 can (400g) diced tomatoes - forms the base of the stew.</li>
            <li>2 cups low-sodium vegetable broth - for cooking.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavour.</li>
            <li>Fresh parsley or coriander, chopped - for garnish.</li>
            <li>Cooked couscous or quinoa, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Sauté the Aromatics:</span> Heat olive oil in a large tagine or pot over medium heat. Add chopped onion and minced garlic, and sauté until softened and fragrant.</li>
            <li><span className="highlight">Add the Spices:</span> Stir in ground cumin, ground coriander, ground turmeric, ground cinnamon, and cayenne pepper (if using). Cook for a minute until the spices are fragrant.</li>
            <li><span className="highlight">Add the Vegetables:</span> Add diced carrots, potatoes, sweet potatoes, red bell pepper, and yellow bell pepper to the pot. Stir to coat the vegetables with the spice mixture.</li>
            <li><span className="highlight">Incorporate the Chickpeas and Tomatoes:</span> Add drained chickpeas and diced tomatoes to the pot. Stir well to combine.</li>
            <li><span className="highlight">Simmer the Stew:</span> Pour in low-sodium vegetable broth, and bring the mixture to a simmer. Cover the pot and let the tagine simmer for about 20-25 minutes, or until the vegetables are tender and the flavours have melded together.</li>
            <li><span className="highlight">Adjust Seasoning and Serve:</span> Taste and adjust seasoning with salt and black pepper if necessary. Garnish with chopped parsley or coriander before serving. Serve hot with couscous or quinoa.</li>
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
export default LowSaltMoroccan;