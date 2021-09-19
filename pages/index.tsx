import React from 'react';
import NavigationBar from '../components/NavigationBar';
import InfoBar from '../components/InfoBar';
import Button from '../components/Button';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <div className='min-h-screen bg-gray-50 flex flex-col'>
                <NavigationBar />
                <InfoBar />
                <div className='flex px-4 flex-1 justify-center items-center my-8'>
                    <div className='max-w-2xl flex flex-col items-center space-y-8'>
                        <h1 className='font-bold text-4xl md:text-8xl text-center'>Ideen lebendig werden lassen</h1>
                        <p className='text-center text-gray-800'>
                            Egal ob im Web, Mobil oder im Print, ein professionelles auftreten ist wichtig für das gewinnen von neuen Kunden. Ich helfe Ihnen diese Auftritt zu entwickeln, zu
                            optimieren und umzusetzen.
                        </p>

                        <Button className='mx-5' href='/kontakt' type='primary'>
                            Jetzt Kontakt aufnehmen
                        </Button>

                        <Button className='mx-5' href='/contact'>
                            Meine Arbeit
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
