import React from 'react';
import Navigation from '../../Navigation';
import Bold from '@/utils/Bold';
import Link from 'next/link';
import Footer from '../../footer';

const OnlineTreatmentSupport = () => {
  return (
   
    <div style={{ height: "100vh", overflow: "auto" , backgroundColor:"#FFA805" }} >
    <Navigation />
    <br /><br /><br />

    <div style={{ padding: 20, maxWidth: 900, margin: "20px auto", backgroundColor:"#fff", }} >
   
   <div>
      <h1><Bold>Online Treatment Support at Mind The Salt</Bold></h1>
      <br/>
      <p>
        Managing high blood pressure can be easier with the right support. At Mind The Salt, we offer online help to manage high blood pressure but remember, we do not give medical advice. Here is how we can help:
      </p>

      <ul>
        <li><strong>Learn About Treatments:</strong> We have easy-to-understand information and pictures that explain different ways to treat high blood pressure. This helps you know more before you talk to your doctor.</li>
        <li><strong>Find Helpful Resources:</strong> Our website lets you access tools and information to help you manage your blood pressure better. We also guide you to local health services that can help.</li>
        <li><strong>Join Support Groups:</strong> You can meet other people online who are also dealing with high blood pressure. Sharing with others who understand what you are going through can be really supportive.</li>
        <li><strong>Health Tracking Tools:</strong> Provide online tools where users can keep track of their blood pressure readings, diet, and exercise routines. This can help them see their progress over time and stay motivated.</li>
        <li><strong>Interactive Quizzes:</strong> Create fun and informative quizzes that help users learn about hypertension and healthy habits in an engaging way. Quizzes can also help personalize user experience by suggesting specific resources based on their answers.</li>
        <li><strong>Newsletter Subscription:</strong> Offer a regular newsletter that sends updates on the latest research, tips for healthy living, and upcoming events directly to users’ emails.</li>
        <li><strong>Virtual Health Fairs:</strong> Organize online events where users can explore various health-related topics, connect with experts, and access special workshops, all from the comfort of their homes.</li>
        <li><strong>Low-Salt Recipes:</strong> Eating less salt does not mean eating less flavor. Explore our collection of tasty, low-salt recipes that are good for your heart and your taste buds.</li>
        <li><strong>Educational Materials:</strong> Learn more about high blood pressure and how to manage it with our articles, videos, and infographics. We provide clear and simple information to help you understand your health better.</li>
      </ul>

      <p>
        <strong>Register <Link href="#" onClick={()=>{
          window.location.href="/dashboard";
        }}>here</Link> to access our support.</strong>
      </p>

      <p>
        <strong>Note:</strong> Always talk to your healthcare provider for any medical advice. Our information is here to help you understand your options, but your doctor is your best resource for advice.
      </p>
    </div>
    </div>


    <Footer/>
    </div>
  );
};

export default OnlineTreatmentSupport;
