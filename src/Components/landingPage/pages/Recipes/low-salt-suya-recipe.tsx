import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
const LowSaltSuyaRecipe:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
<main>
  <section>
        <h1 className="animated-text">Low-Salt Suya</h1>
        <p className="highlight">Suya is a popular West African street food usually made with skewered and grilled meat, seasoned with a spicy peanut blend. This low-salt version retains all the vibrant flavours while being health-conscious.</p>

        <section className="image-section">
            <img src="suya-placeholder.jpg" alt="Low-Salt Suya" className="recipe-image"/>
        </section>

        <h2>Ingredients</h2>
        <ul>
            <li>500 grams of lean beef or chicken breast, thinly sliced - choose lean cuts for healthier options.</li>
            <li>1/4 cup unsalted roasted peanuts, finely ground - forms the base of the Suya spice.</li>
            <li>1 tablespoon paprika - for colour and a sweet flavour without heat.</li>
            <li>1 teaspoon ground ginger - adds a warm, spicy kick.</li>
            <li>1 teaspoon garlic powder - enhances flavour without added salt.</li>
            <li>1/2 teaspoon cayenne pepper (optional, adjust to heat preference) - adds a spicy element.</li>
            <li>1/4 teaspoon black pepper - for a mild, peppery bite.</li>
            <li>2 tablespoons vegetable oil - helps the spice mixture adhere to the meat and adds juiciness during grilling.</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
            <li><span className="highlight">Prepare the Suya Spice:</span> In a bowl, mix together the ground peanuts, paprika, ground ginger, garlic powder, cayenne pepper (if using), and black pepper. This blend is your homemade, low-salt Suya spice.</li>
            <li><span className="highlight">Marinate the Meat:</span> Place the sliced meat in a large bowl and drizzle with vegetable oil. Toss to coat evenly. Add about half of the Suya spice mixture to the meat, reserving the rest for later use. Ensure each piece is well-coated with the spice. Cover and let the meat marinate in the refrigerator for at least 2 hours, or overnight for deeper flavour.</li>
            <li><span className="highlight">Grill the Suya:</span> Preheat your grill, griddle, or a heavy skillet over medium-high heat. Thread the marinated meat onto skewers. If using wooden skewers, soak them in water for at least 30 minutes beforehand to prevent burning. Place the skewers on the grill and cook for about 3-4 minutes on each side, or until the meat is thoroughly cooked and slightly charred.</li>
            <li><span className="highlight">Serve:</span> Sprinkle the cooked Suya with the reserved spice mixture for an extra layer of flavour. Serve hot, accompanied by slices of onion, tomato, and cucumber, or a side of simple salad.</li>
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
export default LowSaltSuyaRecipe;