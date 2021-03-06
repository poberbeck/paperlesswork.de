import React from 'react';
import Link from 'next/link';

interface Props {
    content: string;
    link: string;
}

const DigitalInfoBar: React.FC<Props> = (props) => {
    const { content, link } = props;
    return (
        <div className="container mx-auto mb-8 px-4">
            <div className="flex flex-col items-center justify-between space-y-3 rounded-2xl bg-gradient-to-tr from-indigo-700 to-pink-700 p-1 shadow-2xl md:flex-row md:space-y-0">
                <div className="flex items-center space-x-4 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-4 h-10 w-10 md:h-6 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                    <p className="font-bold">{content}</p>
                </div>
                <Link href={link}>
                    <a className="flex items-center space-x-2 rounded-2xl bg-white px-4 py-2 text-pink-700">
                        <p>Hier klicken</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default DigitalInfoBar;
