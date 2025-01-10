import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Link from 'next/link';
const Low_Salt_Senegalese_Thieboudienne:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>

<main>
        <h1 className="animated-text">Low-Salt Senegalese Thieboudienne</h1>
        <p className="highlight">Senegalese Thieboudienne is a hearty and flavourful fish and rice dish cooked in a tomato-based sauce with vegetables. This version reduces salt while preserving its bold and comforting flavours.</p>

        <section className="image-section">
            <img src="thieboudienne-placeholder.jpg" alt="Low-Salt Senegalese Thieboudienne" className="recipe-image"/>
        </section>
<section>
        <h2>Ingredients</h2>
        <ul>
            <li>500g firm white fish fillets, such as cod or haddock - the main ingredient.</li>
            <li>2 cups long-grain rice, rinsed - for the rice base.</li>
            <li>2 tablespoons vegetable oil - for cooking.</li>
            <li>1 onion, finely chopped - adds sweetness and flavour.</li>
            <li>3 cloves garlic, minced - enhances flavour.</li>
            <li>1 red bell pepper, chopped - adds sweetness and colour.</li>
            <li>1 green bell pepper, chopped - adds sweetness and colour.</li>
            <li>2 tomatoes, chopped - adds acidity and moisture.</li>
            <li>2 tablespoons tomato paste - enhances richness.</li>
            <li>1 tablespoon ground paprika - for colour and mild heat.</li>
            <li>1 teaspoon ground cayenne pepper (optional) - adds heat.</li>
            <li>1 teaspoon ground black pepper - for added flavour.</li>
            <li>4 cups low-sodium fish or vegetable broth - for cooking.</li>
            <li>2 carrots, peeled and sliced - adds sweetness and texture.</li>
            <li>2 potatoes, peeled and cubed - adds substance.</li>
            <li>1 small cabbage, cut into wedges - adds texture.</li>
            <li>Salt to taste (optional) - adjust sparingly or omit completely.</li>
            <li>Fresh parsley or coriander leaves, chopped - for garnish.</li>
            <li>Lemon wedges, for serving.</li>
        </ul>
</section>
<section>
        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Fish:</span> Rinse the fish fillets under cold water and pat them dry with paper towels. Cut them into large chunks and set aside.</li>
            <li><span className="highlight">Cook the Rice:</span> In a large pot or Dutch oven, heat vegetable oil over medium heat. Add finely chopped onion and minced garlic, and sauté until softened and fragrant. Stir in chopped red and green bell peppers, and cook for another 3-4 minutes until slightly softened. Add chopped tomatoes, tomato paste, ground paprika, ground cayenne pepper (if using), and ground black pepper. Stir well to combine. Pour in low-sodium fish or vegetable broth and bring the mixture to a boil. Add rinsed long-grain rice to the pot, stirring to combine. Reduce the heat to low, cover the pot, and let the rice simmer for about 15-20 minutes, or until cooked through and the liquid is absorbed. Fluff the rice with a fork and set aside.</li>
            <li><span className="highlight">Prepare the Vegetables:</span> While the rice is cooking, prepare the vegetables. In a separate pot, blanch the carrot slices, potato cubes, and cabbage wedges in boiling water for about 3-4 minutes. Drain and set aside.</li>
            <li><span className="highlight">Assemble the Thieboudienne:</span> Arrange the blanched vegetables and fish chunks over the cooked rice in the pot, distributing them evenly. Season with salt if necessary, keeping in mind the sodium content of other ingredients. Use salt sparingly or omit completely.</li>
            <li><span className="highlight">Steam the Thieboudienne:</span> Cover the pot with a tight-fitting lid and steam the Thieboudienne over low heat for about 20-25 minutes, or until the fish is cooked through and the vegetables are tender.</li>
            <li><span className="highlight">Serve:</span> Once cooked, garnish the Thieboudienne with chopped fresh parsley or coriander leaves. Serve hot, accompanied by lemon wedges for squeezing over the dish.</li>
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
export default Low_Salt_Senegalese_Thieboudienne;