import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Link from 'next/link';
const LowSaltRgusiSoupRecipe:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

     
    <main>
        <section>
        <h1 className="animated-text">Low-Salt Egusi Soup</h1>
        <p className="highlight">Egusi Soup is a West African favourite soup known for its rich and hearty flavours. This version minimises salt while enhancing the natural flavours of the ingredients.</p>

        <section className="image-section">
            <img src="egusi-soup-placeholder.jpg" alt="Low-Salt Egusi Soup" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>1 cup egusi (melon seeds), ground - the star of the dish, providing a rich, nutty flavour.</li>
            <li>300 grams lean beef or chicken, cut into bite-sized pieces - provides protein.</li>
            <li>2 tablespoons olive oil - for cooking.</li>
            <li>1 large onion, finely chopped - adds a base flavour.</li>
            <li>2 cloves garlic, minced - for added aroma and taste.</li>
            <li>1 tablespoon fresh ginger, minced - for a warm, spicy note.</li>
            <li>2 medium tomatoes, chopped - gives acidity and freshness.</li>
            <li>1 bell pepper (any colour), chopped - adds sweetness and colour.</li>
            <li>1 Scotch bonnet pepper (optional), finely chopped - for authentic heat; adjust to tolerance.</li>
            <li>4 cups low-sodium vegetable or chicken broth - the cooking liquid.</li>
            <li>2 cups chopped spinach or bitter leaves - provides greens and enhances nutrition.</li>
            <li>1 teaspoon coriander, ground - for a citrusy, floral flavour.</li>
            <li>1 teaspoon cumin, ground - adds earthiness.</li>
            <li>1/2 teaspoon black pepper - for a mild spice.</li>
            <li>Salt to taste (optional, and if used, very sparingly) - for enhancing the overall flavours.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Protein:</span> In a large pot, heat the olive oil over medium heat. Add the beef or chicken and sauté until browned. Remove the meat and set aside.</li>
            <li><span className="highlight">Cook the Vegetables:</span> In the same pot, add a bit more oil if necessary. Sauté the onions, garlic, and ginger until the onions are translucent. Add the chopped tomatoes, bell pepper, and Scotch bonnet pepper. Cook until the vegetables are soft and begin to form a sauce.</li>
            <li><span className="highlight">Make the Soup:</span> Return the browned meat to the pot. Stir in the ground egusi seeds and cook for about 2 minutes, stirring constantly to prevent the seeds from clumping. Pour in the low-sodium broth, bring the mixture to a boil, then reduce heat to a simmer. Add the coriander, cumin, and black pepper. Allow the soup to simmer for about 25-30 minutes, or until the meat is tender and the flavours are well combined.</li>
            <li><span className="highlight">Add the Greens:</span> Stir in the chopped spinach or bitter leaves. Simmer for an additional 5 minutes until the greens are just wilted.</li>
            <li><span className="highlight">Season and Serve:</span> Taste the soup and adjust the seasoning with a small amount of salt if absolutely necessary. Serve hot with a side of fufu, pounded yam, or rice for a complete meal.</li>
        </ol>

        <div className="back-link">
            <Link  href="/Recipes">&#8592; Back to Recipes</Link>
        </div>
        </section>

    </main>
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default LowSaltRgusiSoupRecipe;