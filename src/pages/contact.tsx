import React from 'react';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import { NextSeo } from 'next-seo';
import SubTitle from '@components/SubTitle';
import Title from '@components/Title';

const contact = () => {
    return (
        <>
            <NextSeo title="Kontakt" />
            <section className="flex min-h-screen flex-col bg-gray-50">
                <NavigationBar />
                <div className="container mx-auto mb-8 flex flex-1 flex-col items-center space-y-4 px-4">
                    <Title className="text-center">Kontakt aufnehmen</Title>
                    <SubTitle className="text-center">
                        Kontaktieren Sie mich unkompliziert und unverbindlich
                        via Email unter{' '}
                        <span className="m-2 rounded-lg bg-indigo-700 p-2 font-bold text-white">
                            pascal.oberbeck(at)paperlesswork.de
                        </span>{' '}
                        oder via Kontaktformular.
                    </SubTitle>
                    <ContactForm />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default contact;
