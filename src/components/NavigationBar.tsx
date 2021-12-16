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
                <nav className="relative container mx-auto pt-4 mb-8 px-6 flex justify-between items-center">
                    <LessLink href="/">
                        <div className="flex justify-center items-center space-x-4">
                            <Image
                                height={50}
                                width={50}
                                src={LogoSrc}
                                priority={true}
                                alt="Paperless Work Logo"
                            />
                            <p className="font-black ">Paperless Work</p>
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
                            className="focus:outline-none absolute z-50 top-2 right-4 left-4 bg-white rounded-2xl shadow-md p-4 space-y-4 block md:top-0 md:p-0 md:space-y-0 md:relative md:flex md:shadow-none md:bg-transparent"
                        >
                            <div className="flex md:hidden justify-between">
                                <p className="font-bold text-lg">Menü</p>
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
                                            className={`flex flex-col justify-start md:items-center items-start px-0 md:px-4 ${
                                                router.pathname === item.link
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
                                                } rounded-full w-2/3`}
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
            )}
        </Menu>
    );
};

export default NavigationBar;
