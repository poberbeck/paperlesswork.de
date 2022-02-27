import { NextPage } from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';
import NavigationBar from '@components/NavigationBar';
import Footer from '@components/Footer';
import LinkButton from '@components/LinkButton';

const Success: NextPage = () => {
    return (
        <div>
            <NextSeo title={'Danke sehr'} />
            <main className="flex min-h-screen flex-col bg-gray-50">
                <NavigationBar />
                <div className="container mx-auto flex flex-1 flex-col items-center justify-center space-y-6">
                    <h1 className="text-center text-4xl font-black md:text-7xl">
                        Danke für Ihre Einsendung.
                    </h1>
                    <p className="text-center text-xl text-gray-800">
                        Wir melden uns so bald wie möglich bei Ihnen.
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

export default Success;
