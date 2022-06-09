import React from 'react';

interface Props {
    className?: string;
    children: string;
}

const Title: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h2 className={'text-4xl font-bold md:text-5xl ' + className}>
            {children}
        </h2>
    );
};

export default Title;
