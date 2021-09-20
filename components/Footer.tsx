import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className='bg-gray-50 text-gray-400'>
            <footer className='container mx-auto p-5 flex flex-col space-y-4'>
                <div className='bg-gray-200 rounded-full w-full h-px'></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <p className='text-black'>Seiten</p>
                        <Link href='/'>
                            <a>
                                <p>Home</p>
                            </a>
                        </Link>
                        <Link href='/work'>
                            <a>
                                <p>Meine Arbeit</p>
                            </a>
                        </Link>
                        <Link href='/contact'>
                            <a>
                                <p>Kontakt</p>
                            </a>
                        </Link>
                        <Link href='/digital'>
                            <a>
                                <p>Digital Work</p>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <p className='text-black'>Legal</p>
                        <Link href='/legal'>
                            <a>
                                <p>Impressum</p>
                            </a>
                        </Link>
                        <Link href='/privacy'>
                            <a>
                                <p>Datenschutz</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <small>Copyright © {new Date().getFullYear()} Paperless Work | Pascal Oberbeck</small>
            </footer>{' '}
        </div>
    );
};

export default Footer;
