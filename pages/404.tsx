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
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <NavigationBar />
                <div className="flex-1 flex justify-center items-center flex-col container mx-auto space-y-6">
                    <h1 className="font-black text-4xl md:text-7xl text-center">
                        Fehler <span className="text-indigo-700">404</span>.{' '}
                        <span role="img" aria-label="">
                            😢
                        </span>
                    </h1>
                    <p className="text-gray-800 text-xl text-center">
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
