import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';
import "./css/AboutSalt.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
import Link from 'next/link';
const Toolkit_For_Healthy_Life:React.FC=()=>{
return (<>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           

<main>
        <h1>Your Ultimate  for a Healthier Lifestyle</h1>
        <p>Explore expert-curated guides, practical tips, and engaging tools to help you take control of your salt
            intake and improve your health.</p>

        <section>
            <h2>Educational Booklets</h2>
            <ul>
                <li><span>Reducing Salt Intake: A Simple Guide for People of African Descent in the UK:</span>
                    Learn about the impact of salt on health in the African diaspora and culturally sensitive ways to
                    reduce salt without losing flavour.
                    <Link  style={{color:"var(--blue)"}} href="/Reducing_Salt_Intake_A_Simple_Guide_for_People_of_African_Descent_in_the_UK">Read
                        More</Link>.
                </li>
                <li><span>The Basics of Sodium and Health:</span>
                    A beginner-friendly overview of sodium’s role in the body and strategies to cut back.
                    <Link  style={{color:"var(--blue)"}} href="/The_Basics_of_Sodium_and_Health">Read More</Link>.
                </li>
                <li><span>Sodium and Kids: A Guide for Parents:</span>
                    Tailored advice for reducing sodium in children’s diets while ensuring they grow healthy.
                    <Link  style={{color:"var(--blue)"}} href="/Sodium_and_Kids_A_Comprehensive_Guide">Read More</Link>.
                </li>
                <li><span>A {"Beginner's"} Guide to Salt Types and Uses:</span>
                    Explore different types of salt, their uses, and low-sodium substitutes.
                    <Link  style={{color:"var(--blue)"}} href="/A_Beginners_Guide_to_Salt_Types_and_Uses">Read More</Link>.
                </li>
            </ul>
        </section>

        <section>
            <h2>Interactive Storybooks</h2>
            <ul>
                <li><span>Salt Busters: A Healthy Food Adventure:</span>
                    Follow Safi, Tayo, and Baba on a fun mission to reduce salt and make healthier choices. This
                    engaging comic-style story is perfect for children learning about nutrition.
                    <Link  style={{color:"var(--blue)"}} href="/Salt_Busters_A_Healthy_Food_Adventure">Read More</Link>.
                </li>
            </ul>
        </section>

        <section>
            <h2>Tools for Reducing Sodium</h2>
            <ul>
                <li><span>Salt Reduction Checklist:</span> Easy swaps and tips to cut sodium without sacrificing taste.
                    <Link  style={{color:"var(--blue)"}} href="salt-checklist.html">Download Printable Tools</Link></li>
                <li><span>Herb and Spice Pairing Guide:</span> Discover natural flavour boosters for every dish. <Link  style={{color:"var(--blue)"}}
                        href="spice-guide.html">Download Printable Tools</Link></li>
            </ul>
        </section>

        <section>
            <h2>Research & Insights</h2>
            <p style={{marginBottom: 20}}>Explore the latest research and expert insights into sodium and its effects
                on health:</p>
            <ul>
                <li><Link  style={{color:"var(--blue)"}} href="https://www.who.int/news-room/fact-sheets/detail/salt-reduction" target="_blank">WHO: Salt
                        Reduction Strategies</Link> – A detailed overview of global initiatives to reduce sodium
                    consumption.</li>
                <li><Link  style={{color:"var(--blue)"}} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7683534/" target="_blank">Study on Salt and
                        Cardiovascular Health</Link> – Insights into how sodium impacts cardiovascular risks.</li>
                <li><Link  style={{color:"var(--blue)"}} href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003882"
                        target="_blank">Reducing Salt in Processed Foods</Link> – The role of food manufacturing in sodium
                    intake.</li>
                <li><Link  style={{color:"var(--blue)"}} href="https://www.ahajournals.org/doi/10.1161/HYPERTENSIONAHA.121.18012" target="_blank">Salt
                        Sensitivity and Hypertension</Link> – A study on salt sensitivity in different populations.</li>
            </ul>
        </section>

        <section>
            <h2>Interactive Learning</h2>
            <ul>
                <li><span>Salt Awareness Quiz:</span> Test your knowledge about hidden sodium sources. <Link  style={{color:"var(--blue)"}}
                        href="quiz.html">Take the Quiz</Link></li>
                <li><span>Workshops & Webinars:</span> Join engaging events with experts. <Link  style={{color:"var(--blue)"}}
                        href="webinars.html">Register for Events</Link></li>
            </ul>
        </section>

        <section>
            <h2>Community Resources</h2>
            <ul>
                <li><span>Forum Discussions:</span> Share tips, ask questions, and connect with others reducing sodium.
                    <Link  style={{color:"var(--blue)"}} href="/SaltCommunity">Join the Discussion</Link></li>
                <li><span>Volunteer Opportunities:</span> Help spread awareness about low-sodium living in your
                    community. <Link  style={{color:"var(--blue)"}} href="/SaltCommunity">Get Involved</Link></li>
            </ul>
        </section>

        <section>
            <h2>Quick Stats</h2>
            <ul>
                <li>75% of dietary sodium comes from processed foods, not the saltshaker.</li>
                <li>Reducing sodium by 1 teaspoon daily lowers heart disease risk by 20%.</li>
                <li>Children’s sodium needs are much lower than adults’, making early education crucial.</li>
                <li>High sodium intake contributes to approximately 3 million deaths annually worldwide.</li>
                <li>Replacing 30% of dietary salt with herbs can reduce sodium intake without compromising flavour.</li>
                <li>Over 1 billion people globally have hypertension, many due to high sodium diets.</li>
            </ul>
        </section>

        
    </main>
           
           
             <br/><br/><br/>
            </div>
            <Footer/>

</div>
</>)
}
export default Toolkit_For_Healthy_Life;