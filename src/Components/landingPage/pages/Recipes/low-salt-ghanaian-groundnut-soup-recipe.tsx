import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltGhanaianGroundnutSoupRecipe:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

<main>
  <section>
        <h1 className="animated-text">Low-Salt Ghanaian Groundnut Soup</h1>
        <p className="highlight">Ghanaian Groundnut Soup, also known as Peanut Soup, is a rich and creamy dish featuring a blend of groundnuts, vegetables, and spices. This version is crafted to be low in salt without compromising flavour.</p>

        <section className="image-section">
            <img src="groundnut-soup-placeholder.jpg" alt="Low-Salt Ghanaian Groundnut Soup" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>1 cup roasted peanuts - the main ingredient.</li>
            <li>500g chicken thighs or beef, cut into bite-sized pieces - provides protein (you can also use tofu for a vegetarian option).</li>
            <li>1 large onion, chopped - adds sweetness and depth.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>1 tablespoon grated ginger - adds warmth.</li>
            <li>2 large tomatoes, chopped - forms the base of the soup.</li>
            <li>1 tablespoon tomato paste - enhances richness.</li>
            <li>1 teaspoon ground coriander - adds citrusy undertones.</li>
            <li>1 teaspoon ground cumin - adds earthy warmth.</li>
            <li>1/2 teaspoon ground turmeric - for colour and its anti-inflammatory properties.</li>
            <li>1/4 teaspoon cayenne pepper (optional) - for heat.</li>
            <li>2 tablespoons vegetable oil - for cooking.</li>
            <li>4 cups low-sodium chicken or vegetable broth - for cooking.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Fresh coriander leaves, chopped - for garnish.</li>
            <li>Cooked rice or fufu, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Groundnuts:</span> Grind the roasted peanuts in a food processor or blender until they form a fine powder. Set aside.</li>
            <li><span className="highlight">Sauté the Aromatics:</span> Heat vegetable oil in a large pot over medium heat. Add chopped onion and sauté until softened and translucent. Stir in minced garlic and grated ginger, and cook for another minute until fragrant.</li>
            <li><span className="highlight">Cook the Protein:</span> Add chicken thighs or beef pieces to the pot. Cook until browned on all sides. If using tofu, add it later during the cooking process to prevent it from becoming too soft.</li>
            <li><span className="highlight">Add the Tomatoes and Tomato Paste:</span> Stir in chopped tomatoes and tomato paste, and cook until the tomatoes break down and form a sauce.</li>
            <li><span className="highlight">Incorporate the Groundnuts and Spices:</span> Gradually add the ground peanuts to the pot, stirring continuously to prevent clumping. Sprinkle ground coriander, ground cumin, ground turmeric, and cayenne pepper (if using) over the mixture. Stir well to combine.</li>
            <li><span className="highlight">Simmer the Soup:</span> Pour in low-sodium chicken or vegetable broth to the pot. Stir well to incorporate all ingredients. Cover the pot and let the soup simmer for about 30-40 minutes, or until the flavours have melded together and the soup has thickened to your desired consistency.</li>
            <li><span className="highlight">Adjust Seasoning and Serve:</span> Taste the Ghanaian Groundnut Soup and adjust seasoning with salt if necessary, keeping in mind the sodium content of the broth and other ingredients. Use salt sparingly or omit completely. Garnish with chopped fresh coriander leaves before serving. Serve hot with cooked rice or fufu.</li>
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
export default LowSaltGhanaianGroundnutSoupRecipe;