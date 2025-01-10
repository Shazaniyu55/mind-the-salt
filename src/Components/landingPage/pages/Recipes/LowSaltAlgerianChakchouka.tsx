import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltAlgerianChakchouka:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

<main>
    <section>
        <h1 className="animated-text">Low-Salt Algerian Chakchouka</h1>
        <p className="highlight">Algerian Chakchouka is a comforting North African stew made with tomatoes, peppers, and eggs. This version reduces salt while maintaining its rich flavours.</p>

        <section className="image-section">
            <img src="chakchouka-placeholder.jpg" alt="Low-Salt Algerian Chakchouka" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>2 tablespoons olive oil - for cooking.</li>
            <li>1 onion, finely chopped - adds sweetness and flavour.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>2 bell peppers (red and green), thinly sliced - adds sweetness and colour.</li>
            <li>4 ripe tomatoes, diced - adds acidity and moisture.</li>
            <li>1 teaspoon ground cumin - adds earthy warmth.</li>
            <li>1 teaspoon paprika - for colour and mild heat.</li>
            <li>1/2 teaspoon cayenne pepper - adds heat.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavour.</li>
            <li>4-6 eggs - for poaching.</li>
            <li>Fresh parsley or coriander leaves, chopped - for garnish.</li>
            <li>Crusty bread or pita, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Vegetables:</span> Heat olive oil in a large skillet over medium heat. Add finely chopped onion and sauté until softened and translucent. Stir in minced garlic and cook for another minute until fragrant. Add thinly sliced bell peppers to the skillet and cook until softened.</li>
            <li><span className="highlight">Make the Tomato Base:</span> Stir in diced tomatoes, ground cumin, paprika, and cayenne pepper, mixing well with the other ingredients. Cook the mixture for about 10-15 minutes, allowing the tomatoes to break down and the flavours to meld together. Taste and adjust seasoning with salt and freshly ground black pepper if necessary. Use salt sparingly or omit completely.</li>
            <li><span className="highlight">Poach the Eggs:</span> Create wells in the tomato-pepper mixture with a spoon. Crack an egg into each well, taking care not to break the yolk. Cover the skillet and let the eggs poach in the tomato mixture for about 5-7 minutes, or until the whites are set but the yolks are still runny.</li>
            <li><span className="highlight">Serve:</span> Garnish the Chakchouka with chopped fresh parsley or coriander leaves. Serve hot, accompanied by crusty bread or pita for dipping into the flavourful tomato sauce.</li>
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
export default LowSaltAlgerianChakchouka;