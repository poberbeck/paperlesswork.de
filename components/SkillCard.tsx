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
        <div className="flex items-start justify-start space-x-4 rounded-lg p-4 shadow-md ">
            <div className="w-auto bg-white rounded-full shadow-md p-4">
                <LocalIcon size={35} />
            </div>
            <div>
                <p className="whitespace-nowrap text-xl font-bold">
                    {skillName}
                </p>
                <p className="text-gray-800 text-sm">{skillDescription}</p>
            </div>
        </div>
    );
};

export default SkillCard;
