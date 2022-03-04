import LessLink from '@components/LessLink';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { menueItems } from './NavigationBar';

interface Props {
    open: boolean;
}

const MobileNavigationBar: React.FC<Props> = ({ open }) => {
    const router = useRouter();

    return (
        <Transition
            show={open}
            as={Fragment}
            appear={false}
            enter="transform duration-200 transition  ease-in-out"
            enterFrom="opacity-0 translate-y-[-100%]"
            enterTo="opacity-100 translate-y-0"
            leave="transform duration-200 transition  ease-in-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-[-100%]"
        >
            <Menu.Items
                static
                as="ul"
                className="absolute top-2 right-4 left-4 z-50 block space-y-4 rounded-2xl bg-white p-4 shadow-md focus:outline-none "
            >
                <div className="flex justify-between">
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
                                className={`flex flex-col items-start justify-start px-0 ${
                                    router.pathname === item.link
                                        ? 'font-bold text-indigo-700'
                                        : active
                                        ? 'text-indigo-700'
                                        : ''
                                }`}
                                href={item.link}
                            >
                                <p>{item.name}</p>
                            </LessLink>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Transition>
    );
};

export default MobileNavigationBar;
