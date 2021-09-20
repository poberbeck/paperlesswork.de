/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { NextSeo } from 'next-seo';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import SectionFooter from '../components/SectionFooter';
import SectionHeading from '../components/SectionHeading';

const WorkPage: React.FC = () => {
    return (
        <div className='bg-gray-50'>
            <NextSeo title='Meine Arbeit' />
            <NavigationBar />
            <h1 className='text-center font-bold text-6xl'>Meine Arbeit</h1>
            <section className='py-10 md:h-screen flex flex-col justify-center items-center'>
                <SectionHeading title='Coder Connect' subTitle='Desktop' />
                <img loading='lazy' className='md:h-4/6 object-contain' src='https://res.cloudinary.com/dxguylhpx/image/upload/v1617486729/web/1_vgunfm.png' alt='Coder Connect' />
                <SectionFooter title='Coder Connect' content='Coder Connect ist ein Desktop Client für Code Server. Programmiert mit Electron, HTML und JavaScript.' date='Since 2018' />
            </section>
            <section className='py-10 md:h-screen flex flex-col justify-center items-center'>
                <SectionHeading title='Pull Up' subTitle='Mobile' />
                <img loading='lazy' className='md:h-4/6 object-contain' src='https://res.cloudinary.com/dxguylhpx/image/upload/v1617486734/web/2_si7l99.png' alt='Pull Up' />
                <SectionFooter title='Pull Up' content='Pull Up ist ein Blogging Client für iOS und Android. Programmiert mit React Native und Firebase.' date='Since 2019' />
            </section>
            <section className='py-10 md:h-screen flex flex-col justify-center items-center'>
                <SectionHeading title='Paperless Work' subTitle='Website' />
                <img loading='lazy' className='md:h-4/6 object-contain' src='https://res.cloudinary.com/dxguylhpx/image/upload/v1617486732/web/6_t9tcu7.png' alt='Pull Up' />
                <SectionFooter
                    title='Paperless Work'
                    content='Diese Webseite ist das erste größere Projekt erstellt mit Next JS. Es handelt sich dabei um meinen persönliche Showcase Webseite mit serverless Kontaktformular und zeitgemäßer optimierung.'
                    date='Since 2020'
                />
            </section>
            <Footer />
        </div>
    );
};

export default WorkPage;
