import React from 'react';
import NavigationBar from '@components/NavigationBar';
import DigitalInfoBar from '@components/DigitalInfoBar';
import LinkButton from '@components/LinkButton';
import Footer from '@components/Footer';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { CockpitHomePage } from '@type/cockpit';
import SozialIcons from '@components/SozialIcons';
import ReactMarkdown from 'react-markdown';
import client from '@lib/apollo';
import { HomepageQuery } from '@generated/graphql';
import { QUERY_HOMEPAGE } from '@lib/graphql/queries';

const HomePage: React.FC<CockpitHomePage> = (props) => {
    const {
        seoTitle,
        leading,
        leadingSub,
        ctaPrimaryText,
        ctaPrimaryLink,
        ctaSeconderyText,
        ctaSeconderyLink,
        infoBannerText,
        infoBannerLink,
    } = props;
    return (
        <div>
            <NextSeo title={seoTitle} />
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <NavigationBar />
                <DigitalInfoBar
                    content={infoBannerText}
                    link={infoBannerLink}
                />
                <div className="flex px-4 flex-1 justify-center items-center mb-8">
                    <div className="max-w-3xl flex flex-col items-center space-y-8">
                        <h1 className="font-black text-4xl md:text-8xl text-center">
                            <ReactMarkdown
                                components={{
                                    strong: ({ children }) => (
                                        <span className="text-indigo-700">
                                            {children}
                                        </span>
                                    ),
                                }}
                            >
                                {leading}
                            </ReactMarkdown>
                        </h1>
                        <p className="text-center text-gray-800">
                            {leadingSub}
                        </p>

                        <LinkButton
                            className="mx-5"
                            href={ctaPrimaryLink}
                            type="primary"
                        >
                            {ctaPrimaryText}
                        </LinkButton>

                        <LinkButton className="mx-5" href={ctaSeconderyLink}>
                            {ctaSeconderyText}
                        </LinkButton>

                        <SozialIcons />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
    const cockpitResult: AxiosResponse<CockpitHomePage> = await axios.get(
        process.env.COCKPIT_URL +
            '/api/singletons/get/homePage?token=' +
            process.env.COCKPIT_API_KEY
    );

    const { data } = await client.query<HomepageQuery>({
        query: QUERY_HOMEPAGE,
    });

    console.log(data.homepage?.data?.attributes?.leading);

    return {
        props: {
            ...cockpitResult.data,
        },
    };
};
