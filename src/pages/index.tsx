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

const HomePage: React.FC<Homepage> = (props) => {
    const { leading, seo, subLeading, primaryCta, secondaryCta, infoBanner } =
        props;

    console.log(secondaryCta);

    return (
        <div>
            <NextSeo title={seo?.title!} />
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <NavigationBar />
                <DigitalInfoBar
                    content={infoBanner?.label!}
                    link={infoBanner?.link!}
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
