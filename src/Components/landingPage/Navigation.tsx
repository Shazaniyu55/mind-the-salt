import React, { useEffect, useState }  from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import LogoAndText from "@/utils/LogoAndText";
import { IconButton } from "@mui/material";
import { BiMenu } from "react-icons/bi";
import useInnerWidth from "../pub/Hooks/useInnerWidth";
import NavContent, { NavContentObj } from "./navContent";

import "./style.css"
// import { SideNav } from 'react-swiper-sidenav';
import Link from "next/link";
type CustomLinkProps = {
  to: string;
  label?: string;
  type?:string
};

const CustomLink = (prop:CustomLinkProps) => {
  const { to, label,type }=prop;
if(type==='href'){
  return <MDBBtn color="link" href={to || "#"} target="_self" onClick={(e)=>{
    alert("clicked")
    e.preventDefault();
    window.location.href=to
  }}>{label}</MDBBtn>;
}
else{
  return <Link href={to || "#"}>{label}</Link>;
}
};

const Navigation:React.FC=()=>{
    const width=useInnerWidth()
    const [showNavContentMobile,setShowNavContentMobile]=useState<boolean>(false);
    const [SideNavComponent,setSideNavComponent]=useState<any>({A:()=>(<></>)});

    useEffect(()=>{
      const getComponent=async ()=>{
        const {SideNav} = await import('react-swiper-sidenav');
        console.log(SideNav)
setSideNavComponent({A:SideNav})
      }
      getComponent();


    },[])
    return (
        <>
        <nav className="d-flex align-items-center justify-content-between">


<LogoAndText/>
<div className="d-flex m-none" style={{gap:1}}> 
<NavContent/>





{width > 700 && <MDBBtn onClick={()=>{
  window.location.href='/dashboard'
}} rounded>
    Dashboard</MDBBtn>}

</div>


{width < 700 && <IconButton onClick={()=>setShowNavContentMobile(!showNavContentMobile)} className='m-block'>
<BiMenu/>
</IconButton>}
        </nav>


       <SideNavComponent.A
  navItems={NavContentObj}
  open={showNavContentMobile}
  onClose={()=>setShowNavContentMobile(false)}
  renderLink={CustomLink}
/>
        </>
    )
}

export default Navigation;