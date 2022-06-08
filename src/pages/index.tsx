import React from 'react';
import NavigationBar from '@components/NavigationBar';
import DigitalInfoBar from '@components/DigitalInfoBar';
import LinkButton from '@components/LinkButton';
import Footer from '@components/Footer';
import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next';
import SozialIcons from '@components/SozialIcons';
import ReactMarkdown from 'react-markdown';
import client from '@lib/apollo';
import { HomepageQuery, Homepage, HomepageDocument } from '@generated/graphql';
import getOgImageUrl from '@lib/getOgImageUrl';
import { motion } from 'framer-motion';

const container = {
    show: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const HomePage: React.FC<Homepage> = (props) => {
    const { leading, seo, subLeading, primaryCta, secondaryCta, infoBanner } =
        props;

    return (
        <>
            <NextSeo
                title={seo?.title!}
                openGraph={{
                    images: getOgImageUrl(
                        process.env.NEXT_PUBLIC_ASSETS_URL +
                            seo?.ogImage?.data?.attributes?.url!
                    ),
                }}
            />
            <NavigationBar />
            <motion.main
                variants={container}
                initial="hidden"
                animate="show"
                className="flex min-h-screen flex-col bg-gray-50"
            >
                <motion.div variants={item}>
                    <DigitalInfoBar
                        content={infoBanner?.label!}
                        link={infoBanner?.link!}
                    />
                </motion.div>
                <div className="mb-8 flex flex-1 items-center justify-center px-4">
                    <div className="flex max-w-3xl flex-col items-center space-y-8">
                        <motion.h1
                            variants={item}
                            className="text-center text-4xl font-black md:text-8xl"
                        >
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
                        </motion.h1>
                        <motion.p
                            variants={item}
                            className="text-center text-gray-800"
                        >
                            {subLeading!}
                        </motion.p>
                        <motion.div variants={item}>
                            <LinkButton
                                className="mx-5"
                                href={primaryCta?.link!}
                                type="primary"
                            >
                                {primaryCta?.label!}
                            </LinkButton>
                        </motion.div>
                        <motion.div variants={item}>
                            <LinkButton
                                className="mx-5"
                                href={secondaryCta?.link!}
                            >
                                {secondaryCta?.label!}
                            </LinkButton>
                        </motion.div>
                        <motion.div variants={item}>
                            <SozialIcons />
                        </motion.div>
                    </div>
                </div>
            </motion.main>
            <Footer />
        </>
    );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await client.query<HomepageQuery>({
        query: HomepageDocument,
    });

    return {
        props: {
            ...data.homepage?.data?.attributes,
        },
    };
};
