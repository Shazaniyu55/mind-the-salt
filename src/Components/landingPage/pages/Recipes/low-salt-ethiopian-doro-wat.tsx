import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltEthiopianDoroWat:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

<main>
        <h1 className="animated-text">Low-Salt Ethiopian Doro Wat</h1>
        <p className="highlight">Ethiopian Doro Wat is a spicy and aromatic chicken stew that is a staple in Ethiopian cuisine. This version reduces salt while preserving its rich and flavourful essence.</p>

        <section className="image-section">
            <img src="doro-wat-placeholder.jpg" alt="Low-Salt Ethiopian Doro Wat" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>4 chicken thighs and drumsticks - provides protein.</li>
            <li>2 large onions, finely chopped - forms the base of the stew.</li>
            <li>4 cloves garlic, minced - enhances flavour.</li>
            <li>1 tablespoon grated ginger - adds warmth.</li>
            <li>1/4 cup Ethiopian berbere spice blend - provides authentic Ethiopian flavour.</li>
            <li>2 tablespoons tomato paste - enhances richness.</li>
            <li>1 tablespoon paprika - for colour and mild heat.</li>
            <li>1/2 teaspoon ground cayenne pepper (optional) - for extra heat.</li>
            <li>2 cups low-sodium chicken broth - for cooking.</li>
            <li>2 tablespoons vegetable oil - for cooking.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Freshly ground black pepper - for added flavor.</li>
            <li>Hard-boiled eggs, for garnish (optional).</li>
            <li>Fresh coriander leaves, chopped - for garnish.</li>
            <li>Injera (Ethiopian flatbread) or rice, for serving.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Marinate the Chicken:</span> In a bowl, combine minced garlic, grated ginger, berbere spice blend, paprika, and cayenne pepper (if using). Mix well and rub over the chicken. Cover and refrigerate for at least 1 hour or overnight for best results.</li>
            <li><span className="highlight">Sauté the Onions:</span> Heat vegetable oil in a large pot over medium heat. Add finely chopped onions and sauté until softened and translucent, about 10 minutes.</li>
            <li><span className="highlight">Cook the Chicken:</span> Add marinated chicken to the pot and brown on all sides, about 5 minutes per side.</li>
            <li><span className="highlight">Add the Aromatics:</span> Stir in minced garlic and grated ginger. Cook for another minute until fragrant.</li>
            <li><span className="highlight">Simmer the Stew:</span> Add tomato paste to the pot, stirring to incorporate. Pour in low-sodium chicken broth, and bring the mixture to a simmer. Reduce heat to low, cover, and let it simmer for 30-40 minutes until the chicken is tender.</li>
            <li><span className="highlight">Adjust Seasoning and Serve:</span> Taste and adjust seasoning with salt and freshly ground black pepper if necessary. Garnish with hard-boiled eggs (if using) and fresh coriander leaves. Serve hot with injera or rice.</li>
        </ol>

        <div className="back-link">
            <a href="recipes.html">&#8592; Back to Recipes</a>
        </div>
    </main>
           
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default LowSaltEthiopianDoroWat;