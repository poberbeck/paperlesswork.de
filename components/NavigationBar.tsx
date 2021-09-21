/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

const menueItems = [
    { name: 'Home', link: '/' },
    { name: 'Meine Arbeit', link: '/work' },
    { name: 'Kontakt', link: '/contact' },
];

const NavigationBar: React.FC = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='relative container mx-auto mb-8'>
            <Transition
                as={Fragment}
                show={mobileMenuOpen}
                enter='transform duration-200 transition ease-in-out'
                enterFrom='opacity-0 translate-y-[-100%]'
                enterTo='opacity-100 translate-y-0'
                leave='transform duration-200 transition ease-in-out'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-[-100%]'>
                <div className='absolute z-50 top-2 right-2 left-2 bg-white rounded-2xl shadow-md p-4'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-lg'>Menü</p>
                        <button aria-label='Menü schließen' onClick={() => setMobileMenuOpen(false)}>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                    <div className='mt-4 flex flex-col space-y-4'>
                        {menueItems.map((item, key) => (
                            <Link key={key + item.link} href={item.link}>
                                <a className='flex flex-col justify-center items-center'>
                                    <p>{item.name}</p>
                                    {router.pathname === item.link ? <div className='h-[4px] bg-indigo-700 rounded-full w-2/3'></div> : <div className='h-[4px] w-2/3'></div>}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </Transition>
            <div className='relative flex justify-between items-center p-6'>
                <Link passHref href='/'>
                    <img className='h-16 w-16' src='/images/plwo_logo.svg' alt='Paperless Work Logo' />
                </Link>
                <div className='hidden md:flex space-x-6'>
                    {menueItems.map((item, key) => (
                        <Link key={key + item.link} href={item.link}>
                            <a className='flex flex-col justify-center items-center'>
                                <p>{item.name}</p>
                                {router.pathname === item.link ? <div className='h-[4px] bg-indigo-700 rounded-full w-2/3'></div> : <div className='h-[4px] w-2/3'></div>}
                            </a>
                        </Link>
                    ))}
                </div>
                <button aria-label='Menü öffnen' onClick={() => setMobileMenuOpen(true)} className='block md:hidden'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default NavigationBar;
