import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltChakalaka:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

           
    <main>
      <section>
        <h1 className="animated-text">Low-Salt Chakalaka</h1>
        <p className="highlight">Chakalaka originates from South Africa. This spicy vegetable relish is perfect as a side dish or condiment, delivering vibrant flavours with minimal salt content.</p>

        <section className="image-section">
            <img src="chakalaka-placeholder.jpg" alt="Low-Salt Chakalaka" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>2 tablespoons vegetable oil - for sautéing.</li>
            <li>1 large onion, finely chopped - adds sweetness and depth.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>1 red bell pepper, chopped - provides sweetness and colour.</li>
            <li>1 green bell pepper, chopped - adds freshness and texture.</li>
            <li>2 large carrots, grated - adds sweetness and texture.</li>
            <li>1 large tomato, chopped - forms the base of the relish.</li>
            <li>1 tablespoon tomato paste - enhances richness and depth.</li>
            <li>1 teaspoon ground paprika - for colour and mild heat.</li>
            <li>1 teaspoon ground cumin - adds earthy flavour.</li>
            <li>1/2 teaspoon ground coriander - for a citrusy note.</li>
            <li>1/4 teaspoon cayenne pepper (optional) - for extra heat.</li>
            <li>1 can (400g) baked beans in tomato sauce - provides protein and texture.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavour.</li>
            <li>Fresh parsley or coriander, chopped - for garnish.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Sauté the Aromatics:</span> Heat vegetable oil in a large pan over medium heat. Add chopped onions and minced garlic, and sauté until softened and fragrant.</li>
            <li><span className="highlight">Add the Vegetables:</span> Stir in chopped red and green bell peppers, and grated carrots. Cook until the vegetables start to soften.</li>
            <li><span className="highlight">Add the Tomato Base:</span> Add chopped tomato and tomato paste to the pan, stirring to combine. Cook for a few minutes until the tomatoes break down and form a sauce.</li>
            <li><span className="highlight">Season the Relish:</span> Sprinkle ground paprika, ground cumin, ground coriander, and cayenne pepper (if using) over the mixture. Stir well to incorporate the spices.</li>
            <li><span className="highlight">Incorporate the Baked Beans:</span> Add the canned baked beans (including the tomato sauce) to the pan. Stir to combine with the vegetable mixture.</li>
            <li><span className="highlight">Simmer and Adjust Seasoning:</span> Let the Chakalaka simmer for about 10-15 minutes, allowing the flavours to meld together. Taste and adjust seasoning with salt and freshly ground black pepper if necessary. Remember to use salt sparingly or omit completely.</li>
            <li><span className="highlight">Serve:</span> Garnish the Chakalaka with chopped fresh parsley or coriander before serving. Serve warm as a side dish or condiment alongside grilled meats, bread, or pap.</li>
        </ol>

        <div className="back-link">
            <a href="recipes.html">&#8592; Back to Recipes</a>
        </div>
        </section>
    </main>
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default LowSaltChakalaka;