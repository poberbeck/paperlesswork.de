import React from 'react';
import Script from 'next/script';

const Tracking: React.FC = () => {
    return (
        <>
            <Script
                data-website-id="5b68082c-9f78-458b-a4e9-9d6ff2972e81"
                src="https://analytics.paperlesswork.de/umami.js"
                strategy="afterInteractive"
            />
        </>
    );
};

export default Tracking;
