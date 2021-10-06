import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import LinkButton from '../components/LinkButton';
const WorkPage: React.FC = () => {
    return (
        <div className='bg-gray-50'>
            <div className='min-h-screen'>
                <NavigationBar />
                <div className='flex-1 grid md:grid-cols-2 gap-10'>
                    <div className='flex space-y-8 flex-col justify-center px-4 md:px-12'>
                        <h1 className='font-bold text-4xl md:text-7xl'>
                            Wir <span className='text-indigo-700'>arbeiten</span> dran!
                        </h1>
                        <p className='text-gray-800 text-xl'>Dieser Bereich wird gerade stark bearbeitet. Kommen Sie später wieder.</p>
                        <div>
                            <LinkButton type='primary' href='/'>
                                Zur Startseite
                            </LinkButton>
                        </div>
                    </div>
                    <div className='p-4'>
                        <img src='/images/innovative.svg' alt='Innovative Grafik' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WorkPage;
