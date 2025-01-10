import Footer from '@/Components/landingPage/footer';
import Navigation from '@/Components/landingPage/Navigation';
import React from 'react'

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../Components/landingPage/style.css"
const Index = () => {
  return (
    <>

<Navigation />

  <div className='Reader_body' style={{ height: "100vh", overflow: "auto" }}>
            <br/><br/><br/>
            
<div style={{padding:20,maxWidth:900,margin:"0 auto"}}>
           




<main>
        <h1>Join the Mind the Salt Community</h1>
        <p>Welcome to the Mind the Salt Community—a space where we connect, learn, and support each other on the journey to healthier living. Share your experiences, ask questions, and get inspired by others who are embracing low-salt lifestyles.</p>

        <section>
            <h2>Why Join Our Community?</h2>
            <ul>
                <li><span>Support & Motivation:</span> Share your challenges and successes with like-minded people.</li>
                <li><span>Expert Advice:</span> Access tips and insights from healthcare professionals and culinary experts.</li>
                <li><span>Inspiration:</span> Discover new recipes, low-salt tips, and stories from around the world.</li>
            </ul>
        </section>

        <section>
            <h2>Community Features</h2>
            <ul>
                <li><span>Peer Support Groups:</span> Join groups based on your needs, such as parents cooking low-salt meals for kids or seniors managing high blood pressure.</li>
                <li><span>Monthly Challenges:</span> Participate in fun challenges like {'"Cook 5 low-salt meals this week"'} and earn digital badges.</li>
                <li><span>Forums & Discussions:</span> Engage in lively discussions on popular topics like {"Low-salt snack ideas"} or Best herbs for flavourful meals.</li>
                <li><span>Live Q&A Sessions:</span> Get answers to your questions directly from nutritionists, chefs, and health professionals.</li>
            </ul>
        </section>

        <section>
            <h2>Community Stories</h2>
            <p><strong>Spotlight: John&rsquo;s Journey to Better Health</strong></p>
            <blockquote>
                I used to rely on processed foods, and my blood pressure was out of control. With the help of Mind the Salt&rsquo;s recipes and community, I&rsquo;ve reduced my sodium intake and feel better than ever!
            </blockquote>
            <p>Do you have a story to share? Submit your experience for a chance to be featured.</p>
            <div className="cta">
                <a href="/community/">Share Your Story</a>
            </div>
        </section>

        <section>
            <h2>How to Join</h2>
            <p>Joining the community is easy:</p>
            <ol>
                <li>Sign up for an account.</li>
                <li>Participate in discussions, challenges, and live events.</li>
                <li>Contribute by sharing your insights, recipes, and experiences.</li>
            </ol>
            <div className="cta">
                <a href="/community/">Join the Community Now</a>
            </div>
        </section>

        <section>
            <h2>Interactive Features</h2>
            <ul>
                <li><span>Recipe Sharing:</span> Upload your favourite low-salt recipes to inspire others.</li>
                <li><span>Polls & Surveys:</span> Participate in polls like What&rsquo;s the hardest food to cut salt from?</li>
                <li><span>Volunteer Opportunities:</span> Join local and global efforts to promote heart health and low-salt living.</li>
            </ul>
        </section>

     
    </main>



    <br/><br/><br/>
            </div>
            <Footer/>

</div>
    </>
  )
}


export default Index;