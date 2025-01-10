import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Bell, Power, Settings, User } from 'react-feather';
import useInnerWidth from '../pub/Hooks/useInnerWidth';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '../pub/Hooks/useDarkMode';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Bold from '@/utils/Bold';
import ScrollBar from 'react-perfect-scrollbar';
import Notifications from '../pub/notifications';
import Skeleton from 'react-loading-skeleton';
import useUser from '../hooks/useUser';

import { useSelector } from 'react-redux';
import { DashboardProps } from '../dashboard/initUser';
import { RootState } from '@/app/store';
import { NotificationInterface } from '../dashboard/features.interface';
import { LogOut } from '@/Auth/AuthRoutes';
import useSyncData from '../hooks/useSyncData';

const LeftSideNav:React.FC=()=>{
  const sync=useSyncData()
  const path=usePathname();
  const width=useInnerWidth();
  const route=useRouter();
  const [darkMode, setDarkMode] =useDarkMode();
  
  const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
})
const [notificationData,setNotificationData]=useState<NotificationInterface[]>([]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(!darkMode);
  };
const [showNotification,setShowNotification]=useState<boolean>(false);
const { user, error, isLoading } = useUser();
const [picture,setPicture]=useState<string>("");
useEffect(()=>{
if(user){
  setPicture(user?.picture || "");
}
},[user])
useEffect(()=>{
if(dashboardData && dashboardData?.notification)setNotificationData(dashboardData.notification)
},[dashboardData]);
const isAdmin=useSelector((state:any)=>state.isAdmin.isAdmin); 

    return (
        <>
        <div className='dashboardNavigation'>
<div className='d-flex align-items-center justify-content-end' style={{height:"100%",gap:width > 700?15:8}}>



{isAdmin && <IconButton onClick={()=>{
  route.push('/admin')
}}>
  <Tooltip placement='bottom'title='Admin settings'>
<Settings/>
</Tooltip>

</IconButton>}

<Tooltip placement='bottom'title={!darkMode ? 'switch to dark mode':'Switch to light mode'}>
<IconButton>
   <DarkModeSwitch
    // style={{ color:!darkMode ? 'black':"var(--our-blue)"}}
    moonColor='black'
    sunColor='white'
      checked={!darkMode}
      onChange={toggleDarkMode}
      size={20}
    />
    </IconButton>
    </Tooltip>



<IconButton onClick={()=>{
  setShowNotification(true);
}}>
 <Tooltip placement='bottom' title='Show Notifications'> 
<Badge badgeContent={notificationData.filter((e)=>!e.read).length} color="error">
<Bell />
</Badge>
</Tooltip>
</IconButton>


{width > 700 && <>

<div  className='d-flex align-items-center' style={{height:"100%",paddingRight:30
}}>
    <MDBDropdown style={{}}>
        <MDBDropdownToggle tag={'div'} className='d-flex align-items-center' color='white'>
  {isLoading ? <Skeleton width={50} height={50} circle/>:<Avatar src={picture} sx={{width:50,height:50}}/>}


        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>{isLoading ? <Skeleton/>: user?.name}</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link onClick={()=>{
            route.push(path+"?profile=true")
          }}><User/> Profile</MDBDropdownItem>

          <MDBDropdownItem onClick={()=>{
            LogOut(async ()=>await sync())
          }} link><Power/> Logout</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>


</div></>}

</div>


<Offcanvas show={showNotification} backdropClassName='notificationBackDrop'  placement={'end'} onHide={()=>{setShowNotification(!showNotification)}}>
        <Offcanvas.Header closeButton>
          <Bold>Notifications</Bold>
        </Offcanvas.Header>
<ScrollBar style={{maxWidth:"80vh"}}>
<Notifications data={notificationData}/>
        </ScrollBar>
      </Offcanvas>

        </div>


        

        </>
    )
}

export default LeftSideNav;