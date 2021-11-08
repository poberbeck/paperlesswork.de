import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import LinkButton from '../components/LinkButton';
import { GetStaticProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { COCKPIT_API_KEY, COCKPIT_ASSETS_URL, COCKPIT_URL } from '../constants';
import { CockpitFreelancingPage, CockpitQualitiesCollection, CockpitSkillsCollection } from '../types';
import SkillCard from '../components/SkillCard';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import QualityCard from '../components/QualityCard';

interface Props {
    cockpitSkillsEntriesResult: CockpitSkillsCollection;
    cockpitQualitiesEntriesResult: CockpitQualitiesCollection;
    cockpitFreelancingPageResult: CockpitFreelancingPage;
}

const WorkPage: React.FC<Props> = (props) => {
    const { cockpitSkillsEntriesResult, cockpitFreelancingPageResult, cockpitQualitiesEntriesResult } = props;
    return (
        <div className='bg-gray-50'>
            <NavigationBar />
            <NextSeo title={cockpitFreelancingPageResult.seoTitle} />

            <div className='min-h-screen container mx-auto px-4 md:px-12'>
                <section className='flex-1 grid md:grid-cols-2 gap-10'>
                    <div className='flex space-y-8 flex-col justify-center'>
                        <h1 className='font-bold text-5xl md:text-7xl'>
                            <ReactMarkdown components={{ strong: (strong) => <span className='text-indigo-700'>{strong.children}</span> }}>{cockpitFreelancingPageResult.leading}</ReactMarkdown>
                        </h1>
                        <p className='text-gray-800 text-xl'>{cockpitFreelancingPageResult.leadingSub}</p>
                        <div>
                            <LinkButton type='primary' href={cockpitFreelancingPageResult.ctaLink}>
                                {cockpitFreelancingPageResult.ctaLabel}
                            </LinkButton>
                        </div>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <img src={COCKPIT_ASSETS_URL + cockpitFreelancingPageResult.heroImage.path} alt='Dreamer Grafik' />
                    </div>
                </section>
                <section className='py-32 md:py-24 space-y-8'>
                    <h2 className='font-bold text-4xl md:text-6xl text-center'>{cockpitFreelancingPageResult.sectionOneHeading}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {cockpitSkillsEntriesResult.entries.map((item) => (
                            <SkillCard key={item._id} skillDescription={item.skillDescription} skillIcon={item.skillIcon} skillName={item.skillName} />
                        ))}
                    </div>
                </section>
                <section className='py-32 md:py-24 space-y-8 max-w-5xl mx-auto'>
                    <h2 className='font-bold text-4xl md:text-6xl text-center'>{cockpitFreelancingPageResult.sectionTwoHeading}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {cockpitQualitiesEntriesResult.entries.map((item, key) => (
                            <QualityCard primay={key === 0} key={item._id} description={item.description} image={COCKPIT_ASSETS_URL + item.image.path} title={item.title} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default WorkPage;

export const getStaticProps: GetStaticProps = async () => {
    const cockpitFreelancingPageResult: AxiosResponse<CockpitFreelancingPage> = await axios.get(COCKPIT_URL + '/api/singletons/get/freelancingPage?token=' + COCKPIT_API_KEY);
    const cockpitSkillsEntriesResult: AxiosResponse<CockpitSkillsCollection> = await axios.get(COCKPIT_URL + '/api/collections/get/skills?token=' + COCKPIT_API_KEY);
    const cockpitQualitiesEntriesResult: AxiosResponse<CockpitQualitiesCollection> = await axios.get(COCKPIT_URL + '/api/collections/get/qualities?token=' + COCKPIT_API_KEY);

    return {
        props: {
            cockpitFreelancingPageResult: cockpitFreelancingPageResult.data,
            cockpitSkillsEntriesResult: cockpitSkillsEntriesResult.data,
            cockpitQualitiesEntriesResult: cockpitQualitiesEntriesResult.data,
        },
    };
};
