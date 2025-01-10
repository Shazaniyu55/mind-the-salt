import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';
import "./css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import { MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
const Recipes:React.FC=()=>{
    const route=useRouter()
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           
    
<main>
    <h1>Explore 20 Delicious, Low-Salt Recipes</h1>
    <p className="intro">Explore 20 carefully curated low-salt recipes from different regions across Africa, each crafted to celebrate vibrant flavours and cultural richness without the overwhelming use of sodium. Dive into these culinary creations and discover the art of flavourful and mindful eating.</p>

    <section className="category">
        <h2>West African Dishes</h2>
        <p>West African cuisine is renowned for its hearty and bold flavours, making use of vibrant spices and fresh ingredients. Here are some delicious low-salt adaptations of classNameic favourites.</p>
        <div>
            <p><strong>Low-Salt Jollof Rice:</strong> This smoky and tomato-based rice dish is a staple in West Africa. Reducing salt allows the natural sweetness of fresh tomatoes and peppers to shine.</p>
            <MDBBtn color='link' onClick={()=>{
                route.push("/jollof-rice-recipe")
            }}>Get the Jollof Rice Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Egusi Soup:</strong> Made with ground melon seeds, leafy greens, and spices, this soup is rich and hearty, showcasing its earthy notes with reduced sodium.</p>
            
            <MDBBtn onClick={()=>{
                route.push("/low-salt-egusi-soup-recipe")
            }} >Get the Egusi Soup Recipe</MDBBtn>
        </div>
<div>
    <p><strong>Low-Salt Senegalese Thieboudienne:</strong> This national dish of Senegal, often called {`"chebu jen,"`} combines fresh fish, rice, and vegetables with spices that shine brightly without the need for excessive salt.</p>
    <MDBBtn onClick={()=>{
                route.push("/low-salt-senegalese-thieboudienne-recipe")
            }}>Get the Thieboudienne Recipe</MDBBtn>
</div>

<div>
    <p><strong>Low-Salt Light Soup:</strong> This simple yet flavourful soup from West Africa is a comforting dish that can be enjoyed on its own or with a side of fufu or rice. It’s a light, aromatic option perfect for a low-salt diet.</p>
    <MDBBtn onClick={()=>{
                route.push("/low-salt-light-soup")
            }} >Get the Low-Salt Light Soup Recipe</MDBBtn>
</div>

        <div>
            <p><strong>Low-Salt Cameroonian Ndolé:</strong> A peanut-based stew paired with bitter greens, Ndolé is a Cameroonian favourite, with less salt highlighting its nutty flavour.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-cameroonian-ndole")
            }} >Get the Ndolé Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Ghanaian Groundnut Soup:</strong> This creamy peanut soup is balanced with fresh vegetables and mild spices, delivering comfort in every spoonful.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-ghanaian-groundnut-soup-recipe")
            }}>Get the Groundnut Soup Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Suya:</strong> A street-food classNameic in Nigeria, Suya features grilled skewered meats coated in a peanut spice mix. This version keeps the boldness without excessive salt.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-suya-recipe")
            }} >Get the Suya Recipe</MDBBtn>
        </div>
    </section>

    <section className="category">
        <h2>North African Dishes</h2>
        <p>North African dishes are a tapestry of rich spices and textures. These recipes showcase the beauty of reduced salt, enhancing the true essence of ingredients.</p>
        <div>
            <p><strong>Low-Salt Moroccan Tagine:</strong> A savoury slow-cooked stew of vegetables and dried fruits spiced with cinnamon and cumin.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-moroccan-tagine")
            }} >Get the Tagine Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Egyptian Koshari:</strong> A mix of lentils, rice, and pasta topped with a tangy tomato sauce. This recipe highlights each component’s natural flavour.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-egyptian-koshari")
            }}>Get the Koshari Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Algerian Chakchouka:</strong> A classNameic dish of eggs poached in a spiced tomato and bell pepper sauce. Reduced salt lets the vibrant spices shine.</p>
            <MDBBtn onClick={()=>{
                route.push("/low-salt-algerian-chakchouka")
            }} >Get the Chakchouka Recipe</MDBBtn>
        </div>
    </section>

    <section className="category">
        <h2>East African Dishes</h2>
        <p>East Africa offers wholesome dishes rich in whole grains, legumes, and greens. These low-salt recipes emphasize natural and earthy flavours.</p>
        <div>
            <p><strong>Low-Salt Ethiopian Doro Wat:</strong> A spicy chicken stew infused with berbere. Reduced salt allows the spice blend to shine.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-ethiopian-doro-wat")
            }} >Get the Doro Wat Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Tanzanian Pilau:</strong> Fragrant rice cooked with cinnamon, cloves, and cardamom. The spices bring out natural flavours without the need for extra salt.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-tanzanian-pilau")
            }}>Get the Pilau Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Kenyan Sukuma Wiki:</strong> Leafy greens sautéed with onions, garlic, and minimal seasoning, delivering a clean and vibrant taste.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-ugali-and-sukuma-wiki")
            }}>Get the Sukuma Wiki Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Ugali:</strong> A maize-based dish perfect with stews. This simple preparation emphasizes the rich flavours of accompanying dishes.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-ugali-and-sukuma-wiki")
            }}>Get the Ugali Recipe</MDBBtn>
        </div>
    </section>

    <section className="category">
        <h2>Southern African Dishes</h2>
        <p>Southern African recipes blend indigenous and global culinary influences. These low-salt versions highlight authentic flavours.</p>
        <div>
            <p><strong>Low-Salt South African Bobotie:</strong> A curried mince dish topped with egg custard. Its subtle spices deliver comforting flavour without excess salt.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-south-african-bobotie")
            }} >Get the Bobotie Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Chakalaka:</strong> A spicy vegetable relish made with carrots, beans, and peppers. Its zesty flavour shines in this version.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-chakalaka")
            }}>Get the Chakalaka Recipe</MDBBtn>
        </div>

        <div>
            <p><strong>Low-Salt Mozambican Piri Piri Chicken:</strong> This spicy grilled chicken is infused with lime and chilli, providing bold flavours without heavy salting.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-mozambican-piri-piri-chicken")
            }}>Get the Piri Piri Chicken Recipe</MDBBtn>
        </div>
        <div>
            <p><strong>Low-Salt Zimbabwean Sadza:</strong> A maize porridge served with a rich vegetable stew, this dish emphasises fresh and wholesome ingredients.</p>
            <MDBBtn  onClick={()=>{
                route.push("/low-salt-zimbabwean-sadza-and-vegetable-stew")
            }} >Get the Sadza Recipe</MDBBtn>
        </div>
            </section>

    {/* <section className="interaction-section">
        <h2>Share Your Thoughts or Recipes</h2>
        <p>Have you tried one of our recipes? We’d love to hear about your experience! Or share your own favourite low-salt recipe and inspire others to enjoy delicious, healthier meals.</p>
        <form>
            <textarea placeholder="Share your experience or recipe here..."></textarea>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <button type="submit">Submit</button>
        </form>
    </section> */}
</main>
           
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default Recipes;