import React from 'react';

const ContactForm = () => {
    return (
        <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex w-full flex-col rounded-xl bg-white p-6 shadow-lg md:w-[500px]"
        >
            <input
                type="hidden"
                name="apikey"
                value="d0e086f7-7921-4fca-9463-b03ded6ff6e1"
            />
            <input
                type="hidden"
                name="redirect"
                value="https://paperlesswork.de/success"
            />

            <label className="px-2 text-sm" htmlFor="name">
                Name
            </label>
            <input
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
                required
                className="m-2 w-full rounded-xl bg-gray-100 p-2"
                type="email"
                name="email"
                placeholder="Email"
            />
            <label className="px-2 text-sm" htmlFor="betreff">
                Betreff
            </label>
            <input
                required
                className="m-2 w-full rounded-xl bg-gray-100 p-2"
                type="text"
                name="betreff"
                placeholder="Betreff"
            />
            <label className="px-2 text-sm" htmlFor="nachricht">
                Nachricht
            </label>
            <textarea
                required
                rows={6}
                className="m-2 w-full rounded-xl bg-gray-100 p-2"
                name="nachricht"
                placeholder="Nachricht"
            />
            <div className="mx-auto mt-4">
                <button
                    aria-label="Absenden"
                    type="submit"
                    className="flex flex-row rounded-xl bg-indigo-700 py-3 px-6 font-bold text-white shadow-md"
                >
                    <p className="font-bold">Senden</p>
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
                Durch das Klicken auf &#34;Senden&#34; stimmen Sie der digitalen
                Verarbeitung Ihrer persönlichen Daten zu. Sie können dem jedoch
                jederzeit widersprechen.
            </small>
        </form>
    );
};

export default ContactForm;
