/* eslint-disable @next/next/no-img-element */
import { NextSeo } from 'next-seo';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const DigitalPage: React.FC = () => {
    return (
        <div className='bg-gray-50'>
            <NextSeo title='Digital Work' />
            <div className='min-h-screen flex flex-col digital-bg'>
                <NavigationBar />
                <div className='flex-1 max-w-5xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center space-y-4'>
                    <h1 className='font-bold text-4xl md:text-6xl xl:text-7xl'>
                        <span className='text-indigo-700'>Beratung</span> für Schüler*innen mit <span className='text-indigo-700'>Sehbehinderung</span> im Lernalltag
                    </h1>
                    <p className='text-gray-800 text-xl'>
                        Ich berate Schüler*innen mit Sehbehinderung, Eltern oder Förderlehrer aus erster Hand um das lernen trotz herausforderung einfacher zu machen.
                    </p>
                </div>
            </div>
            <div className='container mx-auto xl:py-12'>
                <div className='grid xl:grid-cols-2 bg-gray-800 text-white xl:rounded-2xl xl:shadow-md overflow-hidden'>
                    <div className='px-4 py-8 xl:p-12 flex flex-col justify-center space-y-4'>
                        <h2 className='font-bold text-4xl'>Über mich</h2>
                        <p className='leading-relaxed'>
                            Mein Name ist Pascal Oberbeck. Mit drei Jahren erkrankte ich an Krebs und habe seit dem auf dem rechten Auge ein Visus von 0,0 und einen Visus von 0,04 auf dem linken Auge.
                            Somit habe ich eine hochgradige Sehbehinderung. Dennoch habe ich immer nur Regelschulen besucht.
                            <br />
                            In der Grundschule arbeitete ich noch viel mit Großkopien und einer Tafelkamera. Ab der Mittelstufe arbeitete ich mit dem iPad der 1. Generation. Jenes ersetzte nach und
                            nach die Großkopien und ich begann mehr und mehr digital zu arbeiten. Ab der Oberstufe arbeitete ich nur noch mit einem iPad Pro und einem MacBook, inklusive mobiler
                            Tafelkamera. So war ich für den dynamischen Unterricht in der Oberstufe gut gerüstet.
                            <br />
                            Neben der Tatsachen, dass ich durch iPad und MacBook maximal mobil war, brauchten sich Lehrer keine Gedanken mehr über Digitalisierung oder Aufbereitung des
                            Unterrichtsmaterials zu machen. Jeden dieser Schritte konnte ich selbständig und in angemessener Zeit selbständig mit Hilfe meiner konventionellen digitalen Geräte
                            durchführen. Ich habe also an der eigenen Haut erfahren, was es bedeutet, sich in der Schule trotz Sehbehinderung selbständig zu machen. Ich war nicht mehr auf die
                            Unterstützung von anderen angewiesen.
                            <br />
                            So habe habe ich mir viele Gedanken über den Arbeitsablauf gemacht und möchte diesen sehr gerne an jeden weiter geben. Egal ob als inspiration oder fertige Lösung.
                        </p>
                        <small className='text-sm text-gray-300'>Zertifiziert als:</small>
                        <img className='w-40 rounded-lg shadow-md' src='/images/AppleTeacher_white.png' alt='Apple Teacher Signatur' />
                    </div>
                    <div>
                        <img className='object-cover h-full object-center' src='/images/me.png' alt='Pascal Oberbeck' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center space-y-4 py-8 px-4'>
                <h2 className='font-bold text-4xl'>Kontakt aufnehmen</h2>
                <p className='text-gray-800 text-center leading-loose'>
                    Kontaktieren Sie mich unkompliziert und unverbindlich via Email unter{' '}
                    <span className='p-2 bg-indigo-700 rounded-lg text-white font-bold m-2'>pascal.oberbeck(at)paperlesswork.de</span> oder via Kontaktformular.
                </p>
                <ContactForm />
            </div>
            <Footer />
            <style jsx>{`
                .digital-bg {
                    background-image: url('/images/backgrounds/scene-pink.svg');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }
            `}</style>
        </div>
    );
};

export default DigitalPage;
