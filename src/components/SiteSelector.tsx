import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

const SiteSelector: React.FC = () => {
    const [selected, setSelected] = useState('freelancer');

    return (
        <div className='h-screen min-h-[800px] flex'>
            <div className='w-full md:w-[500px] h-full bg-blue-700 flex justify-center items-center'>
                <div className='space-y-5 flex flex-col text-white items-start'>
                    <h1 className='font-bold text-6xl'>
                        Sie
                        <br /> suchen?
                    </h1>
                    <button
                        onClick={() => setSelected('freelancer')}
                        className={`p-3 rounded-full border-2 border-white flex justify-center items-center space-x-4 ${selected === 'freelancer' ? 'bg-white text-gray-700 shadow-md' : ''}`}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                        </svg>
                        <p>Digital Freelancer</p>
                    </button>
                    <small className='text-gray-100 text-sm px-3'>Ihr Projekt ist meine Aufgabe</small>
                    <button
                        onClick={() => setSelected('advisor')}
                        className={`p-3 rounded-full border-2 border-white flex justify-center items-center space-x-4 ${selected === 'advisor' ? 'bg-white text-gray-700 shadow-md' : ''}`}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path d='M12 14l9-5-9-5-9 5 9 5z' />
                            <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                            />
                        </svg>
                        <p>Beratung</p>
                    </button>
                    <small className='text-gray-100 text-sm px-3'>Für Schüler mit Sehbehinderung</small>
                    <a href={selected} className='bg-gray-700 text-white p-3 font-bold rounded-full shadow-lg flex justify-center items-center space-x-4'>
                        <p>Seite öffnen</p>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                    </a>
                </div>
            </div>
            <div className='hidden h-full w-full md:block relative text-gray-100'>
                <img src='/assets/wave-blue-dark.svg' className='absolute top-0 left-0 h-full w-full object-cover' />
                <Transition
                    appear
                    show={selected === 'freelancer'}
                    enter='transition-opacity duration-200 delay-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
                        <div className='m-20 space-y-5 flex flex-col items-center'>
                            <h1 className='font-bold text-3xl'>Ihr Ansprechpartner für digitale Lösungen</h1>
                            <p className='max-w-md text-center'>
                                Präsentieren Sie sich im Internet, so wie Sie es sich wünschen.
                                <br />
                                Klicken Sie auf "Seite öffnen" um mehr zu erfahren.
                            </p>
                            <img className='h-1/3 object-contain' src='/assets/freelancer.svg' />
                        </div>
                    </div>
                </Transition>
                <Transition
                    appear
                    show={selected === 'advisor'}
                    enter='transition-opacity duration-200 delay-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
                        <div className='m-20 space-y-5 flex flex-col items-center'>
                            <h1 className='font-bold text-3xl'>Beratung für Schüler*innen mit Sehbehinderung</h1>
                            <p className='max-w-md text-center'>
                                Ich berate Schüler*innen mit Sehbehinderung, Eltern oder Förderlehrer aus erster Hand um das lernen trotz herausforderung einfacher zu machen.
                                <br />
                                Klicken Sie auf "Seite öffnen" um mehr zu erfahren.
                            </p>
                            <img className='h-1/3 object-contain' src='/assets/learning.svg' />
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default SiteSelector;
