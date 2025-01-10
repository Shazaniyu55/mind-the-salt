import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const Lowsaltmozambicanpiripirichicken:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

<main>
    <section>
        <h1 className="animated-text">Low-Salt Mozambican Piri Piri Chicken</h1>
        <p className="highlight">Mozambican Piri Piri Chicken is a spicy and flavourful dish that is a specialty of Mozambique. This version reduces salt while preserving its bold and zesty flavours.</p>

        <section className="image-section">
            <img src="piri-piri-chicken-placeholder.jpg" alt="Low-Salt Mozambican Piri Piri Chicken" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>4 chicken leg quarters - provides protein.</li>
            <li>2 tablespoons olive oil - for cooking and marinade.</li>
            <li>1 large onion, finely chopped - adds sweetness and flavour.</li>
            <li>4 cloves garlic, minced - enhances flavour.</li>
            <li>2 tablespoons lemon juice - adds acidity.</li>
            <li>2 tablespoons white vinegar - adds tanginess.</li>
            <li>1 tablespoon smoked paprika - for flavour and colour.</li>
            <li>1 teaspoon ground cayenne pepper - adds heat.</li>
            <li>1 teaspoon ground black pepper - for added flavour.</li>
            <li>1 teaspoon dried oregano - adds herbal notes.</li>
            <li>1 teaspoon dried thyme - adds herbal notes.</li>
            <li>1 teaspoon brown sugar - balances flavours.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Fresh parsley or coriander leaves, chopped - for garnish.</li>
            <li>Lemon wedges, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Marinade:</span> In a bowl, combine olive oil, finely chopped onion, minced garlic, lemon juice, white vinegar, smoked paprika, ground cayenne pepper, ground black pepper, dried oregano, dried thyme, and brown sugar. Mix well to form a marinade.</li>
            <li><span className="highlight">Marinate the Chicken:</span> Place the chicken leg quarters in a shallow dish or resealable plastic bag. Pour the marinade over the chicken, ensuring it is evenly coated. Cover and refrigerate for at least 2 hours, or overnight for best results.</li>
            <li><span className="highlight">Grill the Chicken:</span> Preheat your grill to medium-high heat. Remove the chicken from the marinade and shake off any excess. Place the chicken on the grill and cook for about 25-30 minutes, turning occasionally, until the chicken is cooked through and has charred grill marks.</li>
            <li><span className="highlight">Adjust Seasoning:</span> Taste the grilled Piri Piri Chicken and adjust seasoning with salt if necessary, keeping in mind the sodium content of the marinade. Use salt sparingly or omit completely.</li>
            <li><span className="highlight">Serve:</span> Transfer the grilled chicken to a serving platter. Garnish with freshly chopped parsley or coriander leaves. Serve hot with lemon wedges on the side for squeezing over the chicken.</li>
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
export default Lowsaltmozambicanpiripirichicken;