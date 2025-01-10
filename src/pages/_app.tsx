import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Loader from '@/utils/Loader';
import Head from 'next/head';
import SideNav from '@/Components/sideNav';
import "@/styles/_app.css";
import "@/app/globals.css"
import 'react-loading-skeleton/dist/skeleton.css'
import "@/utils/style.css";
import "animate.css/animate.compat.css";
import LeftSideNav from '@/Components/side/sideNav';
import Navigation from '@/Components/dashboard/navigation';
import { Toaster } from 'react-hot-toast';
import BodySide from '@/Components/side/bodySide';

import { Provider } from 'react-redux';
import store from '@/app/store';
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router';
import { BiHeart } from 'react-icons/bi';
import {PropagateLoader} from 'react-spinners';
import { usePathname } from 'next/navigation';

const MyApp: React.FC<AppProps> = ({ Component,pageProps:  { session, ...pageProps } }) => {
  const router = useRouter();
  const pathName=usePathname()
  const appRoutes=[
    "/admin",
    "/blogReader",
    "/community",
    "/community-go-to-expand",
    "/community-question-expand",
    "/dashboard",
    "/health-monitor",
    "/HypertensionRiskDetectionResult",
    "/learn",
    "/quiz",
    "/quiz-game",
    "/risk-assessment",
    "/test",
    "/bmi-test",
    "/salttracker"
  ]
  useEffect(()=>{
    if(appRoutes.includes(pathName as string) || true){
    const handleRouteChange = (url:string) => {
      // Show loader when route change starts
      (document?.querySelector('.v-loader') as HTMLDivElement).style.display = 'block';
      console.log("show loader start")

    };

    const handleRouteComplete = (url:string) => {
      // Hide loader when route change completes
      (document?.querySelector('.v-loader') as HTMLDivElement).style.display = 'none';
      console.log("show loader complete")

    };

    // Listen for route changes
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    setTimeout(()=>{
      
      setHeartActive(false)
       },1000);
       return () => {
        // Clean up event listeners
        router.events.off('routeChangeStart', handleRouteChange);
        router.events.off('routeChangeComplete', handleRouteComplete);
      }
      }
//       else if(pathName=='/'){
//         window.location.replace("/i/")
//       }
// else {
//   console.log("other pages on public html")
// }
  
  
   },[])
  const [heartLoaderActive, setHeartActive] = useState(false)
  if(!appRoutes.includes(pathName as string) ){
    
    return (<>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/* Add your other meta tags here */}
      <link rel="icon" href="/images/logo.png" type="image/png" />
      <title>Mind The Salt </title>
    </Head>
<div className='v-loader'>
<div></div>
</div>



{(heartLoaderActive || typeof window=='undefined') && <div className='d-flex align-items-center justify-content-center globalLoader'>
  <div className='text-center'>
  <div style={{display:'flex',justifyContent:'center'}}><PropagateLoader color='var(--red)'/></div><br/>
<div className='d-flex align-items-center' style={{fontWeight:'bolder',color:'var(--our-blue)'}}>Welcome to Mind The Salt</div>
</div>

</div>}

        <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </>)
  }
  return (
    <>
        <Provider store={store}>
        <SessionProvider session={session}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* Add your other meta tags here */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <title>Mind The Salt ♥</title>
      </Head>


<div className='v-loader'>
<div></div>
</div>
{(heartLoaderActive || typeof window=='undefined') && <div className='d-flex align-items-center justify-content-center globalLoader'>
  <div className='text-center'>
  <div style={{display:'flex',justifyContent:'center'}}><PropagateLoader color='var(--red)'/></div><br/>
<div className='d-flex align-items-center' style={{fontWeight:'bolder',color:'var(--our-blue)'}}>Welcome to <BiHeart size={30} fill={'var(--red)'} color='var(--red)'/> Africa</div>
</div>

</div>}

      <div className='appBody'>
        <div className='rightSideContainer'>
          
        <SideNav/>


        </div>


<div className='body'>
<Navigation/>
<Toaster/>
     {typeof window=='undefined' ? <Loader/>: <Component {...pageProps} />}
      </div>

      <div className='leftSideContainer'>
        <LeftSideNav/>
<div  className='sideNavContainer'>


<BodySide/>

</div>
      </div>

      </div>
      </SessionProvider>
      </Provider>
    </>
  );
};

export default MyApp;
