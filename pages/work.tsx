import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import LinkButton from '../components/LinkButton';
import { GetStaticProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { COCKPIT_API_KEY, COCKPIT_URL } from '../constants';
import { CockpitSkillsCollection } from '../types';
import SkillBar from '../components/SkillBar';

interface Props {
    cockpitSkillsEntriesResult: CockpitSkillsCollection;
}

const WorkPage: React.FC<Props> = (props) => {
    const { cockpitSkillsEntriesResult } = props;
    return (
        <div className='bg-gray-50'>
            <div className='min-h-screen container mx-auto px-4 md:px-12'>
                <NavigationBar />

                <div className='flex-1 grid md:grid-cols-2 gap-10'>
                    <div className='flex space-y-8 flex-col justify-center'>
                        <h1 className='font-bold text-4xl md:text-7xl'>
                            Nicht <span className='text-indigo-700'>Träumen</span>
                            <br />
                            Sondern <span className='text-indigo-700'>Machen</span>
                        </h1>
                        <p className='text-gray-800 text-xl'>
                            Als digital Freelancer bin ich Ihr Ansprechpartner für die Umsetzung Ihrer digitalen Ideen. Sie wollten schon immer eine eigene Webseite, Visitenkarte oder App? Dann zögern
                            Sie nicht.
                        </p>
                        <div>
                            <LinkButton type='primary' href='/'>
                                Jetzt Angebot anfordern
                            </LinkButton>
                        </div>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <img src='/images/dreamer.svg' alt='Dreamer Grafik' />
                    </div>
                </div>
                <section className='py-8 space-y-8'>
                    <h1 className='font-bold text-4xl md:text-6xl'>Meine Skills</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-10'>
                        {cockpitSkillsEntriesResult.entries.map((item) => (
                            <SkillBar key={item._id} skillDescription={item.skillDescription} skillIcon={item.skillIcon} skillName={item.skillName} skillValue={item.skillValue} />
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
    const cockpitSkillsEntriesResult: AxiosResponse<CockpitSkillsCollection> = await axios.get(COCKPIT_URL + '/api/collections/get/skills?token=' + COCKPIT_API_KEY);

    return {
        props: {
            cockpitSkillsEntriesResult: cockpitSkillsEntriesResult.data,
        },
    };
};
