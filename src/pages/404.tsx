import { NextPage } from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';
import NavigationBar from '@components/NavigationBar';
import Footer from '@components/Footer';
import LinkButton from '@components/LinkButton';

const NotFound: NextPage = () => {
    return (
        <div>
            <NextSeo title={'Nicht gefunden'} />
            <main className="flex min-h-screen flex-col bg-gray-50">
                <NavigationBar />
                <div className="container mx-auto flex flex-1 flex-col items-center justify-center space-y-6">
                    <h1 className="text-center text-4xl font-black md:text-7xl">
                        Fehler <span className="text-indigo-700">404</span>.{' '}
                        <span role="img" aria-label="Trauriger Smily">
                            😢
                        </span>
                    </h1>
                    <p className="text-center text-xl text-gray-800">
                        Die Seite konnte nicht gefunden werden.
                    </p>
                    <LinkButton type="primary" href="/">
                        Zurück zur Startseite
                    </LinkButton>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
