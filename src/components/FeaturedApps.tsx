import React from 'react';
import Link from 'next/link';
import SubTitle from './SubTitle';
import Title from './Title';
import { ComponentPartsApp } from '@generated/graphql';
import Image from 'next/image';

interface Props {
    apps: ComponentPartsApp[];
    title: string;
    subTitle: string;
}

const FeaturedApps: React.FC<Props> = (props) => {
    const { apps, title, subTitle } = props;

    return (
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4 py-12 px-4">
            <Title className="text-center">{title}</Title>
            <SubTitle className="text-center">{subTitle}</SubTitle>
            <div className="grid grid-cols-1 gap-y-8 divide-x md:grid-cols-3 md:gap-0">
                {apps.map((item: ComponentPartsApp) => (
                    <div
                        className="flex flex-col items-center justify-between space-y-4 p-4 text-center"
                        key={item.id}
                    >
                        <div className="relative">
                            <span className="absolute -inset-0 rounded-2xl blur-xl filter">
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_ASSETS_URL +
                                        item.appIcon?.data?.attributes?.url!
                                    }
                                    height={112}
                                    width={112}
                                    alt={item.name + ' Blur Background'}
                                />
                            </span>

                            <Image
                                className="relative rounded-2xl shadow-md"
                                src={
                                    process.env.NEXT_PUBLIC_ASSETS_URL +
                                    item.appIcon?.data?.attributes?.url!
                                }
                                height={112}
                                width={112}
                                alt={item.name + ' Icon'}
                            />
                        </div>
                        <h3 className="text-3xl font-bold">{item.name}</h3>
                        <p className="text-xl font-bold text-gray-800">
                            {item.author}
                        </p>
                        <p className="text-gray-800">{item.description}</p>
                        <Link href={item.appstoreUrl!}>
                            <a className="font-bold text-indigo-700">
                                <p>Im App Store anzeigen</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <small className="text-center text-xs text-gray-300">
                App Icons Quelle:{' '}
                <a href="https://apps.apple.com">https://apps.apple.com</a>
            </small>
        </div>
    );
};

export default FeaturedApps;
