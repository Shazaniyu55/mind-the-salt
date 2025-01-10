import React from "react";
import FadeInShade from "@/styles/animation/fadeIn";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default carousel styles
import { MDBBtn } from "mdb-react-ui-kit";
import useInnerWidth from "../pub/Hooks/useInnerWidth";

const images = [
  "/images/games/img1.jpeg",
  "/images/games/img2.jpeg",
  "/images/games/img3.jpeg",
  "/images/games/img4.jpeg",
  "/images/games/img5.jpeg",
  "/images/games/img6.jpeg"
];

const QuizPresenter = () => {
    const width=useInnerWidth()

    let numOfItems=1;

if(width >900){
numOfItems=2
}
else if(width > 1029){
numOfItems=3
}
else if(width > 2000){
    numOfItems=4
}
else if(width > 26000){
    
}

  return (
    <div>
      <FadeInShade
        initStyle={{
          marginLeft: "-100vw",
        }}
      >
        <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>
        Take Our Mind the Salt Game
        </h4>
      </FadeInShade>

   

<section style={{"textAlign":"start",margin:"0 auto",maxWidth:"700px"}}>    

<p style={{"textAlign":"center"}}>Think you know everything about salt? Test your knowledge with our fun trivia game!</p>
    <ul style={{"textAlign":"start",background:"rgba(0, 0, 0, 0.1)",borderRadius:20,padding:"16px 30px"}}>
      <li style={{"textAlign":"start"}}>Answer questions about salt, health, and food.</li>
      <li style={{"textAlign":"start"}}>Discover surprising facts that will change how you think about your meals.</li>
      <li style={{"textAlign":"start"}}>Challenge friends and family to see who knows the most.</li>
    </ul>

</section>

      <div style={{ marginTop: "20px",margin:"0 auto",maxWidth:"1024px"}}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          centerMode
          centerSlidePercentage={100 / 3} // Show 3 slides on large screens
          dynamicHeight
          
          emulateTouch
        //   responsive={{
        //     desktop: {
        //       breakpoint: { max: 3000, min: 1024 },
        //       items: 3,
        //     },
        //     tablet: {
        //       breakpoint: { max: 1024, min: 464 },
        //       items: 2,
        //     },
        //     mobile: {
        //       breakpoint: { max: 464, min: 0 },
        //       items: 1,
        //     },
        //   }}
          
        >
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Salt Quiz Slide ${index + 1}`}
                style={{ borderRadius: "10px", }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <br/>
      <br/>
      <div className="d-flex align-items-center justify-content-center" style={{padding:10}}>
<MDBBtn style={{maxWidth:500,width:"100%"}} onClick={()=>{
    window.open("https://mind-the-salt-trivia.vercel.app/","_blank")
}}>Play The Game Now</MDBBtn>
        </div>


    </div>
  );
};

export default QuizPresenter;
