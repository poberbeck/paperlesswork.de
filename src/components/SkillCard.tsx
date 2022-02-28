import React from 'react';
import {
    SiFlutter,
    SiNextdotjs,
    SiReact,
    SiAffinitydesigner,
} from 'react-icons/si';

interface Props {
    skillIcon:
        | 'SiFlutter'
        | 'SiNextdotjs'
        | 'SiReact'
        | 'SiAffinitydesigner'
        | string;
    skillName: string;
    skillDescription: string;
}

const SkillCard: React.FC<Props> = (props) => {
    const { skillDescription, skillIcon, skillName } = props;

    return (
        <div className="flex flex-col items-start justify-start space-y-4 rounded-lg p-4">
            <div className="w-auto rounded-full bg-white p-4 shadow-md">
                {skillIcon === 'SiFlutter' && <SiFlutter size={35} />}
                {skillIcon === 'SiNextdotjs' && <SiNextdotjs size={35} />}
                {skillIcon === 'SiReact' && <SiReact size={35} />}
                {skillIcon === 'SiAffinitydesigner' && (
                    <SiAffinitydesigner size={35} />
                )}
            </div>
            <div>
                <p className="whitespace-nowrap text-xl font-bold">
                    {skillName}
                </p>
                <p className="text-sm text-gray-800">{skillDescription}</p>
            </div>
        </div>
    );
};

export default SkillCard;
