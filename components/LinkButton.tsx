import React from 'react';
import Link from 'next/link';

interface Props {
    children: string;
    type?: 'primary' | 'white';
    href: string;
    className?: string;
}

const LinkButton: React.FC<Props> = (props) => {
    const { children, type = 'white', href, className } = props;

    return (
        <Link href={href}>
            <a
                className={`px-8 py-4 text-center font-bold rounded-xl shadow-md ${
                    type === 'primary'
                        ? 'bg-indigo-700 text-white'
                        : 'bg-white text-gray-800'
                } ${className}`}
            >
                {children}
            </a>
        </Link>
    );
};

export default LinkButton;
