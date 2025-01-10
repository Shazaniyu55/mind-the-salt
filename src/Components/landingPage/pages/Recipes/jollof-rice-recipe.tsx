import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Link from 'next/link';
const JollofRiceRecipe:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

           
    <main>
        <h1 className="animated-text">Low-Salt Jollof Rice</h1>
        <p className="highlight">This flavourful and aromatic rice dish is enjoyed across West Africa and has many variations. Here is a recipe for Jollof Rice with a focus on reducing salt content without compromising on taste.</p>

        {/* <section className="image-section">
            <img src="jollof-rice-placeholder.jpg" alt="Low-Salt Jollof Rice" className="recipe-image">
        </section> */}
<section>
        <h2>Ingredients</h2>
        <ul>
            <li>2 cups basmati or long-grain rice - ensures the rice holds its shape and does not become mushy.</li>
            <li>1 large onion, finely chopped - adds sweetness and depth.</li>
            <li>2 cloves of garlic, minced - for a hint of spice and aroma.</li>
            <li>1 red bell pepper, blended - contributes a sweet, mild pepper flavour.</li>
            <li>1 green bell pepper, chopped - adds freshness and a crisp texture.</li>
            <li>400 grams fresh or no-added-salt canned tomatoes, chopped - the base of the sauce.</li>
            <li>2 tablespoons tomato paste - enriches the colour and flavour.</li>
            <li>3 cups low-sodium vegetable broth - the cooking liquid that also adds flavour.</li>
            <li>1 teaspoon smoked paprika - for a subtle smokiness.</li>
            <li>1 teaspoon dried thyme - adds a pungent, earthy flavour.</li>
            <li>1 bay leaf - infuses the dish with more depth.</li>
            <li>1/4 teaspoon cayenne pepper (optional) - for heat; adjust to taste.</li>
            <li>1 teaspoon curry powder - for a hint of complex spice.</li>
            <li>1/2 teaspoon black pepper - adds a sharp spice.</li>
            <li>2 tablespoons olive oil - for sautéing.</li>
            <li>Fresh parsley or coriander, chopped - for garnish.</li>
        </ul>
</section>
<section>
        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Rice:</span> Rinse the rice under cold running water until the water runs clear. This removes excess starch and prevents stickiness.</li>
            <li><span className="highlight">Sauté the Vegetables:</span> Heat the olive oil in a large pot over medium heat. Add the chopped onions and sauté until translucent, about 3-4 minutes. Add the minced garlic and cook for an additional minute until fragrant.</li>
            <li><span className="highlight">Cook the Tomato Mixture:</span> Stir in the blended red bell pepper and chopped green bell pepper, cook for 2-3 minutes. Mix in the chopped tomatoes and tomato paste, cook for about 5 minutes until the mixture starts to thicken.</li>
            <li><span className="highlight">Add the Spices:</span> Incorporate the smoked paprika, thyme, bay leaf, cayenne pepper (if using), curry powder, and black pepper into the tomato mixture. Stir well to combine and cook for another 5 minutes.</li>
            <li><span className="highlight">Simmer the Rice:</span> Add the rinsed rice to the pot, stirring to coat it thoroughly with the tomato mixture. Pour in the low-sodium vegetable broth and bring to a boil. Once boiling, reduce the heat to low, cover, and let the rice simmer for 20-25 minutes, or until the rice is tender and all the liquid is absorbed.</li>
            <li><span className="highlight">Finish and Serve:</span> Remove the pot from the heat and let it sit covered for 5 minutes. Fluff the rice with a fork and remove the bay leaf. Garnish with freshly chopped parsley or coriander before serving.</li>
        </ol>
        </section>
    
        <div className="back-link">
            <Link  href="/Recipes">&#8592; Back to Recipes</Link>
        </div>
    </main>
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default JollofRiceRecipe;