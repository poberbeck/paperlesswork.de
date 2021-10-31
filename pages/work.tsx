import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import LinkButton from '../components/LinkButton';
import { GetStaticProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { COCKPIT_API_KEY, COCKPIT_URL } from '../constants';
import { CockpitSkillsCollection } from '../types';
import SkillCard from '../components/SkillCard';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

interface Props {
    cockpitSkillsEntriesResult: CockpitSkillsCollection;
}

const WorkPage: React.FC<Props> = (props) => {
    const { cockpitSkillsEntriesResult } = props;
    return (
        <div className='bg-gray-50'>
            <NavigationBar />
            <NextSeo title={'Freelancing'} />

            <div className='min-h-screen container mx-auto px-4 md:px-12'>
                <section className='flex-1 grid md:grid-cols-2 gap-10'>
                    <div className='flex space-y-8 flex-col justify-center'>
                        <h1 className='font-bold text-5xl md:text-7xl'>
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
                </section>
                <section className='py-12 space-y-8'>
                    <h2 className='font-bold text-4xl md:text-6xl text-center'>Meine Skills</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {cockpitSkillsEntriesResult.entries.map((item) => (
                            <SkillCard key={item._id} skillDescription={item.skillDescription} skillIcon={item.skillIcon} skillName={item.skillName} />
                        ))}
                    </div>
                </section>
                <section className='py-12 space-y-8 max-w-5xl mx-auto'>
                    <h2 className='font-bold text-4xl md:text-6xl text-center'>Meine Qulitäten</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='bg-gradient-to-br from-indigo-700 to-pink-700 shadow-md rounded-xl p-5 space-y-5'>
                            <h3 className='text-white font-bold text-xl'>Schnell als Standart</h3>
                            <p className='text-white'>
                                Gerade für Webseiten ist es wichtig auf Performance zu achten. Eine schnelle Webpräsenz spiegelt sich in zufriedenen Kunden, schnelleren Transaktionen und einer bessern
                                Suchmaschienenplazierungen wieder. Bei der Entwiklung Ihres Projektes liegt ein großer Fokus auf der Performance.
                            </p>
                            <div className='flex justify-center items-end'>
                                <img className='h-64' alt='Barrierefreiheit Icon' src='/images/website_score.png' />
                            </div>
                        </div>
                        <div className='bg-white shadow-md rounded-xl p-5 space-y-5'>
                            <h3 className='text-indigo-700 font-bold text-xl'>Zugänglich für alle</h3>
                            <p className=''>
                                Jeder sollte in der lage sein, Ihre Idee zu verstehen. Dazu zählen auch Menschen mit einschränkungen. Viele digitalen Produkte achte nicht darauf, ob sie für jeden
                                zugänglich sind oder nicht. Ich helfe Ihnen dabei Ihr Pojekt zu gestallten, dass es für jeden zugänglich ist.
                            </p>
                            <div className='flex justify-center items-center'>
                                <img className='h-64' alt='Barrierefreiheit Icon' src='/images/accessibility_icon.png' />
                            </div>
                        </div>
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
