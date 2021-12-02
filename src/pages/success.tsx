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
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <NavigationBar />
                <div className="flex-1 flex justify-center items-center flex-col container mx-auto space-y-6">
                    <h1 className="font-black text-4xl md:text-7xl text-center">
                        Danke für Ihre Einsendung.
                    </h1>
                    <p className="text-gray-800 text-xl text-center">
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
