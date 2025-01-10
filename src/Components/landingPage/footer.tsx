import Bold from '@/utils/Bold';
import { MDBBtn, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import Link from 'next/link';
import React from 'react'
import { Mail, Play, Send, Phone } from 'react-feather';
import SocialMediaIcons from './socials';
import './footer.css'

const Footer:React.FC=()=>{
    return (<>

<section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Mind The Salt</h4>
          <ul className="links">
          <Link href="/Disclaimers/">    » DISCLAIMER</Link><br/>
<Link href="/Disclaimers/ADVICE_DISCLAIMER/">» MEDICAL ADVICE DISCLAIMER</Link><br/>
<Link href="/Disclaimers/copy_right_policy/">» COPYRIGHT POLICY</Link><br/>
<Link href="/Disclaimers/AccessibilityStatement">» ACCESSIBILITY STATEMENT</Link><br/>
<Link href="/Disclaimers/Ethics_Policy/">» ETHICS POLICY</Link>
          </ul>
        </div>
        

       <div className="footer-col">
          <h4>Explore</h4>
          <div className='d-flex align-content-center' style={{gap:10}}> <Mail  color='lightgrey'/> INFO@HEARTAFRICA.ORG</div>
          <Link href="https://mind-the-salt-trivia.vercel.app/"><Play  color='lightgrey'/>Mind the salt Quiz</Link><br/>
          <div className='d-flex align-content-center' style={{gap:10}}> <Phone  color='lightgrey'/> +2349074</div>

        </div> 

   

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="https://mind-the-salt-web.vercel.app/api/message" method='post'>
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
          <SocialMediaIcons/>

          </div>
        </div>
      </div>
    </section>
    {/* <div className='footer' >
<div className='d-flex m-block gap-40' >
<div style={{width:"40%",textAlign:"start",}}>
    <Bold style={{color:"white",fontSize:20}}>Subscribe To Our Mail</Bold><br/><br/>
    <div className="relative flex items-center w-full max-w-xs">
  <input
    type="text"
    placeholder="Enter your email"
    className="py-2 pl-4 pr-16 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
  style={{backgroundColor:"#FFA805"}}
    className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-[#FFA805] text-white rounded-r-md hover:bg-[#FFA805]"
  >
    Subscribe
  </button>
</div>

</div>


<div style={{textAlign:"start",  }}>
    <Bold style={{fontSize:20,color:"lightgrey"}}>POLICY FILES</Bold><br/><br/>
<Link href="/Disclaimers/">    » DISCLAIMER</Link><br/>
<Link href="/Disclaimers/ADVICE_DISCLAIMER/">» MEDICAL ADVICE DISCLAIMER</Link><br/>
<Link href="/Disclaimers/copy_right_policy/">» COPYRIGHT POLICY</Link><br/>
<Link href="/Disclaimers/AccessibilityStatement">» ACCESSIBILITY STATEMENT</Link><br/>
<Link href="/Disclaimers/Ethics_Policy/">» ETHICS POLICY</Link><br/>


</div>




<div>
<Bold style={{fontSize:20,color:"lightgrey"}}>Games</Bold><br/>
<Link href="https://mind-the-salt-trivia.vercel.app/">Mind the salt Quiz</Link><br/>
<br/>

    <Bold style={{fontSize:20,color:"lightgrey"}}>Contact us</Bold>
  <br/>
<div className='d-flex align-content-center' style={{gap:10}}> <Mail  color='lightgrey'/> INFO@HEARTAFRICA.ORG</div>
<br/>

<br/>
<SocialMediaIcons/>

</div>




</div>

    </div> */}
    </>
    

)
}

export default Footer;




