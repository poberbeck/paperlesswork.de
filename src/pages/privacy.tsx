import React from 'react';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import {
    Privacypage,
    PrivacypageDocument,
    PrivacypageQuery,
} from '@generated/graphql';
import client from '@lib/apollo';
import ReactMarkdown from 'react-markdown';

const PrivacyPage: React.FC<Privacypage> = (props) => {
    const { seo, content } = props;
    return (
        <div>
            <NextSeo title={seo?.title!} />
            <NavigationBar />
            <div className="container mx-auto prose p-4">
                <ReactMarkdown>{content!}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPage;

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await client.query<PrivacypageQuery>({
        query: PrivacypageDocument,
    });

    return {
        props: { ...data.privacypage?.data?.attributes },
    };
};
