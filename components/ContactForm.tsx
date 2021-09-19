import React from 'react';

const ContactForm = () => {
    return (
        <form action='https://api.web3forms.com/submit' method='POST' className='bg-white p-6 rounded-xl shadow-lg flex flex-col w-full md:w-[500px]'>
            <input type='hidden' name='apikey' value='51f0627c-7853-431c-9098-34e08ddaad15' />
            <input type='hidden' name='redirect' value='https://web3forms.com/success' />

            <label className='px-2 text-sm' htmlFor='name'>
                Name
            </label>
            <input required className='w-full m-2 p-2 rounded-xl bg-gray-100' type='text' name='name' placeholder='Name' />
            <label className='px-2 text-sm' htmlFor='email'>
                Email
            </label>
            <input required className='w-full m-2 p-2 rounded-xl bg-gray-100' type='email' name='email' placeholder='Email' />
            <label className='px-2 text-sm' htmlFor='betreff'>
                Betreff
            </label>
            <input required className='w-full m-2 p-2 rounded-xl bg-gray-100' type='text' name='betreff' placeholder='Betreff' />
            <label className='px-2 text-sm' htmlFor='nachricht'>
                Nachricht
            </label>
            <textarea required rows={6} className='w-full m-2 p-2 rounded-xl bg-gray-100' name='nachricht' placeholder='Nachricht' />
            <div className='mx-auto mt-4'>
                <button type='submit' className='bg-indigo-700 text-white py-3 px-6 flex flex-row font-bold rounded-xl shadow-md'>
                    <p className='font-bold'>Senden</p>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
            <small className='text-xs text-gray-400 mt-4'>
                Durch das klicken auf &#34;Senden&#34; stimmen Sie der digitalen verarbeitung Ihrer persönlichen Daten zu. Sie können dem jedoch jederzeit wiedersprechen.
            </small>
        </form>
    );
};

export default ContactForm;
