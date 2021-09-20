import React from 'react';
import NavigationBar from '../components/NavigationBar';
import InfoBar from '../components/InfoBar';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';

const HomePage: React.FC = () => {
    return (
        <div>
            <NextSeo title='Home' />
            <div className='min-h-screen bg-gray-50 flex flex-col'>
                <NavigationBar />
                <InfoBar />
                <div className='flex px-4 flex-1 justify-center items-center my-8'>
                    <div className='max-w-2xl flex flex-col items-center space-y-8'>
                        <h1 className='font-bold text-4xl md:text-8xl text-center'>Ideen lebendig werden lassen</h1>
                        <p className='text-center text-gray-800'>
                            Egal ob im Web, Mobil oder im Print, ein professionelles Auftreten ist wichtig für das Gewinnen von neuen Kunden. Ich helfe Ihnen diese Auftritt zu entwickeln, zu
                            optimieren und umzusetzen.
                        </p>

                        <LinkButton className='mx-5' href='/kontakt' type='primary'>
                            Jetzt Kontakt aufnehmen
                        </LinkButton>

                        <LinkButton className='mx-5' href='/contact'>
                            Meine Arbeit
                        </LinkButton>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
