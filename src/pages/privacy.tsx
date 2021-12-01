import React from 'react';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import { NextSeo } from 'next-seo';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import { COCKPIT_URL, COCKPIT_API_KEY } from '../constants';
import { CockpitSimplePage } from '@types';

const PrivacyPage: React.FC<CockpitSimplePage> = ({ seoTitle, content }) => {
    return (
        <div>
            <NextSeo title={seoTitle} />
            <NavigationBar />
            <div
                className="container mx-auto prose p-4"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <Footer />
        </div>
    );
};

export default PrivacyPage;

export const getStaticProps: GetStaticProps = async () => {
    const cockpitResult: AxiosResponse<CockpitSimplePage> = await axios.get(
        COCKPIT_URL + '/api/singletons/get/privacyPage?token=' + COCKPIT_API_KEY
    );
    return {
        props: { ...cockpitResult.data },
    };
};
