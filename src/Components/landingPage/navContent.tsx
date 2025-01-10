
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';

import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import { ChevronDown, ChevronsDown } from 'react-feather';
import { BiChevronsDown } from 'react-icons/bi';
const NavContent:React.FC=()=>{
  const route=useRouter();
    return  (<>
 <Menu   menuButton={<MDBBtn color='white' rounded  style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}>About  <ChevronDown/> </MDBBtn>}>
    <MenuItem
     style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
    onClick={()=>{
           route.push("/AboutSalt");
        }}>
    Salt Basics
    </MenuItem>
    <MenuItem 
     style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
    onClick={()=>{
         route.push("/ReduceSalt");
        }}>
    Reduce Salt Intake
    </MenuItem>
</Menu>




        <Menu menuButton={<MDBBtn color='white' rounded   style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}> HEALTH RISK <ChevronDown/> </MDBBtn>}>
      <SubMenu  label="Hypertension" menuStyle={{color:"#254B85"}}>
        <MenuItem 
         style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
        onClick={()=>{
          route.push("/IntroHypertension");
        }}>Introduction Hypertension</MenuItem>
        
        
        <SubMenu label="Explore risk factors" menuStyle={{color: "#254B85"}}>
        <MenuItem 
        onClick={()=>{
          route.push("/High-Salt-Intake")
        }}>High Salt Intake</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/physicalInActivity")
        }}>Physical Inactivity</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/PoorDiet")
        }}>Poor Diet</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Obesity")
        }}>Obesity</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Smoking")
        }}>Smoking</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Alcohol-Consumption")
        }}> Alcohol consumsion</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Stress")
        }}>Stress</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/FamilyHistory")
        }}>Family History</MenuItem>
      </SubMenu>
{/*       
        <MenuItem onClick={()=>{
          route.push("/risk-factors")
        }}>Risk Factors</MenuItem> */}



        <MenuItem onClick={()=>{
          route.push("/Prevalence")
        }}>Prevalence</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/MeasurePrevalence"); 
        }} >Preventing measure</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Monitoring-and-Management");
        }}>Monitoring and Management</MenuItem>



<MenuItem 
 style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  route.push("/TreatmentSupport/onlineTreatmentOption")
}}>
Treatment Support
</MenuItem>


        <MenuItem 
         style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}

        onClick={()=>{
          route.push("/Consultation-and-Medication")
        }}>Consultation and Medication</MenuItem>
        <MenuItem 
         style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}

        onClick={()=>{
          route.push("/Empowerment")
        }}>Empowerment</MenuItem>
        <MenuItem 
         style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}

        onClick={()=>{
          route.push("/FurtherInformation")
        }}>Further Information</MenuItem>
      </SubMenu>
    

      <MenuItem 
      style={{color:"#254B85"}}
      onClick={()=>{
          route.push("/Heart_Disease_And_Strokes");
        }}>Heart Disease And Stresses</MenuItem>

        
      <MenuItem 
            style={{color:"#254B85"}}

      onClick={()=>{
          route.push("/Kidney_Disease");
        }}>Kidney Disease</MenuItem>

        
      <MenuItem 
            style={{color:"#254B85"}}

      onClick={()=>{
          route.push("/Bone_Health_(Osteoporosis)");
        }}>Bone Health (Osteoporosis)</MenuItem>

<MenuItem 
      style={{color:"#254B85"}}

onClick={()=>{
          route.push("/Stomach_Cancer");
        }}>Stomach Cancer</MenuItem>

<MenuItem 
      style={{color:"#254B85"}}

onClick={()=>{
          route.push("/Fluid_Retention_and_Oedema");
        }}>Fluid Retention and Oedema
</MenuItem>

<MenuItem
      style={{color:"#254B85"}}

onClick={()=>{
          route.push("/Cognitive_Decline");
        }}>Cognitive Decline</MenuItem>




