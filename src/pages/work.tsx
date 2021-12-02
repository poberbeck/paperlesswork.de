import React from 'react';
import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import LinkButton from '@components/LinkButton';
import { GetStaticProps } from 'next';
import SkillCard from '@components/SkillCard';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import QualityCard from '@components/QualityCard';
import client from '@lib/apollo';
import {
    Freelancingpage,
    FreelancingpageDocument,
    FreelancingpageQuery,
    ComponentPartsSkill,
    ComponentPartsQuality,
} from '@generated/graphql';

const WorkPage: React.FC<Freelancingpage> = (props) => {
    const {
        seo,
        leading,
        subLeading,
        hero,
        ctaButton,
        secondTitle,
        skills,
        thirdTitle,
        qualities,
    } = props;
    return (
        <div className="bg-gray-50">
            <NavigationBar />
            <NextSeo title={seo?.title!} />

            <div className="min-h-screen container mx-auto px-4 md:px-12">
                <section className="flex-1 grid md:grid-cols-2 gap-10">
                    <div className="flex space-y-8 flex-col justify-center">
                        <h1 className="font-bold text-5xl md:text-7xl">
                            <ReactMarkdown
                                components={{
                                    strong: (strong) => (
                                        <span className="text-indigo-700">
                                            {strong.children}
                                        </span>
                                    ),
                                }}
                            >
                                {leading!}
                            </ReactMarkdown>
                        </h1>
                        <p className="text-gray-800 text-xl">{subLeading!}</p>
                        <div>
                            <LinkButton type="primary" href={ctaButton?.link!}>
                                {ctaButton?.label!}
                            </LinkButton>
                        </div>
                    </div>
                    <div className="p-4 flex justify-center items-center">
                        <img
                            src={
                                process.env.NEXT_PUBLIC_ASSETS_URL +
                                hero?.data?.attributes?.url!
                            }
                            alt="Dreamer Grafik"
                        />
                    </div>
                </section>
                <section className="py-32 md:py-24 space-y-8">
                    <h2 className="font-bold text-4xl md:text-6xl text-center">
                        {secondTitle!}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {(skills as ComponentPartsSkill[]).map(
                            (item: ComponentPartsSkill) => (
                                <SkillCard
                                    key={item.id}
                                    skillDescription={item.description!}
                                    skillIcon={item.icon!}
                                    skillName={item.name!}
                                />
                            )
                        )}
                    </div>
                </section>
                <section className="py-32 md:py-24 space-y-8 max-w-5xl mx-auto">
                    <h2 className="font-bold text-4xl md:text-6xl text-center">
                        {thirdTitle!}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {(qualities as ComponentPartsQuality[]).map(
                            (item: ComponentPartsQuality, key: number) => (
                                <QualityCard
                                    primay={key === 0}
                                    key={item.id}
                                    description={item.description!}
                                    image={
                                        process.env.NEXT_PUBLIC_ASSETS_URL +
                                        item.image?.data?.attributes?.url!
                                    }
                                    title={item.title!}
                                />
                            )
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default WorkPage;

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await client.query<FreelancingpageQuery>({
        query: FreelancingpageDocument,
    });

    return {
        props: {
            ...data.freelancingpage?.data?.attributes,
        },
    };
};
