import React from 'react';
import Head from 'next/head';

const Tracking: React.FC = () => {
    return (
        <Head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        var _paq = window._paq = window._paq || [];
                        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                        _paq.push(['trackPageView']);
                        _paq.push(['enableLinkTracking']);
                        (function() {
                            var u="//analytics.plwo.de/";
                            _paq.push(['setTrackerUrl', u+'matomo.php']);
                            _paq.push(['setSiteId', '1']);
                            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                            g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                        })();
                    `,
                }}
            />
        </Head>
    );
};

export default Tracking;
