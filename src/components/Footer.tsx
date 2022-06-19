import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 text-gray-400">
            <div className="container mx-auto flex flex-col space-y-4 p-5">
                <div className="h-px w-full rounded-full bg-gray-200"></div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <ul>
                        <li>
                            <p className="text-black">Seiten</p>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <p>Home</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/work">
                                <a>
                                    <p>Meine Arbeit</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>
                                    <p>Kontakt</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/digital">
                                <a>
                                    <p>Digital Work</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p className="text-black">Legal</p>
                        </li>
                        <li>
                            <Link href="/legal">
                                <a>
                                    <p>Impressum</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                <a>
                                    <p>Datenschutz</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <small>
                    {`Copyright © ${new Date().getFullYear()} Paperless Work |
                    Pascal Oberbeck`}
                </small>
            </div>
        </footer>
    );
};

export default Footer;
