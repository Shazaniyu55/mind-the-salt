import React, { useEffect, useState } from 'react';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import LogoAndText from '@/utils/LogoAndText';
import LeftSideNav from '../side/sideNav';
import { IconButton} from '@mui/material';
import { Menu } from 'react-feather';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideNav from '../sideNav';
import ScrollBar from 'react-perfect-scrollbar';
import Bold from '@/utils/Bold';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton'
import { getGreeting } from '@/Logics/date';
import useUser from '../hooks/useUser';
import DashboardSetup from './dashboardSetup';


const Navigation:React.FC=()=>{
    const width=useInnerWidth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route=useRouter();
    const [localUser,setLocalUser]=useState<any>({});
  const { user, error, isLoading } = useUser();
useEffect(()=>{
  
if(user){
  localStorage.setItem("user",JSON.stringify(user));
}
if(window.localStorage.user){
  setLocalUser(JSON.parse(window.localStorage.user));
}
},[])
if (!isLoading && !user){
  //route.push("/api/auth/login")
}
return (
        <>
        <DashboardSetup/>
        <div className='dashboardNavigation' style={{padding:10}}>

{width > 700 && <div>
  {!isLoading || localUser?.name ? <>{user?.name}<br/>
    <Bold>{getGreeting()}</Bold>
  </>:<Skeleton width={80} style={{borderRadius:3}}/>}
  
</div>}


{width < 700 && <div className='d-flex align-items-center justify-content-between' style={{width:"100%",height:"100%"}}>
    <LogoAndText/>


    <div className='d-flex align-items-center' style={{height:"100%"}}>
    <LeftSideNav/>
    <IconButton onClick={handleShow}><Menu/></IconButton>
        </div>

    </div>}
        </div>

        <Offcanvas show={show} placement={'end'} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <LogoAndText/>
        </Offcanvas.Header>
<ScrollBar style={{maxWidth:"80vh"}}>
        <SideNav setShow={setShow}/>
        </ScrollBar>
      </Offcanvas>





        </>
    )
}

export default Navigation;