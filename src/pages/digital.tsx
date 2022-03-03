import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
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
import Image from 'next/image';
import getOgImageUrl from '@lib/getOgImageUrl';

const DigitalPage: React.FC<Digitalworkpage> = (props) => {
    const { seo, laeding, subLeading, aboutMe, featuredApps } = props;

    return (
        <div className="bg-gray-50">
            <NextSeo
                title={seo?.title!}
                openGraph={{
                    images: getOgImageUrl(
                        process.env.NEXT_PUBLIC_ASSETS_URL +
                            seo?.ogImage?.data?.attributes?.url!
                    ),
                }}
            />
            <section className="digital-bg flex min-h-screen flex-col">
                <NavigationBar />
                <div className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center space-y-4 px-4 md:px-12">
                    <h1 className="text-4xl font-bold md:text-6xl xl:text-7xl">
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
                    <p className="text-xl text-gray-800">{subLeading!}</p>
                </div>
            </section>

            <section className="container mx-auto xl:py-12">
                <div className="grid overflow-hidden bg-gray-800 text-white xl:grid-cols-2 xl:rounded-2xl xl:shadow-md">
                    <div className="flex flex-col justify-center space-y-4 px-4 py-8 xl:p-12">
                        <h2 className="text-4xl font-bold">
                            {aboutMe?.title!}
                        </h2>
                        <p className="leading-relaxed">{aboutMe?.biography!}</p>
                        <small className="text-sm text-gray-300">
                            Zertifiziert als:
                        </small>
                        <div className="w-40">
                            <Image
                                height={
                                    aboutMe?.certificat?.data?.attributes
                                        ?.height!
                                }
                                width={
                                    aboutMe?.certificat?.data?.attributes
                                        ?.width!
                                }
                                className="rounded-lg shadow-md"
                                objectFit="contain"
                                src={
                                    process.env.NEXT_PUBLIC_ASSETS_URL +
                                    aboutMe?.certificat?.data?.attributes?.url!
                                }
                                alt="Apple Teacher Signatur"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            layout="fill"
                            className="h-full max-h-[880px] w-full object-cover object-center"
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
            <section className="flex flex-col items-center justify-center space-y-4 py-8 px-4">
                <Title className="text-center">Kontakt aufnehmen</Title>
                <SubTitle className="text-center">
                    Kontaktieren Sie mich unkompliziert und unverbindlich via
                    Email unter{' '}
                    <span className="m-2 rounded-lg bg-indigo-700 p-2 font-bold text-white">
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
