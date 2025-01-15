"use client";
import React from 'react'
import Navigation from './Navigation';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Presenter from './Presenter';
import FlexBox from './flexBox';
import Bold from '@/utils/Bold';
import { MDBBtn } from 'mdb-react-ui-kit';
import { BookOpen, CornerUpRight, Heart, Search } from 'react-feather';
import { MdSchool, MdSick } from 'react-icons/md';
import Footer from './footer';
import { useRouter } from 'next/router';
import FadeInShade from '@/styles/animation/fadeIn';
import { transcode } from 'buffer';
import { Fade } from '@mui/material';
import { transform } from 'next/dist/build/swc';
import Box_ from './box';
import QuizPresenter from './quizPresenter';

const Main: React.FC = () => {
const route=useRouter()
    return (
        <div style={{ height: "100vh", overflow: "auto", backgroundColor:"white" }}>
            <Presenter />
            <Navigation />



            <div style={{ padding: 30 }}>
                <FadeInShade
                initStyle={{marginBottom:40,transform:"translate(0px,20vh)"}}
                   >

<div className="box-container" style={{maxWidth:1024,margin:"0 auto",borderRadius:30,  backgroundColor:"#254B85"}}>


<div style={{maxWidth:"600px",margin:"0 auto"}}><br />
                        <b style={{ fontSize: 'larger',textAlign:"center",display:"block", color:"white"}}>Why Mind the Salt Matters?</b><br /><br />
                        <p style={{textAlign:"center", color:"white"}}>Salt is a big part of our diets, but too much can harm your health. Many people don’t realise how much salt they eat every day. Here are some important facts about salt and health:

</p>
                    </div>


<br/>
<div style={{padding:10,width:"100%",gap:10,flexFlow:"row wrap",justifyContent:"center"}} className="d-flex align-items-center justify-content-center">

{[
  { title: "1 in 3 adults", fact: "around the world has high blood pressure, often caused by eating too much salt." },
  { title: "75% of the salt we eat", fact: "comes from processed foods like bread, sauces, and snacks—not from the salt shaker." },
  { title: "It only takes 3 weeks", fact: "for your taste buds to get used to less salt in your food." },
  { title: "2 grams a day", fact: "is the maximum amount of sodium recommended by the WHO—that’s about one teaspoon of salt." },
  { title: "2.5 million deaths each year", fact: "are linked to eating too much salt" },
  { title: "Reducing salt by 30% globally", fact: "could save millions of lives from strokes and heart attacks." }
].map((e,i:number)=>{
    let initStyle={};
    switch (i % 3) {
        case 0:
          initStyle = { transform: "translateX(-20px)", opacity: 0 };
          break;
        case 1:
          initStyle = { transform: "skewX(-10deg)", opacity: 0 };
          break;
        case 2:
          initStyle = { transform: "translateY(20px)", opacity: 0 };
          break;
        default:
          initStyle = { opacity: 0 };
          break;
      }
return <Box_ heading={e.title} key={i} text={e.fact} initStyle={initStyle}/>
})}

    </div>

</div>
                    </FadeInShade>
            </div>
            <br />


            {/* <div style={{ background: "rgb(250, 250, 252)", padding: 30 }}>
                <FlexBox
                initStyle={{transform:"translate(0px,20vh)"}}
                    image='/images/doctorTest.jpg'
                    text={
                        <><br />
                            <Bold style={{ fontSize: 'larger' }}>OUR MISSION</Bold><br /><br />

                        We strive to deliver accessible, culturally sensitive information on salt reduction. Through interactive tools, engaging stories, and actionable advice, we inspire individuals and families to reduce salt, embrace fresh ingredients, and protect their health.

                        </>
                    }
                    style={{ flexFlow: "row-reverse nowrap" }}
                />
            </div> */}
<div className="aboutParent">
            <FadeInShade    initStyle={{transform:"translate(0px,20vh)"}} style={{padding:16,margin:"0 auto",width:"90%",boxShadow:"1px 1px 10px 0px rgb(239, 238, 241)",borderRadius:30, backgroundColor:"#254B85", color:"white"}}>
           <br/><br/>
            <h2>Our Mission</h2>
      <p>
        Our mission is simple: to help people reduce their salt intake and lead healthier lives. We believe:
      </p>
      <ul>
        <li>Everyone deserves to know how salt affects their health.</li>
        <li>Making small changes can have a big impact on heart and overall health.</li>
        <li>Healthy eating doesn’t mean giving up flavour—we’ll show you how to enjoy tasty meals with less salt.</li>
      </ul>
      <br/><br/>
      <h2>Our Vision</h2>
      <p>We imagine a world where:</p>
      <ul>
        <li>Families enjoy meals that are delicious, fresh, and low in salt.</li>
        <li>Communities come together to support heart-healthy lifestyles.</li>
        <li>Everyone has the tools and knowledge to protect their heart health.</li>
      </ul>
      <br/><br/>
            </FadeInShade>
            </div>
            <br /><br />
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{
                    boxShadow:"1px 1px 10px 0px rgb(239, 238, 241)",
                    width:"80%",
                    minWidth:300,
                    padding:20,
                    borderRadius:"10px 5px",
                    backgroundColor:"#254B85",
                    color:"white"
                }}>
                    <FadeInShade initStyle={{opacity:'0'}}><Bold style={{ fontSize: 30,color:"white"  }}>Take Our Heart Health Risk Assessment</Bold>
                    </FadeInShade> 
                    <p>
                        <br/>
      Want to know how your current habits affect your heart health? Take our assessment to:
    </p>
    <ul>
      <li>Find out if you’re eating too much salt.</li>
      <li>Learn your risk for high blood pressure and other health issues.</li>
      <li>Get simple tips to improve your diet and lifestyle.</li>
    </ul>
    <p>It only takes a few minutes, and it’s free!</p>
    <br/>

                    <MDBBtn rounded color='danger'  onClick={()=>{
                        window.location.href="/risk-assessment"
                    }} style={{ minWidth: 200 }}>Start the Assessment Now</MDBBtn>
                        <br/><br/>

                </div>
            </div>
            <br /><br />
            {/* <div style={{ background: "rgb(250, 250, 252)", padding: 30 }}>
                <FlexBox
                initStyle={{transform:"skew(30deg)"}}

                    image='/images/logo.png'
                    text={
                        <div style={{padding:20}}>
                            <br /><Bold style={{ fontSize: 25 }}>
                                OUR VISION</Bold>
                            <br /><br />
                            We imagine a world where everyone can savour the natural flavours of their foods while keeping their hearts and bodies strong. By embracing knowledge and making small changes, communities can enjoy balanced meals and healthier futures.    </div>
                    }
                    style={{ boxShadow: 'none', maxWidth: 1000, margin: "0 auto", background: "none" }}
                />

            </div> */}
            <br /><br />
            <div className='text-center' style={{padding:16}}>
               <FadeInShade initStyle={{ opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 1s ease-out, transform 1s ease-out", }}> <Bold style={{ fontSize: 25 }}>
                 What Mind the Salt Provides
                </Bold></FadeInShade>
              



                <div className='d-flex ' style={{gap:10,flexFlow:"row wrap", background: "#254B85", padding: 30 }}>

                    {[
                        {
                            title: " Salt Tracker",
                            Icon: Heart,
                            text: "Log your meals and see how much salt you’re eating. Track your progress as you cut back on salt."
                        },
                        {
                            title: "Heart Health Tools",
                            Icon: MdSchool,
                            text:"Take our health quizzes and assessments to learn how salt affects your body."
                        },
                        {
                            title: "Low-Salt Recipes",
                            Icon:CornerUpRight,
                            text: "Discover tasty, healthy recipes that don’t rely on salt for flavour."
                        },
                        {
                            title: "Educational Resources",
                            Icon:BookOpen,
                            text: "Learn the facts about salt, sodium, and your health through our guides and tips."
                        },
                        {
                            title: "Community Support",
                            Icon:MdSick,
                            text: "Join others on the same journey—share experiences, ask questions, and find encouragement."
                        }
                    ].map((e, i) => (<div key={i} className='whatWeProvide text-center'>
                        <br />
                        <div style={{ margin: "0 auto", padding: 10, borderRadius: "50%", width: 50, height: 50, background: "var(--red)" }}> <e.Icon color='white' size={30} /></div>
                        <br />
                        <Bold>{e.title}</Bold>
                        <br /><br />
                        <p>
                            {e.text}
                        </p>

                    </div>))}

                </div>

                <br /><br />
                <QuizPresenter/>
                <br/><br/>


                <FadeInShade    initStyle={{transform:"translate(0px,20vh)"}} style={{padding:16,margin:"0 auto",width:"90%",boxShadow:"1px 1px 10px 0px rgb(239, 238, 241)",borderRadius:30}}>
                <section className='allStart'>
    <h3>About Us</h3>
    <p>
      Mind the Salt started as part of a PhD research project by
      <strong>Jesse Enebi Usman</strong> at <strong>Sheffield Hallam University</strong>. Jesse’s research focused on improving health outcomes by helping people reduce their salt intake.
    </p>
    <p>
      What began as a small study has grown into a global effort to raise awareness about the dangers of eating too much salt. Our goal is to make health education accessible, practical, and meaningful for everyone—especially underserved communities.
    </p>
    <p>We’re here to help you take small steps for big improvements in your health.</p>
  </section>
                    </FadeInShade>




                    <br/>
                    <br/>


                    <FadeInShade    initStyle={{transform:"translate(0px,20vh)"}} style={{padding:16,margin:"0 auto",width:"90%",boxShadow:"1px 1px 10px 0px rgb(239, 238, 241)",borderRadius:30}}>
                <section className='allStart'>
    <h3>Join the Community</h3>
    <p>{"You're"} not alone on your journey to better health! In our online community, you can:</p>
    <ul>
      <li>Share your successes and challenges with others.</li>
      <li>Learn new tips and tricks for eating less salt.</li>
      <li>Ask questions and get answers from health experts.</li>
    </ul>
    <MDBBtn rounded color='danger'  onClick={()=>{
                        window.location.href="/community"
                    }} style={{ minWidth: 200 }}>Join Community Today</MDBBtn>
    </section>
   
                    </FadeInShade>
<br/>

<br/>
<FadeInShade    initStyle={{transform:"translate(0px,20vh)"}} style={{padding:16,margin:"0 auto",width:"90%",boxShadow:"1px 1px 10px 0px rgb(239, 238, 241)",borderRadius:30}}>
                <section className='allStart'>
                <h3>Register to Read Our Newsletter</h3>
    <p>Sign up for our free newsletter to stay informed and inspired:</p>
    <ul>
      <li>Get monthly tips for reducing salt in your diet.</li>
      <li>Receive new low-salt recipes straight to your inbox.</li>
      <li>Be the first to know about upcoming events and resources.</li>
    </ul>
    <MDBBtn rounded color='danger'  onClick={()=>{
                        window.location.href="/Dashboard"
                    }} style={{ minWidth: 200 }}>Register now</MDBBtn>
    </section>

                    </FadeInShade>

                <br/><br/>
            </div>
            <Footer></Footer>




        </div>
    )
}

export default Main;