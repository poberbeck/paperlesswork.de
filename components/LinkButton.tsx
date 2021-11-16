import React from 'react';
import LessLink from '@components/LessLink';

interface Props {
    children: string;
    type?: 'primary' | 'white';
    href: string;
    className?: string;
}

const LinkButton: React.FC<Props> = (props) => {
    const { children, type = 'white', href, className } = props;

    return (
        <LessLink
            href={href}
            className={`px-8 py-4 text-center font-bold rounded-xl shadow-md ${
                type === 'primary'
                    ? 'bg-indigo-700 text-white'
                    : 'bg-white text-gray-800'
            } ${className}`}
        >
            {children}
        </LessLink>
    );
};

export default LinkButton;