</Menu>
{/* <Menu menuButton={<MDBBtn  color='white' rounded>Education <ChevronDown/>  </MDBBtn>}>
      <SubMenu label="Learning Materials">
        <MenuItem onClick={()=>{
          route.push("/Education/Salt101/");
        }}>Salt 101</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Education/Salt102/");
        }}>Salt 102</MenuItem>
      <MenuItem onClick={()=>{
        route.push("/Education/PracticalGuide")
      }
      }>Practical Guide to dietary salt production</MenuItem>
      <MenuItem  onClick={()=>{
        route.push("/Education/LowSaltAccessPlan")
      }
      }>
     Low Salt Access Plan
      </MenuItem>
      <MenuItem onClick={()=>{
        route.push("/Education/LowSaltRecipe")
      }}>
      Low Salt Recipes of common africa dishes
      </MenuItem>
      </SubMenu>
      <SubMenu label="Resources">
        <MenuItem onClick={()=>{
          route.push("/Education/Flyer")
        }}>Flyer</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Education/Poster")
        }}>Posters</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Education/Brochurse/")
        }}>Brochures</MenuItem>
        <MenuItem>Others</MenuItem>
      </SubMenu>
      <SubMenu label="Media">
        <MenuItem onClick={()=>{
          route.push("/Education/Videos/")
        }}>Videos</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Education/Pictures/")
        }}>Pictures</MenuItem>
        <MenuItem onClick={()=>{
          route.push("/Education/others/")
        }}>Others</MenuItem>
      </SubMenu>
      <SubMenu  label="Quiz And Games">
        <MenuItem onClick={()=>{
          route.push("/Education/QuizAndGames/")
        }}>Quiz And Games</MenuItem>
      </SubMenu>
      <SubMenu label="Blogs">
      <MenuItem onClick={()=>{
        window.location.href=("/learn/")
        }}>Go to blogs post</MenuItem>
        {/* <MenuItem>E<span style={{textTransform:"lowercase"}}>MPOWERING COMMUNITIES: HEART {"AFRICA'S"} ADVOCACY JOURNEY</span></MenuItem>
      </SubMenu> */}
{/* </Menu> */}
{/* <Menu menuButton={<MDBBtn  color='white' rounded>Advocacy <ChevronDown/> </MDBBtn>}>
<MenuItem onClick={()=>{
  route.push("/Education/Empowering-Communities-HEART-AFRICA-Advocacy-Journey")
}}>
Advocacy Initiatives
</MenuItem>
<MenuItem onClick={()=>{
  window.location.href=("/community")
}}>
Community ferum
</MenuItem>
</Menu> */}
<Menu menuButton={<MDBBtn  color='white'   style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}} rounded>Research And Insight <ChevronDown/>  </MDBBtn>}>
<MenuItem 
 style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}

onClick={()=>{
  route.push("/Research/our-research-strategy/")
}}>
Our Research Strategy
</MenuItem>
<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  route.push("/Research/Findings/")
}}>
Latest findings
</MenuItem>
{/* <MenuItem 
 style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}

onClick={()=>{
  route.push("/Research/OurResearchAndImpact/")
}}
>
Our Researches impact and plans
</MenuItem> */}
<MenuItem
 style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}

onClick={()=>{
  route.push("/Research/Publications/")
}}>
Our Publications
</MenuItem>
</Menu>






<Menu menuButton={<MDBBtn  color='white'  style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}} rounded>Resources <ChevronDown/>  </MDBBtn>}>
<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  route.push("/TreatmentSupport/TreatmentOption")
}}>
Treatment Option
</MenuItem>



<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}onClick={()=>{
  route.push("/Toolkit_For_Healthy_Life")
}}>
Toolkit For Healthy Heart
</MenuItem>

<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  route.push("/Recipes")
}}>
Low Salt Recipes
</MenuItem>


<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  window.location.href="/learn"
}}>
Blog
</MenuItem>


<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
   route.push("/Recipes")
}}>
News Letter
</MenuItem>


</Menu>



{/* <Menu menuButton={<MDBBtn  color='white'  style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}} rounded> Support  </MDBBtn>}>

</Menu> */}







<Menu menuButton={<MDBBtn  color='white' style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}} rounded> Support <ChevronDown/>  </MDBBtn>}>
<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  route.push("/TreatmentSupport/TreatmentOption")
}}>
Treatment Options
</MenuItem>
<MenuItem 
style={{color: "#254B85", fontWeight: 800., fontSize:"15px"}}
onClick={()=>{
  route.push("/TreatmentSupport/onlineTreatmentOption")
}}>
Online Treatment Support</MenuItem>
</Menu>

</>)
}

