import { NextPage } from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';
import NavigationBar from '@components/NavigationBar';
import Footer from '@components/Footer';
import LinkButton from '@components/LinkButton';

const NotFound: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <NextSeo title={'Nicht gefunden'} />
            <NavigationBar />
            <main className="container mx-auto flex flex-1 flex-col items-center justify-center space-y-6">
                <p className="text-center text-4xl font-black text-gray-300 md:text-7xl">
                    Fehler 404
                </p>
                <h1 className="text-center text-4xl font-black md:text-6xl">
                    Die Seite konnte nicht gefunden werden.
                </h1>
                <p className="text-center text-xl text-gray-800">
                    Leider konnten wir Ihre gewünschte Seite nicht finden.
                </p>
                <LinkButton type="primary" href="/">
                    Zurück zur Startseite
                </LinkButton>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
