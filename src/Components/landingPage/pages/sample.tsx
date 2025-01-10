import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "../style.css"
const IntroHypertension:React.FC=()=>{
return (<>
  <div style={{ height: "100vh", overflow: "auto" }}>
            <Navigation />
            <br/><br/><br/>
            <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>

</div>
            <br/><br/><br/>
            <Footer/>
</div>
</>)
}
export default IntroHypertension;