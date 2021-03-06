import React from 'react';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import client from '@lib/apollo';
import {
    LegalpageDocument,
    LegalpageQuery,
    Legalpage,
} from '@generated/graphql';
import ReactMarkdown from 'react-markdown';
import getOgImageUrl from '@lib/getOgImageUrl';

const LegalPage: React.FC<Legalpage> = (props) => {
    const { seo, content } = props;

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
            <NavigationBar />
            <div className="container prose mx-auto p-4">
                <ReactMarkdown>{content!}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    );
};

export default LegalPage;

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await client.query<LegalpageQuery>({
        query: LegalpageDocument,
    });

    return {
        props: { ...data.legalpage?.data?.attributes },
    };
};
