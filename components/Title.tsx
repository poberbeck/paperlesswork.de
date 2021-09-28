import React from 'react';

interface Props {
    className?: string;
}

const Title: React.FC<Props> = ({ children, className = '' }) => {
    return <h2 className={'font-bold text-4xl ' + className}>{children}</h2>;
};

export default Title;
