import '../styles/globals.css';
import { AppWrapper } from 'context/state';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initAmplitude, sendAmplitudeData } from 'lib/amplitude';

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
    router.events.on('routeChangeComplete', handleRouteChange);

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
