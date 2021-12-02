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
        <div className="container mx-auto py-12 px-4 flex flex-col justify-center items-center space-y-4">
            <Title className="text-center">{title}</Title>
            <SubTitle className="text-center">{subTitle}</SubTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-0 divide-x">
                {apps.map((item: ComponentPartsApp) => (
                    <div
                        className="flex flex-col justify-between items-center space-y-4 p-4 text-center"
                        key={item.id}
                    >
                        <div className="relative">
                            <span className="rounded-2xl absolute -inset-0 filter blur-xl">
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
                                className="rounded-2xl shadow-md relative"
                                src={
                                    process.env.NEXT_PUBLIC_ASSETS_URL +
                                    item.appIcon?.data?.attributes?.url!
                                }
                                height={112}
                                width={112}
                                alt={item.name + ' Icon'}
                            />
                        </div>
                        <h3 className="font-bold text-3xl">{item.name}</h3>
                        <p className="text-gray-800 font-bold text-xl">
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
            <small className="text-center text-gray-300 text-xs">
                App Icons Quelle:{' '}
                <a href="https://apps.apple.com">https://apps.apple.com</a>
            </small>
        </div>
    );
};

export default FeaturedApps;
