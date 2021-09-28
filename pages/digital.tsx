/* eslint-disable @next/next/no-img-element */
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import { COCKPIT_API_KEY, COCKPIT_ASSETS_URL, COCKPIT_URL } from '../constants';
import { CockpitAboutMeComponent, CockpitDigitalWorkPage, CockpitFeaturedAppsCollection, CockpitFeaturedAppsComponent } from '../types';
import FeaturedApps from '../components/FeaturedApps';
import SubTitle from '../components/SubTitle';
import Title from '../components/Title';

interface Props {
    page: CockpitDigitalWorkPage;
    aboutMe: CockpitAboutMeComponent;
    featuredApps: CockpitFeaturedAppsComponent;
    featuredAppsEntries: CockpitFeaturedAppsCollection;
}

const DigitalPage: React.FC<Props> = (props) => {
    const { page, featuredApps, featuredAppsEntries, aboutMe } = props;
    return (
        <div className='bg-gray-50'>
            <NextSeo title={page.seoTitle} openGraph={{ images: [{ url: 'https://paperlesswork.de/DigitalPage_Card.png' }] }} />
            <div className='min-h-screen flex flex-col digital-bg'>
                <NavigationBar />
                <div className='flex-1 max-w-5xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center space-y-4'>
                    <h1 className='font-bold text-4xl md:text-6xl xl:text-7xl'>
                        <ReactMarkdown components={{ strong: (strong) => <span className='text-indigo-700'>{strong.children}</span> }}>{page.leading}</ReactMarkdown>
                    </h1>
                    <p className='text-gray-800 text-xl'>{page.leadingSub}</p>
                </div>
            </div>

            <div className='container mx-auto xl:py-12'>
                <div className='grid xl:grid-cols-2 bg-gray-800 text-white xl:rounded-2xl xl:shadow-md overflow-hidden'>
                    <div className='px-4 py-8 xl:p-12 flex flex-col justify-center space-y-4'>
                        <h2 className='font-bold text-4xl'>{aboutMe.title}</h2>
                        <p className='leading-relaxed'>{aboutMe.description}</p>
                        <small className='text-sm text-gray-300'>{aboutMe.certifiedTitle}</small>
                        <img className='w-40 rounded-lg shadow-md' src={COCKPIT_ASSETS_URL + aboutMe.certifiedImage.path} alt='Apple Teacher Signatur' />
                    </div>
                    <div>
                        <img className='object-cover object-center h-full max-h-[880px] w-full' src={COCKPIT_ASSETS_URL + aboutMe.image.path} alt='Pascal Oberbeck' />
                    </div>
                </div>
            </div>
            <FeaturedApps apps={featuredAppsEntries.entries} title={featuredApps.title} subTitle={featuredApps.subTitle} />
            <div className='flex flex-col justify-center items-center space-y-4 py-8 px-4'>
                <Title>Kontakt aufnehmen</Title>
                <SubTitle>
                    Kontaktieren Sie mich unkompliziert und unverbindlich via Email unter{' '}
                    <span className='p-2 bg-indigo-700 rounded-lg text-white font-bold m-2'>pascal.oberbeck(at)paperlesswork.de</span> oder via Kontaktformular.
                </SubTitle>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
    const cockpitPageResult: AxiosResponse<CockpitDigitalWorkPage> = await axios.get(COCKPIT_URL + '/api/singletons/get/digitalWorkPage?token=' + COCKPIT_API_KEY);
    const cockpitAboutMeResult: AxiosResponse<CockpitAboutMeComponent> = await axios.get(COCKPIT_URL + '/api/singletons/get/aboutMe?token=' + COCKPIT_API_KEY);
    const cockpitFeaturedAppsResult: AxiosResponse<CockpitFeaturedAppsCollection> = await axios.get(COCKPIT_URL + '/api/singletons/get/featuredApps?token=' + COCKPIT_API_KEY);
    const cockpitFeaturedAppsEntriesResult: AxiosResponse<CockpitFeaturedAppsCollection> = await axios.get(COCKPIT_URL + '/api/collections/get/featuredApps?token=' + COCKPIT_API_KEY);

    return {
        props: {
            page: cockpitPageResult.data,
            aboutMe: cockpitAboutMeResult.data,
            featuredApps: cockpitFeaturedAppsResult.data,
            featuredAppsEntries: cockpitFeaturedAppsEntriesResult.data,
        },
    };
};
