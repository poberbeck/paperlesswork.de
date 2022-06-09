import React, { ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
}

const SubTitle: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <p className={'text-lg leading-loose text-gray-800 ' + className}>
            {children}
        </p>
    );
};

export default SubTitle;
