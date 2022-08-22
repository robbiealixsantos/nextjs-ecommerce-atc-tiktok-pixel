import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script id="tiktok-base-code" strategy="afterInteractive" 
      dangerouslySetInnerHTML={{
        __html: `
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
        
          ttq.load('CBQK8PBC77UB6N081LP0');
          ttq.page();
        }(window, document, 'ttq');
        `,
      }}
    />
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
    </>
  );
}

export default MyApp;
