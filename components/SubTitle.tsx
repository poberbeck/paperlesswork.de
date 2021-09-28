import React from 'react';

interface Props {
    className?: string;
}

const SubTitle: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={'text-gray-800 text-lg leading-loose ' + className}>{children}</p>;
};

export default SubTitle;
