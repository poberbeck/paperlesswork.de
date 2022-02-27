import React from 'react';
import * as Icons from 'react-icons/si';

interface Props {
    skillIcon: string;
    skillName: string;
    skillDescription: string;
}

const SkillCard: React.FC<Props> = (props) => {
    const { skillDescription, skillIcon, skillName } = props;

    // Because we use some kind of "hack" to get the icon, it is okay to expect and error
    // @ts-expect-error
    const LocalIcon = Icons[skillIcon];

    return (
        <div className="flex flex-col items-start justify-start space-y-4 rounded-lg p-4">
            <div className="w-auto rounded-full bg-white p-4 shadow-md">
                <LocalIcon size={35} />
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
