import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import React, { Fragment, useCallback, useState } from 'react';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [hasError, sethasError] = useState(false);

    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
                await axios.post(
                    process.env.NEXT_PUBLIC_ASSETS_URL + '/api/contact-forms',
                    {
                        data: { name, email, message },
                    }
                );

                setEmail('');
                setMessage('');
                setName('');
                sethasError(false);
            } catch (error) {
                console.log(error);
                sethasError(true);
            } finally {
                setIsLoading(false);
                setIsModalOpen(true);
            }
        },
        [email, message, name]
    );

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex w-full flex-col rounded-xl bg-white p-6 shadow-lg md:w-[500px]"
            >
                <label className="px-2 text-sm" htmlFor="name">
                    Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="m-2 w-full rounded-xl bg-gray-100 p-2"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <label className="px-2 text-sm" htmlFor="email">
                    Email
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="m-2 w-full rounded-xl bg-gray-100 p-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <label className="px-2 text-sm" htmlFor="nachricht">
                    Nachricht
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="m-2 w-full rounded-xl bg-gray-100 p-2"
                    name="nachricht"
                    placeholder="Nachricht"
                />
                <div className="mx-auto mt-4">
                    <button
                        disabled={isLoading}
                        aria-label="Absenden"
                        type="submit"
                        className={`flex flex-row rounded-xl ${
                            isLoading ? 'bg-gray-500' : 'bg-indigo-700'
                        } py-3 px-6 font-bold text-white shadow-md transition-all`}
                    >
                        <p className="font-bold">
                            {isLoading ? 'Sende ...' : 'Senden'}
                        </p>
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
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
                <small className="mt-4 text-xs text-gray-400">
                    Durch das Klicken auf &#34;Senden&#34; stimmen Sie der
                    digitalen Verarbeitung Ihrer persönlichen Daten zu. Sie
                    können dem jedoch jederzeit widersprechen.
                </small>
            </form>
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={setIsModalOpen}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-md" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {hasError
                                        ? 'Es ist ein Fehler aufgetreten.'
                                        : 'Senden Erfolgreich'}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {hasError
                                            ? `Es scheint eine Feher aufetreten zu sein. Bitte verscuhen Sie es später erneut.`
                                            : `Ihre Nachricht wurde erfolgreich versendet. Bitte prüfen Sie Ihren Posteingang, um Ihre Email Adresse zu bestätigen.`}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        disabled={isLoading}
                                        aria-label="Okay"
                                        type="button"
                                        onClick={(e) => setIsModalOpen(false)}
                                        className={`flex flex-row rounded-xl bg-indigo-700 py-3 px-6 font-bold text-white shadow-md transition-all`}
                                    >
                                        <p className="font-bold">Okay</p>
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ContactForm;
