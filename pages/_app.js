import '../styles/globals.css';
import { AppWrapper } from '../context/state';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initAmplitude, sendAmplitudeData } from '../lib/amplitude';

import * as ga from '../lib/ga';
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      initAmplitude();
    }
  }, [router.isReady]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
      sendAmplitudeData('pageview', { page: url });
      console.log('Route change:', url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
