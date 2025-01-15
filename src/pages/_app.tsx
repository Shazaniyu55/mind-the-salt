import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Loader from '@/utils/Loader';
import Head from 'next/head';
import SideNav from '@/Components/sideNav';
import "@/styles/_app.css";
import "@/app/globals.css";
import 'react-loading-skeleton/dist/skeleton.css';
import "@/utils/style.css";
import "animate.css/animate.compat.css";
import LeftSideNav from '@/Components/side/sideNav';
import Navigation from '@/Components/dashboard/navigation';
import { Toaster } from 'react-hot-toast';
import BodySide from '@/Components/side/bodySide';
import { Provider } from 'react-redux';
import store from '@/app/store';
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import { BiHeart } from 'react-icons/bi';
import { PropagateLoader } from 'react-spinners';

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const appRoutes = [
    "/admin",
    "/Education",
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
    "/salttracker",
  ];

  useEffect(() => {
    const handleRouteChange = (url: string) => setIsLoading(true);
    const handleRouteComplete = (url: string) => setIsLoading(false);

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);

  const isAppRoute = appRoutes.includes(router.pathname);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" href="/images/logo.png" type="image/png" />
          <title>Mind The Salt {isAppRoute ? "Dashboard" : ""}</title>
        </Head>

        {isLoading && (
          <div className="globalLoader">
            <div className="text-center">
              <PropagateLoader color="var(--red)" />
              <div className="mt-3" style={{ fontWeight: 'bolder', color: 'var(--our-blue)' }}>
                Loading...
              </div>
            </div>
          </div>
        )}

        {isAppRoute ? (
          <div className="appBody">
            <div className="rightSideContainer">
              <SideNav />
            </div>
            <div className="body">
              <Navigation />
              <Toaster />
              <Component {...pageProps} />
            </div>
            <div className="leftSideContainer">
              <LeftSideNav />
              <BodySide />
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
