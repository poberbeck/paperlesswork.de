import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import {
    CockpitAboutMeComponent,
    CockpitDigitalWorkPage,
    CockpitFeaturedAppsCollection,
    CockpitFeaturedAppsComponent,
} from '@type/cockpit';
import FeaturedApps from '@components/FeaturedApps';
import SubTitle from '@components/SubTitle';
import Title from '@components/Title';
import {
    ComponentPartsApp,
    Digitalworkpage,
    DigitalworkpageDocument,
    DigitalworkpageQuery,
} from '@generated/graphql';
import client from '@lib/apollo';

const DigitalPage: React.FC<Digitalworkpage> = (props) => {
    const { seo, laeding, subLeading, aboutMe, featuredApps } = props;

    return (
        <div className="bg-gray-50">
            <NextSeo
                title={seo?.title!}
                openGraph={{
                    images: [
                        {
                            url: 'https://paperlesswork.de/DigitalPage_Card.png',
                        },
                    ],
                }}
            />
            <section className="min-h-screen flex flex-col digital-bg">
                <NavigationBar />
                <div className="flex-1 max-w-5xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center space-y-4">
                    <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl">
                        <ReactMarkdown
                            components={{
                                strong: (strong) => (
                                    <span className="text-indigo-700">
                                        {strong.children}
                                    </span>
                                ),
                            }}
                        >
                            {laeding!}
                        </ReactMarkdown>
                    </h1>
                    <p className="text-gray-800 text-xl">{subLeading!}</p>
                </div>
            </section>

            <section className="container mx-auto xl:py-12">
                <div className="grid xl:grid-cols-2 bg-gray-800 text-white xl:rounded-2xl xl:shadow-md overflow-hidden">
                    <div className="px-4 py-8 xl:p-12 flex flex-col justify-center space-y-4">
                        <h2 className="font-bold text-4xl">
                            {aboutMe?.title!}
                        </h2>
                        <p className="leading-relaxed">{aboutMe?.biography!}</p>
                        <small className="text-sm text-gray-300">
                            Zertifiziert als:
                        </small>
                        <img
                            className="w-40 rounded-lg shadow-md"
                            src={
                                process.env.NEXT_PUBLIC_ASSETS_URL +
                                aboutMe?.certificat?.data?.attributes?.url!
                            }
                            alt="Apple Teacher Signatur"
                        />
                    </div>
                    <div>
                        <img
                            className="object-cover object-center h-full max-h-[880px] w-full"
                            src={
                                process.env.NEXT_PUBLIC_ASSETS_URL +
                                aboutMe?.me?.data?.attributes?.url!
                            }
                            alt="Pascal Oberbeck"
                        />
                    </div>
                </div>
            </section>
            <FeaturedApps
                apps={featuredApps?.apps! as ComponentPartsApp[]}
                title={featuredApps?.title!}
                subTitle={featuredApps?.subTitle!}
            />
            <section className="flex flex-col justify-center items-center space-y-4 py-8 px-4">
                <Title className="text-center">Kontakt aufnehmen</Title>
                <SubTitle className="text-center">
                    Kontaktieren Sie mich unkompliziert und unverbindlich via
                    Email unter{' '}
                    <span className="p-2 bg-indigo-700 rounded-lg text-white font-bold m-2">
                        pascal.oberbeck(at)paperlesswork.de
                    </span>{' '}
                    oder via Kontaktformular.
                </SubTitle>
                <ContactForm />
            </section>
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
    const { data } = await client.query<DigitalworkpageQuery>({
        query: DigitalworkpageDocument,
    });

    return {
        props: {
            ...data.digitalworkpage?.data?.attributes,
        },
    };
};
