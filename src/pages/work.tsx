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
import Image from 'next/image';
import getOgImageUrl from '@lib/getOgImageUrl';

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
            <NextSeo
                title={seo?.title!}
                openGraph={{
                    images: getOgImageUrl(
                        process.env.NEXT_PUBLIC_ASSETS_URL +
                            seo?.ogImage?.data?.attributes?.url!
                    ),
                }}
            />

            <div className="container mx-auto min-h-screen px-4 md:px-12">
                <section className="grid flex-1 gap-10 py-0 md:grid-cols-2 md:py-40">
                    <div className="flex flex-col justify-center space-y-8">
                        <h1 className="text-5xl font-bold md:text-7xl">
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
                        <p className="text-xl text-gray-800">{subLeading!}</p>
                        <div>
                            <LinkButton type="primary" href={ctaButton?.link!}>
                                {ctaButton?.label!}
                            </LinkButton>
                        </div>
                    </div>
                    <div className="relative flex h-80 items-center justify-center p-4">
                        <Image
                            src={
                                process.env.NEXT_PUBLIC_ASSETS_URL +
                                hero?.data?.attributes?.url!
                            }
                            layout="fill"
                            alt="Dreamer Grafik"
                        />
                    </div>
                </section>
                <section className="space-y-8 py-32 md:py-24">
                    <h2 className="text-center text-4xl font-bold md:text-6xl">
                        {secondTitle!}
                    </h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
                <section className="mx-auto max-w-5xl space-y-8 py-32 md:py-24">
                    <h2 className="text-center text-4xl font-bold md:text-6xl">
                        {thirdTitle!}
                    </h2>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {(qualities as ComponentPartsQuality[]).map(
                            (item: ComponentPartsQuality, key: number) => (
                                <QualityCard
                                    primay={key === 1}
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
