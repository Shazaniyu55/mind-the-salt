import { Badge, IconButton } from '@mui/material';
import { MDBBadge } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { Bell, Menu, Search } from 'react-feather';
import SideNav from '../sideNav';
const Nav:React.FC=()=>{
    const [width,setWidth]=useState<number>(window.innerWidth);
    const [animation,setAnimation]=useState<string>("open")
    const [showMenu,setShowMenu]=useState<boolean>(false);

    return (<>
   {showMenu && <div className={`mobileNavSideContainer closeable`} onClick={(e:any)=>{
        const el=e.target as HTMLDivElement;
        if(el.classList.contains('closeable')){
            console.log(el);
            setAnimation("close");
            setTimeout(()=>{
                setShowMenu(false);
            },800)
        }
    }}>

    <div className={`mobileNavSide  ${animation}`}>
<SideNav/> 
    </div>
    </div>} 

    <div className='nav d-flex align-items-center justify-content-between' style={{padding:16}}>


        {width > 700 ? <div>
<b style={{display:'block'}}>Welcome back Username</b>
<small>What would you want to buy</small>
</div>:<>
<div>
    <IconButton onClick={()=>{
        setAnimation("open");
        setShowMenu(true);
    }}><Menu/></IconButton>
</div>
</>
}
<div className='d-flex align-items-center ' style={{gap:10.,maxWidth:"80%"}}>
    <div className='navSearch d-flex align-items-center'>
<IconButton><Search/>
</IconButton>
<input placeholder='Search AvaStore' style={{border:'none',background:"none"}}/>
    </div>

    <IconButton style={{background:"white"}}>
      <Badge color='error' badgeContent={9} overlap="circular">
        <Bell />
      </Badge>
    </IconButton>

</div>

    </div>
    </>)
}

export default Nav;