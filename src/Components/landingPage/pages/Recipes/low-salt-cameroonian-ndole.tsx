import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowsaltCamroonianNdole:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
<main>
<section>

        <h1 className="animated-text">Low-Salt Cameroonian Ndolé</h1>
        <p className="highlight">Ndolé is a hearty and nutritious stew from Cameroon, featuring bitter greens, groundnuts, and a protein of your choice. This version minimises salt for a healthier option.</p>

        <section className="image-section">
            <img src="ndole-placeholder.jpg" alt="Low-Salt Cameroonian Ndolé" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>2 cups bitter leaf, washed and chopped - the traditional green used in Ndolé.</li>
            <li>1 cup groundnuts (peanuts), finely ground - provides nutty flavour and texture.</li>
            <li>500g shrimp or beef, peeled and deveined (you can also use fish fillets) - the protein component.</li>
            <li>1 large onion, chopped - adds sweetness and depth.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>1 tablespoon grated ginger - adds warmth.</li>
            <li>1 tablespoon tomato paste - enhances richness.</li>
            <li>1 teaspoon ground crayfish (optional) - adds a unique flavour common in West African cuisine.</li>
            <li>1 teaspoon ground paprika - for colour and mild heat.</li>
            <li>1/2 teaspoon ground black pepper - for added flavour.</li>
            <li>2 tablespoons vegetable oil - for cooking.</li>
            <li>2 cups low-sodium vegetable or chicken broth - for cooking.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Cooked rice or boiled plantains, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Groundnuts:</span> Finely grind the peanuts in a food processor or blender until they form a coarse powder. Set aside.</li>
            <li><span className="highlight">Sauté the Aromatics:</span> Heat vegetable oil in a large pot over medium heat. Add chopped onion and sauté until softened and translucent. Stir in minced garlic and grated ginger, and cook for another minute until fragrant.</li>
            <li><span className="highlight">Cook the Protein:</span> Add peeled and deveined shrimp or beef to the pot. Cook until browned on all sides. If using fish fillets, add them later during the cooking process to prevent overcooking.</li>
            <li><span className="highlight">Add the Tomato Paste and Spices:</span> Stir in tomato paste, ground crayfish (if using), ground paprika, and ground black pepper. Cook for a few minutes to allow the flavours to meld.</li>
            <li><span className="highlight">Incorporate the Groundnuts and Bitter Leaf:</span> Gradually add the ground peanuts to the pot, stirring continuously to prevent clumping. Add chopped bitter leaf to the pot and mix well to combine with the other ingredients.</li>
            <li><span className="highlight">Simmer the Stew:</span> Pour in low-sodium vegetable or chicken broth to the pot. Stir well to incorporate all ingredients. Cover the pot and let the Ndolé simmer for about 20-25 minutes, or until the flavours have melded together and the stew has thickened to your desired consistency.</li>
            <li><span className="highlight">Adjust Seasoning and Serve:</span> Taste the Ndolé and adjust seasoning with salt if necessary, keeping in mind the sodium content of the broth and other ingredients. Use salt sparingly or omit completely. Serve hot with cooked rice or boiled plantains.</li>
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
export default LowsaltCamroonianNdole;