export default NavContent;
export const NavContentObj = {
  name: "Main",
  childrenItems: [
  
    {
      name: "Salt",
      childrenItems: [
        {
          name: "Salt",
          childrenItems: [
            { itemProps: { label: "About Salt", to: "/AboutSalt" } },
            { itemProps: { label: "Reduce Salt", to: "/ReduceSalt" } },
          
          ],
        }
      ]
      },
  
    {
      name: "Hypertension",
      childrenItems: [
        {
          name: "Hypertension",
          childrenItems: [
            { itemProps: { label: "Introduction Hypertension", to: "/IntroHypertension" } },
        
  { itemProps: { label: "Kidney Disease", to: "/Kidney_Disease" } },
  { itemProps: { label: "Bone Health (Osteoporosis)", to: "/Bone_Health_(Osteoporosis)" } },
  { itemProps: { label: "Stomach Cancer", to: "/Stomach_Cancer" } },
  { itemProps: { label: "Fluid Retention and Oedema", to: "/Fluid_Retention_and_Oedema" } },
  { itemProps: { label: "Cognitive Decline", to: "/Cognitive_Decline" } },
    
          ],
        },
    //     {
    //       name: "Explore Risk Factors",
    //       childrenItems: [
    //         { itemProps: { label: "High Salt Intake", to: "/High-Salt-Intake" } },
    //         { itemProps: { label: "Physical Inactivity", to: "/physicalInActivity" } },
    //         { itemProps: { label: "Poor Diet", to: "/PoorDiet" } },
    //         { itemProps: { label: "Obesity", to: "/Obesity" } },
    //         { itemProps: { label: "Smoking", to: "/Smoking" } },
    //         { itemProps: { label: "Alcohol Consumption", to: "/Alcohol-Consumption" } },
    //         { itemProps: { label: "Stress", to: "/Stress" } },
    //         { itemProps: { label: "Family History", to: "/FamilyHistory" } },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "Education",
    //   childrenItems: [
    //     {
    //       name: "Learning Materials",
    //       childrenItems: [
    //         { itemProps: { label: "Salt 101", to: "/Education/Salt101/" } },
    //         { itemProps: { label: "Salt 102", to: "/Education/Salt102" } },
    //         { itemProps: { label: "Practical Guide to Dietary Salt Production", to: "/Education/PracticalGuide" } },
    //         { itemProps: { label: "Low Salt Access Plan", to: "/Education/LowSaltAccessPlan" } },
    //         { itemProps: { label: "Low Salt Recipes of Common Africa Dishes", to: "/Education/LowSaltRecipe" } },
    //       ],
    //     },
        {
          name: "Resources",
          childrenItems: [
            { itemProps: { label: "Flyer", to: "/Education/Flyer" } },
            { itemProps: { label: "Posters", to: "/Education/Posters" } },
            { itemProps: { label: "Brochures", to: "/Education/Brochure/" } },
            { itemProps: { label: "Others", to: "/Education/others" } },
          ],
        },
    //     {
    //       name: "Media",
    //       childrenItems: [
    //         { itemProps: { label: "Videos", to: "/Education/Videos/" } },
    //         { itemProps: { label: "Pictures", to: "/Education/Pictures" } },
    //         { itemProps: { label: "Others", to: "/Education/others" } },
    //       ],
    //     },
    //     {
    //       name: "Quiz And Games",
    //       childrenItems: [
    //         { itemProps: { label: "Quiz And Games", to: "/Education/QuizAndGames/" } },
    //       ],
    //     },
    //     {
    //       name: "Blogs",
    //       childrenItems: [
    //         { itemProps: { label: "Go to Blogs", to: "/learn", type: 'href' } },
    //         { itemProps: { label: "Demystifying Hypertension: A Journey to Heart Health" } },
    //       ],
    //     },
     ],
     },
  
    {
      name: "Research",
      childrenItems: [
        { itemProps: { label: "Our Research Strategy", to: "/Research/our-research-strategy/" } },
        { itemProps: { label: "Latest Findings", to: "/Research/Findings/" } },
        { itemProps: { label: "Our Researches Impact and Plans", to: "/Research/OurResearchAndImpact/" } },
        { itemProps: { label: "Our Publications", to: "/Research/Publications/" } },
      ],
    },
    // {
    //   name: "Treatment",
    //   childrenItems: [
    //     { itemProps: { label: "Treatment Options", to: "/TreatmentSupport/TreatmentOption" } },
    //     { itemProps: { label: "Online Treatment Support", to: "/TreatmentSupport/onlineTreatmentOption" } },
    //   ],
    // },





    {
      name: "Community",
      childrenItems: [
        {
          name: "Join Community",
          childrenItems: [
            { itemProps: { label: "Community", to: "/SaltCommunity" } },
            
          ],
        },
      ]
      },


      {
        name: "Resources",
        childrenItems: [
          {
            name: "Resources",
            childrenItems: [
              { itemProps: { label: "Treatment Option", to: "/TreatmentSupport/TreatmentOption" } },
              { itemProps: { label: "Treatment Support", to: "/TreatmentSupport/onlineTreatmentOption" } },
              { itemProps: { label: "Toolkit For Healthy Heart", to: "/Toolkit_For_Healthy_Life" } },
              { itemProps: { label: "Recipes", to: "/Recipes" } },
              
            ],
          },
        ]
        }

  ],
};
