import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LessLink from '@components/LessLink';
import { useRouter } from 'next/router';
import LogoSrc from '../../../public/images/plwo_logo.svg';
import Image from 'next/image';
import MobileNavigationBar from './MobileNavigationBar';

export const menueItems = [
    { name: 'Home', link: '/' },
    { name: 'Freelancing', link: '/work' },
    { name: 'Digital Work', link: '/digital' },
    { name: 'Kontakt', link: '/contact' },
];

const NavigationBar = () => {
    const router = useRouter();

    return (
        <Menu as={Fragment}>
            {({ open }) => (
                <header className="relative z-50 mb-8 bg-gray-50 bg-opacity-60 py-3 backdrop-blur-md">
                    <nav className="container mx-auto flex items-center justify-between px-6">
                        <LessLink href="/">
                            <div className="flex items-center justify-center space-x-2 divide-x">
                                <Image
                                    height={50}
                                    width={50}
                                    src={LogoSrc}
                                    alt="Paperless Work Logo"
                                />
                                <p className="pl-2 font-black">
                                    Paperless Work
                                </p>
                            </div>
                        </LessLink>
                        <ul className="hidden md:flex">
                            {menueItems.map((item, key) => (
                                <li
                                    className="focus:outline-none"
                                    key={key + item.link}
                                >
                                    <LessLink
                                        className={`flex flex-col items-center justify-start px-4 ${
                                            router.pathname === item.link
                                                ? 'font-bold text-indigo-700'
                                                : ''
                                        }`}
                                        href={item.link}
                                    >
                                        <p>{item.name}</p>
                                        <div
                                            className={`h-[4px] ${
                                                router.pathname === item.link &&
                                                'bg-indigo-700 shadow-md'
                                            } w-2/3 rounded-full`}
                                        ></div>
                                    </LessLink>
                                </li>
                            ))}
                        </ul>
                        <MobileNavigationBar open={open} />
                        <Menu.Button as="button" className="block md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </Menu.Button>
                    </nav>
                </header>
            )}
        </Menu>
    );
};

export default NavigationBar;
