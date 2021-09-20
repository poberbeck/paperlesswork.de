import React from 'react';

interface Props {
    title: string;
    subTitle: string;
    link?: string;
}

const SectionHeading: React.FC<Props> = (props) => {
    const { title, subTitle, link = null } = props;
    return (
        <div className='pb-6 w-screen z-30 flex flex-col space-y-1 justify-center items-center'>
            <h2 className='font-bold tracking-wide'>{title}</h2>
            <h3 className='font-bold text-5xl'>{subTitle}</h3>
            {link && (
                <a href={link}>
                    <p className='text-blue-600'>Open Site</p>
                </a>
            )}
        </div>
    );
};

export default SectionHeading;
