import React from 'react';
import * as Icons from 'react-icons/si';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface Props {
    skillIcon: string;
    skillValue: string;
    skillName: string;
    skillDescription: string;
}

const SkillBar: React.FC<Props> = (props) => {
    const { skillDescription, skillIcon, skillName, skillValue } = props;

    const LocalIcon = Icons[skillIcon];

    return (
        <div className='flex flex-col-reverse md:flex-col space-y-4'>
            <div className='shadow-md w-full h-8 rounded-full p-2 bg-gray-100'>
                <div className='bg-gradient-to-r from-indigo-700 to-purple-500 skill-bar h-full rounded-full shadow-md'></div>
            </div>
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-start'>
                <div className='flex space-x-4 items-center'>
                    <div className='w-auto'>
                        <LocalIcon size={55} />
                    </div>

                    <p className='whitespace-nowrap text-xl font-bold'>{skillName}</p>
                </div>
                <p className='text-gray-800 text-sm'>{skillDescription}</p>
            </div>
            <style jsx>{`
                .skill-bar {
                    width: ${skillValue}%;
                }
            `}</style>
        </div>
    );
};

export default SkillBar;
