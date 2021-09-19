import React from 'react';
import Link from 'next/link';

const NavigationBar: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-6'>
                // eslint-disable-next-line @next/next/no-img-element
                <img className='h-16 w-16' src='/images/plwo_logo.svg' alt='Paperless Work Logo' />
                <div className='flex space-x-6'>
                    <Link href='/'>
                        <a className='text-indigo-700'>
                            <p>Home</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <p>Meine Arbeit</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <p>Kontakt</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
