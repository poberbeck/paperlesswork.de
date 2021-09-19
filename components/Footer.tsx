import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-50 text-gray-400 p-5 flex flex-col space-y-4'>
            <div className='bg-gray-200 rounded-full w-full h-px'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <p className='text-black'>Seiten</p>
                    <Link href='/'>
                        <a>
                            <p>Home</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <p>Meine Arbeit</p>
                        </a>
                    </Link>
                </div>
                <div>
                    <p className='text-black'>Legal</p>
                    <Link href='/'>
                        <a>
                            <p>Impressum</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <p>Datenschutz</p>
                        </a>
                    </Link>
                </div>
            </div>
            <small>Copyright © 2021 Paperless Work | Pascal Oberbeck</small>
        </footer>
    );
};

export default Footer;
