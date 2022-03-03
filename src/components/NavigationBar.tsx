import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LessLink from '@components/LessLink';
import { useRouter } from 'next/router';
import LogoSrc from '../../public/images/plwo_logo.svg';
import Image from 'next/image';

const menueItems = [
    { name: 'Home', link: '/' },
    { name: 'Freelancing', link: '/work' },
    { name: 'Digital Work', link: '/digital' },
    { name: 'Kontakt', link: '/contact' },
];

const NavigationBar = () => {
    const router = useRouter();
    const [isOnDesktop, setIsOnDesktop] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setIsOnDesktop(true);
            } else {
                setIsOnDesktop(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <Menu as={Fragment}>
            {({ open }) => (
                <div className=" mb-8 bg-gray-50 bg-opacity-60 py-3 backdrop-blur-md">
                    <nav className="container relative mx-auto flex items-center justify-between px-6">
                        <LessLink href="/">
                            <div className="flex items-center justify-center space-x-2 divide-x">
                                <Image
                                    height={50}
                                    width={50}
                                    src={LogoSrc}
                                    priority={true}
                                    alt="Paperless Work Logo"
                                />
                                <p className="pl-2 font-black">
                                    Paperless Work
                                </p>
                            </div>
                        </LessLink>
                        <Transition
                            show={open || isOnDesktop}
                            as={Fragment}
                            appear={false}
                            enter="transform duration-200 transition md:transition-none ease-in-out"
                            enterFrom="opacity-0 translate-y-[-100%]"
                            enterTo="opacity-100 translate-y-0"
                            leave="transform duration-200 transition md:transition-none ease-in-out"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-[-100%]"
                        >
                            <Menu.Items
                                static
                                as="ul"
                                className="absolute top-2 right-4 left-4 z-50 block space-y-4 rounded-2xl bg-white p-4 shadow-md focus:outline-none md:relative md:top-0 md:flex md:space-y-0 md:bg-transparent md:p-0 md:shadow-none"
                            >
                                <div className="flex justify-between md:hidden">
                                    <p className="text-lg font-bold">Menü</p>
                                    <Menu.Button as="button">
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
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </Menu.Button>
                                </div>
                                {menueItems.map((item, key) => (
                                    <Menu.Item
                                        as="li"
                                        className="focus:outline-none"
                                        key={key + item.link}
                                    >
                                        {({ active }) => (
                                            <LessLink
                                                className={`flex flex-col items-start justify-start px-0 md:items-center md:px-4 ${
                                                    router.pathname ===
                                                    item.link
                                                        ? 'font-bold text-indigo-700'
                                                        : active
                                                        ? 'text-indigo-700'
                                                        : ''
                                                }`}
                                                href={item.link}
                                            >
                                                <p>{item.name}</p>
                                                <div
                                                    className={`h-[4px] bg-transparent ${
                                                        router.pathname ===
                                                            item.link &&
                                                        'md:bg-indigo-700 md:shadow-md'
                                                    } w-2/3 rounded-full`}
                                                ></div>
                                            </LessLink>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
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
                </div>
            )}
        </Menu>
    );
};

export default NavigationBar;
