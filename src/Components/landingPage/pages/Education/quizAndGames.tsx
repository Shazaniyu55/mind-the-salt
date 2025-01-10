
"use client";
import React from 'react'
import Navigation from '../../Navigation';
import Footer from '../../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../../style.css"
import Bold from '@/utils/Bold';
import Link from 'next/link';
import ResponsiveImage from '@/utils/ResposiveImage';

const QuizAndGames: React.FC = () => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <Navigation />
        <br /><br /><br />

        <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
            <ResponsiveImage src='/images/quiz_and_games.png' containerSize={250}/>
        <Bold style={{fontSize:"larger"}}>Engage and Learn with Our Interactive Quizzes and Games</Bold>
<p>
  Discover a fun way to learn about hypertension and heart health! Our interactive quizzes and games are designed to educate you in an engaging and memorable way. Whether you are testing your knowledge or just starting to learn about hypertension, our activities offer valuable insights in a format that’s easy to understand and enjoy.
</p>
<p>
  To access our full range of educational games and quizzes, please log in. These tools not only help you assess your understanding of hypertension but also provide immediate feedback and learning tips to improve your health knowledge.
</p>
<Link href="/quiz" className="btn btn-primary">Click Here to access the quiz and games now</Link>



        </div>

        <Footer />
      </div>
    </>
  );
};

export default QuizAndGames;
