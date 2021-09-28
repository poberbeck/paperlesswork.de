import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import { NextSeo } from 'next-seo';
import SubTitle from '../components/SubTitle';
import Title from '../components/Title';

const contact = () => {
    return (
        <div>
            <NextSeo title='Kontakt' />
            <div className='min-h-screen flex flex-col bg-gray-50'>
                <NavigationBar />
                <div className='container mx-auto px-4 flex-1 flex flex-col items-center space-y-4 mb-8'>
                    <Title>Kontakt aufnehmen</Title>
                    <SubTitle>
                        Kontaktieren Sie mich unkompliziert und unverbindlich via Email unter{' '}
                        <span className='p-2 bg-indigo-700 rounded-lg text-white font-bold m-2'>pascal.oberbeck(at)paperlesswork.de</span> oder via Kontaktformular.
                    </SubTitle>
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default contact;
