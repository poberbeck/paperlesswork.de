import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { CockpitSimplePage } from '../types';
import { COCKPIT_API_KEY, COCKPIT_URL } from '../constants';

const LegalPage: React.FC<CockpitSimplePage> = ({ seoTitle, content }) => {
    return (
        <div>
            <NextSeo title={seoTitle} />
            <NavigationBar />
            <div className='container mx-auto prose p-4' dangerouslySetInnerHTML={{ __html: content }}></div>
            <Footer />
        </div>
    );
};

export default LegalPage;

export const getStaticProps: GetStaticProps = async () => {
    const cockpitResult: AxiosResponse<CockpitSimplePage> = await axios.get(COCKPIT_URL + '/api/singletons/get/legalPage?token=' + COCKPIT_API_KEY);
    return {
        props: { ...cockpitResult.data },
    };
};
