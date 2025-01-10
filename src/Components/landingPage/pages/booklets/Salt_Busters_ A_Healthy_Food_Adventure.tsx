import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';
import "../css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "./style.css"
import "../../style.css";
const Salt_Busters_A_Healthy_Food_Adventure:React.FC=()=>{
return (<>
<Navigation />
<div style={{overflow:"auto",maxHeight:"100vh"}} className="Reader_body">


<div className="booklets">

{/* <header>
  <h1>Salt Busters: A Healthy Food Adventure!</h1>
  <p>Join the Mission to Reduce Salt for Strong Hearts and Healthy Bodies!</p>
</header> */}


<br/><br/>
<br/><br/>
<br/><br/>

<main style={{maxWidth:"700px",margin:"0 auto"}}>

<section className="image-suggestion">
  Cover Page Suggestion: Safi the Salt Buster, Baba the Wise Coach, and Tayo the Investigator stand heroically outside a vibrant African market. Around them are fresh fruits, vegetables, and traditional dishes. A large “X” marks a saltshaker, hinting at their mission to cut down on salt.
</section>

<section className="about-author">
  <h2>About the Author</h2>
  <p><strong>Jesse Enebi Usman</strong> is passionate about making health information clear and accessible. This story, part of his doctoral work at Sheffield Hallam University, focuses on improving community health. With a background in nursing, teaching, and research, Jesse aims to bridge healthcare gaps through fun, culturally relevant education.</p>
</section>

<section className="acknowledgments">
  <h2>Acknowledgments</h2>
  <p>Special thanks to Sheffield Hallam University for supporting Jesse’s PhD research. Gratitude to Professor Markos Klonizakis, Professor Charmaine Childs, and Dr. David Rogerson for their guidance and mentorship.</p>
</section>

<section className="about-book">
  <h2>About the Story</h2>
  <p><em>Salt Busters: A Healthy Food Adventure</em> is a fun, educational comic designed to show children how choosing fresh foods, using herbs and spices, and reading labels can help them eat less salt. Centered around African culinary traditions, it empowers kids to become “Salt Busters,” enjoying tasty meals while protecting their hearts and bodies.</p>
</section>

<section className="summary">
  <h2>Summary</h2>
  <p>Join Safi the Salt Buster, Tayo the Investigator, and Baba the Wise Coach as they uncover the secret of “sneaky salt.” Armed with tips for spotting hidden sodium and swapping in fresh herbs for salty seasonings, they set out to defeat the mischievous Salt Monster. Along the way, they learn that less salt still means big flavour—and a healthier future!</p>
</section>

<section className="characters">
  <h2>Meet the Characters</h2>
  <ul>
    <li><strong>Safi the Salt Buster:</strong> A brave, caring hero who encourages everyone to enjoy fresh, wholesome foods.</li>
    <li><strong>Tayo the Investigator:</strong> Curious and clever, Tayo loves discovering where “sneaky salt” hides.</li>
    <li><strong>Baba the Wise Coach:</strong> A kind mentor who shares wisdom, health tips, and simple ways to cut down on salt.</li>
  </ul>
</section>

<section>
  <h2>The Story</h2>

<div className="panel">
  <p className="panel-title">Page 1: A Salty Surprise</p>
  <p><strong>Scene:</strong> Safi and Tayo are in a bright, cosy kitchen, surrounded by colourful African dishes like jollof rice and plantains.</p>
  <p><strong>Safi:</strong> “Tayo, did you know too much salt can actually harm our hearts and kidneys?”</p>
  <p><strong>Tayo (surprised):</strong> “Really? Salt makes food yummy, but I had no idea it could be harmful!”</p>
  <p><strong>Baba (entering, holding a wooden spoon):</strong> “Yes, little ones. Salt gives flavour, but we must be careful. Let’s become Salt Busters and learn how to eat well without too much salt!”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 2: Understanding the Problem</p>
  <p><strong>Scene:</strong> A cartoon heart and kidneys look tired, weighed down by a giant saltshaker.</p>
  <p><strong>Narrator:</strong> “Too much salt makes our hearts and kidneys work harder than they should.”</p>
  <p><strong>Safi (pointing to a chart):</strong> “See, if we reduce salt, we keep them strong and healthy!”</p>
  <p><strong>Tayo (thoughtful):</strong> “I want a strong heart and body. So how do we know how much salt we’re eating?”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 3: Spotting Sneaky Salt</p>
  <p><strong>Scene:</strong> Tayo inspects a food label with a magnifying glass; Safi holds up a bag of crisps and a seasoning cube.</p>
  <p><strong>Tayo:</strong> “Many snacks, instant noodles, and certain spice mixes hide lots of salt!”</p>
  <p><strong>Safi:</strong> “Checking food labels for ‘low sodium’ or ‘no salt added’ helps us choose wisely.”</p>
  <p><strong>Baba (smiling):</strong> “With practice, reading labels becomes easy. Together, we’ll outsmart sneaky salt!”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 4: Tasty Alternatives</p>
  <p><strong>Scene:</strong> In the kitchen again, Safi sprinkles herbs over a dish of grilled veggies, while Tayo squeezes lime over some chopped tomatoes.</p>
  <p><strong>Safi:</strong> “Herbs like ginger, garlic, and thyme add wonderful flavour without extra salt!”</p>
  <p><strong>Tayo (sniffing the aroma):</strong> “Mmm! This smells amazing. I never knew we could make food this tasty with less salt!”</p>
  <p><strong>Baba (holding a jug of water and a bowl of fruit):</strong> “Swap salty snacks for fresh fruit, and choose water over soda. Natural flavours can surprise you!”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 5: The Market Mystery</p>
  <p><strong>Scene:</strong> The trio steps into a bustling African market. Suddenly, the Salt Monster appears, made of packaged foods, grinning mischievously.</p>
  <p><strong>Salt Monster:</strong> “Mwahaha! You’ll never avoid my salty grip!”</p>
  <p><strong>Safi (boldly):</strong> “Think again, Salt Monster! We have fresh produce, herbs, and knowledge on our side!”</p>
  <p><strong>Tayo (holding fresh mangoes and beans):</strong> “With these choices, we don’t need your extra salt!”</p>
  <p><strong>Salt Monster (shrinking):</strong> “Nooo… my power fades before your healthy habits!”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 6: Fun Facts & Ideas</p>
  <p><strong>Scene:</strong> Tayo stands by a chalkboard with fun facts written on it.</p>
  <p><strong>Tayo:</strong> “Did you know most sodium comes from packaged foods, not the saltshaker?”</p>
  <p><strong>Safi:</strong> “Kids need less salt than adults. Reading labels helps us stay under healthy limits!”</p>
  <p><strong>Baba (pointing to a food label):</strong> “Look for less than 5% DV (Daily Value) of sodium—this means it’s low!”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 7: Simple Recipes</p>
  <p><strong>Scene:</strong> Safi and Tayo making a fresh tomato salsa with onions, peppers, lime juice, and herbs.</p>
  <p><strong>Safi:</strong> “Try this tomato salsa—no salt, just flavourful herbs and lime!”</p>
  <p><strong>Tayo (tasting a spoonful):</strong> “Wow, so fresh and zesty! I don’t miss the salt at all!”</p>
  <p><strong>Baba (offering a bowl of unsalted popcorn):</strong> “See? Snacks can be fun and healthy without extra salt.”</p>
</div>

<div className="panel">
  <p className="panel-title">Page 8: The Salt Buster Pledge</p>
  <p><strong>Scene:</strong> The trio stands together, raising their fists proudly.</p>
  <p><strong>All:</strong> “We pledge to be Salt Busters—choosing fresh foods, herbs, and spices over too much salt!”</p>
  <p><strong>Safi (waving to the reader):</strong> “Join us! You can be a Salt Buster too!”</p>
  <p><strong>Narrator:</strong> “Small changes make a big difference. Together, we’ll keep our hearts and bodies strong!”</p>
</div>

<div className="key-takeaway">Takeaway: Reducing salt doesn’t mean losing flavour—discover fresh foods, herbs, and spices that keep meals delicious and help our hearts stay healthy.</div>
</section>

<section id="back-cover">
  <h2>Back Cover</h2>
  <p>Become a Salt Buster! Choose fresh, colourful foods, season with herbs and spices, and keep an eye on labels. Safi, Tayo, and Baba show us that tasty meals don’t need lots of salt. Together, we can be healthier and stronger—one bite at a time.</p>
  <p className="image-suggestion">Image Suggestion: The Salt Monster, now tiny and harmless, waves a white flag, while our heroes smile and hold baskets of fresh produce under a banner reading “Healthy Choices = Strong Bodies.”</p>
</section>

</main>

    </div>



            <Footer/>

</div></>)
}
export default Salt_Busters_A_Healthy_Food_Adventure;