import React from 'react';
import NavigationBar from '@components/NavigationBar';
import DigitalInfoBar from '@components/DigitalInfoBar';
import LinkButton from '@components/LinkButton';
import Footer from '@components/Footer';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import SozialIcons from '@components/SozialIcons';
import ReactMarkdown from 'react-markdown';
import client from '@lib/apollo';
import { HomepageQuery, Homepage, HomepageDocument } from '@generated/graphql';
import getOgImageUrl from '@lib/getOgImageUrl';

const HomePage: React.FC<Homepage> = (props) => {
    const { leading, seo, subLeading, primaryCta, secondaryCta, infoBanner } =
        props;

    return (
        <div>
            <NextSeo
                title={seo?.title!}
                openGraph={{
                    images: getOgImageUrl(
                        process.env.NEXT_PUBLIC_ASSETS_URL +
                            seo?.ogImage?.data?.attributes?.url!
                    ),
                }}
            />
            <main className="flex min-h-screen flex-col bg-gray-50">
                <NavigationBar />
                <DigitalInfoBar
                    content={infoBanner?.label!}
                    link={infoBanner?.link!}
                />
                <div className="mb-8 flex flex-1 items-center justify-center px-4">
                    <div className="flex max-w-3xl flex-col items-center space-y-8">
                        <h1 className="text-center text-4xl font-black md:text-8xl">
                            <ReactMarkdown
                                components={{
                                    strong: ({ children }) => (
                                        <span className="text-indigo-700">
                                            {children}
                                        </span>
                                    ),
                                }}
                            >
                                {leading!}
                            </ReactMarkdown>
                        </h1>
                        <p className="text-center text-gray-800">
                            {subLeading!}
                        </p>

                        <LinkButton
                            className="mx-5"
                            href={primaryCta?.link!}
                            type="primary"
                        >
                            {primaryCta?.label!}
                        </LinkButton>

                        <LinkButton className="mx-5" href={secondaryCta?.link!}>
                            {secondaryCta?.label!}
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
    const { data } = await client.query<HomepageQuery>({
        query: HomepageDocument,
    });

    return {
        props: {
            ...data.homepage?.data?.attributes,
        },
    };
};
