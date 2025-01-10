import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Lowsaltsouthafricanbobotie:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
<main>
  <section>
        <h1 className="animated-text">Low-Salt South African Bobotie</h1>
        <p className="highlight">South African Bobotie is a savoury and slightly sweet dish featuring spiced minced meat baked with an egg-based topping. This version is crafted to be low in salt while maintaining its traditional flavours.</p>

        <section className="image-section">
            <img src="bobotie-placeholder.jpg" alt="Low-Salt South African Bobotie" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>500g lean ground beef or lamb - provides protein.</li>
            <li>1 large onion, finely chopped - adds sweetness and depth.</li>
            <li>2 cloves garlic, minced - enhances flavour.</li>
            <li>1 tablespoon curry powder - adds warmth and spice.</li>
            <li>1 teaspoon ground turmeric - for colour and flavour.</li>
            <li>1 teaspoon ground cinnamon - adds warmth and depth.</li>
            <li>1 tablespoon apricot jam - adds sweetness (you can use a low-sugar or sugar-free version).</li>
            <li>2 tablespoons apple cider vinegar - adds tanginess.</li>
            <li>1 cup milk - for the egg topping.</li>
            <li>2 slices white bread, crusts removed and soaked in milk - adds moisture.</li>
            <li>2 large eggs - for the topping.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavour.</li>
            <li>1/4 cup raisins - adds sweetness and texture.</li>
            <li>1/4 cup slivered almonds - for garnish.</li>
            <li>Cooked rice or mashed potatoes, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Preheat the Oven:</span> Preheat your oven to 180°C (350°F). Lightly grease a baking dish with oil or non-stick cooking spray.</li>
            <li><span className="highlight">Prepare the Meat Mixture:</span> Heat a large skillet over medium heat. Add chopped onion and minced garlic, and cook until softened. Add ground beef or lamb and cook until browned. Stir in curry powder, turmeric, cinnamon, apricot jam, and apple cider vinegar. Mix well, and add salt and pepper sparingly, if using. Stir in raisins and remove from heat.</li>
            <li><span className="highlight">Prepare the Egg Topping:</span> Beat eggs with milk in a bowl. Squeeze out excess milk from the soaked bread and add to the egg mixture. Mix well.</li>
            <li><span className="highlight">Assemble and Bake:</span> Spread the meat mixture evenly in the prepared baking dish. Pour the egg mixture over the top. Bake for 30-35 minutes, or until the topping is set and golden.</li>
            <li><span className="highlight">Serve:</span> Garnish with slivered almonds and serve hot with cooked rice or mashed potatoes.</li>
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
export default Lowsaltsouthafricanbobotie;