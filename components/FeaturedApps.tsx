import React from 'react';
import { FeaturedApp } from '../types';
import Link from 'next/link';
import { COCKPIT_ASSETS_URL } from '../constants';
import SubTitle from './SubTitle';
import Title from './Title';

interface Props {
    apps: FeaturedApp[];
    title: string;
    subTitle: string;
}

const FeaturedApps: React.FC<Props> = (props) => {
    const { apps, title, subTitle } = props;

    return (
        <div className='container mx-auto py-12 flex flex-col justify-center items-center space-y-4'>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <div className='grid grid-cols-3 divide-x'>
                {apps.map((item: FeaturedApp) => (
                    <div className='flex flex-col justify-between items-center space-y-4 p-4' key={item._id}>
                        <img className='rounded-xl shadow-md h-28 w-28' src={COCKPIT_ASSETS_URL + item.appIcon.path} alt={item.appName + ' Icon'} />
                        <h3 className='font-bold text-5xl'>{item.appName}</h3>
                        <p className='text-gray-800 font-bold text-xl'>{item.appCreator}</p>
                        <p className='text-gray-800 text-center'>{item.appDescription}</p>
                        <Link href={item.appStoreLink}>
                            <a className='font-bold text-indigo-700'>
                                <p>Im App Store anzeigen</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <small className='text-center text-gray-300 text-xs'>
                App Icons Quelle: <a href='https://apps.apple.com'>https://apps.apple.com</a>
            </small>
        </div>
    );
};

export default FeaturedApps;
