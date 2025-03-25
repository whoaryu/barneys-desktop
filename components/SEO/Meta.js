import React from 'react';
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Barney's Legendary Laptop</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Barney's Legendary Laptop" />
            <meta name="description" content="This is Barney Stinson's Laptop. DONT TOUCH!!" />
            <meta name="author" content="Lorenzo Von Matterhorn" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />
            
            {/* Search Engine */}
            <meta name="image" content="images/logos/suitup.jpg" />
            
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Barney's Legendary Laptop" />
            <meta itemProp="description" content="This is Barney Stinson's Laptop. DONT TOUCH!!" />
            <meta itemProp="image" content="images/logos/suitup.jpg" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Barney's Legendary Laptop" />
            <meta name="twitter:description" content="This is Barney Stinson's Laptop. DONT TOUCH!!" />
            <meta name="twitter:site" content="@barneystinson" />
            <meta name="twitter:creator" content="@barneystinson" />
            <meta name="twitter:image:src" content="images/logos/suitup.jpg" />
            
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Barney's Legendary Laptop" />
            <meta name="og:description" content="This is Barney Stinson's Laptop. DONT TOUCH!!" />
            <meta name="og:image" content="images/logos/suitup.jpg" />
            <meta name="og:url" content="http://barneystinson.com/" />
            <meta name="og:site_name" content="Barney's Legendary Laptop" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />
            
            <link rel="icon" href="images/logos/suitup.jpg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
}