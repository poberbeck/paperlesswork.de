import React from 'react';

interface Props {
    title: string;
    content: string;
    date: string;
}

const SectionFooter: React.FC<Props> = (props) => {
    const { title, content, date } = props;
    return (
        <div className='w-screen z-30 flex flex-col md:flex-row p-4 md:p-10 md:max-w-2xl mx-auto pt-6'>
            <div>
                <h3 className='font-bold text-2xl'>{title}</h3>
                <p>{content}</p>
            </div>
            <div className='border-gray-200 text-gray-500 md:border-l-2 md:p-4 mt-2 w-80'>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default SectionFooter;
